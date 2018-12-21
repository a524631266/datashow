<template>
    <div class="innerChart" ref="id" :id="id" style="absolute">
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model, Watch, Inject } from 'vue-property-decorator';
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import echarts from "echarts";
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
import "echarts/map/js/china";
import 'echarts/lib/chart/heatmap';
@Component({
})
export default class BaseChartFactory extends Vue {
    @Prop() public id!: string;
    @Prop() public positionClass!: string;
    @Prop() public chartLibrary!: ChartLibrary;
    // @Inject("option") public option!: object;
    @Prop() public option!: object;
    @Prop() public urlparas!: PostParams;
    @Prop() public handleclick!: (elementdata: any)=>void;
    // tslint:disable-next-line:ban-types
    // @Prop() public updateData!: Function;
    private data = [];
    private chartInstance = null;
    public mounted() {
        // console.log("1111111");
    }
    @Watch("urlparas.entity",{deep:true})
    private initChart(newVal: object, oldVal: object) {
        console.log(this.id,"entity变化了",newVal);
        if (this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).destroy();
        }
        if (this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).dispose();
        }
        this.chartInstance = null;
        this.redrawChart(newVal, oldVal);
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: object, oldVal: object) {
    //    console.log("options变化",newVal, oldVal);
       if(newVal !== oldVal && this.chartLibrary === ChartLibrary.highchart) {
            if (this.chartInstance) {
                // console.log("1");
                (this.chartInstance as any).reflow();
            } else {
                this.chartInstance = Highcharts.chart(this.id, this.option) as any;
            }
            this.showHighChartLegend();
       }
       if(newVal !== oldVal && this.chartLibrary === ChartLibrary.echart) {
            if (this.chartInstance) {
                // console.log("Echart111111111111111111");
                this.$emit("updateData",this.chartInstance,this.option);

                // this.updateData(this.chartInstance,this.option); //
            } else {
                console.log("resechart");
                const nodeid = document.getElementById(this.id);
                const mychart = echarts.init(nodeid as any);
                mychart.setOption(JSON.parse(JSON.stringify(this.option)));
                this.chartInstance = mychart as any;
                // (window as any).echart = mychart as any;
                // 窗口变动自动变换数据
                window.onresize = ()=> {
                    (this.chartInstance as any).resize();
                    // console.log("resize.........");
                };
                mychart.on("click",this.handleclick);
            }
       }
    }

    private showHighChartLegend() {
        if ( this.positionClass !== PositionClass.Center) {
            (this.chartInstance as any).legend.update({enabled:false});
        } else {
            (this.chartInstance as any).legend.update({enabled:true});
        }
    }
    @Watch('positionClass',{deep: true})
    private reflowChart(newVal: object, oldVal: object) {
        // console.log("posiontClass Change");
        if (this.chartInstance && this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).reflow();
            this.showHighChartLegend();
        }
        if (this.chartInstance && this.chartLibrary === ChartLibrary.echart) {
            (this.chartInstance as any).resize();

        }
    }
    private destroyed() {
        if (this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).destroy();
        }
        if (this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).dispose();
        }
        this.chartInstance = null;
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
