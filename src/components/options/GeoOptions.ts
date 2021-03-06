import { Points } from '@/components/options/GeoOptions';
import moment from 'moment';
// import { Points } from '@/types';
import { MeasureName, ReturnGeoData, ThresholdLimiter } from '@/types';
import 'echarts/extension/bmap/bmap.js';
// import 'echarts/dist/extension/bmap.min.js';
export const provinceMap = {
    新疆维吾尔自治区:"65",
    西藏自治区:"54",
    内蒙古自治区:"15",
    青海省:"63",
    四川省:"51",
    黑龙江省:"23",
    甘肃省:"62",
    云南省:"53",
    广西壮族自治区:"45",
    湖南省:"43",
    陕西省:"61",
    广东省:"44",
    吉林省:"22",
    河北省:"13",
    湖北省:"42",
    贵州省:"52",
    山东省:"37",
    江西省:"36",
    河南省:"41",
    辽宁省:"21",
    山西省:"14",
    安徽省:"34",
    福建省:"35",
    浙江省:"33",
    江苏省:"32",
    重庆市:"50",
    宁夏回族自治区:"64",
    海南省:"46",
    台湾省:"71",
    北京市:"11",
    天津市:"12",
    上海市:"31",
    香港特别行政区:"81",
    澳门特别行政区:"82",
};

