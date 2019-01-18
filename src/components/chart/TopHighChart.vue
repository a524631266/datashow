
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
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
import { getDataPromise, PostPath, insertInitData } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { TopChart, TopChartTrans } from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import {orginitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class TopHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption(undefined);
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
    private titlename = TitleName.Top;
    private candraggable = false;
    private date: Moment = moment();
    // private mounted() {
    // }
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("关闭重点图表");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取TopHighChart数据");
      const promise = getDataPromise<TopChart,TopChartTrans>(this.urlparas,PostPath.topChart,this.axiosSource,this.dealData);
      promise.then(
        (data: string | TopChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawTopOptions(data, "重点","",this.showTooltiop);
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
      // this.option = highchartEmptyOption();
      const option: any = highchartEmptyOption(entity);
      this.option = option;
      // console.log("上层图表  TopHighChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
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
      const {entity, pid, pidlevel: level} = orginitconfig;
      const datapromise = insertInitData(pid, entity, level, this);
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