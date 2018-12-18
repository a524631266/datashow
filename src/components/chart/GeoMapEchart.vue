<template>
  <div :class="positionClass" draggable="true" @dblclick="handledoubleclick">
       <LittleBar :show="positionClass === 'center'?false:true" :initshow="initshow" v-model="postparms">
            <BaseChartFactory :positionClass="positionClass" :id="id" :option="option" :chartType="chartType" @updateData="updateData" slot="chart"/>
        </LittleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model, Provide} from 'vue-property-decorator';
import LittleBar from "@/components/chart/LittleBar.vue";
import BaseChartFactory from "@/components/chart/base/BaseChartFactory.vue";
import { PositionClass , PostParams , ChartType, MeasureName} from '@/types/index';
import { getGeoChinaProvinceOptionConfig, getGeoCityOptionConfig, GeoData, provinceMap,ProvinceMapData, Points, testPointsdata, cityMap,getCityMapIdByName, getProvinceMapIdByName, GeoTestData} from '@/components/options/GeoOptions.ts';
import echarts,{ ECharts, EChartOption, EChartsOptionConfig } from "echarts";
import { provincedata} from '@/components/options/ProvinceOptions.ts';
import Axios,{AxiosPromise} from "axios";

// import 'echarts/map/js/province/xinjiang.js';
const prev = process.env.NODE_ENV === "development"? "": "";

