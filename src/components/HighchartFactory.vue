<template>
    <div :class="positionClass" draggable="true" >
        <LittleBar :show="positionClass === 'center'?true:false" />
        <span>option: {{ option }}</span>
        <div class="innerChart" ref="id" :id="id">
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import { PositionClass , PostParams } from '@/types/index';
import LittleBar from "@/components/chart/LittleBar.vue";
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';
import { inout, drawActionOptions} from "@/components/options/TimeLineOptions.ts";
import {boxchart3, xAxis3,drawBoxOptions} from "@/components/options/BoxOptions.ts";
import {listdata, drawHeatmapOptions } from "@/components/options/HeatMapOptions.ts";

@Component({
    components: {
        LittleBar,
    },
    data() {
        return {
            postInterval: 200,
            entity: "",
            // urlparas: this.$props.urlparas,
        };
    },
    mounted() {
        (this as any).intervalid = setTimeout(() => {
            // Highcharts.chart((this as any).id, (this as any).option as Options);
            // Highcharts.chart((this as any).id, drawActionOptions(inout, "1111"));
            // console.log((this as any).changedata(),"this.$props.");
            // Highcharts.chart((this as any).id, drawBoxOptions(boxchart3, xAxis3 , "222") as Options);
            // (this as any).$emit("ajaxFunc", this.$props.urlparas);
            Highcharts.chart((this as any).id,
                drawHeatmapOptions(listdata, "HeatMap","" ,"") as any
                );
        }, (this as any).postInterval);
    },
    destroyed() {
        // console.log("destory (this as any).intervalid", (this as any).intervalid);
        clearInterval((this as any).intervalid);
    },
    methods: {
        changedata() {
            console.log(this.$props.data);
            if (this.$props.data.id === "chart-top") {
                this.$props.data.positionClass = PositionClass.Center;
            }
        },
    },
})
export default class HighchartFactory extends Vue {
    @Prop() private urlparas!: PostParams;
    @Prop() private id!: string;
    @Prop() private positionClass!: PositionClass;
    @Prop() private option!: object;
    @Prop() private data!: object;
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
