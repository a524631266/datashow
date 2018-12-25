
<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
        <LittleBar :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :id="id" :option="option" :urlparas="urlparas" :chartLibrary="chartLibrary" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams,ChartLibrary } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options , HeatMapSeriesOptions} from 'highcharts';
import {objectlist, drawTopOptions } from "@/components/options/TopOptions.ts";
import { getDataPromise, PostPath } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { TopChart, TopChartTrans } from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TopHighChart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption();
    public postInterval =  2000 ;
    public entity =  "";
    private intervalid = 0;
    private chartLibrary = ChartLibrary.highchart;
    private titlename = "重点";
    // private mounted() {
    // }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(val: boolean) {
      this.option = highchartEmptyOption();
      console.log("上层图表  TopHighChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    @Emit()
    private getData() {
      // console.log("获取TopHighChart数据");
      const promise = getDataPromise<TopChart,TopChartTrans>(this.urlparas,PostPath.topChart,this.dealData);
      promise.then(
        (data: string | TopChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawTopOptions(data, "重点","",this.showTooltiop);
            (option2 as any).change = !change;
            this.option = option2 as any;
            // console.log("TopHighChartdata",this.option);
          }
        }
      );
    }
    private dealData(data: TopChart): TopChartTrans {
      let result: TopChartTrans = [];
      result = data.top;
      return result;
    }
    private showTooltiop(entity: string, name: string,clientX: number,clientY: number,target: DOMRect) {
      // 方法在 LeftBar中订阅
      const level = -1;
      PubSub.publish("showtooltip",{entity,name,isLeaf:true,level,clientX,clientY,target});
    }
    private mounted() {
      console.log("加载topChart");
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
}
</script>

<style scoped>

</style>