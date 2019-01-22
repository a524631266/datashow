import Highcharts, { Options } from 'highcharts';
// import "./dependentjs/highcharts-more";// 一定要加载，否者无法显示相形图
// import "./dependentjs/oldie";// 一定要加载，否者无法显示相形图
import { TopChart, TopChartTrans } from '@/types/postreturnform';
// tslint:disable-next-line:no-var-requires
// require("highcharts-oldie");
import PubSub from 'pubsub-js';
import $ from 'jquery';
// tslint:disable-next-line:no-var-requires
// require("highcharts-oldie");
interface TopValue {
  id: string;
  value: number;
}
interface TopData {
  [id: number]: TopValue;
}

interface TwoNumberList {
  1: number;
  0: string;
}

export const objectlist = [{id:"881675", value :3.0238276701684295},{id:"881635", value :2.0785377819430155},{id:"881645", value :1.8775564380364207},{id:"881655", value :1.8453788029667204},{id:"881615", value :0.015448770251847033},{id:"881685", value :-0.1926384253430764},{id:"982235", value :-0.9999399080325635}];


const option1 = {
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy'
  },
  title: {
    text: 'Highcharts 3D气泡图'
  },
  xAxis: {
    gridLineWidth: 1
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false
  },
  series: [{
    name:'气泡1',
    data: [
      [9, 81, 63],
      [98, 5, 89],
      [51, 50, 73],
      [41, 22, 14],
      [58, 24, 20],
      [78, 37, 34],
      [55, 56, 53],
      [18, 45, 70],
      [42, 44, 28],
      [3, 52, 59],
      [31, 18, 97],
      [79, 91, 63],
      [93, 23, 23],
      [44, 83, 22]
    ],
    marker: {
      fillColor: {
        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
        stops: [
          [0, 'rgba(255,255,255,0.5)'],
          // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
        ]
      }
    }
  }, {
    name:'气泡2',
    data: [
      [42, 38, 20],
      [6, 18, 1],
      [1, 93, 55],
      [57, 2, 90],
      [80, 76, 22],
      [11, 74, 96],
      [88, 56, 10],
      [30, 47, 49],
      [57, 62, 98],
      [4, 16, 16],
      [46, 10, 11],
      [22, 87, 89],
      [57, 91, 82],
      [45, 15, 98]
    ],
    marker: {
      fillColor: {
        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
        stops: [
          [0, 'rgba(255,255,255,0.5)'],
          // [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
        ]
      }
    }
  }]
};
function queryHome(entity: string,name: string) {
  // alert("asdasd:" + entity + ": name:" + name);
  PubSub.publish("leafrouter2home",{entity, name});
}
function queryInfo(entity: string,name: string) {
  // alert("asdasd:" + entity + ": name:" + name);
  PubSub.publish("leafrouter2info",{entity, name});
}
(window as any).leafrouter2home = queryHome;
(window as any).leafrouter2info = queryInfo;
const genPackedBubble2 = (datalist: any[],BubbluSize: {minSize: number,maxSize: number}) => {
  return {
    chart: {
      type: 'packedbubble',
      // height: '100%'
      // zoomType : 'x',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    title: {
        text: ''
    },
    tooltip: {
        useHTML: true,
        // pointFormat: '<b>name:</b> {point.name} <br/><b>entity:</b> <b>{point.entity}</b><br/><b>value:</b>{point.y}<br/><a onclick="leafrouter2home("{point.entity}","{point.name}")">图表</a> <a onclick="leafrouter2info("{point.entity}","{point.name}")">用户信息</a>',
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
    plotOptions: {
        packedbubble: {
            ...BubbluSize
        }
    },
    xAxis:{
    },
    yAxis: {
    },
    series: datalist,
    credits: {
      enabled: false
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'right',
                    verticalAlign: 'middle',
                    layout: 'vertical'
                }
            }
        }]
    }
  };
};

