import Highcharts from 'highcharts';
// tslint:disable-next-line:import-spacing
import "./xrange";
// import "./highcharts-more";
export const lineoptions = () => {
    return {
        title: {
            text: '2010 ~ 2016 年太阳能行业就业人员发展情况',
        },
        subtitle: {
            text: '数据来源：thesolarfoundation.com',
        },
        yAxis: {
            title: {
                text: '就业人数',
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                pointStart: 2010,
            },
        },
        series: [{
                name: '安装，实施人员',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            }, {
                name: '工人',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
            }, {
                name: '销售',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
            }, {
                name: '项目开发',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
            }, {
                name: '其他',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
            }],
        responsive: {
            rules: [{
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                        },
                    },
                }],
        },
    };
};
export const inout2 = [
    { starttime: 1542681155000, endtime: 1542695555000, id: '881675', type: '减少', value: -16 },
    { starttime: 1542798935000, endtime: 1542807515000, id: '881675', type: '减少', value: -21 },
    { starttime: 1542856235000, endtime: 1542863435000, id: '881675', type: '增加', value: 39 },
    { starttime: 1542874235000, endtime: 1542880805000, id: '881675', type: '增加', value: 15 },
    { starttime: 1542962716000, endtime: 1542970568000, id: '881675', type: '增加', value: 32 },
    { starttime: 1543024800000, endtime: 1543034760000, id: '881675', type: '增加', value: 8 },
    { starttime: 1543058580000, endtime: 1543067460000, id: '881675', type: '增加', value: 47 },
    { starttime: 1543140000000, endtime: 1543154400000, id: '881675', type: '减少', value: -18 },
    { starttime: 1543201200000, endtime: 1543212000000, id: '881675', type: '增加', value: 10 },
    { starttime: 1543302000000, endtime: 1543323600000, id: '881675', type: '减少', value: -26 },
    { starttime: 1543374000000, endtime: 1543392000000, id: '881675', type: '增加', value: 13 },
    { starttime: 1543460400000, endtime: 1543474800000, id: '881675', type: '增加', value: 29 },
];
export const inout = [
    {
        endtime: 1541804400000,
        starttime: 1541800800000,
        id: "1329545",
        type: "减少",
        value: -0.6548651978004244
    }, {
        endtime: 1541811600000,
        starttime: 1541808000000,
        id: "1329545",
        type: "减少",
        value: -0.5009217388598228
    }, {
        endtime: 1541815200000,
        starttime: 1541811600000,
        id: "1329545",
        type: "减少",
        value: -0.6451178265412453
    }, {
        endtime: 1541826000000,
        starttime: 1541822400000,
        id: "1329545",
        type: "减少",
        value: -0.6268503277421779
    }, {
        endtime: 1541844000000,
        starttime: 1541840400000,
        id: "1329545",
        type: "减少",
        value: -0.6175816068554211
    }, {
        endtime: 1541851200000,
        starttime: 1541847600000,
        id: "1329545",
        type: "减少",
        value: -0.554266609724888
    }, {
        endtime: 1541854800000,
        starttime: 1541851200000,
        id: "1329545",
        type: "减少",
        value: -0.541671548402766
    }, {
        endtime: 1541858400000,
        starttime: 1541854800000,
        id: "1329545",
        type: "减少",
        value: -0.7087459121451392
    }, {
        endtime: 1541862000000,
        starttime: 1541858400000,
        id: "1329545",
        type: "减少",
        value: -0.6799913489740174
    }, {
        endtime: 1541869200000,
        starttime: 1541865600000,
        id: "1329545",
        type: "减少",
        value: -0.572345489829841
    }, {
        endtime: 1541872800000,
        starttime: 1541869200000,
        id: "1329545",
        type: "减少",
        value: -0.6868536698560921
    }, {
        endtime: 1541876400000,
        starttime: 1541872800000,
        id: "1329545",
        type: "减少",
        value: -0.6252130746369051
    }, {
        endtime: 1541880000000,
        starttime: 1541876400000,
        id: "1329545",
        type: "减少",
        value: -0.5269037371884214
    }, {
        endtime: 1541883600000,
        starttime: 1541880000000,
        id: "1329545",
        type: "减少",
        value: -0.5793073518900685
    }, {
        endtime: 1541890800000,
        starttime: 1541887200000,
        id: "1329545",
        type: "减少",
        value: -0.6677452557537917
    }, {
        endtime: 1541894400000,
        starttime: 1541890800000,
        id: "1329545",
        type: "减少",
        value: -0.5548792868968313
    }, {
        endtime: 1541898000000,
        starttime: 1541894400000,
        id: "1329545",
        type: "减少",
        value: -0.6138180358136754
    }, {
        endtime: 1541901600000,
        starttime: 1541898000000,
        id: "1329545",
        type: "减少",
        value: -0.5105583357714675
    }, {
        endtime: 1541908800000,
        starttime: 1541905200000,
        id: "1329545",
        type: "减少",
        value: -0.5752014369527083
    }, {
        endtime: 1541912400000,
        starttime: 1541908800000,
        id: "1329545",
        type: "减少",
        value: -0.6769815194385175
    }, {
        endtime: 1541923200000,
        starttime: 1541919600000,
        id: "1329545",
        type: "减少",
        value: -0.5164825595149741
    }, {
        endtime: 1541934000000,
        starttime: 1541930400000,
        id: "1329545",
        type: "减少",
        value: -0.6260361199513284
    }, {
        endtime: 1541962800000,
        starttime: 1541959200000,
        id: "1329545",
        type: "减少",
        value: -0.5019495076524447
    }, {
        endtime: 1541970000000,
        starttime: 1541966400000,
        id: "1329545",
        type: "减少",
        value: -0.6259268741204284
    }, {
        endtime: 1541973600000,
        starttime: 1541970000000,
        id: "1329545",
        type: "减少",
        value: -0.5733960671993563
    }, {
        endtime: 1541977200000,
        starttime: 1541973600000,
        id: "1329545",
        type: "减少",
        value: -0.6158590989692581
    }, {
        endtime: 1541980800000,
        starttime: 1541977200000,
        id: "1329545",
        type: "减少",
        value: -0.6712529946395253
    }, {
        endtime: 1541984400000,
        starttime: 1541980800000,
        id: "1329545",
        type: "减少",
        value: -0.5625534650127422
    }, {
        endtime: 1541988000000,
        starttime: 1541984400000,
        id: "1329545",
        type: "减少",
        value: -0.5851844135808836
    }, {
        endtime: 1541995200000,
        starttime: 1541991600000,
        id: "1329545",
        type: "减少",
        value: -0.5923373284371958
    }, {
        endtime: 1541998800000,
        starttime: 1541995200000,
        id: "1329545",
        type: "减少",
        value: -0.7169547237291652
    }, {
        endtime: 1542002400000,
        starttime: 1541998800000,
        id: "1329545",
        type: "减少",
        value: -0.5465921600537629
    }, {
        endtime: 1542016800000,
        starttime: 1542013200000,
        id: "1329545",
        type: "减少",
        value: -0.619674577518564
    }, {
        endtime: 1542020400000,
        starttime: 1542016800000,
        id: "1329545",
        type: "减少",
        value: -0.5985050322675358
    }, {
        endtime: 1542024000000,
        starttime: 1542020400000,
        id: "1329545",
        type: "减少",
        value: -0.5507123908582183
    }, {
        endtime: 1542031200000,
        starttime: 1542027600000,
        id: "1329545",
        type: "减少",
        value: -0.6680315094367103
    }, {
        endtime: 1542034800000,
        starttime: 1542031200000,
        id: "1329545",
        type: "减少",
        value: -0.6269187571014755
    }, {
        endtime: 1542038400000,
        starttime: 1542034800000,
        id: "1329545",
        type: "减少",
        value: -0.6901186314201957
    }, {
        endtime: 1542042000000,
        starttime: 1542038400000,
        id: "1329545",
        type: "减少",
        value: -0.7252194784847775
    }, {
        endtime: 1542045600000,
        starttime: 1542042000000,
        id: "1329545",
        type: "减少",
        value: -0.6949728947087127
    }, {
        endtime: 1542056400000,
        starttime: 1542052800000,
        id: "1329545",
        type: "减少",
        value: -0.6411613690184457
    }, {
        endtime: 1542060000000,
        starttime: 1542056400000,
        id: "1329545",
        type: "减少",
        value: -0.5697574385991523
    }, {
        endtime: 1542070800000,
        starttime: 1542067200000,
        id: "1329545",
        type: "减少",
        value: -0.6248914308037722
    }, {
        endtime: 1542074400000,
        starttime: 1542070800000,
        id: "1329545",
        type: "减少",
        value: -0.6422151956362481
    }, {
        endtime: 1542096000000,
        starttime: 1542092400000,
        id: "1329545",
        type: "减少",
        value: -0.5157899048608463
    }, {
        endtime: 1542103200000,
        starttime: 1542099600000,
        id: "1329545",
        type: "减少",
        value: -0.634333339335484
    }, {
        endtime: 1542132000000,
        starttime: 1542128400000,
        id: "1329545",
        type: "减少",
        value: -0.5841780903984132
    }, {
        endtime: 1542139200000,
        starttime: 1542135600000,
        id: "1329545",
        type: "减少",
        value: -0.5206674998955236
    }, {
        endtime: 1542142800000,
        starttime: 1542139200000,
        id: "1329545",
        type: "减少",
        value: -0.5608394129719382
    }, {
        endtime: 1542146400000,
        starttime: 1542142800000,
        id: "1329545",
        type: "减少",
        value: -0.5991250880998045
    }, {
        endtime: 1542150000000,
        starttime: 1542146400000,
        id: "1329545",
        type: "减少",
        value: -0.6352895564220914
    }, {
        endtime: 1542153600000,
        starttime: 1542150000000,
        id: "1329545",
        type: "减少",
        value: -0.6722608878869882
    }, {
        endtime: 1542157200000,
        starttime: 1542153600000,
        id: "1329545",
        type: "减少",
        value: -0.6198770112926814
    }, {
        endtime: 1542160800000,
        starttime: 1542157200000,
        id: "1329545",
        type: "减少",
        value: -0.5503268460034095
    }, {
        endtime: 1542171600000,
        starttime: 1542168000000,
        id: "1329545",
        type: "减少",
        value: -0.6978231716027389
    }, {
        endtime: 1542175200000,
        starttime: 1542171600000,
        id: "1329545",
        type: "减少",
        value: -0.5252681297143463
    }, {
        endtime: 1542178800000,
        starttime: 1542175200000,
        id: "1329545",
        type: "减少",
        value: -0.6008562812316237
    }, {
        endtime: 1542186000000,
        starttime: 1542182400000,
        id: "1329545",
        type: "减少",
        value: -0.5864488414498645
    }, {
        endtime: 1542189600000,
        starttime: 1542186000000,
        id: "1329545",
        type: "减少",
        value: -0.6301915031063753
    }, {
        endtime: 1542193200000,
        starttime: 1542189600000,
        id: "1329545",
        type: "减少",
        value: -0.5535447200105291
    }, {
        endtime: 1542196800000,
        starttime: 1542193200000,
        id: "1329545",
        type: "减少",
        value: -0.5415106929400098
    }, {
        endtime: 1542200400000,
        starttime: 1542196800000,
        id: "1329545",
        type: "减少",
        value: -0.5951981992748274
    }, {
        endtime: 1542204000000,
        starttime: 1542200400000,
        id: "1329545",
        type: "减少",
        value: -0.6228626554860136
    }, {
        endtime: 1542207600000,
        starttime: 1542204000000,
        id: "1329545",
        type: "减少",
        value: -0.65846403467386
    }, {
        endtime: 1542211200000,
        starttime: 1542207600000,
        id: "1329545",
        type: "减少",
        value: -0.7117736563582636
    }, {
        endtime: 1542222000000,
        starttime: 1542218400000,
        id: "1329545",
        type: "减少",
        value: -0.6470747169659986
    }, {
        endtime: 1542225600000,
        starttime: 1542222000000,
        id: "1329545",
        type: "减少",
        value: -0.5544787340226308
    }, {
        endtime: 1542229200000,
        starttime: 1542225600000,
        id: "1329545",
        type: "减少",
        value: -0.5761732106544679
    }, {
        endtime: 1542236400000,
        starttime: 1542232800000,
        id: "1329545",
        type: "减少",
        value: -0.6497333813171806
    }, {
        endtime: 1542240000000,
        starttime: 1542236400000,
        id: "1329545",
        type: "减少",
        value: -0.6716315202920915
    }, {
        endtime: 1542247200000,
        starttime: 1542243600000,
        id: "1329545",
        type: "减少",
        value: -0.6455066121442424
    }, {
        endtime: 1542258000000,
        starttime: 1542254400000,
        id: "1329545",
        type: "增加",
        value: 3.158573176377457
    }, {
        endtime: 1542276000000,
        starttime: 1542272400000,
        id: "1329545",
        type: "减少",
        value: -0.6537710315117573
    }, {
        endtime: 1542283200000,
        starttime: 1542279600000,
        id: "1329545",
        type: "减少",
        value: -0.5092859030626026
    }, {
        endtime: 1542286800000,
        starttime: 1542283200000,
        id: "1329545",
        type: "减少",
        value: -0.6084691472956795
    }, {
        endtime: 1542290400000,
        starttime: 1542286800000,
        id: "1329545",
        type: "减少",
        value: -0.5240478996292964
    }, {
        endtime: 1542294000000,
        starttime: 1542290400000,
        id: "1329545",
        type: "减少",
        value: -0.6929527685858291
    }, {
        endtime: 1542297600000,
        starttime: 1542294000000,
        id: "1329545",
        type: "减少",
        value: -0.7291552163065119
    }, {
        endtime: 1542301200000,
        starttime: 1542297600000,
        id: "1329545",
        type: "减少",
        value: -0.7269795770858256
    }, {
        endtime: 1542308400000,
        starttime: 1542304800000,
        id: "1329545",
        type: "减少",
        value: -0.6808574802866759
    }, {
        endtime: 1542312000000,
        starttime: 1542308400000,
        id: "1329545",
        type: "减少",
        value: -0.6371545270499717
    }, {
        endtime: 1542319200000,
        starttime: 1542315600000,
        id: "1329545",
        type: "减少",
        value: -0.5258987716205288
    }, {
        endtime: 1542322800000,
        starttime: 1542319200000,
        id: "1329545",
        type: "减少",
        value: -0.6096841274536332
    }, {
        endtime: 1542330000000,
        starttime: 1542326400000,
        id: "1329545",
        type: "减少",
        value: -0.6878942392311538
    }, {
        endtime: 1542333600000,
        starttime: 1542330000000,
        id: "1329545",
        type: "减少",
        value: -0.6451716369812552
    }, {
        endtime: 1542351600000,
        starttime: 1542348000000,
        id: "1329545",
        type: "减少",
        value: -0.6207585026514697
    }, {
        endtime: 1542358800000,
        starttime: 1542355200000,
        id: "1329545",
        type: "减少",
        value: -0.5865841808391667
    }, {
        endtime: 1542362400000,
        starttime: 1542358800000,
        id: "1329545",
        type: "减少",
        value: -0.6388540783787136
    }, {
        endtime: 1542366000000,
        starttime: 1542362400000,
        id: "1329545",
        type: "减少",
        value: -0.666105996016739
    }, {
        endtime: 1542369600000,
        starttime: 1542366000000,
        id: "1329545",
        type: "减少",
        value: -0.5318269942955729
    }, {
        endtime: 1542373200000,
        starttime: 1542369600000,
        id: "1329545",
        type: "减少",
        value: -0.6022144529286504
    }, {
        endtime: 1542376800000,
        starttime: 1542373200000,
        id: "1329545",
        type: "减少",
        value: -0.5765006258051626
    }, {
        endtime: 1542380400000,
        starttime: 1542376800000,
        id: "1329545",
        type: "减少",
        value: -0.708752364420027
    }, {
        endtime: 1542384000000,
        starttime: 1542380400000,
        id: "1329545",
        type: "减少",
        value: -0.7291552163065119
    }, {
        endtime: 1542387600000,
        starttime: 1542384000000,
        id: "1329545",
        type: "减少",
        value: -0.7267689618532318
    }, {
        endtime: 1542391200000,
        starttime: 1542387600000,
        id: "1329545",
        type: "减少",
        value: -0.6730198059099486
    }, {
        endtime: 1542394800000,
        starttime: 1542391200000,
        id: "1329545",
        type: "减少",
        value: -0.677488753689702
    }, {
        endtime: 1542398400000,
        starttime: 1542394800000,
        id: "1329545",
        type: "减少",
        value: -0.6086765190280536
    }, {
        endtime: 1542402000000,
        starttime: 1542398400000,
        id: "1329545",
        type: "减少",
        value: -0.6399527026333999
    }, {
        endtime: 1542405600000,
        starttime: 1542402000000,
        id: "1329545",
        type: "减少",
        value: -0.6074361951042274
    }, {
        endtime: 1542441600000,
        starttime: 1542438000000,
        id: "1329545",
        type: "减少",
        value: -0.5155346629402983
    }, {
        endtime: 1542445200000,
        starttime: 1542441600000,
        id: "1329545",
        type: "减少",
        value: -0.5865841808391667
    }, {
        endtime: 1542448800000,
        starttime: 1542445200000,
        id: "1329545",
        type: "减少",
        value: -0.6150778077506085
    }, {
        endtime: 1542452400000,
        starttime: 1542448800000,
        id: "1329545",
        type: "减少",
        value: -0.6678071181382359
    }, {
        endtime: 1542456000000,
        starttime: 1542452400000,
        id: "1329545",
        type: "减少",
        value: -0.5065787329011832
    }, {
        endtime: 1542459600000,
        starttime: 1542456000000,
        id: "1329545",
        type: "减少",
        value: -0.6438661525384028
    }, {
        endtime: 1542463200000,
        starttime: 1542459600000,
        id: "1329545",
        type: "减少",
        value: -0.6705494187787874
    }, {
        endtime: 1542466800000,
        starttime: 1542463200000,
        id: "1329545",
        type: "减少",
        value: -0.7269341802301543
    }, {
        endtime: 1542495600000,
        starttime: 1542492000000,
        id: "1329545",
        type: "减少",
        value: -0.5705635265485869
    }, {
        endtime: 1542506400000,
        starttime: 1542502800000,
        id: "1329545",
        type: "减少",
        value: -0.574724427220868
    }, {
        endtime: 1542531600000,
        starttime: 1542528000000,
        id: "1329545",
        type: "减少",
        value: -0.5817269348450699
    }, {
        endtime: 1542538800000,
        starttime: 1542535200000,
        id: "1329545",
        type: "减少",
        value: -0.6420521182029569
    }, {
        endtime: 1542574800000,
        starttime: 1542571200000,
        id: "1329545",
        type: "减少",
        value: -0.6398860134569513
    }, {
        endtime: 1542578400000,
        starttime: 1542574800000,
        id: "1329545",
        type: "减少",
        value: -0.6186102276721571
    }, {
        endtime: 1542582000000,
        starttime: 1542578400000,
        id: "1329545",
        type: "减少",
        value: -0.6690933895523113
    }, {
        endtime: 1542585600000,
        starttime: 1542582000000,
        id: "1329545",
        type: "减少",
        value: -0.6497467163784378
    }, {
        endtime: 1542589200000,
        starttime: 1542585600000,
        id: "1329545",
        type: "减少",
        value: -0.6698446058450268
    }, {
        endtime: 1542592800000,
        starttime: 1542589200000,
        id: "1329545",
        type: "减少",
        value: -0.6347837961341254
    }, {
        endtime: 1542610800000,
        starttime: 1542607200000,
        id: "1329545",
        type: "减少",
        value: -0.5273949991213744
    }, {
        endtime: 1542621600000,
        starttime: 1542618000000,
        id: "1329545",
        type: "减少",
        value: -0.6481938152870428
    }, {
        endtime: 1542625200000,
        starttime: 1542621600000,
        id: "1329545",
        type: "减少",
        value: -0.5398244495714443
    }, {
        endtime: 1542632400000,
        starttime: 1542628800000,
        id: "1329545",
        type: "减少",
        value: -0.6647084490944172
    }, {
        endtime: 1542636000000,
        starttime: 1542632400000,
        id: "1329545",
        type: "减少",
        value: -0.6304209430492337
    }, {
        endtime: 1542639600000,
        starttime: 1542636000000,
        id: "1329545",
        type: "减少",
        value: -0.7010533875965218
    }
];
// tslint:disable-next-line:no-shadowed-variable
const getInterData = (inlist) => {
    return {
        borderColor: 'rgba(0,0,0,0)',
        data: inlist,
        borderRadius: 0,
        pointPadding: 0,
        groupPadding: 0,
        // color:"black",
        dataLabels: {
            enabled: true,
            formatter() {
                return this.key;
            },
        },
    };
};
export const drawActionOptions = (objectlist, title) => {
    // tslint:disable-next-line:no-shadowed-variable
    const inlist = [];
    // tslint:disable-next-line:no-shadowed-variable
    const yAxis = [];
    // tslint:disable-next-line:forin
    for (const i in objectlist) {
        const day = Highcharts.dateFormat('%m-%d', objectlist[i].starttime + 8 * 60 * 60 * 1000);
        if (!yAxis.includes(day)) {
            yAxis.push(day);
        }
        inlist.push({
            x: (objectlist[i].starttime + 8 * 60 * 60 * 1000) % (24 * 60 * 60 * 1000),
            x2: (objectlist[i].endtime + 8 * 60 * 60 * 1000) % (24 * 60 * 60 * 1000),
            y: yAxis.indexOf(day),
            name: objectlist[i].type,
            id: objectlist[i].id,
            color: objectlist[i].value > 0 ? "rgba(255,0,0,0.8)" : "rgba(0,255,0,0.8)",
            value: objectlist[i].value,
        });
    }
    // console.log(inlist,yAxis)
    // console.log("重新画objectlist")
    return {
        chart: {
            type: 'xrange',
            // type:
            backgroundColor: 'rgba(0,0,0,0)',
            zoomType: 'x',
        },
        title: {
            text: title,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: "white",
            },
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%H:%M',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y',
            },
            labels: {
                style: {
                    color: "white",
                },
            },
            min: 0,
            max: 24 * 60 * 60 * 1000,
        },
        yAxis: {
            type: "catogory",
            title: {
                text: '',
            },
            categories: yAxis,
            reversed: true,
            labels: {
                style: {
                    color: "white",
                },
            },
            gridLineWidth: 0,
        },
        tooltip: {
            dateTimeLabelFormats: {
                day: '%Y-%m-%d',
            },
            headerFormat: title + '<br/>',
            pointFormatter() {
                // console.log(this,a,b,c)
                const id = this.options.id;
                const x = this.options.x;
                const x2 = this.options.x2;
                const y = this.options.y;
                const name = this.options.name;
                const value = this.options.value;
                // console.log(this.options)
                // console.log(this)
                // tslint:disable-next-line:max-line-length
                return "配电柜 : " + id + "<br/> 开始:" + yAxis[y] + Highcharts.dateFormat(' %H:%M:%S', x) + "- 结束:" + yAxis[y] + Highcharts.dateFormat(' %H:%M:%S', x2) + "<br/>" + name + ":" + Math.abs(value);
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    borderRadius: 0,
                },
            },
        },
        legend: {
            enabled: false,
            align: 'center',
            verticalAlign: 'bottom',
            y: 0,
            floating: true,
            borderWidth: 0,
            itemStyle: {
                color: "#C1FFC1",
            },
        },
        series: [getInterData(inlist)],
        credits: {
            enabled: false,
        },
    };
};
export const boxchart3 = [
    {
        name: "电流",
        // tslint:disable-next-line:max-line-length
        data: [[-38812.875, 12781.5, 21150, 47177.75, 98772.125], [-23184.375, 15968.25, 32591, 42070, 81222.625], [-8857, 17261, 24597, 34673, 60791], [-20929.125, 14400, 22938.5, 37952.75, 73281.875], [-23385, 52200, 80613, 102590, 178175], [-27606.875, 92367.25, 162450, 172350, 292324.125], [-19024.5, 99747.75, 165600, 178929.25, 297701.5], [-87340.125, 60981, 120700, 159861.75, 308182.875], [-143236.375, 25613, 59488, 138179.25, 307028.625], [-39044.75, 82836.25, 128942.5, 164090.25, 285971.25], [101135.875, 153253.75, 175729.5, 187999, 240116.875], [-42833.75, 75641.5, 134696.5, 154625, 273100.25], [-34944.375, 23514.75, 41443, 62487.5, 120946.625], [-34909.125, 10086.75, 18401.5, 40084, 85079.875], [-14661.375, 9765, 17148.5, 26049.25, 50475.625], [-29212.625, 812.5, 8512, 20829.25, 50854.375], [-43207, 3243.5, 13812.5, 34210.5, 80661], [-45352.625, 11074, 27525, 48691.75, 105118.375], [-32445.625, 9973.25, 21523.5, 38252.5, 80671.375], [-34876.75, 29294.75, 52494, 72075.75, 136247.25], [-56036.625, 19956.75, 28450, 70619, 146612.375], [-65423.625, 23603.25, 50692.5, 82954.5, 171981.375], [-54735.75, 33218.25, 47513, 91854.25, 179808.25], [-50845.5, 21766.5, 39630, 70174.5, 142786.5]]
    },
    // tslint:disable-next-line:max-line-length
    {
        name: "异常值",
        color: "#7cb5ec",
        type: "scatter",
        // tslint:disable-next-line:max-line-length
        data: [[1, 91264], [1, 135000], [2, 65238], [2, 107100], [2, 112539], [3, 83100], [4, 185687], [10, 0], [10, 22986], [10, 33217], [10, 77771], [12, 140438], [12, 189182], [13, 103139], [13, 110843], [14, 66221], [15, 69426], [15, 80004], [16, 137450], [17, 155309], [18, 82553], [18, 90877], [19, 167042], [19, 174665], [19, 185221], [19, 185309], [20, 151467], [20, 172800], [20, 176150], [22, 188587]],
        marker: { fillColor: "white", lineWidth: 1, radius: 1, lineColor: "#7cb5ec" },
        tooltip: { pointFormat: "Observation: {point.y}" }
    }
];
// tslint:disable-next-line:max-line-length
export const xAxis3 = ["2018-12-03 0", "2018-12-03 1", "2018-12-03 2", "2018-12-03 3", "2018-12-03 4", "2018-12-03 5", "2018-12-03 6", "2018-12-03 7", "2018-12-03 8", "2018-12-03 9", "2018-12-03 10", "2018-12-03 11", "2018-12-03 12", "2018-12-03 13", "2018-12-03 14", "2018-12-03 15", "2018-12-03 16", "2018-12-03 17", "2018-12-03 18", "2018-12-03 19", "2018-12-03 20", "2018-12-03 21", "2018-12-03 22", "2018-12-03 23"];
export const drawBoxOptions = (listdata, xAxisList, title) => {
    const showLegend = false;
    let controlxAias = true;
    const timedict = {};
    // tslint:disable-next-line:forin
    for (const i in xAxisList) {
        // tslint:disable-next-line:no-shadowed-variable
        const day = xAxisList[i].split(" ")[0];
        timedict[day] = timedict[day] === undefined ? 1 : timedict[day] + 1;
    }
    const timekey = Object.keys(timedict).sort();
    const newxAxis = [-0.5];
    const newdata = [];
    // 存储时间的inex
    const timeindex = {};
    let calcount = 0;
    let count = 0;
    // tslint:disable-next-line:forin
    for (const i in timekey) {
        const day = timekey[i];
        const n = timedict[day];
        const before = calcount;
        calcount = calcount + n;
        // 中间点插入数据
        timeindex[day] = before + n / 2 - 0.5;
        // var need2 = n%2// 中间点插入数据
        // var count = 0
        const b = newxAxis[newxAxis.length - 1];
        newxAxis.push(before + n / 2 - 0.5);
        newxAxis.push(2 * (before + n / 2 - 0.5) - b);
        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 0; i < n; i++) {
            newdata.push([count, 0]);
            count += 1;
        }
    }
    const option = {
        chart: {
            type: 'boxplot',
            zoomType: 'x',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        title: {
            text: title,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: "white"
            }
        },
        legend: {
            enabled: showLegend,
            align: 'center',
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            itemStyle: {
                color: "#C1FFC1",
                fontWeight: 'bold'
            },
            backgroundColor: '#303030',
            // borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 0,
        },
        xAxis: [{
                type: "category",
                categories: xAxisList,
                title: {
                    text: ''
                },
                labels: {
                    // enabled:false,
                    formatter(a) {
                        // console.log(this,"2222222222222",timemapx[this.value])
                        // console.log(this.value)
                        // console.log(this)
                        const chartHeigh = this.chart.chartHeigh;
                        const chartWidth = this.chart.chartWidth;
                        const category = this.axis.categories;
                        const value = this.value; // 2018/5/10 8
                        const timevalue = this.value.split(" ")[0];
                        const hourvalue = this.value.split(" ")[1];
                        const pos = a.pos;
                        const isFirst = a.isFirst;
                        // tslint:disable-next-line:radix
                        if (isFirst && parseInt(hourvalue) > 9) {
                            controlxAias = false;
                        }
                        // tslint:disable-next-line:radix
                        if (isFirst && parseInt(hourvalue) < 10) {
                            controlxAias = true;
                        }
                        const arr = a.axis.paddedTicks;
                        // console.log(chartWidth,this.chart,a,b,c)
                        if (chartWidth / window.innerWidth < 0.25) {
                            if (hourvalue > 9 && controlxAias && arr.length > 15) {
                                const time1 = JSON.stringify(hourvalue);
                                // console.log(time1)
                                // console.log("22222222",time1,parseInt(time1[0]) + "<br/>" + parseInt(time1[1]))
                                return time1[1] + "<br/>" + time1[2];
                            }
                            else if (arr.length > 20) {
                                return a.pos % 2 === 0 ? hourvalue + ":00" : "";
                            }
                            else {
                                return hourvalue + ":00";
                            }
                        }
                        else {
                            return hourvalue + ":00";
                        }
                    },
                    rotation: -45,
                    style: {
                        color: "white"
                    }
                },
                // tickInterval:3,
                gridLineWidth: 0,
            }],
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                // enabled:false,
                // formatter:function(a,b,c){
                //   // console.log(this,"2222222222222",timemapx[this.value])
                //   return timemapx[this.value]
                // },
                style: {
                    color: "white"
                }
            },
            gridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
                '上边缘: {point.high}<br/>' +
                'Q3\t: {point.q3}<br/>' +
                '中位数: {point.median}<br/>' +
                'Q1\t: {point.q1}<br/>' +
                '下边缘: {point.low}<br/>'
        },
        series: listdata,
        credits: {
            enabled: false
        }
    };
    return option;
};
export const drawBoxOptions2 = () => {
    return {
        chart: {
            type: 'boxplot'
        },
        title: {
            text: 'Highcharts 箱线图'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: '观测值'
            },
            plotLines: [{
                    value: 932,
                    color: 'red',
                    width: 1,
                    label: {
                        text: '理论模型: 932',
                        align: 'center',
                        style: {
                            color: 'gray'
                        }
                    }
                }]
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
                '最大值: {point.high}<br/>' +
                'Q2\t: {point.q3}<br/>' +
                '中位数: {point.median}<br/>' +
                'Q1\t: {point.q1}<br/>' +
                '最小值: {point.low}<br/>'
        },
        series: [{
                name: '观测值',
                data: [
                    [760, 801, 848, 895, 965],
                    [733, 853, 939, 980, 1080],
                    [714, 762, 817, 870, 918],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910]
                ],
                tooltip: {
                    headerFormat: '<em>实验号码： {point.key}</em><br/>'
                }
            }, {
                name: '异常值',
                color: Highcharts.getOptions().colors[0],
                type: 'scatter',
                data: [
                    [0, 644],
                    [4, 718],
                    [4, 951],
                    [4, 969]
                ],
                marker: {
                    fillColor: 'white',
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[0],
                },
                tooltip: {
                    pointFormat: 'Observation: {point.y}'
                }
            }]
    };
};
//# sourceMappingURL=options.js.map