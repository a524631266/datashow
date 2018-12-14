
<template>
  <div :class="positionClass" draggable="true" >
        <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms">
            <BaseChartFactory :id="id" :option="option" slot="chart"/>
        </LittleBar>
        
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options , HeatMapSeriesOptions} from 'highcharts';
import {listdata, drawLineOptions } from "@/components/options/TrendOptions.ts";
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TrendHighChart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = {};
    public postInterval =  2000 ;
    public entity =  "";
    public initshow: boolean = this.positionClass === "center"?true: false ;
    private intervalid = 0;
    @Emit()
    public changedata() {
      console.log(this.data);
      if (this.id === "chart-top") {
          this.positionClass = PositionClass.Center;
      }
    }
    private mounted() {
      this.intervalid = setInterval(
        () => {
            const option2 = drawLineOptions(listdata,"趋势图") as any;
            (option2 as any).change = false;
            this.option = option2;
            console.log(this.id);
        },
        this.postInterval
      );
      // 通过change来获取定义属性的变化
      setInterval(
          () => {
              console.log("第二次变化");
              // boxchart3[1].data[0][1] = 133333000;
            //   (this.option as any).series[1].data[0][1] = Math.random()*10000;
              (this.option as any).change = !(this.option as any).change ;
              // this.option =  drawBoxOptions(boxchart3, xAxis3 , this.id) as Options;
              console.log(this.option);
          },
          this.postInterval+3000
      );
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

<style scoped>

</style>