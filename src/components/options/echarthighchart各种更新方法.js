参考资料
chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);// 和兴是这个
        }, 1000);
      }
    }
  }
//  echart 同步执行顺序

          // (this.chartInstance as any).clear()
        // 1.异步加载添加数据
        // (((this.option as any).series as any)[0].data as any).forEach(
        //     (value: any) => {
        //         (this.chartInstance as any).appendData({
        //         seriesIndex:0,data:[value]});
        //         console.log(value);
        //     }
        // );
        console.log("echart update start",chart.getOption());
        const data: Points[]= Array.from((option.series[0].data as any));
        // // 1.1addData 队列插入 echart2.0方法
        // // 动态数据接口 addData
        // data.forEach(
        //     (value: Points)=> {chart.addData([
        //     // [
        //     //     1,        // 系列索引
        //     //     lastData, // 新增数据
        //     //     false,    // 新增数据是否从队列头部插入
        //     //     false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        //     //     axisData  // 坐标轴标签
        //     // ]
        //     ]);}
        // );
        // // 2.更新数据 逐渐变化
        const newoption = chart.getOption();
        const lastdata = newoption.series[0].data;
        // console.log("data",data);
        // console.log("lastdata",lastdata);
        const total = data.length;
        let count = 0;
        while(data.length > 0) {
            count += 1;
            const one = data.shift();
            lastdata.shift();
            lastdata.push(Array.from(one as any));
            // 核心方法
            if((count % Math.round(total / 3) === 0) || count === total) {
                (chart as any).setOption(newoption);
                // console.log("11111111111",one,newoption);
                // new Promise(
                //     (solve,reject)=>{
                //         setTimeout()
                //     }
                // )
            }
        }



// export const loadMapData = (parentId,level,name,coord)=>{
//     // let {name,id,[COORD]:coord} = params.data
//     if(level ===0 ){// 全国地图
//         // Axios({
//         //     method:"get",
//         //     url:`${prep}/js/china-main-city/${postCityId}.json`
//         // })
//         // console.log("000000000000")
//         let promise = new Promise(
//             async (resolve,reject)=>{
//                 let loadmapapi = ()=>{import("echarts/map/js/china")}
//                 await loadmapapi()
//                 console.log("加载全国地图",name)
//                 resolve("success loading map")
//             }
//         )
//         return promise
//     }else if(level === 1){ //省地图（各个市）
//         // console.log("111111111111111")
//         let newname = proviceChinese2PinYin[name]
//         newname = newname===undefined?proviceChinese2PinYin[name.replace("省","").replace("市","")]:newname
//         let loadmapapi = ()=>{import(`echarts/map/js/province/${newname}`)}
//         let promise = new Promise(
//             async (resolve,reject)=>{
//                 if (newname !== undefined){
//                     await loadmapapi()
//                 }
//                 resolve("success loading map")
//             }
//         )
//         return promise
//     }else if(level === 2){// 市地图（各个区）
//         // console.log("222222222222222")
//         let postCityId = cityMap[name]
//         let promise2 = Axios({
//             method:"get",
//             url:`${prep2}/js/china-main-city/${postCityId}.json`
//         }).then(async (result)=>{
//             // console.log(result)
//             await echarts.registerMap(name,result.data)
//             return "success"
//         })
//         return promise2
//     }else{//详细地图
//         // console.log(">222222222222222")
//         let promise3 = new Promise(
//             (resolve,reject)=>{
//                 resolve("leve3")
//             }
//         )
//         return promise3

//     }
// }
// import '@/components/options/dependentjs/mapapi.js';