
<template>
  <!-- <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory @updateData="way2UpdateData" @handleclick="handleclick" :positionClass="positionClass" :id="id" :option="option" :urlparas="urlparas" :chartLibrary="chartLibrary" slot="chart"/>
        </LittleBar>
  </div> -->
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar  @initWebSocket="start" :positionClass="positionClass" :date="date" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
          <BaseChartFactory :positionClass="positionClass" :id="id" :urlparas="urlparas" :option="option" :chartLibrary="chartLibrary" slot="chart" />
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import TimeSlicing from "@/util/TimeSlicing.ts";
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import Highcharts, { Options } from 'highcharts';
import {boxchart3, xAxis3} from "@/components/options/BoxOptions.ts";
import {drawBoxOptions} from "@/components/options/RegionBoxOption.ts";
import { getDataPromise, PostPath, insertInitData } from "@/api/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { RegionBoxChart, BoxChartTrans, RegionBoxChart2 } from '@/types/postreturnform';
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
export default class RegionBoxHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public option: Options = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
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
      const promise = getDataPromise<RegionBoxChart2 ,BoxChartTrans>(this.urlparas,PostPath.regionBoxChart3,this.axiosSource,this.dealData);
      promise.then(
        (data: string | BoxChartTrans) => {
          // console.log("RegionBox",data);
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 =  drawBoxOptions(data, data.xAxis , this.id);
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
      // console.log("上层图表 BoxSingleChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private initAxiosSource() {
      this.axiosSource.cancel("destorysource");
      this.axiosSource = Axios.CancelToken.source();
    }
    private dealData(data: RegionBoxChart2): BoxChartTrans {
      const result: BoxChartTrans = {xAxis:[],boxchart:[]} as any;
      console.log("regionnnnnnnnnnnnnnnnn",data);
      const data2 = [
        {
          name: "电量",
          data: data.boxData,
          tooltip: {
              headerFormat: null,
              pointFormatter(a: any,b: any): string {
                const that: any = this;
                // tslint:disable-next-line:radix
                const nowtime = moment(parseInt(that.category)).format("YYYY-MM-DD HH:mm:ss");
                return `${nowtime}<br/><span style="color:${that.color}">\u25CF</span> <b> ${that.series.name}</b><br/>
                上边缘: ${that.high}<br/>
                Q3\t: ${that.q3}<br/>
                中位数: ${that.median}<br/>
                Q1\t: ${that.q1}<br/>
                下边缘: ${that.low}<br/>`;
              },
          }
        },
        {
          name: '异常值',
          color: "",// (Highcharts as any).getOptions().colors[0] as any,
          type: 'scatter',
          data: data.outliers as any,
          marker: {
              fillColor: 'white',
              lineWidth: 1,
              radius: 2,
              lineColor: "", // (Highcharts as any).getOptions().colors[0] as any,
          },
          tooltip: {
              useHTML: true,
              headerFormat: null,
              enabled: true,
              isHidden: false,
              // // headerFormat: `<b>{point.name}</b> <br/><b>{series.name}:`,
              // pointFormat: 	`<b>{point.name}</b> <br/><b>{series.name}:</b>{point.y}<br/><a href="#" onclick="leafrouter2home('{point.entity.id}','{point.entity.name}')">图表</a> <a href="#" onclick="leafrouter2info('{point.entity.id}','{point.entity.name}')">用户信息</a>`
              // // pointFormat: 	`<b>{ moment(parseInt(data.axisData[point.x])).format("YYYY-MM-DD HH:mm:ss");}</b>
              // //                 <br/><b>{data.entitylist[data.outliersindex[point.index]].id.name}:</b>{point.y}<br/>
              // //                 <a href="#" onclick="leafrouter2home('{data.entitylist[data.outliersindex[point.index]].id}','{data.entitylist[data.outliersindex[point.index]].id.name}')">图表</a>
              // //                 <a href="#" onclick="leafrouter2info('{point.entity}','{point.name}')">用户信息</a>`,
              pointFormatter(a: any,b: any): string {
                const that: any = this;
                const timeindex = that.x; // 异常点的坐标
                const value = that.y;
                const entityindex = that.index;
                // console.log(that);
                // tslint:disable-next-line:radix
                const nowtime = moment(parseInt(data.axisData[timeindex])).format("YYYY-MM-DD HH:mm:ss");
                const entityinfo = data.entitylist[data.outliersindex[entityindex]];
                //  根据尺度判断坐标
                return `<b>${nowtime}</b><br/>
                        <b>${entityinfo.name}</b><br/>
                        <b>异常值:</b> ${value}<br/>
                        <a href="#" onclick="leafrouter2home('${entityinfo.id}','${entityinfo.name}')">图表</a>
                        <a href="#" onclick="leafrouter2info('${entityinfo.id}','${entityinfo.name}')">用户信息</a>
                        `;
              },
          }
        }
      ];
      result.xAxis = data.axisData;
      result.boxchart = data2 as any;
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
}
</script>

<style scoped>

</style>