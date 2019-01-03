import Highcharts, { Options } from 'highcharts';
import "./dependentjs/highcharts-more";// 一定要加载，否者无法显示相形图

export const xAxis3 = ["2018-12-03 0",  "2018-12-03 1",  "2018-12-03 2",  "2018-12-03 3",  "2018-12-03 4",  "2018-12-03 5",  "2018-12-03 6",  "2018-12-03 7",  "2018-12-03 8",  "2018-12-03 9", "2018-12-03 10", "2018-12-03 11", "2018-12-03 12", "2018-12-03 13", "2018-12-03 14", "2018-12-03 15", "2018-12-03 16", "2018-12-03 17", "2018-12-03 18", "2018-12-03 19", "2018-12-03 20", "2018-12-03 21", "2018-12-03 22", "2018-12-03 23"];
export const boxchart3 = [
    {
      name: "电流",
      // tslint:disable-next-line:max-line-length
      data: [[-38812.875, 12781.5, 21150, 47177.75, 98772.125], [-23184.375, 15968.25, 32591, 42070, 81222.625], [-8857, 17261, 24597, 34673, 60791], [-20929.125, 14400, 22938.5, 37952.75, 73281.875], [-23385, 52200, 80613, 102590, 178175], [-27606.875, 92367.25, 162450, 172350, 292324.125], [-19024.5, 99747.75, 165600, 178929.25, 297701.5], [-87340.125, 60981, 120700, 159861.75, 308182.875], [-143236.375, 25613, 59488, 138179.25, 307028.625], [-39044.75, 82836.25, 128942.5, 164090.25, 285971.25], [101135.875, 153253.75, 175729.5, 187999, 240116.875], [-42833.75, 75641.5, 134696.5, 154625, 273100.25], [-34944.375, 23514.75, 41443, 62487.5, 120946.625], [-34909.125, 10086.75, 18401.5, 40084, 85079.875], [-14661.375, 9765, 17148.5, 26049.25, 50475.625], [-29212.625, 812.5, 8512, 20829.25, 50854.375], [-43207, 3243.5, 13812.5, 34210.5, 80661], [-45352.625, 11074, 27525, 48691.75, 105118.375], [-32445.625, 9973.25, 21523.5, 38252.5, 80671.375], [-34876.75, 29294.75, 52494, 72075.75, 136247.25], [-56036.625, 19956.75, 28450, 70619, 146612.375], [-65423.625, 23603.25, 50692.5, 82954.5, 171981.375], [-54735.75, 33218.25, 47513, 91854.25, 179808.25], [-50845.5, 21766.5, 39630, 70174.5, 142786.5]]
    },
      // tslint:disable-next-line:max-line-length
    {
      name: "异常值",
      color : "#7cb5ec",
      type: "scatter",
      // tslint:disable-next-line:max-line-length
      data: [[1, 91264], [1, 135000], [2, 65238], [2, 107100], [2, 112539], [3, 83100], [4, 185687], [10, 0], [10, 22986], [10, 33217], [10, 77771], [12, 140438], [12, 189182], [13, 103139], [13, 110843], [14, 66221], [15, 69426], [15, 80004], [16, 137450], [17, 155309], [18, 82553], [18, 90877], [19, 167042], [19, 174665], [19, 185221], [19, 185309], [20, 151467], [20, 172800], [20, 176150], [22, 188587]],
      marker: { fillColor : "white",  lineWidth: 1,  radius : 1,  lineColor : "#7cb5ec" },
      tooltip: { pointFormat : "Observation: {point.y}"}
    }
  ];
interface TimeDict {
  [day: string]: number;
}
interface Timeindex {
  [day: string]: number;
}

export const drawBoxOptions = (listdata: object[], xAxisList: string[], title: string) => {
  const showLegend = false ;
  let controlxAias = true ;
  const timedict: TimeDict = {};
  // tslint:disable-next-line:forin
  for (const i in xAxisList) {
    // tslint:disable-next-line:no-shadowed-variable
    const day: string = xAxisList[i].split(" ")[0];
    timedict[day] = timedict[day] === undefined ? 1 : timedict[day] + 1;
  }

  const timekey = Object.keys(timedict).sort();

  const newxAxis = [-0.5];
  const newdata = [];
  // 存储时间的inex
  const timeindex: Timeindex = {};
  let calcount = 0;
  let count = 0;
  // tslint:disable-next-line:forin
  for (const i in timekey) {
    const day = timekey[i];
    const n = timedict[day];
    const before = calcount;
    calcount  = calcount + n;
    // 中间点插入数据
    timeindex[day] = before + n / 2 - 0.5;
    // var need2 = n%2// 中间点插入数据
    // var count = 0
    const b = newxAxis[newxAxis.length - 1 ];
    newxAxis.push(before + n / 2 - 0.5);
    newxAxis.push(2 * (before + n / 2 - 0.5 ) - b );
    // tslint:disable-next-line:no-shadowed-variable
    for (let i = 0; i < n ; i++ ) {
      newdata.push([count, 0 ]);
      count += 1;
    }
  }
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
            type: "category",
            categories: xAxisList,
            title: {
              text: ''
            },
            labels: {
              // enabled:false,
              formatter(a: { pos: number; isFirst: any; axis: { paddedTicks: any; }; }) {
                // console.log(this,"2222222222222",timemapx[this.value])
                // console.log(this.value)
                // console.log(this)
                const chartHeigh = (this as any).chart.chartHeigh;
                const chartWidth  = (this as any).chart.chartWidth;
                const category = (this as any).axis.categories;
                const value = (this as any).value; // 2018/5/10 8
                const timevalue = (this as any).value.split(" ")[0];
                const hourvalue = (this as any).value.split(" ")[1];
                const pos = a.pos;
                const isFirst  = a.isFirst;
                // tslint:disable-next-line:radix
                if (isFirst && parseInt(hourvalue) > 9) {
                  controlxAias = false;
                }
                // tslint:disable-next-line:radix
                if (isFirst && parseInt(hourvalue) < 10) {
                  controlxAias = true;
                }
                const arr = a.axis.paddedTicks;
                // console.log(chartWidth,this.chart,a,b,c)
                if (chartWidth / window.innerWidth < 0.25) {
                  if (hourvalue > 9 && controlxAias && arr.length > 15 ) {
                    const time1 = JSON.stringify(hourvalue);
                    // console.log(time1)
                    // console.log("22222222",time1,parseInt(time1[0]) + "<br/>" + parseInt(time1[1]))
                    return time1[1] + "<br/>" + time1[2];
                  } else if (arr.length > 20) {
                    return a.pos % 2 === 0 ? hourvalue + ":00" : "";
                  } else {
                    return hourvalue + ":00";
                  }
                } else {
                  return hourvalue + ":00";
                }
              },
              rotation: -45,  // 设置轴标签旋转角度
              style: {
                color: "white"
              }
            },
            // tickInterval:3,
            gridLineWidth: 0,
        }],
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
              // enabled:false,
              // formatter:function(a,b,c){
              //   // console.log(this,"2222222222222",timemapx[this.value])
              //   return timemapx[this.value]
              // },
              style: {
                color: "white"
              }
            },
            min:0,
            gridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
            '上边缘: {point.high}<br/>' +
            'Q3\t: {point.q3}<br/>' +
            '中位数: {point.median}<br/>' +
            'Q1\t: {point.q1}<br/>' +
            '下边缘: {point.low}<br/>'
        },
        series: listdata,
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
