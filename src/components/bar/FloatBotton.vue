<template>
    <a-button draggable ref="floatbutton" class="floatbutton" :class="movelock?'':'ondrag'" type="primary" @mouseleave="handlefloatLeaveButton" @click="showLeftBar"  @mousedown="handlefloatdownButton" @mouseup="handlefloatupButton">
      <!-- <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />  -->
      <a-icon :type="collapsed ? 'right' : 'left'" style="color:white"/> 
    </a-button>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Antd from "ant-design-vue";
import PubSub from 'pubsub-js';
@Component({
    components: {
        AButton:Antd.Button,
        AIcon: Antd.icon,
    },
})
export default class FloatBotton extends Vue {
    private movelock = true;
    private collapsed = true;
    private openLeftBar = false;
    private ondrag = false;
    @Emit()
    private handlefloatdownButton(e: MouseEvent) {
        // console.log("点击");
        this.ondrag = true;
        this.movelock = false;
    }
    @Emit()
    private handlefloatupButton(e: any) {
        this.movelock = true;// 锁住
        // console.log("弹起来");
    }
    @Emit()
    private haddlefloatMoveButton(e: any) { // 需要优化按钮
        if(this.movelock) {// 锁住的状态不能移动
            // console.log("锁住的状态不能移动");
        } else {
            // console.log("可以移动",e);
            const {clientX,clientY} = e;
            // const buttonwith = (this.$refs.floatbutton as any).$el.style.width;
            const {width: buttonwidth,height: buttonheight} = window.getComputedStyle((this.$refs.floatbutton as any).$el);
            // tslint:disable-next-line:radix
            const w = clientX * 1 - (parseInt(buttonwidth as any) * 1 / 2);
            // tslint:disable-next-line:radix
            const h = clientY * 1 - (parseInt(buttonheight as any) * 1 / 2);
            (this.$refs.floatbutton as any).$el.style.left = w + "px";
            (this.$refs.floatbutton as any).$el.style.top = h + "px";
        }
    }
    @Emit()
    private handlefloatLeaveButton(e: any) {
        // console.log("离开");
        this.haddlefloatMoveButton(e);
        // setTimeout(() => this.haddlefloatMoveButton(e),0);
        this.movelock = true;// 锁住
        this.ondrag = false;
    }
    @Emit()
    private showLeftBar(e: any) {
        // console.log("dosomm");
        this.collapsed = !this.collapsed;
        this.openLeftBar  = !this.openLeftBar;
        PubSub.publish("openLeftBar",this.openLeftBar);
    }

}
</script>

<style lang='scss' scoped>
.floatbutton {
    position: fixed;
    z-index: 600;
    top:0px;
    left: 0;
    // height: 100%;

    height: 24px;
    color: #8e8e8e;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    background-color: #2a2a2c;
    background-image: linear-gradient(180deg,#262628,#303032);
    background-repeat: repeat-x;
    border-color: #262628;
          background: transparent;
    //   border: 0px transparent;
    // padding: 6px 11px;
    line-height: 16px;
    border: 1px solid #2f2f32;
    margin-right: 3px;
    white-space: nowrap;
    &:hover {
      background: linear-gradient(180deg,#262628,#303032);
    }
}
.ondrag{
    background: transparent;
}


</style>