<template>
    <div class="innerChart" ref="id" :id="id" style="absolute">
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Emit, Model, Watch, Inject } from 'vue-property-decorator';
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import echarts from "echarts";
import { PositionClass , PostParams, ChartType } from '@/types/index';

import "echarts/map/js/china";
import 'echarts/lib/chart/heatmap';
@Component({
})
export default class BaseChartFactory extends Vue {
    @Prop() public id!: string;
    @Prop() public chartType!: ChartType;
    // @Inject("option") public option!: object;
    @Prop() public option!: object;
    // tslint:disable-next-line:ban-types
    // @Prop() public updateData!: Function;
    private data = [];
    private chartInstance = null;
    public mounted() {
        // Highcharts.chart(this.id, this.option);
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: object, oldVal: object) {
       console.log("options变化",newVal, oldVal);
       if(newVal !== oldVal && this.chartType === ChartType.highchart) {
            if (this.chartInstance) {
                console.log("1");
            } else {
                Highcharts.chart(this.id, this.option);
            }
       }
       if(newVal !== oldVal && this.chartType === ChartType.echart) {
            if (this.chartInstance) {
                this.$emit("updateData",this.chartInstance,this.option);
                // this.updateData(this.chartInstance,this.option); //
            } else {
                const nodeid = document.getElementById(this.id);
                const mychart = echarts.init(nodeid as any);
                mychart.setOption(this.option);
                console.log("Echart211111111111111111",this.chartInstance);
                this.chartInstance = mychart as any;
                (window as any).echart = mychart as any;
            }
       }
    }
}
</script>


<style scoped>
.innerChart {
    height: 100%;
    position: relative;
    background: rgba(0,0,0,0);
}
.anchorBL{
    display:none;
}
</style>
