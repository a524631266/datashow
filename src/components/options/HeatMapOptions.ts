import Highcharts, { Options ,HeatMapChart} from 'highcharts';
import $ from "jquery";
// import "highcharts/modules/exporting.js";
import "./dependentjs/map";
import PubSub from 'pubsub-js';
import { HeatmapChart, HeatmapChartTrans } from '@/types/postreturnform';
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

export const drawHeatmapOptions = (listdata: HeatmapChartTrans, title: string, redrawEntityFunc: any, openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void) => {// redrawEntityFunc(entityid)
    // var title = "用电"
    // var listdata= [{x:123456,y:0,value:200},{x:123456,y:1,value:200},{x:123456,y:3,value:200},{x:1222356,y:23,value:200},{x:1234567,y:3,value:200}]
    const xmaptime: Xmaptime = {};
    // 代表时间与x的映射
    const timemapx: Timemapx = {};
    const namemap: Namemap = {};

    // tslint:disable-next-line:forin
    for (const i in listdata) {
        xmaptime[listdata[i].x] = 0;
    }
    const xlist = Object.keys(xmaptime);
    const len = xlist.length;
    const min = 1364774400000;
    const max = 1364774400000 + (len - 1) * 1000 * 60 * 60 * 24;
    // tslint:disable-next-line:forin
    // for (const i in xlist) {
    //     const id = xlist[i];
    //     xmaptime[id] = min + i * 1000 * 60 * 60 * 24;
    //     timemapx[min + i * 1000 * 60 * 60 * 24] = id;
    // }
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
        const id = listdata[i].x;
        const name = listdata[i].name;
        newdatalist.push({ x: xmaptime[id], y: listdata[i].y, value: listdata[i].value, name });
        namemap[id] = name;
    }
    return {
        // data: {
        //   csv: document.getElementById('csv').innerHTML
        // },
        chart: {
            type: 'heatmap',
            inverted: true,
            backgroundColor: 'rgba(0,0,0,0)',
            events: {
                render() {
                    const xAxis = (this as any).xAxis[0];
                    const chart = (this as any);
                    console.log("1");
                    console.log("xAxis",xAxis);
                    // console.log("11111111",xAxis.labelGroup)
                    // tslint:disable-next-line:only-arrow-functions
                    const overlabel2showinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseover',(e) => {
                        // 将原生事件添加上 chartX 和 chartY 值
                        console.log("122222222222");
                        e = chart.pointer.normalize(e);
                        e.stopPropagation();
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
                        console.log("11111111111");
                        openInfo(categories[index],namemap[xlist[index]],clientX,clientY,(e as any).target.getBoundingClientRect());
                        // infoObject.createNewInfoDiv(categories[index], namemap[xlist[index]], clientX, clientY, redrawEntityFunc, openInfo);
                    });};
                    const overlabel2hideinfo = ()=> {Highcharts.addEvent(xAxis.labelGroup.element, 'mouseleave', (e) => {
                        // 将原生事件添加上 chartX 和 chartY 值
                        // const timeoutid = setTimeout(() => { infoObject.hiddenInfo()}, 300);
                        // infoObject.setTimeoutId(timeoutid);
                        // console.log("leave");
                        PubSub.publish("hidetooltip","none");
                    });};
                    if(xAxis.visible) {
                        overlabel2showinfo();
                        overlabel2hideinfo();
                        // setTimeout(overlabel2showinfo,20);
                        // setTimeout(overlabel2hideinfo,20);
                    }
                },
                // render() {
                //     // 先隐藏 ###########
                //     // infoObject.hiddenInfo();
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
            title: {
                text: title,
                style: {
                    color: 'white'
                },
            },
            backgroundColor: '#303030',
            // borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 0,
            // shadow: true,
            itemStyle: {
                color: '#C1FFC1',
                fontWeight: 'bold'
            },
        },
        // subtitle: {
        //   text: 'Temperature variation by day and hour through April 2013',
        //   align: 'left'
        // },
        xAxis: {
            type: "category",
            tickInterval: 60 * 60 * 24 * 1000,// 以一天为单位，也就是不同个
            min: min - 12 * 60 * 60 * 1000,
            max: max + 12 * 60 * 60 * 1000,
            labels: {
                // enabled:false,
                formatter() {
                    // console.log(this,"2222222222222",timemapx[this.value])
                    // console.log(namemap,timemapx,(this as any).value);
                    return (this as any).value.slice(0, 5) + "...";
                },
                style: {
                    color: "white"
                }
            },
            gridLineWidth: 0,
            categories: xlist, // 这个要确保为[id,id,id] 而不是名字
            tickmarkPlacement: "on",
            // type:"category",
            // tickPositioner:function(a,b,c){
            //   console.log(this,a,b,c)
            //   return this.tickPositions
            // }
        },
        yAxis: {
            type: "category",
            title: {
                text: null
            },
            labels: {
                // format: '{value}:00',
                style: {
                    color: "white"
                },
                formatter(a: { pos: number; }) {
                    const chartWidth = (this as any).chart.chartWidth;
                    // tslint:disable-next-line:radix
                    const hourvalue = parseInt((this as any).value);
                    // console.log(chartWidth,this.chart,a,b,c)
                    if (chartWidth / window.innerWidth < 0.25) {// 小图
                        return a.pos % 2 === 0 ? hourvalue + ":00" : "";
                    } else {
                        return hourvalue + ":00";
                    }
                }
            },
            minPadding: 0,
            maxPadding: 0,
            startOnTick: false,
            endOnTick: false,
            tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            tickWidth: 1,
            min: 0,
            max: 23,
            gridLineWidth: 0
        },
        tooltip: {
            headerFormat: title + '<br/>',
            pointFormatter(): string {
                // console.log(this,a,b,c)
                const x = timemapx[(this as any).options.x];
                const y = (this as any).options.y;
                const value = (this as any).options.value;
                return "配电柜id : " + x + "<br/> 时刻:" + y + ":00" + "<br/>" + title + "量:" + value;
            }
        },
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a']
            ],
            // min: -5
        },
        series: [{
            data: newdatalist,
            borderWidth: 0,
            colsize: 24 * 36e5, // one day
        }],
        credits: {
            enabled: false
        }
    };
};

