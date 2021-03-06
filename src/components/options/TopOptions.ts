import Highcharts, { Options } from 'highcharts';
import { TopChart, TopChartTrans } from '@/types/postreturnform';
import PubSub from 'pubsub-js';
import $ from 'jquery';
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

export const drawTopOptions = (objectlist: TopChartTrans,title: string,redrawEntityFunc: any,openInfo: (entity: string, name: string,clientX: number,clientY: number,target: DOMRect)=>void) => {
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
