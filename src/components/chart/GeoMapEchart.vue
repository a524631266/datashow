<template>
  <div :class="positionClass" draggable="true" >
       <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms">
            <BaseChartFactory :id="id" :option="option" :chartType="chartType" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model, Provide} from 'vue-property-decorator';
import LittleBar from "@/components/chart/LittleBar.vue";
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import { PositionClass , PostParams ,ChartType, MeasureName} from '@/types/index';
import { getGeoChinaProvinceOptionConfig,getGeoCityOptionConfig,GeoData,testPointsdata} from '@/components/options/GeoOptions.ts';
import echarts from "echarts";
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
      this.intervalid = setTimeout(
        () => {
            const cityname = "杭州";
            // const option2 = getGeoChinaProvinceOptionConfig() as any;
            const data: GeoData = {
                center:{JD: 120.1709,WD: 30.29},
                cityname,
                measurename: MeasureName.Elec,
                points:testPointsdata,
            };
            const option2 = getGeoCityOptionConfig(data) as any;
            let postCityId = cityMap[name];
            let promise2 = Axios({
                method:"get",
                url:`${prev}/js/china-main-city/${postCityId}.json`
            }).then(async (result)=>{
                // console.log(result)
                await echarts.registerMap(name,result.data)
                return "success"
            })
            echarts.registerMap(cityname,result.data)
            // (option2 as any).change = false;
            this.option = option2;
            console.log(this.option);
        },
        this.postInterval
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
}
</script>

<style lang='scss' scoped>

</style>