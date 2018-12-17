<template>
  <div :class="positionClass" draggable="true" >
       <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms">
            <BaseChartFactory :id="id" :option="option" :chartType="chartType" @updateData="updateData" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model, Provide} from 'vue-property-decorator';
import LittleBar from "@/components/chart/LittleBar.vue";
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import { PositionClass , PostParams ,ChartType, MeasureName} from '@/types/index';
import { getGeoChinaProvinceOptionConfig,getGeoCityOptionConfig,GeoData,testPointsdata, cityMap} from '@/components/options/GeoOptions.ts';
import echarts,{ ECharts, EChartOption, EChartsOptionConfig } from "echarts";
import { Points } from "@/components/options/GeoOptions.ts";
import Axios from "axios";
const prev = process.env.NODE_ENV === "development"? "": "";
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
@Component({
    components: {
        LittleBar,
        BaseChartFactory
    },
})
export default class GeoMapEchart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option = {};
    public postInterval =  2000 ;
    public entity =  "";
    public initshow: boolean = this.positionClass === "center"?true: false ;
    private intervalid = 0;
    private chartType = ChartType.echart;
    @Emit()
    public changedata() {
    //   console.log(this.data);
      if (this.id === "chart-top") {
          this.positionClass = PositionClass.Center;
      }
    }
    private mounted() {
      const that = this;
      let count = 0 ;
      this.intervalid = setInterval(
        () => {
            const cityname = "杭州市";
            // const option2 = getGeoChinaProvinceOptionConfig() as any;
            const postCityId = cityMap[cityname];
            const promise2 = Axios({
                method:"get",
                url:`${prev}/js/china-main-city/${postCityId}.json`
            }).then((result)=> {
                // console.log(result)
                // echarts.registerMap(name,result.data);
                return "success";
            }).then(
                (suc) => {
                    const data: GeoData = {
                        center:{JD: 120.1709,WD: 30.29},
                        cityname,
                        measurename: MeasureName.Elec,
                        points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
                    };
                    const option2 = getGeoCityOptionConfig(data) as any;
                    count+=1;
                    option2.change = count%2;
                    this.option = option2;
                    console.log("neizai",option2,this.option);
                }
            );
            // (option2 as any).change = false;
            console.log("geo",this.option);
        },
        this.postInterval * 3
      );
      // 通过change来获取定义属性的变化
    //   setInterval(
    //       () => {
    //           console.log("第二次变化");
    //           (this.option as any).change = !(this.option as any).change ;
    //           // this.option =  drawBoxOptions(boxchart3, xAxis3 , this.id) as Options;
    //           console.log(this.option);
    //       },
    //       this.postInterval+3000
    //   );
    }
    @Watch("postparms",  {deep : true})
    private onHandleShow(val: boolean) {
      console.log("监听",this.postparms,this.id);
      // this.initshow = !this.initshow;
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      clearInterval(this.intervalid);
    }
    // @Emit()
    private updateData(chart: any,option: any) {
        // (this.chartInstance as any).clear()
        // 1.异步加载数据
        // (((this.option as any).series as any)[0].data as any).forEach(
        //     (value: any) => {
        //         (this.chartInstance as any).appendData({
        //         seriesIndex:0,data:[value]});
        //         console.log(value);
        //     }
        // );
        console.log("echart update start",chart.getOption());
        const data: Points[]= (option.series[0].data as any);
        // 1.1addData 队列插入
        // 动态数据接口 addData
        data.forEach(
            (value: Points)=> {chart.addData([
            [
                0,        // 系列索引
                value, // 新增数据
                true,     // 新增数据是否从队列头部插入
                false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            ],
            // [
            //     1,        // 系列索引
            //     lastData, // 新增数据
            //     false,    // 新增数据是否从队列头部插入
            //     false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            //     axisData  // 坐标轴标签
            // ]
            ]);}
        );
        // // 2.更新数据 逐渐变化
        // const lastdata = chart.getOption().series[0].data;
        // while(data.length > 0) {
        //     const one = data.shift();
        //     lastdata.pop();
        //     lastdata.push(one);
        //     (chart as any).setOption(chart.getOption());
        // }
        console.log("appendData","222222");
    }
}
</script>

<style lang='scss' scoped>
.anchorBL{
    display:none;
}
</style>