import Axios from "axios";
const prev = process.env.NODE_ENV === "development" ? "/xinjiang" : "";
export var PostPath;
(function (PostPath) {
    PostPath["singleLineChart"] = "singleLineChart";
    PostPath["singleBoxChart"] = "singleBoxChart";
    PostPath["regionBoxChart"] = "regionBoxChart";
    PostPath["regionLineChart"] = "regionLineChart";
    PostPath["exceptionOutput"] = "exceptionOutput";
    PostPath["heatmap"] = "heatmap";
    PostPath["topChart"] = "topChart";
    PostPath["geomap"] = "geomap";
})(PostPath || (PostPath = {}));
/**
 * 获取数据的promise 返回T目标的格式或者返回 "err"string(代表返回错误)
 * @param urlparas 参数列表 {postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
 * @param postpath 路径包括 singleLineChart , singleBoxChart, regionBoxChart, regionLineChart, exceptionOutput, heatmap, topChart, geomap
 * @param callback 处理函数 R 为后端return的数据格式,T 为目标需要转化成的格式(画图专用)
 */
export function getDataPromise(urlparas, postpath, cancelTokenSource, callback) {
    const { entity, starttime, endtime, entitynums, scale, winlen } = urlparas;
    const promise = Axios({
        method: "get",
        url: `${prev}/elecnum/${postpath}?entity=${entity}&start=${starttime}&end=${endtime}&entitynums=${entitynums}&scale=${scale}&winlen=${winlen}`,
        cancelToken: cancelTokenSource.token
    }).then((result) => {
        // return data;
        const data = callback(result.data);
        return data;
    }).catch((err) => {
        console.log("err", err);
        // const data: T = callback(data);
        return "err";
    });
    return promise;
}
//# sourceMappingURL=axiosProxy.js.map