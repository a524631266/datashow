import { Dimension } from "@/types/index";
const InitBoxUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.box,
    refreshfeq: 15 * 60 * 1000,
};
const InitHeatMapUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.heatmap,
    refreshfeq: 15 * 60 * 1000,
};
const InitTimeLineUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.timeline,
    refreshfeq: 15 * 60 * 1000,
};
const InitTopUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.top,
    refreshfeq: 15 * 60 * 1000,
};
const InitTrendUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.trend,
    refreshfeq: 15 * 60 * 1000,
};
const InitGeomapUrlProps = {
    entity: "99999998",
    starttime: "2018-01-01 00:00:00",
    endtime: "2018-01-02 00:00:00",
    entitynums: 20,
    scale: 60 * 60,
    winlen: 30 * 24 * 60 * 60,
    dimension: Dimension.geomap,
    refreshfeq: 15 * 60 * 1000,
};
export { InitBoxUrlProps, InitHeatMapUrlProps, InitTimeLineUrlProps, InitTopUrlProps, InitTrendUrlProps, InitGeomapUrlProps };
//# sourceMappingURL=initOptions.js.map