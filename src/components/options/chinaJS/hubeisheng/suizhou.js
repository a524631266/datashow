(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('随州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"421303","properties":{"name":"曾都区","cp":[113.374519,31.717521],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACA@CAEBCA@@C@@@A@@A@@B@BC@A@A@@@@@AA@ABA@CB@B@@A@A@@A@@@A@@A@@A@@@A@@AAC@@@AAAA@@@A@@BABA@@AA@A@@A@A@A@@AA@ABAB@BA@@BA@@AEAAAA@A@@@@C@A@@BA@@AAAC@@@ACA@@A@@@CBADA@A@@@AACA@@CBA@@@AA@@@AAA@@@E@ACA@@AA@A@AA@@@A@ADA@@B@DAB@@A@AAA@ABC@AACA@@AAA@A@C@@@ABA@AB@D@B@B@@EBC@CBCDAB@BAB@BA@@BA@ABA@CBC@ABGHABABAB@BA@EDEBABIJADGJABA@GAA@G@C@@AA@@ABA@AACAAAAA@ABA@A@A@GCCAAAE@EBGDE@ACEGC@G@QF@@C@IAKCGEECIEI@MBEBKLIFEFKDIAKAMCGCEEAKDODODIDM@MDQCMGIECCB@DCDC@E@CA@CAIAGAGCEAAAAGEKCCAAIACC@EB@F@DAJ@DA@@D@@MDOFA@ED@X@`@JBHBFHHBD@H@N@L@FADCJAPCRANBFBDBFFFLLJHDD@B@DABADGBKBKBGDYPONGJCHAD@DBDBBJDNHNFHFFFBDBDAFEHGJEDAB@D@DBVDTBJ@F@FBFBDJHHFDDBFBF@T@PBVBPBHAFADCBKDOJGDIDEDCDCD@B@DBBBDHDDDDFHFDDBB@DBJ@DBBDFBD@D@H@HAFALAJ@D@BBDBB^ZFHDFDHBNDJDLBFBDHFHFLJLFBDBD@DADADCDKLKNGLGHGFJDNBTBRDpJLFLHHDH@L@V@F@HCJANCNAL@HADBD@DDBDDHBBDDDD@BBD@NC|@XBFBDDDJFRJ~bJHJFDBF@DAF@RGJCDAD@B@BBB@JLBFDDFBDBFBF@F@D@H@BADCDCBCLWBABADAD@HAJ@D@B@BABABCBAB@D@D@D@DBBBBBDDDBDBR@H@@A@GBEDIFCNCFAHCDGAGEIGKIGEEEGCGAEAGAKAECEAAC@C@CBEBE@AACCAAEACIAACCAAGCA@@AAABA@AB@FA@A@KAK@A@@AAA@CCACGCE@ABADCFE@IDC@CACAIKIIGKEIAAAEBCBAH@HEHGCKAGEIAGCGFCNCJCHGFCBEFKDK@IBKAIEGGKCGCE@EBGDKFCAG@ECICIAM@EBIAGAKEKCI@CCMEIAC@A@C@ABAFCDCDE@E@CCGAG@CBEBEFG@A@CAAKEGACCAC@EBC@AD@BADADAJCDCFEDCJEDADCBE@I@GBABADAJCDABABEBE@E@CEI@C@CBEDEBEHGBC@ABE@EAECGEEAGAEBMAECEGEAC@EBGBEBCDAFAHCNAFADABC@CAG"],"encodeOffsets":[[116322,32178]]}},{"type":"Feature","id":"421321","properties":{"name":"随县","cp":[113.301384,31.854246],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DG@EDAFCBC@CACGAeOCCEICE@CBGJIBEBM@CCAGAGACAACDYBAHEDCBCF]BGNKDABEFCDABBNFDBBABC@G@CBADCDM@GACKGIMOWACDSBWAGIMSUGCGCA@C@ADAJADCBMDGBA@AAFUF[BKAQUFC@A@@C@OCE[UCEAA@AFABABCAEBEDI@GEIKKSMOSKMAA@IIKGEECAAAEACAECAC@A@C@ABA@C@GAAACAAEAGAEACGAECGBEDEBEA@E@K@IAMCICGAIDGDM@GG@Q@CACACCAAAACAC@C@C@A@ABADABABA@C@I@GBC@CBABABKXADCDCDABG@C@E@E@EACAEACCAEIKA@AAA@C@CBIDQHE@CBE@CAIEIG}aQIIECCACAE@WD{@MAC@ACCCCAACGACCCC@CAGBK@MBMDIBGDE@U@K@G@GCKGKEoIQCSAMAICHEHGHKLMLKDCBCBC@CACACKEKIGEGEACAECKCIAMCGCEEG]YAAAC@A@CBIBKBE@G@G@CACCEAA@CAI@CAACCGECECCGCACAA@C@ADCDCFCJCHCPILCDABCBEAGAOAU@O@SAEAECCGEIGACAE@E@EAICSAU@C@CBAFCHIFGBEACACEEGEMEMGICAAAC@CBCDGHIPMZOHCLALAHABCBA@C@ACCIGKKEEAEACAEBMDQBODIBC@E@K@M@GACGGAEAG@I@_@WMHMJQDI@KEEAILGLKPEDKPGHMNKHMDKFSHIDGDA@CAAAAEEAEBGLADEBEBADBD@DAFDBBADEBCD@LHBD@DEBC@E@@DCDABGDADECACAAACKGCACAC@CBEBADCAEACAC@CF@FAFCDKLKDIBMBI@OCIAGEECKCKFEDIHGFKBK@GCEGECMGIAMCC@ECIDKDKNOTINGLGHGDMBO@ICMAOAKBIBEJCL@H@JBLBJ@JAPAFGTGNELGLGLIJMHGBSBM@EBEHCJELCJKNKJQDIBOBQBKAODILGHCBGFGBKAECECEDGBEFIBGHCJAHALDHBFBJ@FALALCHAJBHBJ@L@LBJDLHFJFFDFFDHBF@LAHAJCL@JDDDDJ@HATCHEPGHAJFDLFFHFJBJ@J@H@LBJDDHFHJTHNHNJPFLHFHDNBNCHCHGDCLBFDHJHJBLHFLHHHFFDFHJNJFAH@F@FADCHIDADAHADAF@FDHDHJDFFHAHCHCHGFCJCJCLEJ@JAHDFDFDDFBF@LBDAHDHBDFDDDFDJDF@HBH@JBJ@JBFDDFCDABBBH@DDJDDFAJ@DCJBF@FDBHAJCHIDMFEDMBMBK@KD@D@L@PAH@TB^AXAbJNXRJJZ^TTPTPVAVOLWTGN@TBZDVHRHPBPAR@R@VCRIVGXFLHFRBX@HBXHPPRVJLFRAPWTWNGLCTANRLZFtIB@D@LNDHH@bDJBB@D@DCB@FBFF@D@D@FFVBF@DAD@D@F@BRPDBFDJ@J@H@HDZNLDF@HCFCDCLADABCBIHOFE\\QROJCRGFCFGLEHGJABCBA@G@GBEDEFCFAJAL@HALEHCFCDE@C@A@@ECYOAC@C@CDCBAF@LAHABAHILKHKHCFAFAH@H@NFHBB@VGDCJGBE@CBCDED@J@JALCFIDCF@D@HDfZVNHBDBBBDFDDDBDADADBFBFBHH\\RRHB@B@HDLHDBBDBB@BB@BBDDB@F@D@B@BAB@BABABAB@B@BB@@B@BBB@F@B@AGAIAG@EBG@EBEDAFBJDFDAF@HAFAFCHA@@@A@A@ABAB@BA@@FB@@BFBBBFDBBBD@B@DB@DBB@D@DABAD@D@D@BBBBBBD@D@BBCB@BADAD@B@B@B@FABFCB@FBBABCBA@AB@@ABBDBB@D@H@D@B@BAB@B@B@@B@B@B@BABABCBC@EBC@A@ABAB@BABBB@B@BB@@BD@DBB@B@B@DADADADABCBADAFAB@D@FBDBBBBB@B@B@D@F@F@B@D@F@B@BFDHFFBDBDDBDBD@DDDBD@H@BDDBBBBBBBBBFBB@BB@D@D@B@BABA@ADAB@B@BBDBBBBBA@@BA@ABABABAB@B@BDBBB@@B@@ABAB@DA@AD@BA@@DBB@DBBBD@B@F@BAB@DCDA@@BAB@@BDBDDFBB@B@B@B@@AB@@C@AB@@@@A@ABC@ABAB@@@B@B@B@B@B@@@BBBB@BBB@BBBB@BB@@BATGFAD@BABCBE@K@CBCDCBAB@D@D@B@BCBAD@B@BCBC@CACCEAEA@EAC@@A@@AEBCJKFEDAB@FBBDDNB@BBF@DAD@BABEBG@CAACAGCIECAISAK@EBILKLEBC@@"],["@@BABA@C@E@ACAA@G@A@@@@@@@@A@AB@@@BABA@@BA@A@@A@@A@@A@A@A@A@@@A@@@@@@BAB@B@@@BA@@B@B@D@B@HABEN@B@B@BB@DBBAHCDCDCDC"]],"encodeOffsets":[[[116497,33094]],[[116499,33059]]]}},{"type":"Feature","id":"421381","properties":{"name":"广水市","cp":[113.826601,31.617731],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IFGFEBG@GAEAEACGGGGGECKEC@IAKDEDBHADABI@CBC@A@CCAA@@BA@C@A@ECC@A@@@ABC@@@AB@BE@I@@@AAA@A@A@@@AH@BC@CAEA@A@ABC@A@@@AAA@@@A@ABC@CD@@CAECCCMEA@AAAABA@A@AEA@@A@@B@B@BAB@@CAAC@@E@A@EAGA@@AB@B@BABA@A@@@CHBB@HBDFBBBHBB@F@D@DAHBDD@D@D@D@D@DGBSDKBEBCDEHCLAFEFCBKDEAGAECAECGAGEIAGGBEAGDEBEHCJAHBNEFEHCFGJKDICGCIGEEIACCIAK@KDGDKEGAI@GDIDADGHGFKFI@IFE@MBMDGFIBGBIBE@KGGCIEGEMMECEGEICICECEECGCG@GACCCGCECCACGCGEGECEA@C@E@CACA@C@A@EAAC@GAA@C@E@ABCBA@AHABA@ABABKD@@@B@B@J@BAFAFGHABA@ODCB@BA@@B@DBH@DADCBEBMBGDEBCBADAFAH@FBDHFDFBFANBFBHFFDHBF@FAF@BADGHAFCFAF@D@DFJ@D@FAFAFABCBIDCBABAB@H@JAFCDCBIFCDEFCDIDCBCBABC@@BAD@FBDDDHBLFBB@D@BEHAFAF@DBHDH@D@FCFCDEDAB@B@D@BBDFJDN@DDJFLBLBHAJ@FBNDJDJ@FBHEDCLAH@FDFDHHLFHBJAL@JCLELAFEDGHIDMDEDDHBHFJBHDLGHGFG@ABADBFBBFJHLJJJLDBDBD@JCF@DEBCBAF@HDBDDDB@BB@@@BBL@L@BEBA@@BABBB@BB@HDBBDDBBDJFBBBDDBBF@FADAD@D@BBDFBFBLBHBFDHFHFFJHHLFJBHCHGDEBMDEDCJAF@H@B@HCNCHBJDHDJBN@J@L@FFBFAFCHAFDHBBDBFBHBFDBBBHBD@B@BAD@B@D@DBBFBDBFBBFDHFJL@JBBLNPTTNLLFJ@HCJAFBFADABEB@BBBDF\\VDF@P@DB@D@VE@CTIDAH@BABCBEBCFETQHEDCRCNELIDGDGACCEGEAACGEGAAC@A@E@A@AAEKGIEEAECM@GBCBADAB@DADEFEB@BADBFBBBDADCLEDAD@D@F@F@JCHCFCDAD@D@BA@C@AACCCCCEICGAK@MAE@CBCDADAD@DADEFAJCF@DAD@DABCDK@G@GACAEBCBC@ACKCK@C@GBAFCFE@A@CAG@E@EBCFEDAFAHEHG@@B@@@DABA@@B@B@B@BBDDDB@@B@B@@AB@BADABCB@DBDBPHH@FBD@DDFJHPHNFFJLLDNBHBHC@C@ACG@A@CRKRIHEDCBC@G@IAECEEEIO@EBEBCFEBCBE@GAIAIBGDEFCFCJADCB@@C@C@CBCFG@C@C@C@EFKHGHCFAF@FBDFNJTNLHDBP@F@HAHAD@BBBBBBFBH@F@HAH@FDBDBLDDD@JBTALCB@@@@BB@@B@B@@B@@B@@BB@@@@B@@B@@B@BB@@@@@@@BB@@B@@@@@FFDHJJHJFD@FAAGGOIOAC@CBAB@DAF@BCDCDGDC@@@AAAGCCCGECEGEGG@EBEFGHEFCFG@CIEGGCEEGAECG@G@GFIJKHIJIHCHAHCDCBM@ICICICGGIAEEGAGCGCE@GAG@G@IBGBIAGACGMKQEOGOCGCKAG@EDIDEFAFAHBHAHABEAECIGAGCCGCGCCGCEAEAECAGBCBEACEEGCGEEAECCEACAGDIFEHGDC@C@IAEAGCGCICECEECEEI@"],"encodeOffsets":[[116788,32187]]}}],"UTF8Encoding":true});}));