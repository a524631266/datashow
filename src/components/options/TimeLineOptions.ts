import { ThresholdLimiter } from '@/types';
import Highcharts, { Options } from 'highcharts';
import "./dependentjs/xrange";
import { TimeLineChart,TimeLineChartTrans } from "@/types/postreturnform";
import moment,{ DurationInputObject, Moment } from "moment";
export const inout2 = [
{starttime: 1542681155000, endtime: 1542695555000, id: '881675', type: '减少', value: -16},
    {starttime: 1542798935000, endtime: 1542807515000, id: '881675', type: '减少', value: -21},
    {starttime: 1542856235000, endtime: 1542863435000, id: '881675', type: '增加', value: 39},
    {starttime: 1542874235000, endtime: 1542880805000, id: '881675', type: '增加', value: 15},
    {starttime: 1542962716000, endtime: 1542970568000, id: '881675', type: '增加', value: 32},
    {starttime: 1543024800000, endtime: 1543034760000, id: '881675', type: '增加', value: 8},
    {starttime: 1543058580000, endtime: 1543067460000, id: '881675', type: '增加', value: 47},
    {starttime: 1543140000000, endtime: 1543154400000, id: '881675', type: '减少', value: -18},
    {starttime: 1543201200000, endtime: 1543212000000, id: '881675', type: '增加', value: 10},
    {starttime: 1543302000000, endtime: 1543323600000, id: '881675', type: '减少', value: -26},
    {starttime: 1543374000000, endtime: 1543392000000, id: '881675', type: '增加', value: 13},
    {starttime: 1543460400000, endtime: 1543474800000, id: '881675', type: '增加', value: 29},
];

