<template>
  <!-- <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="true" :overlayClassName="classname" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template>
  </a-popover> -->
  <div class="ant-popover ant-popover-placement-rightTop" :class="classname" :style="overlayStyle" @mouseleave="tooltipmouseleave" @mouseenter="tooltipmouseenter">
      <div class="ant-popover-content">
          <div class="ant-popover-arrow"></div>
          <div class="ant-popover-inner">
              <div>
                <div class="ant-popover-title" v-text="nodedataref.name"></div>
                <div class="ant-popover-inner-content">
                    <a data-v-40e8afb2="" :href="'/home/'+nodedataref.key" @click.prevent="router2home" target="_self" class="btn btn-sm">图表</a>
                    <a data-v-40e8afb2="" :href="'/info/'+nodedataref.key" @click.prevent="router2info" target="_self" class="btn btn-sm">用户信息</a>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Antd from "ant-design-vue";
import { ChildrenValue } from "@/components/bar/LeftBar.vue";
import PubSub from 'pubsub-js';
@Component({
    components: {
        APopover: Antd.Popover
    },
})
export default class TooltipRoute extends Vue {
    private classname = "tooltip2";
    private tooltipplacement = "rightTop";
    private nodedataref: ChildrenValue = {} as any;
    private overlayStyle = {left:"50px",top:"572px"};
    private timeoutqueue: number[]= [];
    private locktooltip = false;
    public mounted() {
        // 订阅显示tooltip消息
        PubSub.subscribe("showtooltip",async (mesg: any,data: {entity: string,name: string,isLeaf: boolean,level: number,clientX: number,clientY: number,target: DOMRect,coord: [number, number]}) => {
          this.locktooltip = true;
          this.nodedataref.key = data.entity;
          this.nodedataref.name = data.name;
          this.nodedataref.isLeaf = data.isLeaf;
          this.nodedataref.level = data.level;
          this.nodedataref.coord = data.coord;
          if( data.target) {
              this.overlayStyle = {left: (data.target.left+data.target.width) + "px",top: data.target.top + "px"};
          } else {
              this.overlayStyle = {left: data.clientX+"px",top: data.clientY+"px"};
          }
          this.classname = "tooltip3";
        });
        // 订阅隐藏tooltip消息
        PubSub.subscribe("hidetooltip",(mesg: any) => {
            // if(!this.locktooltip) {
                this.delayhidetooltip();
            // }
        });
    }
    // // @Emit()
    // private visibleChange(e: any,b: any) {
    //     console.log("visible222222",e,b);
    //     if(!e) {// 隐藏，也就是鼠标移除方块的时候
    //         // this.tooltipplacement = "leftTop";
    //         this.classname = "tooltip2";
    //         // this.tooltipShow = false;
    //     } else {
    //         this.tooltipplacement = "right";
    //         // this.tooltipShow = true;
    //         this.classname = "tooltip3";
    //     }
    // }
    // @Emit()
    // private getPopupContainer(trigger: any) {
    //     return document.body;
    // }
    // @Emit()
    // private showtooltip(e: any) {
    //     // const {key,name} = e.node.dataRef;
    //     const {clientX,clientY}  = e.event;
    //     // this.entity = key;
    //     // this.tooltiptitlename = name;
    //     const mouseleft = clientX + "px";
    //     const mousetop = clientY + "px";
    //     // console.log("111111",e.event.target);
    //     // 记录当前的target用来保管数据
    //     // this.selectnode = e.event.target;
    //     this.nodedataref = e.node.dataRef;
    //     // this.autoresizetooltip();
    //     setTimeout(()=>this.autoresizetooltip(mouseleft,mousetop),50);
    // }
    // private autoresizetooltip(mouseleft: string,mousetop: string) {
    //     const tooltipdom = document.getElementsByClassName("ant-popover");
    //     if (tooltipdom[0] === undefined) {
    //         setTimeout(this.autoresizetooltip,100);
    //     } else {
    //         (tooltipdom[0] as any).style.left = mouseleft;
    //         (tooltipdom[0] as any).style.top = mousetop;
    //     }
    //     // console.log(tooltipdom);
    // }
    private router2home() {
        this.$router.push({name: "node",query: {
            entity: this.nodedataref.key,
            name: this.nodedataref.name as any,
            level:this.nodedataref.level as any,
            isLeaf:this.nodedataref.isLeaf as any,
            coord:this.nodedataref.coord as any,
            },params: { entity: this.nodedataref.key}});
    }
    private router2info() {
        // this.$router.push({name: "entityinfo",
        //     query: {
        //         entity: this.nodedataref.key,
        //         name: this.nodedataref.name,
        //         other:"123456"},
        //     params: {
        //         entity: this.nodedataref.key,
        //     }});
        PubSub.publish("showUserinfo",{
                entity: this.nodedataref.key,
                name: this.nodedataref.name}
                );
    }
    @Emit()
    private tooltipmouseenter() {
        // console.log("进入tooltip");
        this.locktooltip = true;
        while (this.timeoutqueue.length > 0) {
            const before = this.timeoutqueue.shift();
            // console.log("before",before);
            clearTimeout(before);
        }
        this.classname = "tooltip3";
        // 这句话很重要，要判断20ms之后是否会有离开事件，有的话，就设置成true,防止隐藏
        setTimeout(
            ()=> {// 20ms之后
                if(!this.locktooltip) {
                    this.locktooltip = true;
                }
            },
            20
        );
    }
    @Emit()
    private delayhidetooltip() {
        // console.log("离开tooltip delay");
        this.locktooltip = false;
        const timeid = setTimeout(
            ()=> {
                if(!this.locktooltip) {
                    this.classname = "tooltip2";
                    // console.log("离开之后500ms",timeid);
                }
            },
            100
        );
        this.timeoutqueue.push(timeid);
    }
    @Emit()
    private tooltipmouseleave() {
        // console.log("离开tooltip nodelay");
        this.locktooltip = false;
        // if(!this.locktooltip) {
        const timeid = setTimeout(
            ()=> {
                if(!this.locktooltip) {
                    this.classname = "tooltip2";
                    // console.log("离开之后500ms",timeid);
                }
            },
            50
        );
        this.timeoutqueue.push(timeid);
    }
}
</script>

<style lang='scss' scoped>
.ant-popover {
    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1030;
    cursor: auto;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    white-space: normal;
    font-weight: normal;
    text-align: left;
}

.ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow {
    top: 6px;
}
.ant-popover-placement-right > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-rightBottom > .ant-popover-content > .ant-popover-arrow {
    left: -4px;
    -webkit-box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
}
.ant-popover-arrow {
    background: #fff;
    width: 8.48528137px;
    height: 8.48528137px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    display: block;
    border-color: transparent;
    border-style: solid;
}
.ant-popover-inner {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.ant-popover-title {
    min-width: 177px;
    margin: 0;
    padding: 5px 16px 4px;
    min-height: 32px;
    border-bottom: 1px solid #e8e8e8;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}

.ant-popover-inner-content {
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.65);
}
.tooltip2 {
  display:none;
}
.tooltip3{
  display: block;
}
</style>