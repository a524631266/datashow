(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('丽水市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"331102","properties":{"name":"莲都区","cp":[119.922293,28.451103],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@D@D@DAP@D@H@FFFL@@DHBDBBBBB@D@JAB@LCHCNKFCD@J@B@H@FBD@B@B@F@DBF@FDDDBDBD@F@D@BBBJHFDBDBB@D@D@FBDBDFFHFHJDDFDBBBBBBBBAF@DBB@BDBD@J@L@HADADADA@@DA@@BB@@BB@D@DBDFFBDBB@D@D@DADCBEBEDEFEBMHED@FBHBFBFDDFBJ@FBJEJGDAHCF@F@HBJFPTJJ@@BDDDBD@F@B@BABAB@D@BBDBDBH@D@HBD@D@H@DBBBDDBDBDBFBDDBBDBBDDBDFBBBB@BB@B@B@BBB@BBBFBFDBBBF@JBL@H@BBBBDF@DBDDF@@BDBB@BB@BADCFAD@JBN@JAJCDEDKBIBK@IBG@G@I@EFEFEHIJIROFIFEDI@IAG@IBCHEHBJ@HDFDFBJEHGBIDIHOBOBKFIDAFCDE@IAKAI@GDCHEDEPGNGNENGJEFCDCHCFCFAJBHBFBFDJJHJJNJJDHDBBDHFHBLAFKHIBCDIDKFI@GBGBGHGJAJCHAH@F@DCAICIEIGMCIIMCIEIGGCCAECAEAGCEACAG@ADCJ@F@D@FEDCAECGCECCAEECEGEGEEAICEAEAECGGGCGGEEEGEKGKCIGGGEE@Q@EHIBKCGGGICICGMAICIEEKEGGAIDIFI@EEGIAC@A@@CEGKKIGKIKEIGCKIIKEIEGKGIEOGQKMIMOEKGMIKMKCKEKCMAKACICEGAMFKFEJGFEFEHGBEBC@IDCAMPHHAFFAFDFHDJBJFFFJFHDLBLGJEFMLIFOHIBCUsEIUCC@[ROFEBG@EI@KFENQHO@GCGACMIA@QNKNAFIFKBIAEMCCG@K@AE@SCEGAIBK@GBM@CEEICCECGAKAGBM@IBODGDAD@PBX@FDRBDHJBDAHAF@BG@IAG@IDEDQFO@OBA@AB@F@BBBD@DBDBD@D@BBBB@BGFEDIDCFCBBDDBHDFDXJFJBP@P@LFBPCJGB@TAJBNJ@BQHOVQZ[PAD@@@@@@MJCPELGBKCIGICKAIDGHEHGFODKJEJ@FANRDTF^IdGNAPHRLDTGZ@PALCNILGNANCJ@LGLETAHCJBJHDDHFJHL@HCJANCFEJEJIFIHKDOBOBMAK@EBACACAAAAAAC@A@AAC@AAA@@@A@@@A@@@@B@FBF@J@HAH@J@FEJEJ@@AB@B@B@BDFBFBF@DAFAFCFAFCB"],"encodeOffsets":[[122486,29212]]}},{"type":"Feature","id":"331121","properties":{"name":"青田县","cp":[120.291939,28.135247],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ADGJEPKJENIFKHKAGCIEEEIEIAGCCEBEEEGBOGBNCD@JADAFGHEFEFIHEFELBNFHJDBDBLDNFLDLNLJLHNFLNPNJRLPHJFLHFHFJJLLJHDFJJLHLLJHLDF@@@BBDHJFFJ@JEJCHBFHFLJFJDNBDHDJHJHHLDJAFGR@F@HFHHDJHLFLFHFFHHHDHHFDFBFBJDFBHFHFDFFFDBFDHDFDDBFC@E@C@EDIBCH@DBFBHDFBDBHEFCDCDEFEDEBEDEFCDAHCD@DBLDHBFDFBJDHDHDDBFDDDDDDDDDFDDB@@@BB@B@HAH@@@FABBB@B@FEBAJEJCHGJIFGFIBG@GBA@@@CDCBAB@B@@BDDB@BBD@BAB@@ABA@ABAFIBCHCB@F@HBDF@@B@B@@@DCB@BABAFEHEFCHCDAFCFAH@F@F@DBF@DBD@@@HAH@FBDBFBDB@@B@@@@A@@@AAC@ABABC@CBCFGBAB@FBDA@ABA@A@@A@AAAA@A@@@@@AA@@@@@@AA@@A@@A@@@AA@@A@@@@@A@AA@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@B@@A@@@@@C@@@@@A@@AA@@@@@@@A@@@@@A@@FADC@@@@@@B@B@@AB@@@B@@@@@B@@@@@F@D@@@D@D@DCB@@@B@@@BA@@@@DI@I@A@C@C@A@@@@@A@@@@@ABA@@@A@@@@AA@ACA@AAA@AA@AAAAA@@@A@@A@@A@@@A@@@@@EA@@A@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@@@AB@B@BAB@HABA@@@@B@@AB@@@@@@@B@@@BBB@@@B@@B@@@@@@@@B@@@DBF@@@@@@@D@FA@@@@@ABA@@@@AA@@@@@A@@@@@@@A@@@@@ADEFGB@@A@@B@B@@@@@@@F@FAD@B@@@B@D@B@@@B@@@B@@@@A@@@@DC@A@@@@@@BA@ABA@@@AB@@@BABAB@@@B@HAB@@@@@BAB@@@B@@@@@@AB@@@B@@@B@@CBEBGBC@@AA@ABA@A@@@@@AB@@A@@@A@@BABAB@@A@@BABEBIBEBE@C@C@A@ACEAEAAAA@ABABEBA@@HAB@D@DADABABGBGBA@AA@@AE@@@AAAA@@EECCCECE@@@@@@@AA@@A@ACCCAGACG@GACAE@C@@@@@@@@BA@@B@@@B@@@@@B@@B@@B@@@@@B@BAB@@@@@BA@@@@B@@@@@D@DABC@AB@@@@@DC@A@@BCBA@A@@@A@@AA@A@@A@@@A@A@AAC@A@A@AAA@@AA@AA@AA@A@ACAC@@@@@AA@@C@@BABCBADA@AB@@A@A@A@@@@@ABAB@@A@@@@@AAACEG@GBCAIAMCUKAA@A@ABA@@@AA@JEFAJADAB@@CFADADA@@BA@@@AAAAEAA@ABADADABABA@C@AAAAAAAAAEEEECEAAACAC@@@@@@@@AB@@@@@@@@@@@@@@@@@@A@AA@@CC@@@@A@AAAA@@@@@@A@C@@@ABC@@@A@KC@@A@GCGCEE@@@A@@@@@@@A@@@AB@@@@A@@@@@@A@@AC@A@@AA@B@@A@@@A@@@A@@@A@@DABADABAB@B@@ABE@@BABA@ABEAC@A@@@A@@@AAC@ACCEAAAABA@A@A@A@AAC@AAA@ABA@ABC@C@A@AAAA@A@A@@@A@A@ACA@EAABAFCBE@A@C@A@C@E@E@@@A@@@AA@AAC@AAAE@EAE@CACACCCCEAE@AAE@CB@BAD@H@FAD@BAB@BCBCGCC@CA@ACECCACCEECEACA@DAFALABABE@E@GAGAGBC@EAI@C@IISQGGKCK@GBEFDH@BGBCA@@@@KC@G@@ACAGACBE@CAE@ACCCE@C@CAACAI@CACAABCBEBEBEBCAC@C@EBC@K@CBC@@BA@@BA@ABABAB@@@@@@@B@@@@@B@@@@@B@@A@@@AB@@@@@@@BA@@A@BCDKDGDAB@B@F@DCB@FBFBFAFAFEHGDE@EAA@@AACA@@@CBA@@@A@@@C@EBCBC@A@AA@AAAAAC@C@EBEDA@A@A@A@ABABE@MDK@A@IAKA@DA@@ACAAG@AAAEAA@GGACCAEAEBAFADA@A@ECGCEGAEDCDC@CACACCAI@M@K@E@IAECCECGGAEAIBEBEFEFCBC@AA@A@CBAAAA@GAOAG@KAA@E@YAGFAB@BBD@FAFBD@BDDBDABA@@BDBBBB@@B@D@D@@ABAB@B@BADABAB@BABABAA@AAA@@A@A@CBC@CAEACBA@AAA@QCMCIIOGIGGCA@EBEAC@AACCC@A@ABABCHCFEHCFCDCHABA@ABAB@D@DDFBBDDFBDDBBDH@BBBCNCLEJ@FJDH@HCHELCLANEPAJ@NALBLBHDDJHLHPDFHNFNFNDLBN@N@HKTGNEHGPGNKLKRMPKLENIJEJCJCJAJABAHADEHGHEB"],"encodeOffsets":[[122780,28862]]}},{"type":"Feature","id":"331125","properties":{"name":"云和县","cp":[119.569458,28.111077],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BM@EFILIPCHEFGHGJCLBJDJHLDHAFKDONI@@@@@@BC\\ORYPURG@AMIIASBA@IHODEA@K@OAOEIWIECGCCAACDADEJCFCHE@AAAAAC@C@CACAC@AA@A@EBAB@PAP@REFCJCH@JBH@@ABEBGACGIACCQ@EUEAAGEEIEEGIGCCEAC@C@A@ACEAAECGGCA@@AA@EBA@E@C@AAAA@CAC@A@GAC@CAG@C@E@ECEACA@@@AEECCGIA@AAACECACAEAACAC@@@EAG@QESGEACAIIAC@AGGCCACAGACACCAGEOIEAG@CBC@CBA@CCCE@@BG@A@A@@AGECI@G@IEGEA@EB@DEFEBABE@ICE@G@EACCBEFKBMDGHEDA@@DABEDIBK@A@GDGFEBCCCCEAKEEEAKDAFADGDIBIEAEBGBACAEBEBCCICOCOAIAIEIEIEI@EBCFAB@DEFIDIDCCEEG@AC@CDWAG@CAAAAEDCF@HCDAAAC@CCAC@@BAF@FBHAHABABCBDB@B@BA@EDABBF@DC@CDDDBFABCBAH@FAD@@GDIBGDCDBDDDBDB@D@@BBBKF@BADADADA@C@EHEFEFCFCBBFFF@DAFCH@DF@H@FADGJGBAJIBCB@BB@BD@BBDA@A@CAAB@DABBB@BDAD@D@B@FBD@@BABAB@BDADCFCB@F@BABA@ABA@@B@B@BDBBBJTBBDBBBDDDFBBBBB@F@FBJFFDFBHBDDFDBB@BABEDCBCBABABCL@B@DABAFCFCDEH@DAD@@BHAJBDADABABBF@D@DADCBAF@DABCBGDCBABCF@D@BBBBB@B@BABGBGBGDCH@DABBB@DFD@B@DCDAH@DBBB@FBDBDBD@DD@BDBBFBHBHB@DFDHBJDJHP@DDDBPBHADANEHEHQNGFEF@@AF@DBBBBFDBBB@FDDHBBBBDBDB@@D@B@HEJCFAHGFAD@BB@@B@B@B@D@B@FAB@D@BBBFBHBPBLBFJDPCLCJCJ@LDHHJDLBNBPCPCHCl@LJAn@bXB`APBLBLCHE\\C\\HPB"],"encodeOffsets":[[122507,28988]]}},{"type":"Feature","id":"331124","properties":{"name":"松阳县","cp":[119.485292,28.449937],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DABEDEBEBE@CAEAECE@A@A@ABA@@FIFI@E@IBG@G@IAE@E@A@@B@@@B@@@B@BBD@BBB@D@BBBBBBBDBDFAL@NBPAPALCJGJEFIFIDEBMDI@GGKEICGGCAIDIBGFSHK@KDIBMHMJKDMBK@OHYCSQKOGMBcH]JSEQCOA[G[DGFKDKAOA_BWA@aBmKIk@GDODODMAKAICGGKCI@IDKDODICAEAKAOAGAEAAC@A@EBA@C@A@A@A@@@AAC@EBGHEBIDGFA@C@@@CACAAAAACGECA@A@AB@B@D@BDFDB@B@@CDABE@EBCDEDCB@@A@ACAEECECAC@C@A@@@A@@AAE@CAE@EAICI@MFEFEFKFK@GAOCYGQAEFKPEHEP@NCHGFKDKDKFODODQDOBKAGECEBGDIFIFI@GCEGCMDKFGFILILILCNGREFBHHFDHFJDLBL@NBD@B@D@D@BAFAD@F@H@B@B@BBBDBBBAD@BABAB@@@B@@BBDDHJHFDBB@BB@@BBB@B@B@BB@DBB@DBDBDFBDDH@B@B@FBB@BBBDBH@B@BBBDB@BABKLAF@BBDDDDDBBBBFDFDBB@BCPAJ@D@FBL@FBDDHDFDBBD@B@DCBEFCF@DDHFJJPFHHDB@BBD@TAFAH@D@B@@BBBBHBLAD@DAF@B@BB@B@B@DCDCBAB@D@BFDH@DBJDFDDFDD@FHTRHDLNHJFHRLJH@@@B@@HDPLNHPBJFHJJDLBFCFCTULGH@FFBDHHD@DCNEF@JBLHJCJCHEFEEICIAK@QFIFAL@JBHBB@B@BAD@@AB@B@B@D@F@BBB@F@@BDA@@@A@@@ABA@A@ABAB@BAB@@@BBDBFDDLBD@@DB@@BBD@B@FADAFA@@JAFAF@BAB@BCBA@C@@@A@C@@AC@@@A@C@@@CBCBCDCBCBAB@B@@@D@B@B@D@B@B@B@B@B@D@@@H@F@H@D@BADABCBE@A@AB@H@F@D@B@BBB@DDBBD@B@BAFAD@F@HBF@F@FB@@BA@@"],"encodeOffsets":[[122486,29212]]}},{"type":"Feature","id":"331123","properties":{"name":"遂昌县","cp":[119.27589,28.5924],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G@E@A@A@ABA@CBC@CBAAA@@AAA@CBC@C@EBEBI@C@C@E@C@A@A@ABE@GAC@CAE@E@E@AAAACACAC@E@CDIBEBG@I@ACGACAEAAA@AA@A@ABCBCDI@@@A@ABCBADABAD@D@DB@BHDB@BBH@BBBAB@B@BABA@C@C@EFEDCDAFAJEFCDAFABC@CBI@GCI@@ACAA@AAAA@AAACCC@ACECEAE@ABCBCAEAG@K@C@CA@@AA@BACB@AE@A@AAE@C@A@A@A@@BC@ABA@A@GAIAK@EBEJ@RBLDJFJEFGFIDIDKGIAE@MFCDC@GGACEEG@KHSVEDEDKAICGIIEOAMGOKGC@@@A@@IGQKEGGIKMGCSQEGC@ECCCCEAI@CCGAEC@A@ABCDCDA@A@A@@A@ABE@CBCAKAGAA@AA@C@G@EBSBC@AAA@GCEGIOEICG@CDEFEDA@C@AACCACECGAC@EAK@E@CBIDO@AAAECECAAAACCCCAC@ABELKBA@ACAAA@A@AAGACAAA@EAA@A@G@CCEAACAC@CAA@CAAA@A@A@AA@@AAA@CAGEGICCAA@@@A@@BABA@ABCAACAAA@A@A@A@G@EBCBE@A@C@C@AAC@MAKCKEICGGEAGG@EAIAOCMBEDCDCJ@J@LBFGJEFGDOAGGIGEKEMAGAMEKCGGIGIGCIEMCGCECEIE@ADAF@HCFCJEJGJMBKAKAKEMEKEGEGCIIMMCCCEAI@IBEHKFEFMBI@ICCCCECIEKEK@M@IFKDIFKPEJCHCFCLELEJGHIFMFK@QEI@GAGACFCF@L@HBJALGDGHIFCH@JCP@LKDMKECEEGEGEOGKEKEKGAECGCGCIAEACEAGBKAKCKE@@ACACCCA@@@@AAACGCG@@@AMDMDIDCBCBGJIJGFAB@J@FAFA@KDG@CB@D@B@D@BBHBFBD@B@F@DCFGJCBABCBC@CBC@A@A@ACA@CAA@@@ABA@A@A@C@AA@BB@@B@@CD@B@BBB@BDB@F@H@BBDDBHFDBB@D@FFBBBB@@B@B@@AB@@@B@B@BBBDDF@@DDBBDDBFB@HLDDDH@@@D@@@@@BABCD@B@B@BBFFLBBBDDDBFBFBD@BD@DDDDBD@D@BBH@B@BABCBA@@BAB@@BBBB@BBBA@@@ABA@A@GAEACAC@C@@@AB@@CBA@@@A@@@@@A@@A@@@AACAAA@CAA@A@A@A@AB@B@B@F@D@F@D@@BB@BDBBBBB@@@BA@ABAB@@A@@B@B@@@B@BBB@@BB@@BD@@@@@@@DBFBD@BBD@FBH@@@BADGD@@A@@B@B@@@H@D@BBD@BDF@@@@@@@B@@@B@@BBBD@@@@@@@BA@AB@@@B@BABBBA@@B@@AB@@A@A@@@AD@@@D@@@@@B@B@@BBBB@B@@@B@B@@BB@@@@B@B@B@B@@@B@@@BBB@@@@BBB@B@BB@@B@BB@B@@@BBB@BB@@@@B@@@B@BB@@@@BB@@BD@@@@@BB@@@@@@@@@@B@@@BBB@@BBA@@@B@@BBB@@@BB@@B@@@B@@@@@BBB@@BB@@B@@@D@@@@@D@BAB@BA@@B@@@B@@B@AB@B@B@@BB@@@B@@AB@BA@A@@BAB@BB@AB@@AB@@AB@@@B@B@B@BB@@BD@BBB@B@@@B@@BB@@@B@@B@@@@BB@@@BB@@@@BBHBBBB@BBBBD@BBB@B@B@@@B@@@B@BAB@B@@@D@@@B@BBBBBBFF@BBDB@DDDBD@DDD@D@B@FCFCFCDABAD@B@DBF@B@B@D@BABC@C@@DCBCB@DAB@DBD@BA@@BA@EBA@CBABADADAD@D@BBDBFJBDFFD@DBBD@D@FDBDBB@DDDBDDDFBBDFBFBBHFFH@FADADEHA@BPANBHDFDDD@DD@FAJ@FBFDDDBDFDD@F@F@F@FJNDBDDF@DBDBD@D@@@D@F@DBDDD@BAB@BCDCBA@@B@@@BBFHB@BFBBBBBBFDDDDFBBBDD@@BB@B@BB@@@BBB@BBB@@BBBDBDBBBDBDDBBBBBB@B@B@BBBBBDBF@@DDBBBDBDBBB@DBFDDDHDFFBDB@BBFBD@HABBF@BBFDBBBDBFBD@B@BBBB@B@BBBB@BDBDBFBDBDFBB@@B@@@BA@@BBF@BBD@B@BBB@DDBB@@@@@BB@B@@@B@BABABADAB@@AB@BBB@DDDF@@@@BBBBBBB@D@D@D@FAFAHCHADAFAF@D@FBN@LDLDLDJHDBF@D@F@JHFJFJHHDFDBF@LAJAF@D@HBF@FAHCNADAF@FA@@FAH@D@DBF@BB@BBB@D@DDBDFBDFBBBHDFFJHDFDJBD@@@B@D@@@B@B@BBBB@FDB@D@DBH@D@D@DADAB@DA@@DBB@BB@@BBDBDDDDBB@@B@D@DAB@BCBABC@C@A@@@AB@@A@@B@@@@@@@B@@@D@B@@@B@B@@A@@BCAC@C@A@CAKACBC@CFGHEDIBGBEBAFCBAF@DAF@DBFDDDDF@@@D@D@BBB@@BBBBD@DBBBB@BBBB@B@FBF@DBBD@BBD@D@B@B@B@B@D@B@B@B@@@BADCFA@ABABC@A@A@@@AB@D@BABADEDGDADADABABC@E@GBCBCD@HAB@B@DDB@BBDBDDB@DBBBD@D@B@B@B@D@B@B@BBBBBBB@B@D@B@D@BBDBDBBDD@BBFBB@BA@@DAB@BA@ABC@AAE@@@C@CBGBCBABA@ABABA@ABA@@BA"],"encodeOffsets":[[122348,29430]]}},{"type":"Feature","id":"331122","properties":{"name":"缙云县","cp":[120.078965,28.654208],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACAC@CCCCACAA@CAA@A@C@A@C@AAAAAA@ACCCAAAC@A@ADC@ABA@AAA@ACAEA@A@A@C@AAACCC@@@C@E@A@CBABA@A@A@A@GKCGKIEICCACBE@A@@@@@AA@@A@@@A@C@A@A@A@@@A@@B@@@B@@@@@@A@EAC@AAA@@@@BA@@@A@@@A@@AAAAA@AAA@@CAAA@AAA@A@C@A@@AAAA@A@AAC@CAAB@AA@@@AAA@@AA@@@@A@@AE@A@A@@@@@@@@@@B@@@B@@B@@B@@@@@B@B@@@D@@BB@@@B@@A@@B@@@@AAA@A@@@A@A@A@ABA@@BABC@@B@AECEECA@A@@@A@CBA@@BA@@@AAC@AA@AGAE@@AA@IOEO@@@S@@AC@E@A@ABEB@@@DCBAFE@@@AB@@@@@@@@@BA@@@@@@@@BC@@B@@@DCFC@@D@BAB@DA@@B@@@B@B@@@BA@A@@BA@@BA@@@@D@@@@@B@D@B@B@@@@A@A@A@A@CAA@C@@@A@@A@A@@@C@@B@@AAAAAA@A@@AAB@DI@@BA@ABAB@D@DAD@DADC@ADADABC@@@C@A@AAA@ABCBCBAB@B@BADBBAB@BCDC@A@A@AAAAAAA@@@ABABAB@@ABA@EAEAC@A@@ACEGCAC@CBGFIDA@@@@@@@CACAAAAAA@A@EC@@@AA@A@@@AB@@GB@@A@@@CBABCBC@ABABA@@@A@AACCGCCCAAAAAA@A@AB@@A@@B@@ABB@@BBB@BA@A@ABC@@AA@@CCAA@A@@AA@ABA@@@@@A@@@A@@A@@@A@@@A@A@ABCBABABA@A@@@CCAAAAACA@@A@AAAECECECCCCAAAAA@AAEBE@A@@BCBC@AAAAABA@ABABC@A@@@E@@AC@A@@BA@@B@FADABABAB@B@B@B@BB@@BBDJBDBBBD@DBB@@DBB@BAB@DEBA@ABC@@FEFA@@FAFA@@B@@@B@B@@@@@B@@A@@@A@@@A@@AAA@@A@@@A@ABA@ADABADC@AB@B@D@@BJBJBD@D@FBD@B@D@B@@AB@BA@A@AB@B@BBBBFB@@D@B@@AB@B@@CBABA@@@@@A@A@A@A@ABA@AB@BA@@@A@A@ABCBCCAAA@@@A@C@A@A@@@AA@@A@A@@@A@@@A@@B@@A@@AA@C@@@A@@@@@A@@@A@A@@@@@@@A@@A@AA@@E@A@AAACAAA@CC@@@@@AA@@@@@BA@@@A@A@@@A@@@@@ABABA@@B@@ABAB@@@@ABABCBA@@BA@A@EAC@ABA@E@AAACGACAE@A@@@A@A@@@@@@@@@AA@@@A@@@A@@B@@GF@BA@@@AB@@CF@@@B@@@@@@@B@@@@BB@B@B@@@@CBEDCBEB@@ABA@@AA@ABA@C@C@A@CBAB@@@@AA@@A@AAAACA@A@@@A@CAABG@AA@@A@A@@BAB@@@@A@@@@@A@AA@@A@@C@GA@@@B@@A@@@CAEACAEAG@GB@@C@CAE@CAE@E@G@EBEDCBGDEDGFEFABABA@CD@@A@A@@@CEGAE@A@GDADEJAB@BAB@BA@ABC@AAA@CC@AA@A@ABCD@D@@AB@HAHEJEHIJGHIDIFABEFA@A@AAEB@@G@GBA@A@@A@@CAECCCCCCCCCECCAGCGCICEAECGAKCCAC@GDCBEDCFAFCFEFCFCDEDGFBFDDHHFJDJJNDJHNFJDJBJCDE@G@GBIDIBGHAHAH@HEJCLCJADGJELKBGAGEACCACGIIIMGIIIECEAGAIAEBEDGDCDEDIFMHMFMHOHCFGFCD@HBJBL@JCFEDCBEJALAPGPCJAJGHIFEAECGCI@GAGFAD@JBH@JCJEFEJQPIJGJEFEF@F@J@HAH@JALAJCLCFIDIBM@IAC@EBCDABA@@@@BBD@BABADAB@B@@@BB@BBBBDBBDDBB@BB@@B@BAB@BEBA@@B@F@PLDDBDBBAF@@@@@@@@DJHJLHDBBD@@@BAD@@@B@@B@@@DBDBBBBD@D@B@D@D@D@F@@@BB@B@B@BBB@B@B@B@@@@@BA@@B@@A@@B@@@@@@@B@@A@@FAD@B@F@@@@@DADABABC@@BA@@@@B@@AFBFBB@@@B@BB@ADAFAB@BBD@@@BBBBBDB@@F@@@@DBD@B@D@B@@@BBBBB@@ABA@A@@@A@@BABABA@@B@@@BAB@B@@@D@B@@@DCDCHCFA@AD@@A@@@@@@B@DBB@@@B@BC@CAE@EFAFAFCDCFADABEBCBAD@FDHBF@LBFBDBBBHFFD@@BDDBFDDDDBHDBBBBBBBBBBB@@@JD@@JBDA@AB@@@@@@A@@@@A@@AA@@A@CAA@A@AB@BABA@@BA@@@AFEDCDABBDAD@B@D@B@B@B@@A@A@C@A@@B@@A@@B@F@D@BBBABABA@@LAF@DB@ADDFFDJFL@@@@@BAB@BABA@AB@@@B@@@@BB@@BBB@B@BBB@B@D@@@B@BA@@DAB@BADAJ@HCDA@A@A@@BAB@@@D@F@B@D@B@B@B@BBBD@BBDB@@@@@@@BB@@@B@@@@@B@@@@@BBB@BD@D@D@B@DAFAF@B@B@BBDBDDDDBBBDBB@B@BABABA@CBABCDAB@@ADDLJLLNFF@DBD@FDBFDHBFB@@DDFDDDDDBFBHFJFFFDNB@@DBDBDBBBBDAL@LBR@P@B@BA@@B@@ABAB@D@B@BBB@@BBBB@B@B@@@BA@C@A@A@C@@@A@A@ABA@AB@@@@BB@BBDDD@BBB@DB@BBB@@B@@BB@@@BA@@@ABADAB@B@@BBBB@BBB@@BB@@@@@@B@B@B@@@B@BBBB@B@@@BAB@B@@@B@@@BB@@@B@@BBBDDDB@@B@@@BA@ABA@@BC@C@@@@BC@A@C@AB@BA@@@@@CAA@A@ABAB@D@FBDBD@BBB@@@HAH@JBB@BAHD@CAEACBCFAHIBEAEGGACAA@C@C@A@I@AAAAAA@A@AA@@@A@@B@@AB@FABADABA@@B@B@@@B@@@B@@A@@@@B@@CBG@@@AAEA@B@DADCBAFAFCD@DADCDCBA@@@AA@@@BABABAD@JAB@BA@EBC@CBA@@B@@@B@B@@@B@AABA@AFABCBC@C@AB@@@D@DADBDAD@DCFED@BABBD@B@BB@ADABCDAD@B@DBBDBD@@BF@F@DABABBB@DDBBBBBDHDDB@@@B@BABA@A@E@A@CDC@@F@DBFBBBBD@BB@BBBABCBABABCBQDI"],"encodeOffsets":[[123317,29524]]}},{"type":"Feature","id":"331126","properties":{"name":"庆元县","cp":[119.067233,27.618231],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BC@@@CECEAG@CBA@AABCD@DBDECEBEFM@AD@BA@CGGII@ACCAG@GBEDABCDKBCF@B@B@BD@@@@BBDFBDBDDDD@@@B@FHB@JGLGVALHFHB@FCDGDEDBD@D@B@B@B@FEDE@C@CB@@AB@FABAAADCBCDA@A@GBABABABC@EAACCA@A@EBCA@ABCBC@ACAEAC@ECAAGECAC@A@A@CCAGECAAEECE@EHINCXEJELOFIJGXCNGPIXWJARNRJRAFELGNGFHHJLBTBLDHJFLJNN@LENGNCFGE[AMDQB@@C@EBEAADGDCD@BB@@CDABDDF@DABCAABCBBDBB@HA@C@EAGASBEAACCBCBCAGBC@ABABE@AACCAOKCCEKGODQBKCMKS@QCKIMGKSSIGKCOEIJGLCN@JILKFU@U@UEOCKEUOGGKKIGEG@@B@@AB@@A@A@@@AAABA@A@@BAAA@@B@BAB@@@@A@A@@@A@@B@@AA@@@AAA@@@A@@@@A@@@@@A@@BA@@@@@A@@A@@@A@@@@@EGKGMCKGmSOEMGEMGS@A@@@CAECCAAAACGCE@CAAE@EAEBGBGCAACA@F@JAFABEC@E@KAAABAAAAA@AAABABABC@GAGAAACB@@EDEBCBEBC@AACAAAAAEBC@CAC@A@ABCFEBCBCBCBCBABC@CAECE@C@A@AB@BABA@@@AACAA@CACBABABA@A@AACAAAA@A@AB@F@B@@ABCDGBC@C@CAAAA@C@A@A@CFCBA@AB@B@DBDBH@BBD@BBF@DCDGFADJDL@D@B@@DAFAF@DADADCDCBCBCBEBE@AAAACCCAEAGCCACCAAAAA@AACECACAC@C@CBCDCF@BCBA@A@C@AAGEAACACBMH@B@FAFGDMDCEC@EDGHGLKFEHGBMAIAM@GFGHAAMG@EDCFCFE@CAAACBE@CACCACAC@C@EBEACAEAC@C@MIDABCBC@AACAC@CAACGAACAABABADCDCBA@C@CBC@CBAB@DABA@CBC@C@EAC@A@E@A@C@@AABEAC@EAEBEBEB@B@B@DBDAFCHCFEDABC@AAC@@BAB@B@@@D@@BBBB@F@D@BADADADAB@BKCCDDD@DABC@AB@DBBAH@DCBABAAA@EAEAAAC@CBEDAB@D@DBD@BBDBBD@DBFNFHHBRDNJJRDNHFJBHBDFGDEF@L@J@DAD@B@BDBBBBB@DADBB@BBF@F@DBD@BB@DBBBBF@D@@@@@BAB@BC@@@C@@@C@A@@@A@ABAB@D@B@D@BBBABABAB@BBBBB@BBDAD@@@@@@@@@@@B@DEFCFADCHABCDCBGDEFEFAD@B@B@D@@ADCDABAB@B@B@DB@FFDFBFAFEFCFBHDBN@J@LAH@BF@DCDCFBF@DE@EAC@CDCDADCDCFADEDCBC@ABA@AD@BCJENCHADCHABADCBADAD@H@D@@ABC@E@ABADGDEB@BDDADCHFDJDF@DBAFADCHADBD@B@FAB@DCBA@EFABCF@FAFADABBBBDH@J@LFHFDBB@VNDBFFH@BBDBFDDBD@B@B@DCBCFCB@@EBCBC@CBEBCDCFABA@ABCBADEBCB@DADAFCFCBABCBEBABAB@BBFDLFHHFBF@B@BAD@DCBAD@FBB@B@D@D@HAJ@BBDCFA@ADENDR@BABIEGOGIA@AFAJ@LBLFLBJEFI@MBEDCLBN@@AAABAD@BABE@@AABCCIEOCM@KBGHCJEBC@G@CRGPADBPRRFB@@@DADCB@B@@C@@AABAA@AAAAA@AE@CD@DE@EACAABAACBA@@DB@AB@@CB@FBJDbIJBHHJL@D@BBDBDDBDBD@FBHABE@EIGIO@CJCJ@LHHTZDFHDP@JBFFBHADEBIGA@@DJLJNFR@PBD@BABCDGHGDAAE@CCCCA@C@C@ABAFAFEFCD@BBD@DADADBF@FAHDDL@L@B@FDVDJ@JEJGJANDbNHFNDFFFDD@D@DA"],"encodeOffsets":[[122111,28517]]}},{"type":"Feature","id":"331127","properties":{"name":"景宁畲族自治县","cp":[119.634669,27.977247],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FAHGFGBCBGBABIDIDIFIJIFMLKNOLQLKHMHOFGHMLS@G@MAMCKEMEMGMCEGOGKCIGCKAKAMBI@OBMFKBKDGFGDG@IC@EFIDKDMAA@ACGAACCEACCAACE@C@CBABAECCCCC@@CAAA@C@CBC@@AC@I@ECCCBCJEJCDA@@@A@AAA@A@A@@@ABA@A@AA@@AA@@C@A@OECINMPOJI@AICECAAEGCCAEAGACA@G@G@CBIHCDCDEDG@E@EAECCCEAA@AAACCACAAA@A@@BADA@@@@@CAC@CFEFEBAB@B@B@DI@CCIACEKCECKA@CCCAACBEDABCBCAAAECC@A@A@S@A@CBA@@DCJA@ECCKCCE@A@A@E@A@A@@@A@@BADABA@@@A@@@A@@AA@@A@@@AA@@@A@@@AB@@@@AB@@@@AAA@AAA@A@A@@@@@AAA@@CAC@ABC@@@A@E@AB@F@J@BABABCACCAA@CCAEAA@@@A@AA@AAA@@ABAB@B@BA@@@AA@AAC@AB@@ADA@@@A@AAAAACEA@@AACECGGCCEGCG@@A@OBCAIMGEKCGA@@@@ABA@E@GCKEKEGCAAAE@C@EAE@AAACACACCACA@CAA@@CAAAAAACAA@CACAE@A@A@A@AAAIAABABA@ABAAG@EBE@ADAB@BAB@@AACACA@EACAAA@CAECG@CACCCCAAAEA@@CBG@E@EBC@ADABCBCAA@E@ABA@C@C@ICEAA@AA@CACEAEAG@CBCB@@EFCBA@AAACECEAAAEBABA@EEC@@@CBC@CAAB@B@B@HABE@ABAB@DABE@A@@CAADEBE@EACACC@AAMBEBA@AA@A@EACACAACAEBA@CDA@CBEGG@E@GBA@CAAAADBBADCBE@CCBADC@@AAC@CDCHBBAF@F@DA@CRBNF\\EHMDMHKFM@IMEKGIKCSAKAGIEGMHKHEFQBQIQMIBWXOJMHWDIHEJKPIFWFMDGJ@FDFFFBBFDBHDDB@B@D@DBHFBBFDD@FBDB@BADAD@BDBFAB@B@DDBB@FADABABAB@H@BCBADCDBBABEBA@@BA@@D@DCFEFA@A@A@C@C@CACFCHEDA@EGKGUBKHIHA@EGA@@@C@CCACACCEAA@@@@ACA@A@E@ADCLADCBAF@HBHDD@BJJHH@DABC@@BENAFDFCFCAC@ADBBB@DAH@FBFD@D@@ADB@DBBB@FBABCFALDJFBD@BABA@EAA@@@GFAD@BABAFBHDFB@BAF@HDBBCBADAFFFHBJPFDB@DDDJDHB@D@BCDCHADDLLJBB@BCBGFIDB@FCF@BFDFBDAFCBAD@FBLELCHAD@HDFHBFDAD@F@DDBHAFCDDBD@BCFAPJFADCDKDAD@F@DABABABGAG@EBE@AD@DB@DBDBBDC@GDEFCBBBB@DBHCX@DBDH@FFDDJCJCFE@CBADEFAJ@JFJFJFJBPBPDJDDDFAFADBABAHBFJFJAHCBCBELCFBFFBLDFDDADEFCH@H@BALCJAFCB@@CBGFCHANELAFDDFBH@F@JDF@BAFAFE@CFAB@HFJFH@J@FDBH@@@B@BAH@@DFDDB@DAD@DAH@FBPJHFDBBDBDBHBDDDHH@BBDJJDBFBTHRFH@FB@@D@DBBBBFBDFDBDBBB@HJDDFF@B@@DBFBFDF@D@H@DBD@HBB@D@DBB@BB@B@D@FAB@FBB@@DBHHFDBBDF@B@B@DBDDFHDHJFFFJHFBBVFAW@OBCHCPCJAN@HALBHBFDDDFJDFN@HAL@JAHBDF@TBFL@H@DDFNJBLAJEBELMRMB@NJBDDH@HGPMREF@LFJH@FAPE\\QD@VDFJVt"],"encodeOffsets":[[122780,28862]]}},{"type":"Feature","id":"331181","properties":{"name":"龙泉市","cp":[119.132319,28.069177],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAECAAAA@CBE@@FEHERMFGFGBMBCAGAOCC@CGOCIAICGCEA@AGAGAECA@ACCC@CACAEAA@AA@CBGDC@C@AEC@CAABA@CDGHCHAHABA@A@AAAAA@A@CDEBADAHCDABA@CBEDABC@C@CAEBABABCACBIAG@@BC@CFGDCDEBEBA@C@ADKBABADADAFCBA@AAAECCCGAEAECIEEAE@A@AAAACECCAACAAAISAACA@A@A@AB@BAB@BA@A@EDADEBCACA@ABAB@@AC@E@A@CBCACA@AACBA@BB@D@BCBAAC@@AAAA@ADIJABIHCHEBG@E@@CDGBE@CEEAEDADEFEFEFGD@B@BCBCBC@ALEAA@AC@A@ACCCACDCHCJAHC@@BC@EBGDABAAECCDCD@@CAEBAFCB@@A@ACAE@C@CBCLCDEBOIEBADC@CADCBEAGCCE@C@CBAEEGGCC@GBKDKFEAC@ABEDCBEAEC@ADE@ECAEJAHADA@IAKKCCGBCDADC@A@CGCICCA@ECIOGAEEBEBCDAAAGCE@ABA@CEAGBEBA@ABCHE@@B@FBB@BA@AACIEKCEBADAB@EAACAA@CBC@C@ECEEMCGEaMMCIBIHIFI@UCECA@K@K@CCBG@EAEBCBC@CAC@ADCFEBEBEBAD@D@B@DDDDF@BBHCHGDCBA@AAC@OEQIMIK@CB@JHFABCAGEEIAO@GCCEYGSKGI@ID@DJPJH@FAFGBEAC@CACAACAC@A@CIKGGIAaJICEAA@@DA@@BCA@@ABBDABBBBD@FCFC@@DBFB@BBBBB@ABBB@@@DA@A@CDCB@@A@QEOQCAOBQH@D@HADIFGDAH@LDNFPDJADBB@@AFABC@ABBB@BM@KACDAF@NEJIFKAKEKAI@EB@BJBPHFHAJABQ@MCCF@BEBCDAAI@GBC@C@A@A@EAC@ABCDC@ABA@E@EAGGKEECAAA@ABABAFADABEDEDCBCBA@ADCFABAD@BABEBCDADAF@DADAD@FA@EDADCDA@A@C@CAECCAAAG@EECAUMA@CAGEKEI@G@AD@B@BADCDCDCBEFDDDB@B@DBD@FBFBBDD@B@FADAFCBEBCB@DAD@B@BDDDDDDEBEDCDCDADADBB@D@B@B@B@DCFCDABFH@DC@IB@@C@EBG@C@@B@@BDBBDB@BAFIFKDQHYFABCBCBC@G@E@C@A@A@@B@B@DADGJEFEFGHCDADEBCBABAD@B@JBD@DBD@D@BAD@@@BDDABADCF@@@@@B@@@@ABABAB@D@D@D@F@BBHDJ@@@@@@@@@@@@@@@@@B@@FHDF@@@@@@@B@@@@BFADAFCDCDGHIDAF@@@@@@@B@@@@@@@@@@@J@H@H@D@BD@D@B@BBBHDBDBFDDB@@BB@B@BBBBDDDB@@@BB@@BFBDBBDDFBDB@AB@@@@@@@@@@@@@B@@@@@@@@@@@B@B@@@@@BA@@@@B@@@@@@@@@@@@@BB@@B@@@BB@@@@B@@@B@@B@@@@B@@@@@@@@@@@BF@FBFFFFBFBF@H@FAD@D@DBDHDDDBFBDBDBBBAB@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@BH@DAFAF@@@@@@@@BFDHBJBHBH@DAJADAFEFCBKDIDI@GCGCGCA@@@@@G@G@AB@D@@@@@@@B@@@@@@@FDFLTFFHFFBF@FDFFHJFFBBF@DBB@@@B@B@B@BB@BBFBHBDDDBDBFBDADCDCBABAFCFCDEBEBA@@@@@@@A@@@I@A@@@@@@@A@@@@@@@@@@@@@M@GF@B@@DHDHBB@B@@B@DDBDBD@@LFLDLBHAFBBDBFDJDHDHBFLHLFLFPHHFHFFFFDNLLC@KDO@IDGJEHGHCBKAI@G@KDEDEHBHBJ@RFL@NEJEHGFIFKDKDEDGFILOJELCJEN@L@LFJFFDDDDD@JAJENEFGLAF@JBJDFDDNNJJHDHFLFNFLFLBLBNAHIFIDIDE@GBEBCF@FJFDHDNDJFHDHJHJDHFLBNBHFNFLJHHHPBHCFEHIAE@K@IDIDCFCNAPDJBFBH@FEHQDMJKJKJKHELENCHDDF@HEJEJCJAHDFHFLBPARCPCPCLELCLCHEDG@MFOFGLOFERBZHPDHBL@LEFEFENEJ@JDFBF@DBF@BB@@@B@@@B@DBDFDFDBFBDB@@@DAFCDCFAF@BADC@@@ACACE@A@C@ABAB@"],"encodeOffsets":[[122260,28919]]}}],"UTF8Encoding":true});}));