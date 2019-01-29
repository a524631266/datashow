import moment,{ DurationInputObject, Moment } from "moment";
import { onehour, fifteenminute, oneday } from './../../config/initOptions';
import Highcharts, { Options } from 'highcharts';
import $ from "jquery";
// import "highcharts/modules/exporting.js";
// import "./dependentjs/map";
import PubSub from 'pubsub-js';
import { HeatmapChart, HeatmapChartTrans } from '@/types/postreturnform';
moment.locale('zh-cn');
// tslint:disable-next-line:class-name
interface heatmapData {
    x: string;
    name: string;
    y: number;
    value: number;
}

interface Xmaptime {
    [x: string]: number;
}

interface Timemapx {
    [x: number]: string;
}

interface Namemap {
    [x: string]: string;
}
export interface HeatMapLimiter {
    scale: number;
}
function transminute(n: number): string {
    let ylabelname = "";
    const num = n % 4;
    // tslint:disable-next-line:no-bitwise
    const hour = n / 4 | 0;
    const hourprefix = hour<10?("0"+hour):hour;
    switch (num) {
        case 0:
            ylabelname = hourprefix + ":00";
            break;
        case 1:
            ylabelname = hourprefix + ":15";
            break;
        case 2:
            ylabelname = hourprefix + ":30";
            break;
        case 3:
            ylabelname = hourprefix + ":45";
            break;
        default:
            break;
    }
    return ylabelname;
}