export const inout = [
{
  endtime : 1541804400000,
  starttime : 1541800800000,
  id : "1329545",
  type : "减少",
  value : -0.6548651978004244
}, {
  endtime : 1541811600000,
  starttime : 1541808000000,
  id : "1329545",
  type : "减少",
  value : -0.5009217388598228
}, {
  endtime : 1541815200000,
  starttime : 1541811600000,
  id : "1329545",
  type : "减少",
  value : -0.6451178265412453
}, {
  endtime : 1541826000000,
  starttime : 1541822400000,
  id : "1329545",
  type : "减少",
  value : -0.6268503277421779
}, {
  endtime : 1541844000000,
  starttime : 1541840400000,
  id : "1329545",
  type : "减少",
  value : -0.6175816068554211
}, {
  endtime : 1541851200000,
  starttime : 1541847600000,
  id : "1329545",
  type : "减少",
  value : -0.554266609724888
}, {
  endtime : 1541854800000,
  starttime : 1541851200000,
  id : "1329545",
  type : "减少",
  value : -0.541671548402766
}, {
  endtime : 1541858400000,
  starttime : 1541854800000,
  id : "1329545",
  type : "减少",
  value : -0.7087459121451392
}, {
  endtime : 1541862000000,
  starttime : 1541858400000,
  id : "1329545",
  type : "减少",
  value : -0.6799913489740174
}, {
  endtime : 1541869200000,
  starttime : 1541865600000,
  id : "1329545",
  type : "减少",
  value : -0.572345489829841
}, {
  endtime : 1541872800000,
  starttime : 1541869200000,
  id : "1329545",
  type : "减少",
  value : -0.6868536698560921
}, {
  endtime : 1541876400000,
  starttime : 1541872800000,
  id : "1329545",
  type : "减少",
  value : -0.6252130746369051
}, {
  endtime : 1541880000000,
  starttime : 1541876400000,
  id : "1329545",
  type : "减少",
  value : -0.5269037371884214
}, {
  endtime : 1541883600000,
  starttime : 1541880000000,
  id : "1329545",
  type : "减少",
  value : -0.5793073518900685
}, {
  endtime : 1541890800000,
  starttime : 1541887200000,
  id : "1329545",
  type : "减少",
  value : -0.6677452557537917
}, {
  endtime : 1541894400000,
  starttime : 1541890800000,
  id : "1329545",
  type : "减少",
  value : -0.5548792868968313
}, {
  endtime : 1541898000000,
  starttime : 1541894400000,
  id : "1329545",
  type : "减少",
  value : -0.6138180358136754
}, {
  endtime : 1541901600000,
  starttime : 1541898000000,
  id : "1329545",
  type : "减少",
  value : -0.5105583357714675
}, {
  endtime : 1541908800000,
  starttime : 1541905200000,
  id : "1329545",
  type : "减少",
  value : -0.5752014369527083
}, {
  endtime : 1541912400000,
  starttime : 1541908800000,
  id : "1329545",
  type : "减少",
  value : -0.6769815194385175
}, {
  endtime : 1541923200000,
  starttime : 1541919600000,
  id : "1329545",
  type : "减少",
  value : -0.5164825595149741
}, {
  endtime : 1541934000000,
  starttime : 1541930400000,
  id : "1329545",
  type : "减少",
  value : -0.6260361199513284
}, {
  endtime : 1541962800000,
  starttime : 1541959200000,
  id : "1329545",
  type : "减少",
  value : -0.5019495076524447
}, {
  endtime : 1541970000000,
  starttime : 1541966400000,
  id : "1329545",
  type : "减少",
  value : -0.6259268741204284
}, {
  endtime : 1541973600000,
  starttime : 1541970000000,
  id : "1329545",
  type : "减少",
  value : -0.5733960671993563
}, {
  endtime : 1541977200000,
  starttime : 1541973600000,
  id : "1329545",
  type : "减少",
  value : -0.6158590989692581
}, {
  endtime : 1541980800000,
  starttime : 1541977200000,
  id : "1329545",
  type : "减少",
  value : -0.6712529946395253
}, {
  endtime : 1541984400000,
  starttime : 1541980800000,
  id : "1329545",
  type : "减少",
  value : -0.5625534650127422
}, {
  endtime : 1541988000000,
  starttime : 1541984400000,
  id : "1329545",
  type : "减少",
  value : -0.5851844135808836
}, {
  endtime : 1541995200000,
  starttime : 1541991600000,
  id : "1329545",
  type : "减少",
  value : -0.5923373284371958
}, {
  endtime : 1541998800000,
  starttime : 1541995200000,
  id : "1329545",
  type : "减少",
  value : -0.7169547237291652
}, {
  endtime : 1542002400000,
  starttime : 1541998800000,
  id : "1329545",
  type : "减少",
  value : -0.5465921600537629
}, {
  endtime : 1542016800000,
  starttime : 1542013200000,
  id : "1329545",
  type : "减少",
  value : -0.619674577518564
}, {
  endtime : 1542020400000,
  starttime : 1542016800000,
  id : "1329545",
  type : "减少",
  value : -0.5985050322675358
}, {
  endtime : 1542024000000,
  starttime : 1542020400000,
  id : "1329545",
  type : "减少",
  value : -0.5507123908582183
}, {
  endtime : 1542031200000,
  starttime : 1542027600000,
  id : "1329545",
  type : "减少",
  value : -0.6680315094367103
}, {
  endtime : 1542034800000,
  starttime : 1542031200000,
  id : "1329545",
  type : "减少",
  value : -0.6269187571014755
}, {
  endtime : 1542038400000,
  starttime : 1542034800000,
  id : "1329545",
  type : "减少",
  value : -0.6901186314201957
}, {
  endtime : 1542042000000,
  starttime : 1542038400000,
  id : "1329545",
  type : "减少",
  value : -0.7252194784847775
}, {
  endtime : 1542045600000,
  starttime : 1542042000000,
  id : "1329545",
  type : "减少",
  value : -0.6949728947087127
}, {
  endtime : 1542056400000,
  starttime : 1542052800000,
  id : "1329545",
  type : "减少",
  value : -0.6411613690184457
}, {
  endtime : 1542060000000,
  starttime : 1542056400000,
  id : "1329545",
  type : "减少",
  value : -0.5697574385991523
}, {
  endtime : 1542070800000,
  starttime : 1542067200000,
  id : "1329545",
  type : "减少",
  value : -0.6248914308037722
}, {
  endtime : 1542074400000,
  starttime : 1542070800000,
  id : "1329545",
  type : "减少",
  value : -0.6422151956362481
}, {
  endtime : 1542096000000,
  starttime : 1542092400000,
  id : "1329545",
  type : "减少",
  value : -0.5157899048608463
}, {
  endtime : 1542103200000,
  starttime : 1542099600000,
  id : "1329545",
  type : "减少",
  value : -0.634333339335484
}, {
  endtime : 1542132000000,
  starttime : 1542128400000,
  id : "1329545",
  type : "减少",
  value : -0.5841780903984132
}, {
  endtime : 1542139200000,
  starttime : 1542135600000,
  id : "1329545",
  type : "减少",
  value : -0.5206674998955236
}, {
  endtime : 1542142800000,
  starttime : 1542139200000,
  id : "1329545",
  type : "减少",
  value : -0.5608394129719382
}, {
  endtime : 1542146400000,
  starttime : 1542142800000,
  id : "1329545",
  type : "减少",
  value : -0.5991250880998045
}, {
  endtime : 1542150000000,
  starttime : 1542146400000,
  id : "1329545",
  type : "减少",
  value : -0.6352895564220914
}, {
  endtime : 1542153600000,
  starttime : 1542150000000,
  id : "1329545",
  type : "减少",
  value : -0.6722608878869882
}, {
  endtime : 1542157200000,
  starttime : 1542153600000,
  id : "1329545",
  type : "减少",
  value : -0.6198770112926814
}, {
  endtime : 1542160800000,
  starttime : 1542157200000,
  id : "1329545",
  type : "减少",
  value : -0.5503268460034095
}, {
  endtime : 1542171600000,
  starttime : 1542168000000,
  id : "1329545",
  type : "减少",
  value : -0.6978231716027389
}, {
  endtime : 1542175200000,
  starttime : 1542171600000,
  id : "1329545",
  type : "减少",
  value : -0.5252681297143463
}, {
  endtime : 1542178800000,
  starttime : 1542175200000,
  id : "1329545",
  type : "减少",
  value : -0.6008562812316237
}, {
  endtime : 1542186000000,
  starttime : 1542182400000,
  id : "1329545",
  type : "减少",
  value : -0.5864488414498645
}, {
  endtime : 1542189600000,
  starttime : 1542186000000,
  id : "1329545",
  type : "减少",
  value : -0.6301915031063753
}, {
  endtime : 1542193200000,
  starttime : 1542189600000,
  id : "1329545",
  type : "减少",
  value : -0.5535447200105291
}, {
  endtime : 1542196800000,
  starttime : 1542193200000,
  id : "1329545",
  type : "减少",
  value : -0.5415106929400098
}, {
  endtime : 1542200400000,
  starttime : 1542196800000,
  id : "1329545",
  type : "减少",
  value : -0.5951981992748274
}, {
  endtime : 1542204000000,
  starttime : 1542200400000,
  id : "1329545",
  type : "减少",
  value : -0.6228626554860136
}, {
  endtime : 1542207600000,
  starttime : 1542204000000,
  id : "1329545",
  type : "减少",
  value : -0.65846403467386
}, {
  endtime : 1542211200000,
  starttime : 1542207600000,
  id : "1329545",
  type : "减少",
  value : -0.7117736563582636
}, {
  endtime : 1542222000000,
  starttime : 1542218400000,
  id : "1329545",
  type : "减少",
  value : -0.6470747169659986
}, {
  endtime : 1542225600000,
  starttime : 1542222000000,
  id : "1329545",
  type : "减少",
  value : -0.5544787340226308
}, {
  endtime : 1542229200000,
  starttime : 1542225600000,
  id : "1329545",
  type : "减少",
  value : -0.5761732106544679
}, {
  endtime : 1542236400000,
  starttime : 1542232800000,
  id : "1329545",
  type : "减少",
  value : -0.6497333813171806
}, {
  endtime : 1542240000000,
  starttime : 1542236400000,
  id : "1329545",
  type : "减少",
  value : -0.6716315202920915
}, {
  endtime : 1542247200000,
  starttime : 1542243600000,
  id : "1329545",
  type : "减少",
  value : -0.6455066121442424
}, {
  endtime : 1542258000000,
  starttime : 1542254400000,
  id : "1329545",
  type : "增加",
  value : 3.158573176377457
}, {
  endtime : 1542276000000,
  starttime : 1542272400000,
  id : "1329545",
  type : "减少",
  value : -0.6537710315117573
}, {
  endtime : 1542283200000,
  starttime : 1542279600000,
  id : "1329545",
  type : "减少",
  value : -0.5092859030626026
}, {
  endtime : 1542286800000,
  starttime : 1542283200000,
  id : "1329545",
  type : "减少",
  value : -0.6084691472956795
}, {
  endtime : 1542290400000,
  starttime : 1542286800000,
  id : "1329545",
  type : "减少",
  value : -0.5240478996292964
}, {
  endtime : 1542294000000,
  starttime : 1542290400000,
  id : "1329545",
  type : "减少",
  value : -0.6929527685858291
}, {
  endtime : 1542297600000,
  starttime : 1542294000000,
  id : "1329545",
  type : "减少",
  value : -0.7291552163065119
}, {
  endtime : 1542301200000,
  starttime : 1542297600000,
  id : "1329545",
  type : "减少",
  value : -0.7269795770858256
}, {
  endtime : 1542308400000,
  starttime : 1542304800000,
  id : "1329545",
  type : "减少",
  value : -0.6808574802866759
}, {
  endtime : 1542312000000,
  starttime : 1542308400000,
  id : "1329545",
  type : "减少",
  value : -0.6371545270499717
}, {
  endtime : 1542319200000,
  starttime : 1542315600000,
  id : "1329545",
  type : "减少",
  value : -0.5258987716205288
}, {
  endtime : 1542322800000,
  starttime : 1542319200000,
  id : "1329545",
  type : "减少",
  value : -0.6096841274536332
}, {
  endtime : 1542330000000,
  starttime : 1542326400000,
  id : "1329545",
  type : "减少",
  value : -0.6878942392311538
}, {
  endtime : 1542333600000,
  starttime : 1542330000000,
  id : "1329545",
  type : "减少",
  value : -0.6451716369812552
}, {
  endtime : 1542351600000,
  starttime : 1542348000000,
  id : "1329545",
  type : "减少",
  value : -0.6207585026514697
}, {
  endtime : 1542358800000,
  starttime : 1542355200000,
  id : "1329545",
  type : "减少",
  value : -0.5865841808391667
}, {
  endtime : 1542362400000,
  starttime : 1542358800000,
  id : "1329545",
  type : "减少",
  value : -0.6388540783787136
}, {
  endtime : 1542366000000,
  starttime : 1542362400000,
  id : "1329545",
  type : "减少",
  value : -0.666105996016739
}, {
  endtime : 1542369600000,
  starttime : 1542366000000,
  id : "1329545",
  type : "减少",
  value : -0.5318269942955729
}, {
  endtime : 1542373200000,
  starttime : 1542369600000,
  id : "1329545",
  type : "减少",
  value : -0.6022144529286504
}, {
  endtime : 1542376800000,
  starttime : 1542373200000,
  id : "1329545",
  type : "减少",
  value : -0.5765006258051626
}, {
  endtime : 1542380400000,
  starttime : 1542376800000,
  id : "1329545",
  type : "减少",
  value : -0.708752364420027
}, {
  endtime : 1542384000000,
  starttime : 1542380400000,
  id : "1329545",
  type : "减少",
  value : -0.7291552163065119
}, {
  endtime : 1542387600000,
  starttime : 1542384000000,
  id : "1329545",
  type : "减少",
  value : -0.7267689618532318
}, {
  endtime : 1542391200000,
  starttime : 1542387600000,
  id : "1329545",
  type : "减少",
  value : -0.6730198059099486
}, {
  endtime : 1542394800000,
  starttime : 1542391200000,
  id : "1329545",
  type : "减少",
  value : -0.677488753689702
}, {
  endtime : 1542398400000,
  starttime : 1542394800000,
  id : "1329545",
  type : "减少",
  value : -0.6086765190280536
}, {
  endtime : 1542402000000,
  starttime : 1542398400000,
  id : "1329545",
  type : "减少",
  value : -0.6399527026333999
}, {
  endtime : 1542405600000,
  starttime : 1542402000000,
  id : "1329545",
  type : "减少",
  value : -0.6074361951042274
}, {
  endtime : 1542441600000,
  starttime : 1542438000000,
  id : "1329545",
  type : "减少",
  value : -0.5155346629402983
}, {
  endtime : 1542445200000,
  starttime : 1542441600000,
  id : "1329545",
  type : "减少",
  value : -0.5865841808391667
}, {
  endtime : 1542448800000,
  starttime : 1542445200000,
  id : "1329545",
  type : "减少",
  value : -0.6150778077506085
}, {
  endtime : 1542452400000,
  starttime : 1542448800000,
  id : "1329545",
  type : "减少",
  value : -0.6678071181382359
}, {
  endtime : 1542456000000,
  starttime : 1542452400000,
  id : "1329545",
  type : "减少",
  value : -0.5065787329011832
}, {
  endtime : 1542459600000,
  starttime : 1542456000000,
  id : "1329545",
  type : "减少",
  value : -0.6438661525384028
}, {
  endtime : 1542463200000,
  starttime : 1542459600000,
  id : "1329545",
  type : "减少",
  value : -0.6705494187787874
}, {
  endtime : 1542466800000,
  starttime : 1542463200000,
  id : "1329545",
  type : "减少",
  value : -0.7269341802301543
}, {
  endtime : 1542495600000,
  starttime : 1542492000000,
  id : "1329545",
  type : "减少",
  value : -0.5705635265485869
}, {
  endtime : 1542506400000,
  starttime : 1542502800000,
  id : "1329545",
  type : "减少",
  value : -0.574724427220868
}, {
  endtime : 1542531600000,
  starttime : 1542528000000,
  id : "1329545",
  type : "减少",
  value : -0.5817269348450699
}, {
  endtime : 1542538800000,
  starttime : 1542535200000,
  id : "1329545",
  type : "减少",
  value : -0.6420521182029569
}, {
  endtime : 1542574800000,
  starttime : 1542571200000,
  id : "1329545",
  type : "减少",
  value : -0.6398860134569513
}, {
  endtime : 1542578400000,
  starttime : 1542574800000,
  id : "1329545",
  type : "减少",
  value : -0.6186102276721571
}, {
  endtime : 1542582000000,
  starttime : 1542578400000,
  id : "1329545",
  type : "减少",
  value : -0.6690933895523113
}, {
  endtime : 1542585600000,
  starttime : 1542582000000,
  id : "1329545",
  type : "减少",
  value : -0.6497467163784378
}, {
  endtime : 1542589200000,
  starttime : 1542585600000,
  id : "1329545",
  type : "减少",
  value : -0.6698446058450268
}, {
  endtime : 1542592800000,
  starttime : 1542589200000,
  id : "1329545",
  type : "减少",
  value : -0.6347837961341254
}, {
  endtime : 1542610800000,
  starttime : 1542607200000,
  id : "1329545",
  type : "减少",
  value : -0.5273949991213744
}, {
  endtime : 1542621600000,
  starttime : 1542618000000,
  id : "1329545",
  type : "减少",
  value : -0.6481938152870428
}, {
  endtime : 1542625200000,
  starttime : 1542621600000,
  id : "1329545",
  type : "减少",
  value : -0.5398244495714443
}, {
  endtime : 1542632400000,
  starttime : 1542628800000,
  id : "1329545",
  type : "减少",
  value : -0.6647084490944172
}, {
  endtime : 1542636000000,
  starttime : 1542632400000,
  id : "1329545",
  type : "减少",
  value : -0.6304209430492337
}, {
  endtime : 1542639600000,
  starttime : 1542636000000,
  id : "1329545",
  type : "减少",
  value : -0.7010533875965218
} ];


