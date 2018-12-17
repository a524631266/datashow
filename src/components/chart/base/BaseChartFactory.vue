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
    private data = [];
    public mounted() {
        // Highcharts.chart(this.id, this.option);
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: object, oldVal: object) {
       console.log("options变化",newVal, oldVal);
       if(newVal !== oldVal && this.chartType === ChartType.highchart) {
            Highcharts.chart(this.id, this.option);
       }
       if(newVal !== oldVal && this.chartType === ChartType.echart) {
            const nodeid = document.getElementById(this.id);
            const mychart = echarts.init(nodeid as any);
            mychart.setOption(this.option);
            console.log("mychart",mychart);
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
</style>