function getSortedList(listdata: HeatmapChartTrans): { timelist: number[],inittimelist: number[]} {
    const timelist: number[] = [];
    const inittimelist: number[] = [];
    // tslint:disable-next-line:forin
    for (const i in listdata) {
        const time = listdata[i].time;
        if(!(timelist.indexOf(time) >= 0)) {
            timelist.push(time);
        }
    }
    timelist.sort(
        (a: number,b: number) => {
            return a - b;
        }
    );
    timelist.forEach(
        (value: number,index: number) => {
            inittimelist.push( 1364774400000 + index * 24 * 60 * 60 * 1000);
        }
    );
    // console.log("timelist",timelist);
    // console.log("inittimelist",inittimelist);
    return {timelist,inittimelist};
}
function getTheFirstTS(timelist: number[],time: number): number {
    let time1 = 0;
    timelist.forEach(
        (value: number, index: number) => {
            // tslint:disable-next-line:no-debugger
            // debugger;
            if(timelist[index +1] !== undefined && time > value && time <= timelist[index +1] ) {
                time1 = timelist[index +1];
                // console.log("time1",time1);
            }
            if (index === 0 && time <= value) {
                time1 = value;
            }
            // console.log("timelist",timelist, time);
        }
    );
    return time1;
}
// let heatmapmovefunction: any;
// let heatmaprefreshfunction: any;
export const drawHeatmapOptions = (listdata: HeatmapChartTrans, title: string, redrawEntityFunc: any, openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void,limiter: HeatMapLimiter) => {// redrawEntityFunc(entityid)
    // var title = "用电"
    // var listdata= [{x:123456,y:0,value:200},{x:123456,y:1,value:200},{x:123456,y:3,value:200},{x:1222356,y:23,value:200},{x:1234567,y:3,value:200}]
    const xmaptime: Xmaptime = {};
    // 代表时间与x的映射
    const timemapx: Timemapx = {};
    const namemap: Namemap = {};
    const {timelist,inittimelist} = getSortedList(listdata);

    // tslint:disable-next-line:forin
    for (const i in listdata) {
        xmaptime[listdata[i].id] = 0;
    }
    const xlist = Object.keys(xmaptime);
    const len = xlist.length;
    const min = 1364774400000;
    const max = 1364774400000 + (len - 1) * 1000 * 60 * 60 * 24;
    let startmin = 0;
    let endmax = 0;
    xlist.forEach(
        (value, i) => {
            // const id = xlist[i];
            xmaptime[value] = min + i * 1000 * 60 * 60 * 24;
            timemapx[min + i * 1000 * 60 * 60 * 24] = value;
        }
    );
    const newdatalist = [];
    // tslint:disable-next-line:forin
    for (const i in listdata) {
        const id = listdata[i].id;
        const name = listdata[i].name;
        const time = listdata[i].time;
        newdatalist.push({ x: inittimelist[timelist.indexOf(time)], y: xlist.indexOf(id), value: listdata[i].value });
        namemap[id] = name;
        if(startmin === 0  || startmin > time) {
            startmin = time;
        }
        if(startmin === 0  || endmax < time) {
            endmax = time;
        }
    }
    const tickPositions: number[] = [];
    timelist.forEach(
        (value: number,index: number) => {
            if(moment(value).format("HH:mm") === "00:00") {
                tickPositions.push(inittimelist[index]);
            }
        }
    );
    // console.log("timelist",timelist);
    // console.log("newdatalist",newdatalist);
    // console.log("xlist",xlist); // xlist [""977875", "977885", "977985", "978005", "978015", "978025", "1201015", "1201605", "1201615", "1201625", "1204035", "1204045", "1204085", ""]
    // console.log("xmaptime",xmaptime);
    // console.log("namemap",namemap);
    // console.log(Date.UTC(moment(startmin).year(), moment(startmin).month(), moment(startmin).day()));
    // console.log(moment(startmin).year(),moment(startmin).month(),moment(startmin).day());
    // console.log("inittimelist",inittimelist);
    // (window as any).moment = moment;
    // (window as any).newdatalist = newdatalist;
    return {
        // data: {
        //   csv: document.getElementById('csv').innerHTML
        // },
        chart: {
            type: 'heatmap',
            // inverted: true,
            backgroundColor: 'rgba(0,0,0,0)',
            zoomType: 'x',
            panKey : 'ctrl',
            events: {
                render() {
                    const xAxis = (this as any).yAxis[0];
                    const chart = (this as any);
                    // console.log("1");
                    console.log("xAxis",xAxis,this);
                    // console.log("11111111",xAxis.labelGroup)
                    // tslint:disable-next-line:only-arrow-functions
                    const overlabel2showinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseover',(e) => {
                        // 将原生事件添加上 chartX 和 chartY 值
                        e = chart.pointer.normalize(e);
                        // e.stopPropagation();
                        const categories = xAxis.categories;
                        // 计算x轴的坐标位置
                        let key = 0;
                        let brothers = null;
                        if ($((e as any).target)[0].tagName.toLowerCase() === "tspan") {
                            brothers = $((e as any).target).parent().parent().children();
                            // tslint:disable-next-line:radix
                            key = $((e as any).target).parent().index();// xAxisa 轴的位置
                            // console.log("tspan",index)
                        } else {
                            brothers = $((e as any).target).parent().children();
                            // tslint:disable-next-line:radix
                            key = $((e as any).target).index();// xAxisa 轴的位置
                        }
                        const len = brothers.length;
                        // 计算index位置为第几大
                        let index = 0;
                        for (let i = 0; i < len; i++) {
                            const domid: string = brothers[i];
                            let beforid: string | undefined = $(domid).attr("y");
                            let nowid: string | undefined = $(brothers[key]).attr("y");
                            if(beforid === undefined) {
                                beforid = "";
                            }
                            if(nowid === undefined) {
                                nowid = "";
                            }
                            // tslint:disable-next-line:radix
                            if (parseInt(beforid) < parseInt(nowid)) {
                                index += 1;
                                // console.log("22222")
                            } else {
                                // console.log("3333")
                            }
                        }
                        // 修正一下
                        const clientX = (e as any).clientX;
                        const clientY = (e as any).clientY;
                        // console.log(namemap[xlist[index]],categories[index]);
                        // console.log("e.target", (e as any).target.style.left,(e as any).target.style.top,(e as any).target.style.width,(e as any).target.style.height);
                        // console.log("e.target", (e as any).target.getBoundingClientRect(),e);
                        // 先隐藏 ###########
                        openInfo(xlist[index],namemap[xlist[index]],clientX,clientY,(e as any).target.getBoundingClientRect());
                        // infoObject.createNewInfoDiv(categories[index], namemap[xlist[index]], clientX, clientY, redrawEntityFunc, openInfo);
                    });};
                    const overlabel2hideinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseleave', (e) => {
                        // 将原生事件添加上 chartX 和 chartY 值
                        // const timeoutid = setTimeout(() => { infoObject.hiddenInfo()}, 300);
                        // infoObject.setTimeoutId(timeoutid);
                        // console.log("leave");
                        PubSub.publish("hidetooltip","none");
                    });};
                    const clickShowTooltip = () => {
                        Highcharts.addEvent(chart.series[0].canvas,"click",(e)=> {
                            console.log("eee",e);
                        });
                    };
                    clickShowTooltip();
                    if(xAxis.visible) {
                        overlabel2showinfo();
                        overlabel2hideinfo();
                        // setTimeout(overlabel2showinfo,20);
                        // setTimeout(overlabel2hideinfo,20);
                    }
                },
                // click(event: any) {
                //     console.log("event",event, namemap , xlist ,timelist);
                // }
            }
        },
        title: {
            // text: title,
            text: null,
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: "white"
            }
        },
        legend: {
            y:20,
        },
        xAxis: {
            type: 'datetime',
            // min: Date.UTC(moment(inittimelist[0]).year(), moment(inittimelist[0]).month(), moment(inittimelist[0]).day()),
            // max: Date.UTC(moment(inittimelist[inittimelist.length-1]).year(), moment(inittimelist[inittimelist.length-1]).month(), moment(inittimelist[inittimelist.length-1]).day()),
            min: inittimelist[0],
            max: inittimelist[inittimelist.length-1],
            dateTimeLabelFormats : {
                millisecond : "%Y-%m-%d<br/>%H:%M:%S.%L",
                second : '%Y-%m-%d<br/>%H:%M:%S',
                minute : '%Y-%m-%d<br/>%H:%M',
                hour : '%Y-%m-%d<br/>%H:%M',
                day : '%Y<br/>%m-%d',
                week : '%Y<br/>%m-%d',
                month : '%Y-%m',
                year : '%Y'
            },
            labels: {
                // align: 'left',
                // x: 5,
                // y: 14,
                // format: '{value:%B}', // long month
                style: {
                    color: "white"
                },
                // step: 4,
                // formatter(a: { pos: number, isFirst: any, axis: { paddedTicks: any, tickPositions: any},value: number}) {
                //     const chartWidth  = (this as any).chart.chartWidth;
                //     const arr = a.axis.paddedTicks;
                //     const selectxarr = a.axis.tickPositions;
                //     const initts = a.value; // 1365465600000
                //     const readlytime = timelist[inittimelist.indexOf(getTheFirstTS(inittimelist, initts))]; // 1515155151515
                //     const index = arr.indexOf(a.pos); // 当前x轴的刻度第几个
                //     const realintervaltime  =  timelist[1] - timelist[0];
                //     let basenum = 6;
                //     let maxLength = 24;
                //     if (chartWidth / window.innerWidth < 0.25) {
                //         basenum = 12;
                //     }
                //     if( realintervaltime === 15 * 60 * 1000) {
                //         basenum = basenum * 4;
                //         maxLength = maxLength * 4 ;
                //     }
                //     const hourEven = index % basenum === 0;
                //     // console.log("hourEven",hourEven, "arr", "a",a,moment(readlytime).format('HH:mm'),realintervaltime);
                //     if (moment(readlytime).format('HH:mm') === "00:00") {
                //         return "<span style='color:lightgreen;font-weight: 800;'>" + moment(readlytime).format('MM-DD') + "</span>";
                //     }
                //     if (a.isFirst) {
                //         return "<span style='color:lightgreen;font-weight: 800;'>" + moment(readlytime).format('MM-DD HH:mm') + "</span>";
                //     }
                //     if(hourEven) {
                //         return moment(readlytime).format('HH:mm');
                //     }
                //     if (selectxarr.length < maxLength) { // 太少的时候 当小于1天的时候
                //         return moment(readlytime).format('HH:mm');
                //     }
                //     return "";
                //     // return "";
                //     // return (this as any).value.slice(0, 5) + "";
                // },
                formatter() {
                    // console.log(this,"2222222222222",timemapx[this.value])
                    // console.log(inittimelist,timelist,(this as any).value);
                    // console.log("(this as any)",(this as any));
                    const initts = (this as any).value; // 1365465600000
                    // console.log("getTheFirstTS(inittimelist, initts)",getTheFirstTS(inittimelist, initts));
                    const readlytime = timelist[inittimelist.indexOf(getTheFirstTS(inittimelist, initts))];
                    // console.log("moment(readlytime).format('HH:mm')",moment(readlytime).format('HH:mm'),readlytime);
                    if (moment(readlytime).format('HH:mm') === "00:00") {
                        return moment(readlytime).format('MM-DD');
                    }
                    return moment(readlytime).format('HH:mm');
                    // return (this as any).value.slice(0, 5) + "";
                },
                // rotation: -75,
            },
            // tickPositions: inittimelist,
            showLastLabel: true,
            // tickLength: 16
            // tickInterval: 24 * 60 * 60 * 1000, // 相当于 1天多少格子但是要保证 零点得来
        },
        yAxis: {
            type: "category",
            title: {
                text: null
            },
            labels: {
                formatter() {
                    // console.log(this,"2222222222222",timemapx[this.value])
                    // console.log(namemap,timemapx,(this as any).value);
                    // console.log("(this as any)",(this as any));
                    return namemap[xlist[(this as any).value]].slice(0, 5) + "";
                    // return (this as any).value.slice(0, 5) + "";
                },
                style: {
                    color: "white"
                }
            },
            minPadding: 0,
            maxPadding: 0,
            startOnTick: false,
            endOnTick: false,
            // tickPositions: [0, 6, 12, 18, 24],
            tickWidth: 1,
            min: 0,
            max: xlist.length - 1,
            reversed: true,
            gridLineWidth: 0,
        },
        tooltip: {
            // shared: false,
            headerFormat: null,
            useHTML: true,
            pointFormatter(): string {
                // console.log((this as any).options.y,(this as any).options.x);
                const x = (this as any).options.x; // 1365465600000
                const y = (this as any).options.y; // 0 1 2 3
                const value = (this as any).options.value;
                const entityname = namemap[xlist[y]];
                const readlytime = timelist[inittimelist.indexOf(x)];
                const router = `<br/><a onclick="leafrouter2home('${xlist[y]}','${entityname}')" href="#">图表</a> <a onclick="leafrouter2info('${xlist[y]}','${entityname}')" href="#">用户信息</a>`;
                if (limiter.scale === fifteenminute) {
                    return "配电柜 : " + entityname + "<br/> time:" + moment(readlytime).format('YYYY-MM-DD HH:mm') + "<br/>value:" + value + router;
                } else if (limiter.scale === onehour) {
                    return "配电柜 : " + entityname + "<br/> time:" + moment(readlytime).format('YYYY-MM-DD HH:mm') + "<br/>value:" + value + router;
                } else if (limiter.scale === oneday) {
                    return "配电柜 : " + entityname + "<br/> time:" + moment(readlytime).format('YYYY-MM-DD MM-DD') + "<br/>value:" + value + router;
                }
                return "";
            }
        },
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [1, '#c4463a']
            ],
            // min:-1,
            // max:1,
            // min: -5,
            min: -3,
            max: 3,
            className: "heatmaplegend"
        },
        series: [{
            nullColor: '#EFEFEF',
            data: newdatalist,
            borderWidth: 0,
            colsize: 24 * 36e5, // one day
            turboThreshold: Number.MAX_VALUE,
        }],
        credits: {
            enabled: false
        },
        plotOptions: {
            series:{
              events:{
                click(event: any) {
                    // console.log("object",(this as any).chart.tooltip);
                    if((this as any).chart.tooltip.move) {
                        (this as any).chart.tooltip.move = undefined;
                        // tslint:disable-next-line:no-empty
                        (this as any).chart.tooltip.refresh = () => {
                            // console.log((this as any).chart.tooltip.isHidden);
                            // 在开启的情况下仍然显示图例
                            if(!(this as any).chart.tooltip.isHidden) {
                                (this as any).chart.tooltip.isHidden = true;
                            }
                        };
                    } else {
                        (this as any).chart.tooltip.move = (this as any).chart.tooltip.__proto__.move;
                        (this as any).chart.tooltip.refresh =  (this as any).chart.tooltip.__proto__.refresh;
                        // console.log("heatmaprefreshfunction2",heatmaprefreshfunction);
                        // console.log("222");
                    }
                }
              }
            }
          },
    };
};

