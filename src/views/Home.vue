<template>
  <div class="home">
    <!-- <HeatMapHighChart :urlparas="datalist[2].urlparas" 
        :positionClass="datalist[2].positionClass" 
        :key="2" 
        :id="datalist[2].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[2]"
        v-model="datalist[2].urlparas"
    /> -->
    <BoxHighChart :urlparas="datalist[0].urlparas" 
        :positionClass="datalist[0].positionClass" 
        :key="0" 
        :id="datalist[0].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[0]"
        v-model="datalist[0].urlparas"
    />
    <BoxHighChart :urlparas="datalist[1].urlparas" 
        :positionClass="datalist[1].positionClass" 
        :key="1" 
        :id="datalist[1].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[1]"
        v-model="datalist[1].urlparas"
    />
    <TrendHighChart :urlparas="datalist[4].urlparas" 
        :positionClass="datalist[4].positionClass" 
        :key="4" 
        :id="datalist[4].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[4]"
        v-model="datalist[4].urlparas"
    />
    <TrendHighChart :urlparas="datalist[5].urlparas" 
        :positionClass="datalist[5].positionClass" 
        :key="5" 
        :id="datalist[5].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[5]"
        v-model="datalist[5].urlparas"
    />
    <TopHighChart :urlparas="datalist[6].urlparas" 
        :positionClass="datalist[6].positionClass" 
        :key="6" 
        :id="datalist[6].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[6]"
        v-model="datalist[6].urlparas"
    />
    <TimeLineHighChart :urlparas="datalist[3].urlparas" 
        :positionClass="datalist[3].positionClass" 
        :key="3" 
        :id="datalist[3].id" 
        @ajaxFunc="ajaxFunc"
        :data="datalist[3]"
        v-model="datalist[3].urlparas"
    />
    <!-- <HighchartFactory v-for="(one, index) in datalist" 
        :urlparas="one.urlparas" :option="one.option" 
        :positionClass="one.positionClass" 
        :key="index" 
        :id="one.id" 
        @ajaxFunc="ajaxFunc"
        :data="one"
        v-model="one.urlparas"
    /> -->
    <GeoMapEchart :urlparas="datalist[7].urlparas" 
            :positionClass="datalist[7].positionClass" 
            :key="7" 
            :id="datalist[7].id" 
            @ajaxFunc="ajaxFunc"
            :data="datalist[7]"
            v-model="datalist[7].urlparas">
    </GeoMapEchart>
    <div id="testdiv" class="testdiv" @click="addcomponent">111
    </div>
  </div>
</template>

<script lang="ts">
import { appVue } from "@/main.ts";

import { Component, Vue, Emit } from 'vue-property-decorator';
import HighchartFactory from "@/components/HighchartFactory.vue";
import BoxHighChart from "@/components/chart/BoxHighChart.vue";
import TimeLineHighChart from "@/components/chart/TimeLineHighChart.vue";
import HeatMapHighChart from "@/components/chart/HeatMapHighChart.vue";
import TrendHighChart from "@/components/chart/TrendHighChart.vue";
import TopHighChart from "@/components/chart/TopHighChart.vue";
import GeoMapEchart from "@/components/chart/GeoMapEchart.vue";


import { PositionClass , PostParams , Dimension } from "@/types/index.ts";

import { InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
        InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps } from "@/actions/initOptions.ts";
const orgbox = Object.assign({},InitBoxUrlProps);
const entbox = Object.assign({},InitBoxUrlProps);
const enttrend = Object.assign({},InitTrendUrlProps);
const orgtrend = Object.assign({},InitTrendUrlProps);
const orghp = Object.assign({},InitHeatMapUrlProps);
const enttl = Object.assign({},InitTimeLineUrlProps);
const orgtop = Object.assign({},InitTopUrlProps);
const geo = Object.assign({},InitGeomapUrlProps);

@Component({
  components: {
    HighchartFactory,
    BoxHighChart,
    TimeLineHighChart,
    HeatMapHighChart,
    TrendHighChart,
    TopHighChart,
    GeoMapEchart
  },
})
export default class Home extends Vue {
    private datalist =  [
        {id: "chart-single-boxchart", urlparas: orgbox,
          option: {xAxis: "1"}, positionClass: PositionClass.LeftTop},
        {id: "chart-region-boxchart", urlparas: entbox,
          option: {xAxis: "2"}, positionClass: PositionClass.RightTop},
        {id: "chart-heatmap", urlparas: orghp,
          option: {xAxis: "4"}, positionClass: PositionClass.Center},
        {id: "chart-single-action", urlparas: enttl,
          option: {xAxis: "1"}, positionClass: PositionClass.LeftBottom},
        {id: "chart-region-linechart", urlparas: enttrend,
          option: {xAxis: "2"}, positionClass: PositionClass.RightMiddle},
        {id: "chart-single-linechart", urlparas: orgtrend,
          option: {xAxis: "4"}, positionClass: PositionClass.LeftMiddle},
        {id: "chart-top", urlparas: orgtop,
          option: {xAxis: "1"}, positionClass: PositionClass.RightBottom},
        {id: "chart-geomap", urlparas: geo,
          option: {xAxis: "1"}, positionClass: PositionClass.Center}
    ];
    public beforeCreate() {
    // console.log("Home", PositionClass.LeftTop);
    }
    @Emit()
    public ajaxFunc(paras: PostParams) {
        console.log("11111111", paras.entity, paras.starttime,
                  paras.endtime, paras.entitynums, paras.scale, paras.winlen, paras.dimension,
                  (this as any),
                  );
        this.datalist[0].option.xAxis = "10000";
        return {};
    }
    @Emit()
    // tslint:disable-next-line:no-empty
    public addcomponent() {
    }
}
</script>


<style>

.left-bottom,.left-middle,.left-top,.center,.right-bottom,.right-middle,.right-top{
    border-radius: 5px;
    background: radial-gradient(circle at center,#000066 0%,#000000 200%);
    color: white;   
    /* border: 30px; */
    /* margin:5px; */
    /* margin: 1px 1px 1px 1px; */
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

#bar{
    height: 3rem;
    position: relative;
}
#container{
    height: 90vh;
    position: relative;
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
    height: 100%;
    top:0%;
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
</style>

