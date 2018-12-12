<template>
    <div class="container-fluid table-dark" @mouseenter="changeShow(false)">
        <div class="" v-show="show">{{some}}</div>
        <div class="row" v-show="!show">
            <form class="col">
                <h3 class="section-heading">用户选项</h3>
                <label class="small">From:</label>
                <div class="input-group" >
                    
                    <input class="form-control" type="text"/>
                    
                    <div class="input-group-addon">
                        <button class="btn btn-outline-secondary" type="button"><i class="fa fa-calendar"></i></button>
                    </div>
                </div>
                <label class="small">To:</label>
                <div class="input-group" >
                    
                    <input class="form-control" type="text"/>
                    
                    <div class="input-group-addon">
                        <button class="btn btn-outline-secondary" type="button" ><i class="fa fa-calendar"></i></button>
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
                        <button class="btn btn-secondary" type="submit" @click.prevent="changeShow(true)">Apply</button>
                    </div>
                </div>
            </form>
            <div class="col-8  ">
                <h3 class="section-heading">快选</h3>
                <div class="card-group">
                    <ul class="card list-group list-group-flush">
                        <li class="list-group-item"> 最近两天 </li>
                        <li class="list-group-item"> 最近7天 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 最近两天 </li>
                        <li class="list-group-item"> 最近7天 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 上个星期 </li>
                    </ul>
                    <ul class="card list-group list-group-flush">
                        <li class="list-group-item"> 最近两天 </li>
                        <li class="list-group-item"> 最近7天 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 上个星期 </li>
                    </ul>
                    <ul class="card list-group list-group-flush">
                        <li class="list-group-item"> 最近两天 </li>
                        <li class="list-group-item"> 最近7天 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 上个星期 </li>
                    </ul>
                    <ul class="card list-group list-group-flush">
                        <li class="list-group-item"> 最近两天 </li>
                        <li class="list-group-item"> 最近7天 </li>
                        <li class="list-group-item"> 上个星期 </li>
                        <li class="list-group-item"> 上个星期 </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">

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
        this.show = show !== undefined ? show : !this.show;
        this.some += 1;
    }
    @Emit()
    public hide(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
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
    font-size: 1.1rem;
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
        box-shadow: 0px 0px 2px #650087;
    }
}
</style>

