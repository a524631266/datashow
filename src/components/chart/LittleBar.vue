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
                    <label class="small">scale:</label>
                    <div class="input-group input-group-sm">
                        <select class="form-control" v-model="data.scale">
                                <!-- <option label="200ms" value="200"></option>
                                <option label="1s" value="1000"></option>
                                <option label="2s" value="2000" selected="true"></option>
                                <option label="4s" value="4000"></option>
                                <option label="15min" value="15000"></option>
                                <option label="1h" value="60000"></option> -->
                                <option label="1h" value="3600"></option>
                                <option label="1d" value="86400" selected="true"></option>
                            </select>
                        <div class="input-group-addon">
                            <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="updatepostparams">查询</button>
                        </div>
                    </div>
                </form>
                <div class="col-8 timepicker-relative-section">
                    <h3 class="section-heading">时段范围</h3>
                    <div class="card-group">
                        <ul v-for="(data,index) in rangeselectlist" :key="index" class="card list-group list-group-flush">
                            <li v-for="(item,index) in data" :key="index" class="list-group-item small" @click="licktimeselectrange(item.value)">{{item.day}}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="barBody">
            <slot name="chart">无数据</slot>
        </div>
        <!-- <transition name="fade"> -->
            <!-- :defaultValue="1" -->
            <a-row v-if="showprogress" class="siberbar">
                <a-col :span="24">
                    <a-slider  :tipFormatter="formatter" :marks="slidermarks"  v-model="innershowInterval" />
                    <a-button shape="circle" icon="play-circle" size="small" @click="restarttodraw"/>
                </a-col>
                <!-- <a-col :span="4">
                    <div>
                    
                    </div>
                </a-col> -->
            </a-row>
        <!-- </transition> -->
        <!-- <transition name="fade"> -->
            <a-progress v-if="showprogress" :format="progressformat" strokeLinecap="square" :percent="percent" />
        <!-- </transition> -->
        <!-- <transition name="fade" > -->
             <div v-if="showprogress" :style="{ width: '30%',position: 'absolute',bottom:0,right:0, border: '1px solid #d9d9d9', borderRadius: '2px' }">
                <a-calendar @select="onSelect" :fullscreen="false" @panelChange="onPanelChange" v-model="showday" mode="month"/>
             </div>
        <!-- </transition> -->
    </div>
</template>
<script lang="ts">

// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit, Model } from "vue-property-decorator";
import { PostParams,Dimension, PositionClass } from "@/types/index.ts";
import moment,{ DurationInputObject, Moment } from "moment";
import Ant from "ant-design-vue";
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// (window as any).moment = moment;
@Component({
    components: {
        AProgress: Ant.Progress,
        ASlider: Ant.Slider,
        ARow: Ant.Row,
        ACol: Ant.Col,
        AButton: Ant.Button,
        ACalendar: Ant.Calendar,
    },
    computed:{
        percent(): number {
            // return 75;
            // tslint:disable-next-line:radix
            return parseInt(((this as any).appendtimelist?(this as any).appendtimelist.length:0)/(this as any).totaltimelen+"")*100;
            // tslint:disable-next-line:radix
            // return parseInt(0.5 +"") * 100;
        },
        showprogress(): boolean {
            console.log("showprogress",(this as any).percent);
            // return (this as any).appendtimelist!==undefined?(this as any).percent===100?false:true:false;
            return (this as any).appendtimelist!==undefined && (this as any).positionClass===PositionClass.Center?true:false;
        }
    },
})
export default class LittleBar extends Vue {
    @Prop({default: ""}) public titlename!: string;
    @Prop() public appendtimelist!: number[];
    @Prop({default: moment()}) public showday!: Moment;
    @Prop() public positionClass!: PositionClass;
    // @Prop({default: "fa-sort-down"}) public showdownicon!: string;
    // @Model("changepostparams2") postparms2!: PostParams;
    @Model("changepostparams") public postparms!: PostParams;
    private highlightbarclass = "";
    private totaltimelen = 0;
    private show = true;
    private data: PostParams = this.postparms;
    private showdownicon: string = "";
    private innershowInterval = 0;
    private slidermarks = {
        0: {
          style: {
            color: 'white',
          },
          label: "0s",
        },
        50: {
          style: {
            color: 'white',
          },
          label: "2.5s",
        },
        100: {
          style: {
            color: 'white',
          },
          label: "5s",
        }
    };
    private rangeselectlist = [
        [{day:" Last 2 days ",value: [2,'d']},{day:"Last 7 days ",value: [7,'d']},{day:"Last 30 days",value: [30,'d']},{day:"Last 90 days",value: [90,'d']},{day:"Last 6 months",value: [6,'M']},{day:"Last 1 year",value: [1,'y']},{day:"Last 2 years",value: [2,'y']},{day:"Last 5 years",value: [5,'y']},],
        [{day:"Yesterday ",value: [1,'d']},{day:"Day before yesterday",value: [2,'d']},{day:"This day last week ",value: [1,'w']},{day:"last month ",value: [1,'M']},{day:"last year ",value: [1,'y']},],
        [{day:"Today ",value: [1,'d']},{day:"This week ",value: [1,'w']},{day:"This month ",value: [1,'M']},{day:"This year ",value: [1,'y']}],
    ];
    @Watch("innershowInterval")
    public setInterval(newval: any,oldval: any) {
        // console.log("newval:",newval,"oldval：",oldval);
        // tslint:disable-next-line:radix
        this.data.showinterval = parseInt(newval / 100 * 5000+"");
    }
    @Emit()
    public changeShow(showv: boolean | Event) {
        this.show = showv instanceof Event ? !this.show : showv;
        // console.log(this.show,showv , showv instanceof Event);
    }
    // @Emit()
    // public ShowRangeSelect(show: boolean | any) {
    //     this.show = show !== undefined ? show : !this.show;
    //     this.some += 1;
    // }
    @Emit()
    public hide(show: boolean | any) {
        this.show = show !== undefined ? show : !this.show;
    }
    @Emit()
    public highlightbar(show: boolean | any) {
        this.highlightbarclass = show ? "table-dark":"";
    }
    @Emit()
    public licktimeselectrange(value: [any,string]) {
        this.data.starttime = moment().subtract(value[0],value[1]).format("YYYY-MM-DD HH:mm:ss");
        this.data.endtime = moment().format("YYYY-MM-DD HH:mm:ss");
        // moment().subtract()
    }
    private mounted() {
        // console.log("111111","加载");
        const start = moment(this.postparms.starttime);
        const end = moment(this.postparms.endtime);
        const {scale} = this.postparms;
        this.totaltimelen = end.diff(start,scale===3600?"h":scale===86000?"d":"d");
        console.log("计算日期",this.totaltimelen);
        this.innershowInterval = this.postparms.showinterval / 1000 * 20 ;
    }
    private destroyed() {
        // console.log((this as any).some);
    }
    private updatepostparams(value: any) {
        // this.$emit("changepostparams", this.data);
        this.$emit("redraw");
    }
    private formatter(value: any) {
        if (value/20 < 1) {
            return `${value/20 * 1000} ms`;
        } else {
            return `${value/20}s`;
        }
    }
    private progressformat(value: any) {
        return `${value}%`;
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
    private restarttodraw() {
        this.$emit("restarttodraw");
    }

    private onPanelChange(value: any, mode: any) {
      console.log(value, mode);
    }

    private onSelect(date: Moment) {
        const querydate = moment(date,"YYYY-MM-DD").startOf("day").valueOf();
        this.$emit("querydate",querydate);
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
.ant-progress{
    position: absolute;
    top: 0;
    left: 10%;
    width: 30%;
    // margin-left: -25%; 
    
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 10s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

 
.siberbar {
    position: absolute;
    width: 33%;
    bottom: 0;
    &.ant-btn {
        background: transparent;
        border: 0;
    }
}

</style>

