
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
          <BaseChartFactory :positionClass="positionClass" :id="id" :urlparas="urlparas" :option="option" :chartLibrary="chartLibrary" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import {boxchart3, xAxis3,drawBoxOptions} from "@/components/options/BoxOptions.ts";
import { getDataPromise, PostPath, insertInitData } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { RegionBoxChart, SingleBoxChart, BoxChartTrans } from '@/types/postreturnform';
import echarts from "echarts";
import "echarts/dist/extension/dataTool.min.js";
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import {orginitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
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
export default class BoxHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public option: Options = highchartEmptyOption(undefined);
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
    private titlename = TitleName.Box;
    private candraggable = false;
    private date: Moment = moment();
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("删除组织box");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<RegionBoxChart ,BoxChartTrans>(this.urlparas,PostPath.regionBoxChart,this.axiosSource,this.dealData);
      promise.then(
        (data: string | BoxChartTrans) => {
          // console.log("data",data);
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 =  drawBoxOptions(data.boxchart, data.xAxis , this.id);
            (option2 as any).change = updatestate.redraw;
            this.option = option2 as any;
            // console.log("BoxSingleHighChart",this.option);
          }
        }
      );
    }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(entity: string) {
      this.cancelAxios();
      // this.option = {} as any;
      this.option = drawBoxOptions([], [] , this.id) as any;
      // console.log("上层图表 BoxHighcart变动",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private dealData(data: RegionBoxChart): BoxChartTrans {
      const result: BoxChartTrans = {xAxis:[],boxchart:[]} as any;
      const xAxisList = data.region.boxchart.xAxis;
      // 转换数据值
      const boxList = data.region.boxchart.boxs;
      const ydata = (echarts as any).dataTool.prepareBoxplotData(boxList);
      const data2 = [
        {
          name: "电流",
          data: ydata.boxData
        },
        {
          name: '异常值',
          color: "",// (Highcharts as any).getOptions().colors[0] as any,
          type: 'scatter',
          data: ydata.outliers as any,
          marker: {
              fillColor: 'white',
              lineWidth: 1,
              radius:1,
              lineColor: "", // (Highcharts as any).getOptions().colors[0] as any,
          },
          tooltip: {
              pointFormat: 'Observation: {point.y}'
          }
        }
      ];
      result.xAxis = xAxisList;
      result.boxchart = data2 as any;
      return result;
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
    private resizeChart() {
      const change = !(this.option as any).change;
      (this.option as any).change = change;
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
.spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>