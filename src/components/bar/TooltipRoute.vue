<template>
  <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="tooltipShow" overlayClassName="tooltip2" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template>
  </a-popover>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Ant from "ant-design-vue";
import { ChildrenValue } from "@/components/bar/LeftBar.vue";
@Component({
    components: {
        APopover: Ant.Popover
    },
})
export default class TooltipRoute extends Vue {
    private alignConfig = {
                points: ['tl', 'tr'],        // align top left point of sourceNode with top right point of targetNode
                offset: [10, 20],            // the offset sourceNode by 10px in x and 20px in y,
                targetOffset: ['30%','40%'], // the offset targetNode by 30% of targetNode width in x and 40% of targetNode height in y,
                overflow: { adjustX: true, adjustY: true }, // auto adjust position when sourceNode is overflowed
            };
    private tooltipShow = false;
    private tooltipplacement = "leftTop";
    private nodedataref: ChildrenValue = {} as any;
    public mounted() {
        PubSub.subscribe("showtooltip",async (mesg: any,data: {entity: string,name: string,isLeaf: boolean,level: number,clientX: number,clientY: number}) => {
          this.nodedataref.key = data.entity;
          this.nodedataref.name = data.name;
          this.nodedataref.isLeaf = data.isLeaf;
          this.nodedataref.level = data.level;
        //   this.tooltipplacement = "right";
          await this.autoresizetooltip(data.clientX+"px",data.clientY+"px");
          this.tooltipShow = true;
          console.log(this.nodedataref.key);
        //   this.tooltipplacement = "right";
        });
        // console.log('');
    }
    @Emit()
    private visibleChange(e: any,b: any) {
        console.log("visible222222",e,b);
        if(!e) {
            this.tooltipplacement = "leftTop";
            this.tooltipShow = false;
        } else {
            this.tooltipplacement = "right";
            this.tooltipShow = true;
        }
    }
    @Emit()
    private getPopupContainer(trigger: any) {
        return document.body;
        // return trigger;
        // console.log("childNodes333333",this.selectnode);
        // return this.selectnode;
    }
    @Emit()
    private showtooltip(e: any) {
        // const {key,name} = e.node.dataRef;
        const {clientX,clientY}  = e.event;
        // this.entity = key;
        // this.tooltiptitlename = name;
        const mouseleft = clientX + "px";
        const mousetop = clientY + "px";
        // console.log("111111",e.event.target);
        // 记录当前的target用来保管数据
        // this.selectnode = e.event.target;
        this.nodedataref = e.node.dataRef;
        // this.autoresizetooltip();
        setTimeout(()=>this.autoresizetooltip(mouseleft,mousetop),50);
    }
    private autoresizetooltip(mouseleft: string,mousetop: string) {
        const tooltipdom = document.getElementsByClassName("ant-popover");
        if (tooltipdom[0] === undefined) {
            setTimeout(this.autoresizetooltip,100);
        } else {
            (tooltipdom[0] as any).style.left = mouseleft;
            (tooltipdom[0] as any).style.top = mousetop;
        }
        this.tooltipShow = true;
        // console.log(tooltipdom);
    }
    private router2home() {
        this.$router.push({name: "node",query: {
            entity: this.nodedataref.key,
            name: this.nodedataref.name as any,
            level:this.nodedataref.level as any,
            isLeaf:this.nodedataref.isLeaf as any,
            },params: { entity: this.nodedataref.key}});
    }
    private router2info() {
        this.$router.push({name: "node",query: {
            entity: this.nodedataref.key,
            name: this.nodedataref.name as any,
            level:this.nodedataref.level as any,
            isLeaf:this.nodedataref.isLeaf as any,
            },params: { entity: this.nodedataref.key}});
    }
}
</script>

<style lang='scss' scoped>
.tooltip2{
    display: block !important;
}
</style>