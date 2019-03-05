<template>
  <div class="home">
    <div class="container">

        <component v-for="(one, index) in datalist" 
                    :urlparas="one.urlparas" 
                    :option="one.option"
                    :positionClass="one.positionClass"
                    :key="index"
                    :id="one.id"
                    v-model="one.urlparas"
                    :is="one.chartName"
                    ></component>
    </div>
    <div  class="draw" @click="addcomponent">
        <component v-for="(one, index) in drawerlist" 
                    :urlparas="one.urlparas" 
                    :option="one.option"
                    :positionClass="one.positionClass"
                    :key="index"
                    :id="one.id"
                    v-model="one.urlparas"
                    :is="one.chartName"
                    >
        </component>
    </div>

    <component :is="'EntityInfo'"></component>
  </div>
</template>

<script lang="ts">
import { appVue } from "@/main.ts";
import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
// import HighchartFactory from "@/components/HighchartFactory.vue";
import BoxHighChart from "@/components/chart/BoxHighChart.vue";
import TimeLineHighChart from "@/components/chart/TimeLineHighChart.vue";
import HeatMapHighChart from "@/components/chart/HeatMapHighChart.vue";
import TrendHighChart from "@/components/chart/TrendHighChart.vue";
import ScatterHighChart from "@/components/chart/ScatterHighChart.vue";
import RegionBoxHighChart from "@/components/chart/RegionBoxHighChart.vue";
import TopHighChart from "@/components/chart/TopHighChart.vue";
import GeoMapEchart from "@/components/chart/GeoMapEchart.vue";
import BoxSingleHighChart from "@/components/chart/BoxSingleHighChart.vue";
import EntityInfo from "@/components/EntityInfo.vue";
import SingleScatterEChart from "@/components/chart/SingleScatterEChart.vue";
// import FloatBotton from "@/components/bar/FloatBotton.vue";
import PubSub from 'pubsub-js';

import { PositionClass , PostParams , Dimension } from "@/types/index.ts";

import { InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
        InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps, orginitconfig, entityinitconfig } from "@/config/initOptions.ts";
import { getToken } from '@/util/authcookie';
const orgbox = Object.assign({},InitBoxUrlProps);
const entbox = Object.assign({},InitBoxUrlProps,{isLeaf:true});
const enttrend = Object.assign({},InitTrendUrlProps,{isLeaf:true});
const orgtrend = Object.assign({},InitTrendUrlProps);
const orghp = Object.assign({},InitHeatMapUrlProps);
const enttl = Object.assign({},InitTimeLineUrlProps,{isLeaf:true});
const orgtop = Object.assign({},InitTopUrlProps);
const geo = Object.assign({},InitGeomapUrlProps);

