<template>
  <div class="home">
    <HighchartFactory v-for="(one, index) in datalist" 
        :urlparas="one.urlparas" :option="one.option" 
        :positionClass="one.positionClass" 
        :key="index" 
        :id="one.id" 
        @ajaxFunc="ajaxFunc"
        :data="one" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HighchartFactory from "@/components/HighchartFactory.vue";
import { PositionClass , PostParams , Dimenssion } from "@/types/index.ts";
import { Options } from 'highcharts';
const initUrlProps: PostParams = {
  entity: "99999998",
  starttime: "2018-01-01 00:00:00",
  endtime: "2018-01-02 00:00:00",
  entitynums: 20,
  scale: 60 * 60,
  winlen: 30 * 24 * 60 * 60,
  dimension: Dimenssion.box,
};

@Component({
  components: {
    HighchartFactory,
  },
  data() {
    return {
      datalist: [
        {id: "chart-single-boxchart", urlparas: initUrlProps,
          option: {xAxis: "1"}, positionClass: PositionClass.LeftTop},
        {id: "chart-region-boxchart", urlparas: initUrlProps,
          option: {xAxis: "2"}, positionClass: PositionClass.RightTop},
        {id: "chart-heatmap", urlparas: initUrlProps,
          option: {xAxis: "4"}, positionClass: PositionClass.Center},
        {id: "chart-single-action", urlparas: initUrlProps,
          option: {xAxis: "1"}, positionClass: PositionClass.LeftBottom},
        {id: "chart-region-linechart", urlparas: initUrlProps,
          option: {xAxis: "2"}, positionClass: PositionClass.RightMiddle},
        {id: "chart-single-linechart", urlparas: initUrlProps,
          option: {xAxis: "4"}, positionClass: PositionClass.LeftMiddle},
        {id: "chart-top", urlparas: initUrlProps,
          option: {xAxis: "1"}, positionClass: PositionClass.RightBottom},
      ],
    };
  },
  beforeCreate() {
    // console.log("Home", PositionClass.LeftTop);
  },
  methods: {
      ajaxFunc(paras: PostParams): Options {
        console.log("11111111", paras.entity, paras.starttime,
                  paras.endtime, paras.entitynums, paras.scale, paras.winlen, paras.dimension,
                  (this as any),
                  );
        this.$data.datalist[0].option.xAxis = 10000;
        return {};
      },
  },
})
export default class Home extends Vue {
}
</script>


<style>
body {
    /* background-color: gray; */
    background-image: url("/xinjiang/img/background4.jpg") ;
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-attachment: fixed; 
    background-position: center center;
    height:100vh;
    width:100vw;
    overflow: hidden;
    margin: 0;
}
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
</style>

