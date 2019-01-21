
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" @initWebSocket="start" :positionClass="positionClass" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :urlparas="urlparas" :id="id" :option="option" :chartLibrary="chartLibrary" @getData="getData" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary, ThresholdLimiter } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options } from 'highcharts';
import { inout, drawActionOptions} from "@/components/options/TimeLineOptions.ts";
import { getDataPromise, PostPath , insertInitData} from "@/actions/axiosProxy.ts";
import { TimeLineChart,TimeLineChartTrans, HeatmapChartTrans, TimeLineDataTrans } from "@/types/postreturnform.ts";
import {listdata, drawHeatmapOptions } from "@/components/options/HeatMapOptions.ts";
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import PubSub from 'pubsub-js';
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import {entityinitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TimeLineHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
    private titlename = TitleName.TimeLine;
    private candraggable = false;
    private date: Moment = moment();
    private thresholdlimiter: ThresholdLimiter = {
        threshold: 0,
        positive: true,
        negative: true,
        range:[-3,3],
    };
    // private mounted() {
    // }
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("关闭timeline");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<TimeLineChart,TimeLineChartTrans>(this.urlparas,PostPath.exceptionOutput,this.axiosSource,this.dealData);
      promise.then(
        (data: string | TimeLineChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawActionOptions(data, "异常",this.thresholdlimiter);
            // const option2 = drawActionOptions(inout, "异常",this.thresholdlimiter);
            // const newdata = this._TimeLine2Heatmap(data);
            // const option2 = drawHeatmapOptions(newdata, "异常","" ,"" as any);
            (option2 as any).change = updatestate.redraw;
            this.option = option2 as any;
            // console.log("timelinedata",this.option);
          }
        }
      );
    }

    // private _TimeLine2Heatmap(data: TimeLineChartTrans): HeatmapChartTrans {
    //   // let newdata : HeatmapChartTrans = [];
    // //    x: string; // 代表 1201065
    // // name: string; // "8号",
    // // y: number; // 0,
    // // value: number; // 0,
    //   const newdata: HeatmapChartTrans = Array.from(data as any).map(
    //       (value: TimeLineDataTrans)=> {
    //         return {
    //           x: value.id,
    //           name: moment(value.starttime).format("MM-DD"),
    //           y: 1,
    //           value: value.value
    //         };
    //       }
    //   );
    //   return newdata;
    // }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(entity: string) {
      this.cancelAxios();
      this.option = highchartEmptyOption(entity) as any;
      // console.log("上层图表 TimeLineHighChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private destroyed() {
      // clearInterval(this.intervalid);
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
    @Emit()
    private toggledrag(val: boolean) {
        this.candraggable = val;
    }
    @Emit()
    private start() {
      // 重新画图
      this.redraw(this.postparms.entity);
    }
    private mounted() {
      const {entity, pid, level} = entityinitconfig;
      const datapromise = insertInitData(pid, entity, level, this);
    }
}
</script>

<style scoped>

</style>