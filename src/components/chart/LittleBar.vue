<template>
    <div class="container-fluid  chartheader"  @mouseenter="showdownincon(true)" @mouseleave="showdownincon(false)">
        <div class="littlebar" >
            <div :style="{position:'relative'}">
                <!-- <div class="fa icondown middlebutton" :class="showdownicon"></div> -->
                <div class="fa button fa-clock-o chartrange"  @click="changeShow" v-html="dayrange" v-show="showclockbutton" @mouseenter="highlightbar(true)" @mouseleave="highlightbar(false)"></div>
                <!-- <time-botton :class="middlebutton"></time-botton> -->
                <!-- <div class="charttitletime" v-show="false"> {{data.starttime + "" + data.endtime }} </div> -->
            </div>
            <div class="row options1 table-dark" v-show="showrange" @click.stop="donothing" >
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
                                <option label="1h" value="3600">1h</option>
                                <option label="1d" value="86400" selected="true">1d</option>
                            </select>
                        <div class="input-group-addon">
                            <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="queryInitWebSocket">查询</button>
                        </div>
                    </div>
                </form>
                <div class="col-8 timepicker-relative-section">
                    <h3 class="section-heading">时段范围</h3>
                    <div class="card-group">
                        <ul v-for="(data,index) in rangeselectlist" :key="index" class="card list-group list-group-flush">
                            <li v-for="(item,index) in data" :key="index" class="list-group-item h6" :class="item.day===activeitem?'active':''" @click="licktimeselectrange(item)">{{item.day}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="charttitletext" :class="titlesize"> {{titlename }} </div>
        <div class="barBody">
            <slot name="chart">无数据</slot>
        </div>
        <!-- <transition name="fade"> -->
            <!-- :defaultValue="1" -->
        <a-row v-if="showprogress" class="siberbar" v-show="showclockbutton">
            <a-col :span="24">
                <span class="badge badge-secondary">阈值</span>
                <a-checkbox v-model="thresholder.positive">正</a-checkbox>
                <a-checkbox v-model="thresholder.negative">负</a-checkbox>
                <a-slider  :tipFormatter="thresholdformatter" :marks="thresholdslidermarks"  v-model="thresholder.threshold" />
                <span class="badge badge-secondary">进度条</span>
                <a-slider  :tipFormatter="formatter" :marks="slidermarks"  v-model="innershowInterval" />
                <a-button shape="circle" icon="play-circle" size="small" @click="restarttodraw"/>
            </a-col>
        </a-row>
        <!-- </transition> -->
        <!-- <transition name="fade"> -->
        <a-progress v-if="showprogress" :format="progressformat" strokeLinecap="square" :percent="percent" />
        <!-- </transition> -->
        <!-- <transition name="fade" > -->
        <div v-show="showclockbutton" v-if="showprogress" :style="{ width: '150px',height: '192px',position: 'absolute',bottom:0,right:'0px', border: '0px solid #d9d9d9', borderRadius: '2px' }">
            <a-calendar @select="onSelect" :fullscreen="false" @panelChange="onPanelChange" v-model="showdayLocal" mode="month"/>
        </div>
        <!-- </transition> -->
    </div>
</template>
<script lang="ts">
import TimeBotton from "@/components/bar/TimeBotton.vue";
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Prop, Watch, Emit, Model } from "vue-property-decorator";
import { PostParams,Dimension, PositionClass } from "@/types/index.ts";
import moment,{ DurationInputObject, Moment } from "moment";
import Antd from "ant-design-vue";
import 'moment/locale/zh-cn';
import { GeoLimiter } from '@/components/options/GeoOptions';
moment.locale('zh-cn');
// (window as any).moment = moment;
@Component({
    components: {
        AProgress: Antd.Progress,
        ASlider: Antd.Slider,
        ARow: Antd.Row,
        ACol: Antd.Col,
        AButton: Antd.Button,
        ACalendar: Antd.Calendar,
        TimeBotton,
        ACheckbox: Antd.checkbox,
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
            // console.log("showprogress",(this as any).percent);
            // return (this as any).appendtimelist!==undefined?(this as any).percent===100?false:true:false;
            return (this as any).appendtimelist!==undefined && (this as any).positionClass===PositionClass.Center?true:false;
        },
        titlesize(): string {
            return (this as any).positionClass === PositionClass.Center?"titlelarge":"titlemiddle";
        }

    },
})
export default class LittleBar extends Vue {
    @Prop({default: ""}) public titlename!: string;
    @Prop() public appendtimelist!: number[];
    @Prop() public date!: Moment;
    @Prop() public positionClass!: PositionClass;
    @Model("changepostparams") public postparms!: PostParams;
    private showdayLocal: Moment = moment();
    private showclockbutton: boolean = false; // 显示日期小图标
    private showrange = false;// 点击日期小图标显示选择日期框
    private activeitem = "";
    private highlightbarclass = "";
    private totaltimelen = 0;
    private show = true;
    private data: PostParams = this.postparms;
    private showdownicon: string = "";
    private innershowInterval = 0;
    private thresholder: GeoLimiter = {threshold:0,negative:true,positive:true}; // 阈值为0的时候为不过滤
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
    private thresholdslidermarks = {
        0: {
          style: {
            color: 'white',
          },
          label: "0",
        },
        50: {
          style: {
            color: 'white',
          },
          label: "5",
        },
        100: {
          style: {
            color: 'white',
          },
          label: "10",
        }
    };
    private rangeselectlist = [
        [{day:" Last 2 days ",value: [2,'d']},{day:"Last 7 days ",value: [7,'d']},{day:"Last 30 days",value: [30,'d']},{day:"Last 90 days",value: [90,'d']},{day:"Last 6 months",value: [6,'M']},{day:"Last 1 year",value: [1,'y']},{day:"Last 2 years",value: [2,'y']},{day:"Last 5 years",value: [5,'y']},],
        [{day:"Yesterday ",value: [1,'d']},{day:"Day before yesterday",value: [2,'d']},{day:"This day last week ",value: [1,'w']},{day:"last month ",value: [1,'M']},{day:"last year ",value: [1,'y']},],
        [{day:"Today ",value: [0,'d'],type: "this"},{day:"This week ",value: [1,'w'],type: "this"},{day:"This month ",value: [1,'M'],type: "this"},{day:"This year ",value: [1,'y'],type: "this"}],
    ];
    get dayrange(): string {
        if (this.data.scale * 1 === 86400) {
            return this.data.starttime.split(" ")[0] + " to " + this.data.endtime.split(" ")[0];
        } else if (this.data.scale * 1 === 3600) {
            return this.data.starttime + " to " + this.data.endtime;
        } else {
            return this.data.starttime + " to " + this.data.endtime;
        }
    }
    @Watch("date")
    public setShowdayLocal(newval: any) {
        this.showdayLocal = newval;
    }
    @Watch("innershowInterval")
    public setInterval(newval: any,oldval: any) {
        // console.log("newval:",newval,"oldval：",oldval);
        // tslint:disable-next-line:radix
        this.data.showinterval = parseInt(newval / 100 * 5000+"");
    }
    @Watch("thresholder",{deep: true})
    public setThreshold(newval: GeoLimiter) {
        // console.log("newval:",newval,"oldval：",oldval);
        // parseFloat(newval / 10 +"");
        const data = JSON.parse(JSON.stringify(newval));
        data.threshold = parseFloat(newval.threshold / 10 + "");
        this.data.thresholder = data;
    }
    @Emit()
    public changeShow(showv: boolean | Event) {
        this.showrange = showv instanceof Event ? !this.showrange : showv;
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
        this.$emit("toggledrag",show);
    }
    @Emit()
    public licktimeselectrange(item: {value: [any,string],day: string,type: string}) {
        if (item.type === "this") {
            this.data.starttime = moment().startOf(item.value[1] as any).format("YYYY-MM-DD HH:mm:ss");
            this.data.endtime = moment().format("YYYY-MM-DD HH:mm:ss");
        } else {
            this.data.starttime = moment().subtract(item.value[0],item.value[1]).startOf("day").format("YYYY-MM-DD HH:mm:ss");
            this.data.endtime = moment().format("YYYY-MM-DD HH:mm:ss");
        }
        // moment().subtract()
        this.activeitem = item.day;
    }
    private mounted() {
        // console.log("111111","加载");
        const start = moment(this.postparms.starttime);
        const end = moment(this.postparms.endtime);
        const {scale} = this.postparms;
        this.totaltimelen = end.diff(start,scale===3600?"h":scale===86400?"d":"d");
        // console.log("计算日期",this.totaltimelen);
        this.innershowInterval = this.postparms.showinterval / 1000 * 20 ;
        this.showdayLocal = this.date;
    }
    private destroyed() {
        // console.log((this as any).some);
    }
    @Emit()
    private queryInitWebSocket(value: any) {
        // this.$emit("changepostparams", this.data);
        this.$emit("redraw");
        this.show = true;
    }
    private formatter(value: any) {
        if (value/20 < 1) {
            return `${value/20 * 1000} ms`;
        } else {
            return `${value/20}s`;
        }
    }
    private thresholdformatter(value: any) {
        // if (value/20 < 1) {
        //     return `${value/20 * 1000}`;
        // } else {
        //     return `${value/20}s`;
        // }
        return value / 10;
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
        // console.log("talktofather");
        this.$emit("changepostparams", this.data);
    }
    // tslint:disable-next-line:no-empty
    private donothing() {
        console.log("1111111111");
    }
    @Emit()
    private showdownincon(show: boolean) {
        // console.log("sssssssssssss");
        // this.showdownicon = show?"fa-sort-down":"";
        // this.showdownicon = show?"fa-clock-o":"";
        if (!this.showrange) {
            this.showclockbutton = this.positionClass === PositionClass.Center?show:false;
        }
    }
    private restarttodraw() {
        this.$emit("restarttodraw");
    }

