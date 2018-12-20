import { ProvinceMapData ,Points } from '@/components/options/GeoOptions';
enum PositionClass {
    LeftTop = "left-top",
    RightTop = "right-top",
    LeftMiddle = "left-middle",
    RightMiddle = "right-middle",
    Center = "center",
    LeftBottom = "left-bottom",
    RightBottom = "right-bottom",
    None = "None",
    Drawer = "drawer",
}
enum Dimension {
    box = "box",
    trend = "trend",
    top = "top",
    timeline = "timeline",
    heatmap = "heatmap",
    geomap = "geomap",
    none = "none"
}
interface PostParams {
    entity: string;
    starttime: string;
    endtime: string;
    entitynums: number;
    scale: number;
    winlen: number;
    dimension: Dimension;
    refreshfeq: number;
    level: number;
    name: string;
    postInterval: number;
}
// function Test (firstName:String, lastName:String) {
//     let firstName2:String = firstName
//     let lastName2:String = lastName
// }

// function add(a:PositionClass){
//     console.log(a)
// }
// add(PositionClass.LeftBottom)
interface GeoPointDat {
    coord: Array<[number,number]>;
    starttime: number;
    value: number[];
}

interface GeoData {
    coord: Array<[number,number]>;
    childlabel: string[];
    childid: number[];
    point: GeoPointDat;
}
/**
 * 格式如 {
 *  geomap：{
 *      coord: Array<[number,number]>;
 *      childlabel: string[];
 *      childid: number[];
 *      point: {
 *          coord: Array<[number,number]>;
 *          starttime: number;
 *          value: number[];
 *      };
 *    }
 * }
 */
interface ReturnGeoData {
    geomap: GeoData;
}
interface GeoTransData {
    provinceArray: ProvinceMapData[];
    points: Points[];
}
interface ChartStorePool<T> {
    [name: number]: T;
}

enum ChartLibrary {
    echart = "echart",
    highchart = "highchart",
}
enum MeasureName {
    Elec = "Elec",
}



export {
    PositionClass,Dimension,PostParams,ChartLibrary,MeasureName,ReturnGeoData,GeoTransData,ChartStorePool
};
