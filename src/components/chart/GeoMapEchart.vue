<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
       <LittleBar :titlename="titlename" :show="positionClass === 'center'?false:true" v-model="postparms">
            <BaseChartFactory :urlparas="urlparas" :positionClass="positionClass" :id="id" :option="option" :chartLibrary="chartLibrary" :handleclick="handleclick" @updateData="way2UpdateData" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model, Provide} from 'vue-property-decorator';
import LittleBar from "@/components/chart/LittleBar.vue";
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import { PositionClass , PostParams , ChartLibrary, MeasureName,ReturnGeoData,GeoTransData,ChartStorePool} from '@/types/index';
import { getGeoChinaProvinceOptionConfig, getGeoCityOptionConfig, GeoData, provinceMap,ProvinceMapData, Points, testPointsdata, cityMap,getCityMapIdByName, getProvinceMapIdByName, GeoTestData} from '@/components/options/GeoOptions.ts';
import echarts,{ ECharts, EChartOption, EChartsOptionConfig } from "echarts";
import { provincedata} from '@/components/options/ProvinceOptions.ts';
import Axios,{AxiosPromise} from "axios";
import PubSub from 'pubsub-js';
// import 'echarts/map/js/province/xinjiang.js';
const prev = process.env.NODE_ENV === "development"? "": "";
const websocketurlhost = process.env.NODE_ENV === "development"? "192.168.40.156:8080": "localhost:8088";
@Component({
    components: {
        LittleBar,
        BaseChartFactory
    },
})
export default class GeoMapEchart extends Vue {
    @Prop() public id!: string;
    @Prop() public urlparas!: PostParams;
    @Prop() public positionClass!: PositionClass;
    @Prop() public data!: object;
    @Model("changepostparams") public postparms!: PostParams;
    // @Provide('option')
    public chartstorepool: ChartStorePool<GeoTransData> = {};
    public option = {};
    // public postInterval =  1000 ;
    public entity =  "";
    public titlename = "Geo";
    private intervalid = 0;
    private chartLibrary = ChartLibrary.echart;
    private websocket!: WebSocket;
    private coord!: [number,number];
    @Emit()
    public changedata() {
    //   console.log(this.data);
      if (this.id === "chart-top") {
          this.positionClass = PositionClass.Center;
      }
    }
    @Emit()
    private setOption(option: any) {
        this.option = option;
    }
    @Emit()
    private level2post(count: number) { // 这选择省的时候
        const {entity,starttime,endtime,entitynums,scale,winlen,name} = this.postparms;
        const that = this;
        const postprivinceId = (provinceMap as any)[name];
        const promise = this.getMapSource(postprivinceId, name).then(
            (suc) => {
                this.postAndDealData(this.dealData).then(
                    (data: string |  GeoTransData) => {
                        if( typeof data !== 'string') {
                            // const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,data.points,name,true) as any;
                            const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,this.randomlastdata(100),name,true) as any;
                            count += 1;
                            option2.change = count % 2;
                            // const data2: Points[]= this.randomlastdata(100);
                            // option2.series[1].data = data2;
                            this.setOption(option2);
                            return option2;
                        }
                    }
                );
            }
        );
    }
    @Emit()
    private level3post(count: number) { // 市
        // const cityname = "杭州市";
        const {entity,starttime,endtime,entitynums,scale,winlen,name:cityname} = this.postparms;
        // const option2 = getGeoChinaProvinceOptionConfig() as any;
        const postCityId = (cityMap as any)[cityname];
        const promise2 = this.getMapSource(postCityId,cityname).then(
            (suc) => {
                this.postAndDealData(this.dealData).then(
                    (data: string |  GeoTransData) => {
                        if( typeof data !== 'string') {
                            // const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,data.points,name,true) as any;
                            const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,this.randomlastdata(100),cityname,true) as any;
                            count += 1;
                            option2.change = count % 2;
                            // const data2: Points[]= this.randomlastdata(100);
                            // option2.series[1].data = data2;
                            this.setOption(option2);
                            return option2;
                        }
                    }
                );
            }
        );
        // (option2 as any).change = false;
        console.log("geo",this.option);
    }
    @Emit()
    private level4post(count: number) {
        // const option2 = getGeoChinaProvinceOptionConfig() as any;
        const postCityId = this.postparms.entity;
        const {entity,starttime,endtime,entitynums,scale,winlen,name: cityname} = this.postparms;
        const promise2 = Axios({
            method:"get",
            url:`${prev}/elecnum/geomap?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`
        }).then(
            (result) => {
                const data: GeoData = {
                    center:{JD: this.coord[0],WD: this.coord[1]},
                    cityname,
                    measurename: MeasureName.Elec,
                    points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
                };
                // const data: GeoData = result.data
                const option2 = getGeoCityOptionConfig(data) as any;
                count+=1;
                option2.change = count % 2;
                this.option = option2;
                console.log("neizai",option2,this.option);
            }
        ).catch(
            (result) => {
                const data: GeoData = {
                    center:{JD: 120.1709,WD: 30.29},
                    cityname,
                    measurename: MeasureName.Elec,
                    points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
                };
                // const data: GeoData = result.data
                const option2 = getGeoCityOptionConfig(data) as any;
                count+=1;
                option2.change = count % 2;
                this.option = option2;
                console.log("neizai",option2,this.option);
            }
        );
    }
    /**
     * 处理数据的函数，用来把source数据源变成target目标数据源的结构
     */
    private dealData(data: ReturnGeoData): GeoTransData {
        const result: GeoTransData = {
                    provinceArray:[],
                    points:[]
        };
        // 生成GeoTransData格式
        const res = data.geomap;
        const {childlabel,childid,point} = res;
        childlabel.forEach(
            (name: string,index: number) => {
                result.provinceArray.push({id: childid[index],name,coord: [0,0],value:1});
                // data.provinceArray.push({id: childid[index],name,coord: [0,0],value:0});
            }
        );
        const {coord,value:pointvalue} = point;
        coord.forEach(
            (value: [number,number],index: number) => {
                result.points.push([value[0],value[1],pointvalue[index]]);
            }
        );
        this.chartstorepool[data.geomap.point.starttime] = result;
        return result;
    }
    private postAndDealData(callback: any): Promise<GeoTransData> {
        const {entity,starttime,endtime,entitynums,scale,winlen} = this.postparms;
        const promise = Axios({
            method:"get",
            url:`${prev}/elecnum/geomap?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
        }).then(
            (result) => {
                // return data;
                const data: GeoTransData = callback(GeoTestData);
                return data;
            }
        ).catch(
            (err) => {
                const data: GeoTransData = callback(GeoTestData);
                return data;
            }
        );
        return promise;
    }
    private levelpostmap = (level: number) => { // 中间商
        let newlevel = level;
        // tslint:disable-next-line:no-unused-expression
        level > 4 && (newlevel = 4);
        // tslint:disable-next-line:no-unused-expression
        level < 0 && (newlevel = 1);
        const proxypost = {
            1 : this.level2post,
            2 : this.level2post,
            3 : this.level3post,
            4 : this.level4post};
        return (proxypost as any)[newlevel];
    }
    @Emit()
    private setInterval(count: number) {
        count += 1;
        this.levelpostmap(this.urlparas.level)(count);
        setTimeout(
           () => {this.setInterval(count);console.log(this.postparms.entity);}
        ,this.urlparas.postInterval);
    }
    private mounted() {
        const that = this;
        const count = 0 ;
        // this.setInterval(count);
        // // 初始化websocket数据
        // this.initWebSocket(this.postparms);
        //   模拟关闭之后重新启动
        //   setTimeout(()=> {this.websocket.close();},3000);
    }
    /**
     * 一旦entity有变化就重新画图
     */
    @Watch("postparms.entity",  {deep : true})
    private redraw(val: boolean) {
        console.log("监听间隔,geo",val);
        // tslint:disable-next-line:no-unused-expression
        this.websocket && (this.websocket.close());
        this.chartstorepool = {};
        const count = 0;
        this.setInterval(count);
        // 初始化websocket数据
        this.initWebSocket(this.postparms);
        // this.option = {change:"redraw"};
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      clearInterval(this.intervalid);
      console.log("删除Geo组件,并关闭当前的WebSocket");
      this.websocket.close();
    }
    // @Emit()
    private async way2UpdateData(chart: any,oldoption: any) {
        if(this.postparms.level >= 4 ) {// 也就是在点击市级别地图的时候
            const data: Points[]= Array.from((oldoption.series[0].data as any));
            // // 2.更新数据 逐渐变化
            const newoption = chart.getOption();
            const lastdata = newoption.series[0].data;
            // console.log("是否更新数据");
            // console.log("lastdata",lastdata);
            const total = data.length;
            let count = 0;
            while(data.length > 0) { // 动态更新数据
                count += 1;
                const one = data.shift();
                lastdata.shift();
                lastdata.push(Array.from(one as any));
                // 核心方法
                if((count % Math.round(total / 3) === 0) || count === total) {
                    (chart as any).setOption(newoption);
                }
            }
        }
        if(this.postparms.level === 2 || this.postparms.level === 3 ) {// 也就是在点击市级别地图的时候
            // // 2.更新数据 逐渐变化
            // 获取图表的原配置
            const newoption = chart.getOption();
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
            (chart as any).setOption(this.option);
        }
    }
    private randomlastdata(n: number): Points[] {
        const data: Points[] = [];
        for (let index = 0; index < n; index++) {
            data.push([91.165855+(Math.random()-1)*15,44.659313+(Math.random()-1)*6,Math.random()>0.5?1:1]);
        }
        return data;
    }
    @Emit()
    private handledoubleclick() {
        // 双击事件为变换图表中心位置 坑爹啊
        PubSub.publish("doubleclick2changecenter",this.id);
    }
    private getMapSource(entity: string,name: string): Promise<string> {
        return Axios({
            method:"get",
            url:`${prev}/js/china-main-city/${entity}.json`
        }).then(
            async (result)=> {
            // console.log(result)
            await echarts.registerMap(name,result.data);
            return "success";
        });
    }
    //  一下为websocket方法
    @Emit()
    private initWebSocket(urlparas: PostParams) {
        const websocketurl = `ws://${websocketurlhost}/${urlparas.entity}`;
        console.log("initWebSocket",websocketurl);
        this.websocket = new WebSocket(websocketurl);
        this.websocket.onopen = this.wsonopen;
        this.websocket.onmessage = this.wsonmessage;
        this.websocket.onclose = this.wsonclose;
        this.websocket.onerror = this.wsonerror;
        // setTimeout(()=> {this.websocket.close();},3000);
    }
    @Emit()
    private wsonopen() {
        console.log("open geo",new Date());
    }
    @Emit()
    private wsonmessage(evt: MessageEvent) {
        const data: ReturnGeoData =  evt.data as ReturnGeoData;
        // console.log("open message",new Date(),data);
        this.dealData(data);
    }
    @Emit()
    private wsonclose() {
        console.log("wsonclose close",new Date(),this.chartstorepool);
        this.initWebSocket(this.urlparas);
    }
    @Emit()
    private wsonerror() {
        // console.log("open err",new Date());
    }
    private handleclick(params: any) {
        if ( params.data === undefined) {
                alert('无数据无法向下钻取');
                return ;
        } else {
            const { name , id , coord} = params.data as any;
            const level: number = this.urlparas.level + 1;
            // console.log(name , id , coord);
            // PubSub.publish("showtooltip",{entity: id,name,isLeaf: false,this.urlparas.level + 1 ,0,0});
            this.$router.push({name: "node",query: {
                                entity: id as any,name:name as any,level: level as any,isLeaf: false as any,
                                },
                                params: { entity: id as any}
                                });
            //  name: name as any,
            // level: level as any,
            // isLeaf: false,
            this.postparms.entity = id;
            this.postparms.name = name;
            this.postparms.level = level;
            this.coord = coord;
        }
    }
}
</script>

<style lang='scss' scoped>
.anchorBL{
    display:none;
}
</style>