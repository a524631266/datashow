import Highcharts from 'highcharts';
import PubSub from 'pubsub-js';
export const objectlist = [{ id: "881675", value: 3.0238276701684295 }, { id: "881635", value: 2.0785377819430155 }, { id: "881645", value: 1.8775564380364207 }, { id: "881655", value: 1.8453788029667204 }, { id: "881615", value: 0.015448770251847033 }, { id: "881685", value: -0.1926384253430764 }, { id: "982235", value: -0.9999399080325635 }];
export const drawTopOptions = (objectlist, title, redrawEntityFunc, openInfo) => {
    // objectlist [{id:123134,value:12354,}...]
    const datalist = [];
    // tslint:disable-next-line:variable-name
    const positive_id = [];
    const datalist2 = [];
    // tslint:disable-next-line:variable-name
    const negative_id = [];
    let minvalue = 0;
    // tslint:disable-next-line:forin
    for (const i in objectlist) {
        if (objectlist[i].value >= 0) {
            datalist.push([objectlist[i].name, objectlist[i].value]);
            positive_id.push(objectlist[i].id);
        }
        else {
            datalist2.splice(0, 0, [objectlist[i].name, objectlist[i].value]);
            negative_id.splice(0, 0, objectlist[i].id);
        }
        if (objectlist[i].value < minvalue) {
            minvalue = objectlist[i].value;
        }
    }
    return getTwoDirectBarOption(positive_id, datalist, negative_id, datalist2, title, redrawEntityFunc, openInfo);
};
// tslint:disable-next-line:variable-name
function getTwoDirectBarOption(positive_id, datalist, negative_id, datalist2, title, redrawEntityFunc, openInfo) {
    return {
        chart: {
            type: 'bar',
            panKey: 'ctrl',
            // zoomType : 'x',
            backgroundColor: 'rgba(0,0,0,0)',
            events: {
                load() {
                    const seriesGroup = this.seriesGroup;
                    Highcharts.addEvent(seriesGroup.element, 'mouseover', (e) => {
                        // tslint:disable-next-line:one-variable-per-declaration
                        const clientX = e.clientX, clientY = e.clientY;
                        console.log("topevent", e.target.point);
                        openInfo(e.target.point.category, e.target.point.name, clientX, clientY, e.target.getBoundingClientRect());
                        // infoObject.createNewInfoDiv(e.target.point.name,e.target.point.name,clientX,clientY,redrawEntityFunc,openInfo)
                    });
                    Highcharts.addEvent(seriesGroup.element, 'mouseleave', (e) => {
                        // let timeoutid = setTimeout(()=>{infoObject.hiddenInfo()},300)
                        // infoObject.setTimeoutId(timeoutid);
                        PubSub.publish("hidetooltip", "none");
                    });
                },
                render() {
                    // infoObject.hiddenInfo()
                }
            }
        },
        title: {
            // show: false,
            // text: title,
            text: null,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: "white"
            }
        },
        xAxis: [{
                visible: false,
                // 负的
                categories: negative_id,
                reversed: true,
                labels: {
                    step: 1,
                    style: {
                        color: "white"
                    },
                    formatter() {
                        console.log(this);
                        if (this.value === this.pos) {
                            return "";
                        }
                        else {
                            return JSON.stringify(this.value).slice(1, 4) + "...";
                        }
                    },
                },
                gridLineWidth: 0
            }, {
                visible: false,
                opposite: true,
                reversed: true,
                categories: positive_id,
                linkedTo: 0,
                // lineColor:
                labels: {
                    step: 1,
                    style: {
                        color: "white"
                    },
                    formatter() {
                        console.log(this);
                        if (this.value === this.pos) {
                            return "";
                        }
                        else {
                            return JSON.stringify(this.value).slice(1, 4) + "...";
                        }
                    },
                },
                gridLineWidth: 0
            }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                // formatter: function () {
                //   // console.log(this)
                //   return this.value
                // },
                style: {
                    color: "white"
                }
            },
            gridLineWidth: 0
            // min: -4000000,
            // max: 4000000
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        tooltip: {
            enabled: false,
            formatter(e) {
                // console.log("random",index)
                // console.log(e,this,$(e.chart.renderTo).css("left"),$(e.chart.renderTo).css("top"))
                // let point_x = parseFloat($(e.chart.renderTo).css("left"))+this.tooltipPos[0]
                // let point_y = parseFloat($(e.chart.renderTo).css("top"))+this.point.shapeArgs.y
                // infoObject.createNewInfoDiv(this.key,"enttiname 配电柜名称",point_x,point_y,redrawEntityFunc,openInfo)
                // console.log(this)
                // return '<b> entity:' + this.key + '</b><br/>' +
                //   '值: ' + Highcharts.numberFormat(this.point.y, 0);
                return null;
            }
        },
        // plotOptions: {
        //   bar: {
        //     dataLabels: {
        //       align:"center",
        //       enabled: true,
        //       // allowOverlap: true ,// 允许数据标签重叠
        //       formatter: function() {
        //         console.log(this)
        //         //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
        //         return this.key
        //         }
        //     }
        //   }
        // },
        legend: {
            enabled: false,
            align: 'center',
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            borderWidth: 0,
            itemStyle: {
                color: "#C1FFC1"
            },
        },
        series: [{
                name: '负',
                data: datalist2,
                color: "lightgreen",
                dataLabels: {
                    align: "right",
                    enabled: true,
                    // allowOverlap: true ,// 允许数据标签重叠
                    formatter() {
                        // console.log(this)
                        // this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
                        return "" + this.key;
                        // +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
                    }
                }
            }, {
                name: '正',
                data: datalist,
                color: "red",
                dataLabels: {
                    align: "left",
                    enabled: true,
                    // allowOverlap: true ,// 允许数据标签重叠
                    formatter() {
                        // console.log(this)
                        // this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
                        return "" + this.key;
                        // +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
                    }
                }
            }],
        credits: {
            enabled: false
        }
    };
}
//# sourceMappingURL=TopOptions.js.map