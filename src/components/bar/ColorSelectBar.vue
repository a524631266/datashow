<template>
  <div class="colorselect">
      <!-- 外观容器 -->
      <svg ref="color">
        <!-- <g>
            <rect :fill="containerfill" rx="0" ry="0" stroke="#999999" stroke-width="2" x="0" y="0" :width="containerwidth" :height="containerheight"></rect>
        </g> -->
      </svg>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch,Model } from 'vue-property-decorator';
import ColorInterploater from '@/util/colorinterpolater.ts';
import * as d3 from "d3";
// color 选择器
//  model 用来在用户选择上下条的时候默认向下获取
/**
 * - 属性
 * - a) containerwidth: 容器长度 默认 200
 * - b) containerheight： 容器高度 默认 12
 * - c) containerfill： 容器背景颜色 默认#303030
 * - d) containerfill： 容器背景颜色 默认#303030
 */
@Component({
    components: {
    },
})
export default class ColorSelectBar extends Vue {
    @Model("changepostparams") public data!: Array<[number,string]>;
    // 容器宽度
    @Prop({default: 200}) public containerwidth!: number;
    // 容器高度
    @Prop({default: 12}) public containerheight!: number;
    // 容器背景颜色
    @Prop({default: "#303030"}) public containerfill!: string;
    // 分段数量
    @Prop({default: 4}) public splitnum!: number;
    private svgpadding = 2;
    private mounted() {
        const data: Array<[number,string]> = [[-10, '#3060cf'],
                [0, '#fffbbc'],
                [10, '#c4463a']];
        // const colorinter = new ColorInterploater(data);
        // console.log("this.$refs.color",this.$refs.color);
        // 添加一个矩形，并应用线性渐变
        this.initLinearGradient(data);
    }
    /**
     * 定义一个线性渐变
     * @param data 拥有[值,颜色]元组块的list
     */
    private initLinearGradient(data: Array<[number,string]>) {
        const svg = d3.select(this.$refs.color as any);
        const defs = svg.append("defs");
        const linearGradient = defs.append("linearGradient")
                                .attr("id","linearColor")
                                .attr("x1","0%")
                                .attr("y1","0%")
                                .attr("x2","100%")
                                .attr("y2","0%");
        const {length} = data;
        // const stop1 = linearGradient.append("stop")
        //                 .attr("offset","0%")
        //                 .style("stop-color",data[0][1]);
        // const stop2 = linearGradient.append("stop")
        //                 .attr("offset","50%")
        //                 .style("stop-color",data[1][1]);
        // const stop3 = linearGradient.append("stop")
        //                 .attr("offset","100%")
        //                 .style("stop-color",data[2][1]);
        // 批量导入数据组
        data.forEach(
            (val: [number, string],index: number) => {
                linearGradient.append("stop")
                        .attr("offset", (index / (length-1)) * 100 + "%")
                        .style("stop-color",val[1]);
            }
        );
        // 添加线性渐变
        const g = svg.attr("width",this.containerwidth).attr("height",this.containerheight * 2 + this.svgpadding * 2 ).append("g");
        const colorbanding = g
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", 0)
                            .attr("width", this.containerwidth)
                            .attr("height", this.containerheight )
                            .style("fill","url(#" + linearGradient.attr("id") + ")");
        this.drawSplitBar(g,data);
        this.drawText(g,data);
    }
    private drawSplitBar(g: any,data: Array<[number,string]>) {
        const daf = data;
        const splitbar = g.append("g");
        const min = data[0][0];
        const max = data[data.length-1][0];
        // const splitnum = 4;
        const splitvaluewidth = (max-min) / this.splitnum;
        const splitwidth = this.containerwidth / this.splitnum;
        const drange = d3.range(min,max+1,splitvaluewidth);
        // const drange = d3.
        //  画分割线
        drange.forEach(
            (value: any,index: any)=> {
                // console.log("1111",value);
                const startX = splitwidth * index + this.svgpadding;
                const startY = 0;
                const endX = startX;
                const endY = startY + this.containerheight;
                splitbar.append("path")
                        .attr("fill","none")
                        .attr("stroke","rgb(230,230,230)")
                        .attr("stroke-width",1)
                        .attr("d",`M ${startX} ${startY} L ${endX} ${endY}`);
            }
        );
    }
    private drawText(g: any,data: Array<[number,string]>) {
        const daf = data;
        const splittext = g.append("g");
        const min = data[0][0];
        const max = data[data.length-1][0];
        [min,max].forEach(
            (value: any,index: any) => {
                const plus = index === 0? 0: this.containerwidth - this.svgpadding * 10;
                splittext.append("text")
                            .attr("fill","white")
                            // .attr("color","white")
                            .attr("stroke-width",1)
                            .style("color","white")
                            .attr("x",this.svgpadding+plus)
                            .attr("y",this.containerheight * 2)
                            .text(value);
            }
        );

    }
    private initRangeBar() {
        // this.
    }
}
</script>

<style lang='scss' scoped>
.colorselect{
    // width: 100px;
    // height: 100px;
    // z-index: 1000;
    // background: wheat;
    position: absolute;
}
</style>