@Component({
  components: {
    // HighchartFactory,
    BoxHighChart,
    TimeLineHighChart,
    HeatMapHighChart,
    TrendHighChart,
    TopHighChart,
    GeoMapEchart,
    BoxSingleHighChart,
    EntityInfo,
    ScatterHighChart,
    RegionBoxHighChart,
    SingleScatterEChart
    // FloatBotton
  },
})
export default class Main extends Vue {
    private datalist: Array<{id: string,urlparas: PostParams, option: {xAxis: string},positionClass: PositionClass,chartName: string}> =  [];
    private centerid = "chart-heatmap";
    private drawerlist = [
        {id: "chart-region-boxchart", urlparas: orgbox,
          option: {xAxis: "1"}, positionClass: PositionClass.Drawer,chartName:"BoxHighChart"},
    ];
    // public beforeEnter(to: string, from: string, next: string) {
    //     // ...
    //     console.log("to:",to,"--form",from,"next", next);
    // }
    public beforeCreate() {
      // tslint:disable-next-line:no-empty
      if(getToken() || process.env.NODE_ENV==="development") {} else {
        window.location.href="./index.html";
      }
    }
    // @Emit()
    // public ajaxFunc(paras: PostParams) {
    //     this.datalist[0].option.xAxis = "10000";
    //     return {};
    // }
    @Emit()
    // tslint:disable-next-line:no-empty
    public addcomponent() {
    }
    // @Watch("datalist",{deep: true})
    // private changedatalist(val: any) {
    //     console.log("val","更改了数据", val);
    // }
    @Watch("$route.query.entity",{deep: true})
    private routerchange(val: any) {
        // console.log("路由变化",val,this.$route);
        // 当路由返回的时候，此时的isLeaf变成了文本字符串，需要判断
        const bool =  (this.$route.query.isLeaf === "false" || !this.$route.query.isLeaf)?false:true;
        // console.log("this.$route.query.isLeaf",this.$route.query.isLeaf);
        // 默认当val为undefined的时候或者 当前的 this.$route.query为空的时候使用默认选项，即用户开始登陆的界面
        if ( val !== undefined ) {
            this.datalist.forEach(
                (data: any,index: number)=> {
                    // 根据是否是子节点，导入更新
                    if(this.datalist[index].urlparas.isLeaf === bool) {
                        this.datalist[index].urlparas.entity = val;
                        this.datalist[index].urlparas.name = this.$route.query.name as any;
                        this.datalist[index].urlparas.level = this.$route.query.level as any;
                        this.datalist[index].urlparas.coord = this.$route.query.coord as any;
                        // this.datalist[index].urlparas.pageid = 1;
                        // this.datalist[index].urlparas.entitynums = this.$route.query.entitynums as any;
                    }
                }
            );
        } else { // 这里主要是因为首页状态下，即无参数的情况下的数据
            const org = orginitconfig;
            const entity = entityinitconfig;
            this.datalist.forEach(
                (data: any,index: number)=> {
                    // 根据是否是子节点，导入更新
                    const isLeaf = this.datalist[index].urlparas.isLeaf;
                    this.datalist[index].urlparas.entity = isLeaf?entity.entity:org.entity;
                    this.datalist[index].urlparas.name = isLeaf?entity.name: org.name;
                    this.datalist[index].urlparas.level = isLeaf?entity.level: org.pidlevel + 1;
                    this.datalist[index].urlparas.coord = [0,0];
                    // this.datalist[index].urlparas.pageid = 1;
                }
            );
            PubSub.publish("updaterightbarname",entity.name);
        }
        // 同时更新标题
        if (bool) {
            PubSub.publish("updaterightbarname",this.$route.query.name);
        } else {
            PubSub.publish("updateleftbarname",this.$route.query.name);
        }
    }
    private created() {
        const initdata: Array<{id: string,urlparas: PostParams, option: {xAxis: string},positionClass: PositionClass,chartName: string}> = [
            {id: "chart-top", urlparas: orgtop,
                option: {xAxis: "1"}, positionClass: PositionClass.RightBottom,chartName:"TopHighChart"},
            // {id: "chart-single-boxchart", urlparas: entbox,
            // option: {xAxis: "2"}, positionClass: PositionClass.LeftTop,chartName:"BoxSingleHighChart"},
            {id: "chart-single-boxchart", urlparas: entbox,
            option: {xAxis: "2"}, positionClass: PositionClass.LeftTop,chartName:"SingleScatterEChart"},
            {id: "chart-single-action", urlparas: enttl,
            option: {xAxis: "1"}, positionClass: PositionClass.LeftBottom,chartName:"TimeLineHighChart"},
            {id: "chart-single-linechart", urlparas: enttrend,
            option: {xAxis: "2"}, positionClass: PositionClass.LeftMiddle,chartName:"TrendHighChart"},
            {id: "chart-region-linechart", urlparas: orgtrend,
            option: {xAxis: "4"}, positionClass: PositionClass.RightMiddle,chartName:"RegionBoxHighChart"},
            //  {id: "chart-region-linechart", urlparas: orgtrend,
            // option: {xAxis: "4"}, positionClass: PositionClass.RightMiddle,chartName:"ScatterHighChart"},
            {id: "chart-heatmap", urlparas: orghp,
            option: {xAxis: "4"}, positionClass: PositionClass.Center,chartName:"HeatMapHighChart"},
            {id: "chart-geomap", urlparas: geo,
            option: {xAxis: "1"}, positionClass: PositionClass.RightTop,chartName:"GeoMapEchart"},
        ];
        // query
        //     :
        //     coord
        //     :
        //     (2) ["81.156013", "40.349444"]
        //     entity
        //     :
        //     "99956028"
        //     entitynums
        //     :
        //     "1503"
        //     isLeaf
        //     :
        //     "false"
        //     level
        //     :
        //     "3"
        //     name
        //     :
        //     "阿克苏"
        // const bool =  (this.$route.query.isLeaf === "false" || !this.$route.query.isLeaf)?false:true;
        // 在初始化的时候路由有参数就用带参数的地址作为一个连接
        if(this.$route.query.entity) {
            initdata.forEach(
                (value ,index)=> {
                    const {coord, entity, isLeaf, level, name} = this.$route.query;
                    if( value.urlparas.isLeaf === false) {
                        initdata[index].urlparas.coord = coord as any;
                        initdata[index].urlparas.entity = entity as any;
                        initdata[index].urlparas.isLeaf = isLeaf as any;
                        initdata[index].urlparas.level = level as any;
                        initdata[index].urlparas.name = name as any;
                    }
                }
            );
        } else { // home.html/情况下
            initdata.forEach(
                (value ,index)=> {
                    const {coord, entity, isLeaf, level, name} = this.$route.query;
                    if( value.urlparas.isLeaf === false) {
                        initdata[index].urlparas.coord = [0 ,0 ];
                        initdata[index].urlparas.entity = orginitconfig.entity;
                        initdata[index].urlparas.level = orginitconfig.pidlevel + 1;
                        initdata[index].urlparas.name = orginitconfig.name;
                    } else {
                        initdata[index].urlparas.coord = [0,0];
                        initdata[index].urlparas.entity = entityinitconfig.entity;
                        initdata[index].urlparas.isLeaf = true;
                        initdata[index].urlparas.level = entityinitconfig.level;
                        initdata[index].urlparas.name = entityinitconfig.name;
                    }
                }
            );
        }
        // console.log("this router",this.$route);
        this.datalist = initdata;
    }
    private mounted() {
        const that = this;
        // 1. home订阅交互的消息 用来处理双击交换中心图
        PubSub.subscribe("doubleclick2changecenter",(mesg: any, id: string)=> {
            let idindex= 0;
            let beforepositionClass = "";
            let geoIndex = 0;
            let geopositionClass = "";
            this.datalist.some(
                (data: any,index: number) => {
                    // tslint:disable-next-line:no-unused-expression
                    if (data.id === this.centerid) {
                        geoIndex = index;
                        geopositionClass = data.positionClass;
                        return true;
                    } else {
                        return false;
                    }
                }
            );
            this.datalist.some(
                (data: any,index: number) => {
                    // tslint:disable-next-line:no-unused-expression
                    if (data.id === id) {
                        idindex = index;
                        beforepositionClass = that.datalist[index].positionClass;
                        return true;
                    } else {
                        return false;
                    }
                }
            );
            if (beforepositionClass !== PositionClass.Center) {
                this.datalist.some(
                    ( data: any ,index: number) => {
                        if(data.positionClass === PositionClass.Center) {
                            // debugger;
                            if (id === this.centerid || data.id === this.centerid ) {
                                that.datalist[index].positionClass = beforepositionClass as any;
                                that.datalist[idindex].positionClass = PositionClass.Center;
                            } else {
                                that.datalist[idindex].positionClass = PositionClass.Center;
                                that.datalist[index].positionClass = geopositionClass as any;
                                that.datalist[geoIndex].positionClass = beforepositionClass as any;
                            }
                            return true;
                        } else {
                            return false;
                        }
                    }
                );
            }
            PubSub.publish("showCenterBar",null);
        });
    }
}
</script>


