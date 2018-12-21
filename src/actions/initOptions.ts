import { PostParams ,Dimension} from "@/types";

// export const entity = "99998999";
// export const level = 2;
// export const name = "新疆维吾尔自治区";

// 241
// export const entity = "99999758";
// export const level = 4;
// export const name = "西湖区";
export const entity = "99928858";
export const level = 3;
export const name = "河田地区";

const InitBoxUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.box,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 15
};
const InitHeatMapUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 15
};

const InitTimeLineUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 15
};

const InitTopUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 15
};
const InitTrendUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 15
};
const InitGeomapUrlProps: PostParams = {
    entity,
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: 15 * 60 * 1000,
    level,
    name,
    postInterval: 1000 * 1 * 1,
};

export {
    InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
    InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps
};