export const cityMap = {
    北京市: "110100",
    天津市: "120100",
    上海市: "310100",
    重庆市: "500100",
    崇明县: "310200",
    湖北省直辖县市: "429000",
    铜仁市: "522200",
    毕节市: "522400",
    石家庄市: "130100",
    唐山市: "130200",
    秦皇岛市: "130300",
    邯郸市: "130400",
    邢台市: "130500",
    保定市: "130600",
    张家口市: "130700",
    承德市: "130800",
    沧州市: "130900",
    廊坊市: "131000",
    衡水市: "131100",
    太原市: "140100",
    大同市: "140200",
    阳泉市: "140300",
    长治市: "140400",
    晋城市: "140500",
    朔州市: "140600",
    晋中市: "140700",
    运城市: "140800",
    忻州市: "140900",
    临汾市: "141000",
    吕梁市: "141100",
    呼和浩特市: "150100",
    包头市: "150200",
    乌海市: "150300",
    赤峰市: "150400",
    通辽市: "150500",
    鄂尔多斯市: "150600",
    呼伦贝尔市: "150700",
    巴彦淖尔市: "150800",
    乌兰察布市: "150900",
    兴安盟: "152200",
    锡林郭勒盟: "152500",
    阿拉善盟: "152900",
    沈阳市: "210100",
    大连市: "210200",
    鞍山市: "210300",
    抚顺市: "210400",
    本溪市: "210500",
    丹东市: "210600",
    锦州市: "210700",
    营口市: "210800",
    阜新市: "210900",
    辽阳市: "211000",
    盘锦市: "211100",
    铁岭市: "211200",
    朝阳市: "211300",
    葫芦岛市: "211400",
    长春市: "220100",
    吉林市: "220200",
    四平市: "220300",
    辽源市: "220400",
    通化市: "220500",
    白山市: "220600",
    松原市: "220700",
    白城市: "220800",
    延边朝鲜族自治州: "222400",
    哈尔滨市: "230100",
    齐齐哈尔市: "230200",
    鸡西市: "230300",
    鹤岗市: "230400",
    双鸭山市: "230500",
    大庆市: "230600",
    伊春市: "230700",
    佳木斯市: "230800",
    七台河市: "230900",
    牡丹江市: "231000",
    黑河市: "231100",
    绥化市: "231200",
    大兴安岭地区: "232700",
    南京市: "320100",
    无锡市: "320200",
    徐州市: "320300",
    常州市: "320400",
    苏州市: "320500",
    南通市: "320600",
    连云港市: "320700",
    淮安市: "320800",
    盐城市: "320900",
    扬州市: "321000",
    镇江市: "321100",
    泰州市: "321200",
    宿迁市: "321300",
    杭州市: "330100",
    宁波市: "330200",
    温州市: "330300",
    嘉兴市: "330400",
    湖州市: "330500",
    绍兴市: "330600",
    金华市: "330700",
    衢州市: "330800",
    舟山市: "330900",
    台州市: "331000",
    丽水市: "331100",
    合肥市: "340100",
    芜湖市: "340200",
    蚌埠市: "340300",
    淮南市: "340400",
    马鞍山市: "340500",
    淮北市: "340600",
    铜陵市: "340700",
    安庆市: "340800",
    黄山市: "341000",
    滁州市: "341100",
    阜阳市: "341200",
    宿州市: "341300",
    六安市: "341500",
    亳州市: "341600",
    池州市: "341700",
    宣城市: "341800",
    福州市: "350100",
    厦门市: "350200",
    莆田市: "350300",
    三明市: "350400",
    泉州市: "350500",
    漳州市: "350600",
    南平市: "350700",
    龙岩市: "350800",
    宁德市: "350900",
    南昌市: "360100",
    景德镇市: "360200",
    萍乡市: "360300",
    九江市: "360400",
    新余市: "360500",
    鹰潭市: "360600",
    赣州市: "360700",
    吉安市: "360800",
    宜春市: "360900",
    抚州市: "361000",
    上饶市: "361100",
    济南市: "370100",
    青岛市: "370200",
    淄博市: "370300",
    枣庄市: "370400",
    东营市: "370500",
    烟台市: "370600",
    潍坊市: "370700",
    济宁市: "370800",
    泰安市: "370900",
    威海市: "371000",
    日照市: "371100",
    莱芜市: "371200",
    临沂市: "371300",
    德州市: "371400",
    聊城市: "371500",
    滨州市: "371600",
    菏泽市: "371700",
    郑州市: "410100",
    开封市: "410200",
    洛阳市: "410300",
    平顶山市: "410400",
    安阳市: "410500",
    鹤壁市: "410600",
    新乡市: "410700",
    焦作市: "410800",
    濮阳市: "410900",
    许昌市: "411000",
    漯河市: "411100",
    三门峡市: "411200",
    南阳市: "411300",
    商丘市: "411400",
    信阳市: "411500",
    周口市: "411600",
    驻马店市: "411700",
    省直辖县级行政区划: "469000",
    武汉市: "420100",
    黄石市: "420200",
    十堰市: "420300",
    宜昌市: "420500",
    襄阳市: "420600",
    鄂州市: "420700",
    荆门市: "420800",
    孝感市: "420900",
    荆州市: "421000",
    黄冈市: "421100",
    咸宁市: "421200",
    随州市: "421300",
    恩施土家族苗族自治州: "422800",
    长沙市: "430100",
    株洲市: "430200",
    湘潭市: "430300",
    衡阳市: "430400",
    邵阳市: "430500",
    岳阳市: "430600",
    常德市: "430700",
    张家界市: "430800",
    益阳市: "430900",
    郴州市: "431000",
    永州市: "431100",
    怀化市: "431200",
    娄底市: "431300",
    湘西土家族苗族自治州: "433100",
    广州市: "440100",
    韶关市: "440200",
    深圳市: "440300",
    珠海市: "440400",
    汕头市: "440500",
    佛山市: "440600",
    江门市: "440700",
    湛江市: "440800",
    茂名市: "440900",
    肇庆市: "441200",
    惠州市: "441300",
    梅州市: "441400",
    汕尾市: "441500",
    河源市: "441600",
    阳江市: "441700",
    清远市: "441800",
    东莞市: "441900",
    中山市: "442000",
    潮州市: "445100",
    揭阳市: "445200",
    云浮市: "445300",
    南宁市: "450100",
    柳州市: "450200",
    桂林市: "450300",
    梧州市: "450400",
    北海市: "450500",
    防城港市: "450600",
    钦州市: "450700",
    贵港市: "450800",
    玉林市: "450900",
    百色市: "451000",
    贺州市: "451100",
    河池市: "451200",
    来宾市: "451300",
    崇左市: "451400",
    海口市: "460100",
    三亚市: "460200",
    三沙市: "460300",
    成都市: "510100",
    自贡市: "510300",
    攀枝花市: "510400",
    泸州市: "510500",
    德阳市: "510600",
    绵阳市: "510700",
    广元市: "510800",
    遂宁市: "510900",
    内江市: "511000",
    乐山市: "511100",
    南充市: "511300",
    眉山市: "511400",
    宜宾市: "511500",
    广安市: "511600",
    达州市: "511700",
    雅安市: "511800",
    巴中市: "511900",
    资阳市: "512000",
    阿坝藏族羌族自治州: "513200",
    甘孜藏族自治州: "513300",
    凉山彝族自治州: "513400",
    贵阳市: "520100",
    六盘水市: "520200",
    遵义市: "520300",
    安顺市: "520400",
    黔西南布依族苗族自治州: "522300",
    黔东南苗族侗族自治州: "522600",
    黔南布依族苗族自治州: "522700",
    昆明市: "530100",
    曲靖市: "530300",
    玉溪市: "530400",
    保山市: "530500",
    昭通市: "530600",
    丽江市: "530700",
    普洱市: "530800",
    临沧市: "530900",
    楚雄彝族自治州: "532300",
    红河哈尼族彝族自治州: "532500",
    文山壮族苗族自治州: "532600",
    西双版纳傣族自治州: "532800",
    大理白族自治州: "532900",
    德宏傣族景颇族自治州: "533100",
    怒江傈僳族自治州: "533300",
    迪庆藏族自治州: "533400",
    拉萨: "540100",
    昌都地区: "542100",
    山南地区: "542200",
    日喀则地区: "542300",
    那曲地区: "542400",
    阿里地区: "542500",
    林芝地区: "542600",
    西安市: "610100",
    铜川市: "610200",
    宝鸡市: "610300",
    咸阳市: "610400",
    渭南市: "610500",
    延安市: "610600",
    汉中市: "610700",
    榆林市: "610800",
    安康市: "610900",
    商洛市: "611000",
    兰州市: "620100",
    嘉峪关市: "620200",
    金昌市: "620300",
    白银市: "620400",
    天水市: "620500",
    武威市: "620600",
    张掖市: "620700",
    平凉市: "620800",
    酒泉市: "620900",
    庆阳市: "621000",
    定西市: "621100",
    陇南市: "621200",
    临夏回族自治州: "622900",
    甘南藏族自治州: "623000",
    西宁市: "630100",
    海东地区: "632100",
    海北藏族自治州: "632200",
    黄南藏族自治州: "632300",
    海南藏族自治州: "632500",
    果洛藏族自治州: "632600",
    玉树藏族自治州: "632700",
    海西蒙古族藏族自治州: "632800",
    银川市: "640100",
    石嘴山市: "640200",
    吴忠市: "640300",
    固原市: "640400",
    中卫市: "640500",
    乌鲁木齐市: "650100",
    克拉玛依市: "650200",
    吐鲁番地区: "652100",
    哈密市: "652200",
    昌吉回族自治州: "652300",
    博尔塔拉蒙古自治州: "652700",
    巴音郭楞蒙古自治州: "652800",
    阿克苏: "652900",
    克孜勒苏柯尔克孜自治州: "653000",
    喀什地区: "653100",
    和田地区: "653200",
    伊犁哈萨克自治州: "654000",
    塔城地区: "654200",
    阿勒泰地区: "654300",
    自治区直辖县级行政区划: "659000",
    台湾省: "710000",
    香港特别行政区: "810100",
    澳门特别行政区: "820000",
};



