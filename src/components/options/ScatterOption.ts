import moment from 'moment';
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
            name:"电流总量",
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
export const getEchartOption = (data2: any,title: string) => {
    // const
    const newdata = Array.from(data2).map(
        (data: {x: number,y: number, id: number}) => {
            return [data.x,data.y,data.id];
        }
    );
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
            formatter(params: any, ticket: string, callback: (ticket: string, html: string) => string) {
                // console.log("params",params,ticket);
                return moment(params.data[0]).format("YYYY-MM-DD HH:mm:ss") + "<br/>" + "id:" +params.data[2] + "<br/>" + "value:" +  params.data[1] ;
            }
        },
        // toolbox: {
        //     right: 20,
        //     iconStyle: {
        //         borderColor: '#eee'
        //     },
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         }
        //     }
        // },
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
            symbolSize: 4,
            itemStyle: {
                color: 'yellow',
                opacity: 0.5
            },
            blendMode: 'lighter',
            large: true,
            largeThreshold: 100
        }]
    };
};