// tslint:disable-next-line:class-name
interface timelineData {
    starttime: number;
    endtime: number;
    id: string;
    type: string;
    value: number;
}
// tslint:disable-next-line:class-name
interface inlist  {
    x: number;
    x2: number;
    y: number;
    name: string;
    id: string;
    value: number;
    color?: string;
}


// tslint:disable-next-line:no-shadowed-variable
const getInterData = (inlist: inlist[]) => {
    // console.log("inlist",inlist);
    const negInlist: any = [];
    const posInlist: any= [];
    inlist.forEach(
      (value: inlist) => {
        if( value.value >=0) {
          posInlist.push(value);
        } else {
          negInlist.push(value);
        }
      }
    );
    return [
      {
          name: "超高",
          colorByPoint: false, // 为了使的当前的color有效,需要修改为false
          // borderColor: 'rgba(0,0,0,0)',
          stack: 0,
          data: posInlist,
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0,
          // pointPlacement: -0.25,
          tickmarkPlacement:'on',
          grouping: false, //  不分组,显示到同一行中
          // pointWidth: 80,
          color: "rgba(255,0,0,1)",
          // colors:["red","yellow","blue"],
          dataLabels: {
            enabled: false,
            formatter(): string {
              return (this as any).key;
            },
          },
          borderWidth: 0, // 矩形无边框
          // colsize: 24 * 36e5, // one day
      },
      {
          name: "超低",
          colorByPoint: false,
          // borderColor: 'rgba(0,0,0,0)',
          stack: 0,
          color: "rgba(0,255,0,1)",
          data: negInlist,
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0,
          // pointWidth: 80,
          // pointPlacement: 0.25,
          grouping: false,
          tickmarkPlacement:'on',
          // colors:["red","yellow","blue"],
          dataLabels: {
            enabled: false,
            formatter(): string {
              return (this as any).key;
            },
          },
          borderWidth: 0, // 矩形无边框
          // colsize: 24 * 36e5, // one day
      },
    ];
};


