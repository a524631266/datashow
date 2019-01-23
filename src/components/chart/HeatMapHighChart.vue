
<template>
  <div :class="positionClass" :draggable="candraggable" @dblclick="handledoubleclick">
        <LittleBar :showPageSize="true" :date="date" @initWebSocket="start" :positionClass="positionClass" @toggledrag="toggledrag" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :urlparas="urlparas" :id="id" :option="option" @updateData="way2UpdateData" :chartLibrary="chartLibrary" slot="chart"/>
            <page-button @prepage="prepage" @nextpage="nextpage" v-show="positionClass==='center'" class="rightbottom" slot="page" v-model="pagedata"></page-button>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Model, Watch, Provide } from 'vue-property-decorator';
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import LittleBar from "@/components/chart/LittleBar.vue";
import { Options } from 'highcharts';
import {listdata, drawHeatmapOptions,HeatMapLimiter } from "@/components/options/HeatMapOptions.ts";
import { getDataPromise, PostPath, insertInitData } from "@/actions/axiosProxy.ts";
import PubSub from 'pubsub-js';
import { HeatmapChart, HeatmapChartTrans } from '@/types/postreturnform';
import {highchartEmptyOption} from "@/components/options/EmptyChart.ts";
import { updatestate } from '@/types/updateState';
import Axios from "axios";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import moment,{ Moment } from "moment";
import PageButton from "@/components/base/PageButton.vue";
import {orginitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
@Component({
    components: {
        BaseChartFactory,
        LittleBar,
        PageButton,
    }
})
export default class HeatMapHighChart extends Vue implements AxiosSourceManage {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public option: Options = highchartEmptyOption(undefined) as any;
    public axiosSource = Axios.CancelToken.source();
    private chartLibrary = ChartLibrary.highchart;
    private titlename = TitleName.HeatMap;
    private candraggable = false;
    private date: Moment = moment();
    private pagedata = {
      pageid: 1,
      entitynums: this.urlparas.entitynums,
      pagesize: this.urlparas.pagesize
    };
    private limiter: HeatMapLimiter = {
      scale: this.postparms.scale,
    };
    @Watch("postparms.scale",{deep: true})
    public updatelimiter(newv: number) {
      this.limiter.scale = newv;
    }
    @Emit()
    public cancelAxios() {
      this.axiosSource.cancel("删除HeatMap");
      // new source
      this.axiosSource = Axios.CancelToken.source();
    }
    @Emit()
    public getData() {
      // console.log("获取timeline数据");
      const promise = getDataPromise<HeatmapChart,HeatmapChartTrans>(this.urlparas,PostPath.heatmap,this.axiosSource,this.dealData);
      promise.then(
        (data: string | HeatmapChartTrans) => {
          if ( typeof data !== "string") {
            const change = (this.option as any).change;
            const option2 = drawHeatmapOptions(data, "HeatMap","" ,this.showTooltiop,this.limiter);
            (option2 as any).change = updatestate.redraw;
            this.option = option2 as any;
            // console.log("timelinedata",this.option);
          }
        }
      );
    }
    @Emit()
    private prepage(pageid: number,pagesize: number) {
      // this.pagedata.pageid = pageid;
      this.urlparas.pageid = pageid;
      this.urlparas.pagesize = pagesize;
      this.redraw(this.urlparas.entity);
    }
    @Emit()
    private nextpage(pageid: number,pagesize: number) {
      // this.pagedata.pageid = pageid;
      this.urlparas.pageid = pageid;
      this.urlparas.pagesize = pagesize;
      this.redraw(this.urlparas.entity);
    }

    private mounted() {
      const {entity, pid, pidlevel: level} = orginitconfig;
      const datapromise = insertInitData(pid, entity, level, this);
    }
    @Emit()
    private updateEntityNums() {
      this.pagedata.entitynums = this.urlparas.entitynums;
    }
    @Watch("urlparas.entity",  {deep : true})
    private redraw(entity: string) {
      // this.updateEntityNums();
      this.cancelAxios();
      // this.option = drawHeatmapOptions([{x: "0",name: "",y: 0,value: 0}], "HeatMap","" ,this.showTooltiop) as any;
      this.option = highchartEmptyOption(entity) as any;
      // console.log("上层图表 HeatMapHighCHart",this.postparms,this.id);
      this.getData();
      // 在这里开始做长轮询 定时从后台传数据
    }
    private dealData(data: HeatmapChart): HeatmapChartTrans {
      let result: HeatmapChartTrans = [];
      result = data.table;
      this.pagedata.entitynums = data.totalpages * (this.pagedata.pagesize as number);
      return result;
    }
    private showTooltiop(entity: string, name: string,clientX: number,clientY: number,target: DOMRect) {
      // 方法在 LeftBar中订阅
      const level = -1;
      // console.log("clientX:",clientX,";clientY",clientY,"target:",target);
      PubSub.publish("showtooltip",{entity,name,isLeaf:true,level,clientX,clientY,target});
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
    private async way2UpdateData(chart: any,oldoption: any) {
      // chart.setOptions(this.option);
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
.rightbottom {
  position: absolute;
  right: 10px;
  bottom: 0px;
  z-index: inherit;
  z-index: 501;

}

</style>