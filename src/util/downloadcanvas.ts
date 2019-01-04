import $ from 'jquery';
export const downloadchart = (myChart: any)=> {
    const img = new Image();
    img.src = myChart.getDataURL({
        pixelRatio: 1,
        // backgroundColor: '#fff',
        // 导出的格式，可选 png, jpeg
        type: "jpeg",
    });
    const triggerDownload = $("<a></a>").attr("href", img.src).attr("download", "echartsImg.png");
    triggerDownload[0].click();
    return img;
};
