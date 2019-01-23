
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :date="date" :positionClass="positionClass" @initWebSocket="start" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory @updateData="way2UpdateData" :positionClass="positionClass" :id="id" :option="option" :urlparas="urlparas" :chartLibrary="chartLibrary" slot="chart"/>
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
import {getOption,getEchartOption} from "@/components/options/ScatterOption.ts";
import { getDataPromise, PostPath , insertInitData} from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import {ScatterChart,ScatterChartTrans} from '@/types/postreturnform';
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
// const rawdata: [[number,number,number]] = [] as any;
// for (let i = 0; i < n; i += 1) {
//     rawdata.push(
//        [
//         // tslint:disable-next-line:radix
//         1548141286000 + parseInt(Math.random() * 10 * 24 * 60 *60 * 1000+ ""),
//         Math.random() * 10,
//         i
//         ]
//     );
// }
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
    }
})
export default class ScatterHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    @Provide('option')
    public option: Options = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.echart;
    private titlename = TitleName.Scatter;
    private candraggable = false;
    private date: Moment = moment();
    // private lazyBigData: number = [];
    get localStorageKey() {
      // 添加md5 根据 图表id + entityid + 开始时间  + 结束时间 做md5转换 几乎唯一
      const md5 = require("crypto").createHash("md5");
      return md5.update(this.id + this.postparms.entity + this.postparms.starttime + this.postparms.endtime).digest("hex");
    }
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("趋势图关闭");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取TopHighChart数据");
      const promise = getDataPromise<ScatterChart,ScatterChartTrans>(this.urlparas,this.urlparas.isLeaf?PostPath.singleLineChart:PostPath.regionLineChart,this.axiosSource,this.dealData);
      promise.then(
        (data: string | ScatterChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            // const option2 = getOption(data, "趋势图");
            const option2 = getEchartOption(data,"散点图");
            // console.log("optin",rawdata,this.localStorageKey);
            (option2 as any).change = updatestate.success;
            // (window as any).loooo = this.localStorageKey;
            // window.localStorage.setItem(this.localStorageKey,JSON.stringify(rawdata));
            this.option = option2 as any;
            // console.log("TopHighChartdata",this.option);
          } else {
             const option2 = getEchartOption([],"散点图");
             (option2 as any).change = updatestate.error;
             this.option = option2 as any;
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
    private dealData(data: ScatterChart): ScatterChartTrans {
      let result: ScatterChartTrans = [];
      result = data.linechart;
      return result;
    }
    private mounted() {
      if(this.postparms.isLeaf) {
        const {entity, pid, level} = entityinitconfig;
        const datapromise = insertInitData(pid, entity, level, this);
      } else {
        const {entity, pid, pidlevel: level} = orginitconfig;
        const datapromise = insertInitData(pid, entity, level, this);
      }
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      // clearInterval(this.intervalid);
    }
    @Emit()
    private way2UpdateData(chart: any,newoption: any,baseChartFactory: BaseChartFactory) {
        // console.log("newoption",newoption);
        // const datas: Array<[number,number]> = newoption.series.data[0] as any; // JSON.parse(window.localStorage.getItem(this.localStorageKey) as any);
        // const datas: Array<[number,number]> = newoption.series[0].data;
        // tslint:disable-next-line:no-unused-expression
        // newoption.series && (newoption.series[0].data = []);
        new Promise(
            (resolve,reject)=> {
                (baseChartFactory as any).showLoading = true;
                // 1.销毁图表实例
                ((baseChartFactory as any).chartInstance as any).dispose();
                const nodeid = document.getElementById(this.id);
                const mychart = echarts.init(nodeid as any);
                // mychart.setOption(JSON.parse(JSON.stringify((baseChartFactory as any).option)));
                // 2.设置空配置
                mychart.setOption(newoption);
                // 3. 依次加载数据
                // console.log("datas",datas);
                // 方式 1 利用echarts的异步加载技术
                // mychart.appendData({
                //       seriesIndex: "0",
                //       data: datas,
                // });
                // 方式 2 间隔加载
                // const totallen = datas.length;
                // const onetimes = 1000000; //
                // const layfunctions = new TimeSlicing(mychart.appendData,500);
                // for (let index = 0; index < totallen / onetimes; index++) {
                //   const data = datas.splice(0,onetimes);
                //   const ddata = {
                //       seriesIndex: "0",
                //       data,
                //   };
                //   // layfunctions.appendData(ddata);
                //   layfunctions.appendTask(()=>mychart.appendData(ddata));
                //   console.log("index",index);
                // }
                // // console.log("layfunctions",layfunctions);
                // layfunctions.startTask();
                // const datas2: Array<[number,number]> = newoption.series[0].data;
                // console.log("datas2",datas2);
                // console.log("this.$localStorage",this);
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