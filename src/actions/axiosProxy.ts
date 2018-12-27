import { PostParams } from '@/types';
import Axios,{AxiosPromise, CancelTokenSource} from "axios";
const prev = process.env.NODE_ENV === "development"? "/xinjiang": "";

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
    const {entity,starttime,endtime,entitynums,scale,winlen} = urlparas;
    const promise = Axios({
        method:"get",
        url:`${prev}/elecnum/${postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
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
