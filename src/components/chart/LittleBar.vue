<template>
    <div class="upper" @mouseenter="changeShow(false)" @mouseleave="changeShow(true)">
        <div class="" v-show="show">{{some}}</div>
        <div class="select" v-show="!show">
            <form>
                <h3 class="section-heading">用户选项</h3>
                <label class="small">From:</label>
                <div class="input-group" >
                    <div class="input-group-addon">
                        <input type="text">
                    </div>
                    <div class="input-group-addon">
                        <button ><i class="fa fa-calendar"></i></button>
                    </div>
                </div>
                <label class="small">To:</label>
                <div class="input-group" >
                    <div class="input-group-addon">
                        <input type="text">
                    </div>
                    <div class="input-group-addon">
                        <button><i class="fa fa-calendar"></i></button>
                    </div>
                </div>
                <label class="small">时间间隔:</label>
                <div class="input-group">
                    <div class="input-group-addon">
                        <select class="form-control">
                            <option label="15min" value="15" selected>15</option>
                            <option label="1s" value="1">1</option>
                            <option label="3s" value="3">3</option>
                        </select>
                    </div>
                    <div class="input-group-addon">
                        <button type="submit" @on.stop="changeShow(false)">Apply</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";


@Component
export default class LittleBar extends Vue {
    @Prop({default: true}) public show!: boolean;
    private some = 1;
    @Watch("show")
    public onHandleShow(val: boolean) {
        console.log("监听",this.show);
    }
    @Emit()
    public changeShow(show: boolean | any) {
        this.show = show ? show : !this.show;
    }
    @Emit()
    public hide(show: boolean | any) {
        this.show = show ? show : !this.show;
    }
    private mounted() {
        console.log("111111","加载");
    }
    private destroyed() {
        console.log((this as any).some);
    }
}
</script>

<style lang="scss" scoped>
.upper {
  position: absolute;
  top: 0%;
  height: 20px;
  width: 100%;
  &:hover {
      cursor: pointer;
      background: yellow;
  };
}
.panel-title-container {
    min-height: 9px;
    // cursor: move;
    word-wrap: break-word;
    display: block;
}

.section-heading{
    font-size: 1.1rem;
}

.small{
    font-size: 12px;
    font-weight: 400;
}
</style>

