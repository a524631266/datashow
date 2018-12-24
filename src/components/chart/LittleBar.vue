<template>
    <div class="container-fluid  rangeselect"  @mouseenter="showdownincon(true)" @mouseleave="showdownincon(false)">
        <div class="littlebar" :class="highlightbarclass"   @click="changeShow" @mouseenter="highlightbar(true)" @mouseleave="highlightbar(false)">
            <div class="row">
                <div class="charttitletext"> {{titlename }} </div>
                <div class="fa icondown middlebutton" :class="showdownicon"></div>
                <div class="charttitletime" v-show="false"> {{data.starttime + "" + data.endtime }} </div>
            </div>
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
                    <label class="small">刷新频率:</label>
                    <div class="input-group input-group-sm">
                        <select class="form-control" v-model="data.postInterval">
                                <option label="200ms" value="200"></option>
                                <option label="1s" value="1000"></option>
                                <option label="2s" value="2000" selected="true"></option>
                                <option label="4s" value="4000"></option>
                                <option label="15min" value="15000"></option>
                                <option label="1h" value="60000"></option>
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
        <div class="barBody">
            <slot name="chart">无数据</slot>
        </div>
        
    </div>
</template>
<script lang="ts">

// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit, Model } from "vue-property-decorator";
import { PostParams,Dimension } from "@/types/index.ts";
@Component
export default class LittleBar extends Vue {
    @Prop({default: ""}) public titlename!: string;
    // @Prop({default: "fa-sort-down"}) public showdownicon!: string;
    // @Model("changepostparams2") postparms2!: PostParams;
    @Model("changepostparams") public postparms!: PostParams;
    private highlightbarclass = "";
    private show = true;
    private some = 1;
    private data: PostParams = this.postparms;
    private showdownicon: string = "";
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
    private mounted() {
        // console.log("111111","加载");
    }
    private destroyed() {
        console.log((this as any).some);
    }
    private updatepostparams(value: any) {
        this.$emit("changepostparams", this.data);
    }
    /**
     * 这个方法会更改model数据的，也就是父亲的数据
     * 如果父亲的数据是绑定到其父亲的model的，会自动
     * 更新其父亲的数据
     */
    private talktofather() {
        console.log("talktofather");
        this.$emit("changepostparams", this.data);
    }
    // tslint:disable-next-line:no-empty
    private donothing() {
        console.log("1111111111");
    }
    private showdownincon(show: boolean) {
        // console.log("sssssssssssss");
        this.showdownicon = show?"fa-sort-down":"";
        // console.log("showdownicon",show,this.showdownicon,this.postparms.entity);
    }
}
</script>

<style lang="scss" scoped>
$littlebarheight: 24px;
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
    // box-shadow: 0 0 30px 0 #000;
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
.barBody{
    height:calc(100% - 24px);
}
.anchorBL{
    display:none;
}
.charttitletext{
    float: left;
}
.middlebutton{
    position: absolute;
}
</style>

