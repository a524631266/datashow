<template>
    <div class="container-fluid  rangeselect"  @mouseenter="showdownincon(true)" @mouseleave_1="showdownincon(false)">
        <div class="littlebar" :class="highlightbarclass"   @click="changeShow" v-show="initshow" @mouseenter="highlightbar(true)" @mouseleave="highlightbar(false)">
            <div class="fa icondown" :class="showdownicon" ></div>
        <!-- </div> -->
            <div class="row options1 table-dark" v-show="!show" @click.stop="donothing" >
                <form class="col-4">
                    <h3 class="section-heading">用户选项</h3>
                    <label class="small">From:</label>
                    <div class="input-group input-group-sm" >
                        <input class="form-control" :placeholder="data.starttime" v-model="data.starttime" type="text" />
                        <div class="input-group-addon">
                            <button class="btn btn-outline-secondary btn-sm" type="button"><i class="fa fa-calendar"></i></button>
                        </div>
                    </div>
                    <label class="small">To:</label>
                    <div class="input-group input-group-sm" >
                        <input class="form-control" :placeholder="data.endtime" v-model="data.endtime" type="text"/>
                        <div class="input-group-addon">
                            <button class="btn btn-outline-secondary btn-sm" type="button"><i class="fa fa-calendar"></i></button>
                        </div>
                    </div>
                    <label class="small">时间间隔:</label>
                    <div class="input-group input-group-sm">
                        <select class="form-control" v-model="data.refreshfeq">
                                <option label="1m" value="1"></option>
                                <option label="15min" value="15" selected="true"></option>
                                <option label="1h" value="60"></option>
                            </select>

                        <div class="input-group-addon">
                            <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="updatepostparams">Apply</button>
                        </div>
                    </div>
                </form>
                <div class="col-8 timepicker-relative-section">
                    <h3 class="section-heading">快选</h3>
                    <div class="card-group">
                        <ul class="card list-group list-group-flush">
                            <li class="list-group-item small"> Last 2 days </li>
                            <li class="list-group-item small"> Last 7 days </li>
                            <li class="list-group-item small"> Last 30 days </li>
                            <li class="list-group-item small"> Last 90 days </li>
                            <li class="list-group-item small"> Last 6 months </li>
                            <li class="list-group-item small"> Last 1 year </li>
                            <li class="list-group-item small"> Last 2 years </li>
                            <li class="list-group-item small"> Last 5 years </li>
                        </ul>
                        <ul class="card list-group list-group-flush">
                            <li class="list-group-item small"> Yesterday </li>
                            <li class="list-group-item small"> Day before yesterday </li>
                            <li class="list-group-item small"> This day last week </li>
                            <li class="list-group-item small"> Previous week </li>
                            <li class="list-group-item small"> Previous month </li>
                            <li class="list-group-item small"> Previous year </li>

                        </ul>
                        <ul class="card list-group list-group-flush">
                            <li class="list-group-item small"> Today </li>
                            <li class="list-group-item small"> Today so far </li>
                            <li class="list-group-item small"> This week </li>
                            <li class="list-group-item small"> This week so far </li>
                            <li class="list-group-item small"> This month </li>
                            <li class="list-group-item small"> This month so far </li>
                            <li class="list-group-item small"> This year </li>
                            <li class="list-group-item small"> This year so far </li>
                        </ul>
                        <ul class="card list-group list-group-flush">
                            <li class="list-group-item small"> Last 5 minutes </li>
                            <li class="list-group-item small"> Last 15 minutes </li>
                            <li class="list-group-item small"> Last 30 minutes </li>
                            <li class="list-group-item small"> Last 1 hour </li>
                            <li class="list-group-item small"> Last 3 hours </li>
                            <li class="list-group-item small"> Last 6 hours </li>
                            <li class="list-group-item small"> Last 12 hours </li>
                            <li class="list-group-item small"> Last 24 hours </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <slot name="chart">无数据</slot>
    </div>
