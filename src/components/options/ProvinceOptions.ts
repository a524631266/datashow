

// tslint:disable-next-line:no-unused-expression
export const provincedata = {
    title: {
        show: false,
        text: "新疆 安装量 分布图",
        x: "center",
        textStyle: { color: "yellow" }
    },
    tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["配电柜"]
    },
    toolbox: { feature: { } },
    geo: {
        map: "新疆维吾尔自治区",
        show: false,
        roam: false,
        itemStyle: {
            normal: {
                areaColor: "#CBCBCB",
                borderColor: "white" },
                emphasis: { areaColor: "yellow" } },
                scaleLimit: { max: 2 }
    },
    visualMap: [
        {
            show: false,
            top: "top",
            min: 0,
            max: 11,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ["white", "white", "white", "white", "white"]
            }
        },
        {
            show: false,
            min: 0,
            max: 11,
            splitNumber: 10,
            seriesIndex: 1,
            inRange: {
                color: ["lightskyblue", "yellow", "red"]
            },
            textStyle: {
                color: "blue" }
        }],
    series: [
        {
            name: "",
            type: "map",
            mapType: "新疆维吾尔自治区",
            roam: false,
            hoverable: true,
            itemStyle: {
                normal: {
                    borderColor: "rgba(100,149,237,0.6)",
                    borderWidth: 0.5,
                    label: {
                        show: true,
                        formatter: "{a}{b}({c})"
                    },
                    areaStyle: {
                        color: "#1b1b1b"
                    }
                },
                emphasis: {
                    borderWidth: 2,
                    borderColor: "#fff",
                    color: "transparent"
                }
            },
            data: [{id:99504684,name:"哈密市",value:2,coord:[78.90713899545392,39.6181074998455]},{id:99556364,name:"阿克苏地区",value:0,coord:[86.885379,41.857898]},{id:99690544,name:"自治区直辖县级行政区划",value:85},{id:99783688,name:"五家渠市",value:0},{id:99787698,name:"阿勒泰地区",value:100},{id:99799398,name:"塔城地区",value:384},{id:99928818,name:"伊犁哈萨克自治州",value:453},{id:99928828,name:"克孜勒苏柯尔克孜自治州",value:0},{id:99928838,name:"巴音郭楞蒙古自治州　",value:0},{id:99928848,name:"博尔塔拉蒙古自治州",value:25},{id:99928858,name:"和田地区",value:84},{id:99928868,name:"喀什地区",value:135},{id:99928878,name:"吐鲁番地区",value:0},{id:99928898,name:"克拉玛依市",value:8},{id:99928908,name:"新县市",value:0},{id:99936088,name:"巴音郭楞蒙古自治州",value:233},{id:99936118,name:"库尔勒市",value:0},{id:99944698,name:"新疆生产建设兵团",value:25},{id:99955208,name:"新疆石河子市",value:9},{id:99955228,name:"新疆石河子市",value:0},{id:99955248,name:"新疆石河子市",value:0},{id:99956028,name:"阿克苏",value:1387},{id:99959518,name:"伊梨州",value:0},{id:99959538,name:"乌苏市",value:140},{id:99966318,name:"昌吉回族自治州",value:282},{id:99974646,name:"哈密地区",value:188},{id:99974666,name:"哈密市",value:0},{id:99998998,name:"乌鲁木齐市",value:358}]
        },
        {
            name: "111",
            type: "heatmap",
            coordinateSystem: "geo",
            data:[[78.90713899545392,39.6181074998455,10],[86.885379,41.857898,7.777777777777778]],
            pointSize: 18,
            blurSize: 40,
            minAlpha: 1,
            itemStyle: {
                emphasis: {
                    color: "green",
                    shadowBlur: 10,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
};
