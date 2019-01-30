import moment from 'moment';
import { ScatterChartTrans } from '@/types/postreturnform';
import { HTMLDOMElement } from 'highcharts';
// // Prepare the data
// const data: any = [];
// // const n = 1000000;
// const n = 1000000;
// for (let i = 0; i < n; i += 1) {
//     data.push([
//         // tslint:disable-next-line:radix
//         1548141286000 + parseInt(Math.pow(Math.random(), 2) * 24 * 60 *60 * 1000+ ""),
//         Math.pow(Math.random(), 2) * 100
//     ]);
// }
export const getOption = (data2: any,title: string) => {
    return {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'rgba(0,0,0,0)',
            // height: '100%'
        },
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },
        xAxis: {
            type: 'datetime',
            // min: 0,
            // max: 100,
            gridLineWidth: 0,
            labels: {
                style:{
                    color:"white"
                },
            },
        },
        yAxis: {
            // Renders faster when we don't have to compute min and max
            min: 0,
            max: 100,
            minPadding: 0,
            maxPadding: 0,
            title: {
                text: null
            },
            labels: {
                style:{
                    color:"white"
                },
            },
            gridLineWidth: 0
        },
        title: {
            text: null,
        },
        legend : {
            enabled: true,
            align : 'center',
            verticalAlign : 'bottom',
            y : 0,
            floating : false,
            itemStyle: {
              color: "#C1FFC1",
              fontWeight: 'bold'
            },
            backgroundColor: '#303030',
            // borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 0,
        },
        series: [{
            // name:"çľé",
            type: 'scatter',
            color: 'white',
            data: data2,
            marker: {
                radius: 0.2
            },
            tooltip: {
                followPointer: false,
                pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
            }
        }],
        credits: {
            enabled: false
        }
    };
};
// const rawdata: [[number,number]] = [] as any;
// for (let i = 0; i < n; i += 1) {
//     rawdata.push(
//        [
//         // tslint:disable-next-line:radix
//         1548141286000 + parseInt(Math.random() * 10 * 24 * 60 *60 * 1000+ ""),
//         Math.random() * 10
//         ]
//     );
// }
// console.log("rawdata",rawdata);
export const getEchartOption = (data2: ScatterChartTrans,iscenter: boolean) => {
    // const
    // const newdata = Array.from(data2.).map(
    //     (data: [number,number number]) => {
    //         return [data.x,data.y,data.id];
    //     }
    // );
    // Array.from(data2)
    const newdata = data2.valuelist;
    const entitylist = data2.entitylist;
    // console.log("data2",data2);
    return {
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
            show: false,
            left: 'center',
            text: ' Points',
            subtext: 'Fake data',
            textStyle: {
                color: '#eee'
            },
            subtextStyle: {
                color: '#999'
            }
        },
        tooltip: {
            trigger:'item',
            showDelay:0,
            triggerOn:'mousemove|click',
            enterable:true,
            hideDelay:200,
            position(point: number[],params: any,dom: HTMLDOMElement,rect: any,size: any) {
                // point [0,0] 点相对于容器0,0 的位置
                // console.log("point",point);
                // console.log("point parnms",params);
                // console.log("point dom",dom);
                // console.log("point rect",rect);
                // console.log("point size",size);
                const {contentSize: [tooltipwidth,tooltipheight],viewSize: [containerwidth,containerheight]} = size;
                const [pointx, pointy] = point;
                // dom.style.display="block";
                let scalex = 1;
                let scaley = 1;
                // 当tooltip提示框小于容器的0.5倍大小
                if(tooltipwidth > containerwidth * 0.4) {
                    // scalex = containerwidth / tooltipwidth;
                    scalex = 0.8;
                    scaley = 0.8;
                }
                if(tooltipheight > containerheight * 0.4) {
                    // scaley = containerheight / tooltipheight;
                    scalex = 0.8;
                    scaley = 0.8;// * containerheight / containerwidth;
                }
                let translatex = 0;
                let translatey = 0;
                if((pointx + tooltipwidth) > containerwidth) {
                    // translatex = (pointx - containerwidth) * scalex;
                    translatex = - tooltipwidth;
                }
                if((pointy + tooltipheight)> containerheight) {
                    // translatey = (pointy - containerheight) * scaley;
                    translatey = - tooltipheight;
                }
                // 偏移dom
                dom.style.transform = `scaleX(${scalex}) scaleY(${scaley}) translateX(${translatex}px) translateY(${translatey}px)`;
                // 以0,0 位置作为偏移中心
                dom.style.transformOrigin = "0px 0px";
                return point;
            },
            // alwaysShowContent:true,
            formatter(params: any, ticket: string, callback: (ticket: string, html: string) => string) {
                // console.log("params",params,callback);
                // console.log("params",this);
                const name = entitylist[params.data[2]].name;
                const id = entitylist[params.data[2]].id;
                const router = `<br/><a onclick="leafrouter2home('${id}','${name}')" href="#">图表</a> <a onclick="leafrouter2info('${id}','${name}')" href="#">用户信息</a>`;
                return moment(params.data[0]).format("YYYY-MM-DD HH:mm:ss") + "<br/>" + "name: " + name + "<br/>" + "value: " +  params.data[1] + router;
            }
        },
        toolbox: {
            show: iscenter,
            right: 20,
            iconStyle: {
                borderColor: '#eee'
            },
            feature: {
                dataZoom: [                                      // 区域缩放
                ]
            }
        },
        dataZoom: [                                      // 区域缩放
            // {
            //     // id: 'dataZoomX',
            //     show:true,                              // 是否显示 组件。如果设置为 false，不会显示，但是数据过滤的功能还存在。
            //     backgroundColor:"rgba(47,69,84,0)",  // 组件的背景颜色
            //     type: 'inside',                         // slider表示有滑动块的，inside表示内置的
            //     // dataBackground:{                        // 数据阴影的样式。
            //     //     lineStyle:mylineStyle,              // 阴影的线条样式
            //     //     areaStyle:myareaStyle,              // 阴影的填充样式
            //     // },
            //     fillerColor:"rgba(167,183,204,0.4)",  // 选中范围的填充颜色。
            //     borderColor:"#ddd",                     // 边框颜色。
            //     filterMode: 'filter',                   // 'filter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
            //                                               // 'weakFilter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。
            //                                               // 'empty'：当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
            //                                               // 'none': 不过滤数据，只改变数轴范围。
            //     xAxisIndex:[0],                            // 设置 dataZoom-inside 组件控制的 x轴,可以用数组表示多个轴
            //     // yAxisIndex:[0,2],                        // 设置 dataZoom-inside 组件控制的 y轴,可以用数组表示多个轴
            //     radiusAxisIndex:3,                       // 设置 dataZoom-inside 组件控制的 radius 轴,可以用数组表示多个轴
            //     // angleAxisIndex:[0,2],                    // 设置 dataZoom-inside 组件控制的 angle 轴,可以用数组表示多个轴
            //     start: 0,                                // 数据窗口范围的起始百分比,表示30%
            //     end: 100,                                  // 数据窗口范围的结束百分比,表示70%
            //     startValue:10,                           // 数据窗口范围的起始数值
            //     endValue:100,                            // 数据窗口范围的结束数值。
            //     orient:"horizontal",                    // 布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平。'vertical'：竖直。
            //     // zoomLock:false,                          // 是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            //     throttle:100,                             // 设置触发视图刷新的频率。单位为毫秒（ms）。
            //     zoomOnMouseWheel:true,                  // 如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
            //     moveOnMouseMove:true,                   // 如何触发数据窗口平移。true：表示不按任何功能键，鼠标移动能触发数据窗口平移。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
            //     // left:"center",                           // 组件离容器左侧的距离,'left', 'center', 'right','20%'
            //     // top:"top",                                // 组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
            //     // right:"auto",                             // 组件离容器右侧的距离,'20%'
            //     // bottom:"auto",                            // 组件离容器下侧的距离,'20%'
            // },
            // {
            //     // id: 'dataZoomY',
            //     type: 'inside',
            //     // filterMode: 'empty',
            //     // disabled:false,                         // 是否停止组件的功能。
            //     // xAxisIndex:0,                           // 设置 dataZoom-inside 组件控制的 x轴,可以用数组表示多个轴
            //     yAxisIndex:[0],                       // 设置 dataZoom-inside 组件控制的 y轴,可以用数组表示多个轴
            //     radiusAxisIndex:3,                      // 设置 dataZoom-inside 组件控制的 radius 轴,可以用数组表示多个轴
            //     // angleAxisIndex:[0,2],                   // 设置 dataZoom-inside 组件控制的 angle 轴,可以用数组表示多个轴
            //     start: 0,                               // 数据窗口范围的起始百分比,表示30%
            //     end: 100,                                  // 数据窗口范围的结束百分比,表示70%
            //     // startValue:10,                           // 数据窗口范围的起始数值
            //     // endValue:100,                            // 数据窗口范围的结束数值。
            //     orient:"vertical",                    // 布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平。'vertical'：竖直。
            //     // zoomLock:false,                          // 是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            //     throttle:100,                             // 设置触发视图刷新的频率。单位为毫秒（ms）。
            //     zoomOnMouseWheel:true,                   // 如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
            //     moveOnMouseMove:true,                    // 如何触发数据窗口平移。true：表示不按任何功能键，鼠标移动能触发数据窗口平移。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
            // }
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                // start:
            },
            {
                type: 'inside',
                show: true,
                yAxisIndex: [0],
                // start:
            },
        ],
        grid: {
            right: 30,
            bottom: 40,
            left:30,
            top:10,
        },
        // visualMap: {
        //     // min: 15202,
        //     // max: 159980,
        //     dimension: 1,
        //     orient: 'vertical',
        //     right: 10,
        //     top: 'center',
        //     text: ['HIGH', 'LOW'],
        //     calculable: true,
        //     inRange: {
        //         color: ['#f2c31a', '#24b7f2']
        //     }
        // },
        xAxis: [{
            type: "time",
            // min:1548141286000,
            // max: 1548141286000 + 10 * 24 * 60 *60 * 1000,
            scalse: false,
            axisLabel: {
                color: '#ccc',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#555'
                }
            }
        }],
        yAxis: [{
            scalse: false,
            axisLabel: {
                color: '#ccc',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#555'
                }
            },
            // max: 10,
        }],
        // dataZoom: [{
        //     type: 'inside'
        // }, {
        //     type: 'slider',
        //     showDataShadow: false,
        //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        //     handleSize: '80%',
        //     handleStyle: {
        //         color: 'white',
        //         shadowBlur: 3,
        //         shadowColor: 'rgba(0, 0, 0, 0.6)',
        //         shadowOffsetX: 2,
        //         shadowOffsetY: 2
        //     }
        // }, {
        //     type: 'inside',
        //     orient: 'vertical'
        // }, {
        //     type: 'slider',
        //     orient: 'vertical',
        //     showDataShadow: false,
        //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        //     handleSize: '80%',
        //     handleStyle: {
        //         color: 'white',
        //         shadowBlur: 3,
        //         shadowColor: 'rgba(0, 0, 0, 0.6)',
        //         shadowOffsetX: 2,
        //         shadowOffsetY: 2
        //     }
        // }],
        animation: true,
        series : [{
            type: 'scatter',
            data: newdata,
            dimensions: ['x', 'y', 'id'],
            symbolSize: 6,
            itemStyle: {
                color: 'yellow',
                opacity: 0.5
            },
            blendMode: 'lighter',
            large: true,
            largeThreshold: 500
        }]
    };
};
