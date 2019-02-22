<template>
    <div class="container-fluid  chartheader" @mouseenter="showcontroler(true,$event)" @mouseleave="showcontroler(false,$event)">
        <!-- @mouseenter="showdownincon(true)" @mouseleave="showdownincon(false)" -->
        <template v-if="showtopbar">
            <slot name="page" v-show="showtopbar"></slot>
        </template>
        <div class="littlebar" >
            <div :style="{position:'relative'}" v-show="showtopbar">
                <!-- <div class="fa icondown middlebutton" :class="showdownicon"></div> -->
                <div class="container2 chartrange" :class="showid === 0 && showrange?'active':''" style="{color:white}" @click="changeShow($event,0)"   @mouseenter="highlightbar(true)" @mouseleave="highlightbar(false)">
                    <!-- <i class="fa fa-clock-o"></i> -->
                    <i class="material-icons small" >access_time</i>
                    <div class="container2 mdl-button" v-html="dayrange"></div>
                </div>
                <!-- <time-botton :class="middlebutton"></time-botton> -->
                <!-- <div class="charttitletime" v-show="false"> {{data.starttime + "" + data.endtime }} </div> -->
                <!-- <div class="button chartrange" :class="showid === 1 && showrange?'active':''" @click="changeShow($event,1)" ><i class="fa fa-facebook" v-text="`  ${showthresholdrange[0]} ${showthresholdrange[1]}`"></i></div> -->
                <!-- <div class="button chartrange" :class="showid === 2 && showrange?'active':''" @click="changeShow($event,2)" v-text="TimeProcess"></div> -->
                <!-- <div class="container2  chartrange " :class="showid === 3 && showrange?'active':''" @click="downloadchart(positionClass)">
                    <a-icon class="container2 mdl-button" type="download" />
                </div> -->
            </div>
            <div class="row options1 table-dark" :class="showid=== 1 || showid === 2?'hiddenbackground':''" v-show="showrange" @click.stop="donothing" >
                <template v-if="showid === 0 && showtopbar">
                    <form class="col-4" >
                        <label class="big">用户选项</label>
                        <label class="small">From:</label>
                        <div class="input-group input-group-sm" >
                            <input class="form-control" :placeholder="data.starttime" v-model="data.starttime" type="text" />
                            <div class="input-group-addon">
                                <!-- <button class="btn btn-outline-secondary btn-sm" type="button"><i class="fa fa-calendar"></i></button> -->
                                <i class="material-icons">date_range</i>
                            </div>
                        </div>
                        <label class="small">To:</label>
                        <div class="input-group input-group-sm" @click.stop="()=>{}">
                            <input class="form-control" :placeholder="data.endtime" v-model="data.endtime" type="text"/>
                            <div class="input-group-addon">
                                <!-- <button class="btn btn-outline-secondary btn-sm" type="button"><i class="fa fa-calendar"></i></button> -->
                                <i class="material-icons">date_range</i>
                            </div>
                        </div>
                        <label class="small" v-show="ShowScale">scale:</label>
                        <div class="input-group input-group-sm" @click.stop="()=>{}" v-show="ShowScale">
                            <!-- <select class="form-control" v-model="data.scale">
                                    <option label="1h" value="3600">1h</option>
                                    <option label="1d" value="86400" selected="true">1d</option>
                                </select>
                                
                            <div class="input-group-addon">
                                <button class="btn btn-secondary btn-sm" type="submit" @click.prevent="queryInitWebSocket">查询</button>
                            </div> -->
                            <a-radio-group v-model="data.scale">
                                <a-radio :value="900" :style="{color: 'white'}">15m</a-radio>
                                <a-radio :value="3600" :style="{color: 'white'}">1h</a-radio>
                                <a-radio :value="86400" :style="{color: 'white'}" v-show="ShowScaleDay">1d</a-radio>
                            </a-radio-group>
                        </div>
                        <a-row  v-show="ShowFilter">
                            <a-col :span="24">
                                <!-- <span class="badge badge-secondary">限制</span> -->
                                <label class="small">filter:</label>
                                <a-slider range :step="5"  :tipFormatter="thresholdformatter" :marks="thresholdslidermarks"  v-model="thresholder.range" />
                            </a-col>
                        </a-row>
                        <!-- <div class="input-group input-group-sm" > -->
                            <div class="input-group-addon middlebutton">
                                <button class="btn btn-secondary btn-sm" type="submit" @click.stop.prevent="queryInitWebSocket">查询</button>
                            </div>
                        <!-- </div> -->
                    </form>
                    <div class="col-6 timepicker-relative-section">
                        <label class="big">时段范围</label>
                        <div class="card-group">
                            <ul v-for="(data,index) in rangeselectlist" :key="index" class="card list-group list-group-flush">
                                <li v-for="(item,index) in data" :key="index" class="list-group-item h6" :class="item.day===activeitem?'active':''" @click="licktimeselectrange(item)">{{item.day}}</li>
                            </ul>
                        </div>
                        <!-- <div class="download" :class="showid === 3 && showrange?'active':''" @click="downloadchart(positionClass)">
                            <a-icon class="container2 mdl-button" type="download" />
                        </div> -->
                    </div>
                    <div class="col-2">
                        <label class="big">其他选项</label>
                        <!-- <label class="small" v-show="showPageSize">Pagesize:</label> -->
                        <!-- <div class="input-group input-group-sm" v-show="showPageSize" >
                            <a-select defaultValue="20">
                                <a-select-option value="10"  @mouseenter="enterPageSize">10</a-select-option>
                                <a-select-option value="20"  @mouseenter="enterPageSize">20</a-select-option>
                            </a-select>
                        </div> -->
                        <a-row  v-show="showPageSize">
                                <a-col :span="24">
                                    <!-- <span class="badge badge-secondary">限制</span> -->
                                    <label class="small" >Pagesize:</label>
                                    <a-slider :step="20"  :tipFormatter="topsizeformatter" :marks="topsizeslidermarks"  v-model="littleBarDataPool.pagesize" />
                                </a-col>
                            </a-row>
                        <a-row  v-show="ShowTopSize">
                            <a-col :span="24">
                                <!-- <span class="badge badge-secondary">限制</span> -->
                                <label class="small">topsize:</label>
                                <a-slider :step="10"  :tipFormatter="topsizeformatter" :marks="topsizeslidermarks"  v-model="postparms.topsize" />
                            </a-col>
                        </a-row>
                        <a-row  :class="showid === 3 && showrange?'active':''">
                            <a-col :span="24">
                                <label class="small">download:</label>
                                <div   @click="downloadchart(positionClass)" class="container2 mdl-button">
                                    <!-- <a-icon class="container2 mdl-button" type="download" /> -->
                                    <i class="material-icons">file_download</i>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                    
                </template>
                <!-- <template v-else-if="showid === 1">
                    <a-row v-if="showcontroller && showtopbar" class="siberbar" >
                        <a-col :span="24">
                            <span class="badge badge-secondary">限制</span>
                            <a-slider range :step="5"  :tipFormatter="thresholdformatter" :marks="thresholdslidermarks"  v-model="thresholder.range" />
                        </a-col>
                    </a-row>
                </template> -->
                <!-- <template v-else-if="showid === 2">
                    <a-row v-if="showcontroller  && showtopbar " class="siberbar">
                        <a-col :span="24">
                            <span class="badge badge-secondary">播速</span>
                            <a-slider  :tipFormatter="formatter" :marks="slidermarks"  v-model="innershowInterval" />
                            <a-button shape="circle" icon="play-circle" size="small" @click="restarttodraw"/>
                        </a-col>
                    </a-row>
                </template> -->
            </div>
        </div>
        <div class="charttitletext" :class="titlesize"> {{titlename }} </div>
        <div class="barBody">
            <slot name="chart">无数据</slot>
        </div>

        <a-progress v-show="showloader" :format="progressformat" strokeLinecap="square" :percent="percent" />
        <!--  -->
        <div v-show="showtopbar" v-if="showcalendar"  :style="{position: 'absolute',bottom:0,right: '180px', border: '0px solid #d9d9d9', borderRadius: '2px' }">
            
            <!-- <div>
                <span class="badge badge-secondary">speed</span>
            </div> -->
            <div class="speedcontainer timeline-controls">
                <!-- :class="play?'rotate360':''" 这个是用来做旋转用的-->
                <div class="mdl-button mdl-js-button mdl-button--icon ui-resetButton"  @click.prevent.stop="restarttodraw" >
                    <i class="material-icons">replay</i>
                </div>
                <div class="mdl-button mdl-js-button mdl-button--icon ui-stepButton" @click.prevent.stop="preoneday">
                    <!-- <i class="fa fa-step-backward"></i> -->
                    <i class="material-icons">skip_previous</i>
                </div>
                <div class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored ui-playButton" @click.prevent.stop="pausecontinue">
                    <!-- <i class="fa" :class="play?'fa-pause-circle-o rotate360':'fa-play-circle-o'"></i>  -->
                    <i class="material-icons" v-text="ifplay?'pause':'play_arrow'"></i>
                </div>
                <div class="mdl-button mdl-js-button mdl-button--icon ui-stepButton " @click.prevent.stop="postoneday">
                    <!-- <i class="fa fa-step-forward"></i> -->
                    <i class="material-icons">skip_next</i>
                </div>
                <div class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect flexcontentcenter" @click.prevent.stop="changespeed" >
                    <span v-text="speedstring"></span>
                    <!-- <i class="fa fa-step-forward"></i> -->
                    <!-- <input class="btn" type="button" v-model="innershowInterval"> -->
                </div>
                
                 <!-- <a-slider  :tipFormatter="formatter" :marks="slidermarks"  v-model="innershowInterval" /> -->
            </div>
        </div>
        
        <div v-show="showtopbar" v-if="showcalendar" :style="{ width: '180px',height: '207px',position: 'absolute',bottom:0,right:0, border: '0px solid #d9d9d9', borderRadius: '2px' }">
            <a-calendar :validRange="validRange" @select="onSelect" :fullscreen="false" @panelChange="onPanelChange" v-model="showdayLocal" mode="month" >
                <template slot="dateFullCellRender" slot-scope="value">
                    <!-- <span style="color:white" :class="showCalendar(value)?'showpointer':'shownomarl'" v-if="showCalendar(value)">{{getDayNum(value)}}</span> -->
                    <span :class="showCalendar(value)?'showpointer':'shownomarl'">{{getDayNum(value)}}</span>
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
import TimeSlicing from '@/util/TimeSlicing.ts';
import TitleName from '@/types/elecchartname.ts';
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
        ARadio: Antd.Radio,
        ASelect: Antd.Select,
        ASelectOption: Antd.Select.Option
    },
    computed:{
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
    @Prop({default: ""}) public titlename!: TitleName;
    @Prop() public appendtimelist!: number[];
    @Prop({default: false}) public showPageSize!: boolean;
    @Prop() public date!: Moment;
    @Prop() public positionClass!: PositionClass;
    @Prop({default: false}) public play!: boolean;
    @Model("changepostparams") public postparms!: PostParams;
    private showdayLocal: Moment = moment();
    private showclockbutton: boolean = false; // 显示日期小图标
    private showrange2 = false;// 点击日期小图标显示选择日期框
    private activeitem = "";
    private highlightbarclass = "";
    private totaltimelen = 0;
    private show = true;
    private data: PostParams = {} as any;
    private showdownicon: string = "";
    private showtopbar2: boolean = false;
    private innershowInterval = 0;
    private showid2 = 0;
    private timeslice = new TimeSlicing(this.timeslicing,500);
    private thresholder: ThresholdLimiter = {} as any; // 阈值为0的时候为不过滤
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
    private littleBarDataPool = {
        pagesize: 20,
    };
    get percent() {
            // tslint:disable-next-line:radix
            console.log("(this as any).appendtimelist",parseInt(((this as any).appendtimelist?(this as any).appendtimelist.length:0)),(this as any).totaltimelen);
            // return 75;
            // tslint:disable-next-line:radix
            return parseFloat((this.appendtimelist?this.appendtimelist.length:0)/this.totaltimelen+"") * 100;
            // tslint:disable-next-line:radix
            // return parseInt(0.5 +"") * 100;
    }
    get showrange() {
        return this.showrange2;
    }
    get showid() {
        return this.showid2;
    }
    get showtopbar(): boolean {
        return this.showtopbar2;
    }
    get validRange(): [Moment,Moment] {
        return [moment(this.postparms.starttime),moment(this.postparms.endtime)];
    }
    get showthresholdrange(): [number,number] {
        const left = this.thresholder.range[0] / 5 - 10;
        const right = this.thresholder.range[1] / 5 - 10;
        return [left,right];
    }
    get ifplay(): boolean {
        return this.play;
    }
    get ShowScaleDay(): boolean {
        if (this.titlename === TitleName.Box) {
            return false;
        } else {
            return true;
        }
    }
    get ShowScale(): boolean {
        let show: boolean = true;
        switch (this.titlename) {
            case TitleName.Trend:
                show = false;
                break;
            case TitleName.Top:
                show = false;
                break;
            case TitleName.TimeLine:
                show = false;
                break;
            default:
                break;
        }
        return show;
    }
    get ShowFilter(): boolean {
        let show: boolean = true;
        switch (this.titlename) {
            case TitleName.Trend:
                show = false;
                break;
            case TitleName.Top:
                show = false;
                break;
            case TitleName.Box:
                show = false;
                break;
            case TitleName.HeatMap:
                show = false;
                break;
            case TitleName.Scatter:
                show = false;
                break;
            default:
                break;
        }
        return show;
    }
    get ShowTopSize(): boolean {
        let show: boolean = false;
        switch (this.titlename) {
            case TitleName.Top:
                show = true;
                break;
            default:
                break;
        }
        return show;
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
    private topsizeslidermarks = {
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
          label: "50",
        },
        100: {
          style: {
            color: 'white',
          },
          label: "100",
        }
    };
    private rangeselectlist = [
        [{day:" Last 2 days ",value: [2,'d']},{day:"Last 7 days ",value: [7,'d']},{day:"Last 30 days",value: [30,'d']},{day:"Last 90 days",value: [90,'d']},{day:"Last 6 months",value: [6,'M']},{day:"Last 1 year",value: [1,'y']},{day:"Last 2 years",value: [2,'y']},{day:"Last 5 years",value: [5,'y']},],
        [{day:"Yesterday ",value: [1,'d']},{day:"Day before yesterday",value: [2,'d']},{day:"This day last week ",value: [1,'w']},{day:"last month ",value: [1,'M']},{day:"last year ",value: [1,'y']},],
        [{day:"Today ",value: [0,'d'],type: "this"},{day:"This week ",value: [1,'w'],type: "this"},{day:"This month ",value: [1,'M'],type: "this"},{day:"This year ",value: [1,'y'],type: "this"}],
    ];
    get dayrange(): string {
        if (this.data.scale * 1 === 86400) {
            return "  " + this.data.starttime.split(" ")[0] + " to " + this.data.endtime.split(" ")[0];
        } else if (this.data.scale * 1 === 3600) {
            return "  " + this.data.starttime + " to " + this.data.endtime;
        } else {
            return "  " + this.data.starttime + " to " + this.data.endtime;
        }
    }
    get speedstring(): string {
        // tslint:disable-next-line:radix
        return parseFloat(1000 / (this.innershowInterval / 100 * 5000) + "") + "X";
    }
    @Watch("date")
    public setShowdayLocal(newval: any) {
        this.showdayLocal = newval;
    }
    @Watch("innershowInterval")
    public setInterval(newval: any,oldval: any) {
        // console.log("newval:",newval,"oldval：",oldval);
        // tslint:disable-next-line:radix
        this.data.showinterval = parseInt(newval / 100 * 5000 + "");
    }
    @Watch("thresholder",{deep: true})
    public setThreshold(newval: ThresholdLimiter) {
        // console.log("newval:",newval);
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
        // this.timeslice.execute();
    }
    @Emit()
    public changeShow(showv: boolean | Event,ind: number) {
        if(this.showid === ind) {
            this.showrange2 = showv instanceof Event ? !this.showrange : showv;
            // console.log("一样");
        } else {
            this.showid2 = ind;
            this.showrange2 = true;
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
    private timeslicing() {
        this.onSelect(this.showdayLocal);
    }
    private created() {
        this.data = this.postparms;
        // console.log("this",this.positionClass,this.positionClass);
        this.thresholder = {threshold:0,negative:true,positive:true,range: [(this.postparms.thresholder.range[0] + 10) * 5,(this.postparms.thresholder.range[1] + 10) * 5]};
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
        PubSub.subscribe("showCenterBar",(mesg: any, nothing: any)=> {
            if(this.positionClass === PositionClass.Center) {
                // console.log("111111111111111");
                setTimeout(()=>this.showcontroler(true,nothing),100);
            } else {
                // console.log("2222222222222");
                setTimeout(()=>this.showcontroler(false,nothing),0);
            }
        });
        this.littleBarDataPool.pagesize = this.postparms.pagesize as any;
    }
    @Watch("littleBarDataPool.pagesize")
    private validationPageSize(newvalue: number,oldvalue: number) {
        const {pagesize,pageid,entitynums} = this.postparms;
        // console.log("newvalue",newvalue,pagesize,pageid);
        if(newvalue === 0) {
            setTimeout(()=> {
                if(oldvalue === 0) {
                    oldvalue = 20;
                }
                this.littleBarDataPool.pagesize = oldvalue;
            },500);
            this.$message.error("不能为0");
        }
        if(( (pageid as any) - 1) * newvalue > entitynums) {
            if(( (pageid as any) - 1) * oldvalue > entitynums) {
                const value = entitynums /  (pageid as any) - 1;
                // tslint:disable-next-line:no-bitwise
                oldvalue = value | 0;
            }
            setTimeout(()=> {
                this.littleBarDataPool.pagesize = oldvalue;
            },500);
            this.$message.error("当前页超标");
        }
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
        this.postparms.pagesize = this.littleBarDataPool.pagesize;
        this.$emit("initWebSocket");
        this.showrange2 = false;
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
    private topsizeformatter(value: any) {
        return value;
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
        // console.log("1111111111");
    }
    @Emit()
    private showcontroler(show: boolean,evn: any) {
        // console.log("sssssssssssss",evn);
        // this.showdownicon = show?"fa-sort-down":"";
        // this.showdownicon = show?"fa-clock-o":"";
        // console.log("leave",evn);
        if (this.positionClass === PositionClass.Center) {
            this.showtopbar2 = show ;// this.positionClass === PositionClass.Center?show:false;
        }
        if (show === false) {
            this.showtopbar2 = false;
        }
        // this.showrange = show;
    }
    @Watch("positionClass")
    private dopostionClassChange(newvalue: string) {
        if(newvalue !== PositionClass.Center) {
            this.showrange2 = false;
            this.showclockbutton = false;
        } else {
            this.showclockbutton = true;
        }
    }
    @Emit()
    private pausecontinue() {
        if(this.play) {
            // this.play = false;
            this.$emit("pause",true);
            // console.log("暂停");
        } else {
            // this.play = true;
            this.$emit("pause",false);
            // console.log("继续");
        }
    }
    @Emit()
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
        // console.log("now:",now,";preday:",preday);
        if(preday.valueOf()< moment(this.postparms.starttime).startOf("day").valueOf()) {
            this.$message.warning("请重新选择开始时间",1);
        } else {
            this.onSelect(preday);
            this.showdayLocal = preday;
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
    @Emit()
    private changespeed() {
        if (this.innershowInterval< 4 ) {
            this.innershowInterval = 40 ;
        } else {
            this.innershowInterval /= 2;
        }
    }
    /**
     * 获取日期日期时间
     */
    @Emit()
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
    @Emit()
    private enterPageSize(ev: any) {
        // console.log("ev",ev);
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
    // left: 50%;
    // position: relative;
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
.mdl-button2 {
    // position: absolute;
    z-index: 500;
    left: 0;
    height: 100%;
    //   background: transparent;
    //   border: 0px transparent;
    color:white;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    // background-color: #2a2a2c;
    // background-image: linear-gradient(180deg,#262628,#303032);
    background-repeat: repeat-x;
    border-color: #262628;
    // padding: 6px 11px;
    line-height: 16px;
    border: 0px solid #2f2f32;
    // margin-right: 3px;
    // white-space: nowrap;
    border-radius: 0.25rem;
    padding:0.1em 0.2em;
    // &:hover{
    //     cursor: pointer;
    // }
}
.container2 {
    // position: absolute;
    z-index: 500;
    left: 0;
    height: 100%;
    //   background: transparent;
    //   border: 0px transparent;
    color:white;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    // background-color: #2a2a2c;
    // background-image: linear-gradient(180deg,#262628,#303032);
    background-repeat: repeat-x;
    border-color: #262628;
    // padding: 6px 11px;
    line-height: 16px;
    border: 0px solid #2f2f32;
    // margin-right: 3px;
    // white-space: nowrap;
    border-radius: 0.25rem;
    padding:0.1em 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    // &:hover{
    //     cursor: pointer;
    // }
}
.titlelarge{
    // font-size: large;
    font-size: 1.25rem;
    white-space: nowrap;
}
.titlemiddle {
    // font-size: medium;
    font-size: 1.16rem;
    white-space: nowrap;
}
.showpointer {
    color:white;
}
.showpointer:hover{
    cursor: pointer;
    text-decoration: underline;
    color:white;
}
.shownomarl{
    color: gray;
}
.shownomarl:hover{
    cursor: none; 
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
.table-dark {
    background-color: rgba(0,0,0,0.6)
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
.speedcontainer {
    display: flex;
    justify-content: flex-start;
}
.rotate360 {
    animation: rotate1 1s infinite;
    @at-root {
        @keyframes rotate1 {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(-360deg);
            } 
        }
    }
}
.timeline-controls {
    display: flex;
    align-items: center;
    margin-right: 20px;
    // width: 180px;
}
.mdl-js-ripple-effect {
    color: white;
    font-size: 15px;
}
form {
    display: flex;
    flex-direction: column;
}
form .middlebutton {
    align-self: center;
}
.flexcontentcenter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
.download {
    bottom: 0px;
    position: absolute;
    right: 0px;
}

</style>

