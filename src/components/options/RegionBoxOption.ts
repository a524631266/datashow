import Highcharts, { Options } from 'highcharts';
import { RegionBoxChartTrans2,BoxChartTrans } from '@/types/postreturnform';
import moment,{ DurationInputObject, Moment } from "moment";


export const drawBoxOptions = (data: BoxChartTrans, xAxisList: string[], title: string) => {
  const showLegend = false ;
  const option = {
        chart: {
            type: 'boxplot',
            zoomType: 'x',
            backgroundColor: 'rgba(0,0,0,0)',
            // height: '50%'
            // spacingBottom:12
        },
        title: {
            // text: title,
            text: null,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: "white"
            }
        },
        tooltip: {
            // shared: false,
            headerFormat: null,
            useHTML: true,
            enabled: true,
            isHidden: false,
        },
        legend : {
            enabled: showLegend,
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
        xAxis: [{
            // type: "category",
            type: 'datetime',
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%H:%M',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y',
            },
            categories: data.xAxis,
            title: {
              text: ''
            },
            labels: {
              rotation: -45,  // 设置轴标签旋转角度
              style: {
                color: "white"
              },
              formatter() {
                // tslint:disable-next-line:radix
                const initts = parseInt((this as any).value); // 1365465600000
                // console.log("getTheFirstTS(inittimelist, initts)",getTheFirstTS(inittimelist, initts));
                // console.log("moment(readlytime).format('HH:mm')",moment(readlytime).format('HH:mm'),readlytime);
                if (moment(initts).format('HH:mm') === "00:00") {
                    return moment(initts).format('MM-DD');
                }
                return moment(initts).format('HH:mm');
                // return (this as any).value.slice(0, 5) + "";
                },
            },
            // tickInterval:3,
            gridLineWidth: 0,
        }],
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
              style: {
                color: "white"
              }
            },
            // min:0,
            gridLineWidth: 0
        },
        plotOptions: {
            series:{
              events:{
                click(event: any) {
                    // console.log("object",(this as any).chart.tooltip);
                    const tooltipInstance = (this as any).chart.tooltip;
                    if(tooltipInstance.move) {
                        tooltipInstance.move = undefined;
                        // tslint:disable-next-line:no-empty
                        tooltipInstance.refresh = () => {
                            // console.log(tooltipInstance.isHidden);
                            // 在开启的情况下仍然显示图例
                            if(!tooltipInstance.isHidden) {
                                tooltipInstance.isHidden = true;
                            }
                        };
                    } else {
                        tooltipInstance.move = tooltipInstance.__proto__.move;
                        tooltipInstance.refresh =  tooltipInstance.__proto__.refresh;
                        // console.log("heatmaprefreshfunction2",heatmaprefreshfunction);
                        // console.log("222");
                    }
                    // console.log("tooltipInstance",tooltipInstance.label);
                    // Highcharts.addEvent(tooltipInstance.label.div,"mouseleave",(e)=> {
                    //     // console.log("eee",e,this);
                    //     tooltipInstance.move = tooltipInstance.__proto__.move;
                    //     tooltipInstance.refresh =  tooltipInstance.__proto__.refresh;
                    // });
                    // if (tooltipInstance.label.div.onmouseleave === undefined) {
                    let timeid =0;
                    tooltipInstance.label.div.onmouseleave = (e: any)=> {
                        // console.log("eee",e,this);
                        timeid = setTimeout(
                            ()=> {
                                tooltipInstance.move = tooltipInstance.__proto__.move;
                                tooltipInstance.refresh =  tooltipInstance.__proto__.refresh;
                            },19);
                    };
                    tooltipInstance.label.div.onmouseenter = (e: any)=> {
                        // console.log("eee",e,this);
                        clearTimeout(timeid);
                        tooltipInstance.move = undefined;
                        // tslint:disable-next-line:no-empty
                        tooltipInstance.refresh = () => {
                            // console.log(tooltipInstance.isHidden);
                            // 在开启的情况下仍然显示图例
                            if(!tooltipInstance.isHidden) {
                                tooltipInstance.isHidden = true;
                            }
                        };
                    };
                    // }
                }
              }
            }
        },
        series: data.boxchart,
        credits: {
            enabled: false
        }
  };
  return option;
};

export const drawBoxOptions2 = () => {
    return {
      chart: {
        type: 'boxplot'
      },
      title: {
        text: 'Highcharts 箱线图'
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
          text: ''
        }
      },
      yAxis: {
        title: {
          text: '观测值'
        },
        plotLines: [{
          value: 932,
          color: 'red',
          width: 1,
          label: {
            text: '理论模型: 932',
            align: 'center',
            style: {
              color: 'gray'
            }
          }
        }]
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
        '最大值: {point.high}<br/>' +
        'Q2\t: {point.q3}<br/>' +
        '中位数: {point.median}<br/>' +
        'Q1\t: {point.q1}<br/>' +
        '最小值: {point.low}<br/>'
      },
      series: [{
        name: '观测值',
        data: [
          [760, 801, 848, 895, 965],
          [733, 853, 939, 980, 1080],
          [714, 762, 817, 870, 918],
          [724, 802, 806, 871, 950],
          [834, 836, 864, 882, 910]
        ],
        tooltip: {
          headerFormat: '<em>实验号码： {point.key}</em><br/>'
        }
      }, {
        name: '异常值',
        color: (Highcharts.getOptions() as any).colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
          [0, 644],
          [4, 718],
          [4, 951],
          [4, 969]
        ],
        marker: {
          fillColor: 'white',
          lineWidth: 1,
          lineColor: (Highcharts.getOptions() as any).colors[0],
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}'
        }
      }]
    };
};
