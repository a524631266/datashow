<template>
    <div class="container-fluid  chartheader" @mouseenter="showcontroler(true)" @mouseleave="showcontroler(false)">
        <!-- @mouseenter="showdownincon(true)" @mouseleave="showdownincon(false)" -->
        <div class="littlebar" >
            <div :style="{position:'relative'}" v-show="showtopbar">
                <!-- <div class="fa icondown middlebutton" :class="showdownicon"></div> -->
                <div class="fa button fa-clock-o chartrange" :class="showid === 0 && showrange?'active':''" style="{color:white}" @click="changeShow($event,0)" v-html="dayrange"  @mouseenter="highlightbar(true)" @mouseleave="highlightbar(false)"></div>
                <!-- <time-botton :class="middlebutton"></time-botton> -->
                <!-- <div class="charttitletime" v-show="false"> {{data.starttime + "" + data.endtime }} </div> -->
                <div class="button chartrange" :class="showid === 1 && showrange?'active':''" @click="changeShow($event,1)"><i class="fa fa-underline"></i>{{`${thresholder.range[0]} - ${thresholder.range[1]}`}}</div>
                <div class="button chartrange" :class="showid === 2 && showrange?'active':''" @click="changeShow($event,2)">{{TimeProcess}}</div>
                <div class="button chartrange" :class="showid === 3 && showrange?'active':''" @click="downloadchart(positionClass)"><a-icon type="download" /></div>
            </div>
            <div class="row options1 table-dark" :class="showid=== 1 || showid === 2?'hiddenbackground':''" v-show="showrange" @click.stop="donothing" >
                <template v-if="showid === 0 && showtopbar">
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
                            <!-- <select class="form-control" v-model="data.scale">
                                    <option label="1h" value="3600">1h</option>
                                    <option label="1d" value="86400" selected="true">1d</option>
                                </select>
                                
                            <div class="input-group-addon">
                                <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="queryInitWebSocket">查询</button>
                            </div> -->
                            <a-radio-group v-model="data.scale">
                                <a-radio :value="3600" :style="{color: 'white'}">1h</a-radio>
                                <a-radio :value="86400" :style="{color: 'white'}">1d</a-radio>
                            </a-radio-group>
                        </div>
                        <div class="input-group input-group-sm" >
                            <div class="input-group-addon"  style="position: absolute;right:0">
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
                </template>
                <template v-else-if="showid === 1">
                    <a-row v-if="showcontroller && showtopbar" class="siberbar" >
                        <a-col :span="24">
                            <span class="badge badge-secondary">限制</span>
                            <a-slider range :step="5"  :tipFormatter="thresholdformatter" :marks="thresholdslidermarks"  v-model="thresholder.range" />
                        </a-col>
                    </a-row>
                </template>
                <template v-else-if="showid === 2">
                    <a-row v-if="showcontroller  && showtopbar " class="siberbar">
                        <a-col :span="24">
                            <span class="badge badge-secondary">播速</span>
                            <a-slider  :tipFormatter="formatter" :marks="slidermarks"  v-model="innershowInterval" />
                            <a-button shape="circle" icon="play-circle" size="small" @click="restarttodraw"/>
                        </a-col>
                    </a-row>
                </template>
            </div>
        </div>
        <div class="charttitletext" :class="titlesize"> {{titlename }} </div>
        <div class="barBody">
            <slot name="chart">无数据</slot>
        </div>

        <a-progress v-if="showloader" :format="progressformat" strokeLinecap="square" :percent="percent" />
        <!--  -->
        <div v-show="showtopbar" v-if="showcalendar" :style="{ width: '180px',height: '230px',position: 'absolute',bottom:0,right:'0px', border: '0px solid #d9d9d9', borderRadius: '2px' }">
            <a-icon type="left" class="floatleft" @click="preoneday"></a-icon>
            <a-icon type="right" class="floatright" @click="postoneday"></a-icon>
            <a-calendar :validRange="validRange" @select="onSelect" :fullscreen="false" @panelChange="onPanelChange" v-model="showdayLocal" mode="month" >
                <template slot="dateFullCellRender" slot-scope="value">
                    <span style="color:white" class="showpointer" v-if="showCalendar(value)">{{getDayNum(value)}}</span>
                </template>
            </a-calendar>
        </div>

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
import { ThresholdLimiter } from '@/types';
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
        AIcon: Antd.Icon,
        ARadioGroup: Antd.Radio.Group,
        ARadio: Antd.Radio
    },
    computed:{
        percent(): number {
            // return 75;
            // tslint:disable-next-line:radix
            return parseInt(((this as any).appendtimelist?(this as any).appendtimelist.length:0)/(this as any).totaltimelen+"")*100;
            // tslint:disable-next-line:radix
            // return parseInt(0.5 +"") * 100;
        },
        showcontroller(): boolean {
            // console.log("showcontroller",(this as any).percent);
            // return (this as any).appendtimelist!==undefined?(this as any).percent===100?false:true:false;
            // 默认所有控件都显示
            return (this as any).appendtimelist!==undefined && (this as any).positionClass===PositionClass.Center?true:true;
        },
        showcalendar(): boolean {
            // console.log("showcontroller",(this as any).percent);
            // return (this as any).appendtimelist!==undefined?(this as any).percent===100?false:true:false;
            // 默认所有控件都显示
            return (this as any).appendtimelist!==undefined && (this as any).positionClass===PositionClass.Center?true:false;
        },
        showloader(): boolean {
            // console.log("showcontroller",(this as any).percent);
            // return (this as any).appendtimelist!==undefined?(this as any).percent===100?false:true:false;
            // 显示数据加载进图条 默认所有数据
            return (this as any).appendtimelist!==undefined && (this as any).positionClass===PositionClass.Center?true:false;
        },
        titlesize(): string {
            return (this as any).positionClass === PositionClass.Center?"titlelarge":"titlemiddle";
        },
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
    private showtopbar: boolean = false;
    private innershowInterval = 0;
    private showid = 0;
    private thresholder: ThresholdLimiter = {threshold:0,negative:true,positive:true,range: [(this.postparms.thresholder.range[0] + 10) * 5,(this.postparms.thresholder.range[1] + 10) * 5]}; // 阈值为0的时候为不过滤
    private slidermarks = {
        0: {
          style: {
            color: 'rgba(0,0,0)',
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
            color: 'rgba(0,0,0)',
          },
          label: "5s",
        }
    };
    get validRange(): [Moment,Moment] {
        return [moment(this.postparms.starttime),moment(this.postparms.endtime)];
    }
    private thresholdslidermarks = {
        0: {
          style: {
            color: 'white',
          },
          label: "-10",
        },
        50: {
          style: {
            color: 'white',
          },
          label: "0",
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
    public setThreshold(newval: ThresholdLimiter) {
        console.log("newval:",newval);
        // parseFloat(newval / 10 +"");
        const data = JSON.parse(JSON.stringify(newval));
        let [start,end] = newval.range;
        if(start > end ) {
            [start,end] = [end,start];
        }

        data.range[0] = parseFloat((start / 5 -10) + "");
        data.range[1] = parseFloat((end / 5 -10) + "");
        const initmarks = {
            0: {
            style: {
                color: 'white',
            },
            label: "-10",
            },
            50: {
            style: {
                color: 'white',
            },
            label: "0",
            },
            100: {
            style: {
                color: 'white',
            },
            label: "10",
            }
        };
        (initmarks as any)[start] = {
          style: {
            color: 'white',
          },
          label: data.range[0],
        };
        (initmarks as any)[end] = {
          style: {
            color: 'white',
          },
          label: data.range[1],
        };
        this.data.thresholder = data;
        this.thresholdslidermarks = initmarks;
    }
    @Emit()
    public changeShow(showv: boolean | Event,ind: number) {
        if(this.showid === ind) {
            this.showrange = showv instanceof Event ? !this.showrange : showv;
            // console.log("一样");
        } else {
            this.showid = ind;
            this.showrange = true;
            // console.log("不一样");
        }
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
        this.dopostionClassChange(this.positionClass);
    }
    private destroyed() {
        // console.log((this as any).some);
    }
    private getDayNum(date: string): string {
        return moment(date).format("D");
    }
    private showCalendar(date: string): boolean {
        return moment(this.postparms.starttime).startOf("day").valueOf()<=moment(date).valueOf() && moment(this.postparms.endtime).endOf("day").valueOf()>=moment(date).valueOf();
    }
    @Emit()
    private queryInitWebSocket(value: any) {
        // this.$emit("changepostparams", this.data);
        this.$emit("redraw");
        this.showrange = false;
    }
    private formatter(value: any) {
        if (value/20 < 1) {
            return `${value/20 * 1000} ms`;
        } else {
            return `${value/20}s`;
        }
    }
    get TimeProcess(): string {
        return this.formatter(this.innershowInterval);
    }
    private thresholdformatter(value: any) {
        // if (value/20 < 1) {
        //     return `${value/20 * 1000}`;
        // } else {
        //     return `${value/20}s`;
        // }
        return value / 5 - 10;
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
    private showcontroler(show: boolean) {
        // console.log("sssssssssssss");
        // this.showdownicon = show?"fa-sort-down":"";
        // this.showdownicon = show?"fa-clock-o":"";
        if (this.positionClass === PositionClass.Center) {
            this.showtopbar = show ;// this.positionClass === PositionClass.Center?show:false;
        }
        // this.showrange = show;
    }
    @Watch("positionClass")
    private dopostionClassChange(newvalue: string) {
        if(newvalue !== PositionClass.Center) {
            this.showrange = false;
            this.showclockbutton = false;
        } else {
            this.showclockbutton = true;
        }
    }
    private restarttodraw() {
        this.$emit("restarttodraw");
    }

    private onPanelChange(value: any, mode: any) {
    //   console.log(value, mode);
    }
    /**
     * preoneday
     */
    @Emit()
    private preoneday() {
        // this.showdayLocal = this.showdayLocal.subtract(1,'days');
        const now = this.showdayLocal.valueOf();
        const preday = moment(now).startOf("day").subtract(1,'day');
        console.log("now:",now,";preday:",preday);
        if(preday.valueOf()< moment(this.postparms.starttime).startOf("day").valueOf()) {
            this.$message.warning("请重新选择开始时间",1);
        } else {
            this.onSelect(preday);
        }
    }
    @Emit()
    private postoneday() {
        const now = this.showdayLocal.valueOf();
        const postday = moment(now).startOf("day").add(1,'day');
        if(postday.valueOf()> moment(this.postparms.endtime).endOf("day").valueOf()) {
            this.$message.warning("超过时间,请稍后",1);
        } else {
            this.onSelect(postday);
            this.showdayLocal = postday;
        }
    }
    /**
     * 获取日期日期时间
     */
    private onSelect(date: Moment) {
        const querydate = moment(date,"YYYY-MM-DD").startOf("day").valueOf();
        this.$emit("querydate",querydate,true);
    }
    // @Emit()
    // private showthreshold(value: number) {
    // }
    // @Emit()
    // private showprocess(value: number) {
    // }
    @Emit()
    private downloadchart(positionClass: string) {
        PubSub.publish("downloadchart",positionClass);
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
    color:white;
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
    bottom: 0;
    // left: 10%;
    width: 100px;
    // margin-left: -25%; 
    
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 10s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.siberbar {
    position: relative;
    width: 200px;
    top: 0;
    right: 0;
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
    color:white;
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
    &:hover{
        cursor: pointer;
    }
}

.titlelarge{
    font-size: large;
}
.titlemiddle {
    font-size: medium;
}
.showpointer:hover{
    cursor: pointer;
    text-decoration: underline;
    color:magenta;
}
.floatleft{
    float: left;
    top: 17px;
    left: 10px;
    position: absolute;
    &:hover {
        cursor: pointer;
    }
}
.floatright{
    float: right;
    top: 17px;
    right: 5px;
    position: absolute;
    &:hover {
        cursor: pointer;
    }
}
.hiddenbackground{
    background: rgba(0,0,0,0);
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
}
.hiddenbackground div{
    pointer-events: auto;
}
.active {
    color: yellow;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.4);
    // font-size: smaller;
}

</style>

