<template>
    <div class="innerChart" ref="id" :id="id" style="absolute">
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Emit, Model, Watch, Inject } from 'vue-property-decorator';
import Highcharts, { Options , HeatMapSeriesOptions} from 'highcharts';

@Component({
})
export default class BaseChartFactory extends Vue {
    @Prop() public id!: string;
    // @Inject("option") public option!: object;
    @Prop() public option!: object;
    private data = [];
    public mounted() {
        // Highcharts.chart(this.id, this.option);
    }
    @Watch("option.change",{deep: true})
    private redrawChart(newVal: object, oldVal: object) {
       console.log("options变化",newVal, oldVal);
       if(newVal !== oldVal) {
            Highcharts.chart(this.id, this.option);
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