// export const drawHeatmapOptions = (listdata: HeatmapChartTrans, title: string, redrawEntityFunc: any, openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void,limiter: HeatMapLimiter) => {// redrawEntityFunc(entityid)
//     // var title = "用电"
//     // var listdata= [{x:123456,y:0,value:200},{x:123456,y:1,value:200},{x:123456,y:3,value:200},{x:1222356,y:23,value:200},{x:1234567,y:3,value:200}]
//     const xmaptime: Xmaptime = {};
//     // 代表时间与x的映射
//     const timemapx: Timemapx = {};
//     const namemap: Namemap = {};
//     const timelist = getSortedList(listdata);

//     // tslint:disable-next-line:forin
//     for (const i in listdata) {
//         xmaptime[listdata[i].id] = 0;
//     }
//     const xlist = Object.keys(xmaptime);
//     const len = xlist.length;
//     const min = 1364774400000;
//     const max = 1364774400000 + (len - 1) * 1000 * 60 * 60 * 24;
//     // tslint:disable-next-line:forin
//     // for (const i in xlist) {
//     //     const id = xlist[i];
//     //     xmaptime[id] = min + i * 1000 * 60 * 60 * 24;
//     //     timemapx[min + i * 1000 * 60 * 60 * 24] = id;
//     // }
//     xlist.forEach(
//         (value, i) => {
//             // const id = xlist[i];
//             xmaptime[value] = min + i * 1000 * 60 * 60 * 24;
//             timemapx[min + i * 1000 * 60 * 60 * 24] = value;
//         }
//     );
//     const newdatalist = [];
//     // tslint:disable-next-line:forin
//     for (const i in listdata) {
//         const id = listdata[i].id;
//         const name = listdata[i].name;
//         newdatalist.push({ x: xmaptime[id], y: timelist.indexOf(listdata[i].time), value: listdata[i].value, name });
//         namemap[id] = name;
//     }
//     console.log("timelist",timelist);
//     console.log("newdatalist",newdatalist);
//     console.log("xlist",xlist); // xlist [""977875", "977885", "977985", "978005", "978015", "978025", "1201015", "1201605", "1201615", "1201625", "1204035", "1204045", "1204085", ""]
//     console.log("xmaptime",xmaptime);
//     // console.log("newdatalist",newdatalist);
//     return {
//         // data: {
//         //   csv: document.getElementById('csv').innerHTML
//         // },
//         chart: {
//             type: 'heatmap',
//             inverted: true,
//             backgroundColor: 'rgba(0,0,0,0)',
//             zoomType: 'y',
//             events: {
//                 render() {
//                     const xAxis = (this as any).xAxis[0];
//                     const chart = (this as any);
//                     // console.log("1");
//                     // console.log("xAxis",xAxis);
//                     // console.log("11111111",xAxis.labelGroup)
//                     // tslint:disable-next-line:only-arrow-functions
//                     const overlabel2showinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseover',(e) => {
//                         // 将原生事件添加上 chartX 和 chartY 值
//                         e = chart.pointer.normalize(e);
//                         e.stopPropagation();
//                         const categories = xAxis.categories;
//                         // 计算x轴的坐标位置
//                         let key = 0;
//                         let brothers = null;
//                         if ($((e as any).target)[0].tagName.toLowerCase() === "tspan") {
//                             brothers = $((e as any).target).parent().parent().children();
//                             // tslint:disable-next-line:radix
//                             key = $((e as any).target).parent().index();// xAxisa 轴的位置
//                             // console.log("tspan",index)
//                         } else {
//                             brothers = $((e as any).target).parent().children();
//                             // tslint:disable-next-line:radix
//                             key = $((e as any).target).index();// xAxisa 轴的位置
//                         }
//                         const len = brothers.length;
//                         // 计算index位置为第几大
//                         let index = 0;
//                         for (let i = 0; i < len; i++) {
//                             const domid: string = brothers[i];
//                             let beforid: string | undefined = $(domid).attr("y");
//                             let nowid: string | undefined = $(brothers[key]).attr("y");
//                             if(beforid === undefined) {
//                                 beforid = "";
//                             }
//                             if(nowid === undefined) {
//                                 nowid = "";
//                             }
//                             // tslint:disable-next-line:radix
//                             if (parseInt(beforid) < parseInt(nowid)) {
//                                 index += 1;
//                                 // console.log("22222")
//                             } else {
//                                 // console.log("3333")
//                             }
//                         }
//                         // 修正一下
//                         const clientX = (e as any).clientX;
//                         const clientY = (e as any).clientY;
//                         // console.log(namemap[xlist[index]],categories[index]);
//                         // console.log("e.target", (e as any).target.style.left,(e as any).target.style.top,(e as any).target.style.width,(e as any).target.style.height);
//                         // console.log("e.target", (e as any).target.getBoundingClientRect(),e);
//                         // 先隐藏 ###########
//                         openInfo(categories[index],namemap[xlist[index]],clientX,clientY,(e as any).target.getBoundingClientRect());
//                         // infoObject.createNewInfoDiv(categories[index], namemap[xlist[index]], clientX, clientY, redrawEntityFunc, openInfo);
//                     });};
//                     const overlabel2hideinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseleave', (e) => {
//                         // 将原生事件添加上 chartX 和 chartY 值
//                         // const timeoutid = setTimeout(() => { infoObject.hiddenInfo()}, 300);
//                         // infoObject.setTimeoutId(timeoutid);
//                         // console.log("leave");
//                         PubSub.publish("hidetooltip","none");
//                     });};
//                     if(xAxis.visible) {
//                         overlabel2showinfo();
//                         overlabel2hideinfo();
//                         // setTimeout(overlabel2showinfo,20);
//                         // setTimeout(overlabel2hideinfo,20);
//                     }
//                 },
//                 // render() {
//                 //     // 先隐藏 ###########
//                 //     // infoObject.hiddenInfo();
//                 // }
//             }
//         },
//         title: {
//             // text: title,
//             text: null,
//             align: 'center',
//             style: {
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: "white"
//             }
//         },
//         legend: {
//             y:20,
//         },
//         // legend: {
//         //     title: {
//         //         text: title,
//         //         style: {
//         //             color: 'white'
//         //         },
//         //     },
//         //     backgroundColor: '#303030',
//         //     // borderColor: '#ffffff',
//         //     borderWidth: 2,
//         //     borderRadius: 0,
//         //     // shadow: true,
//         //     itemStyle: {
//         //         color: '#C1FFC1',
//         //         fontWeight: 'bold'
//         //     },
//         //     y:20,
//         // },
//         // subtitle: {
//         //   text: 'Temperature variation by day and hour through April 2013',
//         //   align: 'left'
//         // },
//         xAxis: {
//             type: "category",
//             tickInterval: 60 * 60 * 24 * 1000,// 以一天为单位，也就是不同个
//             min: min - 12 * 60 * 60 * 1000,
//             max: max + 12 * 60 * 60 * 1000,
//             labels: {
//                 // enabled:false,
//                 formatter() {
//                     // console.log(this,"2222222222222",timemapx[this.value])
//                     // console.log(namemap,timemapx,(this as any).value);
//                     return (this as any).value.slice(0, 5) + "";
//                 },
//                 style: {
//                     color: "white"
//                 }
//             },
//             gridLineWidth: 0,
//             categories: xlist, // 这个要确保为[id,id,id] 而不是名字
//             tickmarkPlacement: "on",
//             gridLineColor: 'rgba(0,0,0,0)'
//             // type:"category",
//             // tickPositioner:function(a,b,c){
//             //   console.log(this,a,b,c)
//             //   return this.tickPositions
//             // }
//         },
//         yAxis: {
//             type: "category",
//             title: {
//                 text: null
//             },
//             labels: {
//                 // format: '{value}:00',
//                 style: {
//                     color: "white"
//                 },
//                 formatter(a: { pos: number; }) {
//                     const chartWidth = (this as any).chart.chartWidth;
//                     // tslint:disable-next-line:radix
//                     // 逻辑1
//                     // const hourvalue = parseInt((this as any).value);
//                     // 逻辑2
//                     // tslint:disable-next-line:radix
//                     const ind = parseInt((this as any).value);
//                     const time = timelist[ind];
//                     let hourvalue = moment(time).format('HH:mm');
//                     if (hourvalue === "00:00") {
//                         hourvalue = moment(time).format('MM-DD');
//                     }
//                     // console.log(chartWidth,this.chart,a,b,c)
//                     if (limiter.scale === onehour) {
//                         if (chartWidth / window.innerWidth < 0.25) {// 小图
//                             return a.pos % 2 === 0 ? hourvalue  : "";
//                         } else {
//                             return hourvalue ;
//                         }
//                     } else if(limiter.scale === fifteenminute) {
//                         if (chartWidth / window.innerWidth < 0.25) {// 小图
//                             // return a.pos % 4 === 0 ? transminute(hourvalue) : "";
//                             return a.pos % 4 === 0 ? hourvalue : "";
//                         } else {
//                             // return transminute(hourvalue);
//                             return hourvalue;
//                         }
//                     } else if ( limiter.scale === oneday) {
//                         return hourvalue;
//                     }
//                 }
//             },
//             minPadding: 0,
//             maxPadding: 0,
//             startOnTick: false,
//             endOnTick: false,
//             // tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
//             tickWidth: 1,
//             min: 0,
//             max: 23,
//             gridLineWidth: 0,
//             gridLineColor: 'rgba(0,0,0,0)',
//         },
//         tooltip: {
//             headerFormat: title + '<br/>',
//             pointFormatter(): string {
//                 // console.log(this,a,b,c)
//                 const x = timemapx[(this as any).options.x];
//                 const y = (this as any).options.y;
//                 const value = (this as any).options.value;
//                 if (limiter.scale === fifteenminute) {
//                     return "配电柜ID : " + x + "<br/> time:" + transminute(y) + "<br/>value:" + value;
//                 } else if (limiter.scale === onehour) {
//                     return "配电柜ID : " + x + "<br/> time:" + y + ":00" + "<br/>value:" + value;
//                 } else if (limiter.scale === oneday) {
//                     return "配电柜ID : " + x + "<br/> time:" + moment(timelist[y]).format('MM-DD') + "<br/>value:" + value;
//                 }
//                 return "";
//             }
//         },
//         colorAxis: {
//             stops: [
//                 [0, '#3060cf'],
//                 [0.5, '#fffbbc'],
//                 [1, '#c4463a']
//             ],
//             // min:-1,
//             // max:1,
//             // min: -5
//             className: "heatmaplegend"
//         },
//         series: [{
//             data: newdatalist,
//             borderWidth: 0,
//             colsize: 24 * 36e5, // one day
//         }],
//         credits: {
//             enabled: false
//         }
//     };
// };
// export const drawHeatmapEchartOptions = (listdata: HeatmapChartTrans, title: string) => {


