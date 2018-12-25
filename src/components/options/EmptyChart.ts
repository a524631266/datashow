import { updatestate } from '@/types/updateState';

export const highchartEmptyOption = () => {
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
        change: updatestate.redraw,
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
