
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :id="id" :option="option" :urlparas="urlparas" :chartLibrary="chartLibrary" slot="chart"/>
        </LittleBar>
        
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options , HeatMapSeriesOptions} from 'highcharts';
import {listdata, drawLineOptions } from "@/components/options/TrendOptions.ts";
import { getDataPromise, PostPath } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { SingleTrendChart, RegionTrendChart,TrendChartTrans } from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TrendHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption(undefined);
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
    private titlename = "趋势";
    private candraggable = false;
    private date: Moment = moment();
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("趋势图关闭");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取TopHighChart数据");
      const promise = getDataPromise<SingleTrendChart | RegionTrendChart,TrendChartTrans>(this.urlparas,this.urlparas.isLeaf?PostPath.singleLineChart:PostPath.regionLineChart,this.axiosSource,this.dealData);
      promise.then(
        (data: string | TrendChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawLineOptions(data, "趋势图");
            (option2 as any).change = updatestate.redraw;
            this.option = option2 as any;
            // console.log("TopHighChartdata",this.option);
          }
        }
      );
    }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(entity: string) {
      this.cancelAxios();
      this.option = highchartEmptyOption(entity);
      console.log("上层图表 TrendHighChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private dealData(data: SingleTrendChart | RegionTrendChart): TrendChartTrans {
      let result: TrendChartTrans = [];
      if (this.urlparas.isLeaf) { // 如果是配电柜的话
        result = (data as SingleTrendChart).linechart;
      } else { //  如果是组织的话
        result = (data as RegionTrendChart).region.linechart;
      }
      return result;
    }
    private mounted() {
      // this.intervalid = setTimeout(
      //   () => {
      //       const option2 = drawLineOptions(listdata,"趋势图") as any;
      //       (option2 as any).change = false;
      //       this.option = option2;
      //       // console.log(this.id);
      //   },
      //   this.showinterval
      // );
      // 通过change来获取定义属性的变化
    //   setInterval(
    //       () => {
    //           console.log("第二次变化");
    //           // boxchart3[1].data[0][1] = 133333000;
    //         //   (this.option as any).series[1].data[0][1] = Math.random()*10000;
    //           (this.option as any).change = !(this.option as any).change ;
    //           // this.option =  drawBoxOptions(boxchart3, xAxis3 , this.id) as Options;
    //           console.log(this.option);
    //       },
    //       this.showinterval+3000
    //   );
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      // clearInterval(this.intervalid);
    }
    @Emit()
    private handledoubleclick() {
      // console.log("double click",this.id);
      PubSub.publish("doubleclick2changecenter",this.id);
      // this.resizeChart();
      // (this.option as any).change = !(this.option as any).change;
    }
    @Emit()
    private toggledrag(val: boolean) {
        this.candraggable = val;
    }
    @Emit()
    private start() {
      // 重新画图
      this.redraw(this.postparms.entity);
    }
}
</script>

<style scoped>

</style>