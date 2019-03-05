
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory @updateData="way2UpdateData" @handleclick="handleclick" :positionClass="positionClass" :id="id" :option="option" :urlparas="urlparas" :chartLibrary="chartLibrary" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams ,ChartLibrary} from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options } from 'highcharts';
import echarts,{ ECharts } from "echarts";
import {getOption,getSingleScatterEchartOption} from "@/components/options/ScatterOption.ts";
import { getDataPromise, PostPath , insertInitData} from "@/api/axiosProxy.ts";
import PubSub from 'pubsub-js';
import {ScatterChart,ScatterChartTrans,SingleBoxChart,EntityValue} from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import {entityinitconfig, orginitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
import TimeSlicing from "@/util/TimeSlicing.ts";
// const n = 5000000;
// const n = 1000;
// // const rawdata: [{x: number,y: number,id: string}] = [] as any;
// const rawdata: Array<[number,number,number]> = [] as any;
// for (let i = 0; i < n; i += 1) {
//     rawdata.push(
//        [
//         // tslint:disable-next-line:radix
//         1548141286000 + parseInt(Math.random() * 10 * 24 * 60 *60 * 1000+ ""),
//         Math.random() * 10,
//         0
//         ]
//     );
// }
// const rawdata2: ScatterChartTrans = {
//   entitylist:[{name: "aaa",id: 1234}],
//   valuelist: rawdata
// };
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class SingleScatterEChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.echart;
    private titlename = TitleName.SingleScatter;
    private candraggable = false;
    private date: Moment = moment();
    // private lazyBigData: number = [];
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("趋势图关闭");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      const promise = getDataPromise<SingleBoxChart,ScatterChartTrans>(this.urlparas,PostPath.singleBoxChart,this.axiosSource,this.dealData);
      promise.then(
        (data: string | ScatterChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = getSingleScatterEchartOption(data,this.positionClass === PositionClass.Center? true: false);
            (option2 as any).change = updatestate.success;
            this.option = option2 as any;
          } else {
            this.$message.error("无法正常获取scatter");
          }
        }
      );
    }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(entity: string) {
      this.cancelAxios();
      this.option = highchartEmptyOption(entity) as any;
      // console.log("上层图表 TrendHighChart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private dealData(data: SingleBoxChart): ScatterChartTrans {
      const result: ScatterChartTrans = {entitylist: [],valuelist: []};
      const starttime = moment(moment(data.boxchart.time).format("YYYY-MM-DD")).valueOf();
      const info: EntityValue[] = [];
      const data2 = data.boxchart.boxs.reduce(
        (before: any,after: any,index: number) => {
          const next = after.map(
            (value: number,ind: number) => {
              const xname = starttime + index * this.postparms.scale * 1000;
              const xname2 = starttime + index * 24 * 60 * 60 * 1000;
              info[index] = {
                name: moment(xname2).format("YYYY-MM-DD"),
                id: index
              };
              // 横轴名称，
              return [xname, value, ind];
            }
          );
          return [...before,...next];
        },
        []
      );
      // console.log(data2);
      result.valuelist = data2;
      result.entitylist = info;
      return result;
    }
    private mounted() {
      this.redraw(this.postparms.entity);
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      // clearInterval(this.intervalid);
    }
    @Emit()
    private way2UpdateData(chart: any,newoption: any,baseChartFactory: BaseChartFactory) {
        new Promise(
            (resolve,reject)=> {
                (baseChartFactory as any).showLoading = true;
                // 1.销毁图表实例
                ((baseChartFactory as any).chartInstance as any).dispose();
                const nodeid = document.getElementById(this.id);
                const mychart = echarts.init(nodeid as any);
                mychart.setOption(newoption);
                (baseChartFactory as any).chartInstance = mychart as any;
                resolve("success");
            }
        ).then(
            (data)=> {
                if (newoption.change !== updatestate.error) {
                  (baseChartFactory as any).showLoading = false;
                }
            }
        );
    }
    @Emit()
    private handleclick(params: any,chart: any) {
      console.log("scatett",params,chart);
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