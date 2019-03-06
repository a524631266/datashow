
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar  @initWebSocket="start" :positionClass="positionClass" :date="date" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
          <BaseChartFactory :positionClass="positionClass" :id="id" :urlparas="urlparas"  @updateData="way2UpdateData" :option="option" :chartLibrary="chartLibrary" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import TimeSlicing from "@/util/TimeSlicing.ts";
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
// import Highcharts, { Options } from 'highcharts';
import {boxchart3, xAxis3} from "@/components/options/BoxOptions.ts";
import { drawOption } from "@/components/chart/tabletypes/stackline/option.ts";
import { getDataPromise, PostPath, insertInitData } from "@/api/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { RegionStackLine,RegionStackLineTrans} from '@/types/postreturnform';
import echarts from "echarts";
import "echarts/dist/extension/dataTool.min.js";
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import TitleName from '@/types/elecchartname.ts';
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class RegionStackLineEChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.echart;
    private titlename = TitleName.ReginStatic;
    private candraggable = false;
    private date: Moment = moment();
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("destroy singebox");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<RegionStackLine ,RegionStackLineTrans>(this.urlparas,PostPath.regionStackLine,this.axiosSource,this.dealData);
      promise.then(
        (data: string | RegionStackLineTrans) => {
          // console.log("RegionBox",data);
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 =  drawOption(data, { showlegentd: false });
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
      this.option = highchartEmptyOption(entity) as any;
      // this.option.change = updatestate.redraw;
      // console.log("上层图表 BoxSingleChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private initAxiosSource() {
      this.axiosSource.cancel("destorysource");
      this.axiosSource = Axios.CancelToken.source();
    }
    private dealData(data: RegionStackLine): RegionStackLineTrans {
      const result: RegionStackLineTrans = data;
      console.log("data",data);
      return result;
    }
    private mounted() {
      // const {entity, pid, level} = entityinitconfig;
      // const datapromise = insertInitData(pid, entity, level, this);
      this.redraw(this.postparms.entity);
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
    @Emit()
    private way2UpdateData(chart: any,newoption: any,baseChartFactory: any) {
        // (chart as any).setOption(newoption);
        // console.log("11111111");
        // baseInstance.showLoading =false;
        new Promise(
            (resolve,reject)=> {
                (baseChartFactory as any).showLoading = true;
                // 1.销毁图表实例
                ((baseChartFactory as any).chartInstance as any).dispose();
                const nodeid = document.getElementById(this.id);
                const mychart = echarts.init(nodeid as any);
                // 2.设置空配置
                mychart.setOption(newoption);
                (baseChartFactory as any).chartInstance = mychart as any;
                resolve("success");
                // console.log("chart",mychart.getOption());
            }
        ).then(
            (data)=> {
                if (newoption.change !== updatestate.error) {
                  (baseChartFactory as any).showLoading = false;
                }
            }
        );
    }
}
</script>

<style scoped>

</style>