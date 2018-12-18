var PositionClass;
(function (PositionClass) {
    PositionClass["LeftTop"] = "left-top";
    PositionClass["RightTop"] = "right-top";
    PositionClass["LeftMiddle"] = "left-middle";
    PositionClass["RightMiddle"] = "right-middle";
    PositionClass["Center"] = "center";
    PositionClass["LeftBottom"] = "left-bottom";
    PositionClass["RightBottom"] = "right-bottom";
    PositionClass["None"] = "None";
    PositionClass["Drawer"] = "drawer";
})(PositionClass || (PositionClass = {}));
var Dimension;
(function (Dimension) {
    Dimension["box"] = "box";
    Dimension["trend"] = "trend";
    Dimension["top"] = "top";
    Dimension["timeline"] = "timeline";
    Dimension["heatmap"] = "heatmap";
    Dimension["geomap"] = "geomap";
    Dimension["none"] = "none";
})(Dimension || (Dimension = {}));
// function Test (firstName:String, lastName:String) {
//     let firstName2:String = firstName
//     let lastName2:String = lastName
// }
// function add(a:PositionClass){
//     console.log(a)
// }
// add(PositionClass.LeftBottom)
var ChartType;
(function (ChartType) {
    ChartType["echart"] = "echart";
    ChartType["highchart"] = "highchart";
})(ChartType || (ChartType = {}));
var MeasureName;
(function (MeasureName) {
    MeasureName["Elec"] = "Elec";
})(MeasureName || (MeasureName = {}));
export { PositionClass, Dimension, ChartType, MeasureName };
//# sourceMappingURL=index.js.map