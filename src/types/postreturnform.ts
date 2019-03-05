interface BoxData {
    xAxis: string[];
    boxs: number[][];
    name: string;
    time: number;
}
// const data: BoxData = {
//     xAxis:["1","2","3"],
//     boxs:[[2,5],[1,5],[5,8,8]],
//     name:"ss"
// };
/**
 * 配电柜box数据
 */
interface SingleBoxChart {
    boxchart: BoxData;
}

/**
 * 区域box数据
 */
interface RegionBoxChart {
    region: SingleBoxChart;
}
interface BoxFirstData {
    name: string;
    data: Array<[number,number,number,number,number]>;// 中位数五个点[-38812.875, 12781.5, 21150, 47177.75, 98772.125]
}
interface BoxSecondData {
    name: string; // "异常值"
    color: string; // "#7cb5ec"
    type: string; // "scatter"
    data: Array<[number,number]>; // 异常值位置[1, 91264]
    marker: any;
    tooltip: any;
}
interface BoxData {
    0: BoxFirstData;
    1: BoxSecondData;
}
interface BoxChartTrans {
    xAxis: string[];// ["2018-12-03 0",  "2018-12-03 1"...]
    boxchart: [BoxFirstData,BoxSecondData];
}

// const Data2: BoxChartTrans = {
//     xAxis: ["1","222"],
//     boxchart: [
//         {
//           name: "电量",
//           data: [[-38812.875, 12781.5, 21150, 47177.75, 98772.125]]
//         },
//         {
//           name: '异常值',
//           color: "112",
//           type: 'scatter',
//           data: [[1,0.1]],
//           marker: {
//               fillColor: 'white',
//               lineWidth: 1,
//               radius:1,
//               lineColor: "",
//           },
//           tooltip: {
//               pointFormat: 'Observation: {point.y}'
//           }
//         }
//       ]
// }


/**
 * 趋势数据
 */
interface TrendData {
    data: Array<[number,number]>;// [时间，value]
    name: string;
}
interface SingleTrendChart {
    linechart: TrendData[];
}
interface RegionTrendChart {
    region: SingleTrendChart;
}


interface TrendDataTrans {
    data: Array<[number,number]>;// [时间，value]
    name: string;
}

interface TrendChartTrans {
    [index: number]: TrendDataTrans;
}

interface ScatterData {
    id: number; // id 代表entityid
    // value: number;
    // time: number;
    y: number; // y 代表值
    x: number; // x代表 时间 13位
}
interface EntityValue {
    name: string;
    id: number;
}
interface ScatterChart {
    linechart: {
        valuelist: Array<[number,number,number]>,
        entitylist: EntityValue[]
    };
}


interface ScatterChartTrans {
    valuelist: Array<[number,number,number]>;
    entitylist: EntityValue[];
}

interface RegionBoxChart2 {
    entitylist: EntityValue[];
    outliers: Array<[number, number]>;
    outliersindex: number[];
    axisData: string[];
    boxData: Array<[number, number,number, number, number]>;
}


// axisData
// :
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",…]
// boxData
// :
// [[-0.0625, -0.025, 0, 0, 0.037500000000000006], [-0.1, -0.04, 0, 0, 0.06], [-0.05, -0.02, 0, 0, 0.03],…]
// entitylist
// :
// [{name: "新时代超市二楼楼梯左边", id: 977955}, {name: "15号", id: 1201635}, {name: "21号", id: 1204045},…]
// outliers
// :
// [[0, -0.38], [0, -0.31], [0, -0.24], [0, -0.22], [0, -0.11], [0, -0.1], [0, -0.09], [0, -0.09],…]
// outliersindex
// :
// [61, 6, 55, 56, 49, 78, 19, 19, 19, 11, 11, 11, 35, 76, 43, 63, 38, 38, 18, 18, 0, 15, 22, 50, 58, 56,…]
interface RegionBoxChartTrans2 {
    entitylist: EntityValue[];
    outliers: Array<[number, number]>;
    outliersindex: number[];
    axisData: string[];
    boxData: Array<[number, number,number, number, number]>;
}


// const data: SingleTrendChart = {
//     linechart: [
//     {
//         name: "1212",
//         data: [[1231315,0],[1231,1]]
//     },
//     {
//         name: "1212",
//         data: [[1231315,0,],[1231,1]]
//     }
//     ]
// };
interface TimeLineData {
    endtime: number; // 1542938400000
    starttime: number;// 1542938400000,
    id: string;// "1329545",
    type: string; // "增加",
    value: number; // 2.2010863334209785
    name: string;
}
interface TimeLineChart {
    action: TimeLineData[];
}

export interface TimeLineDataTrans {
    endtime: number; // 1542938400000
    starttime: number;// 1542938400000,
    id: string;// "1329545",
    type: string; // "增加",
    value: number; // 2.2010863334209785
    name: string;
}
interface TimeLineChartTrans {
  [index: number]: TimeLineDataTrans;
}
// const data: TimeLineChartTrans = [
//     {
//       endtime : 1541804400000,
//       starttime : 1541800800000,
//       id : "1329545",
//       type : "减少",
//       value : -0.6548651978004244
//     }, {
//       endtime : 1541811600000,
//       starttime : 1541808000000,
//       id : "1329545",
//       type : "减少",
//       value : -0.5009217388598228
//     }];
// const data: TimeLineChart = {action: [
//         {
//             endtime: 1542942000000,
//             starttime: 1542938400000,
//             id: "1329545",
//             type: "增加",
//             value: 2.2010863334209785
//         },
//         {
//             endtime: 1542945600000,
//             starttime: 1542942000000,
//             id: "1329545",
//             type: "增加",
//             value: 2.269994823269354
//         }
//     ]
// };

interface HeatmapData {
    id: string; // "1201065",
    name: string; // "8号",
    time: number; // 0,
    value: number; // 0.9145603551415997
}
interface HeatmapChart {
    table: HeatmapData[];
    totalpages: number;
    entitynums: number;
}

interface HeatmapDataTrans {
    id: string; // 代表 1201065
    name: string; // "8号",
    // y: number; // 0,
    value: number; // 0,
    time: number; // 1234567890123
}
interface HeatmapChartTrans {
    [index: number]: HeatmapDataTrans;
}
// const data: HeatmapChart =  {
//     table: [
//         {
//             x: "1201065",
//             name: "8号",
//             y: 0,
//             value: 0.9145603551415997
//         },
//         {
//             x: "1201065",
//             name: "8号",
//             y: 1,
//             value: 0.4443084388984552
//         },
// }

interface TopData {
    name: string; // "A7_6号楼用电主用",
    id: string; // "978025",
    value: number; // 1.823430980425617
    // time?: number;
}
interface TopChart {
    top: TopData[];
}
interface TopDataTrans {
    id: string;
    value: number;
    name: string;
}
interface TopChartTrans {
    [index: number]: TopDataTrans;
}

export {
    SingleBoxChart,RegionBoxChart,SingleTrendChart,RegionTrendChart,TimeLineChart,HeatmapChart,TopChart,
    TimeLineChartTrans,TopChartTrans,HeatmapChartTrans,BoxChartTrans,TrendChartTrans,ScatterChart,ScatterChartTrans,
    RegionBoxChart2,RegionBoxChartTrans2,EntityValue
};