export const proviceChinese2PinYin = {
    安徽: 'anhui',
    澳门: 'aomen',
    北京: 'beijing',
    重庆: 'chongqing',
    福建: 'fujian',
    甘肃: 'gansu',
    广东: 'guangdong',
    广西: 'guangxi',
    贵州: 'guizhou',
    海南: 'hainan',
    河北: 'hebei',
    黑龙江: 'heilongjiang',
    河南: 'henan',
    湖北: 'hubei',
    湖南: 'hunan',
    江苏: 'jiangsu',
    江西: 'jiangxi',
    吉林: 'jilin',
    辽宁: 'liaoning',
    内蒙古: 'neimenggu',
    宁夏: 'ningxia',
    青海: 'qinghai',
    山东: 'shandong',
    上海: 'shanghai',
    山西: 'shanxi',
    陕西: 'shanxi1',
    四川: 'sichuan',
    台湾: 'taiwan',
    天津: 'tianjin',
    香港: 'xianggang',
    新疆: 'xinjiang',
    新疆维吾尔自治区: 'xinjiang',
    西藏: 'xizang',
    云南: 'yunnan',
    浙江: 'zhejiang',
};


export const Pinyin2proviceChinese = {
    // xinjiang:'新疆',
};



const getLevenshteinDistance = (str1: string, str2: string) => {
    if (str1 === undefined || str2 === undefined) {
        throw new Error("str1 或者 str2 不能为空");
    }
};


/**
 * 获取城市的地图id，用来动态加载地图数据
 * @param name level = 3 城市的名字
 */
export const getCityMapIdByName = (name: string) => {

    return (cityMap as any)[name];
};

/**
 * 获取城市的地图id，用来动态加载地图数据
 * @param name level = 2 省地图的名字
 */
export const getProvinceMapIdByName = (name: string) => {

    return (proviceChinese2PinYin as any)[name];
};

export interface ProvinceMapData {
    coord: [number,number]; // 经度和纬度
    id: string; // entity
    name: string; // entity相对应的名称
    value: number; // 数量 //由于是[-,-3]==>-1 && [3,-]==>1
}


class TestTimer {
    private starttime = 0;
    private endtime = 0;
    private avegetime = 0;
    private step = 1000;
    private pretotal = 0;
    private table: {[value: number]: number}= {
    };
    public setTime(time: number, total: number) {
        if(this.starttime === 0) {
            this.starttime = time;
        } else {
            this.pretotal = total;
            if(this.avegetime === 0 ) {
                // this.avegetime = time - this.starttime;
            } else {
                // this.avegetime = ((time - this.starttime) + this.avegetime) / 2;
            }
            this.table[total + this.step] = time - this.starttime;
            this.starttime = time;
            this.endtime = time;
        }
    }
    public getnextstep() {
        return this.pretotal + this.step;
    }
    public getTable() {
        console.log("table",this.table);
        return this.table;
    }
}
const timer = new TestTimer();

