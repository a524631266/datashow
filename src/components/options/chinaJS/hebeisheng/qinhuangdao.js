(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('秦皇岛市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130302","properties":{"name":"海港区","cp":[119.596224,39.943458],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@@@B@@BBB@@B@@BD@@CD@BBB@BBB@B@@AB@B@B@B@@A@A@@@@B@@A@ABCBA@@BCB@@@B@BA@A@AB@@C@E@@BBDDBBBB@@@B@@@@@@@@@@@@@@B@@@BB@BFB@@@@@@@@B@B@@BB@@B@@@@@BB@@@@@@@B@@@@@@B@@@@AB@@@@@@A@@BDB@B@@@@@@@B@BB@@B@@@DB@@@@ABD@@@B@@@BB@@@B@@@@@BBA@BBBA@@@A@@@@@@@@@@BB@D@@@@@@@@@AB@@@@@B@@@@@BB@A@@B@@@@B@@@@B@@@@@@@@@B@@@@A@@@@B@BB@@BA@@@B@BB@@A@@@@@@BA@@B@B@A@BBA@@BA@@@@@@@B@@@@@@@@@BA@AB@@BB@ABBA@@B@@@@B@@B@@@@BA@@B@@@B@B@@@B@@B@@A@@@ABA@@@@BB@@@@@@B@@@@A@A@@@@BA@@@A@@B@@B@@@@BB@@@DDB@A@@@@@A@@BAA@@@BBB@@A@A@@BCA@@@B@@@BA@A@@A@@@@@AABA@@@EA@B@@@B@@@@@@@@A@@B@@@@@@AA@@@@@@@B@B@@@BA@@@@@@B@B@@@@@@@@@B@@@@B@BB@@@@@@A@@@AB@@@@@@@B@@B@@@B@@@B@BB@@B@@@@@ABA@@@A@BB@@@@B@@@B@@@@@AB@@@@@@@@A@@BA@@@A@@@@@@@@B@@@B@@@@@@@@DB@BIAEBI@ABABCB@@AF@HFFBBBBBBJL@BBF@DBJ@@@F@@[VIJFI^QzKTRFHBD@F@DAFAF@DDDFPJB@TGJ@JBFDFBFDFDFDDDJDDBDDDDDDFBBDHFBBDDFHHJDJDDFFDFDFDFDHBDFFFFBFDD@BFDDHBDDH@@^RBF@FBL@D@H@H@D@D@D@DBHBBGFB@FDF@JFF@@D@@AB@BADBBB@@BA@AB@BAB@BABA@@BDDBBBD@B@@AB@@E@@@@B@B@D@B@DAFCFA@AD@@@BB@@@A@@@CBA@@BLFRFVFJDDF@JAHCN@JBLFJHDFDPBLDH@FEHOBEBGBCB@@AB@@@B@@@B@D@@@@A@@B@@A@@A@@A@@@@@@@@@AB@@A@@B@B@B@@AB@B@@@BAB@@AB@B@@AB@@@B@B@B@@@@AB@@@@A@@@AB@@A@@B@BA@@B@@A@@@A@@@@@A@@@C@ABC@@@A@@@@@A@@@@@@B@@A@@@@BAB@@ABA@@@A@@@@AA@@AA@@A@AA@@AA@@@@@AA@AA@@A@A@AA@@@A@@@@@A@@BABA@@@A@@@A@@A@@@A@@AA@@AA@@@AAA@@@@@A@@A@A@@BA@@@@B@@A@@AA@@AA@AA@@@A@A@@@A@@@@A@AAA@CA@@AA@@A@@@A@@@A@A@A@@@A@@@AA@@A@@@@@A@@@A@@@@AA@@@AA@@@@AAA@A@@@A@@A@AAA@@@BCBABAF@FB@@@@@B@B@@@@@BB@@B@@@@B@@@B@@@@B@@@@BB@@B@BB@@BB@@@@@@@A@A@@@@B@@@@ABBB@B@@@B@@AB@B@@@B@@@B@BBBB@@BBB@B@B@@@@@B@@@@BB@@B@B@@B@@@@@B@@@B@@BB@B@@@@@@B@@B@@@B@@@@BB@@BB@@@B@@@B@@BB@D@B@@@B@@@@@BA@@BA@@BA@@@ABA@@@A@AB@@A@@@A@AB@@@@AB@@A@@@AA@@AA@@@@A@@@@@@@ARMNKHEJAJCBA@@@@BA@@@A@@B@@A@@@@@A@@@@BAB@@@@@@AB@@AB@BAB@BA@@B@B@@@@BB@BB@BB@BB@@@B@@@@AB@@@@@B@@@@@B@@A@@B@@@@@@LBL@@@@@@@@A@@@A@A@@@@BA@@BA@@B@@A@@@BB@@BBB@@@B@BBBBBB@@@NBBCBMDIBGBC@KBK@KBEDEBEBC@CACAEDADCDEBC@I@CCCECACACBCCCCEEEIMEEEBIAE@IAA@A@A@A@@BAB@@A@G@E@A@@@BC@@BABABE@@AE@@@AAAA@A@A@AA@AA@CAA@C@AAAA@@BA@@@AAAAAAAAA@A@ECBA@@@AA@@AA@@C@@@AA@@A@@@ABC@CB@BA@C@@@A@@AA@A@A@A@E@A@A@@A@C@CBCAA@@@@@@AAC@B@@@B@@@@@BABABABA@A@A@A@CAA@AAAAC@A@A@ADADABABA@@@AAAACAAAAAAAA@@A@A@@@ABCBCBCBA@ABA@@@CA@@A@@@@@A@@@@@AA@@AA@@A@@AA@@@A@@@@@@A@@@@@@DAB@BA@A@A@@AC@@@@A@@@A@@@A@@@A@@@@@@BA@@@A@A@ABA@@@@@A@@@@@@@@A@@@@@A@AB@@A@A@E@C@@@A@@@@A@@@@@@A@@B@@@@@B@@A@@@A@@@@@@A@@@A@@@@BA@@@AAA@@@ABA@AB@@AB@BA@@DA@@@ABC@@@EBA@@@@A@@@ABA@AB@BA@ABA@@@A@@@@@@@@@A@@@@@A@@@@@ABA@@@@A@@@@A@@@@@@@@@@@A@@B@@@@@@@@BBB@@@@D@@@@A@@AA@@@A@@A@@@A@@A@@@@A@@A@@B@BAB@@@@@@@@A@@C@@@A@AA@A@@@@@A@@@@AA@A@@@@@@@A@@AAB@A@BAA@@AD@@AA@@C@@CACB@AA@@@A@@A@@@ECB@AC@@AA@@A@@@@@@@@D@@@@@@@@@@@@@B@@@@AB@@@@@@@@A@@@@@@@@B@B@@@@@@@@@B@@@@@@@@@B@@@BB@A@@@@@@@@B@@@@@@A@@@AF@B@@@B@BC@@B@@BB@@@@A@@@@@@@ABBB@B@B@@@@@BBBB@@@@BB@@@@@@BA@AB@BA@@@@@@B@BB@@B@@@DADAB@D@B@B@BB@@B@@BD@@AB@@D@@@@BA@@@@B@@@B@@@@@@B@@@@BB@@@@@@@@@B@BBA@@@@@@@@@A@@B@@@@A@@@@@@BA@@D@B@@@@@@@F@B@@A@@@AC@BC@@@BF@@@@B@@@B@@B@@@@@@@@@FB@@@@@AB@@AACA@@@AABEB@@@@@@@AA@@@AA@B@ACA@@AD@@AB@@@@@BAB@@@@@B@@CB@@A@A@@BAB@D@@AD@B@@@@@A@A@A@@@@A@@A@@@@@@@@AB@B@D@@ABBB@@@@@@A@@@A@A@@@@@@@A@@@A@@B@@@@AB@B@@@B@@B@AFB@@@@BBD@LDB@@@@A@A@C@A@AA@AC@@AA@AAA@AB@@@@AFABABA@A@A@@@@@@A@@AAAAA@A@ABABAB@BARKAGAACAGA_EEAA@@G@CAA]AA@ADCNCDE@KAAAAADKACACCACBEFEBE@C@AACAC@C@A@@@@B@@AB@B@@A@CAEAGEECAAAAACAC@@AA@@A@@AAACEAAAAAACCGECACAA@@B@@@@@B@@HFDD@@@B@@@@CAA@AAA@A@@B@@BB@BB@A@@BAAE@EACA@@ABADA@@@A@AAC@A@@BA@@D@BAB@@A@A@@@@@@ABSA@MAA@@BCN@B@@@@C@@@A@@A@AAA@@@A@@@@EB@@AB@@@@A@KCICKGMIEECCCC@@GB@B@@IBA@@@GEGCGE@@AACACAAA@ACA@@ECAA@@IGCAB@AABA@A@@@@@AA@@A@A@@@A@@A@MBG@BB@@@@@B@@@@ABHBB@@B@@@@@DKC@BEAAB@@B@@B@@@@@@@BA@@@@@@@@@@@B@@@AB@@@@@BEA@A@@AB@@A@@BA@@@@@@@@@@@@BB@CB@@@@FB@BEC@D@@@BE@B@@B@@C@@@BB@@@@A@@@@@A@@@@A@@A@@B@@@@AB@@@B@@@@B@@@ABB@BBB@B@@@@@@B@@@@B@C@@D@BB@AB"],"encodeOffsets":[[122340,40845]]}},{"type":"Feature","id":"130303","properties":{"name":"山海关区","cp":[119.753591,39.998023],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@EGACBCDCHCFETMFCFCFAFCH@@AAAKG@CAECCACACBA@ABCBAD@DCB@BA@A@A@AA@A@@@@@AAA@@@@A@@B@B@@@B@@@B@BC@@@ABCBB@@BBB@B@B@@@A@BBBA@@B@@AB@@@@@B@@@@@@@@@@AB@@@@@@@@@@@B@@@@@B@@@@@@@@@A@AA@@@@@@@@@@@@@@AA@@@@B@@@@@B@@@@@@@@@@@@@@A@@B@@B@@@@B@@@A@@B@@@@@@B@@@@@@A@@BA@@B@@AB@@A@@B@@@@@@A@@AA@@@@@@B@@@@@BBB@@@@@B@@@B@@@@@@@@AB@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@BA@@@A@A@@B@@BF@@B@@@@AB@@@@B@@@@@B@@B@@@@B@@@B@@@@@@@@@@A@@D@HDA@@@@@@B@@@@@@B@@@B@B@B@BB@@@B@B@BB@@@@@@@@@BB@@@@@@BB@@BA@@B@@A@@B@@@@@AB@B@@@B@B@@@@BA@AB@BA@@BA@@@@@@B@@@B@@AB@@@@A@@B@@@@B@@B@@@@@B@@@@BB@@A@@D@@B@@B@B@DBB@B@@@@@@@@AB@@@@@@@@A@@@@@@A@@@@@@@@A@@B@@@@@A@@A@@B@@ABABA@A@@B@@AB@@AB@@@@AB@@@@@@@BA@AB@@AB@B@B@BA@@B@@AB@@@B@@@BA@@B@@@B@@A@@@@@@@ACAGEBA@@@A@@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@AB@A@@@@@@@A@@@@A@@@@A@@A@@@A@@@@@@@@@@@BB@@@@@@@@@@@@@@@B@@@@@@A@@@@A@@@@A@@@@@A@@A@@@@@@@@@@@A@@@@AA@@@@A@@@@@@AA@@@@@@@A@@@@A@@A@@A@@@@A@@@@@@A@@@@@@@@@@@A@@@@A@@@A@@@@@@@@@@@@@@@AA@@A@@@@@A@@@@@@@@A@@@@A@@B@B@@@@@B@B@@A@@@@B@@@@@B@@@@@@AB@@@@@@@@@BA@A@@@@@@A@@@@@A@@@@@@A@@@@@@@@@A@@@@@@@@B@AAA@@@@@@@B@@@B@@@@@@@B@B@@@@@B@@@BCBCBCB@@A@@@@@@@@AA@@@@@@B@@@@@BE@C@EdoBC@ESGG@QZIBCBKRCBEACA@AAOAA@@A@@B@VB@@BNDBBBBDF@B@BA@A@A@@AA@AAAAE@AA@EA@CAC@GBC@CAA@AACCACA@EACCECCGEGEGCCCCGCQCaEeAKACAACA@A@AB@@KAQLABA@ABAB@B@BBBBB@BB@@@@@@@@B@BABABEB@B@@A@@BBB@BBB@@BDB@@B@B@D@B@B@@A@KCC@AA@@@@EA@B@AA@@@A@A@@B@@A@@@@B@@@B@@@@@@@B@B@@@B@@@@A@AA@BC@A@A@@B@@@@@@B@@@@B@@B@B@B@@@@@A@C@@BC@A@AB@@@B@BA@@DA@@@@@A@AB@@@@A@@BC@@BB@BDA@B@@B@@BB@@@@@@A@AFBB@@B@BD@BA@@B@@@@EA@@@@@@@@A@@@@A@@@A@@E@@A@@ADD@@B@@@BA@E@@@@@@@A@C@@@AB@@@@@@@B@@A@@@@B@@@@@@@@AB@A@A@@@@@@@@AA@@@@@A@@@@A@@@A@@@@@AB@@@@@CA@@BC@@AA@@@AAA@A@C@A@CBCB@@A@@@AAA@@@@@@@ABA@@BAB@@@@@@AA@@@@AAAA@@@@A@A@A@AA@B@@@@@@@B@@A@@AA@@@ADA@@@A@E@@B@@@B@@@@A@@@@@@@@@@BAA@@A@@@@@@@@@A@@@@@@@@@A@A@@@@@@@@@@B@@@@@@A@@B@@A@@@@@@@@@@@@@C@@@@@@@@@@BB@@BD@@BDA@F@@@BB@@@B@@BDADB@@@DB@@BC@@BB@ABB@A@BB@@@B@@@@@@@BBB@@@@@B@@@@@BBBB@@@D@@@@B@@@@@@A@ABA@@@@BB@@@@@@BB@@@B@@@@B@@BB@@@B@@C@@@@@AA@A@@@@@@A@@@@B@@@@@@@@@@@B@@B@@@@@AB@B@@@@@B@@@@@B@@@@@@@@@B@@AB@BABA@@BAB@B@@@B@@B@FA@@D@BA@@B@@CB@@ABA@@BAB@BA@@B@BB@@B@@A@@B@@@B@@@@@@@@B@@@BA@@@@@A@@@@B@@@@B@@@@@@B@@@D@F@B@BA@@B@B@@@@@B@@@@@@B@@@@@B@BAB@B@@@B@@A@@@@B@@@B@@@B@@@B@@@@@BD@@@B@BABA@CB@@@@@@@B@@@@B@@@B@@BB@@@BB@@BB@@@@B@@@@@B@@@DB@@B@BAB@DADADABA@@B@B@@@BBBBBBBBBDBB@B@@ABABCBCB@B@B@BBDBB@BBB@D@B@B@BABABABAB@@@@A@@@A@D@BB@@@@@@BBAD@D@D@BB@B@F@B@B@B@B@@BB@@@D@B@@ADAD@BA@@B@@@BB@@D@@@BB@@BB@@B@DA@F@BBBBBBBBB@B@@AB@@BBBBD@B@DBB@@BBBB@B@B@BB@B@@BF@@AFABAB@@AD@@B@F@H@B@@@BA@AB@B@B@B@JBF@JBFA"],"encodeOffsets":[[122616,41074]]}},{"type":"Feature","id":"130321","properties":{"name":"青龙满族自治县","cp":[118.954555,40.406023],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AGCGGGIEECACAGBKDCLGRMXOPINENCNGRARCPALAL@JBJBH@HAF@HBJBFBDBHBHBLBJ@J@J@JBF@HALAFALBL@LBJ@LDHBNAL@LALCNCL@NAJ@F@H@DBFBBB@@ABBBB@B@@B@@@B@@@BBB@@FDB@@BBBBB@B@B@@D@@B@@BBB@@B@@@B@@@@@@@B@@B@BAB@@@@A@@@A@@@@B@@@BB@BD@@B@@B@@@@A@A@@A@@@@A@@@A@@D@DAB@B@B@@@BAB@BAB@D@BB@@F@BBB@@BB@DDBDB@B@@@B@@ABAB@B@B@BADAB@NARCNEJGDCBE@EAE@EAEEEMCMCEEAIBEBILGHCJEHIDGBEBGDCHEHAJ@JCFGFIHK@EACCIGGECCEBGBC@GBE@CBGFE@E@IIMGMAMCGCMBEFIHIFEFE@GAECI@C@G@EBCDEDCJEHEDEG@KCOAECGCEIAK@IDMBG@ICEICUEQEKE@AB@DA@@B@@@A@@A@@BCB@DEBE@C@A@C@A@A@@F@@@BA@@@AACAACC@AB@BA@ABA@ABAB@@AA@AABC@ABA@@@CE@IEE@ECA@HEAAAG@C@C@C@C@G@G@CAK@EAE]Q@@CGACCGEC@ACCAEEEEEACCGCECECEEECCCIGIEGCCAAGEACEACCCCCCCAICCCECECECEAECIAI@SHA@OICECCE@EBCBE@C@GAQE[EGCMAEBGDIJBNAHAFCHAHAFCFEH@^CFCDADCFCFCDBH@DADABEBC@E@C@CBOHAAC@A@A@AB@@EBABA@@BA@CB@@A@A@@@ADA@C@@@@BA@@BAB@@@@A@@@BB@@C@@@A@CA@@A@@@DB@B@@A@CBAB@@AB@B@@ABA@AAA@@@@@@A@@@A@@@A@@A@A@C@A@@AAA@C@@A@A@@AB@@@@AAA@@@@E@A@@AEB@CAABBDA@@BBB@DAD@@@BBDA@@@@A@@@B@A@A@@@@@@@@AB@@AB@A@@A@@@@@@AA@B@@@BAA@@@@A@A@@@@AA@@@C@MAMCOAGAA@A@I@M@G@KAEBGCIAGCKEICICGCKCGCGEMGGEGAIEGCKCICQUGCC@ECGCGCGCIAAAICIAG@CAE@CBC@CBMBIBIDEDCBABADABABC@AB@@@B@DBBADADABCDAB@BCDA@ABA@ABA@AB@@C@CBAB@@AACEAAIFCDCDADGPADG@MGEAIAIAE@ODSHAB@BBF@D@BABBB@BAB@B@D@FBDC@A@A@A@ABA@@@@@A@A@A@C@A@CA@@A@CBC@A@AAA@A@AAAC@AAA@A@AAACGA@AA@B@@@@AB@DA@@BCBCB@@AC@@AAE@C@C@ABA@GBCBA@AA@@@@BA@@@@B@B@@@A@@A@AA@OJEBCDABDL@@@BKHCBC@C@EAIAG@GDMFEBOLEBC@E@ICC@G@IDEDE@EBC@EDCBEDGDKFGBKFIDEFGDGBE@ECCAGIEGK@MAGAKAG@G@CB@@@F@F@@@@BB@B@BAB@@@BB@BB@BB@AB@F@@@BCBAB@@A@@@@@A@@@AB@@@BA@AAA@CCAAA@@CA@@@@@@DA@@@@A@A@AA@BD@B@@AA@@AD@@A@A@@@ED@@DAB@@@@BABCDCBABEBCBA@A@CCCAA@A@EDCDGDEBCDMHCDIDIBCDGFCDEDNSHoTSDE@G@IDCFEH@H@H@LLNLXDDFBH@PADDDHHVFHJDFBVTTRHJHRBL@LALEJCFEJS^GNGT@JDHHHJHPFLBTDHFB@BAB@@@BA@@@@BAB@BBBBBBBD@DBB@B@@DBB@@B@BBB@B@BAB@D@@@BB@HBBB@@B@@DA@@B@@@@@@@@D@@@@@BD@B@BBBB@BBD@BB@B@@BBD@B@@BDFFFDDFBBDB@B@B@@@DC@@HCBABABABA@A@CBC@@@@BADADAHCB@DABBD@DBJ@BBB@B@@@D@B@@@BABA@@B@BBF@B@B@BB@@D@B@@B@@@B@BBB@@B@F@H@J@@@BA@@B@HB@@B@BBDB@BBB@@DBBB@BB@B@DBB@B@DDBBBBDB@@@@CD@B@BBDBD@B@B@@BFBHBB@@@@DBBB@@B@@F@BDDB@B@FBB@BB@@BB@@@BB@@@B@BBBB@@BBB@@BBBB@BB@@BB@@BB@BBB@@B@@@DBB@B@B@B@BBB@@@B@@@@AB@BA@@B@@@@@BA@@B@@ABA@AB@@@B@@@D@B@BAD@B@B@B@B@B@B@B@DBB@BB@@B@@@@B@@B@@@@@BAB@B@BAD@@@B@@A@@@BB@@BBBBB@BD@@BB@B@@B@@BBBBB@BBB@B@B@BB@@D@BBB@B@@@BBBB@BB@BB@@@@@@B@@@@AB@B@BA@@B@@@@@B@B@@@B@B@B@B@B@@@@@@AB@@A@@B@@@@AB@D@DAB@@@@@@A@@B@@A@@B@@@BAB@D@BA@@B@B@@@DAB@@@@AB@@@B@D@B@D@B@@@@@B@@@@@@@@BB@@@BBD@D@B@B@BB@@B@D@@@B@B@@B@@B@@@@@@BBA@@@@@@B@@@BA@@@@B@@@@@B@@@B@@@@@BAB@@@B@@@@@BA@@@@B@@@@@B@@@B@@@B@@@B@B@B@B@@@@@@@B@@@B@BBB@BB@@@BB@@@@B@@@@B@@BABAD@BAB@@@@@B@@@B@@@BA@@B@BA@@BB@@BA@CB@B@D@B@@D@B@@@@FA@@@C@G@A@A@@A@@AB@@AB@BB@@@DBB@D@B@D@FBB@D@D@FD@@BAD@@@BBB@B@B@B@B@@@BB@@B@B@@B@@@B@@@BBB@D@@BB@B@B@@BB@BB@D@BB@@@@DBBBDBB@BBB@B@@@B@B@@@B@B@B@@@@@B@B@@@B@FAD@B@@AB@BFBBB@DD@@B@DB@BBD@BB@FBBDBAB@B@@BB@B@@@DAB@B@@@B@BB@@DDBB@@D@@@BB@@FDBBBBDBFB@BD@BBBB@@DBDB@@BBB@B@B@B@@@BAB@B@B@BB@A@@BAB@@AB@@A@@AE@@@@@AB@D@BAB@@@B@@@@A@A@@@A@CAA@@BAB@B@BAF@B@BAB@BBB@@BBB@@BBB@BB@@B@B@D@B@@@DB@@AB@D@@@BB@BBD@@BBB@BDD@@B@B@B@D@B@H@B@@BB@B@FBB@@@@@B@BABAB@@@B@FBB@B@BBD@HBBBDB@@BBFD@@@BB@@@BBB@@BB@L@B@D@@A@CAA@C@C@C@A@@DABADC@@DBHBHFHDDDFBH@HCLCLCL@J@LBJ@D@H@FABCFCBE"],"encodeOffsets":[[122098,41572]]}},{"type":"Feature","id":"130322","properties":{"name":"昌黎县","cp":[119.164541,39.709729],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@A@EACA@@A@ECECGAKCA@E@A@C@C@A@C@EBA@KHGBA@ABKFABIH@@ADABA@@BCBEDEBKHGBABABABAFIHCDABA@E@GBAAC@GAE@CAC@CAAAE@EAC@CBGBOBKAK@KFC@GDKBY@Y@gFA@CDABQFSBE@@@ECAA@ACCCCGEAA@AA@@CBAA@@AA@A@E@A@A@A@EDEB@@E@C@A@A@CBEBE@G@G@@@CDA@@CC@@B@B@BA@@BE@IABH@B@BDFDDLF@BB@CNAF@@@@@BH@@@@@@@@@EB@@A@@B@B@B@@B@@@D@@BADA@@B@@@BCB@FGBBDDA@BEB@AA@@BG@ADA@@A@AYB@FA@@@ABWAAD@@A@I@@@F@@AC@@@BC@@A@@BC@BH@@AI@@A@@F@@A@ABC@A@@BAB@@B@BB@@@B@@@@@@@@D@@@ABB@DC@BCBB@FAB@IDBBAB@CG@@BF@@BM@@DD@@ANA@DIB@BLAB@@BAB@B@@HAHBRF@B@JEBEBE@QDABKB@BC@OCABA@C@BHB@@DA@@@@@@B@@F@@BG@@@@@BH@@AB@@@B@@A@G@AASCYEGAM@AAIEA@A@E@EBA@ABEDA@AB@B@DBF@BA@CFAD@B@D@@@@CBGDA@C@C@@B@BA@AAA@BD@@GB@@@BI@BDAD@@AB@BABAFB@@D@@C@@BB@@BA@@B@BK@@D@DD@@FC@CH@@@B@BABAD@@@BABABAF@D@BHHBDBD@BABADKJEFEDCDEHGHEF@@@B@@DBBB@@@J@BEJCLAB@@CAABC@CDA@EDABB@DB@@@BC@@@C@ABC@@B@@@@@BB@B@A@@@@BA@A@@@A@@@CFAD@BB@@@BD@BAB@AA@@BC@@BBB@DA@@BC@AF@@A@ALAH@BA@@BAD@@@JB@AD@@@B@@@@A@CCAAAA@BABAHAD@F@H@B@BCL@F@BADADADAB@BAB@@@D@D@DABAB@FAB@BBB@BF@HDJDFBD@DBDCB@BAB@BADA@@BABADACCCAAA@@@@AAB@B@@@B@@@BA@@@A@@@@BAB@BAB@@@@@@ABAD@B@@@@@BA@@@A@@@AA@@AB@@BB@@@@B@BF@@E@EF@@CB@@@B@@BB@@@BA@@@@DAF@@A@@B@@A@@@@A@@A@@B@@A@@@@@@A@@@@@A@@@DA@@B@AAB@ACNC@@A@@@@@@A@@@AA@A@DA@A@@@ABA@BHADAD@B@@@@@@A@@@@B@@@B@@@F@@@BAD@@@B@@AD@@BB@LDCDHBD@AF@@HBB@B@BA@@BAB@@@BEE@@A@@@@A@@@@A@@@@@@@A@@B@@@B@@@@AB@@BFBBIA@@A@@@@@A@@DAF@@@@CB@@@B@@CB@@EHDBAD@@@B@@AF@@@@B@B@@HB@@@HB@@@D@@BB@AHL@L@N@@@N@BAB@@@@@B@@@@@B@@@B@@@@@@@B@@@@@@@@@BB@B@@@@@@B@D@F@BB@@@AJA@B@@F@@EA@A@@AH@@@@EH@PA@@@DFB@@B@@@B@B@@BB@@@@@B@B@@@BB@@B@B@@@BAB@@@D@D@@@@@DHBH@B@@BADB@@NCFA@@@@B@@A@@DA@BB@@A@@@@BD@@@@B@@@@@@@@A@@B@@@@B@@@@@@BB@B@@BB@BBBA@B@@@@@@BA@@BDBB@@@B@@B@@@B@@@@A@@@@@@@@B@@@@@@@@D@@BD@@@B@@A@@@@@B@@B@@@@BB@@@B@@@B@@BA@@D@@B@B@@BA@@BA@AB@@@@B@@D@@@@@BA@A@@@@@@@@@@BC@@@@@@@@@@F@DF@HAD@B@@ABBB@@AD@B@@B@BB@B@@A@DB@@BD@@BB@@@B@@@BB@@B@@@@ABA@A@AB@@A@@BAB@@@@@@@B@@B@B@@B@@@@@@@@@@@F@H@B@DB@B@@BB@@B@B@BABA@@@@@B@@@@@B@@AB@@H@DBBBH@B@ABB@BBF@B@FB@BBBF@F@AFJBJBBABAEAAAA@AAB@BBB@D@@@@BB@@@@@BB@@A@@@@B@@B@BBA@@B@@@@BB@@BA@BB@@@@AB@@B@@@@D@@AA@B@@@A@C@F@F@D@BA@@@@BBDBBBDBFBBBDBBB@@@@@B@B@B@B@BB@@@BBD@@@B@@B@BB@@@@@B@@@@@BB@@BB@@B@@@B@DAB@BBB@B@@@B@B@BA@@B@BAB@@@B@@@B@@A@@@@@A@AB@@@B@FA@@@@B@BBDBB@DBDBB@@@@B@@@@@@B@B@B@@@B@@@@@B@@B@B@@BBB@@BB@D@@@B@@BB@@@B@@@BBB@B@B@@BBB@@@@B@@@B@@@@@@A@@@A@A@@B@@A@@@@A@@A@@@@@A@A@@@@AA@@@@@@@AD@BAD@B@B@@@B@@B@@@B@@@@@@BB@@B@@B@BB@@@B@B@BB@@@@BB@@B@D@@@FDA@FB@@@@@BA@@@A@A@@@A@A@@A@@ABB@@@@B@@@B@@@@D@@@B@@BDA@AB@@BA@@BD@A@A@@BB@@@BBA@@@@@@@@BB@@@DBBC@@FB@BB@@AD@@BB@@@@@D@D@BBB@@@B@B@B@@@B@B@B@B@DBDBB@@@B@@@@@B@@@@@@@AAAA@@@@@@BABA@@@@@@AA@@@@@ABA@ABA@@BA@A@A@@@@@A@@@A@@@A@@@A@A@@@@@@@@@@BAD@@AB@BAB@@A@@@@@A@@@@BA@@@A@@BA@@@A@@BABA@@@@AC@C@@@A@A@@@@BABA@@B@@A@@H@B@@@@B@@B@@@@@@@B@@CD@B@F@B@@@B@@AB@@@@@B@AADAJ@@@B@BA@@BB@@FHB@B@@@B@B@B@BAB@@@@@BA@@@@B@@ABABAB@@@BAB@@@@@BA@AB@BA@@@@BA@@@AB@BA@@@A@@@AB@@@B@@@@@@AA@@AA@@AB@B@BABAD@DABAB@@@@@@A@@@ABA@A@A@@BA@A@@@@B@@@BAD@B@D@B@@@@@@@@@@@@A@@@A@@@AB@B@@@@@@@@A@@B@@@@@B@@@@@B@BB@@B@@BBB@@@@B@B@@@@@@@@@@A@@@@AA@@@@@AB@@@B@@@@@@@@@@@@AA@AA@@@@@A@ABAB@@@B@@@@@BB@BB@@@@@DBB@B@@@@AB@@@@A@A@@BA@@@@DADAFAFADAHADAFA@@B@@@P@IgISEMCMAGOgUsM]GSGQEQăCK@GDGNENCPGNIPIHMBSBEEG@CBA@C@@"],["@@@DAB@BAF@DAB@@AB@BAD@@@@BB@@BA@@BABCBE@ABCBC@ABA@AAA@@@AA@@@@BA@@B"],["@@@@@@@B@@@B@@@B@B@BAB@B@@@B@B@@@@B@@@@@B@@@@A@@@AB@@A@C@A@A@@@AAA@@@@@@A@"],["@@@B@@@@@@BB@@@@@@B@@@@@BA@@@@AA@@@@@@A@@@@@@@@@@@@@@@A@"]],"encodeOffsets":[[[122172,40379]],[[122178,40372]],[[122180,40359]],[[122176,40352]]]}},{"type":"Feature","id":"130306","properties":{"name":"抚宁区","cp":[119.240651,39.887053],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@B@@@BAB@@A@@@A@A@AB@@B@@@@@B@DDB@B@@BD@@@BB@@@@@B@BB@@BB@B@@@@B@@@@BBBBB@@B@@A@@B@@@@@@@@@D@@BBB@@B@@@BA@@B@@@BBB@B@@@@@@@B@@CB@@@B@@ABAB@@A@@B@B@@BB@@@@@BBB@@@B@@ABAB@@AB@@@B@B@@AB@D@B@@A@AB@B@@ABB@A@@B@@@@@@@@@@BB@@BB@@@@B@@@@@@@@@BB@@@BABCD@@@BA@@@CB@@@@@B@@@@AB@@@BAB@BAB@@@@AB@@@@@@@B@@A@@@A@@@@@@BA@@B@@@@@B@@@@AB@@@B@@@@A@AB@@@@@B@@@BA@@@A@@B@@ABAB@B@@@B@@A@@@A@@@CB@BAAAAC@A@@A@@AAA@@@A@@A@@@AC@A@@DBB@@@@@@@B@BBB@BA@@B@D@@AB@@ABA@@@@BAB@B@D@BCBBD@BBB@BB@AB@AABABA@@@ABAD@@CBCA@A@@@@@@@A@@AB@BAA@@A@@AA@A@@@A@A@A@BEAA@@A@@@A@@B@@A@A@@@@@@@A@@@@@ABA@@@@@A@@B@@@AA@@@@B@@@B@@@@B@BB@@@@@@@@@@@@A@A@@@@B@@B@@@A@A@@@@B@@B@@@@@@BA@@B@BBBB@@BBABBBB@@@@@@@@A@@@@B@BB@B@@BD@ABA@@B@@@@@BDB@@@@B@ABDAB@B@@B@@@@@B@@A@AB@@B@@@B@@@@@B@@@@BA@@@A@AAA@@@@BBB@@AB@@@BD@@@AB@@B@B@@BA@@B@@BB@@@@B@@AD@@BD@@BC@@@BB@@@@A@@@A@@@A@@@@@@BA@@C@@@@A@@B@@@@@A@@AB@@CD@BB@@BB@@ABBB@@B@@@@@@@BB@@B@@@B@@@@@@@B@@BB@@@@B@@@B@@@BBBBB@@@@@B@@@B@@@ACCADA@@F@@@BB@BBABF@BB@@DA@@B@@@@@@@@@B@@BB@@B@@@B@@@@BB@@@@B@BDB@@@D@BCAA@@@A@A@ABCCABA@@@CCAB@BA@@@AB@B@@@BC@@BABB@@D@BBB@@@@CD@B@BB@@@B@AB@@@B@D@@@@BB@BB@@@@B@DA@@@@@BBDD@@AB@@@@@@@B@@@@CBAB@@@@DF@@EAC@E@C@@@A@AB@@A@@@A@@@@B@B@@@BB@@B@@@@@@@@@B@@@B@@@@AB@@@@@B@@@B@@@@@@@B@@AFAB@BAB@@@@@DABBB@@@@@@B@@@@@@@BBB@@@B@@@D@DADA@@D@BAD@B@@@@@@@BA@@@@B@@@@A@@@@@@B@@@@@B@@@B@@@BBD@@@@BB@B@@@BBB@@@B@@@@A@@B@@@@@@@BA@@@@B@@@B@BCDCB@B@@B@@B@@@@@HA@@B@B@@@@BB@@@@@B@@@@@F@@@@@B@@@B@@@@@B@@BBB@@@@B@@BB@DB@@@@B@@@B@@A@@B@@@B@BB@@@@B@@BBDB@@@B@@@BAB@@@@@B@@@@@@@@@B@B@@@B@@B@@B@@@@@@@B@@@@@@@BA@@@@@AB@@@@BB@@@@@@B@BA@@@@@@BA@@BA@@@@@@@@@@B@@AB@@@@@B@@A@@@@@ABB@@B@@CB@B@@@@A@@@@@AB@@@@@@@B@BA@@@@@@@@@@@@BA@@@@@BB@@ADABAB@@@@A@@@ABA@B@@BA@@B@@A@A@AB@@@@AB@@@A@@@@@@C@@BB@@@A@@B@@@B@@@@@@@@AB@@B@@@@BAF@B@@@B@B@B@BAB@B@@@BAB@B@@B@@BA@@B@@B@B@@DAB@BB@@B@@@BAAABC@CAA@@AC@@BA@A@@B@@A@A@@@@@@F@BABBDBBBBBBBBB@D@BD@B@@BDBBBB@@BBB@@BB@BB@BA@@@A@@B@@@@@B@@AB@@ABCB@B@B@B@@@@@@BDA@@B@B@@@B@@BB@B@@FD@@@@@FBPADCDEFENHDHDFDD@HDRVJDLDHDJFHBHFNHHFHDLDHDJDJDLFHDJBHDFALBH@N@J@B@B@HBPBNDNBD@@@B@@B@@B@B@@@@@BB@A@@@ABB@@@@@@@BB@A@@BA@@B@@@@@@B@B@A@@@B@@@@@CBAA@@C@CBA@AA@@CBAABB@DFA@BB@F@@@@@BB@B@@A@@BB@B@@@@DBB@BB@D@B@B@@@@B@@@B@@@B@@@@B@BBB@BA@@@ABA@@BADAB@@@@ACA@@B@@@DBB@@@D@@@AA@@B@@@@@BA@AB@@A@@D@B@BC@@B@B@@@DAB@@AB@BAFA@@BAB@B@D@BBPGDAD@F@D@FABABC@CAGDCDEDEBCDCDE@]FGDEBEBGDGBEBGAMJIHCFANBHD\\FLSRyJ]EJI\\U@@@E@@AI@CAE@AIKAAAAAAEE@GBE@@DABABAJ@FAJB@ACA@@@@@@@@@A@@@A@@@@@@B@@@B@@AB@@@@@@@@@BA@@@@A@@@A@@@@@AAB@@@B@BA@@@@A@@@AAA@@@A@@@A@@@@A@@@@@@BA@@B@@@@@@@AAA@@@@@@A@@@@@@@@@A@A@@@@B@@A@@@A@A@@@@@@BB@@@@@@@AB@@@@@@@@@@A@@@AFB@@B@BA@B@@@@@BB@B@@A@@@A@@DB@AB@B@@@AA@A@@BB@AB@@@@@B@A@CC@@A@@A@@A@@@@AB@@@B@@A@@B@B@@@@@@A@@@@A@@A@@B@BA@@B@@@@AA@@@A@A@@@A@@@AB@@@@@AA@@@@@@AB@AA@BAA@@BAB@@A@@@@@@@@@A@@@@@@AB@@AB@A@B@A@AB@@A@@@@B@@@AAA@@@B@@AA@@A@A@@B@@@@@@A@@@@@@@@@A@@A@@@@@@AB@A@@A@@@@@A@@@@BA@@@@@@@@C@A@@A@@@@@@@@B@@@B@AA@AAB@A@@@@@A@@AA@@A@@@C@BA@@@@CA@@A@@@AAA@@@@@@@A@A@AC@@@B@@@@A@@B@@A@@@@@@@@A@@@@@@AA@@@@A@@@AA@@@A@A@@@@@@A@AEA@@A@@@A@@@@@@@@@@@@A@@@A@AACAAC@AF@D@@@BAB@B@@A@A@@DA@AB@DABAB@@@@A@@B@B@@@@A@A@ABA@@@AAA@AAA@ADC@@AC@@@AA@AA@@@A@@@AE@C@AB@@AAA@CADA@@B@@CA@AA@@C@AA@@@A@@A@@A@DCA@@ECCABCA@DCCA@AC@BCC@@AD@@@DB@@AA@@EA@B@AA@AA@DAA@B@@ABBAC@BA@@B@AA@@A@@FA@ABCDCC@B@BCA@@ADAAG@@CGBCCABIBEAEB@BAD@@ABCB@AAE@I@@@@AABI@@BA@@DA@@B@@@F@B@@@B@@@@ABB@ACCFGB@@@GEB@CEABSEKH@@QRABAB@@KLADAD@BCL]DIDA@@@@@MHUHKBCGCK@A@I@E@A@ADCBAB@@ADE@GBC@ABC@@OESCDEDKBCBEHEFCN@FBFEGEGCECCC@GAEAED@FBB@B@F@FADABAB@FAFA@C@E@MAGGIN@ZL@@NBJ@JAHEHBDDDDBBBB@B@DB@@@BFABAFEB@@@@C@AB@@BDBDAD@DLB@@D@HBD@@BB@D@D@B@BCA@AAA@@AA@@A@AB@@AB@@@BAB@DBD@DAB@BABABABAB@DADBB@DBD@DAD@DADAJ@DAB@B@BA@@UOMG[[EEkWECAG@EFG@GIIMAMDGAMIKMAECE@@O@@@A@@@EBCBGBCBEBEBCBCB@@@@AB@@@B@B@@A@@B@@A@A@CA@@@@A@@AAA@@@@A@@@A@AB@B@B@@@@BBB@@B@@@@@@@@@@A@@@A@@B@@@@BB@@@@@B@@@@@@@@A@A@@@@@AA@AA@@@AAA@@@@@A@@@@@A@@@@B@@@@@@A@A@@B@@@B@@@B@@@@@@@@@@A@C@A@C@AB@@A@@@@@@BAB@@@B@BAB@B@@@B@@@@A@ABCBC@ABABA@A@@BB@@BB@@B@@@@A@@@A@@B@@@B@@ABA@@B@@AB@@@@ABA@@BAB@@@@A@AB@@A@ABAB@BA@@@@@AB@@@@A@ABA@A@A@@@A@A@EG@@AA@@ABA@@@I@CBBBA@@@@@A@@BA@@@A@E@A@C@@DA@@@@@@@A@@@@A@@A@G@@@@BA@@@ABAB@@@@@B@B@@@DBD@@@@ABAB@@@B@@AB@@@B@@AB@@@@@B@@@@@BA@ABA@@BC@AB@@@@@@@@@@@B@B@@@B@@@B@@@B@@@@@B@BAB@@AB@BAB@B@@@@BB@@@@@@ABAB@@@@@@BBBB@@@@@@A@@@@@A@@@A@CACAA@A@A@A@@@A@A@A@@@A@AAC@C@@@@@A@@AC@@BA@@AEA@@ADCA@@A@@A@@@@@@B@AA@@A@@AB@B@C@@AB@@AA@@BCB@AA@@@C@@@@@@A@@@A@@A@BA@@@BB@B@@@B@B@@@B@@A@@@@EAB@EC@@C@A@@@AA@@@@AAA@A@@@A@@A@AA@@@AA@@@@@@@A@@@AA@@@A@A@C@ABC@@B@@@@@@BB@@@@@B@B@@@@@BB@@@@@@BA@@@@B@B@@@B@@@@A@@@A@@@@@AA@AA@A@A@AA@@A@@@A@@AA@@@C@A@@AA@AA@@@A@AA@@@@@A@@@A@A@A@@@@@@@@A@@A@CACAA@CAAAA@@@@@EBA@@@A@@B@B@@@@@BA@@@A@@@A@ABA@@@ABA@"],"encodeOffsets":[[121994,40742]]}},{"type":"Feature","id":"130324","properties":{"name":"卢龙县","cp":[118.881809,39.891639],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FMFEDCBCAO@E@@@@EC@@@AAA@@@A@@@A@AB@AC@@@@@@@A@A@ADABA@@BA@@@A@@@@@AB@@@B@@AAAA@@AA@AA@@AAAAAC@@@AACC@A@AAAAAAAAACBA@A@E@@@@B@B@@@@AB@B@@AD@@BB@DBD@BABB@A@@@AA@@ABA@CA@A@@@@AB@@AA@@@@ABA@A@@@ABA@A@A@A@A@@@ABE@A@@A@@@BA@@@@@@@@@A@@@AB@@@A@@AD@@@@@@@@B@@BA@@@@BAB@B@@@@AB@@AA@B@BA@@B@@@@@BABABC@@AA@@@@B@@A@@@@@@@@@@B@@A@A@@@@@@BA@@@@B@@@@@@ADA@@@AA@BA@@@@B@@@@A@@@@BA@@@A@@@@@@@@B@@AB@@A@@@@B@@A@A@@@@A@@A@@A@@B@@@@AB@@@@@@A@@@@@@@A@@@@AA@@@A@A@@@@@@@@@A@@@@@A@AB@@A@@@A@AC@AA@@@@@AAA@@@A@@@@BA@@@A@@@@@CAA@@AA@@@@@AA@AA@@@@@A@@@A@@@@@E@@@@@A@@@@@A@@A@@A@A@@@GB@@@@A@@@@AA@A@CDADA@@@A@@@@@AB@@@@@@A@@@@B@@A@@@A@AA@@A@A@@A@@C@AA@@A@@@A@@@@@A@@@@@@@@B@@A@@@@@AB@@@@@@A@C@ABC@@@CBCBC@@@A@@@A@AA@@@@@@A@@@@@@@AABA@C@@@@BA@ABABE@@@A@@@@@@@A@@@A@@@@BA@@@@@A@@@A@@@@@@@@@AA@@A@@@A@A@@B@@@B@@@BAB@@@D@F@D@FB@@CE@@@@BADA@@@@@A@@@@@@BA@@CCAA@@@@B@@C@A@@A@@AAA@@@@@C@A@@BAA@@@A@@A@ADC@@@@AA@A@CA@BA@AD@@A@@@ABA@@B@@ABADD@@B@BADDBAB@B@@@B@DB@A@C@@CA@A@A@@A@@A@@A@@@A@@@AA@@@A@@@@@@@@@AB@@CA@@AAEAB@AAA@@E@@@CBDBBD@@A@@@A@@@@@A@AAAA@@A@@@A@@@@@AA@@@A@@@@@@@A@@@AA@@A@@@@@@@AA@AA@BA@@AA@@ADC@@BA@@@B@@@@@AB@@@@@@DB@@A@@@@B@@@B@@@B@@@@@AA@@D@@AC@@AC@@BA@@@@@AA@@@AB@@AA@A@@@BA@@C@@A@@BA@@AA@A@@B@BBB@@@B@@A@@A@@@@@A@@@A@@@BAB@@@@A@@@@@AA@A@CBBAA@@@@@CA@A@@@@@AB@BAC@@AA@A@@A@A@@B@@@@@@@@@AAAAAB@AA@AA@A@AB@@A@@@@A@@@@A@@B@B@@@A@@@@A@@B@B@@@@@@@@@@@@@AAA@@@@@@A@@@A@@B@@B@@@AB@@@@@B@BA@@@@B@@@@@@@B@B@@@@AB@@@B@@@BBAFB@B@B@@@B@B@@BB@@@BB@ABA@@@B@@@@@@@BDBDA@@BCBA@@B@BABA@BBAA@@AAA@AACDA@A@C@ABA@A@@B@BA@@BA@@@C@AB@@AAA@A@A@@@@@@AA@CB@D@@B@@@BB@@@B@BB@@@BB@D@BBBB@ADA@@B@@@B@@@@A@@@ABABA@@@AB@@@B@@A@@@A@@@@BAB@@@@@@A@@BA@@@@@A@@@@@AB@@A@@@@B@@@B@@@@A@@@@@@BA@@@@BA@ABA@A@@BA@@@@@A@@@@DA@@B@@A@@DCBA@A@@AA@@@@@@@@A@@@@@AA@@AA@@@@@@@@@@@AB@A@BA@@@ABAB@@@@A@CBA@@@A@A@@BA@@BABA@@@A@@AA@A@@@@AA@@@A@AB@@@BABA@@@A@@DA@@@A@@@@@@@AAA@A@@@AB@@A@@@AA@AA@@@C@@@@@@@@@AB@@@@AA@AAAA@@@@@A@@A@A@@AA@@A@A@@@@AA@@C@@AA@A@CCA@@@@@A@@@BAB@B@@@B@@@BA@A@@@A@AA@@@A@A@AAA@CBA@@@A@@@AA@@AA@@@@A@@@@@A@@A@AA@@@C@AA@@A@@A@A@A@A@A@@@@AACAAAEACAAACAAA@@@@ABC@E@E@D@B@@@A@B@@BC@@@@@@AA@@B@@A@@AAB@@AA@@@@@AB@AAA@@@@A@@B@@@AA@@@@A@@A@@C@A@AAA@BBB@BBFBABABIAIABEE@E@AA@AEAA@E@AAA@BAA@G@AACAG@@@BA@@@A@@@@@A@@@@ABABA@A@@@AA@@@ACAA@G@E@@@@@@@@@@@A@@@@A@AA@@@@@@@A@AB@@@BA@@B@BAB@B@@A@@@AA@@A@@@A@@AC@@AA@@C@BA@A@@A@AA@C@@BA@AA@BA@C@GBE@@C@E@@@@@@@@D@@A@@@@@@@@B@B@@A@@@@@CA@@@@@BAB@@AB@@AA@A@@@@CB@@AA@@@A@@@A@@A@@A@@@@A@@@@@BA@@@C@@AC@@@@@@@@@@A@@@@@@B@@@@@@A@@@AA@@@A@CA@AB@@A@@@@A@B@AA@AAA@@@AAA@@@@@@@A@@A@@@@B@@@@@@A@@@@@AC@@@@@BA@@ACB@@@BA@@@@@EBMD@@CAAB@@@AAGCG@@@@C@C@@@A@AB@@A@A@@@AA@@A@A@@@@@A@@AA@A@@@A@@@EA@C@@OBG@@F@@G@@BB@B@@FE@@@@AIB@B@@AAE@C@A@@@@@@@@AAA@@@@@@@@A@@@@@@@A@@@A@@@@@A@@@@@A@ABM@@@M@K@K@BGA@@AC@@@A@@G@@GA@@@A@A@@E@@BA@@@C@ABGC@FA@@DA@@@A@@D@@E@CB@@@B@@@@@BB@AJEA@AA@@B@@A@@@A@@@@B@@@@@@@B@@B@@@@@@BF@AF@@A@AB@@ABA@A@GA@@BEC@GADCKCA@@AC@@BA@@@C@AB@@E@@@A@@@A@@@@@@B@@@@A@C@CBGB@AAB@B@@@BCBB@B@@B@@@B@@@@B@@@MDBDA@BBA@@@CB@@B@@@@@B@@@@@@@@BA@@@@BB@@@@@@BA@@@@BE@CB@@@@AB@@A@@AA@@@A@@DE@@F@FE@@A@A@@A@@AA@@BB@@B@@@B@@AB@@@@A@C@AB@B@@@@A@ABA@AB@@@@@B@@AB@@A@@@A@A@BB@@@@BBDBDDCBABAB@@CBABA@ABA@CDDBB@BBBBBBBBCR@LBBbDRFBD@BOLEL@BD\\BDPXZRBFCHCHFHBBBFBDBBDBDDFJFHBBBDAH@DBJBDDH@B@DAX@H@@@@@BBBBFBB@BBH@H@BDBBBBBD@H@FBDBBB@B@FBJBDBDBBDDBBDH@B@FAB@BAB@B@B@HBF@BBF@@@BCJ@FAF@BBH@DDF@BBD@BADABADEFQHCDCBAF@H@RBJAf@BBBB@LDFFNJZVJHDBHBF@FAB@B@DDDFBLBJ@N@FF\\A@A@@B@@A@EAA@@B@@BD@B@@@@@@B@B@@B@@CB@@@B@@B@@@B@B@D@@ADDBH@B@B@D@B@B@@@BAD@@BDA@@BB@@B@BB@@@A@A@@@@@AB@@@@BBB@DAHAB@BAD@D@F@BB@@BD@@DADA@AB@@CBA@@@@@ABBB@DHBB@B@BBB@BBDBBB@B@BBB@D@DAB@@@DBB@D@B@B@B@@@@@B@BAB@B@B@D@AC@E@C@ABA@AAABA@A@CAE@ABATGPCF@JBJBFBNHH@BCHOBCDCDCJEBBDFBB@@BADAD@@@BAB@BAB@BAB@DC@ABADCBABCBCAA@C@A@@BAD@BABABCBADAFCJCJANADAD@DAF@DBH@JBJDBBJBHD"],"encodeOffsets":[[121981,41064]]}},{"type":"Feature","id":"130304","properties":{"name":"北戴河区","cp":[119.486286,39.825121],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DFA@HF@@A@EHDD@BAA@B@@A@@@A@E@@@A@@@CB@@AB@@AJBB@@@@@JBF@BDABA@@BC@AFAFBJABADDHA@DH@BBBC@@DB@A@ADDDCBAB@@EB@@@BBA@@@ABD@ABBA@@@ABB@CBBB@@B@AFB@@BB@@CA@@C@@BD@ADD@@BDBCDB@ADDBFD@@DB@C@BB@@@@B@@BBD@@@BBB@@DA@@@CBDBB@BB@@BAD@F@BAA@@A@CD@A@@@@@@A@@@@A@A@AAA@BA@@A@@@@@@A@@BA@@@@@AB@@@@B@@B@@@@@B@@@@@AA@@D@@@@AA@F@@A@@@CFD@AEA@@@@DAA@@A@@@@@@@@@@B@@AB@@@BA@@@BFB@A@@@@BA@@A@@@@@@@@@@@B@@A@@@@@@@AA@@@BAFB@ALD@C@@@@@AA@GABA@@@@@A@@@@AAH@NAB@@@@B@@@B@BB@@B@@@@@BABBBA@DBJH@@BBFD@@DB@BBBDBDBBB@@HFHDHF@@B@JA@@@AHAACIQ@CCKAAAM@EAC@ACGEGCEAC@AA@@A@@B@@@@@@@AA@@@@@@@@@@DA@@B@@B@@DB@@B@B@@@BAB@B@@@@A@@BC@ABA@@@A@@B@@@@@B@@@B@B@@@BAB@@AAA@@A@@A@@@@@@@@B@@@@A@@@@@@@A@@A@AA@A@@@@@AB@@A@@B@@@@@@@@@B@@B@@B@@@@@@@BA@@@A@@@@B@@@@@@@B@@@@@@@@@@A@@A@@@AA@@A@@@A@@@@@A@@A@@AA@@@@B@@A@@DC@A@@B@@A@@@@AAAC@@AA@@@@A@@@@@@@A@CAC@@@A@@@A@ADABA@@B@@@@B@@@@@@BB@@@AB@@A@ABA@@@M@A@CA@@@@A@@B@@@@@BA@A@@@C@@BA@@@@@C@GC@@EAC@EA@AA@@@A@@@ABA@@@@AA@A@@@@@AB@@@@A@A@@@A@@@@@@AA@@@@@@@@@@B@@@@@@A@C@A@C@G@A@EAEAECWOABA@A@CBI@CBCBC@CBC@CAA@CACBA@ABABABABA@CBC@CAA@AB@@A@@BA@@B@BB@@BB@BBB@ADA@C@C@A@@AC@GAC@@@KA@CBCACAC@@BAD@@@@@FABEBAAE@@A@@C@AAAAACCCCGAGFIBI@MA@@YKM@HJBH@N@F@DEBEBA@ABCBEBE@A@A@EAC@BFBF@HDDFDHDHFEFEAM@EDGFAFADCLCFTDPF@@AD@BAD@HCF@BA@ABCD@B@B@F@J@BDLDHLAVGNG@@@@B@JC^CDK@ABCBCLK@@BABARQ@@LGTFBA"],"encodeOffsets":[[122282,40804]]}}],"UTF8Encoding":true});}));