interface HeampTransData {
    provinceArray: ProvinceMapData[];
    points: Points[];
}

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
    public option = {};
    // public postInterval =  1000 ;
    public entity =  "";
    public initshow: boolean = this.positionClass === "center"?true: false ;
    private intervalid = 0;
    private chartType = ChartType.echart;
    @Emit()
    public changedata() {
    //   console.log(this.data);
      if (this.id === "chart-top") {
          this.positionClass = PositionClass.Center;
      }
    }
    @Emit()
    private setOption(option: any) {
        // this.option = option;
        // this.$set(this,"option",option);
        this.option = option;
        // console.log(this.option,"更改为啥不触发");
    }
    @Emit()
    private level2post(count: number) { // 这选择省的时候
        const {entity,starttime,endtime,entitynums,scale,winlen,name} = this.postparms;
        const that = this;
        // const provinceEnName = getProvinceMapIdByName(name);
        // console.log(provinceEnName);
        // const loadmapapi = ()=> { import(`echarts/map/js/province/${provinceEnName}`);};
        // const promise = new Promise(
        //     async (resolve,reject)=> {
        //         if (provinceEnName !== undefined) {
        //             await loadmapapi();
        //         }
        //         resolve("success loading map");
        //     }
        // )
        const postprivinceId = (provinceMap as any)[name];
        const promise = Axios({
            method:"get",
            url:`${prev}/js/china-main-city/${postprivinceId}.json`
        }).then(
            async (result)=> {
            // console.log(result)
            await echarts.registerMap(name,result.data);
            return "success";
        }).then(
            (suc) => {
                this.Connect2().then(
                    (data: any) => {
                        if( data !== "err") {
                            const option2 = getGeoChinaProvinceOptionConfig(data.provinceArray,data.points,name,true) as any;
                            count += 1;
                            option2.change = count % 2;
                            // that.option = option2;
                            // this.setOption(option2);
                            // (provincedata as any).change = count % 2;
                            this.setOption(option2);
                            // console.log("data",data);
                            return option2;
                        }
                    }
                );
            }
        );
        // return promise;
    }
    private level3post = (count: number) => { // 市
        const cityname = "杭州市";
        // const option2 = getGeoChinaProvinceOptionConfig() as any;
        const postCityId = cityMap[cityname];
        const promise2 = Axios({
            method:"get",
            url:`${prev}/js/china-main-city/${postCityId}.json`
        }).then(
            async (result)=> {
            // console.log(result)
            await echarts.registerMap(name,result.data);
            return "success";
        }).then(
            (suc) => {
                const data: GeoData = {
                    center:{JD: 120.1709,WD: 30.29},
                    cityname,
                    measurename: MeasureName.Elec,
                    points:testPointsdata.map((data)=>[data[0],data[1],count%2?-data[2]:data[2]] as any),
                };
                const option2 = getGeoCityOptionConfig(data) as any;
                count+=1;
                option2.change = count % 2;
                // this.option = option2;
                // console.log("neizai",option2,this.option);
            }
        );
        // (option2 as any).change = false;
        console.log("geo",this.option);
    }
    private level4post = (count: number) => {
        const cityname = "西湖区";
        // const option2 = getGeoChinaProvinceOptionConfig() as any;
        const postCityId = this.postparms.entity;
        const {entity,starttime,endtime,entitynums,scale,winlen} = this.postparms;
        const promise2 = Axios({
            method:"get",
            url:`${prev}/?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`
        }).then(
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
        // (option2 as any).change = false;
        console.log("geo",this.option);
    }
    private Connect2(): Promise<string | HeampTransData> {
        const {entity,starttime,endtime,entitynums,scale,winlen} = this.postparms;
        const promise = Axios({
            method:"get",
            url:`${prev}/?entity=${entity}&starttime=${starttime}&endtime=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
        }).then(
            (result) => {
                const data: HeampTransData = {
                    provinceArray:[],
                    points:[]
                };
                // 生成HeampTransData格式
                const res = result.data.geomap;
                const {childlabel,childid,point} = res;
                childlabel.forEach(
                    (name: string,index: number) => {
                        data.provinceArray.push({id: childid[index],name,coord: [0,0],value:1});
                        // data.provinceArray.push({id: childid[index],name,coord: [0,0],value:0});
                    }
                );
                const {coord,value:pointvalue} = point;
                coord.forEach(
                    (value: [number,number],index: number) => {
                        data.points.push([value[0],value[1],pointvalue[index]]);
                    }
                );
                return data;
            }
        ).catch(
            (err) => {
                const data: HeampTransData = {
                    provinceArray:[],
                    points:[]
                };
                const result = GeoTestData;
                const res = result.geomap;
                const {childlabel,childid,point} = res;
                childlabel.forEach(
                    (name: string,index: number) => {
                        data.provinceArray.push({id: childid[index],name,coord: [ 85.61489933833856, 42.127000957642366],value:100});
                    }
                );
                console.log("childlabel",childlabel,data.provinceArray);
                const {coord,value:pointvalue} = point;
                coord.forEach(
                    (value: [number,number],index: number) => {
                        data.points.push([value[0],value[1],pointvalue[index]]);
                    }
                );
                return data;
                // console.log("err");
                // return "err";
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
        this.level2post(count);
        setTimeout(
           () => (this.setInterval(count))
        ,this.urlparas.postInterval);
    }
    private mounted() {
      const that = this;
      const count = 0 ;
      this.setInterval(count);
    // //   this.level2post(count);
    //   this.intervalid = setInterval(
    //       () => {
    //         count += 1;
    //         // console.log("this.option.before",(this.option as any).change,this.option);
    //         // this.levelpostmap(this.postparms.level)(count);
    //         this.level2post(count);
    //         // console.log("this.option after",this.option);
    //       }
    //     ,
    //     this.urlparas.postInterval * 1
    //   );
    }
    @Watch("postparms.postInterval",  {deep : true})
    private onHandleShow(val: boolean) {
      console.log("监听间隔",this.postparms,this.id);
      // this.initshow = !this.initshow;
    }
    private destroyed() {
      // console.log("destory (this as any).intervalid", (this as any).intervalid);
      clearInterval(this.intervalid);
      console.log("删除Geo组件");
    }
    // @Emit()
    private async updateData(chart: any,oldoption: any) {
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
        if(this.postparms.level === 2 ) {// 也就是在点击市级别地图的时候
            const data: Points[]= this.randomlastdata(100);
            // // 2.更新数据 逐渐变化
            const newoption = chart.getOption();
            const lastdata =  newoption.series[1].data; // [[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[78.90713899545392,39.6181074998455,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898+Math.random()*10,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1],[86.885379,41.857898,Math.random()>0.5?-1:1]];
            newoption.series[0].data = [{id:99504684,name:"哈密市",value:2,coord:[78.90713899545392,39.6181074998455]},{id:99556364,name:"阿克苏地区",value:0,coord:[86.885379,41.857898]},{id:99690544,name:"自治区直辖县级行政区划",value:85},{id:99783688,name:"五家渠市",value:0},{id:99787698,name:"阿勒泰地区",value:100},{id:99799398,name:"塔城地区",value:384},{id:99928818,name:"伊犁哈萨克自治州",value:453},{id:99928828,name:"克孜勒苏柯尔克孜自治州",value:0},{id:99928838,name:"巴音郭楞蒙古自治州　",value:0},{id:99928848,name:"博尔塔拉蒙古自治州",value:25},{id:99928858,name:"和田地区",value:84},{id:99928868,name:"喀什地区",value:135},{id:99928878,name:"吐鲁番地区",value:0},{id:99928898,name:"克拉玛依市",value:8},{id:99928908,name:"新县市",value:0},{id:99936088,name:"巴音郭楞蒙古自治州",value:233},{id:99936118,name:"库尔勒市",value:0},{id:99944698,name:"新疆生产建设兵团",value:25},{id:99955208,name:"新疆石河子市",value:9},{id:99955228,name:"新疆石河子市",value:0},{id:99955248,name:"新疆石河子市",value:0},{id:99956028,name:"阿克苏",value:1387},{id:99959518,name:"伊梨州",value:0},{id:99959538,name:"乌苏市",value:140},{id:99966318,name:"昌吉回族自治州",value:282},{id:99974646,name:"哈密地区",value:188},{id:99974666,name:"哈密市",value:0},{id:99998998,name:"乌鲁木齐市",value:358}];
            // console.log("level2更新数据");
            // console.log("lastdata",lastdata);
            lastdata.splice(0);
            const total = data.length;
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
            newoption.series[1].data = data;
            (chart as any).setOption(newoption);
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
    //   console.log("double click",this.id);
      PubSub.publish("doubleclick2changecenter",this.id);
      // this.resizeChart();
      // (this.option as any).change = !(this.option as any).change;
    }
}
</script>

<style lang='scss' scoped>
.anchorBL{
    display:none;
}
</style>