import moment from "moment";
import echarts from "echarts";
import * as d3 from "d3-interpolate";
import { RegionStackLineTrans } from '@/types/postreturnform';
const colorgradient = new echarts.graphic.LinearGradient(0,0,0,1,[
    {
        offset: 0,
        color: "#000",
    },
    {
        offset: 0.5,
        color: "#888",
    },
    {
        offset: 1,
        color: "#ddd",
    },
]);

interface StackLineSeries {
    name: string;
    data: number[];
    type: string;
    stack: string;
    label?: {
        normal: {
            show: boolean;
            position: string;
        }
    };
    areaStyle: {
        normal: {
            color: string,
        },
    };
    symbolSize: number;
    showSymbol: false;
    lineStyle: {
        color: "rgba(0,0,0,0)" ,
    };
}

const transform = {
    encode(value: number) {
        if( value < 0 ) {
            return -Math.log2(-value+1);
        }
        return Math.log2(value + 1);
    },
    decode(value: number) {
        if( value < 0 ) {
            return -(Math.pow(2,-value) - 1);
        }
        return Math.pow(2,value) - 1;
    }
};

export const drawOption = (data: RegionStackLineTrans, option: {showlegentd: boolean}) => {
   let series: StackLineSeries[] = data.stack.data as any;

   const legenddata = series.map(
       (data: {name: string}) => {
           return data.name;
       }
   );
   series = series.map(
    (arr: StackLineSeries,index: number)=> {
        arr.type = "line";
        arr.stack = '总量',
        arr.label = {
            normal: {
                show: false,
                position: 'top'
            }
        };
        // 保证数量在log中
        arr.data = arr.data.map(
            (value: number) => {
                // console.log(value);
                return transform.encode(value);
            }
        );
        const color = d3.interpolateRgb("rgb(250,250,250)","rgb(30,30,30)")(index/(series.length-1));
        arr.areaStyle =  {normal: {color}};
        // arr.symbolSize = 0;
        arr.showSymbol = false;
        arr.lineStyle = {
            color: "rgba(0,0,0,0)" ,
        };
        return arr;
    }
   );
   return {
        title: {
            text: '堆叠区域图',
            show: false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    formatter(data: any, ticket: any) {
                        // console.log("data", data, ticket);
                        // console.log(typeof data.value,this);
                        // y轴
                        if (typeof data.value === "number") {
                            // tslint:disable-next-line:radix
                            return Math.abs(parseInt(transform.decode(data.value) * 100 + "") / 100);
                        } else {
                            // tslint:disable-next-line:radix
                            return moment(parseInt(data.value)).format("HH:mm:ss");
                        }
                    }
                }
            },
            formatter(data: any, ticket: any, callback: any) {
                let start = "";
                const html = data.map(
                    (da: any) => {
                        start = da.name; // "1551633300000"
                        // tslint:disable-next-line:radix
                        return da.marker + "[" + da.seriesName + "]: " + Math.abs(parseInt(transform.decode(da.value) + "")) + " 配电柜";
                    }
                );
                // console.log(data,ticket);
                // tslint:disable-next-line:radix
                return moment(parseInt(start)).format("YYYY-MM-DD HH:mm:ss") + "<br />" + html.join("<br />");
            }
        },
        legend: {
            show: option.showlegentd,
            data: legenddata,
            textStyle: {
                color: "white",
                fontSize:14,
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : data.stack.time,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "white"
                    },
                    formatter(value: any,index: number) {
                        // console.log("index",index);
                        // tslint:disable-next-line:radix
                        if(index>0 && moment(parseInt(value)).format("HH:mm")!=="00:00") {
                            // tslint:disable-next-line:radix
                            return moment(parseInt(value)).format("HH:mm");
                        } else {
                            // tslint:disable-next-line:radix
                            if(moment(parseInt(value)).format("HH:mm")==="00:00") {
                                // tslint:disable-next-line:radix
                                return moment(parseInt(value)).format("YYYY-MM-DD");
                            } else {
                                // tslint:disable-next-line:radix
                                return moment(parseInt(value)).format("YYYY-MM-DD HH:mm");
                            }
                        }
                    },
                    rotate:45,
                    fontSize:9,// 横坐标刻度样式
                    showMinLabel:true,
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "white"
                    },
                    fontSize:9,// 横坐标刻度样式
                    showMinLabel:true,
                    formatter(value: number, index: number) {
                        return Math.abs(transform.decode(value)); // Math.floor(Math.log2(Math.abs(value)+1) * 100) / 100;
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle:{
                        color: ['rgba(0,0,255,0.5)', 'rgba(0,0,255,0.5)']
                    }
                }
            }
        ],
        series
    };
};
