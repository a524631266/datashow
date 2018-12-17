(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海口市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"460105","properties":{"name":"秀英区","cp":[110.282393,20.008145],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@EAG@EAE@E@ECG@ICCAGCE@GFCD@FABHF@B@D@F@DBDBB@DBDBB@BBBABABABAF@DC@G@E@IB@DAH@H@BDBBBBB@D@DDBBD@D@D@DBBDBD@BBB@BD@BBB@BBDDAB@DBABCBADADAD@FBFBD@D@BCDYLBDAFGJCRAFCPAB@@@B@@DHDH@D@D@FCB@D@FAF@FWRGBE@CAMB@FDDDDFAJ@BBF@AFAHAF@BABAAAAMCAAOFGDEBEAECEEICCCC@C@ABAB@BAB@F@BF@DBDBF@F@FA@D@BABAD@D@DBJ@HADABCBEBC@ABAD@B@BFHFDDBJD@DAD@BABA@A@C@A@@@A@CDCDEDEJABBHBFBBB@@@B@BA@@BCB@F@BDB@B@BB@@@@BB@@AB@@@B@@@BDABA@AFADCBABEB@@FADABGB@B@BBBD@@@B@D@B@DA@BABEDA@@AAAA@EBABA@A@AD@BBDA@B@FPDFBBBBAB@B@BAB@D@BBBB@@BD@D@AH@BAB@BBBBBAJAHA@CBACCAE@CBEBCAC@CDEHABA@C@@@A@A@@B@B@@@B@BBF@DBDABCBABCDmx¢NDNBj@rCpI^OTGjG^@HBDo@@@@@@@@@A@@BIBC@@@A@@@@@@@@@@BA@A@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@A@@@C@@@@@@@@@@@@@@@G@E@@@E@@@@@@@@@@@@@@@C@G@@@@@@@@@@@@@@@@@@@@@G@A@@@@@@@@@@@@@@@@@C@@@@@@@@@@@@@@@G@AB@BBB@B@@@@@@@@@B@@@@@@E@C@A@@@@@C@@@@F@@@@@@@B@EAAA@@A@@@A@A@@@C@@@E@C@ACC@C@BA@AEE@E@EAAAAECAACCAAAAAA@CAA@A@@AACAACAAB@FBH@H@@@@@B@B@@@JBBBFBD@DBB@D@FAFA@@@@@@DCD@B@DDBBF@D@CGAEDI@O@OCICCDQAKAIEGEQAG@SAI@KGKIMGGCEIGGBACBE@KCAAEKEGAGGEICG@GAI@A@@@@CEAENGNAJEFKHCHOHDJCHEBGJEL@LEN@LBLAHCDIBI@KCKBIBIFGEAAAAAEACAKAEICCCGCGCCAACAEAABEBCBCBCBEBC@CAC@C@A@C@CAC@C@A@ACAAA@@AA@ABABE@CAAAC@C@@AAA@EBC@A"],"encodeOffsets":[[112909,20160]]}},{"type":"Feature","id":"460107","properties":{"name":"琼山区","cp":[110.354722,20.001051],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AGEIAEAICCCAECAAAGAECEBEDEDEBIDAHALEJADE@IAAAA@A@@GBKCC@C@CBC@A@AAAAAAAAC@A@@@CAC@CBCCCCACDAFAJ@HDB@BABC@E@C@AC@ACAA@CDGBI@G@E@AA@@A@@@A@@BCDCBADABA@@DCDCFBDADA@@DBD@D@JAB@D@DCBCDADBD@H@F@D@@AAAA@ACC@CAAAECGAC@@ABA@CC@AAAABABA@@@A@CAA@AAABCBA@C@AAC@AAACAACAGCEAAECAA@CACA@@ACCCAAC@E@C@E@G@CAE@E@CBC@ADCDCACAAAC@CD@BBB@BA@C@@AC@ABEAGAE@CA@A@AAA@CIE@@AE@AAGCEDE@EACC@EC@CBCAEBCAA@A@ABADC@EAQAIACAG@ECG@EDC@EBCDAHCDEDC@E@CAE@@@BDAFDDDJBBBFBF@HBD@@BD@BAAA@C@EAI@E@C@CBCAAAAEA@ADCBCBABAB@DCBCDCBCBC@AB@B@DAD@DAD@D@D@DABC@A@E@A@CDEDA@EDABA@A@CAA@ECCC@CAC@ACAA@ABC@A@ABA@A@ABA@CBA@C@C@A@A@AC@AAADA@A@AAEACAAA@A@C@ABC@CDC@@B@@A@A@A@A@A@C@ABABABABE@CBABEBABAFCFAF@D@B@DBBBD@@BBBDBB@B@@@@A@@B@@@@ABA@A@A@@@@A@@AAA@@@@B@@A@@@@@@D@@@@@@A@@@@A@@A@A@A@@@@@A@@@A@@@A@@B@@A@@AA@@@@@A@@@@@@AA@@@@A@@A@@BA@@@@A@@A@A@@@@@@@A@@@@@@@A@@@@@ABA@@@@@@BA@@B@@@@AA@@@@A@@D@@@@@BA@@@@@A@@@@@@@@@@B@@@@@@@@AB@@@B@B@@@@@B@@@@@@@BA@@@@@@@@B@@@@@@@@@BB@@B@@@@@B@@@@AB@@B@@@@B@@@@A@@@A@@@@@@@BB@@@@@@@B@@@@@@@@AB@B@@A@@@@@@AA@A@A@@@@B@@@@@@@BA@@@A@@@@@@B@@@B@@@B@@@@@BA@@@@@A@@B@@@@@B@F@@A@@B@@@B@@@BADCDEDA@AD@HAD@FBHBL@H@DBFDFDD@D@BAF@BB@DBHDJFDFBDBFAF@@ABA@@B@@@B@D@@ABC@@B@BABAF@D@BABA@A@A@A@@BBB@@@BAB@BBB@BB@BB@@@BABA@@@AAA@A@A@@BBDABABAB@DAD@DBBBFBBBFDFDDFFDDDFBBB@@B@@BFBH@FAJAFGJAJAHBFNPBHAJ@DAB@FDBB@HCHAFAH@BBBBAFAFAF@FDFFPDLBFEBAEEEI@O@KLMLCJAHELAJBHHFDJ@JBJDFFFEB@FDFHFAFAFC@GBBHBHFDAHCFGBGBEHEHEDMBGF@F@F@FBFI@CA@@@@AA@@@B@@AB@FABIAGB@FFDFD@B@B@BAFBD@B@B@@BFB@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@E@@@@@@@@@@@@@@@AAC@@@A@@@@@AB@H@F@BA@@A@@@@A@@B@B@@@BAB@@@@@BCAA@@@@@@DA@ABBDB@D@AB@@B@BBB@@D@B@B@@@BAB@BCHADB@D@J@@@@@@@B@@@@@@@B@B@H@@@@@@@@@B@@@@@@@B@F@@@@@@@@@@@@@@@B@B@H@B@@@@@@@@@@@@@@@@@HAL@B@D@HBBAD@B@B@@@@@@@@@@@@@B@D@@@EEKI@A@CDEDADABABABABCBGHIBCFCPAJCFEDE@GAI@G@IBE@CDC@CBA@AB@@ABA@A@A@A@AAA@A@A@A@ABCJKHKDEDEDCFAFFH@DGDCH@DCF@BJDHAHCHBDLDHCJ@FGDMJEFBJBFCJAHHHBFADED@B@DABCACBCBC@A@A@EBAB@DAB@F@D@BAD@BBJCJCDABAEAEA@@@ADADAACAA@@@GBCJAHAJIBEBKAC@ABA@A@EHEJAFBJMDAAEIEI@ACCCEE@CDKDGHI@GCEACCA@ADCBEHEFCDE@CDEAGCCBKBI@CHDDDD@DCBEHCN@J@HBL@DA@C@CAIAEBAFBDDBDBDFADABFFHBBFFDDH@D@FA"],"encodeOffsets":[[113296,20243]]}},{"type":"Feature","id":"460106","properties":{"name":"龙华区","cp":[110.330373,20.031026],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBBBDDVKXGZAFABADCBAD@B@B@B@DBB@B@B@@A@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@ABA@CBC@A@@@@@@@@@A@@@A@@@@@@@@@@@@@@A@@@@AA@AAAAA@AA@@@AAA@@A@@AAAAA@@AA@@A@@@@@CA@@@@@@A@@@BA@@@@@A@@@@@@BC@@@@@@@@@@@@@@@@@@@ABABCDG@ABA@A@@@A@A@CA@AAA@@@BAC@A@ACBAB@@C@@@@B@DB@A@@@@BA@A@@@A@AB@@@@@@BB@@A@E@GBA@@@@B@@@D@BB@@@@@@@@@@@@@@F@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@A@AE@@@A@AACBE@A@A@AECEC@EHAJBBA@EBA@@@A@@BB@@@@DBJ@AE@E@E@EHENAFCFGFGHAHADEBGECAGAGHAD@BEBEGECE@EFAEECEAI@ICIGEAGBIFKBGDINKLKP@J@FFBFFAAECKEOCE@EBEBEBEAAAAG@EBGBGDA@CA@EBA@CBIAGMOAEBGBIHIBEBI@EAGAE@@@AA@AACECCEECCCEAEAAAEAA@CBC@CBABABAAC@A@CAG@GACAAE@EBE@GBE@E@CBC@@AAACACBCBEDCBA@EHAJAJDL@LAJCJGDKBKAM@KFK@IFAHGFIDGCGPGDELIFMBMHBFDF@@@@@BBJ@HDHFJHHHBLFBFDB@LAFBDHAJHDFHHJNHL@LBJ@TBHFRFHBJBLCRDDDJ@P@PCJBFDHC@E@AACCA@C@CD@@@@@@EBEBC@A@CAC@EAAAIA@@A@A@@@@@G@G@EAA@BBBDDBBB@@@BBB@DBBBBBBDDBBFDBBBB@F@FFF@BABD@D@BDD@F@@@D@@@B@B@@@B@@@BBFBA@@@@@@@E@@@@@@D@@@@@B@D@F@@@@A@@@@@@@@@A@A@AAA@@B@H@@@@@@@@@@@@@@@D@@@@@@@@@@@@@@@@@B@H@@@@@@@@@@@@@@@@@@@@@H@D@@@@@@@@@@@@@@@F@@@F@H@@@@@@@@@@@@@@@D@@@B@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@BAB@@@@@@@@@@@B@@ADAJ@@@B@@@@@@@@Cp"],"encodeOffsets":[[112937,20538]]}},{"type":"Feature","id":"460108","properties":{"name":"美兰区","cp":[110.356566,20.03074],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FAHGDEBG@@FEHCFAJGFCFIBABCBA@C@A@E@E@CAAAA@A@AB@DADADCJAHAFCFA@ADAB@B@@@H@@@B@@A@A@A@@FAD@BC@A@C@C@CBCBABAD@DABEDE@CDCBK@CCC@C@CAAB@B@D@F@B@B@BBBAHEDCD@B@BEBAB@@AB@@ABABA@CBAB@BABCBABCAEAC@A@AAC@ADCFCBE@CBKBC@CAEECEEAEBEFKB@HAFBFBFBF@D@J@DCBEHGBAJCBGACGCCCCAGCCG@C@@DCBCBI@GBGDE@CBAAA@AAACAICECAA@@@@@@E@A@@@@@A@GAC@@@@@C@EBED@DEHBD@BCBABAAACACEBEAC@ACAAAACCACC@CCCCACAAACCAAACBCA@CBEB@BBDBB@AC@@BAF@D@FBD@BA@CCAKAACBGAAEAEE@AEBC@G@CCEEAAEGAECBEBACACCCEAABBFBJ@D@DCBK@GAI@M@GDAFCDC@CCGC@DAJALDDBHCF@DCFEDGFAFCD@BDBBDDF@HGJCHCL@DFFDDBDJ@JFBFCBINEAIBGF@F@BAB@BBDALAFIJGBIBAD@H@@BBBDCBCB@B@@FBFBABCBIDIDAAC@ABC@E@A@CBA@AB@F@B@BADADBDADCBA@C@CFEBGAGGIBEDIAEAIFCNEHI@GDKCACDGBGCGAIE@CDG@CDCHG@EEEBCDCFCFGLILAD@B@B@B@BBB@B@B@B@BAB@BA@@BAB@DCD@DAF@J@HBJ@HCFEFIDOBEDADGJAHADABABABCBCBCF@D@BLJFF@@C@A@@@@@@@@@@@@@A@A@C@ABGAC@A@K@GB@@@@@@@@@@@@@@@@A@G@A@A@@@@@@@@@@@@@@@E@A@@@@@@@A@@@@@@@@@G@A@A@@@@@@@A@@@@@@@I@C@A@AB@B@@@@@@@@@@@@@@@@@@AD@@@@@@@B@@@@AB@@B@@@@@@@DB@@@@B@@@BB@@BBBB@BB@@@BB@B@@BBB@BBBBB@@B@@B@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@BAD@DAB@B@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@BA@A@A@CAA@A@A@C@ABCDABEBYBWHULB\\PlRRPJhJ\\DC|K|Q¤kfGL@PD"],"encodeOffsets":[[113180,20558]]}}],"UTF8Encoding":true});}));