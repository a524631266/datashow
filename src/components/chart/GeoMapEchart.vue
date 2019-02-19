<template>
  <div :class="positionClass" :draggable="candraggable" @click.native="()=>{}" @dblclick.capture.stop="handledoubleclick">
       <LittleBar :play="play" @pause="pause" @toggledrag="toggledrag" @initWebSocket="start" :positionClass="positionClass" :date="date" @querydate="querydate" @restarttodraw="restarttodraw" :appendtimelist="appendtimelist" :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :urlparas="urlparas" :positionClass="positionClass" :id="id" :option="option" :chartLibrary="chartLibrary" @handleclick="handleclick" @updateData="way2UpdateData" slot="chart"/>
        </LittleBar>
        <!-- <div v-text="nowtime" style="position:absolute;bottom:0;right:0;">
        </div> -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model, Provide} from 'vue-property-decorator';
import LittleBar from "@/components/chart/LittleBar.vue";
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import { PositionClass , PostParams , ChartLibrary, MeasureName,ReturnGeoData,GeoTransData,ChartStorePool, ReturnGeoDataWsHead,ReturnGeoDataWsBody} from '@/types/index';
import { getGeoChinaProvinceOptionConfig, getGeoCityOptionConfig, GeoData, provinceMap,ProvinceMapData, Points, testPointsdata, cityMap,getCityMapIdByName, getProvinceMapIdByName, GeoTestData, GeoMapPictureFormat, GeoMapPictureFeatureFormat, GeoMapPictureFeaturePropertiesFormat} from '@/components/options/GeoOptions';
import echarts,{ ECharts, EChartOption, EChartsOptionConfig } from "echarts";
import { provincedata} from '@/components/options/ProvinceOptions.ts';
import Axios,{AxiosPromise} from "axios";
import PubSub from 'pubsub-js';
import { getDataPromise, PostPath, insertInitData, websocketurlhost } from "@/api/axiosProxy.ts";
import { updatestate } from "@/types/updateState.ts";
import moment,{ Moment } from "moment";
import { AxiosSourceManage } from "@/implements/AxiosSourceManage";
import { baseurl } from "@/util/getRootPath.ts";
import { ThresholdLimiter } from '@/types';
import TimerManager from "@/util/timeoutmanage.ts";
import {orginitconfig} from '@/config/initOptions.ts';
import TitleName from '@/types/elecchartname.ts';
// import 'echarts/map/js/province/xinjiang.js';
// const prev = process.env.NODE_ENV === "development"? "/xinjiang": "";
// const websocketurlhost = process.env.NODE_ENV === "development"? "192.168.10.63:8088": "192.168.10.63:8088";
// (window as any).TimerManager =TimerManager;
@Component({
    components: {
        LittleBar,
        BaseChartFactory,
    },
    computed: {
        nowtime() {
            const appendtimelist = (this as any).appendtimelist;
            const timeoutcount = (this as any).timeoutcount;
            const finaltime = appendtimelist[timeoutcount];
            return moment(finaltime).format("YYYY-MM-DD HH:mm:ss");
        }
    }
})
export default class GeoMapEchart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    // @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    // geoheaddata为第一帧数据，geoBodydata 为之后客户端传递过来的身体数据
    public geoBodydata: ChartStorePool<ReturnGeoDataWsBody> = {};
    public geoheaddata: ReturnGeoDataWsHead = {geomap:{}} as any;
    public option = {};
    public titlename = TitleName.Geo;
    private candraggable = false;
    // private intervalid: number[] = [];
    private timeoutid: number = 0;
    private chartLibrary = ChartLibrary.echart;
    private websocket!: WebSocket;
    private coord!: [number,number];
    private websockecount = 0;
    private redrawcount = 0;
    private timeoutcount = 0;// 当前循环的日期
    private appendtimelist: number[] = [];
    private startclearTimer = false;
    private timer = new TimerManager(this.setTimeoutdraw,this.postparms.showinterval);
    private play = false;
    // private timeindex: number = 0;// 当前循环的日期
    private mapnames: GeoMapPictureFeaturePropertiesFormat[]= [];
    private date: Moment = moment();
    private geolimiter: ThresholdLimiter = {
        threshold: 0,
        positive: true,
        negative: true,
        range: [this.postparms.thresholder.range[0],this.postparms.thresholder.range[1]],
    };
    private initreturndata = {
                        geomap:{
                            coord:[],
                            childlabel:[],
                            childid:[],
                            point:{
                                coord:[],
                                value:[],
                                starttime:0
                            }
                        }
                    };
    @Emit()
    private setOption(option: any) {
        this.option = option;
    }
    @Watch("appendtimelist")
    private setTimerMax(newvalue: number[]) {
        // console.log("appendtimelist",newvalue);
        if(newvalue.length !== 0) {
            this.timer.settTotallength(newvalue.length);
            this.timer.start();
            this.play = true;
        }
    }
    @Watch("postparms.showinterval")
    private setTimerInterval(newvalue: number) {
        this.timer.setintervaltime(newvalue);
    }
    // @Emit()
    // private level2post(count: number) { // 这选择省的时候
    //     const {entity,starttime,endtime,entitynums,scale,winlen,name} = this.postparms;
    //     const that = this;
    //     const postprivinceId = (provinceMap as any)[name];
    //     const promise = this.getMapSource(postprivinceId, name).then(
    //         (suc) => {
    //             this.postAndDealData(this.dealData).then(
    //                 (data: string |  GeoTransData) => {
    //                     if( typeof data !== 'string') {
    //                         // const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,data.points,name,true) as any;
    //                         const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,this.randomlastdata(100),name,true) as any;
    //                         count += 1;
    //                         option2.change = count % 2;
    //                         // const data2: Points[]= this.randomlastdata(100);
    //                         // option2.series[1].data = data2;
    //                         this.setOption(option2);
    //                         // return option2;
    //                     }
    //                 }
    //             );
    //         }
    //     );
    // }
    private getPostprivinceId() {
        const {entity,starttime,endtime,entitynums,scale,winlen,name,level} = this.postparms;
        if (level === 2) {
            return (provinceMap as any)[name];
        }
        if (level === 3) {
            return (cityMap as any)[name];
        }
        return name;
    }
    // @Emit()
    // private level3post(count: number) { // 市
    //     // const cityname = "杭州市";
    //     const {entity,starttime,endtime,entitynums,scale,winlen,name:cityname} = this.postparms;
    //     // const option2 = getGeoChinaProvinceOptionConfig() as any;
    //     const postCityId = (cityMap as any)[cityname];
    //     const promise2 = this.getMapSource(postCityId,cityname).then(
    //         (suc) => {
    //             this.postAndDealData(this.dealData).then(
    //                 (data: string |  GeoTransData) => {
    //                     if( typeof data !== 'string') {
    //                         // const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,data.points,name,true) as any;
    //                         const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,this.randomlastdata(100),cityname,true) as any;
    //                         count += 1;
    //                         option2.change = count % 2;
    //                         // const data2: Points[]= this.randomlastdata(100);
    //                         // option2.series[1].data = data2;
    //                         this.setOption(option2);
    //                         return option2;
    //                     }
    //                 }
    //             );
    //         }
    //     );
    //     // (option2 as any).change = false;
    //     console.log("geo",this.option);
    // }
    // @Emit()
    // private level4post(count: number) {
    //     // const option2 = getGeoChinaProvinceOptionConfig() as any;
    //     const postCityId = this.postparms.entity;
    //     const {entity,starttime,endtime,entitynums,scale,winlen,name: cityname,level} = this.postparms;
    //     const promise2 = Axios({
    //         method:"get",
    //         url:`${prev}/elecnum/geomap?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`
    //     }).then(
    //         (result) => {
    //             const data: GeoData = {
    //                 center:{JD: this.coord[0],WD: this.coord[1]},
    //                 cityname,
    //                 measurename: MeasureName.Elec,
    //                 points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
    //             };
    //             // const data: GeoData = result.data
    //             const option2 = getGeoCityOptionConfig(data,this.geolimiter) as any;
    //             count+=1;
    //             option2.change = count % 2;
    //             this.option = option2;
    //             console.log("正常 geo数据",option2,this.option);
    //         }
    //     ).catch(
    //         (result) => {
    //             const data: GeoData = {
    //                 center:{JD: 120.1709,WD: 30.29},
    //                 cityname,
    //                 measurename: MeasureName.Elec,
    //                 points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
    //             };
    //             // const data: GeoData = result.data
    //             const option2 = getGeoCityOptionConfig(data,this.geolimiter) as any;
    //             count+=1;
    //             option2.change = count % 2;
    //             this.option = option2;
    //             console.log("err geo数据",option2,this.option);
    //         }
    //     );
    // }
    /**
     * 重新复制name以及数据
     */
    private preInsertUnfindMapData(childlabel: string[]): ProvinceMapData[] {
        const result: ProvinceMapData[] = [];
        // console.log("this.mapnames",this.mapnames);
        this.mapnames.forEach(
            (item)=> {
                if(!childlabel.includes(item.name)) {
                    result.push({id: "",name: item.name,coord: item.cp,value: -1});
                }
            }
        );
        return result;
    }
    /**
     * 处理数据的函数，用来把source数据源变成target目标数据源的结构
     * 等级在小于4的情况下，也即是大于区的时候
     */
    private dealData(data: ReturnGeoData): GeoTransData {
        const result: GeoTransData = {
                    provinceArray:[],
                    points:[]
        };
        // 生成GeoTransData格式
        const res = data.geomap;
        const {childlabel,childid,point,coord: fathercoord} = res;
        if (childlabel !== undefined) {
            childlabel.forEach(
                (name: string,index: number) => {
                    result.provinceArray.push({id: childid[index]+"",name,coord: fathercoord[index],value:1});
                }
            );
        } else {
            // console.log("this.option",this.option);
            // 没有的话就直接为空好了
            const {childlabel: childlabel2,childid: childid2,coord: fathercoord2} = this.geoheaddata.geomap;
            childlabel2.forEach(
                (name: string,index: number) => {
                    result.provinceArray.push({id: childid2[index]+"",name,coord: fathercoord2[index],value:1});
                }
            );
        }
        // 置换数据
        result.provinceArray = [...this.preInsertUnfindMapData(childlabel),...result.provinceArray];
        // if (point !== undefined) {
        const {coord,value:pointvalue} = point;
        coord.forEach(
            (value: [number,number],index: number) => {
                result.points.push([value[0],value[1],pointvalue[index]]);
            }
        );
        // }
        return result;
    }
    /**
     * level4的时候处理函数
     */
    private dealData_level4(data: ReturnGeoData): GeoData {
        const {entity,starttime,endtime,entitynums,scale,winlen,name: cityname,level} = this.postparms;
        let result: GeoData ={} as any;
        if (data.geomap.point === undefined) {
            result = {
                        center:{JD: this.postparms.coord[0],WD: this.postparms.coord[1]},
                        cityname: name,
                        measurename: MeasureName.Elec,
                        points: [],
                    };
        } else {
            const {coord, value} = data.geomap.point;
            result = {
                        center:{JD: this.postparms.coord[0],WD: this.postparms.coord[1]},
                        cityname: name,
                        measurename: MeasureName.Elec,
                        points: coord.map((data,index)=>[data[0],data[1],value[index]] as any)
                    };
        }
        return result;
    }
    // private postAndDealData(callback: any): Promise<GeoTransData> {
    //     const {entity,starttime,endtime,entitynums,scale,winlen} = this.postparms;
    //     const promise = Axios({
    //         method:"get",
    //         url:`${prev}/elecnum/geomap?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
    //     }).then(
    //         (result) => {
    //             // return data;
    //             const data: GeoTransData = callback(GeoTestData);
    //             return data;
    //         }
    //     ).catch(
    //         (err) => {
    //             const data: GeoTransData = callback(GeoTestData);
    //             return data;
    //         }
    //     );
    //     return promise;
    // }
    @Emit()
    private setTimeoutdraw(count: number) {
        // console.log(count);
        // console.log("11",this.startclearTimer,this.loop,this);
        const nowtime = this.appendtimelist[count];
        this.date = moment(nowtime);
        const {length: timelen} = this.appendtimelist;
        if (timelen)  {
            this.timeoutcount = count;
            const bodylist = this.geoBodydata[this.appendtimelist[count]];
            const headlist = this.geoheaddata;
            const data: ReturnGeoData = {geomap:{} as any};
            data.geomap = headlist.geomap as any;
            data.geomap.point = bodylist!==undefined?bodylist.geomap.point:this.initreturndata.geomap.point;
            // 画图
            if ( timelen > count) { // 一旦timelist大于 1 就要重新画
                this.setOption(this.getLevelOption(data,false));
            }
        }
    }
    /**
     * 初始化数据
     *  1. 初始化时间轴
     *  2. 初始化body数据
     *  3. 初始化head数据
     */
    private initData() {
        this.appendtimelist = [];
        this.geoBodydata = {};
        this.geoheaddata= {geomap:{}} as any;
        this.mapnames = [];
        // (this.option as any).change = updatestate.empty;
    }
    private mounted() {
        // console.log("geo 加载");
        this.initData();
        // const {entity, pid, pidlevel: level} = orginitconfig;
        // const datapromise = insertInitData(pid, entity, level, this);
        // this.redraw(this.postparms.entity);
        this.start(true);
    }
    /**
     * data : 返回的option数据
     * websocketfirst 为是否为websocket开始
     */
    private getLevelOption(data: ReturnGeoData,websocketfirst: boolean) {
        const {level} = this.postparms;
        let option = null;
        if (websocketfirst) {
            if (level>=4) {
                option = getGeoCityOptionConfig(this.dealData_level4(data),this.geolimiter);
                (option as any).change = updatestate.redraw;
                // this.option = option;
            } else {
                const result = this.dealData(data);
                const {name} = this.postparms;
                option = getGeoChinaProvinceOptionConfig(result.provinceArray,result.points,name,true,this.geolimiter) as any;
                (option as any).change = updatestate.redraw;
                // this.setOption(option);
            }
        } else {
            if(level>=4) {
                const data2 = this.dealData_level4(data);
                option = getGeoCityOptionConfig(data2,this.geolimiter) as any;
            } else {
                const result = this.dealData(data);
                const {name} = this.postparms;
                option = getGeoChinaProvinceOptionConfig(result.provinceArray,result.points,name,true,this.geolimiter) as any;
            }
            this.redrawcount += 1;
            (option as any).change = this.redrawcount % 2;
        }
        return option;
    }
    private initBlackChart() {
        const {level,name} = this.postparms;
        if(level<4) { // 小于4时候显示地图
            const postprivinceId = this.getPostprivinceId();
            const promise = this.getMapSource(postprivinceId, name);
            promise.then(
                (suc) => {
                    this.initWebSocket(this.postparms);
                    const option = this.getLevelOption(this.initreturndata,true);
                    this.setOption(option);
                }
            );
        } else {// 大于等于4等级的时候显示最下面的地图
            this.initWebSocket(this.postparms);
            const option = this.getLevelOption(this.initreturndata,true);
            this.setOption(option);
        }
    }
    // @Emit()
    // private clearIntervalnow() {
    //     this.startclearTimer = true;
    //     this.loop = false;
    //     clearTimeout(this.timeoutid);
    //     // while (this.intervalid.length > 0 ) {
    //     //     const id = this.intervalid.pop();
    //     //     clearTimeout(id);
    //     //     console.log("清理id",id);
    //     // }
    //     console.log("消除",this.timeoutid);
    //     this.startclearTimer = false;
    // }
    /**
     * 一旦entity有变化就重新画图
     * 初始化要做的几件事情
     *    1. 关闭之前的websocket
     *    2. 重置定时任务
     *    3. 当level<4 的时候初始化获取地图
     */
    @Watch("postparms.entity",  {deep : true})
    private start(val: boolean) {
        // console.log("监听间隔,geo",val);
        // 1. 关闭之前的websocket
        // tslint:disable-next-line:no-unused-expression
        this.websocket && (this.websocket.close());
        // 2. 初始化数据
        this.initData();
        // 3. 初始化地图
        this.play = false;
        // 3. 初始化地图
        // 初始化websocket数据
        this.initBlackChart();
        // 4. 启动定时任务
        this.timer.start();
    }
    /**
     * 监听子组件中的阈值是否有变化，一旦变化就更新当前的threshold
     */
    @Watch("postparms.thresholder",{deep:true})
    private setThreshold(val: ThresholdLimiter) {
        this.geolimiter = val;
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
    //   this.clearIntervalnow();
      this.timer.pause();
      this.initData();
    //   console.log("删除Geo组件,并关闭当前的WebSocket");
      this.websocket.close();
    }
    @Emit()
    private way2UpdateData(chart: any,newoption: any) {
        if(this.postparms.level >= 4 ) {// 也就是在点击市级别地图的时候
            const data: Points[]= Array.from((newoption.series[0].data as any));
            // // // 2.更新数据 逐渐变化
            const oldoption = chart.getOption();
            // a .逐点添加数据
            // const lastdata = oldoption.series[0].data;
            // const total = data.length;
            // let count = 0;
            // while(data.length > 0) { // 动态更新数据
            //     count += 1;
            //     const one = data.shift();
            //     lastdata.shift();
            //     lastdata.push(Array.from(one as any));
            //     // 核心方法
            //     if((count % Math.round(total / 3) === 0) || count === total) {
            //         (chart as any).setOption(oldoption);
            //     }
            // }
            // 清楚掉所有数数据
            // b .批量显示
            oldoption.series[0].data = data as any;
            (chart as any).setOption(oldoption);
            // 2 . 批量更新数据 但是会重置中心
            // (chart as any).setOption(newoption);
        }
        if(this.postparms.level === 2 || this.postparms.level === 3 ) {// 也就是在点击市级别地图的时候
            // // 2.更新数据 逐渐变化
            // 获取图表的原配置
            // const newoption = chart.getOption();
            // 获取图表的前一帧第二个数据
            // const lastdata =  newoption.series[1].data; // [[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898+Math.random()*10,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1]];
            // lastdata.splice(0);
            // 更新第一个数据，可以不用更新
            // newoption.series[0].data = [{id:99504684,name:"哈密市",value:2,coord:[78.90713899545392,39.6181074998455]},{id:99556364,name:"阿克苏地区",value:0,coord:[86.885379,41.857898]},{id:99690544,name:"自治区直辖县级行政区划",value:85},{id:99783688,name:"五家渠市",value:0},{id:99787698,name:"阿勒泰地区",value:100},{id:99799398,name:"塔城地区",value:384},{id:99928818,name:"伊犁哈萨克自治州",value:453},{id:99928828,name:"克孜勒苏柯尔克孜自治州",value:0},{id:99928838,name:"巴音郭楞蒙古自治州　",value:0},{id:99928848,name:"博尔塔拉蒙古自治州",value:25},{id:99928858,name:"和田地区",value:84},{id:99928868,name:"喀什地区",value:135},{id:99928878,name:"吐鲁番地区",value:0},{id:99928898,name:"克拉玛依市",value:8},{id:99928908,name:"新县市",value:0},{id:99936088,name:"巴音郭楞蒙古自治州",value:233},{id:99936118,name:"库尔勒市",value:0},{id:99944698,name:"新疆生产建设兵团",value:25},{id:99955208,name:"新疆石河子市",value:9},{id:99955228,name:"新疆石河子市",value:0},{id:99955248,name:"新疆石河子市",value:0},{id:99956028,name:"阿克苏",value:1387},{id:99959518,name:"伊梨州",value:0},{id:99959538,name:"乌苏市",value:140},{id:99966318,name:"昌吉回族自治州",value:282},{id:99974646,name:"哈密地区",value:188},{id:99974666,name:"哈密市",value:0},{id:99998998,name:"乌鲁木齐市",value:358}];
            // const total = data.length;
            // let count = 0;
            // 方法一
            // while(data.length > 0) { // 动态更新数据
            //     count += 1;
            //     const one = data.shift();
            //     lastdata.push(Array.from(one as any));
            //     // 核心方法
            //     if((count % Math.round(total / 3) === 0) || count === total) {
            //         (chart as any).setOption(newoption);
            //     }
            // }
            //  方法二
            // const data: Points[]= this.randomlastdata(100);
            // newoption.series[1].data = data;
            // console.log("oldoption",newoption);
            //  222222
            // const oldoption = chart.getOption();
            // oldoption.series[0].data =  JSON.parse(JSON.stringify(newoption.series[0].data));
            // oldoption.series[1].data =  JSON.parse(JSON.stringify(newoption.series[1].data));
            // (chart as any).setOption(oldoption);
            // (chart as any).setOption(newoption);
            newoption =  JSON.parse(JSON.stringify(newoption));
            (chart as any).setOption(newoption);
            // console.log("this.newoption",newoption);
        }
    }
    @Emit()
    private handledoubleclick() {
        // 双击事件为变换图表中心位置 坑爹啊
        PubSub.publish("doubleclick2changecenter",this.id);
    }
    private getMapSource(entity: string,name: string): Promise<string> {
        return Axios({
            method:"get",
            url:`/${baseurl}/js/china-main-city/${entity}.json`
        }).then(
            async (result)=> {
            // console.log(result)
            await echarts.registerMap(name,result.data);
            const featureslist: GeoMapPictureFeatureFormat[] = result.data.features as any;
            this.mapnames = [];
            featureslist.forEach(
                (value) => {
                    this.mapnames.push(value.properties);
                }
            );
            return "success";
        }).catch(
            (err) => {
                this.$message.error("找不到地图文件");
                return Promise.reject("err");
            }
        );
    }
    /**
     * 初始化话websocket的时候要做的事情
     * 1. 要重置websockecount 因为 websockecount==0 的时候为头数据，默认返回不包含points数据的
     * 2. 重置chartstorepool 因为这个使用来存储数据用的，{145646:{}}
     */
    @Emit()
    private initWebSocket(urlparas: PostParams) {
        this.websockecount = 0 ;
        // this.chartstorepool = {};
        this.geoBodydata = {};
        this.geoheaddata = {} as any;
        const websocketurl = `ws://${websocketurlhost}/websocket?entity=${urlparas.entity}&start=${urlparas.starttime.split(" ")[0]}&end=${urlparas.endtime.split(" ")[0]}&scale=${urlparas.scale}`;
        // console.log("initWebSocket",websocketurl);
        this.websocket = new WebSocket(websocketurl);
        this.websocket.onopen = this.wsonopen;
        this.websocket.onmessage = this.wsonmessage;
        this.websocket.onclose = this.wsonclose;
        this.websocket.onerror = this.wsonerror;
        // setTimeout(()=> {this.websocket.close();},3000);
    }
    @Emit()
    private wsonopen() {
        // console.log("open geo",new Date());
    }
    @Emit()
    private wsonmessage(evt: MessageEvent) {
        const data: ReturnGeoData =  JSON.parse(evt.data) as ReturnGeoData;
        const {level} = this.postparms;
        console.log("websocket 收到的新数据",this.websockecount,data,this.redrawcount);
        if ( this.websockecount === 0 ) { // 初始化的时候导入头文件
            this.geoheaddata = data;
        } else {//  在之后的数据是放进body中
            this.geoBodydata[data.geomap.point.starttime] = data;
            this.appendtimelist.push(data.geomap.point.starttime);
        }
        this.websockecount += 1;
    }
    @Emit()
    private wsonclose() {
        // console.log("wsonclose close",new Date(),this.geoheaddata,this.geoBodydata);
        // this.initWebSocket(this.urlparas);
        // setTimeout(()=> {this.initWebSocket(this.urlparas);},1000);
    }
    @Emit()
    private wsonerror() {
        // console.log("open err",new Date());
    }
    /**
     * 地图下钻的时候触发的事件
     */
    @Emit()
    private handleclick(params: any) {
        // 登录框条件
        const { name , id , coord} = params.data as any;
        this.$confirm({
            title: `确定要登录${name}吗?`,
            content: "点击确定登录子页面,取消返回",
            okText: '确定',
            okType: 'danger',
            cancelText: "取消",
            onOk:() => {
                // console.log("this",this);
                if ( params.data === undefined || params.data.id === "") {
                    this.$message.error('数据库后台暂时没有指定的组织id', 2);
                    return ;
                } else {
                    const { name , id , coord} = params.data as any;
                    const level: number = this.urlparas.level + 1;
                    // console.log(name , id , coord);
                    // PubSub.publish("showtooltip",{entity: id,name,isLeaf: false,this.urlparas.level + 1 ,0,0});
                    this.$router.push({name: "node",query: {
                                        entity: id as any,name:name as any,level: level as any,isLeaf: false as any,
                                        coord: coord as any,
                                        },
                                        params: { entity: id as any}
                                        });
                    PubSub.publish("appendBread",{
                        name,
                        entity:id,
                        coord,
                        level,
                        isLeaf: false,
                    });
                }
            },
            onCancel() {
                // console.log("取消数据");
            },
        });
    }
    @Emit()
    private restarttodraw() {
        this.pausedraw();
        // const count = 0;
        // this.loop = true;
        // this.setTimeoutdraw(count);
        this.timer.start();
        this.play = true;
    }
    @Emit()
    private pausedraw() {
        this.timer.pause();
        // this.clearIntervalnow();
    }
    @Emit()
    private pause(ifpause: boolean,localtime: number) {
        if (ifpause) {
            this.pausedraw();
            this.play = false;
        } else {
            this.timer.continue();
            this.play = true;
        }
    }
    /**
     * 暂停之后接下来继续
     */
    @Emit()
    private continuedraw(loop: boolean) {
        // this.pausedraw();
        // this.setTimeoutdraw(this.timeoutcount);
        this.timer.continue();
    }
    /**
     * 一旦时间没有，要重新获取数据
     */
    @Emit()
    private querydate(ts: number,send: boolean) {
        this.pausedraw();
        // console.log("tsts",ts,send);
        const index = this.appendtimelist.indexOf(ts);
        if( index >= 0) {
            // this.setTimeoutdraw(index);
            this.play = false;
            this.timer.doN(index);
        } else {
            // if(send) {
            //     this.websocket.send(ts+"");
            // }
            // 等待一秒看看是否有数据，没有数据就再等
            // setTimeout(()=>this.querydate(ts,false),1000);
            //  方式2
            this.$message.warning("没有数据请重新选择时间",1);
        }
    }
    @Emit()
    private toggledrag(val: boolean) {
        this.candraggable = val;
    }
}
</script>

<style lang='scss' scoped>
.anchorBL{
    display:none;
}

</style>