    private onPanelChange(value: any, mode: any) {
    //   console.log(value, mode);
    }

    private onSelect(date: Moment) {
        const querydate = moment(date,"YYYY-MM-DD").startOf("day").valueOf();
        this.$emit("querydate",querydate,true);
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
.chartheader{
    // box-shadow: 0 0 30px 0 #000;
    text-align: left;
    position: relative;
    z-index: 300;
    height: 100%;
    background: transparent;
}
.chartrange {
    float: right;
    position: relative;
}
.icondown{
    left: 50%;
    position: relative;
    cursor: pointer;
}
.fa-clock-o {
    left: 50%;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    color: white;
}
.timepicker-relative-section{
    min-height: 270px;
    
}
.options1{
    position: relative;
    width: 100%;
    z-index: 300;
}
.littlebar{
    width: 100%;
    position: absolute;
}
.container-fluid,.row{
    padding: 0px;
    margin: 0px;
}
.barBody{
    position: relative;
    height:calc(100% - 24px);
}
.anchorBL{
    display:none;
}
.charttitletext{
    // float: left;
    position: relative;
    left:50%;
    margin-left: -10%;
    width: 20%;
    text-align: center;
    // margin-left: 25%;
}
.middlebutton{
    position: absolute;
}
.ant-progress{
    position: absolute;
    top: 0;
    // left: 10%;
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
.button {
    // position: absolute;
    z-index: 500;
    left: 0;
    height: 100%;
    //   background: transparent;
    //   border: 0px transparent;
    color: #8e8e8e;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    background-color: #2a2a2c;
    background-image: linear-gradient(180deg,#262628,#303032);
    background-repeat: repeat-x;
    border-color: #262628;
    // padding: 6px 11px;
    line-height: 16px;
    border: 1px solid #2f2f32;
    margin-right: 3px;
    white-space: nowrap;
    border-radius: 0.25rem;
    padding:0.1em 0.2em;
}

.titlelarge{
    font-size: large;
}
.titlemiddle {
    font-size: medium;
}
</style>

