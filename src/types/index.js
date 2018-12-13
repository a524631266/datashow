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
export { PositionClass, Dimension };
//# sourceMappingURL=index.js.map