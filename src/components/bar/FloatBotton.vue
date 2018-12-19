<template>
    <a-button ref="floatbutton" class="floatbutton" type="primary" @mouseleave="handlefloatLeaveButton" @click="showLeftBar" style="margin-bottom: 16px" @mousemove="haddlefloatMoveButton" @mousedown="handlefloatdownButton" @mouseup="handlefloatupButton">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" /> 
    </a-button>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Ant from "ant-design-vue";
import PubSub from 'pubsub-js';
@Component({
    components: {
        AButton:Ant.Button,
        AIcon: Ant.icon,
    },
})
export default class FloatBotton extends Vue {
    private movelock = true;
    private collapsed = true;
    private openLeftBar = false;
    @Emit()
    private handlefloatdownButton(e: MouseEvent) {
        this.movelock = false;
    }
    @Emit()
    private handlefloatupButton(e: any) {
        this.movelock = true;// 锁住
    }
    @Emit()
    private haddlefloatMoveButton(e: any) { // 需要优化按钮
        if(this.movelock) {// 锁住的状态不能移动
            console.log("锁住的状态不能移动");
        } else {
            console.log("可以移动",e);
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
        setTimeout(() => this.haddlefloatMoveButton(e),50);
    }
    @Emit()
    private showLeftBar(e: any) {
        console.log("dosomm");
        this.collapsed = !this.collapsed;
        this.openLeftBar  = !this.openLeftBar;
        PubSub.publish("openLeftBar",this.openLeftBar);
    }

}
</script>

<style lang='scss' scoped>
.floatbutton {
  position: fixed;
  z-index: 500;
  left: 0;
}
</style>