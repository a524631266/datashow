import { updatestate } from '@/types/updateState';
/**
 * 初始化的时候不是redraw
 * @param redraw true/false
 */
export const highchartEmptyOption = (redraw: string | undefined) => {
    return {
        chart: {
            type: 'line',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        title: {
            text: ''
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        series: [],
        credits: {
            enabled: false
        },
        change: updatestate.empty, // redraw?updatestate.redraw:undefined,
    };
};

export const EchartEmptyOption = () => {
    return {
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        series: [],
        credits: {
            enabled: false
        },
        change: updatestate.redraw
    };
};
