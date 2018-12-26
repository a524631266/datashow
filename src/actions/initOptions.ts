import { PostParams ,Dimension} from "@/types";

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
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.box,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord
};
const InitHeatMapUrlProps: PostParams = {
    entity,
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord
};

const InitTimeLineUrlProps: PostParams = {
    entity: "",
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord
};

const InitTopUrlProps: PostParams = {
    entity,
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord
};
const InitTrendUrlProps: PostParams = {
    entity,
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 15,
    isLeaf: false,
    coord
};
const InitGeomapUrlProps: PostParams = {
    entity,
    starttime: "2018-12-15 00:00:00",
    endtime: "2018-12-18 00:00:00",
    entitynums: 20,
    scale: 60 * 60 * 24,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    showinterval: 1000 * 1,
    isLeaf: false,
    coord
};

export {
    InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
    InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps
};
