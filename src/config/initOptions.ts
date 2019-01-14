import { PostParams ,Dimension} from "@/types";
import moment,{ DurationInputObject, Moment } from "moment";
const starttime = moment().subtract(3,"d").format("YYYY-MM-DD HH:mm:ss");
const endtime = moment().format("YYYY-MM-DD HH:mm:ss");
export const entity = "";
export const level = 2;
export const name = "新疆维吾尔自治区";
export const coord: [number,number] = [0,0];
export const onehour = 3600;
export const fifteenminute = 15 * 60;
export const oneday = 60 * 60 * 24;
// 241
// export const entity = "99999758";
// export const level = 4;
// export const name = "西湖区";


// export const entity = "99928858";
// export const level = 3;
// export const name = "河田地区";

const InitBoxUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: fifteenminute,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.box,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [-3,3]
        // negativethreshold:0,
        // positivethreshold: 0,
    }
};
const InitHeatMapUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: onehour,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: fifteenminute * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [0,0]
    },
    pageid : 1,
    pagesize : 20,
};

const InitTimeLineUrlProps: PostParams = {
    entity: "",
    starttime,
    endtime,
    entitynums: 20,
    scale: fifteenminute,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: fifteenminute * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [-3,3]
    }
};

const InitTopUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: fifteenminute,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: fifteenminute * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [-3,3]
    }
};
const InitTrendUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: fifteenminute,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: fifteenminute * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [-3,3]
    }
};
const InitGeomapUrlProps: PostParams = {
    entity,
    starttime:moment().subtract(10,"d").format("YYYY-MM-DD HH:mm:ss"),
    endtime,
    entitynums: 20,
    scale: oneday,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: fifteenminute * 1000,
    level,
    name,
    showinterval: 1000 * 1,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true,
        range: [-3,3]
    }
};

export {
    InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
    InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps
};