<style lang="scss">
$sliderbaseheight: 2;
$antdsliderheight: $sliderbaseheight + px;
.left-bottom,.left-middle,.left-top,.center,.right-bottom,.right-middle,.right-top{
    border-radius: 2px;
    /* background-image: radial-gradient(circle at center,#000066 0%,#000048 100%); */
    background-image: radial-gradient(circle at center,#000066 0%,#000000 200%);
    color: white;   
    /* border: 30px; */
    /* margin:5px; */
    /* margin: 1px 1px 1px 1px; */
    /* border: 2px solid #000050;
    box-shadow: 0 2px 10px #000000; */
}
#tooltip::after{
    content: '';
    top: 50%;
    left: 0%;
    /* border: solid transparent; */
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    /* border-top-color: #2a3035; */
    /* border-width: 10px; */
    margin-left: -15px;
    margin-top: -5px;
    border-top: 7px solid transparent;
    border-right: 15px solid white;
    border-bottom: 7px solid transparent;
}
#chart-top .highcharts-tooltip,#chart-heatmap .highcharts-tooltip,#chart-region-linechart .highcharts-tooltip{
    pointer-events: auto !important;
}

// #chart-top .highcharts-tooltip span:hover,#chart-heatmap .highcharts-tooltip span:hover{
//     pointer-events: none !important;
// }
#chart-top .highcharts-tooltip span a, #chart-top .highcharts-tooltip span b,#chart-heatmap .highcharts-tooltip span a, #chart-heatmap .highcharts-tooltip span b{
    pointer-events: auto !important;
}
#bar{
    height: 3rem;
    position: relative;
}
// #container{
//     height: 90vh;
//     position: relative;
// }
:global(.ant-fullcalendar table ){
    height: auto;
    font-size: 13px;
}
:global(.ant-progress-text) {
  color: white ;
}
:global(.ant-checkbox-wrapper span) {
  color: white ;
}
:global(.ant-breadcrumb-separator){
    // margin: 0px 0px !important;
    color: white !important;
}
:global(.ant-fullcalendar-column-header-inner) {
  color: white ;
}
:global(.ant-fullcalendar-selected-day span) {
    background: rgb(83, 117, 228);
}
:global(.ant-select-selection--single){
    background: transparent;
    border: 0;
    color: white;
}
:global(.ant-slider-dot){
    display: none;
}
    /* 日历空格居中 */
    /* display: flex;
    justify-content: center; */
