(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('亳州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341602","properties":{"name":"谯城区","cp":[115.781214,33.869284],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@DA@@BA@@BA@@BABABADAB@@@B@BAB@BABA@ABA@@DAVAH@BABA@AFGDCDEDADCDCFAHGDAFCFCDAFCBC@C@C@EAE@C@E@CBCDGDCFABBF@F@LAHBD@HAD@@D@B@BAF@D@B@P@H@HBB@@DBFDF@D@FCFADABCBEBEBG@CDEHCFAH@DBHBD@HCFAHAD@D@F@F@F@FAF@HBF@D@FAFCDADADCDCJGDADCDCDCDCDEFGFCBCDEDCBEBC@CAEAEACAGAGAECA@EAAAGAEAECEAGCEAIAG@CDEBCDC@CB@D@D@B@B@BBD@F@F@DAHAD@BABCBA@C@E@E@EF@J@FAJADAHC@A@A@A@A@A@CDBDBD@B@B@BABABCB@@ADA@A@ABA@@@AB@BAD@B@D@@@FA@E@CAECE@@@A@@BAHCBAD@BABAAKAC@EAEACBABC@AA@@ACAEBABI@@HA@E@CC@CAE@AF@HAL@BID@BA@AAEACAAE@AGHCFAFABA@C@A@AB@JCD@BA@A@AACCC@C@A@AB@ECCAME@ABABCB@DC@ABEBEDE@@DE@A@I@ABABEBEBA@A@CFIBC@CAA@ACAICAAA@E@CBCAAADC@A@@C@G@GBC@AA@@AAAAG@AA@@CBA@CBABA@CAEA@@@A@AA@A@GBBEC@AAAACAECAAAA@A@A@CACAC@ACGEIACACACAAAACACCACCCCGCE@AAAAEBCDEHIDCBAD@F@DABAB@@E@CBCB@BAD@BBFBFBB@B@B@BA@ABEBC@@A@A@AAA@@@@CAABE@@AA@A@@AA@A@A@A@AAA@C@@AAACAA@AAAAAAA@A@AAA@A@A@A@C@C@A@A@A@@@CBE@@@@BC@@BA@A@ABABA@CBABEBA@@@CBABA@A@@CAA@A@@@A@@@A@A@@AAA@@@BA@AAA@@@AA@A@@A@@BA@A@@@A@A@A@ABC@A@@@A@CAA@@@AAABE@@BABA@A@ABCBABA@CBA@AB@@C@C@A@AAGACAA@ABGDCBGDCBCB@BAACBC@E@ABC@ABABABSLcTGDEDCEAECEAECEAECE@E@E@EBE@C@CAC@CAGAEAA@EAC@EBE@CBGDCDGFGBEDEBCDEDCBCBCDCDCDCBCDEBEBCBC@C@G@E@E@CACAE@GBGCE@CACEECCCCECCAAAA@IAGA@@AA@A@A@C@EAGAMCM@C@AAA@A@A@I@IBCBA@A@A@AACABABCBCBA@AB@@C@@@@@A@@B@B@BA@ADABABCDABABCBABABCD@BA@@BABCDABABCDCDABA@AB@@@BABAD@BABCDAB@@A@C@ABA@A@C@C@ABA@@@A@@@AAA@A@@@@@A@A@A@@@ABA@CD@BA@A@@BA@@BA@ABCBABA@A@@BA@@@ABABAB@@ABE@CDI@A@CBE@A@@B@B@@CB@BABABCDABABAD@B@@KDABE@E@ABABCB@BAF@@EBA@ABCBC@@BAAEBC@CBA@@@AB@DAB@@ABC@A@ABCBCBIDA@@@ABKDKDABA@A@IAA@CAGAC@@@A@CBA@C@A@A@A@ECA@EAE@E@EAA@ABA@@BCBINGLILEJEJADCDCF@@AB@DAB@DAF@FA@A@AB@@@BAB@BB@@BB@@BADADEVCN@FAB@DAB@DADAHCHETENADADAF@BA@@BA@GHADA@@BABABADABEHADABABADADADABCJAB@B@BBD@P@DEHAF@HBD@D@BNBB@A@@BAB@@ABA@@B@B@BA@@BC@CFCD@B@F@FBDFHBBBF@BADADCFAD@DADADCDCDCDCFADADCDGDCBEDCDADCJ@B@D@BABIJAB@@@BBDBB@D@DBB@@H@D@BBDB@B@DBB@@BBBB@@D@B@B@B@BADADADABAD@BAF@DADAFAD@DADAHCB@FF@DDNBHBFBD@DAD@BAFBD@DBDBBBBCBABCBABABAB@BBBBB@@@@B@LBBB@BBH@R@@DBHDHDB@@B@D@FADADABEZDB@@@DCDCDA@C@A@ABADA@CD@@@AA@@@AA@AAA@AA@A@A@A@A@A@A@@@AAAAA@CCAA@@A@ABA@@@A@A@A@A@A@ABA@A@A@A@A@@@CB@@A@@BA@@@@BCB@B@@ABA@CDA@ABA@A@AAA@A@E@@@A@AAECAAA@@AA@@@A@E@A@@BA@@B@D@BA@@@ABC@AAC@CAA@A@@@A@@@@@AF@DBPBDB@B@HADABBDDBD@D@BABEBAB@BBDDDDBF@DBFABB@BBF@@A@EDCBED@BBABBABB@AB@@@@@D@FDJBDBBFBDB@B@D@D@HAD@B@DBBDDD@DBD@BB@DCH@D@HBL@HBB@BPDB@BB@D@FBBBBBB@B@@@@CBGBABAB@D@DBBBBD@@@FP@FDF@BZBB@BD@BABADAFABABAB@BBDB@@BB@@BHFJDDBD@@@DA@A@@BADAFDFBN@JAFBPF@B@BCL@FBBBBFFBDBDAJFBD@B@DEFAFADBFBHHHFDBF@RAFBB@D@FADA@EBA@@HBBBFBBBBB@DDBD@LFFBJHDBB@NGVILAH@H@DBDBJFBDB@"],"encodeOffsets":[[118557,34892]]}},{"type":"Feature","id":"341621","properties":{"name":"涡阳县","cp":[116.211551,33.502831],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@A@CB@JAB@B@BABEB@BA@@BA@C@EAA@G@@D@H@JAL@B@J@FBD@D@@G@G@CAC@GAC@CAERADAB@D@BAJAB@DAB@B@FABEB@@ABG@MB@FCD@DABADC@ABEHA@E@OJ@BA@E@EJA@A@C@CBEB@BA@@AE@EEM@EAI@G@EBC@CBGDCDEFGFGFEDEDEFAHCJ@HAL@JAHAFADADABG@CAEBCAE@A@A@A@AHAHA@OI@E@C@A@@A@IBED@@GFAB@@ABA@EA@CAA@KACAIA@AACC@@A@C@AAA@CAA@CAC@A@A@A@ABABABA@EAAAA@E@ECA@CBAB@DCBADABAD@@C@C@A@AFEBCBAAI@EAAGMAMFSRUO@EAGCGCGCCAGAGCGCEACCCCACCAEACAE@GAE@EBG@E@G@GBGBIBGBEBGDCDCBCDEDCDE@EBGCCCCCCCAEDE@C@E@CAEECGCCEEECCCGEIEGCMGECGAECGEECG@@@@@@CEACCCCAEAEACBE@GDEDA@CBK@CAC@G@GBE@CA@AAE@AC@A@CAC@C@E@A@A@AB@B@B@F@BC@A@CBE@A@E@C@A@CACAIGAAMEC@@@EEICIEGEE@GDCBCDCBCBCBE@E@G@C@EAG@GCA@@AACCEACAA@@E@K@IAG@E@A@A@A@CBA@AA@AACAAEAAAA@ECA@AAC@AB@B@@EBCB@FAD@B@BA@CBMCEB@@A@ABABA@ABABABADABABEDABA@G@I@AA@@AA@AAC@@CAG@I@CAC@EAGAA@AAAAA@A@@BAB@DA@CBA@@B@FBD@BA@CBCACCAAECA@C@A@M@I@A@AABK@EAAAAECC@CAC@CBC@ABA@ABIBC@E@@EAA@C@CAAAA@AA@@A@AACAAA@@@A@CBC@EBCBE@G@CBA@IBA@E@@B@D@DBH@DBH@B@BA@C@GBC@A@ABAD@@ABABEBE@A@AA@CAECE@@AAC@EBA@A@IA@A@A@CAA@@G@U@@C@ADIBE@AAAA@CAC@A@A@GDIFEDQHCBCB@AAAAAAA@@@AE@A@@AAA@ACAECEAAAGAC@E@A@@@ABAB@BABCBABABABABAD@BABAB@B@B@B@BAD@B@B@BABBB@D@BBB@B@B@B@B@D@BA@@B@B@BCB@B@BBDBBBB@BBB@FAB@BBB@BAB@BADABABA@CB@B@B@D@BBD@B@B@BABAD@J@J@B@BBB@B@DDNBNBH@F@D@B@BBB@@HBJBB@BBDBFDDDDDFFBD@DDFAH@HBFBD@D@F@F@H@DADADAFCFADCDCDCDADADCDCFADCFAFEHCHCDAH@DAF@FBD@FBBBFBH@DBD@D@DAF@F@F@FDFBFDFBFDFBFDFFCHCdSTKBABABAD@BAF@D@DABB@ADADAHCDAHCBAB@DBHBBBB@D@D@@@BAB@DAB@BADABAB@B@BA@AF@BABB@@B@DBB@@@B@D@BAB@B@B@@@B@B@@AB@@@@BBB@@B@BBB@@A@@BB@BB@B@@@B@@@B@B@DB@@@BABAB@D@@ABAFAB@DABAB@B@BAB@@AD@@@@AF@D@@@B@B@B@D@D@B@B@BBB@B@BBBBBBB@BBBBDBB@@@DBB@B@B@B@BBB@@@BBB@@AFBB@D@@B@BBB@B@@@ADAF@BABA@A@A@EAEAAAC@ABA@AD@D@FA@ABCBE@C@ABCDGJCFADBFBB@BDFDHDDBDDDDBBBBBBDBDBDFJDH@BBDBD@D@B@BBBBBFDDBBBBBD@AFHAB@B@@B@B@@FBDBB@BADAB@DA@@BBH@BBBB@@BBD@HAH@D@@@@BCDBBDBDAF@B@BBJDDB@BBB@DADEJ@D@BABAFAFAB@B@J@BCF@@CFAFAF@BCDA@ADAB@BNFDBFD@ADADAB@D@DBFB@@H@B@R@B@D@BC@A@CCAAA@A@ABCBABEBC@CBADCDCBAB@BAD@@@DAD@DAB@D@DAHAFAB@DA@ABABABA@ABC@ABABABABADAAE@ABABE@EDGDEDE@CDCDEDCD@HAF@D@H@HBFBFDDDFDHHHFFBDBFBHBHAHBF@HBLDJBJ@H@F@HCH@N@HBF@FDDBDDBFBDJHDFDDHDHBHBHBHBHBDBDBBBDFDFBD@BBD@BBBB@DADABABA@@B@D@@@B@B@@AB@@@@BBD@DBD@BFBLDJBJB@AFAF@J@BABBB@DDJAFDH@BAD@B@DB@BBDB@B@BAB@BBL@"],"encodeOffsets":[[119188,34594]]}},{"type":"Feature","id":"341622","properties":{"name":"蒙城县","cp":[116.560337,33.260814],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCFCF@F@F@J@H@HBHBHDFBBDFFF@HHF@bDVHZALMpElFZGTOBEDEDEDCBCFCDAH@J@HBFAH@HCFCFCDEFGDAHCJCFAHAJAFAJCHAD@DAB@FAB@DAF@JAH@EAE@AAC@CCEAACB@BCBA@AAC@AAE@CEA@CBABG@G@ADE@ABA@A@AACAAAE@CACAEAAACACACCI@ABAFA@A@AAACKAAE@@AAE@A@CBADGBA@CCK@E@EBABC@A@A@@BABADCDCFCFC@E@EBCBI@GBCBG@C@CAGBCBEBC@E@EBCBEBEDIDEDEBEBCFEBCDCBCBCBGBEAGAE@IACAACEACCECCCGAEAG@C@CACBG@EAE@EAE@A@@@@@CACACEGEAE@CDCBADCDCDCFADEBE@EEACCCEECCCCCCECCEAAECCCACCCACACBC@CDGBCDADEDEBGBC@E@CBCAC@EBC@GACAEAACCEEEEECCEAAAEAC@EBE@GBCDABE@C|YjOPIJKBQCWAECEA@A@EBA@AD@@CDA@A@AAA@BA@CBAAAC@A@C@A@A@ABA@C@CDC@A@AAC@A@C@@@A@@BABB@@B@BBB@B@BABA@C@AECAA@A@AB@BBB@DABA@C@AAAAAAA@EAE@AA@A@C@@@ABAAAACBE@@@C@AEEAAACCECGAC@AAE@@CG@A@AAG@A@A@ABGBA@A@A@CAE@A@AAA@ACG@AAA@@AE@AAA@CGBEBoNQBYBSBQ@uBWB[FkJmL{NV[FwLUFWH]JYHKBUHIBCBC@BD@B@DAB@B@F@B@B@LEHEDEFELCF@FCDAH@D@HAFADCHAFCHCDADAHEFADCDGDIDCDAB@BBB@@BBD@HB@D@B@B@@BBB@FBD@HBJ@F@@B@B@BBBBBB@LAFB@@@B@BBD@F@D@BBD@B@D@HAF@D@DAB@D@H@B@B@BBBB@B@F@BADA@ANEFAAAB@HCB@D@`ED@@AHCB@B@B@BB@BBB@D@DBH@B@BB@BBJDB@@BBB@B@B@BAB@@CBAB@B@DAD@BBB@BB@D@D@F@B@BB@@BBBB@B@FABAB@@AB@@@B@@@B@FBH@BB@JBBA@B@B@@ABADIFCFAB@BB@H@D@B@@D@B@H@P@DBD@FADAD@BABE@C@A@C@CAIEEA@@C@EBA@@BBD@D@DDF@D@BBD@BDBB@@FBDAHBDBD@HA@C@A@A@A@OEUGCFCDAD@BAH@DBFBJ@D@B@B@BABEDA@C@CBIBE@K@A@A@EAAAC@EB@@CDA@CDEBCBMBC@ABA@C@ABC@A@@B@HE@KBA@@BABA@ABI@QBA@A@@D@D@B@L@@ABA@EB@H@BABABEBC@A@@DAB@BADAB@BCD@BEBCBEBA@A@A@ABCBC@C@AAAB@DD@@DBF@HAFJ@B@@BBB@@@DCBAB@@ABCBADCDA@ABABC@A@C@@@AB@FCFAFAFF@HFJFJDFF@@D@NFBBJHDBDBB@D@F@B@F@DAB@D@@A@E@A@ABAB@B@F@D@D@DBB@D@@BBF@BDBF@HAH@D@DBL@DAB@FCHCF@DAFBFBDBDDBDDF@@@@@@DHFFDHBFDHHFDNFHFJDHDDFFDFHDFDBF@D@F@DCFBFDDDDDDHDFAF@DCFCDCDADCHCFAHAJAHAHAH@F@H@FAF@HBF@DBFBDBBDDDDDFBHDHDHBDBHDHDHDFBP@"],"encodeOffsets":[[119342,34274]]}},{"type":"Feature","id":"341623","properties":{"name":"利辛县","cp":[116.207782,33.143503],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BEBEDE@EBA@@D@B@D@BABAB@DCBCDABA@@BADA@C@@AA@AA@I@BE@GAE@CC@@CBABBD@D@DABAB@B@B@FADAFA@ADC@ABABC@ABA@CB@D@FABABA@A@GFAB@BA@@@K@A@C@CB@B@RAJ@BAB@BA@AB@LAF@@G@AB@D@BAD@B@BAD@NADAFADCB@DC@@FAD@BBFBB@B@L@F@JADAD@B@FCBA@A@A@A@CAIAE@CBG@ABCDCDEVHPFB@B@B@D@B@@GACACBGAC@EA@CA@AAC@A@CCE@C@CAC@AB@FAD@@@FBJFDBD@B@D@F@BA@ABCBC@EAC@C@O@G@A@CA@C@G@A@@ABADEJEBCBA@@@A@AABIAA@@AAG@E@A@@@A@@BA@@BABA@E@AAAAA@@AAA@E@C@C@A@@AAA@ABC@C@ABADA@@BA@A@A@AAA@AA@ICAAA@@A@AAG@C@CAA@AAAA@A@A@GD@BC@_FC@A@GDA@BBEBMF@BCBABE@A@A@AA@A@A@A@G@CBA@C@CBE@G@C@AAC@A@C@EAC@A@A@@EAKBA@AAAA@A@A@AE@I@GAC@EAA@AA@@@A@A@CGAC@AA@@AA@ABADCJCHCDCBCFEBGBCDCDGBEDGBCBE@G@CBGDC@EDEFKFEFCFG@K@A@A@E@ABA@C@AAC@AACACCACE@A@ABE@CBCACAABCAG@C@GBA@AAACACCAA@CAEAE@CCEAEACAA@CBG`]BCFEDEBADEFEBA@A@AAG@E@C@CDG@A@C@@ADABABABCBCBSBA@CBA@C@A@AAAACE@@EACCEEECAACGCCECGCGAKCIAICE@GCEAGAEAECEAGAECEAEAG@EBC@GBEBGDEBGDADCBEDIBGBCF@D@FAD@FEDCBEBE@CBIAE@E@E@E@G@G@EBEBGD@B@DAFAD@@ABAD@DADAD@BAB@B@BABIFABIFADCBABAD@@@BAB@@A@BD@@A@@BADEF@B@B@@@@AB@BA@A@AB@@BB@B@@BB@@@@AB@@@B@DBB@@@@@B@B@BA@@BA@@@@B@@BB@@@B@@@@ADA@BB@@BBB@@B@@@BB@@@BB@@@B@BA@@BAB@@@@A@@@A@@B@@@B@@CBA@A@ABCBA@ABABA@@B@@A@@@A@@@A@AA@@@@E@G@EBG@G@GBG@GBIDIBG@KBGBEBEBCBG@EDE@C@EBEBG@G@EBG@EBCDAFFFJJ@LAH@HI@ED@DFTBHEJAJCDMDGAUCE@GAIEE@EDBHFFBBH@@FADIDKBIBEBEDCBEDIBEBEFIDMBMFKDGBIBGBIBGBGBA@IBEBEBIBI@A@@@CDAB@BA@C@C@ABA@@@A@C@@@A@CBC@AAA@E@E@E@A@EBE@K@A@@L@D@@JBBJB@@FBD@BF@@J@HC@A@M@ABADG@K@G@M@A@A@AB@@@H@BABA@AB@B@B@@@@NBH@BJ@RAHEBMBSBKKAF@DAD@FAF@F@HBDBDDDDDDDHDFBFBFDBDBFBF@DADCDCFAFCFAFAD@HCFAFADAFAH@F@F@F@F@FDH@D@FBBDDFB@@BD@BBBFAB@FANCHCBADADCDABADAB@JADAB@D@BABAFAHEBADABC@@FEBADCTODCHGBAHE@BBFBD@BB@FB@B@BB@BBBBB@@BABADCDAB@BAD@DABAB@B@BA@MD@BA@@BAHBB@F@@@BC@AB@@@D@BBBBDFFBB@BAB@BABA@@B@DBB@BBB@BDBDDB@@F@JAB@BABABA@@B@D@@BBB@NDHBBBDAABAH@BCBBB@BBD@B@BABCBC@CB@@BDBB@BAD@D@BBBAB@BABABABC@A@AB@DBB@@AB@BCB@BAH@DABB@F@D@HBBBFBFDDB@BBB@BB@F@@B@@BBBBBB@BDADARGFCJEHCB@B@D@DBB@BB@BAFCJ@B@DV@H@@@BB@D@B@BJBB@B@FAD@BB@@DFBF@DBBB@F@FABABA@@BCBAB@D@HAD@B@@A@AAG@CAG@C@C@AF@B@JAB@DAH@F@DAFAD@DAB@@@B@BBBD@B@BB@@BBBBB@D@DBB@FF@D@JABAB@BAD@DAD@DBD@FDBBBB@FALBBB@J@N@B@D@B@FDBBDDDBDAB@@AAC@E@AB@DAB@@CBA@AB@B@BBBBB@HBFBD@DBJ@H@DB@@BD@BBB@@BBJ@H@B@BAFCBABABCBABABAB@BABAB@@@FANDDAB@@A@ABC@EDAFA@@@ABAD@BBB@FDB@BBFBBBBD@BBBB@DAB@B@B@F@H@JBL@F@@@BBBDDFBD@BB@HDH@FBD@H@F@F@DADADADCDAHC"],"encodeOffsets":[[119056,34167]]}}],"UTF8Encoding":true});}));