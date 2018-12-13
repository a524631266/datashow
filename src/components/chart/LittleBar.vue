<template>
    <div class="container-fluid table-dark rangeselect" @mouseenter="changeShow(false)">
        <div class="" v-show="initShow" >{{some}}</div>
        <div class="row" v-show="!show">
            <form class="col">
                <h3 class="section-heading">用户选项</h3>
                <label class="small">From:</label>
                <div class="input-group" >
                    <input class="form-control small" type="text"/>
                    <div class="input-group-addon">
                        <button class="btn btn-outline-secondary btn-sm" type="button"><i class="fa fa-calendar"></i></button>
                    </div>
                </div>
                <label class="small">To:</label>
                <div class="input-group" >
                    <input class="form-contro" type="text"/>
                    <div class="input-group-addon">
                        <button class="btn btn-outline-secondary btn-sm" type="button" ><i class="fa fa-calendar"></i></button>
                    </div>
                </div>
                <label class="small">时间间隔:</label>
                <div class="input-group">
                    <select class="form-control">
                            <option label="15min" value="15" selected>15</option>
                            <option label="1s" value="1">1</option>
                            <option label="3s" value="3">3</option>
                        </select>

                    <div class="input-group-addon">
                        <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="changeShow(true)">Apply</button>
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
</template>
<script lang="ts">

// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit, Model } from "vue-property-decorator";
@Component
export default class LittleBar extends Vue {
    @Prop({default: true}) public show!: boolean;
    @Model('initShow', { type: Boolean }) public initshow!: boolean;
    private some = 1;
    @Watch("show", {deep : true})
    public onHandleShow(val: boolean) {
        console.log("监听",this.show);
        this.initshow = !this.initshow;
    }
    @Emit()
    public changeShow(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
        this.some += 1;
    }
    @Emit()
    public hide(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
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
}

.timepicker-relative-section{
    min-height: 237px;
    
}
</style>

