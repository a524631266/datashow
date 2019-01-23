<template>
    <div style="absolute" class="innerChart" ref="container">
        <div  ref="id" :id="id" class="innerChart" :style="{height: containerheight}">
        </div>
        <a-spin class="loading" :tip="loadingtext" v-show="showLoading" :style="{position:'absolute',top: '50%',left: '50%',transform: 'translateY(-50%) translateX(-50%)' }">
            <!-- <div class="spin-content">
                {{""}}
            </div> -->
        </a-spin>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model, Watch, Inject } from 'vue-property-decorator';
// import Highcharts1, { Options } from 'highcharts';
import echarts,{ ECharts } from "echarts";
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
// import "echarts/map/js/china";
import 'echarts/lib/chart/heatmap';
import Antd from "ant-design-vue";
import { updatestate } from '@/types/updateState';
import exportHighchart from 'highcharts/modules/exporting';
// import gantt from 'highcharts/modules/gantt';
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsMore from 'highcharts/highcharts-more';
import {downloadchart} from '@/util/downloadcanvas.ts';
exportHighchart(Highcharts);
HighchartsMore(Highcharts);
// 加载甘特图插件
// gantt(Highcharts);
// tslint:disable-next-line:no-var-requires
// require("highcharts/modules/gantt")(Highcharts);
// tslint:disable-next-line:no-var-requires
// require('highcharts/highcharts-more')(Highcharts);
// tslint:disable-next-line:no-var-requires
// require('highcharts/highcharts-more.js');
// tslint:disable-next-line:no-var-requires
require('highcharts/modules/map')(Highcharts);
// tslint:disable-next-line:no-var-requires
// require("highcharts-oldie")(Highcharts);
// 设置 Highcharts时间问题 为false,采用中国日期时间戳
Highcharts.setOptions({global: { useUTC: false}});
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
    // private factoryMethod = this.chartLibrary === ChartLibrary.echart? echarts.init: this.id === "chart-single-action"? Highcharts.ganttChart : Highcharts.chart;
    // tslint:disable-next-line:ban-types
    // @Prop() public updateData!: Function;
    private data = [];
    private chartInstance = null;
    private showLoading = false;
    private containerheight = "100%";
    private loadingtext = "Loading...";
    public mounted() {
        // console.log("1111111")
        PubSub.subscribe("downloadchart",this.downloadchart);
        // if( this.id === "chart-heatmap") {
        //     this.highchartHeatMapWarp(Highcharts);
        // }
    }
    /**
     * 监控entity变化的时候，也就是当entityid真正变化的时候，就要更新视图
     */
    @Watch("urlparas.entity",{deep:true})
    private initChart(newVal: object, oldVal: object) {
        // console.log("entity变化了 :new entity",this.id,newVal,";oldeVal",oldVal);
        const createfunction = this.id === "chart-single-action"? Highcharts.ganttChart : Highcharts.chart;
        // 如果之前有图表的话直接销毁图表
        // console.time(this.id);
        if (this.chartInstance && this.chartLibrary === ChartLibrary.highchart) {
            // (this.chartInstance as any).showLoading();
            (this.chartInstance as any).destroy();
            this.chartInstance = createfunction(this.id, this.option) as any;
        }
        if (this.chartInstance && this.chartLibrary === ChartLibrary.echart) {
            (this.chartInstance as any).dispose();
            this.chartInstance = null;
        }
        this.showLoading = true;
        // console.timeEnd(this.id);
        // this.redrawChart(newVal, oldVal);
        // this.$emit("getData");
        // tslint:disable-next-line:no-unused-expression
        // window.onresize = () => {
        //     this.adjustSubHeight();
        // };
    }
    /**
     * 在画highchart之前要调整一下图表高度
     */
    @Emit()
    private adjustSubHeight() {
        console.log("this.ref",this.$refs);
        // this.containerheight = this.$refs.container;
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: updatestate, oldVal: updatestate) {
        if( this.id === "chart-heatmap") {
            this.highchartHeatMapWarp(Highcharts);
        }
        //    console.log("options变化",newVal, oldVal,this.id);
        if(this.chartLibrary === ChartLibrary.highchart) {
                const createfunction = this.id === "chart-single-action"? Highcharts.ganttChart : Highcharts.chart;
                if (this.chartInstance) {
                    // console.log("1");
                    // (this.chartInstance as any).reflow();
                    if(newVal === updatestate.redraw) { // 前一次数据为undefined的时候，为新的option因此需要重画
                        // this.destroyed();
                        this.chartInstance =createfunction(this.id, this.option) as any;
                        this.showLoading = false;
                    } else if (newVal === updatestate.empty) {
                        this.showLoading = true;
                        this.chartInstance =createfunction(this.id, this.option) as any;
                    } else { // highchart增量更新数据的时候操作
                        // this.showLoading = false;
                        this.$emit("updateData",this.chartInstance,this.option);
                    }
                } else {
                    console.log("1111");
                    this.chartInstance =createfunction(this.id, this.option) as any;
                    // this.showLoading = false;
                }
                this.toggleHighChartLegend();
                if (this.id === "chart-heatmap") {
                    this.toggleHighChartAxis();
                }
        }
        // Highcharts.setOptions({global: { useUTC: true}});
        if(this.chartLibrary === ChartLibrary.echart) {
                if (this.chartInstance) { // echart增量更新数据的时候操作
                    // console.log("Echart111111111111111111");
                    // this.updateData(this.chartInstance,this.option); //
                    if(newVal === updatestate.redraw) {
                        this.loadingtext = "Loading...";
                        this.showLoading = true;
                    } else if(newVal === updatestate.error) {
                        this.loadingtext = "无数据";
                        this.showLoading = true;
                    } else {
                        this.showLoading = false; // 因为echart是默认先加载地图，数据还没有返回的情况下
                    }
                    //  ehcart中散点图为100万个所有要单独处理
                    // if(this.id === "chart-region-linechart") {
                    // } else {
                    this.$emit("updateData",this.chartInstance,this.option,this);
                    // }
                } else {
                    // console.log("resechart");
                    const nodeid = document.getElementById(this.id);
                    const mychart = echarts.init(nodeid as any);
                    console.time(this.id);
                    mychart.setOption(JSON.parse(JSON.stringify(this.option)));
                    console.timeEnd(this.id);
                    // console.log("this.opton2",this.option);
                    this.chartInstance = mychart as any;
                    // (window as any).echart = mychart as any;
                    // 窗口变动自动变换数据
                    window.onresize = ()=> {
                        this.adjustSubHeight();
                        (this.chartInstance as any).resize();
                        // console.log("resize.........");
                    };
                    // console.log("geochartoption",this.option);
                    if(newVal === updatestate.redraw) {
                        this.showLoading = true;
                    }
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
        // console.log("(this.chartInstance as any).xAxis[0]",(this.chartInstance as any).xAxis[0]);
        if ( this.chartInstance && this.positionClass !== PositionClass.Center) {
            // (this.chartInstance as any).xAxis[0].update({labels:{enabled:false}});
            (this.chartInstance as any).yAxis[0].update({visible:false});
        } else if (this.chartInstance) {
            // (this.chartInstance as any).xAxis[0].update({labels:{enabled:true}});
            (this.chartInstance as any).yAxis[0].update({visible:true});
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
            // console.time(this.id);
            // 这里性能用散点图点击性能太慢
            // if (this.id === "chart-region-linechart") {
            //     // (this.chartInstance as any).reflow();
            //     (this.chartInstance as any).destroy();
            //     this.chartInstance = Highcharts.chart(this.id, this.option) as any;
            // } else {
            (this.chartInstance as any).reflow();
            // }
            // console.timeEnd(this.id);
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
    @Emit()
    private downloadchart(msg: any,positionClass: string) {
        // console.log("111111");
        if(this.positionClass === positionClass) {
            if (this.chartLibrary === ChartLibrary.highchart ) {
                (this.chartInstance as any).exportChart({
                    type: "image/jpeg",
                    filename: this.positionClass
                });
                // 导出功能扩展
                // chart.exportChart({
                //     type: 'application/pdf',image/png -- image/jpeg -- image/svg+xml
                //     filename: 'my-pdf'
                // });
            } else if(this.chartLibrary === ChartLibrary.echart ) {
                // console.log("地图下载");
                downloadchart(this.chartInstance);
            }
        }
    }

    /**
     * 改造热力图，可以支持大型热力图
     */
    private highchartHeatMapWarp(H: any) {
        const Series = H.Series;
        const each = H.each;
        /**
         * Create a hidden canvas to draw the graph on. The contents is later copied over
         * to an SVG image element.
         */
        Series.prototype.getContext = function() {
            if (!this.canvas) {
                this.canvas = document.createElement('canvas');
                this.canvas.setAttribute('width', this.chart.chartWidth);
                this.canvas.setAttribute('height', this.chart.chartHeight);
                this.image = this.chart.renderer.image('', 0, 0, this.chart.chartWidth, this.chart.chartHeight).add(this.group);
                this.ctx = this.canvas.getContext('2d');
            }
            return this.ctx;
        };
        /**
         * Draw the canvas image inside an SVG image
         */
        Series.prototype.canvasToSVG = function() {
            this.image.attr({ href: this.canvas.toDataURL('image/png') });
        };
        const that = this.$refs.id;
        /**
         * Wrap the drawPoints method to draw the points in canvas instead of the slower SVG,
         * that requires one shape each point.
         */
        Series.prototype.transSvg2Canvas = function fac() {
            const ctx = this.getContext();
            if (ctx) {
                // draw the columns
                // tslint:disable-next-line:only-arrow-functions
                each( (this as any).points, function(point: any) {
                    const plotY = point.plotY;
                    if (plotY !== undefined && !isNaN(plotY) && point.y !== null) {
                        const shapeArgs = point.shapeArgs;
                        const pointAttr = (point.pointAttr && point.pointAttr['']) || point.series.pointAttribs(point);
                        ctx.fillStyle = pointAttr.fill;
                        ctx.fillRect(shapeArgs.x, shapeArgs.y, shapeArgs.width, shapeArgs.height);
                    }
                });
                (this as any).canvasToSVG();
            } else {
                (this as any).chart.showLoading('Your browser doesn\'t support HTML5 canvas, <br>please use a modern browser');
                // Uncomment this to provide low-level (slow) support in oldIE. It will cause script errors on
                // charts with more than a few thousand points.
                // arguments[0].call(this);
            }
        };
        H.wrap(H.seriesTypes.heatmap.prototype, 'drawPoints',Series.prototype.transSvg2Canvas );
        H.seriesTypes.heatmap.prototype.directTouch = false; // Use k-d-tree
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
.loading {
    pointer-events: none;
}
</style>
