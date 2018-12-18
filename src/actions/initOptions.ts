import { PostParams ,Dimension} from "@/types";
const InitBoxUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.box,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 15
};
const InitHeatMapUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 15
};

const InitTimeLineUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 15
};

const InitTopUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 15
};
const InitTrendUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 15
};
const InitGeomapUrlProps: PostParams = {
    entity: "99998999",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: 15 * 60 * 1000,
    level:2,
    name: "新疆维吾尔自治区",
    postInterval: 1000 * 1
};

export {
    InitBoxUrlProps,InitHeatMapUrlProps,InitTimeLineUrlProps,
    InitTopUrlProps,InitTrendUrlProps,InitGeomapUrlProps
};