const genPackedBubble = (datalist: any[],BubbluSize: {minSize: number}) => {
  return {
      chart: {
        type: "packedbubble",
        backgroundColor: "rgba(0,0,0,0)"
      },
      title: {
        text: ""
      },
      tooltip: {
        useHTML: true,
        pointFormat: 	`<b>name:</b> {point.name} <br/><b>value:</b>{point.y}<br/><a onclick="leafrouter2home('{point.entity}','{point.name}')">图表</a> <a onclick="leafrouter2info('{point.entity}','{point.name}')">用户信息</a>`
      },
      plotOptions: {
        packedbubble: {
          ...BubbluSize
        }
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
      series: datalist,
      credits: {
        enabled: false
      },
      change: "redraw"
    };
};
export const drawTopOptions = (objectlist: TopChartTrans,title: string,redrawEntityFunc: any,openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void) => {
  // tslint:disable-next-line:one-variable-per-declaration
  const series: any[] = [
    {
      name:"超低",
      data:[],
      color:"lightgreen",
      dataLabels:{
        enabled: true,
        format: "{point.name}",
        style: {
          color: "black",
        }
      },
    },
    {
      name:"超高",
      data:[],
      color:"red",
      dataLabels:{
        enabled: true,
        format: "{point.name}",
      },
    }
  ];
  const BubbluSize = {
    minSize: 0,
    // maxSize:0,
  };
  // tslint:disable-next-line:forin
  for (const i in objectlist) {
    const value = objectlist[i].value;
    if (value>=0) {
      // ,id: objectlist[i].id
      (series[1] as any).data.push({name: objectlist[i].name,value,entity: objectlist[i].id + ""});
    } else {
      (series[0] as any).data.push({name: objectlist[i].name,value: -value,entity: objectlist[i].id + ""});
    }
    // if(Math.abs(value) > BubbluSize.maxSize) {
    //   BubbluSize.maxSize = Math.abs(value);
    // }
    if(Math.abs(value) < BubbluSize.minSize || (Math.abs(value) !== 0 && BubbluSize.minSize === 0)) {
      BubbluSize.minSize = Math.abs(value);
    }
  }
  // console.log("series",series,BubbluSize);
  // const data = genPackedBubble(JSON.parse(JSON.stringify(series)),BubbluSize);
  // (window as any).series = series;
  return genPackedBubble(JSON.parse(JSON.stringify(series)),BubbluSize);
};

export const drawTopOptionsBack = (objectlist: TopChartTrans,title: string,redrawEntityFunc: any,openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void) => {
  // objectlist [{id:123134,value:12354,}...]
  const datalist: TwoNumberList[] = [];
  // tslint:disable-next-line:variable-name
  const positive_id: string[] = [];
  const datalist2: TwoNumberList[] = [];
  // tslint:disable-next-line:variable-name
  const negative_id: string[] = [];
  let minvalue = 0;
  // tslint:disable-next-line:forin
  for (const i in objectlist) {
    if (objectlist[i].value>=0) {
      datalist.push([objectlist[i].name,objectlist[i].value]);
      positive_id.push(objectlist[i].id);
    } else {
      datalist2.splice(0,0,[objectlist[i].name,objectlist[i].value]);
      negative_id.splice(0,0,objectlist[i].id);
    }
    if (objectlist[i].value<minvalue) {
      minvalue = objectlist[i].value ;
    }
  }
  return getTwoDirectBarOption(positive_id,datalist,negative_id,datalist2,title,redrawEntityFunc,openInfo);
};
// tslint:disable-next-line:variable-name
function getTwoDirectBarOption(positive_id: string[],datalist: TwoNumberList[],negative_id: string[],datalist2: TwoNumberList[],title: string,redrawEntityFunc: any,openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void) {
  return {
    chart: {
      type: 'bar',
      panKey : 'ctrl',
      // zoomType : 'x',
      backgroundColor: 'rgba(0,0,0,0)',
      events: {
        load() {
            const seriesGroup = (this as any).seriesGroup;
            Highcharts.addEvent(seriesGroup.element, 'mouseover',(e: MouseEvent)=> {
              // tslint:disable-next-line:one-variable-per-declaration
              const clientX = e.clientX,clientY = e.clientY;
              // console.log("topevent",(e.target as any).point);
              const entity = (e.target as any).point.series.index === 1 ? positive_id[(e.target as any).point.index]:negative_id[(e.target as any).point.index];
              openInfo(entity,(e.target as any).point.name,clientX,clientY,(e.target as any).getBoundingClientRect());
              // infoObject.createNewInfoDiv(e.target.point.name,e.target.point.name,clientX,clientY,redrawEntityFunc,openInfo)
            });
            // console.log("object",this);
            Highcharts.addEvent(seriesGroup.element, 'mouseleave', (e)=> {
              // let timeoutid = setTimeout(()=>{infoObject.hiddenInfo()},300)
              // infoObject.setTimeoutId(timeoutid);
              PubSub.publish("hidetooltip","none");
            });
            // 给元素添加事件
            const element1 = (this as any).series[0].dataLabelsGroup.element;
            const element2 = (this as any).series[1].dataLabelsGroup.element;
            Highcharts.addEvent(element1, 'mouseover',(e: MouseEvent)=> {
              e = (this as any).pointer.normalize(e);
              // tslint:disable-next-line:one-variable-per-declaration
              const clientX = e.clientX,clientY = e.clientY;
              // console.log("topevent",(e.target as any),e,(e.target as any).point,e);
              const g = (e.target as any).parentElement.parentElement;
              const index = $(g).index();
              const name = (e.target as any).innerHTML;
              // console.log("ggggindex",index);
              const entity = negative_id[index];
              openInfo(entity,name,clientX,clientY,(e.target as any).getBoundingClientRect());
              // infoObject.createNewInfoDiv(e.target.point.name,e.target.point.name,clientX,clientY,redrawEntityFunc,openInfo)
            });
            Highcharts.addEvent(element2, 'mouseover',(e: MouseEvent)=> {
              e = (this as any).pointer.normalize(e);
              // tslint:disable-next-line:one-variable-per-declaration
              const clientX = e.clientX,clientY = e.clientY;
              // console.log("topevent",(e.target as any).point);
              const g = (e.target as any).parentElement.parentElement;
              const index = $(g).index();
              const name = (e.target as any).innerHTML;
              const entity = positive_id[index];
              openInfo(entity,name,clientX,clientY,(e.target as any).getBoundingClientRect());
              // infoObject.createNewInfoDiv(e.target.point.name,e.target.point.name,clientX,clientY,redrawEntityFunc,openInfo)
            });
            Highcharts.addEvent(element1, 'mouseleave', (e)=> {
              // let timeoutid = setTimeout(()=>{infoObject.hiddenInfo()},300)
              // infoObject.setTimeoutId(timeoutid);
              PubSub.publish("hidetooltip","none");
            });
            Highcharts.addEvent(element2, 'mouseleave', (e)=> {
              // let timeoutid = setTimeout(()=>{infoObject.hiddenInfo()},300)
              // infoObject.setTimeoutId(timeoutid);
              PubSub.publish("hidetooltip","none");
            });
        },
        render() {
          // infoObject.hiddenInfo()
        }
      }
    },
    title: {
      // show: false,
      // text: title,
      text: null,
      style: {
                fontSize:'16px',
        fontWeight: 'bold',
        color:"white"
            }
    },
    xAxis: [{
      visible:false,
      // 负的
      categories: negative_id,
      reversed: true,
      labels: {
        step: 1,
        style:{
          color:"white"
        },
        formatter(): string {
          // console.log(this);
          if ((this as any).value === (this as any).pos) {
            return "";
          } else {
            return JSON.stringify((this as any).value).slice(1,4)+"...";
          }
        },
      },
      gridLineWidth: 0
    }, {
      visible:false,
      opposite: true,
      reversed: true,
      categories: positive_id,
      linkedTo: 0,
      // lineColor:
      labels: {
        step: 1,
        style:{
          color:"white"
        },
        formatter(): string {
          // console.log(this);
          if ((this as any).value === (this as any).pos) {
            return "";
          } else {
            return JSON.stringify((this as any).value).slice(1,4)+"...";
          }
        },
      },
      gridLineWidth: 0
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        // formatter(): string {
        //   console.log(this);
        //   return (this as any).value;
        // },
        style:{
          color:"white"
        }
      },
      gridLineWidth: 0
      // min: -4000000,
      // max: 4000000
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    tooltip: {
      enabled:false,
      formatter(e: any) {
        // console.log("random",index)
        // console.log(e,this,$(e.chart.renderTo).css("left"),$(e.chart.renderTo).css("top"))
        // let point_x = parseFloat($(e.chart.renderTo).css("left"))+this.tooltipPos[0]
        // let point_y = parseFloat($(e.chart.renderTo).css("top"))+this.point.shapeArgs.y
        // infoObject.createNewInfoDiv(this.key,"enttiname 配电柜名称",point_x,point_y,redrawEntityFunc,openInfo)
        // console.log(this)
        // return '<b> entity:' + this.key + '</b><br/>' +
        //   '值: ' + Highcharts.numberFormat(this.point.y, 0);
        return null;
      }
    },
    // plotOptions: {
    //   bar: {
    //     dataLabels: {
    //       align:"center",
    //       enabled: true,
    //       // allowOverlap: true ,// 允许数据标签重叠
    //       formatter: function() {
    //         console.log(this)
    //         //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
    //         return this.key
    //         }
    //     }
    //   }
    // },
    // legend : {
    //   enabled:false,
    //   align : 'center',
    //   verticalAlign : 'bottom',
    //   y : 0,
    //   floating : false,
    //   borderWidth : 0  ,
    //   itemStyle: {
    //     color:"#C1FFC1"
    //   },
    // },
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
      name: '超低',
      data: datalist2,
      color:"lightgreen",
      dataLabels:{
        align:"right",
        enabled: true,
        // allowOverlap: true ,// 允许数据标签重叠
        formatter(): string {
          // console.log("datalabels",this);
          // this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
          return "" + (this as any).key ;
          // +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
          }
      }
    }, {
      name: '超高',
      data: datalist,
      color:"red",
      dataLabels: {
        align:"left",
        enabled: true,
        // allowOverlap: true ,// 允许数据标签重叠
        formatter(): any {
          // console.log(this)
          // this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
          return "" + (this as any).key;
          // +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
          }
      }
    }],
    credits: {
            enabled: false
    }
  };
}
