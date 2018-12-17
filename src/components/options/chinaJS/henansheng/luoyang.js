(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('洛阳市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410302","properties":{"name":"老城区","cp":[112.477298,34.682945],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BKAEIOAABCFCDC@ACGAACCKIEEAA@@BA@AD@N@DBFABA@E@A@EFEJGDCAA@CACC@EBCACAG@IBKAG@GCIVGT@H@HABC@IAGAA@ADCHCD@EDE@ECCC@ABATCDI@A@@@@@@@G@CCBMAA@@@@@A@@@@@@@@@@@CEAM@MFCL@@@@AHG^CPEFEN@D@D@@BDFF@@BHBD@@@@@@AFAF@D@B@@DBDBB@B@@@@@B@DCHC^EXIRKFAF@D@FBPBD@F@HAPERKDA"],"encodeOffsets":[[115188,35565]]}},{"type":"Feature","id":"410311","properties":{"name":"洛龙区","cp":[112.456634,34.618557],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DADAD@HAF@DABAF@B@BB@B@BBBB@FFFDB@FAFA@CBAB@FAF@DCDBBBFFDDD@DBFDD@FAHAD@D@DDD@B@HABABCDCD@FBBDB@H@HCHCF@FABCHEHADA@CBCJEBCFCHI@CWIIACAEEBCFEDGCAGAGAMGIEE@GDIBG@GAIGICGAIHIDEAGGGGAE@EDCJEBC@CAIBEBE@CAEAE@EFG@GBK@GDAHE@CAE@GFM@EAGCKIEQDQ@IBMFGFGFG@]GSBMEKFQBYBGDEJ@JAFCDUL@@ABKFYAS@WD]FGBCEBCA@GAAAA@A@C@E@A@A@G@A@A@CAC@CACAEAAAA@ACA@CCAAAA@@@G@EAC@A@@CAAACAA@A@C@EAA@A@A@A@A@EDA@@BAA@@@ABA@@@A@C@@@CA@@@A@@@A@A@AB@@AB@@A@@@AAA@AB@@GDABEBABGDCBC@ALAD@FEH@HKAAR@@A@K@@LI@ADBB@DAD@FEHAACAECAAAAACAAAAA@A@EBCBAAEACCAAB@@AB@AAAAACA@ECCC@CCAC@C@A@@@AB@BC@C@A@AAAA@@EDMTIVAH@HBFDLFH@HBHBJBFBD@DADCJAD@D@DHH@FRJDBDFNE\\EV@\\Ab@RINIBEEEFIFEH@DDNIFAFBBDFDDDDDD@D@DDLDJDFDBDABCDBDRXFFhZHDLHLHHDHDH@LBJAH@DBDBFAD@BD@DBBD@B@DADAF@D@F@BDFFLLFFFDJBFDB@F@JAFADCBDDHAHCJCF@@@@EHEDABC@GBOBIBIBKFGDCDAD@FDHFLFJRCPCDADABA@C@@@@BK@ADAD@LF^\\LJB@B@JEBA@A@AACCAAA@ABAB@J@N@`BL@F@BAHEJO@U@A@CAAA@A@C@E@IBG@G@E@E@A@C@CBABA@A@AACACA@AAAA@AAAAEACACAAACCAA@A@A@A@ABA@A@@BGHGBEBI@EACCE@G@CBC"],"encodeOffsets":[[115272,35492]]}},{"type":"Feature","id":"410304","properties":{"name":"瀍河回族区","cp":[112.491625,34.684738],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EIEKCG@EBCDCHCLEJAJAPAHAD@BAFCFG@@@@DEDIBGCGACCDEBIBE@A@ECIAECEEKKEEACE@C@E@CBCBA@C@CDIHEF@F@B@FABEBCAM@C@@BAB@@BBFFLJDDBBDH@BCDEDADBBJPBFALB@BBBBFJBFD@DBB@\\C"],"encodeOffsets":[[115214,35574]]}},{"type":"Feature","id":"410303","properties":{"name":"西工区","cp":[112.443232,34.667847],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FEDOH]BG@@@@DKNEN@FB@D@@@@@@@@@@@B@@@@BBANDDH@@@@@@@B@J@DCBSBAD@DD@FCF@FDCDGBCB@HBJBD@BA@G@GHSJUGCKGKGGCgYCFAB@@ABABA@AB@@A@@B@D@B@B@B@@@B@@@@@D@@A@@B@@@B@@BB@B@BB@@BB@@@@B@@@@@BA@@@A@@@@@A@@@@B@@@B@@@B@@@@@BB@@@BA@@@A@@@@B@@@B@BD@@@@BB@B@@@@@@A@@@@@AB@@A@@BCB@BA@@@A@@@@AA@@@A@@@@@AB@D@B@@AB@@AB@@AB@@A@@BA@ABA@@@@@ABA@@@@B@@@@@B@@@BABA@ABA@AB@@ABA@@@AAA@AAA@AAA@A@A@AAA@A@C@@@A@ABABCB@BA@@@@B@@@BB@@B@@@B@@@@@BA@CAC@A@CAA@AA@@@A@@@A@@@A@@@@CAA@C@A@C@@@AB@@AB@@A@A@A@AC@@@A@A@@@@AAA@@@A@A@@BAB@@@B@B@BAB@BABA@CB@@AA@@AAAAAA@@@@@@AAEAAAA@@@AA@@AAA@@@E@EBC@C@IBE@A@@@ABABEFAD@BBJBL@DCFCDKHEDABC@G@A@@@AB@FALBB@BB@D@F@D@BBHFF@D@D@DADCDCBAFGHEJAL@H@JDB@FAD@B@DD@@@@FDFDTDPJ@@BA@@BMBGBAHCD@D@HBDDBDAB@B"],"encodeOffsets":[[115091,35560]]}},{"type":"Feature","id":"410305","properties":{"name":"涧西区","cp":[112.399243,34.654251],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EEQWACDCBAACECICKCCCC@C@CCCCECACEAEBMJCCG@EFEJFFAFMJQJa@[BU@[FMFBBHFJHDDBD@B@BCFAD@B@BBBFBJHJJDFBFBR@F@B@@B@F@JAD@D@FAF@@@B@BB@@BB@@B@BBFBBB@@@@@@BBBBBB@@BB@@DAB@BA@ABA@A@A@A@@BA@AB@B@@@B@BB@@@@@B@B@@BDB@B@B@@@BA@@BA@@D@B@D@B@DB@@@@@B@@@B@@@B@@BBB@DBB@D@DBB@@A@@@@@A@@@AA@@A@@@A@@B@@ADABABAB@@@D@B@B@BBB@B@B@BBB@BBB@BB@@B@BA@@BAB@BAB@BA@A@@@A@@@@@A@@B@BA@@@@B@BAB@@AB@@@BA@@BA@@BA@@@A@CBA@@@@B@@@B@@B@@B@@@B@@ADA@AB@@@BA@@@@B@@@@@@@@AAA@@@@ACA@@@A@@@@@@B@@AB@@A@@A@@@@@A@@@A@@@A@@B@@@@@B@@@B@@A@@@@@A@@A@@AA@@A@AAA@@@A@@@AB@@@@C@@@@@A@@@A@A@A@C@AB@@@BAB@BABA@@BADE"],"encodeOffsets":[[115125,35472]]}},{"type":"Feature","id":"410306","properties":{"name":"吉利区","cp":[112.584796,34.899093],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EB@B@BBHGDGFCF@@DBD@JGDAB@ADAD@DFHADEDC@GRCBK@GAEICGA@A@C@ABIBIA@BBFDBDRHL@@B@@@DCDAB@BBFBDBDADADCFEDCFAD@DDDBDBDDFB@@@@L@DBFB@@BBBF@DB@BBFBDBBB@BFH@@@B@@@@BB@@@@BDD@@ABA@E@G@A@@DABADAB@BC@GBMBEDCFCNAXERALAJABB@@@@Z@B@@A@@@@@C@E@O@Q@A@@F@BA@@@C@G@CAC@@AAGE@@@CAG@GBOBGBMmIMAA@EBEBIFORWTGDCBC@C@I@E@KBIB@@AJCJAD@@GJID@B"],"encodeOffsets":[[115238,35734]]}},{"type":"Feature","id":"410322","properties":{"name":"孟津县","cp":[112.443892,34.826485],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AJCHI@@BCDIBI@@JALAF@J@D@D@DAHCXSPQJEFAFAB@NBnJH@\\GfKRIhEdYZE`GXDNFNJFBH@FBDAFADCB@F@VDFBBBB@F@DAHAHAFGDEGCECGCECAAACAE@EAGECECECEECCAA@ACCAGAGOMCAC@G@IBABCDCD@@@@C@IFGHAB@@A@ICE@@@ABADAB@@BBDB@B@B@@EJMHEBIBQ@cDC@ABGDG@GBG@CAGAE@K@E@GACAEGCCBEBCHGBABMFKFGBE@KAGAACGAEC@C@Q@E@AAGICC@EDE@@ACKGECaGIPGFABE@K@_AM@I@A@AB@BBBDBBD@B@BABIFA@A@KI][KEC@CB@BAL@@@@@DABCBCBODQD[DA@CAC@AEEIAAAAA@CBQLOFGBE@C@OAEAC@E@EBQLWJ]FGDCDA@@@@@A@A@CACA@@@A@CBEBE@@@@@@ACAG@@EEAC@@@C@CFM@ABAACCCGAC@C@GDABAHAN@@AB@@OISCECEC@@@@CCA@C@EBA@ICG@K@IBGFEHABCDCDCBC@C@E@@H@HBDDH@D@BAFCFCBGBGBK@C@@@ABADCJEFEDCDABAFA@@F@D@BDDBDBBD@B@B@BADCDEB@BABALAB@BAB@BCFGFEDAB@B@@BB@@FDHBDDBBBFDJDBB@@BD@B@B@DAD@DIDCBGJCBCDIHCDAB@B@B@D@@DDBF@FBFDFBF@B@B@BEDIHGFKFIFGDABCBEFCBCBQHUJE@EBG@CBA@ABAB@@@@CDEDGFGDMDCD@B@B@B@BBBDBFFDDDDBB@DDFBBFBFBHDBBDBF@JADBB@@BBBABEFEFAD@D@B@@HBFDNHFDBDDDFDDB@B@BADEFJRFFHDF@D@JGNKPIREVCN@NBLCLCPELGJAJ@PEPEDCDEDAX@R@NDHBV@XCRAREJCXINGHCBCDEBADAB@B@D@DBDBDBB@D@DAFAB@BADABADAB@D@B@D@D@D@BBD@D@B@BD"],"encodeOffsets":[[115238,35734]]}},{"type":"Feature","id":"410323","properties":{"name":"新安县","cp":[112.141403,34.728679],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@CG@@A@A@A@GAA@A@@DADAB@D@BB@B@FAD@D@DAB@@A@@"],["@@@A@@@E@CCECEBABCFCFAD@DDDBD@D@DAHCD@NBL@H@F@FBB@FBHAF@JADABBDBFABBBADAHCPEHCLANCTCHAFAFCPIHIRUN[FIJGRAVE^Q`YJELAJDHLJLFDIQFEBC@A@ACAECCCACECMGECGA@@@A@CBCFEFEBAAA@AA@CAIBE@CAAAGCEAEAAACE@CAACCCCEECAAA@A@A@A@ADCNCHCHEFCDC@@@@BABAB@DAH@FAF@VIRGDADAFEDABAHCJELEHEJGFC@A@A@AAECEAE@EAECC@@@C@A@ABADCJGDCDAHIDAJC@CBC@C@A@AAC@@AAICECAACAACCG@EA@@AA@A@CBEFEHADA@ABA@KBABABA@CFCDABA@A@C@AAACCC@A@C@EB@BEBADCFCFEDIBCBA@@D@L@HAHADADEBE@A@CCGAC@G@GGEAAC@E@C@A@@AAABK@EBA@@B@H@D@BAFCLGDCDE@CAKAI@ABCFEBABA@A@EAQAECEIIIGEAAA@A@ABCDE@A@AACCCIGGEAACECAQIEAK@KBWDK@I@]D[DI@A@@ABABC@AAC@ACAIAIAGBCAEACCC@CBIBABA@CAEAKAAA@@@C@M@AACCAGCIAI@E@ABAFEFABKLEFKPELCHCDABC@C@K@GACACBGF@DADE@GB@C@@@AC@C@AA@CBAB@HAD@BA@ACAAAAACAC@CB@DCFABA@AB@BADBDBDFFDD@@@@@@BDA@@DELCJAJ@DABA@A@CAEAA@CBCDEDQDA@C@C@EAGCEAA@EDOLMH[JKHBFAFAFCHAFAFDFDDBBPDLDBBBDBD@DADADKHGHEF@B@FBBD@F@PAB@BBDDDHDJ@D@B@D@BCB@BB@DBFABB@@BFBBB@DBFAB@@@@BABAB@@@BBD@BBBA@@B@@@B@B@BAF@FA@@@AAA@EDCBMFCFAH@DBBJBB@BD@BCFIHYPIHEJABGBEBCFAF@FDFHFDD@B@BEDC@I@KCQGQAK@EB@B@BBDBH@DADOLIHIDKJGHE@MBKBIAEBCBEFABC@C@E@CBAD@JDJAFAFBDLRNJRHRDJBDDLNNNDBD@LAH@F@dL\\NDDBB@HCFCBEBKAEBGBGFCBEJ@B@DBBFDNDRBJABB@BABCDAD@B\\L@B@BCBOD]L_PWRAHBDLFTJFH@H@N@HDBFFTFDABADAD@BBD@JBD@D@D@D@LCJCFB@@BBBBB@DBF@D@DABA@@@A@A@ABCBABCFCDAHCD@DEBCBEAA"]],"encodeOffsets":[[[114719,35618]],[[114728,35887]]]}},{"type":"Feature","id":"410325","properties":{"name":"嵩县","cp":[112.087765,34.131563],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LCPA^CT@RJJBTDRQDUMOOISMA@@@@@MKAA@@@@KQCQHIRGRCRDN@DCBAFCF@V@JALALAVALBHAFAFAP@F@FCDCDCDCBAH@FADCDEBABB@AHGDCBCAGCEEAIEKA@@@@UICG@@@@CKHWNU@IKKUEG@GOIQQGGAIE@QHQlCOGKBQLAH@NEBKKKWMQDOHMJOBUAIEKKCMCUKOOG]IMOQYQKMEGGDQPiBIAUISEQIQ@SJSBUASHUDGLKZ@~DPBD@FAB@@A@CAEAE@C@A@AFADADAECEEGACCAC@ADCDEBCAAEEGAKCCACCAC@A@@@@@A@@@@@@@CFEFCDA@AAKEg@EEESMAA@E@GBG_CI@MAQCOIIGGCYIKJAXSNSCQMIUEUU]UQ_MYGOAUGCIBOHMPGFUJK@KIGG@SHOBMEIFEFIHOPMDMCSQEUBKBBD@BC@CD@BBFHBBFCBGBAAAG@CECCIAE@M@GAE@CAC@@@OASCWEOCUEaEQ@IBGFEHIJKJCDYLODGBQ@MC[AODEBEDCJ@PBNA\\GZGLUH\\XPNRTNVPPHLHPEZGJKLML@LHFLNLHRTLFT@TGTITEPCVHRHVBPE\\JFLH`DX@dPPNL`J\\HXPDXIPEHGJSLSFCDGBQNOPUZKDA@ICE@C@G@CBABABABA@CBCAA@CAC@E@ABCBCBADADCBADGDABGBCBC@EBABCBGBEBC@G@C@C@G@EACACAGAACACIESG@@ACACC@C@ABAF@F@BA@CAA@GAAAAA@ABC@C@CA@CAC@ABAB@B@D@B@DABBD@BBB@DA@ABABE@C@GAC@I@AAAAAAACAC@AAACAC@CBGDCDABCDCDADBBBBFBB@BBBD@D@DBBHFDBBBFHBF@D@DADBDDF@BBDMVMNCD@@@@IJINGVA\\AXEXIVEJEJEHGDIHMLIVEJAN@LALGTCDIRGTI\\MNEBK@KNX\\LPFHDBNBFBFBDFBFBFBBBDFBJBHBDBDFDFDPBDDDDBBAFANAT@JAJADBFDBBBBJBDBDDFHBD@FFNDDHHLHHFFDJJDD@@FANCNGJCPEPARFNFRLTVNNRNRFVDnJZJZFXLJJJFLBREJIJSJMNKPGVER@p\\XBHA@CBG@CBCBCDAD@DBFBHLFFD@DBHAH@DAFCFEFCFAFAF@FBDDDBD@F@FCFAFABAVC"],"encodeOffsets":[[114900,35132]]}},{"type":"Feature","id":"410326","properties":{"name":"汝阳县","cp":[112.473789,34.15323],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EMCESMUMSQAKCOQGOIBIHMPGTKBG@@@@BC@@@@@CGKOQKMHSNK\\eHKFU@QDIFETENCFEDAFKEOCKCKKSGcCOBSCMMGQCOGCI@QEISI[KUKKIBGLCT@JCDC@@DADADCBADCJC@ACAA@AAC@E@GBA@EACAC@AAA@AAAA@AACDEFA@A@C@CEIACCCEIACAA@GAWBIOSSG]GQGAILQZKZCREJE@MOWMOMKMO[@[BUGYSKSSWY[UIM@M@MLSNSTUTGDI@YKUESAMCOIKMQKOCK@C@CBCBEB@B@B@DBFBF@D@BA@EBC@OA}CY@KLCHGVBTAVIT@TJRFRJTBVAJOjCRHHNFRLRZNP^JPHLPDVDNLLJFVBPANIPGRCXNLLALMFG@KBARHLDPkGR@RJFHBRHJRHPH@VFLL@JMVGXDL@@@@DHVJ@@@@LBJFFBDFBHADCDGH@B@@BBBB@JB@B@PCHADAB@BBADDDB@B@DADADBLDBBFBVCB@B@DF@D@DABEBADAB@DCDGBAFABADFH@BFHBJ@HCH@DBB@DAD@BB@DHADADABCBAB@FADQVGFEFAHBHBDFFDJFJFLDFLLH@FB@ABA@CBCB@B@FDNDF@FGPGNEV@ZDNDHAJ@H@D@HGB@BBB@@D@FCBCDCF@BHFNHTAT@XNPDTEHGLKPMPKFCFAL@VB"],"encodeOffsets":[[115311,35155]]}},{"type":"Feature","id":"410327","properties":{"name":"宜阳县","cp":[112.179989,34.516478],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LG\\INGPKFCB@FBHDFBD@D@B@RCFCDCDAB@FBDBB@B@BA@CBIDIFK@CB@AC@@@@@@CCEEACACBC@ABAB@BADE@CDAD@DBBBBBDB@BABC@GBA@AB@DBBD@D@@B@@@DHAF@BC@CHEDADBHBL@D@D@BADCDGFKLOFELKBAFEBEBAF@J@JBHDDBBD@B@N@D@@BBLBFBDBB@BAJADAD@DDFBDBHAJBJBDB@BBD@BADAB@BB@J@\\C^CJ@L@XCLAL@FB@EGG@C@CBCDIBC@CACAEAIAG@GEGCKAE@GBGJUNSFC@@BBBBB@D@D@@ABA@@B@D@D@DB@DDDFDB@BDBBBBA@@BA@BBDDFBBBDAFAB@B@BBBBBDBBBBFDDBBBFG@EBC@CAABCJ@@KL@B@@@BQLB@GFG@EBCBKS@MDUAcA]GIEKMAM@MBIDCJCFCBEDUDKACGEKAECAA@C@ECCcQ]GaSKI@EDChMFCDO@UAGCEEEIKC@I@C@EECCIBIDE@C@CCAM@CBCFC@ECIEI@A@@@@CIG[BU@OUDABEBEBEDE@C@CACCEAE@EBEBEDEFEDCBG@GBCAC@EEGKEACAC@CBADAD@DAH@DGBWAo[Q@UFOHMLINITIJQFKAIEIIWKYEYImIUCQEQMMMSUQKMEQEOBOFIDMHMDEB@@CCIIECGEKGGGEBC@E@WFEBEFCFAD@DBDDLTTJVANAREAGCCAABAB@D@F@BABAD@H@BBDA@GDCFC@IBSHSJKVIPBVFJVPLJNJLNDNCJGDOBS@SN@LDLB@F@FBPBFD@DABGDCF@FBJAHBBFDFDHFDFBBBD@DCDA@IAC@CD@FDDBD@DCFCB@FBBDBFBF@HBFFABCDGFCFDFJHBF@DAF@FBDDBJFNDLDDB@@HBJL@LFNTFFJBZ@@@@@JABKPKJORSVJFHDF@JAFBDDBD@HAH@D@BBBF@PCF@LBH@P@PCHCFEHM^aDAB@FBFDD@FAHEVQPKHCD@FBDDBB@DCD@FBDFJFF@FBJ@BLHDBDHBBJDRDDBBD@FBDDBH@D@BB@BAFGJCL@FDFDFLHBFBF@DCDABADDDRAD@BBBD"],"encodeOffsets":[[114684,35530]]}},{"type":"Feature","id":"410324","properties":{"name":"栾川县","cp":[111.618386,33.783195],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LML@FANMJ[HSJQDCHSBK@KBMFIJUNKJGHCFGFIFIJUFWBWB[HUJMJI@@@@DCNMNUAC@ACEACBC@C@CAEEGAACAGEAA@C@CACAAA@EAAAAABCDCDCBADCHCDAD@DBBB@BBDBDBBBBBBJ@D@HBD@F@BABAB@@CAA@AACBA@C@A@C@ABABAD@DBB@@D@DAD@BBBBBHBB@DBB@@A@EBEBAD@D@BDBD@@THJFBDBDHBDBDBFBH@D@D@H@D@FAHADABAFAD@DAHABAHCBCDABCBCDADABAF@D@DBB@DBDAB@BABABADAH@D@F@JDB@LCVYPORMHADCTETKHIFGJOCWWO[G_IMKOO@cCWG_EK[IOFUAQGUGODSFSJSHS@KEQSKGKMGE@KNKLKHIFYGOGKOOMUQSOM[WIB_JUHSJwVWLSBSCWGYKWROTSXUZYLYH]@[CUFYH[@YASLOFOCQQWKU@QNKJOF_FYHULWPYNQFUAGA[EOAK@C@EBEDC@C@C@CAMEEAI@EBEDILEFEBKBGBEDEBC@IAE@C@EDEHGLEJA\\BJ@N@BAF[XKJEJGNCFEBSJA@@B@JBF@BADCDIDEBIH@B@B@@BB@@ADBD@@BDD@@@BABA@A@AA@@AAAB@@AD@BAB@B@@@B@BBBB@BF@DBDBB@@@B@BA@@B@@@@BBBDBJHBB@D@DADEJIL@B@HDJBDDFPLFBH@F@FANEF@H@HDHDFBF@D@BABE@A@CDAJAJ@JBD@BBBHDRFLFFLJFFHLHFHFLBFBFDDFJJJHDD@BADCJADDP@JALCNELGHEFAF@J@\\BJBDHHDJBLFNFFFDLDBBVJZB^H\\FRFVPHRJNHDTFbDTDPCPCRC\\@PDVHJFXRTNTFJBLALGJEXEVDVCJCTDNFVLNJTLJJJLJDFBDB"],"encodeOffsets":[[114384,35007]]}},{"type":"Feature","id":"410328","properties":{"name":"洛宁县","cp":[111.655399,34.387179],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@TUPQLILOBA@I@@@@AYEISEEM@KIKGA@@CAKCMCIECAAC@EBE@CAEIGCEDEHEDCBAEEGAE@EACAAA@EDADE@CACCC@EDCD@JBB@DC@CACAACEGEECECAABGAI@EDEHCBA@CECOAEAE@A@CK@KTMT@PAHCDICMKMMIKIUOEIAUJOLUTITGJAD@DEHCB@AC@A@GBCBA@A@E@CBABADBHDFBBQBMIUSSCKAC@CBCDEFEFAXEF@D@FACCEM@EACEGCCCAIAAAAAECCAIBIBS@MBEBABCACCACCOCECECAGAIAEAACAAAEAECEEAEAMACAEGKOW[CAEAICIKIISKMIUKMESCIDUDUCWFIFKHKBIASESMWQIEUGOC[@QDODODSCaCSEGCIMGQUOQE[E]GYAUIBDADOZC@Q@G@CDCDEDEBQ@K@G@EBGFCFAFBDBLAFCHEFIDE@E@SMA@ABAB@J@DABA@G@IAE@IDMHCDAHAFABQNEJAFABEBE@KAE@GBCDGPALCFEBIDKFSFOFCDIJMHGF@B@DBBDBJBH@JAD@DBDBDJFNBHBJADEDCDAF@DBFBH@@@@@@@LAJ@D@FDFHFBDBHDN@BADGNCJCDMJGJABCJALCJCDEFCBGB]BABCF@DBFDJ@H@FBBFDBD@H@FDFHHJFR@L@NDVDDDBB@DCH@H@DBHNBDBHFNJFFBB@BAF@D@FDLJXDDDBFAdKpKH@B@BD@FEZ@F@DFFRNNLLHH@BADMBGDEDAHA\\ARBN@H@JBJFJFDBB@DAHIFCFAF@RBFDHHFFHDLF\\H`FFFFHFVFNFLJDFFJFFLJHHNDRBN@FAHEHAF@HBD@FFJJPJDDBBBFBBDBJ@F@BCB@BEDEFAD@D@DBBD@BBFBDB@D@HATCJCLGFAFAfIdKTEFCHGHCRAD@BD@DGHOPENAH@FABIJADABBDD@JBTAF@FBDBDDBDBDHJDDRHHDJBPHTFZEBAJBBDBNDDDBH@J@FAF@FDHFHHFJJJJF"],"encodeOffsets":[[114486,35461]]}},{"type":"Feature","id":"410329","properties":{"name":"伊川县","cp":[112.429384,34.423416],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@@VKDCBE@IFIHCZARALENFTA^HH@HEHENEJAR@RCJF\\SDC@@@@LIZKTDLDVDbGL@B@BCBCD@D@F@HAF@FBFDDBHBD@A@@C@C@ADCDE@C@E@EBE@CAC@E@CAE@CAC@C@CBCBC@CAC@E@EAEAEACAEACACCAECCC@A@AB@BCBADEBE@E@AACACAC@ABC@AAACACAC@CAA@ACAAAC@C@CB@BAF@B@DABABA@C@EAI@EAAAC@AB@BABABC@ABA@CB@D@D@BBFBFBDBHBFBD@BAD@@CBA@C@A@C@ABCB@F@D@D@DBB@DADAD@ECCAECCCCCECEEA@AAC@E@CBEBEBE@E@C@CACACAE@E@EBEDG@CBGBQ@YQSCQ@WGAFFTSPUAKCSAUGIEUAK@EBEDOLONKLGHSFOCWMS@SBMGGE@ADEDCDA@E@CA@AAA@GHC@G@I@GBMCYCU@MFOHEHE@MCECA@A@AD@DAB@BEAG@KKCEEKEICIEEACAGBGFEHERUBC@EBADABABCBCCGA@@ABC@CAA@CDG@GAIEG@AEGBCBABEHADC@CBABCFABA@C@CCEA@A@UDEAAAKCCACBCBA@A@CCBCAAA@CBGBODA@A@@IAAAA@@AAABCFCDEBG@ABCDCDCDEDE@O@EBEBGBKAUBKBKBIBU@E@EDABCDM@QCQDQHGJDRLR@@@@BBNL@@@@B@TNPJNPCVQRSCIAQIS@]DOBKD@PAVH\\DJ@@@@@BFJDJ@FEDAD@DBNDDD@F@JCJADDFFD@J@D@JLFFDFBH@VCPEDgNCD@FLJbT^HdRDD@F@DBBFDLBHFBDCLCVAFEDIDCDAJ@NBNLNJF^HdBVBNCT@D@DAHCBAFABAHC@@BAB@BB@@B@@@BA@@BAB@B@@@B@@@B@@D@@@D@B@@AB@B@@BB@AB@FCB@B@B@B@B@FBD@B@B@DBBBDB@@@BBD@F@H@@BBBBDDB@BDB@BBFBDBDBD@DBB@B@H@B@B@F@D@B@B@BBHBB@ADDFHA^EXCT@ZBLE"],"encodeOffsets":[[115202,35372]]}},{"type":"Feature","id":"410381","properties":{"name":"偃师市","cp":[112.787739,34.723042],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@E@IBK@CBCBADADAH@JBDABBFDFBFBD@D@B@BAFCJAFBHAHBF@L@J@DADAF@DBBBDBBDB@H@FAHAHCDADCBEBCAA@CAC@E@A@CBC@AAAC@CCCA@C@ABCBC@CDCBEFCHCLELEHCFCF@FADAAACECGAABAAAAAAAE@GBE@C@CAC@AEGIEGMKE@IBGFEDCDKHIBGBEBICA@C@ICKIA@A@EAC@GCGAGCAA@AAA@ABC@C@EBGBC@EDEDC@CBCACCACCAA@CBABADCFEJGFCBEBCACACAA@CACAECAEACABABCF@FCBCBE@E@EAEACCEACAC@CBCDCBCFCFBF@H@H@DBACAA@ABCDCBCFEFCBCFCFEBABGBGFGBEFEDAFCD@D@F@H@FALAF@J@F@F@DBFBF@F@H@J@H@J@FAF@DADAFED@H@JAHAF@DA@@CCACCAAACCC@C@EAC@C@I@G@C@EDC@E@EACAEAIA@@@@A@CACACC@CAE@CBEAAACAA@CBCBG@EACCAAC@CACAEAE@E@CDABA@ACAAAC@CACCEAAACCAAA@CBABCDCDCDCBE@CAG@E@E@I@E@C@A@AAA@CAC@CBGDABCBE@E@I@GAE@E@EBE@C@EBCBEAA@CAE@GBC@C@@DABCDCBEDKFGFGDIFGDABCAACCAECCACAE@C@GBEAC@GAE@CAC@GACAECEAE@GBE@C@C@ADADA@K@aHUCKCSCYLKJ@@@@CD[TDLBH@FEN@HBF@DGFCB@HAL@HEH@FBFBF@DAFAFBJ@DADIFCD@FBFHHHHFBJCJGHBJDJHHBH@JAHCF@JFNHHBHBDBCHEFADFFDBJBXJ@DGJEDADIFAD@DCBGBGFADEBE@GDGDG@A@ACEAC@CDADABGBA@C@CCC@C@GBEBC@ECCAC@CCEEAACACDE@EBA@AB@DEBEBA@ECEEA@AA@A@AAAA@E@ABCBE@GBC@CBCBAD@D@HDFBD@FAJAFGHAH@@@BAB@B@B@B@BBBDDBBDBDBFBBBBBB@BB@BDBDBBBB@B@BADAD@B@F@F@H@H@JAF@D@B@B@BB@D@B@VbHFDLHBD@@CF@FDDHJBBF@R@D@D@BFDHBBBH@LAFEHELANABGHADAFDDFHDBHBF@L@F@HBDBH@HAH@HCBAD@dCR@JAFANGFI@@@A@ACAAA@@BABCBA@@F@JDB@@@BAHGJED@@@@@DCDCBAJAH@D@DBPNBHBHDD@BBBDDFFFDFDFD"],"encodeOffsets":[[115518,35634]]}}],"UTF8Encoding":true});}));