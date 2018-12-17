(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('巴中市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511902","properties":{"name":"巴州区","cp":[106.753671,31.858366],"childNum":10},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@A@@@A@ABA@@@BBB@@@B@BA@A"],["@@@@A@BABAM@DFHA"],["@@@@@@@@@A@B@@@@"],["@@@@@@@A@@@@A@@@@B@@@@B@"],["@@@@@@CBAB@@@@@@@B@@BB@@@@@ABA@@@@@@A@@@@@@AB@@@B@@@@B@A@@B@AA"],["@@@@@@@@@B@B@@@@@A@A@@"],["@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@A@BB@@@@@A@@@@"],["@@FBBB@D@DABEJ@D@B@BJB@@@B@@B@@@B@@BBD@FBBB@@@B@DABAD@B@DBBD@HBFDFBFN@BA@@@@@@ADB@AB@@@@A@@@GB@@@NCZ@NDLDJDJLRDHJJJFJFTLZLHDJDFBL@HEJILIHCVBHDJDFHHBHBJBFAJAJCJCH@NFLDFDRNTHLBLBDBHBLBN@^ALAJARCNG@@B@@@B@BABA@@B@B@BD@@B@B@DBBBB@B@D@B@@@BA@@B@@BB@BB@@BBBD@B@B@DB@@B@@DFFDBBB@B@@@DDB@DDFDB@DAFAB@BB@@BDBFDBB@B@@@BD@B@BBBBBB@BD@@B@D@B@@ABBBBDB@@B@FD@@DBD@@@BAD@@@@AB@BAB@@@BAB@BA@@BA@@D@@A@@FF@B@B@BAB@BA@@@ABAAABA@@@A@AB@@@BA@A@@@A@EF@@@BA@@BAB@@ABB@D@@@AA@@@@B@FBB@F@@BB@BBBBBBB@@@@ABAB@B@B@@@@@B@DAB@@D@A@@BB@@BB@D@BDABA@@B@BB@ADBB@@B@BDB@@B@@A@A@A@@B@BB@@B@BBB@@BB@BBB@D@B@B@B@DBB@D@BAA@@A@AA@@A@A@@@A@@@ABA@@BAB@@A@@DCB@@AD@BA@@@AB@@ABABA@@BBB@B@@@BCBABEB@BADCBABCBAB@BA@ABABEBADGFI@A@ABC@@@A@@@A@A@EBA@@AA@A@@@AAC@A@C@C@C@C@@@CAACAMI@A@KBABADAD@DA@ACIAC@A@A@C@A@AB@BABACC@A@ADADCDADABABCBK@CAE@KCEGEIGACBAB@@AB@@A@A@@@AB@B@BC@@A@AA@EAIBGFCDABBDADBB@@B@B@D@D@BBBH@DBD@B@@CAK@AA@EBA@A@AAAC@ABGBABAB@BBBDD@BBD@@A@@CS@A@C@EAGBA@A@ABA@@BC@A@A@@BEBGBCBABABCFANI@ABA@E@ABAFA@A@ACA@A@@BADAD@B@BB@B@BBB@BB@BBDBB@@@BABCBCBAD@B@F@HADA@AB@CAG@AA@@@CBEBC@CEECCG@G@MAAA@@DCFA@A@CCAC@CBA@E@CBMA@A@ARQBC@CE@EDE@C@IAC@AAGCC@A@C@E@CBA@EBB@@BBD@FAJ@B@BAB@BA@MDA@@@@@@A@@FE@@@AA@AAA@@@AA@MAAEG@@AECAE@EBC@CACCACAAE@GDUJGDC@ECEAG@IDGBI@G@GAECCAI@ABEBGBA@AB@FAFABABEA@A@A@A@CAACCCE@A@ABCBEBE@A@C@A@ABCD@D@F@DBDB@B@H@BB@BABABCAA@CEKAAA@@AAB@@@B@B@@A@EAAAA@@A@@BAD@B@@@AAAAA@CBEB@@ABCD@BB@FB@BA@AB@@C@@AAAAA@@AEA@@AB@D@BAB@@AAAC@E@C@AE@ACC@ACAA@AAA@@A@A@CAA@AA@EC@@BABABC@IBABCBAD@D@B@DBFDB@BABEHA@A@AAA@CBCBCBC@AAACAG@SBECCAGEA@A@AABABA@A@A@AA@C@A@CAAAA@A@A@@@A@@AB@FE@@AAC@IBA@@@AB@@@DAH@@A@@@AABC@A@C@A@A@ACI@@BADCB@BABBBBD@P@@@DABAB@B@D@D@FA@@@C@@AA@@C@ECAA@@@CBABA@CAC@E@C@CB@BAF@FAFBD@DDDADABCBA@CAGAEAG@C@EBEBA@CA@A@EBABCA@@@AACAAA@A@BEBAAC@AACAA@ABC@A@AAACG@A@ABA@A@C@CACBGAA@AECEI@ABEFEFCBEBEBEDIBA@EAA@ABADGBCAAC@QICAC@A@ADADADABC@IAAAECAA@AAG@AAACCIGAAA@CBABC@CAE@IFC@OEACAC@CAQ@CBAB@B@DB@B@H@BB@BABGBAGEGCCAE@A@AA@@AC@A@EA@@@A@A@C@ABC@A@C@ECCA@@@AA@C@ABADCBEDKDAB@BBBDB@D@@ABC@A@AACCC@A@A@C@CB@BBD@BCDAB@D@@BB@BBB@@@B@B@@@DBD@@BBB@BAB@BBBB@@@B@@BB@@@@AB@@@BB@@B@@D@@BB@@@@@AB@B@@@BB@AB@@A@AB@@@B@@@BA@@@AA@A@@CB@@A@@@KGAAG@MEECAA@AAAGAAAAAA@C@A@ABAD@BADABE@CAICC@C@AD@BBDFDBB@BAJEHADBBBBB@F@@@FFDB@D@D@DCFCFABCBA@@A@ABGAA@ACBABA@AAAAAAAAABABEBC@GAKEA@EBCBEAEAC@EBC@ACAAABA@AFAHADCBC@CH@DAFADAB@BB@BDBD@F@D@BAB@DBBBBBDDBBBBD@BABA@ABCBAB@B@D@BABAB@B@BBBB@B@BAB@@ABAD@@ADADCB@D@D@@@BB@B@B@BB@BABADAD@DAB@BADABBBB@@B@DA@AD@B@BBB@@@BA@AAAA@AAA@AA@ABA@EBCDCBABA@CBE@ADABAF@D@B@DBB@B@BADA@B@BBBBB@BB@BADADABAD@B@D@D@BB@@@BC@ABA@A@@B@D@BDH@L@DBBLHBF@D@B@B@@@H@D@F@@ADA@ABAB@B@B@B@@@@BB@@BB@BDD@BBBB@BAB@B@B@@@BBB@@@B@BAB@@@B@B@@@B@BA@@B@BABB@@B@@B@@@B@@BB@@DD@B@@ABC@A@A@@BDDB@BB@@@BA@@@C@@@CAAEAAAAA@A@EH@B@@@BBB@@@BAB@@AB@B@@DDFBHHFHCDIFABA@@B@@@BABC@A@A@A@AAC@A@E@CDABABA@C@C@CDA@ABABBB@BB@BAHC@B@@ABABAB@B@@@D@BABA@GDGF@@IHBBB@B@BBB@@@BBB@DBB@@BBB@@B@BBBBBBB@@B@BA@AD@@AB@@@DBBB@BDBB@BBB@@AB@B@J@@ABAAA@@AAAAA@AA@@AA@@@A@A@ABA@AB@@C@A@A@AAA@CCACA@A@A@A@@B@@@B@B@B@B@BABA@A@A@AA@AAAA@@@A@A@ABA@A@A@AC@AA@A@KBA@AB@B@BAB@@ABA@@B@BBB@BB@@BBBBB@DBD@@ABABA@CBAB@B@B@BBBD@BBBBBBDB@BBBAFBBABADEPAB@BA@EBC@C@A@A@@AAACCCAA@A@@BA@ABA@@B@B@D@BEFABCDC@C@A@A@C@CA@@AC@AAA@AA@A@A@AB@B@D@D@B@DBBABA@ABABCBAB@@CFAB@BB@B@BABCB@B@B@B@@BAB@@AB@@BBAB@@AB@@BB@@B@B@D@B@@@BB@B@B@BBBBBBDFFBB@@@BAJ@H@F@B@@@B@B@BA@A@@@A@CA@AA@C@C@ABABCBAD@D@BBB@B@BA@@BA@@B@BABCBA@A@CAC@E@C@CACAAAEACBE@E@AB@@AB@DADCD@B@B@@AD@@ABABA@A@AACA@AACCCAAAAA@A@@B@BCBABAB@B@D@B@DAB@DABABCBC@E@AB@@ABAB@B@D@D@B@D@BBDHD"],["@@B@AAABE@C@@@@A@A@AAE@A@A@@AAAAAA@A@BABC@ABEHABAB@FBBBBB@A@BBB@@A@@@@@@@B@@@@@B@@DB@BBDAB@@BB@@B@BBB@B@@A@@@@DA@AB@@@B@B@@ABA@@@A@A@A@@@@@A@@@@BABA@@"]],"encodeOffsets":[[[109085,32721]],[[109213,32676]],[[109086,32721]],[[109086,32720]],[[109088,32714]],[[109089,32713]],[[109142,32658]],[[109146,32658]],[[109183,32635]],[[108981,32690]]]}},{"type":"Feature","id":"511903","properties":{"name":"恩阳区","cp":[106.486515,31.816336],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DGIAIAEACAEA@@AAAAACAC@AA@G@CBCBCF@B@D@BA@A@A@E@CAA@A@AD@B@DADADEBAD@D@BB@@@D@LCD@D@BB@B@BABABCDGBGAEAAABAAA@@@AC@C@AAA@A@AB@B@@@B@@@@ABA@@@@BC@A@ABCDAB@@CACAAA@C@A@CAAAAAA@AAC@AGECCAC@C@A@@BCBA@ADC@E@EBCLODA@AACAA@@ACEACOAAC@EA@@ACAABABCBA@AA@E@A@ACAEBGCAG@GAEAEAEAEBGBKDCBOJCBE@GAE@GBEBCDADADBDDBBFBDADEF@B@BBBBB@@@B@@BD@B@@@BABA@E@@BAHADADABCBCBC@ABAD@BABIFABGD@BABABC@C@A@AAAACBABADC@CBE@ABA@@@CABAAAAE@CA@@@AAA@@@CCA@E@CAABCDCBA@A@AAA@A@C@A@AB@BAB@B@DAD@BED@BAD@D@BABA@@@A@ECC@CAABE@ABA@ABABA@EBAACBABABADBD@BABA@CBA@AB@BBBFFBB@F@H@FABADABBD@DDBBB@DAPADABABC@CBAB@BBBBB@@BB@BAFAB@BABCBCBA@ADCFAB@@A@A@A@CCA@AAA@E@CBEB@@@B@BA@A@ABA@@BA@@BBD@@@@AB@@AAA@@CAA@@@AA@ABAA@@AAA@@B@B@@@BA@CAAB@@AB@BA@@B@@@@@B@@@BBB@@@BB@AB@BABA@A@ABA@A@A@AB@@BD@B@@@B@@@B@@BB@@ABAB@@BB@@ABAB@@CBEDABED@@A@A@C@KDCBA@ABCDABA@GBCBABA@AF@@@B@BBDBBDBHBB@BB@B@B@B@BD@B@BB@DBBBBDDBBBDAB@BCDAD@BAF@BDBD@B@@A@CBABAB@FBB@DABAH@BABADCB@B@BBBBBBBD@FADBBBBBBBBBD@B@HABA@EDAD@DFHD@DBFAF@DAH@B@@B@BABCBADABABCHABGFEHABADAJ@BADAD@@A@ABA@@B@@BBDBB@@BEDABADABAF@B@DCDD@D@HDB@DBBDAFBFAFBBDFBFFHFD@@BD@BABGF@@CDEL@H@D@DABBFDLAJCH@DBFDFHDJDDBFFBD@BADABC@E@A@E@C@A@ABABAD@B@B@BBBDBD@J@DBBBDBBBDB@BBBBD@F@@@@BB@J@D@@BBDBFJBBBBBBDBFFFJBDDD@@DBFBF@BABCDCF@B@DBBF@DCND@DADGBCBCDEDCFCDAH@DBBADDFDB@F@F@DAHBFDHBNB@@FDD@B@BA@@LC@@B@@B@B@@AD@D@B@@BBLKLOFGBAFEHCDCB@BAPEHCJKBGBIBABADCDAB@@ABA@A@@CGCC@A@AB@@@@@B@B@BB@@B@@@@@BA@@@@@ACGAC@A@@BAB@HCB@BA@AAAACA@@ABAB@B@B@DBB@F@@@BAB@@A@@BC@ABCB@@AB@FAB@F@D@BBB@HBAC@A@C@A@C@C@ABABA@@BAF@D@DABABA@CBA@C@A@C@ABABADA@A@AB@B@BBBBDDBD@BDBBBB@B@BABA@@BC@@@A@ADCBC@CBA@@BAF@F@DAFBBBDBDBD@F@D@DBB@B@DABA@A@AB@@AB@@A@AAA@A@CBCDABABAD@D@B@@BDBB@@@B@B@@A@A@A@@@A@E@GBI@A@@AAEEACAAAA@A@A@AAA@@A@C@A@A@@@AA@@BA@@BAAA@@BA@@BA@AA@A@A@A@ADABA@A@@ABADE@@BADABABAB@BAAA@C@A@C@C@ABAB@B@B@@BBB@BBD@@DBD@B@B@D@D@DCBAFE@A@C@A@AB@BAB@@AB@B@DBDDBB@BB@B@D@D@FAB@@ABAFOBCBAAABEAA@ACAAAAAAAC@AA@A@A@ABADAB@BABA@@AC@CAAAA@AA@@AAA@A@AB@BA@@BA@A@ABAB@LAB@B@@BBDB@B@B@BAB@B@@@B@BB@BBBB@B@B@BA@A@A@A@A@A@@@AB@B@B@B@BDDDB@BBB@B@D@@@BAB@BAB@B@@@B@@BB@@BBBBB@BB@BBBA@@@I@ABA@@AA@AAAACA@AA@C@@BA@@BCB@@A@AA@AAAAAAA@@@AA@AA@CAA@AA@@A@AAA@A@AAJG@@HEHCB@BA@A@C@@@ABABABA@@@AGDABA@@AAABABAB@DCD@D@B@BABADCF@B@D@BBB@B@B@D@BA@A@@@AB@BAJEDCEGGGEACC@@@ABA@@BA@A@@AA@A@@@AFGB@B@BBBBBFDB@@D@@@B@@A@@AAA@CC@AB@B@D@BA@@@ACC@@AA@@@A@@@AA@@@AAABA@@@ABA@@@A@A@@@A@ABA@@@A@AA@@A@A@A@ABA@AA@ACC@AAA@@AA@@@@@A@A@ABABAB@BC@@@E@C@G@@@A@A@CAEKGAA@C@KCG@A@C@AB@B@BAD@@A@@AAC@C@A@C@ABCBCBABA@@AAAAA@A@ACBABA@A@CAA@C@E@ABCB@BAF@DABABCDAD@FAB@BBBB@BBB@BB@BAB@@A@AAA@C@@BCBA@@@AAAACBABA@CBC@CBABABA@@A@A@AAA@@C@C@A@CDCB@BC@AB@BA@ABA@A@AA@A@ABABA@A@C@ABADABAB@BA@AACAACAACAAAA@CBA@A@C@EACACA@@ABABCBE@C"],"encodeOffsets":[[109275,32335]]}},{"type":"Feature","id":"511922","properties":{"name":"南江县","cp":[106.843418,32.353164],"childNum":5},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@B@@@@@BAA@BC@@@@@@ABABABB@@@"],["@@BAB@@@B@@@@BBA@@@@@@@A@@@@A@@@@@@A@@B@@A@@AA@@@A@@@@@@BADA@@@@BB@@@A@A@@@@@@@A@@KD@@ABA@BN"],["@@@@BAA@A@@@@@BB@@@@@@@@"],["@@B@@@@@@@@A@@AB@@@@@@"],["@@HDB@PAFBJBFBNHFFDFJHDFDDNDJDVPHHJFHDPBBDBDFHBBDAFAHALAV@LBJ@H@NBDADA@C@AEIAABE@EBC@C@EAE@CBG@CBAACBCDABA@@B@DD@@BD@B@B@@BD@BBB@@@B@H@BD@B@FAB@BBH@H@JAJCBCFADAD@DBDFFDF@F@BBFBDDBFDFDBNDN@HBNBDADEB@H@DAFAD@LFDBFAHABA@A@G@CDCDCFEDEFAD@HFLBZBFBDBDDBFBBDBFAD@D@F@HBLAFCTEF@F@BDDFDBDBJBF@DBBBD@H@D@DCB@D@F@D@D@BABADIFABAF@HDH@D@DADAFBB@FBDAH@FABCAAAEACAG@ECEAM@GBIDCDEHCHAHBPCFAFEDEFGDIDE@KAEAG@G@E@EFIBKJOBGBGCOCGEMES@IEQEMIEGGEEDC@IBEDEFEHAHEDEHAFCDIHIBEFGDEHKBEDEBCFAAGAAC@@@@A@@@AC@AA@@BEAC@CBCGACCGA@@B@AGAGACCGAA@@AAAAA@CBA@EAE@ABA@CBA@C@A@C@EAAAA@ABIBA@A@A@C@ABC@C@A@@A@@BC@AAACEEG@A@A@A@A@E@EACACAAAC@CAMBACA@ABA@@@C@@AAA@AAC@@AC@AAA@BADAB@@ABAAA@AC@AABC@EBCD@FAFBFCH@F@FAAC@I@@CAAAAA@AB@H@DABABADCBE@AGCBCD@@EBA@AEACAC@@@@ABEAOE@AADA@AEC@A@@BAFCFEFCAA@A@CAA@@AB@@ABAAAAAEBGBC@EDABAFCD@BAB@B@DBDBBABE@ADDBB@@DABAB@B@BBB@DCB@@ABAD@@@ACCC@EACECBCHB@@@A@AA@AA@ABA@@AAAA@CCEA@@@CEAACAA@@@ABA@@@AB@B@@@@AC@A@AB@FB@@@ABABA@@@A@@E@AA@@BA@CC@@AA@@B@BADA@A@@ACAA@C@C@ACAC@@CECCAACBGBCCCA@AC@AAAAAAEE@ABAD@@CE@A@@@BC@@@AA@EABADABAFCFAB@BB@@ABA@@@@B@BB@DAD@@@B@B@@@AA@@AA@BAAA@@@@CA@A@BEDEDAB@BD@D@@B@JCD@B@BABADC@EBC@CDE@ABG@C@A@A@ABA@@BA@AA@@AACEACAA@@ABCA@@A@@@@@AFAD@BBB@@ABA@@@A@@AAA@A@@A@@A@A@@BA@ABA@@@A@A@@AA@AAA@@@A@@AAA@ACAEE@CCCAE@A@A@ABABAFA@ABAECGAIE@C@CBEEIAC@@CB@@A@CAAAACAACCAEDAAEDED@@A@AACEG@@@A@A@A@@A@@@AA@AAC@@@@@AB@@@@A@@@A@@@A@@@B@@C@@BABGAG@A@A@C@EACACAC@C@CBA@A@A@GEAABE@AEAGAGDA@A@@GAC@C@@@@ABA@A@@ADADABA@ACC@CAKBAAK@EBABA@CDIFIDC@@@AAA@ADBB@B@B@@@AA@@CA@A@AA@CA@BAAA@@@ABCB@A@CAA@@AA@@@B@CA@CBA@@@@@A@A@A@AB@B@@A@AAAAAAA@@AE@A@EAA@@@@@BB@@C@A@BA@@BA@AB@@A@@FEB@@@B@B@@A@@BAB@@@B@BABBBA@@B@@ABA@A@A@AEE@@@BC@@@AB@@ABA@AB@@A@ABA@@B@@C@AB@@C@CA@@ECA@@@CAAAAA@BA@C@A@@@ACA@AAAA@A@AAC@@A@A@CAAEAC@@AAA@EBCBA@ECCCA@CC@@A@A@AAECCE@@@AA@@C@A@AACAA@@AAA@@AA@@@AB@@A@C@A@A@AACAA@A@@@ACA@A@@@ABABA@@@A@@@MHQDIBKB]BM@KAGACAKAKASGQMECKCMEG@IDIDIBEBIAGAGAEGICGCUAGDKJIJGFK@EAICGCYKSKIEIEIICGKQCICICK@MDY@M@@CEAECEAE@GACCAA@C@ABCBA@@@A@AA@EAC@AA@@@A@@@@A@@IA@A@A@CFIBA@C@CAAEAGCGAA@AAC@E@A@EBA@@BA@AD@BAD@@@BA@AB@@E@A@CAA@A@A@AB@BB@BDBB@BABA@GDA@AB@@@BBDDH@B@@@B@@@@@B@@@@AA@@A@@@AAAB@@@@@@@@AAA@@B@BDDDH@@@BAB@BA@CBCDABABAJAHILGDOFABA@CDGDEFABEHKPKLAA@@@A@CBC@@@A@AA@@B@@@B@B@@@@@@A@@@@B@A@@A@@@A@@B@@@@B@@@@@@@AB@B@@@B@@@@@B@@@@@B@@@@ABABA@@@A@AA@@B@AMC@EC@@MAGAECGACBE@E@A@ECCCABCAG@CBEDCDCFADADCHCBC@CHEHGHEFEFGJAD@BDBB@D@BADABAD@FADBD@DFB@@BDAD@DADAFCJABBBFDFAHBDDDDDBFDLB@@B@HBB@@BBDBFAD@DAD@@D@BBBBHBF@N@B@BCBA@C@AB@B@D@F@@@BAB@BABBFBFAB@F@B@BB@B@HAP@D@D@BB@BCFED@D@B@D@BBD@DBB@BBBFBFDHJDFDDB@B@B@DALEFABAD@HBDBFDDD@B@BAD@BABE@IBABA@CBCDABEDEB@BAB@B@B@DBF@BBFBBF@BBD@J@D@DB@B@JBDDDJHNF@D@DAPCRCN@F@DBDBJADKJABAD@DFLBF@F@F@BAFBD@JFdDJFDHDHBXFJBDDF@D@LBZDRDLBJDB@F@HAHBLBPDD@DBBDDFDFBD@B@DDN@D@BBBBAFAB@B@BBBDBBD@@@@@BE@@BA@CAAAB@A@AB@B@@AD@DBFCBAB@DBHBDBFADANDBBBBBL@J@DEDC@CD@BDDDFBFHABBD@B@D@D@DCFAL@DALCFCDABAB@BB@BAFBBB@FBB@DDBDJ@L@BBBB@@ADAFABCDABC@CBA@A@EBAD@BABBB@FBB@@DA@DB@BB@BBBA@C@A@@AA@CAA@AC@EAAAA@BBB@@ABA@@BCBA@@DCBA@CDCBAACCAAC@@@DCCAAAEB@B@DAB@@A@@@BB@BC@@@@@BDBD@@@BABAB@BEHEHOJGDEDCBA@C@AAIAGACAA@CBCBAF@B@DDHJJ@BBDAB@BADCDAB@JBF@B@B@F@D@DBB@B@B@FAB@B@B@BBBAB@B@B@BDD@B@@C@A@@@@@@D@@BB@@D@@@BB@FBB@BA@AFB@@BB@A@ABA@B@ABEAE@E@@BADB@@@AD@B@BDD@DBFC@AB@@@@@DAH@FBHBDBFBBDBBB@BADAFEHCDEDCBADAB@BDLBHCDADCBSJEFGFGBABCDAD@B@B@BBDJLFF@D@B@B@BCDA@@BAB@BBN@D@J@D@B@DBBBDBD@B@BCBCD@F@B@DFHBD@FAF@HERCF@DABBJALBBDBDFDFBD@FCRADCBADEBCDAFEHCJ@F@F@F@F@FADAD@F@B@F@L@J@JAH"]],"encodeOffsets":[[[109213,32676]],[[109082,32722]],[[109142,32658]],[[109145,32658]],[[109200,33472]]]}},{"type":"Feature","id":"511921","properties":{"name":"通江县","cp":[107.247621,31.91212],"childNum":5},"geometry":{"type":"MultiPolygon","coordinates":[["@@BA@C@AAE@CBEBC@A@A@@AAAC@AAAEGCE@A@A@@DE@@BA@A@A@A@@BABE@@@AA@@E@E@AAA@@BA@@@E@@BA@@B@B@BBB@BA@A@@@@@@AAA@@@BA@A@A@@@E@@@@@ABA@@@A@@@A@@D@@@BABABABA@@@@@B@B@@CB@B@@B@B@B@F@B@@@@@@A@A@@@A@AB@B@B@BAFABAB@@A@ABA@AB@@A@@@EB@AEAC@@@AB@@@BA@@BA@A@AA@@@@@A@@@A@A@@A@A@C@@AACA@AA@A@A@@ACA@@AA@ABA@AA@@A@A@@@@BAF@@@FAB@AAAAA@@@BA@ABA@C@@B@@BB@BAB@BA@@BB@@@B@@AB@@@@@BB@@@B@BABA@@BAB@@@@@BBB@B@@@@@B@@@DBB@@@B@@@AB@@BB@@BDBBBB@@BBDAFAB@@@BB@@@BHAFSDGJUDCBEFGFCHGJADAFAFAF@JBFDHDDBHDHDHBH@LDFALDDB@@@@A@A@A@@BBB@B@B@@@@@BB@B@@@@D@@@@@@B@@@B@B@@@B@@A@@B@@BB@@@B@@@@@BB@@@@BAB@@B@@AB@@B@@@B@B@@@BBB@BBD@@BB@@@B@B@BBB@DB@@@BB@J@FCDAFCHANBJ@J@JAHHFBFDDBB@DABAFEDCFEHCDCD@DCB@D@B@@@@@D@DBB@BAB@@@BABCDQBALIBADEBCBA@C@E@CCE@A@A@CBC@ADGFM@ABAFABA@ABC@A@EBC@@BADAFAHCAA@AAACCAAGCAAECAE@ABE@KBG@M@AEC@@BKDEBAEEECA@@@@CDC@C@AAAA@GCAACCAC@@ACGGGEEC@ABA@AE@@@FC@E@A@CDCBA@A@@B@BA@C@CBEDC@@@CB@BADC@CAAA@A@ABABCBA@AAA@A@EACC@ACAC@@A@ADCBCBCBABCBE@EBA@AAAA@AB@@ABE@C@A@@B@DAD@B@B@@@B@B@@ADCD@@CAGAG@IAC@MGECEAEAEAA@ACAC@EDE@K@EAACAAI@CFA@AAEACCK@EBABE@ADAJEDAF@BA@@@@CCCCCCA@@@@ADB@@FBDBD@B@@@CC@CB@BBBBHD@@BCHDFBB@DAFCB@D@H@NDB@D@DAFCDCDCDAFE@CB@DABCBAJEFEFE@CB@@BBBBBD@DBB@@@HCPMLGDC@ABAHBB@DADC@AAAAA@@@@BABA@@B@@BDAB@BC@ABADADCFEBABGDCBCBC@C@ABA@ACCECGICCEKAACACAM@@CA@@AACCCAEAA@@A@AB@@AAE@AAEACACCAAAAC@A@CAC@CAEA@@ABCA@@CGEEICCCA@CACAA@CC@C@@@@C@AAA@CB@@ADADCBA@@@@ABEAEL@@AAAAA@A@ACC@B@BCDEBE@C@@AAC@@A@@@ABCFCBCBA@@AA@ACC@CAA@K@A@A@GDCBC@A@C@EDC@CBABC@AAECEBCCGEA@A@A@CAA@A@ACCAEBABA@@@ACC@CCEC@A@@DC@@@ADA@ACEAAA@A@C@MAECA@@AAABC@ACCBADCTKFE@E@EAAGECCAGC@AAACCAAAC@@@A@A@EBC@A@A@CC@AAA@@AA@ACAGDA@A@E@A@@AC@CAAAAA@A@C@EBEDGFCDAK@A@CDCBABABEAC@C@A@ABC@AAA@CACAAADC@ABCBABC@CB@BAFEFAB@DADABCBCDCBCLAHA@AFA@ABCCG]YAAC@ABA@A@ABA@@B@F@FCBIBKA@@CC@CDCFG@AAAC@CBC@A@CA@@@C@O@AA@A@@BCJA@A@C@AACA@A@AA@BABAJE@AB@@AAAA@G@A@ABABE@KFA@A@C@A@A@C@@@@A@AA@@B@@@BADAD@@AB@@C@ABA@A@C@A@ABEAA@CA@@@ACCA@B@BCBCAC@@AC@A@ABABAB@DAH@B@B@B@@@B@BA@@@AB@@@B@@@@BBBB@DHFC@@@AB@B@@B@@F@@CAE@CBAAAA@IBKACBAAGBCAECA@A@@@ABAF@B@BA@ABA@CB@BAHABABCBE@G@IGICEE@CAC@A@AA@@@C@CDCDABCAAA@ABK@AAAC@OFCBCH@DCJC@E@@ACGAACAG@CCGOEGECACBC@CFCHI@CCCDCPCHA@C@AACAE@E@CBGF@BADCDAB@BBBBBBB@B@B@BA@ABC@ANI@A@CAAEAABIDEBABCAA@@CAAA@ACCCBABCBAB@B@B@B@F@D@BA@@A@K@CA@A@CBA@@AACACB@B@B@B@F@BCBGDEBE@GAI@ECCACC@CBEFAHAD@@A@A@@AACAA@BABC@CB@@AB@NCDA@ABCBA@A@EA@CAGCACCC@E@CBCBEPKLKB@FCDEFCFADADGBADANAFAB@BC@AACEEE@E@@@E@EBC@C@A@C@E@EBCAA@ACACCG@@A@@@@@A@AB@@AA@@A@AAA@ABA@A@A@CCACAAAEACAAC@C@IBIBK@ADBBA@@@C@AB@A@@@@AC@A@BB@BEAEKMOMCA@@A@A@@@A@@AE@EDCFAHAFAFABEBC@C@EBAAG@AAGAA@ABGBEFEBCDAFAFBFADAFCAA@E@CBE@C@AAA@@A@GAG@@AA@@AACAA@AAC@@@A@A@@AAAA@@@A@EFABAB@BAD@D@HABABAH@B@BBB@B@D@B@BABCDABC@CBEBA@AB@B@B@BDBBBD@BBB@@@BBB@@BBDBB@B@B@BAB@BADAD@@ABABC@ABA@A@C@CB@@ADAB@B@BAB@@C@ABCAE@A@A@A@@@A@C@A@G@C@CBABA@@@A@CAA@EDA@AB@FCDABC@ADCBCFCDADCFGRCHCFABCF@B@B@BDD@B@B@B@BCLCBABAB@DAB@DBBDR@B@BA@A@CACAEAA@ABABABAD@BD@DAD@HFHBD@PEH@HDFDDF@FADAFCFILCBEBABA@CAA@A@I@A@@@AB@DCBCDCBCBA@E@ABCBABABABCACACACCCWACA@CAEBIDA@KDA@A@GAC@AAAAAAAACAAAA@@AAA@A@AAAA@C@CBAB@@@BDB@B@BEBAB@B@FAB@BMJEBADABABADAHAF@@@B@BAD@@AB@B@BABBH@F@D@BDT@@@BC@AAC@ACAAA@ABABAH@BBDBBB@B@FAB@@BBL@DA@C@CAG@AA@A@C@C@A@AA@CACBAACBEDAHBJ@FBBB@@@ADA@A@@B@@@B@BA@@BA@ABBDJHHFDF@LBF@DALADABCBCBCDCB@B@BDDABABA@@B@B@D@B@BBDDJ@BCBC@CBABAB@L@BNJDBBB@D@@@D@D@D@D@BBD@B@@@BBB@@AB@F@B@B@@@B@@AD@B@BEJCHABAFAB@BABA@ABADABCDABA@AFABAD@@A@A@AA@@ABAB@BA@@B@@ABC@@BA@CD@@@BA@AB@@AB@B@@@B@@@B@BB@@B@BB@ABC@A@CAA@A@A@C@A@AAA@@AA@AAA@@@AAA@@@@B@B@BA@BB@@A@A@A@CA@BBB@B@@CDEJCJ@DABAB@FBLABBL@DDD@BABCBCB@BB@B@BA@@@@@DBD@HB@B@HCHBFB@BAFBBHFB@B@B@DAD@D@DBDBFBD@B@B@H@HBBA@AD@@@@A@@@B@@@B@@@B@@A@@B@@@@BD@BBB@@B@@@@B@B@B@@FHBD@B@BC@CFBFCBBFDDBBBDBBDBB@@@DA@@BDFJAF@D@DJFHBFDAB@BEBABAB@B@B@BBFDD@DFFDB@BBB@BB@@@B@BBB@@BB@B@@@B@BAB@@AB@B@@@@BB@B@BB@@@B@@AB@BA@AAC@EB@B@@@@@BB@AD@BB@DBFBBD@BB@@BAB@@AB@B@B@B@DAH@BCF@DAD@FCDABABA@C@IDA@@@@CACA@CBCFAFB@B@@D@@B@BB@ABB@@BB@@A@A@@@C@CBA@@A@A@@B@BA@@AAA@EBEDABCBABFBB@@B@@AD@@B@F@@DC@AB@BFFBBBBBBD@@BDBDDHADABBDDDF@@BDBDD@D@B@DB@BB@B@BC@A@AB@@BD@@DAB@@BBF@@@@B@@ABAB@B@@EAA@@B@BBD@@@@@ABA@@B@BA@@B@DBBBDF@@B@DF@DBBBB@@AB@BBBB@@B@B@@GAADFDBD@FDDBD@@C@AB@BA@CDA@AAA@A@ABCB@@AACC@BAFABCACAA@A@ABC@EDABCB@FADAHBFBBBBBA@@BA@@BB@D@BBBEDEFEDAB@@@BFD@BCBBBF@BPAF@B@@D@DBFB@BAB@FC@ADHD@BAFCDABABCBG@A@@BBBBBDB@@@JBDEBE@G@EDEAEBC@AD@FADBBD@@BBBAB@BA@CBABB@BBD@@BD@BBB@BB@@@D@@AB@BDBABBN@DBDBBBDBD@F@F@B@B@B@BFHDFBB@BAD@@@BB@D@D@BAD@B@B@B@JABAB@BBFBD@B@D@B@DAB@BAF@FBB@DAB@BBBB@@BBDHBDBHBHA@@@HBDDHBAD@DBDAF@@BBD@@B@@@B@@D@BBBHPCDAFAB@BA@@B@B@@@H@DBB@@A@@@A@@@AB@@@BBD@B@@@B@@AB@B@@AD@B@@@B@@@BBB@BB@@@BJAHCJALEJEDIHEHIDEBGDEBEBGHMDEFEFCFETIHCREHCFCJCDAFAHALHBLAHDHHFFHJNBJBL@H@LDFFBDBHDFDBF@L@D@F@DDFHHHDHDLDHDRFHBRHNFJDFFDFFHDF@DHHFJDF@DDD@DJDHATBHAL@LCJCLAHAFAFCF@"],["@@@@BAB@D@B@B@B@@A@A@A@A@CE@@BAB@@A@@A@@@@@AED@@@B@BBB@BABB@"],["@@B@@A@@CAAAC@@@@@@B@BA@@@@@A@BA@@A@@@@B@B@BABBB@@@B@@BB@@B@@@B@@@@@B@@A@@@A@AB@@@@AA@@@BAA@B@@@@@@@B@@@@@"],["@@BCA@CA@AAFBB@@BAB@@@@B"],["@@B@@@@@BA@@BB@@@@@A@AAA@A@@@A@@@@@A@A@A@A@@A@@ABA@@CA@AA@C@A@@B@DAB@B@@@B@@@B@@B@@BBA@BDB@@@B@BAB@@B@@BB@"]],"encodeOffsets":[[[110014,33312]],[[110058,32627]],[[110034,32604]],[[109927,32436]],[[109962,32442]]]}},{"type":"Feature","id":"511923","properties":{"name":"平昌县","cp":[107.101937,31.562814],"childNum":7},"geometry":{"type":"MultiPolygon","coordinates":[["@@BA@AAA@A@A@@CGA@AA@A@@A@@@A@@B@@ABA@@@A@A@A@G@CBA@ABAB@B@BBD@@BDADADA@B@DD@B@@DBB@FBBAB@D@B@B@BAD@@@BA@@BCBC@A@@@A"],["@@@@@AA@A@@B@@@B@@@@@BB@@@BA@A"],["@@@ABEBA@@GI@@@@A@@@@@@@A@B@AB@@B@@B@@A@@B@B@@@BA@@@@@JJ"],["@@@A@@A@AB@@AAA@@A@BBD@@@@@BBAD@@@B@AA"],["@@B@@CCB@BB@"],["@@@A@@@A@@@ABA@C@AB@D@B@@BDB@@AB@BB@@@@B@B@B@B@@@@@B@@@BBB@B@B@@@@AA@@AB@@@@A@@B@@BB@@BAB@@@@@B@@@DHBDBDB@DBFAF@D@B@D@D@FAF@@@F@F@FFBD@BADA@EBMBCBABCHCBEBEDCFEDA@KLOLAFAD@D@FDDBDHDDBB@@F@BABAD@BCBMDA@@BA@@DADABB@DBBB@@@B@BC@GBEBAF@DDDDBFDJ@HBF@FAHCDA@A@E@A@A@ADADBBB@@AB@D@BDBL@B@@@ABC@E@A@A@A@A@ABADABDDBDB@BB@DB@DBBAFAJCBAFBBB@D@BMJ@BAD@BABA@A@A@AAAAAAA@CBCDABE@AH@D@FBFBD@B@DGBODCDDD@DGJED@DADBDFDFHHPDDH@DBBBDH@BF@D@DI@CDGDAPED@BB@BAL@BBBDBBADCDCD@@@B@@B@BBD@DFFJDJHH@F@DABABABG@ADAB@BAB@@AIIA@@@A@@@AA@@@A@@AABA@A@A@A@@B@@@ABB@@@@@B@@A@A@@@@D@BBDB@@@BA@HJB@B@FDDBHABBDALBJAB@BBAB@DBF@D@D@B@B@B@BA@A@A@C@A@AB@@@B@B@@D@B@B@D@B@B@LEF@BABAB@H@B@BB@BA@@B@@B@BAF@FCTGLCLCJGFCFAHBF@HGFEHAPAB@DC@@B@@A@GBABABEBC@ACGCEECECCA@ABCAIACCECGAC@C@E@AAG@ECOACCAAAGCEAA@GAAAAAC@AAA@@AAC@C@ABA@@DIBGDG@CAECCIAAACA@ABADCDA@C@C@AC@ABABABABABCBE@@@@BAJABCBA@A@A@CACAC@A@GAC@CAACBC@AA@A@A@ABADABA@AACC@@AAEEBAB@DBDF@@B@BABC@AAAAAAABA@ADCNE@A@I@C@MDC@AB@FCJCBCFIBAB@B@DDB@FBDBDAD@BABACCBE@GCKAIBABEBCEEA@AAAAAACCCIAE@AAE@AAAA@GACAA@AAACACAACAGAAA@@@AAAACAAAE@A@A@EDM@CACCEECAAA@KBA@A@A@@@A@A@AAA@E@EAAAEGAAEA@AAA@AAAC@CAA@@BAAA@@AA@@@ABABEFEFC@GACCAC@@AC@C@GCAAC@C@CBAC@CDA@A@E@@@AA@AAAA@A@A@A@@A@@@AA@EBAA@A@AA@C@AB@BAB@@C@@A@CDE@AAAA@@@@A@@AAAAE@C@A@AB@D@B@B@DCBC@E@CAAAIKACAAA@AAAAAA@@AD@BA@@@AABECECACACBG@A@AA@AAC@CCBCBAB@DADABC@AACCACAABCFE@C@C@AA@A@ABEDA@ABA@A@@AAA@@A@C@AAA@@ABABA@@AA@@A@A@CBA@A@@@AAAC@C@ABEBGBEAC@AA@AEAGAE@A@C@AACAAAAACAAEAA@C@EACAA@C@EBE@G@A@E@C@A@C@EBAA@@CAACAC@C@C@GAEAECCAACG@@AAAAAC@G@ACECE@@CC@@CCCAA@A@C@AA@BCBCFABADABAHABABA@EDABEFABC@EAAC@A@CFG@A@AAAAAAAC@EAGABCBE@C@CACAE@A@@CCAAA@AAAAGAIEGDGBE@EBE@C@A@G@GAG@CBCAAACG@A@ECCCECACCAAAA@GAKCACA@A@ACEEIEGIK@EDCDCDAAI@G@E@EAGCEECGCE@A@EAAAAC@ABAAACCMEC@CACBIBEDC@ICC@AB@BDDAB@BABEDAB@BBBAB@BABI@ABA@ADAB@BBD@DABC@AB@B@BBBBBABADABCB@@A@ABADCBA@AA@CCQ@CAAC@C@ABADABA@A@EACAGMAACCCCAA@A@A@CBA@AFAFCB@@Y@ACAA@@@CDCBAAGECAIAACAC@CNQ@A@C@@A@@A@@AA@@BC@G@CC@C@KDABCB@@ABABABAB@@@@CB@@@@CBA@CAA@@AAA@ACE@@@ABA@@@A@A@@BA@@@AAA@AAC@AA@AA@@CAAA@@KCAAAA@A@ADEBCBGGCAACECC@@@@@BGBA@AAA@@CIWAAA@A@ABEHA@CBA@AAECA@@@CBAA@DIFGHEHA@C@C@@@@D@ABB@@BB@@@B@@@@@@@B@@@@@AA@@@A@@A@@@@A@@A@@A@ABABADBBHJJHXZBBABABCBA@AAA@AAAACAAA@@@@ECCAC@ABC@CHARIHCD@DBDDBBFDPBDBBDDB@B@BB@B@B@BBF@D@D@@BBC@CBE@AB@ACB@@ABA@ADA@A@A@ADAD@@@B@D@FABCDGJCHAFABA@IDAB@BBBFD@BEB@BMBEBCDADE@C@AAC@A@ADADABADABA@AAACCCA@AACBEBAD@D@D@DABADCBC@G@ABDH@BBBBBPLDBFJDB@BABABODCBAB@BAB@B@BBJ@@@BA@ABGD@@GCAA@DENADADCDABA@CCICC@A@CDAD@BBDB@DBF@B@@BADAB@B@BBB@BAB@B@@DBB@B@B@@@@@AB@D@@ABCDCB@@A@@@@PABBDDB@BBBAB@BAB@B@BAF@DBBA@@F@B@B@B@@DBFDD@B@D@BAD@B@B@@@B@@F@BBD@@BBB@F@DBHDHFABAHABA@@A@G@ACAA@A@AB@DBR@DBDBDPFD@JEF@DBD@BADAB@BBJHDDBB@BBH@BBBFDBBJBD@BABCBCBCB@D@DBRJD@BBADCHAB@BBB@FABCJAFAFAFEDEFAF@BFJFD@BBBAHBD@D@D@BAB@B@BDHBB@B@BAD@BBBBD@BBDABAFB@B@BBBD@B@@DBBAFAB@B@@DABAF@F@DBHBFBH@DABADCBCBCCC@EAEBE@ABA@@D@D@FBD@DABAB@D@@BBFDD@@@BB@@@D@@EBC@C@A@A@ABCB@@O@C@AAAAABA@CDAB@@DJ@B@B@B@D@BADBB@@B@@@BG@C@@BA@@B@JAD@BB@@EFA@@BB@@@B@B@B@BBDBB@D@B@@B@B@BABABBBB@B@HFDBFDTAH@DBBB@BADADAD@DBB@B@BGBAFABA@ECCAA@C@C@ABADAB@JADABAB@@FDB@@BBB@D@B@BB@BBB@DB@BDD@BBFD@F@D@BB@BA@ABC@A@@BB@BF@@BBBB@BD@@@BAB@@AEAA@@ADCBA@@FADAB@BBBB@@A@C@AB@@@BB@BBFBB@@@@A@A@@BA@BB@BBFL@DBBADABABA@@A@G@ACACAE@C@C@AD@B@B@D@BAFAFAD@B@BDFDDBB@D@B@B@BFBBABABE@EBAB@HAFABAJ@DBFDHBH@J@HAJCH@FBFDD@HCVIHCF@BBBDDDDBD@FAF@DBBF@@FHBB@NBB@@B@BBB@@B@@EF@@@B@@@@B@NCB@@ABA@A@ABI@EAC@AA@FAB@DAF@D@B@D@HDBBD@JBD@F@FCF@@DADQR@B@BNBDAF@B@DAD@DB@D@BEBCD@@BBNBH@H@DDFF@DADAF@D@@BBH@DBA@@BCBGBE@A@C@ABADADAB@@A@BBBBBBBBD@HBB@B@LCB@JCFADBB@BDDXDDDBDBDBBABABADABAF@B@DADADCDA@CBA@@B@J@B@B@DBB@BAFADAJKDEBEBC@ECEECGCG@OFC@GAGEC@CBC@@ABCBABABAB@FBDBDBB@B@@A@ACQAA@CBA@CBABADADK@A@A@A@ACC@A@A@ADEBADEDGHQDEBCDCDEDABCD@BADC@EBAB@FCB@DBB@@@B@BADAD@H@B@D@B@@@B@B@B@F@DBBAD@@@BA@A@ABABC@@DAD@B@B@BAD@BABA@@BCBC@ABA@A@A@AAAAC@AA@AA@@A@AAC@AACA@A@A@ABAB@FADAD@BADCBA@A@A@C@AAA@A@ABGBABA@G@CBC@ABABAFEB@@@B@BB@BB@B@@@D@BBB@DBBB@@BB@@BH@H@BB@BBD@F@DAF@B@DBBEBCAEBEBEDCFAFEHABAB@HBBBH@BBFAD@D@FABABEBEBGDEFCF@@BB@@@B@B@@@DBPNLNBF@BDBB@L@JAJAD@D@BBBDBFBBJE"],["@@A@@AA@@@BA@A@A@@CA@AAB@AA@@@IFBDDDB@B@B@BAB@BBB@@A"]],"encodeOffsets":[[[110057,32627]],[[110062,32620]],[[110036,32614]],[[109927,32436]],[[109514,32016]],[[109957,32436]],[[109962,32442]]]}}],"UTF8Encoding":true});}));