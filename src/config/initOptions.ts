import { PostParams ,Dimension} from "@/types";
import moment,{ DurationInputObject, Moment } from "moment";
const starttime = moment().subtract(3,"d").format("YYYY-MM-DD HH:mm:ss");
const endtime = moment().format("YYYY-MM-DD HH:mm:ss");
export const entity = "";
export const level = 2;
export const name = "新疆维吾尔自治区";
export const coord: [number,number] = [0,0];
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
    scale: 60 * 60,
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
        positive: true
    }
};
const InitHeatMapUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true
    }
};

const InitTimeLineUrlProps: PostParams = {
    entity: "",
    starttime,
    endtime,
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true
    }
};

const InitTopUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true
    }
};
const InitTrendUrlProps: PostParams = {
    entity,
    starttime,
    endtime,
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true
    }
};
const InitGeomapUrlProps: PostParams = {
    entity,
    starttime:moment().subtract(10,"d").format("YYYY-MM-DD HH:mm:ss"),
    endtime,
    entitynums: 20,
    scale: 60 * 60 * 24,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 1,
    isLeaf: false,
    coord,
    thresholder: {
        threshold : 0,
        negative: true,
        positive: true
    }
};

export {
    InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
    InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps
};
