
<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
        <LittleBar :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :urlparas="urlparas" :id="id" :option="option" @updateData="way2UpdateData" :chartLibrary="chartLibrary" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options , HeatMapSeriesOptions} from 'highcharts';
import {listdata, drawHeatmapOptions } from "@/components/options/HeatMapOptions.ts";
import { getDataPromise, PostPath } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { HeatmapChart, HeatmapChartTrans } from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class HeatMapHighChart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public option: Options = highchartEmptyOption();
    public postInterval =  2000 ;
    public entity =  "";
    private intervalid = 0;
    private chartLibrary = ChartLibrary.highchart;
    private titlename = "热力图";
    private mounted() {
      // this.intervalid = setTimeout(
      //   () => {
      //       const option2 = drawHeatmapOptions(listdata, "HeatMap","" ,this.showTooltiop) as any;
      //       (option2 as any).change = false;
      //       this.option = option2;
      //       // console.log(this.option);
      //   },
      //   this.postInterval
      // );
    }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(val: boolean) {
      // this.option = drawHeatmapOptions([{x: "0",name: "",y: 0,value: 0}], "HeatMap","" ,this.showTooltiop) as any;
      this.option = highchartEmptyOption();
      console.log("上层图表 HeatMapHighCHart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    @Emit()
    private getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<HeatmapChart,HeatmapChartTrans>(this.urlparas,PostPath.heatmap,this.dealData);
      promise.then(
        (data: string | HeatmapChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawHeatmapOptions(data, "HeatMap","" ,this.showTooltiop);
            (option2 as any).change = !change;
            this.option = option2 as any;
            // console.log("timelinedata",this.option);
          }
        }
      );
    }
    private dealData(data: HeatmapChart): HeatmapChartTrans {
      let result: HeatmapChartTrans = [];
      result = data.table;
      return result;
    }
    private showTooltiop(entity: string, name: string,clientX: number,clientY: number,target: DOMRect) {
      // 方法在 LeftBar中订阅
      const level = -1;
      PubSub.publish("showtooltip",{entity,name,isLeaf:true,level,clientX,clientY,target});
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
    private async way2UpdateData(chart: any,oldoption: any) {
      chart.setOptions(this.option);
    }

}
</script>

<style scoped>

</style>