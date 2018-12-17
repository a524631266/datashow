(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汕头市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"440511","properties":{"name":"金平区","cp":[116.703583,23.367071],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCDA@@D@FCBFBB@BBAD@DAD@BAB@B@DDDDBB@@BAF@DCD@DADBD@@BBDBBB@B@DB@B@@AB@@BB@BB@@@BABADDDDB@@@BA@A@ABCBEBABABDDBF@DBFDHDBB@IAEAGCG@ABABEBEBA@C@CAE@CBADADAHDBDB@BA@A@@B@@@@@BAFCDE@@@@@@DCDI@CEAGCMA@@@@EA@@JMB@@A@CBGBA@C@@@@@@BA@@@@@C@E@@@C@@@@@A@@@@@A@A@@@@@@@@@@@C@E@_qLKBOBOCKAOGSKIEIFmX]IEIDWBCGBM@ODQ@ADBDB@FHABCFDHFHFNCZCRADCBKJ@D@PDFDJFHDF@BCBAB@DB@B@B@NCDHA@EBIBABBHBDBABABABFABC@@@BDBDFBDA@@DBDBBB@F@DAD@B@D@DA@@H@B@BABCBABAACAEF@FAJBD@@@@BF@BDFD@HC@@@G@CBABCDABAB@DEDCDADADABABABEDCFADA@CDAFBDAB@DCBABAB@BBB@D@"],"encodeOffsets":[[119430,23992]]}},{"type":"Feature","id":"440515","properties":{"name":"澄海区","cp":[116.76336,23.46844],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@B@@@@A@@B@@B@B@@@B@B@@@B@B@@AAAC@A@"],["@@B@@BB@@B@@BB@@B@B@@A@AA@AAAAA@C@@@@B@@@@B@"],["@@OEUSMSGOEmEa@G@ECEECEE@@@AAA@@@AAg@IAE@A@@@@@A@@@@@A@CA@ACAACAAAGBEAEAAACCCEAEAGO[]BMBIHEVAXCVELGHSL_N[JUJUHQJMJIHEDADAHAHCP@HCDCFAJAJAPCD@RBR@H@BBFFBBF@FBBFBBBD@D@BDCRABADEBADCDKDCB@BBDBBDFFDB@FBDB@H@DAFAF@DHDB@XBF@@DBBBAD@DABA@A@ABA@ABAAA@AD@@ADAF@BABCBAB@@C@@@CBC@@@@@@B@BA@A@CB@@A@CHADABBBB@@@BABB@@@BAB@B@@BBB@@BD@@B@BDB@BB@BB@BAB@BAB@@B@@@BB@@@@A@@BA@@B@@ABADAF@@@@BBB@@@@AB@@@D@BB@@@@BB@BB@@DBDBB@B@@D@D@@C@AB@D@D@BDD@@@BBB@D@B@B@@@B@BBB@BH@BAB@@A@AB@@@B@B@BA@@D@BBBBB@B@BB@BBB@@DBB@BA@@@AD@BABBB@@@@BBBBB@@@@B@@A@@B@@AB@@@B@@@@@@@@BBB@BB@@@@@@BBB@B@B@DBB@B@@@@A@AAA@ABA@@@@B@@@BAB@@A@AB@@A@@@@B@@@@B@BB@@@BAB@@@@BBBBB@@@B@@B@@ABABA@BA@@@AA@A@ADA@@BBB@B@@@BBB@BBBB@BBB@DBBDD@F@FA@ADEBAD@B@B@BAB@BADAD@DBD@FCBAFA@C@AAAB@@E@A@E@ADCDADAB@D@BA@A@AD@B@BBBBHDDBF@BCDBDFFAD@HCB@@A@AACBGDCDEFCDABA@A@GAIAK@E@EDCBCJMDQ@SAG@a"]],"encodeOffsets":[[[119679,23977]],[[119681,24011]],[[119724,24097]]]}},{"type":"Feature","id":"440512","properties":{"name":"濠江区","cp":[116.729528,23.279345],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@dBNAJEFEDCH@HAFAHCDGb_@AF_HMBG@G@OBOFSFEDAFALBJAFAHCDEBE@IAGGQGSOMQCSB]H[N_JSBSCSGWUkbCDEDCBGDIFCBCB@B@B@BAB@@ABA@@B@@ABAB@@@BB@B@B@@BA@ABAB@B@BA@A@@B@@@@BB@BCBABA@A@CBA@AAAB@@@BC@A@@BAA@@A@AB@B@@AB@@A@A@@B@@@BA@AB@BAFAFABA@@@A@@@ADAD@@B@B@@@AB@@A@A@@@@BA@CDAB@@AB@@ABAB@@AB@BA@ABABAB@B@B@@D@B@@BB@@BBB@BB@B@BB@@@B@B@@B@@B@AB@B@@A@ABBBB@@BBBD@BBB@B@BAB@@AB@@AD@@@D@@A@@@ABB@@B@@B@@@@B@@@BB@@B@BA@AB@D@HABC@C@C@CCC@CD@BAznWJEJFTLPHLBPDPALArK"],["@@@BB@@@@@@A@@@@@A@@A@@@@@@@AB@@B@@@@@"]],"encodeOffsets":[[[119518,23897]],[[119609,23809]]]}},{"type":"Feature","id":"440507","properties":{"name":"龙湖区","cp":[116.732015,23.373754],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCJGNIRIVGVI\\I`MTKHGFKDUBWFUJGNA^AO]SOcSS[S[GMBQa`CHGDEBGBG@CDEFIFMBcA@`@F@D@@@@@@@@@@@B@B@@@@@B@@@@@D@@@F@D@@@@AB@@@@@@@DABAH@D@BA@IN@@FB@@@@NBHDFB@DCJCD@@@@@@CFEDAB@@@@A@@@@BABA@ACGCCBCBAB@DBF@D@DABAFAFAB@BDHBHBF@J@DADCFAB@B@DDD@BDJBBB@F@DBBBB@B@BBBBBFBHDF"],"encodeOffsets":[[119520,24035]]}},{"type":"Feature","id":"440513","properties":{"name":"潮阳区","cp":[116.602602,23.262336],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DBHBHBJBJ@DAFAFEDE@C@C@KCGGMGMGEGEEGEECGCE@EDGDALAH@N@NBP@PBD@DBLAJCLCJELGJGJKHKBM@@PeNQLIDABCDQDYEMEGCGDEBAEGA@ACBCR@PCN@HAADCXFJ^JBy@ADCD@DDD@D@D@BA@G@CBAB@@A@AA@@A@@@A@@A@@@@AA@BA@@B@@@@C@@BC@@BA@@BA@A@AAA@AACAA@@AAAA@B@BA@A@@B@AA@@@@A@A@@AAA@A@@AAA@AA@@AA@C@@@@A@ABABABAB@@ABA@@BABA@@BA@@BADCB@@A@@B@B@@@BA@@A@A@@@BCBC@@B@@@B@BABEBE@ABAB@@A@@@AB@B@@@BA@@@ABAB@@@BB@AB@D@@A@@BABBB@DAB@B@BADA@AAA@@@@@AB@B@@A@ABABAB@@AA@A@A@@A@@BABA@@@AB@BA@@BA@A@A@ADADAJEHCDAFCDClaCCs{UUMEMC]CGVDHHXBNAHGHEDKHQF]@O@CAAKAGEEGAEBCDCBADE@CCECCBGHGCSWOIMGOAC@EBA@CDABC@I@G@C@EBCDEDCDAD@FDFDHHJ@D@D@BCBEBI@IBEDCFAF@LBDBDDDDDBF@BADABCB@BAB@BBDDF@D@BCDCD@BCFADCBE@CBA@CBA@A@@A@ABA@A@A@AACCAAAA@ABA@@BA@AA@AA@AAA@E@ABA@CDCBC@A@A@CEEGCAC@CDAFAFA@A@E@C@A@AB@@@D@BABABABEAC@C@A@A@AAAAA@A@A@ABEBC@CB@@ABBB@BABA@CAABI@CBA@CAA@A@ABAB@BE@C@CBA@CDEBC@CBKDC@E@@JBFBHBDAHEFEFIFAF@BBFBBBBD@D@HDD@N@B@F@D@DAF@@BBB@D@D@BBDDDDB@FCDAFCFAHBF@HBJCHBL@@BB@D@@ADCBAD@FAHADBHBDBAB@B@DABAB@BB@@@BABAB@B@DA@C@ABA@AC@@CACDCBAB@BAD@B@@CBCD@@A@C@A@AFBFC@AAGA@AC@AFCFAB@B@D@FAHAD@D@HBDDDDCHCHAFAF@DBBB@@@BB@B@BAB@B@B@BB@BB@B@DDD@BAFCDABB@BEDC@ABABAB@B@BBD@D@FBB@@@BDD@HBB@DBBB@BBF@@@BBDBBNDHBDDBDB@BBDAB@B@BB@D@BABABBBB@BABABBBD@B@L@DBDAD@H@J@DDBFDHFFDBD@DA@C@E@C@KAK@IBIBGDIHIDAFAJDJFFFDHHJHHPHBBLF"],"encodeOffsets":[[119259,24061]]}},{"type":"Feature","id":"440514","properties":{"name":"潮南区","cp":[116.423607,23.249798],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@iIUOSYIMAE@C@ABEWIA@AAAAA@@@CBA@@@AAAAA@A@C@EAAA@@AAC@AAABABA@AAAAA@A@@@ADA@AB@B@D@BEBA@@@@@@A@@@A@A@@@@@@A@AB@BA@AAAA@@CBAAA@@BADA@A@CB@@C@AAABABA@CAA@C@EBC@C@AA@@CCCCC@C@C@@@AG@ACAOCA@C@CBEBA@A@ACFCBC@A@ACAICEC@AACBEACCCAA@AC@CCAEAACBE@@ACCCCGAEAKEACAAGCCAACACCAC@C@AA@@AAAAC@C@A@CACDBB@@@BCBA@A@C@A@CBABFB@@@B@@BB@@BAB@BA@@BBB@B@@B@@@@A@A@A@@@A@@@@B@@A@A@A@@@A@@@@B@BBB@@@@ABABABABABA@A@AAA@A@CBA@A@@B@@B@@@BB@@A@A@A@ABAA@CA@@@E@A@A@@@@B@@A@@@AAA@@@ABAB@B@BBBBBB@@B@@@@ABABAFA@@B@DAD@B@@@D@BABAD@BABA@@BBD@B@@A@CBABCDAB@@@B@@@@@BA@CBA@A@@@AB@@@BB@@@BD@B@@A@@@CBA@C@ECA@A@@BABABA@C@ABAAC@A@A@A@C@@AAAAA@A@CA@E@@BEB@@A@E@ABAB@B@@BBA@@BAB@BA@BB@B@@@BB@@@@AB@@@BB@B@@AD@@@@AAA@@@A@A@A@@B@@BB@B@@EDA@@AA@AACBABCBCBC@GD@@EBADAA@@AA@@AAAB@B@B@B@@@BA@AAC@AAABAD@B@BBDA@CBABAD@DABEFAB@BA@BFDFBDBBBDB@DBDB@@@BAB@BA@ABBFBD@B@B@B@BABAB@D@D@F@@ADB@B@B@@ADBB@B@D@@@BA@@B@@@@DBD@DBB@BABAAAA@A@@@A@AAA@@A@A@B@BB@B@BABAAA@CAA@EBBBBD@BB@B@@B@BA@ABAB@B@DBBDBDBDBFDDABBDDDF@B@BAB@BC@@@AA@CA@C@ADAB@F@D@D@DADBBBDBFDFFDB@DAD@H@DAD@BBDFDBLJFBBF@DAH@BBFHJBJ@DADDFDDDDBB@DENBDFDDBDBDBB@BD@FAB@BGFBBDBJDFDDBD@DABABABAF@D@LCDAD@FADCB@DAD@F@@ABABAB@B@DBB@DAJ@BADBB@BA@AAABA@@DAD@FABAB@B@B@BBBBB@B@D@D@FBBABABA@A@C@@BAB@D@F@B@B@BEBEDCD@DBFHDFB@B@D@DADCB@BAF@B@BBB@@BBBB@@AB@BAB@BBDBBD@B@B@BAB@B@BB@B@DAB@DAF@DABCDE@ADCDC@A@CCEAC@ABA@ADABABC@AAECCCCACAC@KBEDEFCJAJ@FADA@A@C@CGICGCE@EBCDCFCDCFAD@H@J@D@BADCB@FAD@PBNHPJTXHDHGDAFDDDF@BCDADCFAHBFFBHBLDBP@^@RELGFCHGBGAMGWCGU"],"encodeOffsets":[[119397,23703]]}},{"type":"Feature","id":"440523","properties":{"name":"南澳县","cp":[117.027105,23.419562],"childNum":18},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@B@@@BB@@A@@@@@AA@"],["@@A@A@@@@BAB@@@B@B@@@@BB@@@BB@B@@@@@@BB@@B@@BB@@B@B@@@@AB@@ACA@@@@AA@A@@@@BA@@AA@@@A@@AAA@"],["@@A@@B@B@@@B@@BB@@B@@A@@@@@A@@B@@A@@@@A@AA"],["@@@B@@B@@@@@B@@@@@@A@@A@@@A@@@@@@@@@"],["@@BBB@@@B@@@@@BAA@@@@A@@@@@AA@@@@@A@@@@A@@@AA@@B@@@@@@BBA@@@@B@@@@@B@@"],["@@B@@@@@@@@@B@@@@@@A@@@@A@@@@@AB"],["@@BB@BB@B@@@B@@@B@@@@AB@@@@C@@@C@A@@@@A@@A@@AAA@@@@@AA@@A@@@@B@B@@A@@B@B@@@B@@@B@B"],["@@@B@@B@@@BC@@BAAA@@@AA@@BA@@B@B@B"],["@@@@@A@@@A@@@@A@@@@@@@@@A@@@@@@@@@@B@@A@@@@B@@@@@BB@@@@@@@@@@@@@B@@AB@"],["@@B@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@A@@B@@@@@B"],["@@@B@@BB@@@BBA@@@@@@B@@@@A@@@@@@@@A@@@@@@@@@AA@@@@A@@@"],["@@A@@@@B@@B@@@@@B@@@B@@@@@@@B@@@@@@A@@@A@@AA@@@@@@A@@@@B@@@A@@A@A@@@@@@@@@@@@@@B@@B@@@@@@@@@@B"],["@@A@@B@B@@@BD@@@B@@A@@@@B@B@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@@@AA@AB@@A@@@AB@@@B@@"],["@@AA@@A@@A@@@AAC@@AA@@@@A@@@@AA@@AA@@@@B@@@@@B@@A@@@@B@@B@@B@@AB@@BB@BBBB@@BB@@B@@B@@BB@@@B@BA@A@A"],["@@@B@@@B@@@@@@@@B@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@"],["@@@B@@@B@@B@@@@BB@@@B@B@@@@@@@@AB@@@@@@@A@@@@@@@@AB@@A@@@@@@@@@AA@@@@@A@C@@@A@@B@@@@"],["@@ABCB@B@BBBBB@@@BB@@@@@BAB@B@BA@A@@@ABA@AA@@@A@@AAA@@@A@@@AA@@@@B@BA@@B"],["@@BEAC@C@AD@B@DAFADCBA@A@AA@A@CBAAAAAC@AA@A@ABGHA@@@A@EEACAC@A@AB@DABC@C@A@EAAA@A@@A@@@AB@BAD@DADCBEBGAGAEAGEEA@AAA@@@A@AA@@DA@AAAABCBC@A@A@@A@AAAACA@A@A@@@A@ABABAB@D@B@B@BABC@ABC@A@CACCEEEAA@AB@BBBBB@@ABA@ABAB@BBD@BABA@GBKDEBI@A@A@C@CAAAC@A@C@CAGAIECAA@AA@@ABE@A@@@A@ABEBA@IBC@IDC@AB@@ABBBBH@B@@CBCBC@AAC@A@C@C@A@G@MBE@EBGAC@C@C@A@C@A@EAA@C@C@A@CBA@A@E@G@CBABABAB@@A@A@AAA@CBA@C@CBC@ABCBA@AF@H@BDD@FAD@FBFJFHBH@F@DDLJJHPFB@B@B@B@FAB@DADAF@F@D@DCDIBABABCHGFEDAFCF@DBDDFFDDBBD@FBBHDJDDFBFD@HFHFDHFNFP@HAFCFGBE@EBA@AD@DAB@BAB@B@B@VJFHDJBF@B@@BBDBB@@B@@@@B@B@B@D@B@BABB@@BB@D@BBB@@@@B@@AB@@@BB@@BAB@BADGBC@AAA@AB@BA@CACAAA@A@AAAC@AAA@ABGDCDA@@B@DBB@BBFDDBDAB@@@BA@C"]],"encodeOffsets":[[[119959,23930]],[[120103,23812]],[[120062,23775]],[[120133,23844]],[[120128,23843]],[[120127,23839]],[[120118,23836]],[[119894,23893]],[[119912,23877]],[[119934,23877]],[[119945,23914]],[[119922,23949]],[[119958,23983]],[[119919,24041]],[[119921,24047]],[[119820,24026]],[[119726,24019]],[[119957,24020]]]}}],"UTF8Encoding":true});}));