// tslint:disable-next-line:object-literal-key-quotes
export const listdata = [{ "x": "881688", "name": "3号配电柜", "y": 0, "value": 1.2814207286384856 }, { "x": "881688", "name": "3号配电柜", "y": 1, "value": 0.5356221658900364 }, { "x": "881688", "name": "3号配电柜", "y": 2, "value": 0.1435792868673981 }, { "x": "881688", "name": "3号配电柜", "y": 3, "value": 1.5057600187828823 }, { "x": "881688", "name": "3号配电柜", "y": 4, "value": 1.3302741157750824 }, { "x": "881688", "name": "3号配电柜", "y": 5, "value": 1.3747244407392978 }, { "x": "881688", "name": "3号配电柜", "y": 6, "value": 1.3676378809920369 }, { "x": "881688", "name": "3号配电柜", "y": 7, "value": 0.049216292253825324 }, { "x": "881688", "name": "3号配电柜", "y": 8, "value": -0.5647665025475267 }, { "x": "881688", "name": "3号配电柜", "y": 9, "value": 0.20611672065678333 }, { "x": "881688", "name": "3号配电柜", "y": 10, "value": 2.9699453533080273 }, { "x": "881688", "name": "3号配电柜", "y": 11, "value": 2.2114527237743724 }, { "x": "881688", "name": "3号配电柜", "y": 12, "value": -0.12629049079548593 }, { "x": "881688", "name": "3号配电柜", "y": 13, "value": 0.573262329725564 }, { "x": "881688", "name": "3号配电柜", "y": 14, "value": -0.1926384253430764 }, { "x": "881688", "name": "3号配电柜", "y": 15, "value": -0.6454166029432497 }, { "x": "881688", "name": "3号配电柜", "y": 16, "value": -0.9670591303909359 }, { "x": "881688", "name": "3号配电柜", "y": 17, "value": 0.1503554356767005 }, { "x": "881688", "name": "3号配电柜", "y": 18, "value": -0.8259434140004505 }, { "x": "881688", "name": "3号配电柜", "y": 19, "value": 0.46819300316594853 }, { "x": "881688", "name": "3号配电柜", "y": 20, "value": -0.5570377419942654 }, { "x": "881688", "name": "3号配电柜", "y": 21, "value": 0.7381449614014147 }, { "x": "881688", "name": "3号配电柜", "y": 22, "value": -0.2973874415585431 }, { "x": "881688", "name": "3号配电柜", "y": 23, "value": 2.9812121938884877 }, { "x": "881635", "name": "4号配电柜", "y": 0, "value": 3.6970108880568167 }, { "x": "881635", "name": "4号配电柜", "y": 1, "value": 3.96743393813589 }, { "x": "881635", "name": "4号配电柜", "y": 2, "value": 3.793098426589134 }, { "x": "881635", "name": "4号配电柜", "y": 3, "value": 3.8423634118466654 }, { "x": "881635", "name": "4号配电柜", "y": 4, "value": 4.421449403987604 }, { "x": "881635", "name": "4号配电柜", "y": 5, "value": 3.9738451080150825 }, { "x": "881635", "name": "4号配电柜", "y": 6, "value": 4.0119001292311465 }, { "x": "881635", "name": "4号配电柜", "y": 7, "value": 4.029839862468328 }, { "x": "881635", "name": "4号配电柜", "y": 8, "value": 3.703411363638587 }, { "x": "881635", "name": "4号配电柜", "y": 9, "value": 4.633585161070615 }, { "x": "881635", "name": "4号配电柜", "y": 10, "value": 3.732044294968971 }, { "x": "881635", "name": "4号配电柜", "y": 11, "value": 3.1058691285907107 }, { "x": "881635", "name": "4号配电柜", "y": 12, "value": 2.678369539537336 }, { "x": "881635", "name": "4号配电柜", "y": 13, "value": 2.776048142117726 }, { "x": "881635", "name": "4号配电柜", "y": 14, "value": 2.0785377819430155 }, { "x": "881635", "name": "4号配电柜", "y": 15, "value": 3.211311417557718 }, { "x": "881635", "name": "4号配电柜", "y": 16, "value": 2.4600379844567137 }, { "x": "881635", "name": "4号配电柜", "y": 17, "value": 3.3363067062740526 }, { "x": "881635", "name": "4号配电柜", "y": 18, "value": 3.2080764345552772 }, { "x": "881635", "name": "4号配电柜", "y": 19, "value": 6.835087894330014 }, { "x": "881635", "name": "4号配电柜", "y": 20, "value": 3.6878685404084255 }, { "x": "881635", "name": "4号配电柜", "y": 21, "value": 4.2407361303790285 }, { "x": "881635", "name": "4号配电柜", "y": 22, "value": 3.2796219247004768 }, { "x": "881635", "name": "4号配电柜", "y": 23, "value": 3.5869810259988117 }, { "x": "881645", "name": "5号配电柜", "y": 0, "value": 2.981338694215455 }, { "x": "881645", "name": "5号配电柜", "y": 1, "value": 2.814392686273909 }, { "x": "881645", "name": "5号配电柜", "y": 2, "value": 2.3944490695890344 }, { "x": "881645", "name": "5号配电柜", "y": 3, "value": 2.856905860162087 }, { "x": "881645", "name": "5号配电柜", "y": 4, "value": 2.340405764694096 }, { "x": "881645", "name": "5号配电柜", "y": 5, "value": 2.832339625650532 }, { "x": "881645", "name": "5号配电柜", "y": 6, "value": 2.681427949586762 }, { "x": "881645", "name": "5号配电柜", "y": 7, "value": 2.4884445769369945 }, { "x": "881645", "name": "5号配电柜", "y": 8, "value": 3.403209932190999 }, { "x": "881645", "name": "5号配电柜", "y": 9, "value": 3.936308326015962 }, { "x": "881645", "name": "5号配电柜", "y": 10, "value": 2.6957532550069523 }, { "x": "881645", "name": "5号配电柜", "y": 11, "value": 0.8217413598498507 }, { "x": "881645", "name": "5号配电柜", "y": 12, "value": 1.2645974140189729 }, { "x": "881645", "name": "5号配电柜", "y": 13, "value": 1.7224363158858877 }, { "x": "881645", "name": "5号配电柜", "y": 14, "value": 1.8775564380364207 }, { "x": "881645", "name": "5号配电柜", "y": 15, "value": 1.7274659803615555 }, { "x": "881645", "name": "5号配电柜", "y": 16, "value": 1.9276148298756126 }, { "x": "881645", "name": "5号配电柜", "y": 17, "value": 2.054761833166831 }, { "x": "881645", "name": "5号配电柜", "y": 18, "value": 2.4514385803927117 }, { "x": "881645", "name": "5号配电柜", "y": 19, "value": 6.560416828091925 }, { "x": "881645", "name": "5号配电柜", "y": 20, "value": 2.474944045543183 }, { "x": "881645", "name": "5号配电柜", "y": 21, "value": 2.332928309017419 }, { "x": "881645", "name": "5号配电柜", "y": 22, "value": 2.5351868665403448 }, { "x": "881645", "name": "5号配电柜", "y": 23, "value": 2.513009304371536 }, { "x": "881655", "name": "6号配电柜", "y": 0, "value": 3.9911955764525877 }, { "x": "881655", "name": "6号配电柜", "y": 1, "value": 3.163552238308951 }, { "x": "881655", "name": "6号配电柜", "y": 2, "value": 3.7700821343225606 }, { "x": "881655", "name": "6号配电柜", "y": 3, "value": 3.3337075470629998 }, { "x": "881655", "name": "6号配电柜", "y": 4, "value": 2.809709149387515 }, { "x": "881655", "name": "6号配电柜", "y": 5, "value": 2.3061291743499677 }, { "x": "881655", "name": "6号配电柜", "y": 6, "value": 3.567943795984482 }, { "x": "881655", "name": "6号配电柜", "y": 7, "value": 2.9548862621561796 }, { "x": "881655", "name": "6号配电柜", "y": 8, "value": 3.903922779880912 }, { "x": "881655", "name": "6号配电柜", "y": 9, "value": 3.707663349139336 }, { "x": "881655", "name": "6号配电柜", "y": 10, "value": 4.164885280243323 }, { "x": "881655", "name": "6号配电柜", "y": 11, "value": 3.1313485204756946 }, { "x": "881655", "name": "6号配电柜", "y": 12, "value": 2.813052910547096 }, { "x": "881655", "name": "6号配电柜", "y": 13, "value": 1.7026323721114442 }, { "x": "881655", "name": "6号配电柜", "y": 14, "value": 1.8453788029667204 }, { "x": "881655", "name": "6号配电柜", "y": 15, "value": 3.468676834492734 }, { "x": "881655", "name": "6号配电柜", "y": 16, "value": 1.8562456341799598 }, { "x": "881655", "name": "6号配电柜", "y": 17, "value": 2.2321723482439735 }, { "x": "881655", "name": "6号配电柜", "y": 18, "value": 1.8663117694989704 }, { "x": "881655", "name": "6号配电柜", "y": 19, "value": 2.8445324726755032 }, { "x": "881655", "name": "6号配电柜", "y": 20, "value": 2.8468244532813887 }, { "x": "881655", "name": "6号配电柜", "y": 21, "value": 2.8470922355862944 }, { "x": "881655", "name": "6号配电柜", "y": 22, "value": 3.017478436585263 }, { "x": "881655", "name": "6号配电柜", "y": 23, "value": 2.9206742318623165 }, { "x": "881675", "name": "7号配电柜", "y": 0, "value": 3.95413572908307 }, { "x": "881675", "name": "7号配电柜", "y": 1, "value": 3.918423129539011 }, { "x": "881675", "name": "7号配电柜", "y": 2, "value": 4.294114498737079 }, { "x": "881675", "name": "7号配电柜", "y": 3, "value": 3.7558472789256263 }, { "x": "881675", "name": "7号配电柜", "y": 4, "value": 3.6586970614541694 }, { "x": "881675", "name": "7号配电柜", "y": 5, "value": 3.4372408737002242 }, { "x": "881675", "name": "7号配电柜", "y": 6, "value": 3.2643233041041113 }, { "x": "881675", "name": "7号配电柜", "y": 7, "value": 3.858792922300686 }, { "x": "881675", "name": "7号配电柜", "y": 8, "value": 3.8736284203183415 }, { "x": "881675", "name": "7号配电柜", "y": 9, "value": 4.656572464684398 }, { "x": "881675", "name": "7号配电柜", "y": 10, "value": 3.764186350721046 }, { "x": "881675", "name": "7号配电柜", "y": 11, "value": 3.232190008589111 }, { "x": "881675", "name": "7号配电柜", "y": 12, "value": 4.481695997840722 }, { "x": "881675", "name": "7号配电柜", "y": 13, "value": 3.3037613581302865 }, { "x": "881675", "name": "7号配电柜", "y": 14, "value": 3.0238276701684295 }, { "x": "881675", "name": "7号配电柜", "y": 15, "value": 3.5619403189370886 }, { "x": "881675", "name": "7号配电柜", "y": 16, "value": 3.353262423870527 }, { "x": "881675", "name": "7号配电柜", "y": 17, "value": 3.522701996691528 }, { "x": "881675", "name": "7号配电柜", "y": 18, "value": 3.4457251232209005 }, { "x": "881675", "name": "7号配电柜", "y": 19, "value": 8.647902967427713 }, { "x": "881675", "name": "7号配电柜", "y": 20, "value": 4.15059098446734 }, { "x": "881675", "name": "7号配电柜", "y": 21, "value": 3.507745333498425 }, { "x": "881675", "name": "7号配电柜", "y": 22, "value": 3.6316356980699203 }, { "x": "881675", "name": "7号配电柜", "y": 23, "value": 3.5403099895808454 }, { "x": "881615", "name": "8号配电柜", "y": 0, "value": 1.1074809103743943 }, { "x": "881615", "name": "8号配电柜", "y": 1, "value": 1.6474945257454017 }, { "x": "881615", "name": "8号配电柜", "y": 2, "value": 1.0166436398990142 }, { "x": "881615", "name": "8号配电柜", "y": 3, "value": 1.03360115951976 }, { "x": "881615", "name": "8号配电柜", "y": 4, "value": 1.5364039171482498 }, { "x": "881615", "name": "8号配电柜", "y": 5, "value": 1.034111828193458 }, { "x": "881615", "name": "8号配电柜", "y": 6, "value": 1.6388040295064967 }, { "x": "881615", "name": "8号配电柜", "y": 7, "value": 1.3237538820258243 }, { "x": "881615", "name": "8号配电柜", "y": 8, "value": 0.9274499596976172 }, { "x": "881615", "name": "8号配电柜", "y": 9, "value": 1.0140630217772066 }, { "x": "881615", "name": "8号配电柜", "y": 10, "value": 0.7359897210444257 }, { "x": "881615", "name": "8号配电柜", "y": 11, "value": -0.13393727060473842 }, { "x": "881615", "name": "8号配电柜", "y": 12, "value": 0.38895431988132306 }, { "x": "881615", "name": "8号配电柜", "y": 13, "value": 1.2908748302032382 }, { "x": "881615", "name": "8号配电柜", "y": 14, "value": 0.015448770251847033 }, { "x": "881615", "name": "8号配电柜", "y": 15, "value": 0.3019318012903239 }];
