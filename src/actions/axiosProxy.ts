import { PostParams } from '@/types';
import Axios,{AxiosPromise, CancelTokenSource} from "axios";
import { Component, Vue } from 'vue-property-decorator';
// 新疆接口
export const projectname = "anomaly";
const prev = process.env.NODE_ENV === "development"? "/xinjiang": "/" + projectname;
const prev2 = process.env.NODE_ENV === "development"? "/tree": "/" + projectname;
export const baseUrl = "";
export const websocketurlhost = process.env.NODE_ENV === "development"? `192.168.10.63:8088/`: `192.168.10.63:8088${baseUrl}`;
export enum PostPath {
    singleLineChart = "singleLineChart",
    singleBoxChart = "singleBoxChart",
    regionBoxChart = "regionBoxChart",
    regionLineChart = "regionLineChart",
    exceptionOutput = "exceptionOutput",
    heatmap = "heatmap",
    topChart = "topChart",
    geomap = "geomap",
}

/**
 * 获取数据的promise 返回T目标的格式或者返回 "err"string(代表返回错误)
 * @param urlparas 参数列表 {postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
 * @param postpath 路径包括 singleLineChart , singleBoxChart, regionBoxChart, regionLineChart, exceptionOutput, heatmap, topChart, geomap
 * @param callback 处理函数 R 为后端return的数据格式,T 为目标需要转化成的格式(画图专用)
 */
export function getDataPromise<R,T>(urlparas: PostParams,postpath: PostPath,cancelTokenSource: CancelTokenSource,callback: (data: R)=> T): Promise< string | T> {
    const {entity,starttime,endtime,entitynums,scale,winlen,pageid,pagesize,thresholder:{range}} = urlparas;
    let posturl = "";
    if(pageid) {
        posturl = `${prev}/elecnum/${postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}&pageid=${pageid}&pagesize=${pagesize}&neger=${range[0]}&poser=${range[1]}`;
    } else {
        posturl = `${prev}/elecnum/${postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}&neger=${range[0]}&poser=${range[1]}`;
    }
    const promise = Axios({
        baseURL: baseUrl,
        method: "get",
        url: posturl,
        cancelToken: cancelTokenSource.token
    }).then(
        (result) => {
            // return data;
            const data: T = callback(result.data);
            return data;
        }
    ).catch(
        (err) => {
            console.log("err",err);
            // const data: T = callback(data);
            return "err";
        }
    );
    return promise;
}


export function getTreeNode(entity: string) {
    const posturl = `${prev2}/case/entity?id=${entity}`;
    const axiospromise = Axios(
        {
        baseURL: baseUrl,
        method:"get",
        url:posturl,
        }
    ).then(
        (result) => {
            return result;
        }
    );
    return axiospromise;
}



interface InitChart {
    entity: string;
    name: string;
    level: number;
    isLeaf: boolean;
    coord: [number, number];
    entitynums: number;
}
export interface ChildrenValue {
    id: string ;
    pId: number;
    name: string;
    key: string;
    title: string;
    mapname: string;
    icon: string;
    level: number;
    coord: [number,number];
    isLeaf: boolean;
    entityNum: number;
    isEntity: boolean;
    label: string;
    value: string;
    lnglat: string;
    cityLnglat: string;
    districtLnglat: string;
    slots: {icon: string};
    hover: boolean;
    scopedSlots: {title: string};
    on: {
        [name: string]: (e: any)=>void
    };
}
/**
 * 获取初始化数据，初始化图
 * @param pid 父亲id
 * @param entity 本id
 * @param pidlevel 父亲id等级
 */
export function insertInitData(pid: string,entity: string,pidlevel: number,vue: Vue) {
    return getTreeNode(pid).then(
        (result)=> {
            // console.log("result",result);
            const data: InitChart = {} as any;
            result.data.some(
                (value: ChildrenValue) => {
                    if((value.id+"") === entity) {
                        data.entity = value.id + "";
                        data.name = value.name;
                        data.entitynums = value.entityNum;
                        data.isLeaf = value.isEntity;
                        data.level = pidlevel + 1;
                        data.coord = value.coord?value.coord
                                        :value.lnglat?[parseFloat(value.lnglat.split(",")[0]),parseFloat(value.lnglat.split(",")[1])]
                                        :value.cityLnglat?[parseFloat(value.cityLnglat.split(",")[0]),parseFloat(value.cityLnglat.split(",")[1])]
                                        :value.districtLnglat?[parseFloat(value.districtLnglat.split(",")[0]),parseFloat(value.districtLnglat.split(",")[1])]
                                        :[0,0];
                    }
                    return (value.id+"") === entity;
                }
            );
            // 此时会触发vue组件的entity ，封装到这里
            (vue as any).postparms.name = data.name;
            (vue as any).postparms.level = data.level;
            (vue as any).postparms.isLeaf = data.isLeaf;
            (vue as any).postparms.entitynums = data.entitynums;
            (vue as any).postparms.coord = data.coord;
            (vue as any).postparms.entity = data.entity;
            // console.log("data",data);
            return data;
        }
    );
}
