const chartspool: any = [];

window.onresize = ()=> {
    chartspool.forEach(
        (chartInstance: any) => {
            chartInstance.resize();
        }
    );
};
(window as any).pool = chartspool;
export {
    chartspool
};
