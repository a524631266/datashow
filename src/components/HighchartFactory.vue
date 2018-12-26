<template>
    <div :class="positionClass" draggable="true" >
        <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms"/>
        <div class="innerChart" ref="id" :id="id" style="absolute">
            <!-- <span>class:name {{positionClass}}</span>
            <span>url: {{ url }} </span>
            <span>option: {{ option }} </span> -->
            <!-- 这里可以加载界面 -->
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Emit, Model, Watch } from 'vue-property-decorator';
import { PositionClass , PostParams } from '@/types/index';
import LittleBar from "@/components/chart/LittleBar.vue";
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import { inout, drawActionOptions} from "@/components/options/TimeLineOptions.ts";
import {boxchart3, xAxis3,drawBoxOptions} from "@/components/options/BoxOptions.ts";
import {listdata, drawHeatmapOptions } from "@/components/options/HeatMapOptions.ts";

@Component({
    components: {
        LittleBar,
    }
})
export default class HighchartFactory extends Vue {
    @Prop() public urlparas!: PostParams;
    @Prop() public id!: string;
    @Prop() public positionClass!: PositionClass;
    @Prop() public option!: object;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    public showinterval =  200 ;
    public entity =  "";
    public initshow: boolean = this.positionClass === "center"?true: false ;
    private intervalid = 0;
    @Emit()
    public changedata() {
            console.log(this.data);
            if (this.id === "chart-top") {
                this.positionClass = PositionClass.Center;
            }
    }
    private mounted() {
        this.intervalid = setTimeout(
            () => {
                // Highcharts.chart((this as any).id, (this as any).option as Options);
                // 1.时间timeline配置
                Highcharts.chart(this.id, drawActionOptions(inout, "1111"));
                // console.log((this as any).changedata(),"this.$props.");
                // 2.箱线图配置
                // Highcharts.chart((this as any).id, drawBoxOptions(boxchart3, xAxis3 , "222") as Options);
                // (this as any).$emit("ajaxFunc", this.$props.urlparas);
                // 3.中间热力图配置
                // Highcharts.chart((this as any).id,
                //     drawHeatmapOptions(listdata, "HeatMap","" ,"") as any
                //     );
            },
            this.showinterval
        );
    }
    @Watch("postparms",  {deep : true})
    private onHandleShow(val: boolean) {
        console.log("监听",this.postparms,this.id);
        // this.initshow = !this.initshow;
    }
    private destroyed() {
        // console.log("destory (this as any).intervalid", (this as any).intervalid);
        clearInterval(this.intervalid);
    }
    // @Prop() private ajaxFunc!: (paras: PostParams) => Options;
}
</script>


<style scoped>
.innerChart {
    height: 100%;
    position: relative;
    background: rgba(0,0,0,0);
}
</style>
