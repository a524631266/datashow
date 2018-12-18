
<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
        <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms">
          <BaseChartFactory :positionClass="positionClass" :id="id" :option="option" :chartType="chartType" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartType} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import {boxchart3, xAxis3,drawBoxOptions} from "@/components/options/BoxOptions.ts";
import PubSub from 'pubsub-js';
// import { Component } from "vue-property-decorator";
// @Component({
//     components:{
//         BaseChartFactory
//     },
// })
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class BoxHighChart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public option: Options = {};
    public postInterval =  2000 ;
    public entity =  "";
    public initshow: boolean = this.positionClass === "center"?true: false ;
    private intervalid = 0;
    private chartType = ChartType.highchart;
    @Emit()
    public changedata() {
      console.log(this.data);
      if (this.id === "chart-top") {
          this.positionClass = PositionClass.Center;
      }
    }
    private mounted() {
      this.intervalid = setTimeout(
        () => {
            console.log("11111");
            // Highcharts.chart((this as any).id, (this as any).option as Options);
            // 1.时间timeline配置
            //  drawActionOptions(inout, "1111"));
            // console.log((this as any).changedata(),"this.$props.");
            // 2.箱线图配置
            const option2 =  drawBoxOptions(boxchart3, xAxis3 , this.id) as Options;
            (option2 as any).change = false;
            this.option = option2;
            console.log(this.option);
            // (this as any).$emit("ajaxFunc", this.$props.urlparas);
        },
        this.postInterval
      );
      // 通过change来获取定义属性的变化
      // setInterval(
      //     () => {
      //         console.log("第二次变化");
      //         // boxchart3[1].data[0][1] = 133333000;
      //         (this.option as any).series[1].data[0][1] = Math.random()*10000;
      //         (this.option as any).change = !(this.option as any).change ;
      //         // this.option =  drawBoxOptions(boxchart3, xAxis3 , this.id) as Options;
      //         console.log(this.option);
      //     },
      //     this.postInterval+3000
      // );
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
    @Emit()
    private handledoubleclick() {
      // console.log("double click",this.id);
      PubSub.publish("doubleclick2changecenter",this.id);
      // this.resizeChart();
      // (this.option as any).change = !(this.option as any).change;
    }
    @Emit()
    private resizeChart() {
      const change = !(this.option as any).change;
      (this.option as any).change = change;
    }
}
</script>

<style scoped>

</style>