function endtimeMinusOne(time: number): number {
    const result = moment(time).format("HH:mm:ss") === "00:00:00"?time-1:time;
    return result;
}



export const drawActionOptions = (objectlist: TimeLineChartTrans, title: string,limiter: ThresholdLimiter) => {
    // tslint:disable-next-line:no-shadowed-variable
    const inlist: inlist[] = [];
    // tslint:disable-next-line:no-shadowed-variable
    const yAxis: string[] = [];
    // tslint:disable-next-line:forin
    for (const i in objectlist) {
      const day = moment(objectlist[i].starttime).format("MM-DD");
      if (!yAxis.includes(day)) {
          yAxis.push(day);
      }
      inlist.push({
          x: ((objectlist[i].starttime +  8 * 60 * 60 * 1000) % (24 * 60 * 60 * 1000)),
          x2: ((endtimeMinusOne(objectlist[i].endtime +  8 * 60 * 60 * 1000)) % (24 * 60 * 60 * 1000)),
          y: yAxis.indexOf(day),
          name: objectlist[i].type==="增加"?"超高":"超低",
          id: objectlist[i].id,
          color: objectlist[i].value > 0 ? "rgba(255,0,0,0.8)" : "rgba(0,255,0,0.8)",
          value: objectlist[i].value,
      });
    }
    // console.log(inlist,yAxis);
    // console.log("重新画objectlist",objectlist);
    return {
      // plotOptions:{
      //   xrange: {
      //     colorByPoint: true,
      //   }
      // },
      // global: { useUTC: true},
      chart: {
        type: 'xrange',
        // type:
        backgroundColor: 'rgba(0,0,0,0)',
        zoomType: 'x',
      },
      title: {
          // show: false,
          // text: title,
          text: null,
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
        max: 24 * 60 * 60 * 1000  - 1,
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
        pointFormatter(): string {
          // console.log(this,a,b,c)
          const id = (this as any).options.id;
          const x = (this as any).options.x;
          const x2 = (this as any).options.x2;
          const y = (this as any).options.y;
          const name = (this as any).options.name;
          const value = (this as any).options.value;
          // console.log(this.options)
          // console.log(this)
          // tslint:disable-next-line:max-line-length
          // return "配电柜 : " + id + "<br/> 开始:" + yAxis[y] +  Highcharts.dateFormat(' %H:%M:%S', x) + "- 结束:" + yAxis[y] + Highcharts.dateFormat(' %H:%M:%S', x2) + "<br/>" + name + ":" +  Math.abs(value);
          return "配电柜 : " + id + "<br/> 开始:" + yAxis[y] +  moment(x).format("HH:mm:ss") + "- 结束:" + yAxis[y] + moment(x2).format("HH:mm:ss") + "<br/>" + name + ":" +  Math.abs(value);
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            borderRadius: 0,
          },
        },
      },
      // legend: {
      //   // enabled: false,
      //   align : 'center',
      //   // verticalAlign : 'bottom',
      //   y : 0,
      //   floating : false,
      //   borderWidth : 0,
      //   itemStyle: {
      //     color: "#C1FFC1",
      //   },
      // },
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
        // colorAxis: {
        //   stops: [
        //       [0, '#3060cf'],
        //       [0.5, '#fffbbc'],
        //       [1, '#c4463a']
        //   ],
        //   // // min: -5
        //   // min: -10,
        //   // max: 10,
        //   // minColor: 'red',// '#FFFFFF',
        //   // maxColor: 'blue',// (Highcharts.getOptions() as any).colors[0]
        // },
    //   legend: {
    //     title: {
    //         text: title,
    //         style: {
    //             color: 'white'
    //         },
    //     },
    //     backgroundColor: '#303030',
    //     // borderColor: '#ffffff',
    //     borderWidth: 2,
    //     borderRadius: 0,
    //     // shadow: true,
    //     itemStyle: {
    //         color: '#C1FFC1',
    //         fontWeight: 'bold'
    //     },
    // },
      series: [...getInterData(inlist)],
      credits: {
          enabled: false,
      },
    };
};