/**
 * 后去全国与省级别的配置
 * @param provincesArray 经纬度,id,name,value,数据
 * @param heatData 打点数据
 * @param mapname 省或市的拼音
 * @param isCenter 是否是中心
 */
export const getGeoChinaProvinceOptionConfig = (provincesArray: ProvinceMapData[], heatData: Points[], mapname: string, isCenter: boolean = true,geolimiter: ThresholdLimiter) => {
    // console.log("开始导入",heatData.length);
    // 测试刷新时间
    //  tslint:disable-next-line:no-unused-expression
    // heatData.length && timer.setTime(moment().valueOf(),timer.getnextstep());
    // timer.getTable();
    // let newdata: Points[]= [];
    // // tslint:disable-next-line:no-bitwise
    // for (let i = 0; i < (timer.getnextstep()/heatData.length | 0); i++) {
    //     // data.points.push(...data.points);
    //     newdata = [...newdata,...heatData];
    //     // console.log("data",data.points);
    // }
    // heatData = newdata;
    // console.log("data: ", JSON.stringify(heatData),geolimiter);
    const points: Points[] = heatData.map(
        (point: Points) => {
            const p = filterPoint(point,geolimiter);
            return p as any;
        }
    ).filter(
        (point: Points) => {
            return point[2] !== 0;
        }
    );
    // console.log(JSON.stringify(points));
    return {
        title: {
            show: false,
            text: `分布图`,
            x: "center",
            textStyle: { color: "white" }
        },
        tooltip: [{
            trigger: "item",
            formatter: "{b}<br/>{c}"
        }],
        // 删除legend否则会出现无法显示标题名的情况
        // legend: [{
        //     orient: "vertical",
        //     x: "left",
        //     data: ["用电量"]
        // }],
        toolbox: { feature: { } },
        geo: {
            map: mapname,
            show: true,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: "#CBCBCB",
                    borderColor: "white"
                },
                emphasis: { areaColor: "white" }
            },
            scaleLimit: { max: 2 }
        },
        visualMap: [
            {
                show: false,
                top: "top",
                // min: 0,
                // max: 11,
                seriesIndex: 0,
                calculable: true,
                inRange: {
                    color: ["white", "white", "white", "white", "white"]
                }
            },
            {
                show: false,
                min: geolimiter.negative?-1:0,
                max: geolimiter.positive?1:0,
                splitNumber: 10,
                seriesIndex: 1,
                inRange: {
                    color: ["lightskyblue", "yellow", "red"]
                },
                textStyle: {
                    color: "blue"
                }
            }],
        series: [
            {
                // name: "",
                type: "map",
                mapType: mapname,
                roam: false,// 让地图可以拖拽
                hoverable: true,
                // label: {
                //     normal: {
                //         show: false,
                //         // formatter: "{b}"
                //         // formatter(params: ProvinceMapData) {
                //         //     console.log("geo地图格式",params);
                //         //     return params.name;
                //         // }
                //     },
                //     emphasis: {
                //         show: true
                //     }
                // },
                itemStyle: {
                    normal: {
                        show: true,
                        borderColor: "rgba(100,149,237,0.6)",
                        borderWidth: 0.5,
                        label: {
                            show: true,
                            // // formatter: "{a}{b}({c})",
                            // formatter: "{b} --- {c}"
                            formatter(params: ProvinceMapData) {
                                console.log("geo地图格式",params);
                                return params.coord;
                            }
                        },
                        areaStyle: {
                            // color: "#1b1b1b"
                            color: "black"
                        }
                    },
                    emphasis: {
                        show: false,
                        borderWidth: 2,
                        borderColor: "#fff",
                        // color: "transparent",
                        color: "yellow",
                    }
                },
                // label: {
                //     show: true,
                //     // formatter: "{a}{b}({c})",
                //     formatter: "{b}",
                //     // formatter(params: ProvinceMapData) {
                //     //     console.log("geo地图格式",params);
                //     //     return params.name;
                //     // }
                //     color: "black",
                // },
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: provincesArray,
            },
            {
                name: "111",
                type: "heatmap",
                coordinateSystem: "geo",
                data: points,
                pointSize: isCenter ? 18 : 9,// 用来显示打点的大小
                blurSize: isCenter ? 40 : 20,
                minAlpha: 1,
                itemStyle: {
                    emphasis: {
                        color: "green",
                        shadowBlur: 10,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };
    // return {
    //     title: {
    //         // show:false,
    //         text: `分布图`,
    //         // x: 'center',
    //         textStyle: {
    //             color: "white",
    //         },
    //     },
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: '{b}<br/>{c}'
    //     },
    //     // legend: {
    //     //     orient: 'vertical',
    //     //     // x: 'left',
    //     //     data: ['配电柜']
    //     // },
    //     geo: {
    //         map: (Pinyin2proviceChinese as any)[mapname]===undefined?mapname:(Pinyin2proviceChinese as any)[mapname],
    //         show: false,
    //         roam: false,
    //         itemStyle: {
    //             normal: {
    //                 areaColor: '#CBCBCB',
    //                 borderColor: 'white'
    //             },
    //             emphasis: {
    //                 areaColor: 'yellow'
    //             }
    //         },
    //         scaleLimit: {
    //             max: 2
    //         }
    //     },
    //     visualMap: [{
    //         show: false,
    //         top: 'top',
    //         min: 0,
    //         max: 11,
    //         seriesIndex: 0,
    //         calculable: true,
    //         inRange: {
    //             color: ['white', 'white', 'white', 'white', 'white']
    //         }
    //     }, {
    //         show: false,
    //         min: 0,
    //         max: 11,
    //         splitNumber: 10,
    //         seriesIndex: 1,
    //         inRange: {
    //             color: ['lightskyblue', 'yellow', 'red']
    //         },
    //         textStyle: {
    //             color: 'blue'
    //         }
    //     },1],
    //     series: [
    //         {
    //             name: '',
    //             type: 'map',
    //             mapType: (Pinyin2proviceChinese as any)[mapname]===undefined?mapname:(Pinyin2proviceChinese as any)[mapname],
    //             roam: false,// 让地图可以拖拽
    //             // hoverable: true,//是否让点击的省份漂浮起来
    //             hoverable: true,
    //             itemStyle: {
    //                 normal: {
    //                     borderColor: 'rgba(100,149,237,0.6)',
    //                     borderWidth: 0.5,
    //                     label: { show: true, formatter: '{a}{b}({c})' },
    //                     areaStyle: {
    //                         color: '#1b1b1b'
    //                     }
    //                 },
    //                 emphasis: {
    //                     borderWidth: 2,
    //                     borderColor: '#fff',
    //                     color: 'transparent',
    //                 }
    //             },
    //             data: provincesArray,
    //         }, {
    //             name: '111',
    //             type: 'heatmap',
    //             coordinateSystem: 'geo',
    //             data: heatData,
    //             pointSize: isCenter ? 18 : 9,// 用来显示打点的大小
    //             blurSize: isCenter ? 40 : 20,
    //             minAlpha: 1.0,
    //             itemStyle: {
    //                 emphasis: {
    //                     color: 'green',
    //                     shadowBlur: 10,
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                 }
    //             }
    //         },
    //     ]
    // };
};

interface MapCenter {
    JD: number;// 代表经度
    WD: number;// 代表纬度
}
export interface Points {
    0: number; // 经度
    1: number; // 纬度
    2: number; // value
}
export interface GeoData {
    center: MapCenter; // 代表显示的中心图
    cityname: string; // 代表当前区域名称
    measurename: MeasureName; // 代表当前的测度名称 比如用电量
    // points: Points[]; // 由经纬度值构成的打点数据
    points: Points[]; // 由经纬度值构成的打点数据
}

function filterPoint(points: Points,geolimiter: ThresholdLimiter ): Points {
    const data: Points = points;
    // if (geolimiter.negative && geolimiter.positive) {
    //     data[2] = data[2] > geolimiter.threshold ? 1:(data[2]< geolimiter.threshold?-1:0);
    // } else if( geolimiter.negative && !geolimiter.positive) {
    //     data[2] = data[2] < geolimiter.threshold ? -1: 0;
    // } else if ( !geolimiter.negative && geolimiter.positive) {
    //     data[2] = data[2] > geolimiter.threshold ? 1: 0;
    // }
    if (data[2] < 0) {
        data[2] = data[2] > geolimiter.range[0] ? 0:1;
    } else {
        data[2] = data[2] < geolimiter.range[1] ? 0:1;
    }
    return data;
}
// mapStyle 见 http://lbsyun.baidu.com/i.php?title=jspopular/guide/custom
// 获取样式 http://lbsyun.baidu.com/custom/
export const getGeoCityOptionConfig = (data: GeoData,geolimiter: ThresholdLimiter) => {
    // test
    // 循环一万遍
    // tslint:disable-next-line:no-unused-expression
    // console.log("打点总数据",data.points.length);
    // for (let i = 0; i < 10; i++) {
    //     // data.points.push(...data.points);
    //     data.points = [...data.points,...data.points];
    //     // console.log("data",data.points);
    // }
    // console.log("data: ", JSON.stringify(data),geolimiter);
    const points: Points[] = data.points.map(
        (point: Points) => {
            const p = filterPoint(point,geolimiter);
            return p as any;
        }
    ).filter(
        (point: Points) => {
            return point[2] !== 0;
        }
    );
    // console.log(JSON.stringify(points));
    // console.log("打点总数据",data.points.length);
    return {
        title: {
            show: false,
            text: `${data.cityname}--${data.measurename}`,
            x: 'center',
        },
        animation: false,
        bmap: {
            center: [data.center.JD, data.center.WD,1],
            zoom: 12,
            roam: true,
            mapStyle: {// 用来设置地图样式
                styleJson: [
                    {
                        featureType: 'land',    // 调整土地颜色
                        elementType: 'geometry',
                        stylers: {
                            color: '#081734'
                        }
                    },
                    {
                        featureType: 'building',  // 调整建筑物颜色
                        elementType: 'geometry',
                        stylers: {
                            color: '#04406F'
                        }
                    },
                    {
                        featureType: 'building',  // 调整建筑物标签是否可视
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'highway',    // 调整高速道路颜色
                        elementType: 'geometry',
                        stylers: {
                            // 'color': '#015B99'
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'highway',    // 调整高速名字是否可视
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'arterial',  // 调整一些干道颜色
                        elementType: 'geometry',
                        stylers: {
                            color: '#003051'
                        }
                    },
                    {
                        featureType: 'arterial',
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'green',
                        elementType: 'geometry',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: {
                            color: '#044161'
                        }
                    },
                    {
                        featureType: 'subway',    // 调整地铁颜色
                        elementType: 'geometry.stroke',
                        stylers: {
                            color: '#003051'
                        }
                    },
                    {
                        featureType: 'subway',
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'railway',
                        elementType: 'geometry',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'railway',
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'all',    // 调整所有的标签的边缘颜色
                        elementType: 'labels.text.stroke',
                        stylers: {
                            color: '#313131'
                        }
                    },
                    {
                        featureType: 'all',    // 调整所有标签的填充颜色
                        elementType: 'labels.text.fill',
                        stylers: {
                            color: '#FFFFFF'
                        }
                    },
                    {
                        featureType: 'manmade',
                        elementType: 'geometry',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'manmade',
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'local',
                        elementType: 'geometry',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'local',
                        elementType: 'labels',
                        stylers: {
                            visibility: 'off'
                        }
                    },
                    {
                        featureType: 'subway',
                        elementType: 'geometry',
                        stylers: {
                            lightness: -65
                        }
                    },
                    {
                        featureType: 'railway',
                        elementType: 'all',
                        stylers: {
                            lightness: -40
                        }
                    },
                    {
                        featureType: 'boundary',
                        elementType: 'geometry',
                        stylers: {
                            color: '#8b8787',
                            weight: '1',
                            lightness: -29
                        }
                    }]
            }
        },
        visualMap: {
            show: false,
            top: 'top',
            min: geolimiter.negative?-1:0,
            max: geolimiter.positive?1:0,
            seriesIndex: 0,
            splitNumber: 5,
            calculable: false,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        geo: {
            scaleLimit: {
                min: 7,
                max: 13
            },
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6,
            zoom: 1,// 设置缩放比例
            scaleLimit: {
                min: 1,
                max: 3
            },// 滚轮放大缩小的极限
        }]
    };
};


// export const GeoTestData: ReturnGeoData = {
//     geomap : {
//         childlabel : [ "哈密市", "阿克苏地区", "自治区直辖县级行政区划", "五家渠市", "阿勒泰地区", "塔城地区", "伊犁哈萨克自治州", "克孜勒苏柯尔克孜自治州", "巴音郭楞蒙古自治州　", "博尔塔拉蒙古自治州", "和田地区", "喀什地区", "吐鲁番地区", "克拉玛依市", "新县市", "巴音郭楞蒙古自治州", "库尔勒市", "新疆生产建设兵团", "新疆石河子市", "新疆石河子市", "新疆石河子市", "阿克苏", "伊梨州", "乌苏市", "昌吉回族自治州", "哈密地区", "哈密市", "乌鲁木齐市" ],
//         childid : [ 99504684, 99556364, 99690544, 99783688, 99787698, 99799398, 99928818, 99928828, 99928838, 99928848, 99928858, 99928868, 99928878, 99928898, 99928908, 99936088, 99936118, 99944698, 99955208, 99955228, 99955248, 99956028, 99959518, 99959538, 99966318, 99974646, 99974666, 99998998 ],
//         // ENT_C : [ 2, 0, 85, 0, 100, 384, 453, 0, 0, 25, 84, 135, 0, 8, 0, 233, 0, 25, 9, 0, 0, 1387, 0, 140, 282, 188, 0, 358 ],
//         coord: [[ 78.90713899545392, 39.6181074998455 ], [ 86.885379, 41.857898 ] ],
//         point : {
//             coord : [ [ 78.90713899545392, 39.6181074998455 ], [ 86.885379, 41.857898 ] ],
//             // xAxis : [ "巴楚县", "博湖县" ],
//             value: [3,5],
//             starttime: 1541917133000
//         }
//     }
// };

export const GeoTestData: ReturnGeoData = {
    geomap: {
        coord: [
            [
                79.93023863721294,
                37.11677449267836
            ],
            [
                79.35499307298277,
                35.683432406369505
            ],
            [
                78.52185038897196,
                37.22831854613492
            ],
            [
                81.99546290327066,
                37.16913018673704
            ]
        ],
        childlabel: [
            "和田市",
            "和田县",
            "皮山县",
            "于田县"
        ],
        childid: [
            99453644,
            99454214,
            99499744,
            99572874
        ],
        point: {
            coord: [
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    79.85239268562731,
                    37.19930747961594
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    81.64328959429525,
                    36.858800418944696
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ],
                [
                    78.28609657848233,
                    37.65183882771291
                ]
            ],
            starttime: 1542608333000,
            value: [
                0,
                -0.5142726505885962,
                -1.717286716800005,
                1.8906110000197003,
                -0.13895110595172822,
                -0.14064378797386493,
                -0.8973405827665909,
                1.725985035374643,
                0.08839460606904642,
                -0.9943798725067494,
                4.3626657191209555,
                1.9540951234588606,
                0.9534608491892734,
                -1.1308598770080809,
                -1.556566787413573,
                2.543841146974278,
                -0.7938709574470322,
                1.4270317789055387,
                -0.28264872437516503,
                -0.2968463673122068,
                1.3070762668960625,
                0.621920208673746,
                -0.8529558992186268,
                1.9637426108647016,
                2.8382536783612813,
                0,
                0.18686180219529944,
                0,
                0.25162716884217506,
                -0.8021230178727433,
                -0.5690345973875922,
                0,
                1.1511225929126134,
                0.21032609137494582,
                0.35383179321997055,
                0,
                0,
                0,
                0,
                1.9846979054668736,
                -1.0734663575813248,
                -0.6808085229076067,
                0,
                -0.41307496280023304,
                -1.2912920122737195,
                0,
                1.131200053043826,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.2554793152190855,
                -0.11230828888314744,
                0,
                -0.17848728502310865,
                0,
                0,
                0,
                -0.1262793733737816
            ]
        }
    },
};
export const testPointsdata: Points[] = [[120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.17336048851423, 30.25679520451022,1], [120.47202515821559, 30.341189531715184,1], [119.69347542418124, 29.784806308327205,1], [119.6786570452171, 30.237914009449668,1], [119.45294992977567, 29.93292208451091,1], [119.86248718077482, 29.90530548715006,1], [120.19353564784423, 30.182168654966326,1], [120.08102754492509, 30.38794437415625,1], [119.95932850948306, 29.893105483053706,1], [120.22908175587412, 30.203099620545917,1], [119.69226135350524, 29.69022439921691,1], [119.13662153039355, 29.88267569217579,1], [118.60654893374912, 29.42929038782219,1], [118.82032312992396, 29.80556209174368,1], [120.34800251418478, 30.284530008604257,1], [120.33464848593115, 30.295997591752446,1], [120.34800251418478, 30.284530008604257,1], [120.34800251418478, 30.284530008604257,1], [120.06507176699921, 30.23646678572685,1], [120.20494607355069, 30.26147752252013,1], [120.13419672453453, 30.29578356557251,1], [120.26567408170436, 30.18671189757294,1], [120.3038232437138, 30.315832099954054,1], [120.20601047125793, 30.292054041825622,1], [120.27212959794666, 30.31632880358734,1], [120.2598306941925, 30.21932560651063,1], [120.15168401633794, 30.29944133457518,1], [120.38908074858399, 30.172893839065598,1], [119.56046186669732, 29.836582478934293,1], [120.13864126711303, 30.312087665557268,1], [120.13860120268728, 30.312038127716075,1], [119.9098876971327, 30.0042413241075,1], [119.59252013423895, 30.0791892421093,1], [120.15588570022521, 30.28115664097888,1], [119.84669198518887, 30.00109433865557,1], [119.85623144010624, 30.055517513275035,1], [120.15118777530643, 30.327453809052958,1], [120.1307240281449, 30.313789354702788,1], [119.78767806759042, 29.806094952920812,1], [120.05718482877421, 30.074791203202174,1], [120.15684420298402, 30.292446991028044,1], [120.17467158516875, 30.268202023671222,1], [120.16295468187656, 30.311219590887116,1], [120.08899292561351, 30.207036169515437,1], [120.15884493257121, 30.34473201035828,1], [119.56046186669732, 29.836582478934293,1], [120.16273690028193, 30.31887160724684,1], [120.11358031124989, 30.330407372307214,1], [120.18759101591158, 30.355397453299442,1], [120.15561062740008, 30.370868007020935,1], [120.37191126567198, 30.30789585428327,1], [119.84669198518887, 30.00109433865557,1], [119.69471196596956, 29.794112986312317,1], [120.35043127267346, 30.319567170311355,1], [120.0434082349138, 30.23078949867785,1], [120.0447424296979, 30.22832595317426,1], [120.3714839606053, 30.34325574251154,1], [120.14927400368865, 30.28467730476137,1], [120.37191126567198, 30.30789585428327,1], [119.84669198518887, 30.00109433865557,1], [120.1865350297377, 30.310287874904382,1], [119.62070230157012, 29.84872449809869,1], [120.27254570857987, 29.70215487827771,1], [120.22409721400611, 30.19373867742201,1], [119.8299563641599, 30.476404757625332,1], [119.73778084052664, 30.525748094734105,1], [120.04058786283295, 30.273766181884294,1], [120.29759189605065, 30.497134551029806,1], [120.12659566485166, 30.419412050565217,1], [120.00312191962306, 30.294317547696483,1], [119.99503501948986, 30.221615327468214,1], [120.18174737417925, 30.39264589935813,1], [120.32353787957001, 30.455619376328013,1], [120.31535462718783, 30.446492225872873,1], [120.31552439345462, 30.411691053451925,1], [120.29296881255712, 30.355214143281405,1], [119.95957573807733, 30.26287409924673,1], [119.87157867084575, 30.381029408230955,1], [119.98206121700946, 30.373645540247473,1], [120.195095963193, 30.479133002396,1], [119.86928229602309, 29.901769158829794,1], [120.37191126567198, 30.30789585428327,1], [120.49749261708472, 30.281587370988902,1], [120.06670507056897, 30.084527722472625,1], [120.37191126567198, 30.30789585428327,1], [120.150789, 30.23452,1], [120.199354, 30.268413,1], [119.701125, 29.79668,1], [120.232978, 30.195768,1], [120.186838, 30.270089,1], [120.289789, 30.116917,1], [120.1017974633502, 30.24847973954527,1], [120.344512, 30.197501,1], [120.396904, 30.172696,1], [120.098738, 30.23379,1], [120.104592, 30.245429,1], [120.303823, 30.315832,1], [120.121063, 30.196564,1], [120.172979, 30.245416,1], [120.161621, 30.243084,1], [120.171349, 30.262982,1], [119.560462, 29.836582,1], [120.167417, 30.244115,1], [120.172006, 30.256432,1], [120.137155, 30.255242,1], [120.463363, 30.181099,1], [120.134485, 30.238538,1], [120.095693, 30.272918,1], [120.169446, 30.27443,1], [120.093564, 30.273288,1], [120.345044, 30.326326,1], [120.135157, 30.23353,1], [120.389081, 30.172894,1], [120.389081, 30.172894,1], [120.13597, 30.235894,1], [120.154433, 30.226869,1], [120.168373, 30.251349,1], [120.202227, 30.229521,1], [120.19237, 30.187588,1], [120.088993, 30.207036,1], [120.219375, 30.259244,1], [120.088993, 30.207036,1], [120.177214, 30.260576,1], [120.27882, 30.160032,1], [120.150108, 30.261863,1], [120.088993, 30.207036,1], [120.165256, 30.265046,1], [119.350295, 30.207684,1], [119.560462, 29.836582,1], [120.549824, 30.32274,1], [120.219375, 30.259244,1], [120.389081, 30.172894,1], [119.656454, 29.715158,1], [119.400521, 29.503348,1], [119.269524, 29.436531,1], [119.318086, 29.514097,1], [119.190782, 29.337977,1], [119.046197, 29.329441,1], [119.304427, 29.294813,1], [119.315628, 29.57262,1], [119.442169, 29.571219,1], [119.518536, 29.446392,1], [119.580279, 29.542594,1], [119.574179, 29.718491,1], [119.237547, 29.365926,1], [119.510677, 29.547497,1], [119.291479, 29.484231,1], [120.389081, 30.172894,1], [119.551871, 29.622621,1], [119.701125, 29.79668,1], [120.139998, 30.243012,1], [120.149286, 30.272858,1], [120.134775, 30.259399,1], [120.31569, 30.153924,1], [120.298053, 30.174167,1], [120.283702, 30.186828,1], [120.389081, 30.172894,1], [119.560462, 29.836582,1], [120.157011, 30.274657,1], [120.15167, 30.233288,1], [120.168186, 30.170358,1], [120.177651, 30.245608,1], [120.177651, 30.245518,1], [120.168967, 30.248153,1], [120.170872, 30.253091,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.176987, 30.253596,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.184325, 30.244426,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.168967, 30.248153,1], [120.208303, 30.263223,1], [120.272943, 30.317657,1], [120.186535, 30.310288,1], [120.143146, 30.289985,1], [120.20509658374057, 30.24122545035808,1], [120.303823, 30.315832,1], [120.175843, 30.188854,1], [120.170155, 30.264409,1], [120.3038232437138, 30.315832099954054,1]];


export interface GeoMapPictureFeaturePropertiesFormat {
    childNum: number;
    cp: [number, number];
    id: string;
    name: string;
}

export interface GeoMapPictureFeatureFormat {
    type: string;
    geometry: any;
    properties: GeoMapPictureFeaturePropertiesFormat;
}

export interface GeoMapPictureFormat {
    cp: [number, number];
    features: GeoMapPictureFeatureFormat[];
    size: string;
    type: string;
}
