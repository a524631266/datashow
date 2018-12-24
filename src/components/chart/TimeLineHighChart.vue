
<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
        <LittleBar :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :urlparas="urlparas" :id="id" :option="option" :chartLibrary="chartLibrary" @getData="getData" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options , HeatMapSeriesOptions} from 'highcharts';
import { inout, drawActionOptions} from "@/components/options/TimeLineOptions.ts";
import { getDataPromise, PostPath } from "@/actions/axiosProxy.ts";
import { TimeLineChart,TimeLineChartTrans } from "@/types/postreturnform.ts";
import PubSub from 'pubsub-js';
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TimeLineHighChart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = {};
    public postInterval =  2000 ;
    public entity =  "";
    private intervalid = 0;
    private chartLibrary = ChartLibrary.highchart;
    private titlename = "异常";
    // private mounted() {
    // }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(val: boolean) {
      console.log("监听 entity timeline",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private destroyed() {
      clearInterval(this.intervalid);
    }
    @Emit()
    private getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<TimeLineChart,TimeLineChartTrans>(this.urlparas,PostPath.exceptionOutput,this.dealData);
      promise.then(
        (data: string | TimeLineChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawActionOptions(data, "异常");
            (option2 as any).change = !change;
            this.option = option2;
            // console.log("timelinedata",this.option);
          }
        }
      );
    }
    private dealData(data: TimeLineChart): TimeLineChartTrans {
      let result: TimeLineChartTrans = [];
      result = data.action;
      return result;
    }
    @Emit()
    private handledoubleclick() {
      PubSub.publish("doubleclick2changecenter",this.id);
    }
}
</script>

<style scoped>

</style>