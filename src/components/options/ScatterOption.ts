// Prepare the data
const data: any = [];
// const n = 1000000;
const n = 10000;
for (let i = 0; i < n; i += 1) {
    data.push([
        // tslint:disable-next-line:radix
        1548141286000 + parseInt(Math.pow(Math.random(), 2) * 24 * 60 *60 * 1000+ ""),
        Math.pow(Math.random(), 2) * 100
    ]);
}
console.log("data",data);
export const getOption = (data2: any,title: string) => {
    return {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'rgba(0,0,0,0)',
            // height: '100%'
        },
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },
        xAxis: {
            type: 'datetime',
            // min: 0,
            // max: 100,
            gridLineWidth: 0,
            labels: {
                style:{
                    color:"white"
                },
            },
        },
        yAxis: {
            // Renders faster when we don't have to compute min and max
            min: 0,
            max: 100,
            minPadding: 0,
            maxPadding: 0,
            title: {
                text: null
            },
            labels: {
                style:{
                    color:"white"
                },
            },
            gridLineWidth: 0
        },
        title: {
            text: null,
        },
        legend : {
            enabled: true,
            align : 'center',
            verticalAlign : 'bottom',
            y : 0,
            floating : false,
            itemStyle: {
              color: "#C1FFC1",
              fontWeight: 'bold'
            },
            backgroundColor: '#303030',
            // borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 0,
        },
        series: [{
            name:"电流总量",
            type: 'scatter',
            color: 'white',
            data,
            marker: {
                radius: 0.2
            },
            tooltip: {
                followPointer: false,
                pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
            }
        }],
        credits: {
            enabled: false
        }
    };
};