</template>
<script lang="ts">

// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit, Model } from "vue-property-decorator";
import { PostParams,Dimension } from "@/types/index.ts";
@Component
export default class LittleBar extends Vue {
    // @Prop({default: true}) public show!: boolean;
    @Prop({default: "fa-sort-down"}) public showdownicon!: string;
    @Prop({default: false }) public initshow!: boolean;
    // @Model("changepostparams2") postparms2!: PostParams;
    @Model("changepostparams") public postparms!: PostParams;
    private highlightbarclass = "";
    private show = true;
    private some = 1;
    private data: PostParams = this.postparms;
    // {
    //     starttime: "",
    //     entity: "",
    //     endtime: "",
    //     entitynums: 20,
    //     scale: 1 * 60 * 60,
    //     winlen: 30 * 24 * 60 * 60,
    //     dimension: Dimension.none,
    //     refreshfeq: 15 * 60 * 1000,
    // };
    @Watch("show", {deep : true})
    public onHandleShow(val: boolean) {
        console.log("监听",this.show);
        // this.initshow = !this.initshow;
    }
    // 一旦更新data 状态的任意一个值，就通知父组件 false会不监听对象子元素的变换
    @Watch("data", {deep : true})
    public starttimeupdate(val: boolean) {
        console.log("监听starttime",this.show);
        // this.initshow = !this.initshow;
        this.talktofather();
    }
    @Emit()
    public changeShow(showv: boolean | Event) {
        this.show = showv instanceof Event ? !this.show : showv;
        console.log(this.show,showv , showv instanceof Event);
        this.some += 1;
    }
    @Emit()
    public ShowRangeSelect(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
        this.some += 1;
    }
    @Emit()
    public hide(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
    }
    @Emit()
    public highlightbar(show: boolean | any) {
        this.highlightbarclass = show ? "table-dark":"";
    }
    public initShow() {
        console.log(this.initshow,111111);
    }
    private mounted() {
        console.log("111111","加载");
    }
    private destroyed() {
        console.log((this as any).some);
    }
    private updatepostparams(value: any) {
        this.$emit("changepostparams", this.data);
    }
    private talktofather() {
        this.$emit("changepostparams", this.data);
    }
    // tslint:disable-next-line:no-empty
    private donothing() {
        console.log("1111111111");
    }
}
</script>

<style lang="scss" scoped>
.upper {
  position: absolute;
  top: 0%;
  height: 20px;

//   width: 100%;
  &:hover {
      cursor: pointer;
      background: yellow;
  };
}
// .upper {
//   position: fixed;
//   top: 0%;
//   height: 20px;
//   width: 60%;
//   z-index: 300;
// //   width: 100%;
//   &:hover {
//       cursor: pointer;
//       background: yellow;
//   };
// }
.panel-title-container {
    min-height: 9px;
    // cursor: move;
    word-wrap: break-word;
    display: block;
}

.section-heading{
    font-size: 1rem;
    line-height: 2.2;
}

.small{
    font-size: 12px;
    font-weight: 400;
}

.card {
    background: transparent;
    .list-group-item{
        background: transparent;
        cursor: pointer;
        padding: 0px;
        line-height: 1.5;
        box-shadow: 0px 0px 2px rgba(0,0,0,0);
    }
}
.rangeselect{
    box-shadow: 0 0 30px 0 #000;
    text-align: left;
    position: relative;
    z-index: 300;
    height: 100%;
    background: transparent;
}
.icondown{
    left: 50%;
    position: relative;
    cursor: pointer;
}
.timepicker-relative-section{
    min-height: 270px;
    
}
.options1{
    position: absolute;
    width: 100%;
    z-index: 300;
}
.littlebar{
    width: 100%;
}
.container-fluid,.row{
    padding: 0px;
    margin: 0px;
}


</style>