:global(.ant-fullcalendar-cell){
    color: white;
    text-align: center;
}
/* :global(.ant-fullcalendar-last-month-cell .ant-fullcalendar-value) {
    color: white;
}
:global(.ant-fullcalendar-next-month-btn-day .ant-fullcalendar-value){
    color: white;
} */
:global(.upload-list-inline .ant-upload-list-item){
  float: left;
  max-width: 100px;
  margin-right: 8px;
}
:global(.upload-list-inline .ant-upload-list-item span){
  color: white;
}
:global(.upload-list-inline .ant-upload-list-item button){
    display: flex;
    align-items: center;
}
:global(.ant-select-selection .ant-select-selection-selected-value){
  color: #495057;
}
:global(.upload-list-inline .anticon-cross){
  color: white;
}
:global(.ant-select-dropdown-content) {
    min-width:10rem;
    background: white;
    border-radius: 5px;
}
:global(.upload-list-inline .ant-upload-animate-enter){
  animation-name: uploadAnimateInlineIn;
}
:global(.upload-list-inline .ant-upload-animate-leave){
  animation-name: uploadAnimateInlineOut;
}
:global(.upload-list-inline .ant-upload-animate-leave){
  animation-name: uploadAnimateInlineOut;
}

:global(.ant-fullcalendar-value) {
    color: white;
    width: auto!important;
    height:auto!important;
    line-height:19px!important;
}
:global(.ant-btn-circle) {
    background: transparent;
    border: 0;
}
:global(.ant-btn-circle:hover) {
    background: gray;
    border: 0;
}
:global(.anticon-play-circle){
    color: white;
}
:global(.ant-slider-track ) {
    height: $sliderbaseheight + px;
}
:global(.ant-slider-step) {
    height: $sliderbaseheight + px;
}
:global(.ant-slider-rail) {
    height: $sliderbaseheight + px;
}
:global(.ant-slider-handle) {
    // height: $sliderbaseheight * 2 + px;
    border-radius: 50%;
    height: 2px;
    margin-top: -5px;
    width: 12px;
    height: 12px;
    border: solid 6px #91d5ff;
    // margin-top: -$sliderbaseheight * 2 + px;;
}
:global(.ant-fullcalendar-header) {
    display: flex;
    justify-content: center;
}
:global(.ant-fullcalendar-header > div:nth-child(1)) {
    width: 50%;
}
:global(.ant-fullcalendar-header > div:nth-child(2)) {
    width: 50%;
}
:global(.ant-fullcalendar-header > div:nth-child(3)) {
    display: none;
}
:global(.ant-fullcalendar-header > div:nth-child(2) > div > div ) {
    width: 100%;
    justify-content: flex-end;
    display: flex;
}
:global(.ant-fullcalendar-header > div:nth-child(1) > div > div ) {
    width: 100%;
    justify-content: flex-end;
    display: flex;
}

.right-top{
    position:absolute;
    left:0%;
    width: 20%;
    height: 33%;
    top:0%;
}
.left-top{
    position:absolute;
    left:80%;
    width: 20%;
    height: 33%;
    top:0%;
}
.right-middle{
    position:absolute;
    left:0%;
    width: 20%;
    height: 33%;
    top:33%;
}
.left-middle{
    position:absolute;
    left:80%;
    width: 20%;
    height: 33%;
    top:33%;
}
.left-bottom{
    position:absolute;
    left:80%;
    width: 20%;
    height: 33%;
    top:66%;
}
.right-bottom{
    position:absolute;
    left:0%;
    width: 20%;
    height: 33%;
    top:66%;
}
.center{
    position:absolute;
    left:20%;
    width: 60%;
    height: calc(99% + 24px);
    top:0%;
    z-index: 400;
    transform: translateY(-24px);
}

#left-title{
    pointer-events: none;
    position:absolute;
    left:0%;
    width: 20%;
    height: 4%;
    top:0%;
    z-index: 9997;
    background:"white";
    color: white;
}
#right-title{
    pointer-events: none;
    position:absolute;
    left:80%;
    width: 20%;
    height: 4%;
    top:0%;
    z-index: 9997;
    background:"white";
    color: white;
}
#left-title span,#right-title span{
    font-size: 2rem;
    left:50%;
    position: absolute;
    margin-left: -25%;
}
.testdiv{
    position: absolute;
    width:200px;
    height:200px;
    top:100%;
    background:red;
    transform: translate(50px,50px)
}
.home {
    height: 100%;
    width: 100%;
}
.container {
    height: calc(100%-24px) !important;
    /* width: 100%; */
}
.draw {
    display: none;
}
.highcharts-exporting-group {
    display: none!important;
};
#chart-single-action .highcharts-yaxis {
    display: none;
}
#chart-single-action .highcharts-yaxis:nth-child(4) {
    display: block;
}


</style>