//     return
// }

// tslint:disable-next-line:object-literal-key-quotes
export const listdata = [{ "id": "881688", "name": "3号配电柜", "time": 0, "value": 1.2814207286384856 }, { "id": "881688", "name": "3号配电柜", "time": 1, "value": 0.5356221658900364 }, { "id": "881688", "name": "3号配电柜", "time": 2, "value": 0.1435792868673981 }, { "id": "881688", "name": "3号配电柜", "time": 3, "value": 1.5057600187828823 }, { "id": "881688", "name": "3号配电柜", "time": 4, "value": 1.3302741157750824 }, { "id": "881688", "name": "3号配电柜", "time": 5, "value": 1.3747244407392978 }, { "id": "881688", "name": "3号配电柜", "time": 6, "value": 1.3676378809920369 }, { "id": "881688", "name": "3号配电柜", "time": 7, "value": 0.049216292253825324 }, { "id": "881688", "name": "3号配电柜", "time": 8, "value": -0.5647665025475267 }, { "id": "881688", "name": "3号配电柜", "time": 9, "value": 0.20611672065678333 }, { "id": "881688", "name": "3号配电柜", "time": 10, "value": 2.9699453533080273 }, { "id": "881688", "name": "3号配电柜", "time": 11, "value": 2.2114527237743724 }, { "id": "881688", "name": "3号配电柜", "time": 12, "value": -0.12629049079548593 }, { "id": "881688", "name": "3号配电柜", "time": 13, "value": 0.573262329725564 }, { "id": "881688", "name": "3号配电柜", "time": 14, "value": -0.1926384253430764 }, { "id": "881688", "name": "3号配电柜", "time": 15, "value": -0.6454166029432497 }, { "id": "881688", "name": "3号配电柜", "time": 16, "value": -0.9670591303909359 }, { "id": "881688", "name": "3号配电柜", "time": 17, "value": 0.1503554356767005 }, { "id": "881688", "name": "3号配电柜", "time": 18, "value": -0.8259434140004505 }, { "id": "881688", "name": "3号配电柜", "time": 19, "value": 0.46819300316594853 }, { "id": "881688", "name": "3号配电柜", "time": 20, "value": -0.5570377419942654 }, { "id": "881688", "name": "3号配电柜", "time": 21, "value": 0.7381449614014147 }, { "id": "881688", "name": "3号配电柜", "time": 22, "value": -0.2973874415585431 }, { "id": "881688", "name": "3号配电柜", "time": 23, "value": 2.9812121938884877 }, { "id": "881635", "name": "4号配电柜", "time": 0, "value": 3.6970108880568167 }, { "id": "881635", "name": "4号配电柜", "time": 1, "value": 3.96743393813589 }, { "id": "881635", "name": "4号配电柜", "time": 2, "value": 3.793098426589134 }, { "id": "881635", "name": "4号配电柜", "time": 3, "value": 3.8423634118466654 }, { "id": "881635", "name": "4号配电柜", "time": 4, "value": 4.421449403987604 }, { "id": "881635", "name": "4号配电柜", "time": 5, "value": 3.9738451080150825 }, { "id": "881635", "name": "4号配电柜", "time": 6, "value": 4.0119001292311465 }, { "id": "881635", "name": "4号配电柜", "time": 7, "value": 4.029839862468328 }, { "id": "881635", "name": "4号配电柜", "time": 8, "value": 3.703411363638587 }, { "id": "881635", "name": "4号配电柜", "time": 9, "value": 4.633585161070615 }, { "id": "881635", "name": "4号配电柜", "time": 10, "value": 3.732044294968971 }, { "id": "881635", "name": "4号配电柜", "time": 11, "value": 3.1058691285907107 }, { "id": "881635", "name": "4号配电柜", "time": 12, "value": 2.678369539537336 }, { "id": "881635", "name": "4号配电柜", "time": 13, "value": 2.776048142117726 }, { "id": "881635", "name": "4号配电柜", "time": 14, "value": 2.0785377819430155 }, { "id": "881635", "name": "4号配电柜", "time": 15, "value": 3.211311417557718 }, { "id": "881635", "name": "4号配电柜", "time": 16, "value": 2.4600379844567137 }, { "id": "881635", "name": "4号配电柜", "time": 17, "value": 3.3363067062740526 }, { "id": "881635", "name": "4号配电柜", "time": 18, "value": 3.2080764345552772 }, { "id": "881635", "name": "4号配电柜", "time": 19, "value": 6.835087894330014 }, { "id": "881635", "name": "4号配电柜", "time": 20, "value": 3.6878685404084255 }, { "id": "881635", "name": "4号配电柜", "time": 21, "value": 4.2407361303790285 }, { "id": "881635", "name": "4号配电柜", "time": 22, "value": 3.2796219247004768 }, { "id": "881635", "name": "4号配电柜", "time": 23, "value": 3.5869810259988117 }, { "id": "881645", "name": "5号配电柜", "time": 0, "value": 2.981338694215455 }, { "id": "881645", "name": "5号配电柜", "time": 1, "value": 2.814392686273909 }, { "id": "881645", "name": "5号配电柜", "time": 2, "value": 2.3944490695890344 }, { "id": "881645", "name": "5号配电柜", "time": 3, "value": 2.856905860162087 }, { "id": "881645", "name": "5号配电柜", "time": 4, "value": 2.340405764694096 }, { "id": "881645", "name": "5号配电柜", "time": 5, "value": 2.832339625650532 }, { "id": "881645", "name": "5号配电柜", "time": 6, "value": 2.681427949586762 }, { "id": "881645", "name": "5号配电柜", "time": 7, "value": 2.4884445769369945 }, { "id": "881645", "name": "5号配电柜", "time": 8, "value": 3.403209932190999 }, { "id": "881645", "name": "5号配电柜", "time": 9, "value": 3.936308326015962 }, { "id": "881645", "name": "5号配电柜", "time": 10, "value": 2.6957532550069523 }, { "id": "881645", "name": "5号配电柜", "time": 11, "value": 0.8217413598498507 }, { "id": "881645", "name": "5号配电柜", "time": 12, "value": 1.2645974140189729 }, { "id": "881645", "name": "5号配电柜", "time": 13, "value": 1.7224363158858877 }, { "id": "881645", "name": "5号配电柜", "time": 14, "value": 1.8775564380364207 }, { "id": "881645", "name": "5号配电柜", "time": 15, "value": 1.7274659803615555 }, { "id": "881645", "name": "5号配电柜", "time": 16, "value": 1.9276148298756126 }, { "id": "881645", "name": "5号配电柜", "time": 17, "value": 2.054761833166831 }, { "id": "881645", "name": "5号配电柜", "time": 18, "value": 2.4514385803927117 }, { "id": "881645", "name": "5号配电柜", "time": 19, "value": 6.560416828091925 }, { "id": "881645", "name": "5号配电柜", "time": 20, "value": 2.474944045543183 }, { "id": "881645", "name": "5号配电柜", "time": 21, "value": 2.332928309017419 }, { "id": "881645", "name": "5号配电柜", "time": 22, "value": 2.5351868665403448 }, { "id": "881645", "name": "5号配电柜", "time": 23, "value": 2.513009304371536 }, { "id": "881655", "name": "6号配电柜", "time": 0, "value": 3.9911955764525877 }, { "id": "881655", "name": "6号配电柜", "time": 1, "value": 3.163552238308951 }, { "id": "881655", "name": "6号配电柜", "time": 2, "value": 3.7700821343225606 }, { "id": "881655", "name": "6号配电柜", "time": 3, "value": 3.3337075470629998 }, { "id": "881655", "name": "6号配电柜", "time": 4, "value": 2.809709149387515 }, { "id": "881655", "name": "6号配电柜", "time": 5, "value": 2.3061291743499677 }, { "id": "881655", "name": "6号配电柜", "time": 6, "value": 3.567943795984482 }, { "id": "881655", "name": "6号配电柜", "time": 7, "value": 2.9548862621561796 }, { "id": "881655", "name": "6号配电柜", "time": 8, "value": 3.903922779880912 }, { "id": "881655", "name": "6号配电柜", "time": 9, "value": 3.707663349139336 }, { "id": "881655", "name": "6号配电柜", "time": 10, "value": 4.164885280243323 }, { "id": "881655", "name": "6号配电柜", "time": 11, "value": 3.1313485204756946 }, { "id": "881655", "name": "6号配电柜", "time": 12, "value": 2.813052910547096 }, { "id": "881655", "name": "6号配电柜", "time": 13, "value": 1.7026323721114442 }, { "id": "881655", "name": "6号配电柜", "time": 14, "value": 1.8453788029667204 }, { "id": "881655", "name": "6号配电柜", "time": 15, "value": 3.468676834492734 }, { "id": "881655", "name": "6号配电柜", "time": 16, "value": 1.8562456341799598 }, { "id": "881655", "name": "6号配电柜", "time": 17, "value": 2.2321723482439735 }, { "id": "881655", "name": "6号配电柜", "time": 18, "value": 1.8663117694989704 }, { "id": "881655", "name": "6号配电柜", "time": 19, "value": 2.8445324726755032 }, { "id": "881655", "name": "6号配电柜", "time": 20, "value": 2.8468244532813887 }, { "id": "881655", "name": "6号配电柜", "time": 21, "value": 2.8470922355862944 }, { "id": "881655", "name": "6号配电柜", "time": 22, "value": 3.017478436585263 }, { "id": "881655", "name": "6号配电柜", "time": 23, "value": 2.9206742318623165 }, { "id": "881675", "name": "7号配电柜", "time": 0, "value": 3.95413572908307 }, { "id": "881675", "name": "7号配电柜", "time": 1, "value": 3.918423129539011 }, { "id": "881675", "name": "7号配电柜", "time": 2, "value": 4.294114498737079 }, { "id": "881675", "name": "7号配电柜", "time": 3, "value": 3.7558472789256263 }, { "id": "881675", "name": "7号配电柜", "time": 4, "value": 3.6586970614541694 }, { "id": "881675", "name": "7号配电柜", "time": 5, "value": 3.4372408737002242 }, { "id": "881675", "name": "7号配电柜", "time": 6, "value": 3.2643233041041113 }, { "id": "881675", "name": "7号配电柜", "time": 7, "value": 3.858792922300686 }, { "id": "881675", "name": "7号配电柜", "time": 8, "value": 3.8736284203183415 }, { "id": "881675", "name": "7号配电柜", "time": 9, "value": 4.656572464684398 }, { "id": "881675", "name": "7号配电柜", "time": 10, "value": 3.764186350721046 }, { "id": "881675", "name": "7号配电柜", "time": 11, "value": 3.232190008589111 }, { "id": "881675", "name": "7号配电柜", "time": 12, "value": 4.481695997840722 }, { "id": "881675", "name": "7号配电柜", "time": 13, "value": 3.3037613581302865 }, { "id": "881675", "name": "7号配电柜", "time": 14, "value": 3.0238276701684295 }, { "id": "881675", "name": "7号配电柜", "time": 15, "value": 3.5619403189370886 }, { "id": "881675", "name": "7号配电柜", "time": 16, "value": 3.353262423870527 }, { "id": "881675", "name": "7号配电柜", "time": 17, "value": 3.522701996691528 }, { "id": "881675", "name": "7号配电柜", "time": 18, "value": 3.4457251232209005 }, { "id": "881675", "name": "7号配电柜", "time": 19, "value": 8.647902967427713 }, { "id": "881675", "name": "7号配电柜", "time": 20, "value": 4.15059098446734 }, { "id": "881675", "name": "7号配电柜", "time": 21, "value": 3.507745333498425 }, { "id": "881675", "name": "7号配电柜", "time": 22, "value": 3.6316356980699203 }, { "id": "881675", "name": "7号配电柜", "time": 23, "value": 3.5403099895808454 }, { "id": "881615", "name": "8号配电柜", "time": 0, "value": 1.1074809103743943 }, { "id": "881615", "name": "8号配电柜", "time": 1, "value": 1.6474945257454017 }, { "id": "881615", "name": "8号配电柜", "time": 2, "value": 1.0166436398990142 }, { "id": "881615", "name": "8号配电柜", "time": 3, "value": 1.03360115951976 }, { "id": "881615", "name": "8号配电柜", "time": 4, "value": 1.5364039171482498 }, { "id": "881615", "name": "8号配电柜", "time": 5, "value": 1.034111828193458 }, { "id": "881615", "name": "8号配电柜", "time": 6, "value": 1.6388040295064967 }, { "id": "881615", "name": "8号配电柜", "time": 7, "value": 1.3237538820258243 }, { "id": "881615", "name": "8号配电柜", "time": 8, "value": 0.9274499596976172 }, { "id": "881615", "name": "8号配电柜", "time": 9, "value": 1.0140630217772066 }, { "id": "881615", "name": "8号配电柜", "time": 10, "value": 0.7359897210444257 }, { "id": "881615", "name": "8号配电柜", "time": 11, "value": -0.13393727060473842 }, { "id": "881615", "name": "8号配电柜", "time": 12, "value": 0.38895431988132306 }, { "id": "881615", "name": "8号配电柜", "time": 13, "value": 1.2908748302032382 }, { "id": "881615", "name": "8号配电柜", "time": 14, "value": 0.015448770251847033 }, { "id": "881615", "name": "8号配电柜", "time": 15, "value": 0.3019318012903239 }];
