enum PositionClass {
    LeftTop = "left-top",
    RightTop = "right-top",
    LeftMiddle = "left-middle",
    RightMiddle = "right-middle",
    Center = "center",
    LeftBottom = "left-bottom",
    RightBottom = "right-bottom",
    None = "None",
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
}
// function Test (firstName:String, lastName:String) {
//     let firstName2:String = firstName
//     let lastName2:String = lastName
// }

// function add(a:PositionClass){
//     console.log(a)
// }
// add(PositionClass.LeftBottom)

export {
    PositionClass,Dimension,PostParams
};
