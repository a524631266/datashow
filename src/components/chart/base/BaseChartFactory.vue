<template>
    <div style="absolute" class="innerChart">
        <div  ref="id" :id="id" class="innerChart">
        </div>
        <a-spin tip="Loading..." v-show="showLoading" :style="{position:'absolute',top: '50%',left: '50%',transform: 'translateY(-50%) translateX(-50%)' }">
            <div class="spin-content">
                正在获取中
            </div>
        </a-spin>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model, Watch, Inject } from 'vue-property-decorator';
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import echarts,{ ECharts } from "echarts";
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
// import "echarts/map/js/china";
import 'echarts/lib/chart/heatmap';
import Antd from "ant-design-vue";
import { updatestate } from '@/types/updateState';
@Component({
    components: {
        ASpin: Antd.Spin,
    }
})
export default class BaseChartFactory extends Vue {
    @Prop() public id!: string;
    @Prop() public positionClass!: string;
    @Prop() public chartLibrary!: ChartLibrary;
    // @Inject("option") public option!: object;
    @Prop() public option!: object;
    @Prop() public urlparas!: PostParams;
    @Prop() public handleclick!: (elementdata: any)=>void;
    @Prop() public getData!: ()=> void;
    // tslint:disable-next-line:ban-types
    // @Prop() public updateData!: Function;
    private data = [];
    private chartInstance = null;
    private showLoading = false;
    public mounted() {
        // console.log("1111111")
    }
    /**
     * 监控entity变化的时候，也就是当entityid真正变化的时候，就要更新视图
     */
    @Watch("urlparas.entity",{deep:true})
    private initChart(newVal: object, oldVal: object) {
        // console.log("entity变化了 :new entity",this.id,newVal,";oldeVal",oldVal);
        // 如果之前有图表的话直接销毁图表
        if (this.chartInstance && this.chartLibrary === ChartLibrary.highchart) {
            // (this.chartInstance as any).showLoading();
            (this.chartInstance as any).destroy();
            this.chartInstance = Highcharts.chart(this.id, this.option) as any;
        }
        if (this.chartInstance && this.chartLibrary === ChartLibrary.echart) {
            (this.chartInstance as any).dispose();
            this.chartInstance = null;
        }
        this.showLoading = true;
        // this.redrawChart(newVal, oldVal);
        // this.$emit("getData");
        // tslint:disable-next-line:no-unused-expression
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: updatestate, oldVal: updatestate) {
       console.log("options变化",newVal, oldVal,this.id);
       if(this.chartLibrary === ChartLibrary.highchart) {
            if (this.chartInstance) {
                // console.log("1");
                // (this.chartInstance as any).reflow();
                if(newVal === updatestate.redraw) { // 前一次数据为undefined的时候，为新的option因此需要重画
                    // this.destroyed();
                    this.chartInstance = Highcharts.chart(this.id, this.option) as any;
                    this.showLoading = false;
                } else { // highchart增量更新数据的时候操作
                    // this.showLoading = false;
                    this.$emit("updateData",this.chartInstance,this.option);
                }
            } else {
                this.chartInstance = Highcharts.chart(this.id, this.option) as any;
                // this.showLoading = false;
            }
            this.toggleHighChartLegend();
            if (this.id === "chart-heatmap") {
                this.toggleHighChartAxis();
            }
       }
       if(this.chartLibrary === ChartLibrary.echart) {
            if (this.chartInstance) { // echart增量更新数据的时候操作
                // console.log("Echart111111111111111111");
                this.$emit("updateData",this.chartInstance,this.option);
                this.showLoading = false; // 因为echart是默认先加载地图，数据还没有返回的情况下
                // this.updateData(this.chartInstance,this.option); //
            } else {
                // console.log("resechart");
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
    /**
     * highcart 显示legend
     */
    private toggleHighChartLegend() {
        if ( this.positionClass !== PositionClass.Center) {
            (this.chartInstance as any).legend.update({enabled:false});
        } else {
            (this.chartInstance as any).legend.update({enabled:true});
        }
    }
    /**
     * highcart 显示x轴数据
     */
    private toggleHighChartAxis() {
        if ( this.chartInstance && this.positionClass !== PositionClass.Center) {
            // (this.chartInstance as any).xAxis[0].update({labels:{enabled:false}});
            (this.chartInstance as any).xAxis[0].update({visible:false});
        } else if (this.chartInstance) {
            // (this.chartInstance as any).xAxis[0].update({labels:{enabled:true}});
            (this.chartInstance as any).xAxis[0].update({visible:true});
        }
    }
    /**
     * 这里是监听id是否变化，一旦变换有两种选择
     * 1.hightchart 如果在中间图就要显示legend
     * 2.如果是echart的话，由于目前版本只有地图，所以只要重新布局就行了
     */
    @Watch('positionClass',{deep: true})
    private reflowChart(newVal: object, oldVal: object) {
        // console.log("posiontClass Change");
        // console.log("positionClass",this.id,this.chartInstance,this.chartLibrary);
        if (this.chartInstance && this.chartLibrary === ChartLibrary.highchart) {
            this.toggleHighChartLegend();
            if (this.id === "chart-heatmap") {
                this.toggleHighChartAxis();
            }
            (this.chartInstance as any).reflow();
        }
        if (this.chartInstance && this.chartLibrary === ChartLibrary.echart) {
            (this.chartInstance as any).resize();

        }
    }
    /**
     * 销毁组件的时候
     */
    private destroyed() {
        if (this.chartInstance && this.chartLibrary === ChartLibrary.highchart) {
            (this.chartInstance as any).destroy();
        }
        if (this.chartInstance && this.chartLibrary === ChartLibrary.echart) {
            (this.chartInstance as any).dispose();
        }
        this.chartInstance = null;
        // console.log("路由切换的时候是否销毁组件","111111",this.id);
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
