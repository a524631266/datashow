(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('信阳市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411502","properties":{"name":"浉河区","cp":[114.075031,32.123274],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@D@LD\\BbAP@PILEFDAL@JHDVFRBN@FHFBBA@IDIJGNBNA@AB@DA@CB@DAJAFBDAB@@ABA@@@@D@D@H@D@DABABC@C@AAECCCCA@CCCAAAAAAC@EAE@A@CBCBCDCFABAF@F@B@B@F@JDDBB@D@HAJAHABABA@CBCBCDCBABC@C@@GE@AAABEBAB@B@D@BA@A@A@CBADEBAD@F@BBDBDDFDDDDBB@FAD@F@BABCBABAD@D@BBB@B@DCDABAB@B@FCF@D@B@BBDDFBNFFFB@D@FBDDDDBB@F@JBHAH@D@BDBD@BB@DADBFLHREPQDMFINCFI@a@UFGJODMGMCI@EHO@EGKCICOIEGY@UFIPIJKFC@@@@TKVGNKFOFSBGAIGOAIDGHGLGRGNBdFN@XEVKRGHGBIBIDIDA@CBG@E@A@CAAGAAAAACGAAA@A@C@AACAACIKCCC@E@IAC@AAAAAA@A@CBABC@A@@AACA@@AABCBGBCDC@AB@@AAECEAE@E@E@A@A@AAA@A@ABAHOFGBCB@FEHGFCB@BA@CBAAEBE@AFCDCD@F@D@D@@ABC@CDGFKBEBC@CCGEIEGACAE@GACCCGEKEICAAIBK@GAECGI@A@C@CCAIAG@E@GDGDG@E@A@KKAC@M@EEGCE@IAIACAAC@EBC@IEIGGIEC@E@@@@@AA@@A@@@@@@AAA@@@@AA@@@@@AA@@@AA@@@@A@AA@@A@@A@KDSBIAC@CCAKACECG@GBE@G@EAAAAAAAC@GBGBE@O@CAKGSMMICEEAE@EBGDGHEL@F@D@D@DEHAD@D@D@DA@CDIBEDEDCFAHBJBJ@HAFADEFADAF@FJPFFDFBF@J@HADCDGFQJQL@D@BDH@B@DGDGAMAKCIKEEGMGOEICCC@EAG@OGCACAA@ADCBABA@@BA@A@@@CACCAAA@A@A@@@ABCB@@A@@@GHGFEBCBEFAD@F@FBH@D@BEFEDAB@H@DDLDL@BADADBFBD@H@HCLADCBC@CBE@IDEBCFCBC@CBCBAD@DBF@NBLDHFJDDDDBD@B@DABC@C@CBEDGDIDE@E@C@C@CBKFCDCBAAEACAABA@EFCFCBA@CBABAD@HDNBFFFHJFLBBB@F@B@D@BBFHDHBBHFDFBDCHCHKJMFQDCDGFSREFADAFADABG@CBSJ@DBRALE\\EVBBB@HANCDABCBIBCD@B@HDHDTVJNBHAXCTBDPXJNLHBD@HCNCDAB@D@HADABCAMEAACBEDAFCBMLAHE^ADCDGFABCZBDDBHBHBDB@DANAFRH@A@C@A@AB@@A@@@ABA@A@@@@B@@@B@B@B@B@@@@BB@@@@BAB@@ABAB@@A@@B@B@@@@@@B@H@B@DB@B@F@DABABBdHBBD@DADEDCB@FCH"],["@@IJAH@DDFFJDDfPAcCDCDCDGDABCAA@@A@A@AFMBA@GQG"]],"encodeOffsets":[[[116497,33094]],[[116480,33048]]]}},{"type":"Feature","id":"411522","properties":{"name":"光山县","cp":[114.903577,32.010398],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@A@ACE@@BCB@B@F@B@B@@A@@AACC@@@A@@DAB@AA@AEC@A@A@CBC@A@@AAAAA@AAEC@@@@@ADC@A@@AAKGAAAA@A@A@ABADA@A@AACBA@AB@LCDADA@ADEHKDIDIBAFGFC@AB@@A@A@ADGDEDADCDABABBB@@@@@BA@EBAB@BAB@BA@A@A@@AA@A@C@@BAB@@ABE@ADADADA@@@A@AB@B@DA@ABA@AB@B@D@B@B@BCB@B@@@B@@D@@B@B@B@D@B@D@@@B@D@BAD@B@BBBBBB@@B@B@DAB@FDD@HAB@HBB@B@@AAE@A@C@AIECACEAGAA@ABEBG@@@@DGBC@CACGEECC@G@E@G@AA@@@@@A@AFCDCBABCAC@AAAA@CAEAA@AC@C@ABCDCFCD@HAFAFBB@DAFCB@@A@@CECC@C@A@C@A@AACCCACAI@CACAA@A@CDEBCBOBAHGDGBABAJABADABCDEHGDAHENID@BAFBB@DABAFGBAD@D@F@H@DBBBFDDHBDB@B@FABADCBE@CBADADAHKBAHCDADCBEFKBCFEDCLGBA@CBE@EBAFEBADAF@LBV@LAAAAACACAEKKSEMAC@AFI@C@@GI@@@ABCBE@C@C@AACA@AAI@A@@AAABAFIBE@AACAI@A@A@AD@HBBAB@BCDENKD@D@F@D@BADA@AAC@E@C@ADCBADABAD@PCJCPGDCDGFQ@ADADABABC@A@A@AEEGKCECAA@CAAAA@@AAA@A@ACCAECE@EICEAMCGAKCA@E@A@OFE@C@CB@BAD@BBDAH@DABGBG@@@AB@@@H@BABEBIBCBA@G@A@G@@@@B@BDJ@BABCDA@C@@ACAEEEECAA@@@ABA@@@MCQGC@C@C@ABCDGNEL@FADBJABA@C@AAYG@ACAAGCAACA@C@A@CBCDCHCBCDC@C@A@E@GHC@AAC@IEE@A@E@C@E@A@AACC@@CAGAEAG@SEE@A@AD@B@H@B@@ABA@C@G@cFABADEDGFC@CDCBEBIBC@E@@@EDCFSLGDKJIDKBEDEDKJABA@C@ACAAACBC@CBE@AAAGCOIC@A@CBEDABA@AAGEA@C@GBGAC@AACCCE@AGACAEEA@CB@@AD@BBDFN@B@DABCD@B@DBF@@GBIBCAEAA@EBEBMJABEAGACAEEAACGAAA@C@A@GJIHCDEBEBC@A@CAABA@@B@BBBJBDB@B@BCBCBC@C@AACCACAAC@CA@AAE@ECKAG@ACAAA@BA@CJADABABC@EAMAC@EBEBABAD@DBH@F@BABEDOFKDOBKBAASEIECCA@CBCBMNCHCHABA@EBIAIAIA@B@B@J@HCHBFBDADCDCBCDEDADAD@D@BBBBDDD@DBJ@DBBDDBFBFBFBD@FBDBBDBB@BDBBBBH@FBBBB@@BABEF@DBBBD@@@BA@@B@DBHBD@BCDEJELELGNA@C@G@C@CBCB@B@BBBHBB@@B@BCDCBGBGBI@A@A@AB@DCHABADEBGFABABAJCL@DDDHJHFJBLBFDDBDDBDBL@RBFBDFDH@PDFBFBDBDBDFDDBHBFAHAH@D@BBDLHFFBB@F@D@D@BB@BB@FBDBDHJNTBB@D@DAF@BBDLLZdB@F@J@FBB@BB@DAFEHIP@D@DBDHJDD@DBJ@FBDHFDDRDLBDDDFDJ@F@HAFRAN@P@D@BABA@EBE@ADAH@H@F@FBRLDBB@B@B@DELMNOBCDKBEBCDCBEDCB@L@DB@@D@DANEPEXMDAF@D@F@BBDADAD@D@@BDBBBB@B@@B@@BBDABBBBB@B@B@BAB@JDFFFFFDBDBBBB@D@DB@B@B@B@BBBDBBBBDBHFBBF@HBHDB@@@BAB@BBHFDDBBB@@BB@@AB@B@D@BB@B@B@B@BBBBBDDFDFJ"],"encodeOffsets":[[117667,32965]]}},{"type":"Feature","id":"411524","properties":{"name":"商城县","cp":[115.406297,31.799982],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@FAH@B@BA@ABKDCBCHEFCHGFC@ABC@CBCD@B@B@BBDFBBBBD@D@BABA@CB@@@DD@@B@BAD@B@B@@BAB@DBDBHBD@BABABCBCB@B@DDJBH@FAJ@BBDHH@FBDAHAN@DB@HFLDHBFBF@D@DAD@DADBBBDDHDB@DBDA@ABIBCBAFAFCBAD@FBDBB@D@FEBAD@B@FBD@B@@@B@@A@@@ACG@CCI@CBABAB@BBDB@@BA@C@G@CACEEEAAAAAAC@EBABCHIHGDAHCJEF@H@JBJBJBHDFBD@B@BABAFG@CBC@I@K@GAG@ABCBAJAFCDAHGDEBA@C@E@EAACAICAA@@@C@EBCBCDA@@@A@AAA@A@CBABCDAB@F@@@BBBD@D@DBBB@D@B@BA@A@EBEBC@A@A@C@C@ABK@G@CB@DCJEFCBAAAAE@C@ABABAFCHCDABC@E@AA@ICCACCECCEMMAA@A@ABCBG@CAAA@EC@AAA@EAEACCCCA@A@A@A@CBA@AAE@E@A@CFKBC@AACAECIAAC@CAEEA@BABIDQBEBABAD@DAB@@A@AAA@C@A@CBEDABAFAH@LAHBD@BBBBDFDDDBFBH@DAFCFEDEBCBCAC@GACAAGECA@A@A@ADAFCJCPC@ABEFQAAA@@AEG@AAAGECAEEGEICKEICE@AACCACECGCEACA@A@CACCCACEAGAEAG@A@C@CCCAEEAA@AAC@AACCCE@C@MDEBE@CBC@CAGCECEEEICEECWIGCAAAEAEEIA@EAA@@A@A@E@G@CCCCAEACC@A@ABCHGHKHKBC@IAECGACCAEAEAG@EAECKGEAACCAMCKCECCCAC@A@C@GA@@AGCAAAACICC@C@A@CDCBCBAAAAAAEAC@E@AACCIEKCCEKCAIGECICICAAAACCACCACCGAOECCGK@A@A@CBCBCBA@AAAAABA@EDCBGBC@CVaDE@A@ACAAAAAAE@E@MAE@G@EBCAAACMKACCIGAE@MEICC@C@OFIBA@A@GIEGCGIEICGEMAGBCBGLEJIFGBGBGAICGIGECAEASJABBBBDPTBH@FORABC@E@EBGDGBEBGAIAC@CBAFENCDCDADAHBJ@HDFDHDBBJ@H@LAJCFCHAB@F@BDDHLBF@F@BAF@D@DBD@DDDFFBHFLDFBD@BAF@DBHDHFD@B@BA@CBCAIAMAG@EBADCJADA@A@EAC@G@C@EBAB@B@DBD@BABA@GBEDGFADCL@J@J@HCDCBJNBF@BABCDAF@B@@FHBDBDBHBFFHBHBBD@HBFBDBDDD@BD@D@JAFBBBBJJDFBD@F@DCBCBMDC@C@GAC@CAA@@@AB@BBBAB@@A@A@CAAACAE@C@EBA@A@EA@@C@@@AB@BB@BB@B@@@BABABA@@@ADADAD@B@DBDBFBBBH@B@D@FDFBFDD@B@BBB@BB@BBDBB@DBDFHLFF@B@B@BADABCBCB@BERCHCDOHIDODC@ABCBABCD@B@D@FBD@BCBABC@E@C@C@MLCFADA@ABGAC@@B@B@BBJBD@BAFEJABBB@BB@J@BBB@BD@B@D@DAFAD@B@@HJ@@@DEJ@BBDFNLTFLDBDBBBBBDD@B@@ABAD@DBDLVFJDDFFFBLJHDBBD@B@BABA@G@E@A@AFCF@@@D@@BF@J@B@D@DBHFD@LDF@D@BADAB@B@DHDBB@@@BA@A@AGMAE@A@@DADAD@B@FBFBD@DABABC@AAA@@A@CB@DA@A@A@AAAA@C@CBCBCHEBAHAF@B@JBBBBB@B@BELAF@F@DBBFDHB@B@@ABCFAD@D@@BBD@@@DEJM@@F@B@DBDBBBDDBDFFLJJJB@BBBABADAB@B@B@B@BFBD@D@D@BCBCBEDCBCF@DADB@BBDBBBBB@DBHBBDBBB@BB@ADAL@B@DBFBDBB@B@BAB@BBD@D@BAD@@@B@BBB@B@@@B@DAF@F@B@BDBDFFDBB@@BB@@DB@BBB@BAB@BBBBBABABAB@@@BBB@BB@@B@B@DAB@B@BBB@@BBAB@B@BA@BDBDFHDHDD@@B@B@BAB@@ABAD@D@B@D@BBBBB@F@DB@@B@@B@B@BDBBBBBBBBD@BB@@BB@B@BAD@DABA@@B@D@D@HBB@BAFAB@B@B@@BDB@DBB@BDBD@"],"encodeOffsets":[[118143,32823]]}},{"type":"Feature","id":"411523","properties":{"name":"新县","cp":[114.87705,31.63515],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DG@G@I@A@AJBJBJBFAB@BADGDGNMDADAB@DDJFTFBBLAPALCPEFCBA@A@EAG@CBCBAFAFAD@NBFBD@BABABCDIB@@ABBDB@BBHDL@FBF@BDBD@BBBDDDBBD@D@DADA@A@ACAIAAA@A@AB@BADBB@D@FAFADCJGHIB@D@B@BBDHBBFFDBHBFBBANIFAFAB@FBDBJAHA@@AE@C@ADCBA@C@AEMAC@ABC@@DAB@FFDBHB@BDFDDBBD@HBHAD@B@HFBBB@BAFCDAB@D@PJHDBB@BAF@DADBDBBBDD@B@BALIFCFCLAJCLIHCTKDEFC@@F@D@JAFADADCD@HEFCBCBAdEH@D@B@BA@@@A@G@ABCB@F@TFH@FBHBDB@@DDBBB@F@D@F@B@F@JFD@BBD@HGF@B@D@D@DCDADGDCDAB@D@B@BDDBBHDB@BZHBBD@B@BAAIBC@EFKHMDCBAD@D@D@RHND@@B@BA@@B@DBFFFFDB@BD@B@DCBA@ACI@A@A@@H@B@H@B@DAJAFABA@A@G@@BA@@H@HABA@CBGAC@ABC@ADAD@F@PEB@F@B@LDHBNDFBJD@C@AAGAAAEAC@C@ABCBCBC@@B@BABA@A@@@AAAA@@ABA@@D@@@FBB@B@FAD@F@DBBBDBB@B@@@BAAA@ABA@@B@DBD@HBD@D@NCDADA@C@EACCEIIAAAABE@I@CACC@CCCAEAGAC@AAAGEGAEAGACACEG@@@ABEDCBA@AAEIMKDEBK@SA[CSEAA@CBEDIBEAMAAKCKEOIEGAG@E@ABCFAF@BA@A@AECCE@E@CDELIBA@AACMKICEAIAA@A@BA@ABA@AHAB@@A@@ACAA@AAAABA@A@@AA@A@@@@@A@@B@@A@@@AA@@@@@@A@A@C@@@@@AB@@@@A@A@A@@@@@AB@@A@A@@@A@A@@@A@ABAAA@A@@@A@@B@@A@AAC@@B@@AB@BA@@@AC@@ABCBA@A@ABC@@@@@A@AAA@@B@@CB@@@@@B@B@@A@A@GAC@GBKHCB@D@HABE@E@AAEMIOGMAAOEAC@AROBC@CA@CAKCA@@C@ICIACA@C@CBEHABABC@A@A@CDEJAPADCBGBG@GACAACCCCAGCIGGEEACEAC@EAC@@C@ABGFKLEBEBCAAACCEAKCI@IACAGCGCC@OB@BAL@BCBG@OAQCC@CCEKIKCCECC@I@EPEHONEDGBGBCAG@K@GBEBGFAD@B@BBBBD@B@BABOLAD@D@L@D@DBBFDBD@B@BA@A@G@C@A@IDA@A@A@ABGF@@KACCA@A@CBGDABAASGMCAACBABAJABCBAASCGAE@ABAD@B@HFHDJ@FADA@ABKCGAS@G@GFOREJCBAB@D@DADEHABCBE@E@@@BDADCHE@KDKBA@A@CAAAABC@EB@@AAGKEACAC@E@I@A@A@@CCMEICCA@K@IACA@@@G@AA@A@GDOJADAD@HCLET@DAREVAHADBFAJ@H@DBBDBBDBH@DCJCD@DBBFDBDBDBDBDDBPFFBB@@BB\\BDBJBLADBDBBB@D@HAD@@@DDDHBDDD@BADABIBE@ABAD@B@BBBB@BB@DEL@B@HBDBBBDBBBBADCJ@B@FBD@BBHBDBBDDB@@B@BCF@B@DCDCBC@C@ECAAA@A@AFAD@@A@A@BD@D@B@BCH@D@B@B@BAF@@CBCB@BA@@BB@DBB@BBBB@B@F@JAR@HAD@JBFBFDDFBPB"],"encodeOffsets":[[117331,32594]]}},{"type":"Feature","id":"411503","properties":{"name":"平桥区","cp":[114.126027,32.098395],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@DADABCBC@MBG@O@ABADADBD@FDB@B@B@@C@GAE@ACCICCAAA@CBEFEFAF@H@HBFBBBBFBDBDDBF@H@FBFDDBD@B@BCBABEBABA@A@@@AAAA@@@@@BCB@@EBA@A@AAAACA@@C@C@ABAB@B@BBB@@@BAA@@AAA@@@ABCBABAHCB@@A@A@ABABABABA@@@C@AAA@A@AB@B@D@B@B@@@B@B@BBDBBBD@@@DB@D@B@B@B@@BBF@HBB@B@B@@C@AAAGIEGAE@@@ABA@@@E@@@A@C@A@@BABAB@@@BA@CBE@CBKBECE@EBCFEBABAD@JBHFH@D@DBDFFBFAJEPCL@FAFCB@BCDMDQ@U@IBCAE@CBCF@DABCDADAB@NEDCBIBE@AACAABA@CBA@@BCDCFAACAICKACAG@CBCBE@C@C@CAGAAAAA@E@A@@AAABA@@@AEAC@AAGGAACAA@A@C@A@AAA@CCCGAEAC@AAAEC@@ACACCCEAEACAG@I@GAC@C@A@CBABABA@C@CAC@C@A@A@A@C@ABAB@@A@A@@A@A@@A@@@CD@@ABCAA@AC@C@E@E@CDGDI@C@A@AAACA@AA@BA@ABA@O@ECEAA@A@CBABCD@D@DBBADADCBEDCB@JADAB@BCBCDCBAH@LAF@DA@@@ABABAHA@@BCBA@A@A@C@A@AAAAAAAE@G@GAICCAAACAEAA@A@AA@A@ABC@A@ECCA@C@A@@@AA@C@ACACAC@@ACO@G@CBEBE@EAACCAAAA@A@@DABA@CAAAAAA@@CB@BABA@CACCAAA@EBEAA@CAEEEK@AA@E@A@AA@@@A@A@AACA@E@E@@AA@@C@A@E@A@CAEAACACAG@CAC@AA@A@AACA@IEC@AAAA@AC@A@C@AAAAAA@EACCBCJAJAJGHQHULWFM@cEMAQHKHGHCHBJHPBJAHETEPMLUHSL@@@@EDILOJEJ@VHZJFDPDJHL@FGP@FDJHNCNIPEH@V@bEJMDEJCNORQFKGAEBC@CAAC@CA@A@CBGAG@I@EAACCCCEAC@A@EEMEEACCAAA@C@E@EDA@A@ABCBCDA@A@AAC@C@ABABADABE@C@EBA@CACCECCCCAAAE@C@ABCFAB@D@B@BABC@A@A@ABAFBB@BHF@@@DADABCDADAD@DABABGBIBGBC@A@CAICE@A@A@E@E@ABEBCDADAD@D@BBF@FBDBBBBDBDDB@DDDDBF@B@DADABCBC@G@C@C@@@@@AB@BA@CBEAIBCBA@@DCBA@@BMBMAIHCJ@JABEAEGM@QAUEGC@IBKECKFOJO@aB[AKCC@@@ADKFKLAJ@FBLJTDBJFHDDBBB@DAHAFABC@CBE@AAA@CMACEAA@CBEFILADBF@@@BD@FBB@BFDFBD@DADADA@C@ABADA@C@C@A@ABCDAD@D@LAFADABC@EBSHABEDEBCB@B@@FDJDBDFHFHFNDJ@J@LBD@BDBBAB@BCBA@IB@@@B@BBBH@LBBBBDBDB@BBABCBABAD@NHDBBBBLBH@N@FAJCNAFAJ@FBDDLDJBJBDDFHDDB@BABEBEBCFCH@DBFFJDBHBHBFFDDHPHZHDFBHDBHBBFDRFFAD@BB@BBRAJ@DBBBDFBDBF@JCD@D@FBDBB@DADCDCB@D@JBDBBBDDDBFBB@FABAJKRSFADAD@NBXDD@F@BABABABGDMFMFGJIBAHAD@BABC@CAGCSAA@A@ABCDCHKBEDE@G@G@ABADADABABC@E@I@EBCNMFCH@D@DBD@D@D@FAH@LBND@BDD@@FAHADDFFFHBBF@RBJBD@DBDDB@B@DAF@F@D@FBBB@F@PBFBFDDDBB@B@BA@CDABABA@C@E@E@CBCDCDC@CBC@C@CACAC@ABCBIHOBAFCFAFEBC@C@CAAC@E@A@A@A@@EBOBQ@G@CBABCFAD@D@FBB@D@D@HCFCD@F@H@FBNHFDXPB@B@FAHADAJ@JAB@B@B@DBDB@B@FAF@F@B@FDDBD@F@H@BBBFBVHHBJ@"],"encodeOffsets":[[116931,33273]]}},{"type":"Feature","id":"411521","properties":{"name":"罗山县","cp":[114.533414,32.203206],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@nEHABCDE@CD@B@D@DFJHTRB@D@TIRKHCF@XPFDD@DAHEBC@CCQCM@ABCDAR@D@FBTND@@@@[ACACECQIAC@ABAJGFEDC@CGMCE@A@ABCTGDABCBI@CAAAAGCKCACAECICECCICKEAA@C@CDGBE@G@ECICECCKAQCCCGEAC@EAI@CCCGIAC@C@CJOFGBE@CAAA@EAI@E@A@YcKKAC@ABE@C@CAAMSGIACAC@EAAA@@A@C@C@EAAEEKGAC@A@CBGBGAEAGCCCECACAEAEAOCG@ECACAE@QAKACCCCAECKAIAGEGICC@CDKBIBABAHEFABCBADG@CBAB@B@J@HAHADADC@A@AA@GAAA@A@ADADAD@H@D@B@HMFKFKFIDC@AACAG@C@AB@@A@@ACAA@CFEBA@AA@AAEAG@AAAAACA@CAAAAC@EACAEAEAECCAA@CAI@CCCACAA@A@CBCBCFCDCDADCBCACAEOAEACCAEAE@IBC@GBQ@I@E@AAAAAA@CAA@@AB@@ADADA@@BE@A@A@A@CDG@A@A@CACAAAAAAA@A@ABGDGBE@A@CA@CBGBE@EACAAE@C@A@@CDG@@CCKEGAA@A@AB@BERCHCFAJCHABG@G@EAAEACEKAE@ABA@ALG@A@A@CCCMEOCE@C@EBKHGBE@AAEAEEACCACACBA@CFEBABAAA@@A@MAAAAC@E@CBGBIHCBA@A@CGA@C@C@CBABAFAFAF@@CBKDIDCBCACACEEAEAE@CBWF_LEDCDEBC@A@EAQ@I@GBE@C@AAGCCAABEBE@EBEAGCC@C@CB@BAFADEHSRGJAD@DAFA@ABEBCDADAHAHCDSTCD@FADEFGJGJAL@DBF@D@DC@AAGKCCCAE@C@ABEDKJEDGDGBEDEFCBEBIBBBJDLFHFDDBD@HBFBDFHFJDH@DADAFELCH@DAD@BC@C@E@C@CDED@BAFBFAB@DABA@EDGHEFA@ADEHGPAB@B@BBB@B@B@B@F@FBFDFBF@BA@@BCDADAHADBB@@DBBB@@@BADAB@D@BBBBBBBD@JBF@D@DDJLBDDBBBD@B@B@BBDHBBBBHBBB@D@B@FAH@DBD@FBBBBBBD@B@D@@BBBBBD@JFB@BD@B@BBBD@DBH@DBDBBBBF@D@B@F@B@DB@@BF@F@B@BD@B@B@B@@BBB@F@B@@BFLFFDBB@FBFAB@BBDDDBB@BA@ADA@@BBBBBB@DABCB@@@BBBBBDDBB@FAFAF@D@HDP@BD@DBDB@B@DBB@@B@D@B@DD@F@BAD@B@BBBB@B@FBDBBBDBJDHBH@F@BBBBBB@B@B@D@B@BABAD@@GBABAB@B@@CBE@KBG@ABCDADADA@CBIBA@CDAFCDCBABCAC@C@ADAB@D@BBBDF@F@PAB@BABB@@BDBBB@B@B@DCJCH@D@F@F@DBDB@DBBA@@DC@@B@@@@B@BB@B@@@BABAD@B@B@B@D@D@DBD@B@BABADAB@D@D@HBJ@H@DBFBFBDDBDBD@@FDBB@BBDBFDHDDB@BBB@D@B@B@DBBBHHBBD@FB@B@@ABBB@BB@F@B@BBBBBH@D@D@DAFAD@DBHBDDLBJBD`@JBJAFCPKJIBAD@B@BDHLFFFBD@DADALKDCD@D@FBVRJHD@D@B@FEPKDCD@DBBD@F@N@DBDFBH@XAXCFADALODED@HAD@DBJFRNBDBDDLDBHBPDNA"],"encodeOffsets":[[117333,33084]]}},{"type":"Feature","id":"411525","properties":{"name":"固始县","cp":[115.667328,32.183074],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BACAG@CACBEDC@C@CAKKIIMEOIOICA@C@G@IAECEECKEMEGCEGEECEACBCBABBFBFBF@HBL@H@D@DA@A@C@EBAB@LEBCBG@ACI@G@E@C@CA@E@EAAAA@AAACECCAACAA@@AA@@BA@@BAB@X@JCBA@I@M@@@@A@@@@AA@@@@@@@@AB@@AB@@A@A@@@@@@@A@@AB@@A@@@@@AB@@@@@@@@@AA@@@@@@AB@@@@A@@@@@AAA@@@@@A@@@@@A@@@@@@@@@A@@@@@@B@B@DABAHE@CBA@A@C@@AC@ABIBCBCBC@CBABGDE@ADEBC@A@@@A@E@E@M@AAA@A@A@A@C@E@C@EBC@@@A@A@EAE@ABE@C@CBADCFA@ABMBMAC@AAA@C@ADM@A@CAAECECAC@ABAHAJABABCBI@IAEBABAFEJKBC@EAACEGSC_@M@GNcHM@E@K@EDGHEDAFGJSBABABC@A@AAC@AAA@AAEAE@C@ABABA@C@A@AAC@A@EAC@EAC@EAC@AACAAAEAC@@@A@G@C@CAA@@AACACC@@BEFQBMBCVMBC@AACCEAGCEEAECGAECAABAA@@A@AAA@AAA@@@AB@B@@@B@AC@AA@@AB@BAA@@@@A@AB@@@@A@@DAAA@@@ABAB@AA@AA@AB@@@@@AB@@@@AA@A@@@@@@A@@A@A@A@@@@A@@B@@AA@A@@@@A@A@@@@@@@A@@AA@@B@@AB@@@@AD@@@@A@@@@@A@@@@BCB@@@@@@B@B@@B@@@B@@@B@@A@@AA@@@A@@@@@AB@@@@AA@AA@@@@@@B@@@@@@A@@@A@@@@@@@AB@@@@@B@@@@AB@@@B@@@@@@@A@AA@@@@@AB@@@@A@@@@ABA@@@@@@A@@@@@AA@@@@A@@@A@AB@@AB@BA@@@AA@@A@@@A@@B@@B@@@AB@@@@@@@BA@@@@B@@@@@B@@@@@@A@@@A@@@@@@A@@@@@@@@AB@@@@@@@@A@@@@@@A@@A@@A@@@@A@@@@@@AA@@CBCBA@CACGAA@ABCBC@CCKIIEUCGEEAG@@@@@IBGFCHGBA@CAA@CBEDC@ADG@AEQ@CM]EIGMCACACA@A@A@A@ABG@AAACEAE@@BA@A@@@A@@@A@A@@AA@@@C@Q@AAG@C@@@AAC@A@G@@BABADAD@B@D@DADCBCDCJGBE@E@C@GCGAC@C@E@AAA@EAAA@A@EBC@C@CAAA@@AA@CA@AACAAAAAAA@A@AAAACCAAAA@E@CAA@@@A@@@@@A@@@A@@@A@A@A@A@@BA@@@@@@@A@@BA@@@AAA@A@AAC@CAA@@@A@@@A@@@A@@@AB@@@BABAB@@@B@B@D@@@BA@@BAB@@@B@@@@@BA@A@@@@@A@AA@@AA@@AAA@@AA@@@@AAA@A@@@A@@@AA@@@@AA@@@AAAA@AA@@@A@@@A@A@@BAB@B@@@@AB@@@@C@@@A@@AAA@@AA@AAAAA@@@@@@AAA@A@AA@@@@AA@@AAAAAA@AA@AA@AA@@A@@A@@@@@ABA@AB@@A@@@@@ABA@@BAB@BA@@B@@@B@@@@B@@@@@@@@@@@@D@B@@@@@@@@A@@@A@@@AA@@A@@@@@AA@@E@@@AB@@A@@@@@A@@BA@A@@@A@AB@@ABADAB@@CB@BA@@B@@A@A@A@@@A@@@A@@BA@@@A@@@ABA@A@AB@@A@CBA@@BA@A@AB@@AB@@A@@@@@@@A@ACCC@@@AA@@@@@@@G@A@A@@@A@@@A@A@AAA@C@A@A@A@C@CBA@AA@@AA@A@@@A@A@A@@AA@@A@A@C@@@A@@@A@@@@AA@@A@@@A@@BA@@@A@@@A@@AA@@A@@@A@@@@A@@@AB@@@@@B@BAB@B@B@@@BA@@AA@AA@A@I@UFEBEFEBA@A@CACACAC@A@EBIFADAD@BC@CBC@CBA@A@C@C@ACCCACEEKMECAAC@WCA@CAA@CAC@ERAF@BODIDEDCB@B@B@BDBHFBBBD@HBDADADCFEFEDCBG@EACACCCEAAAAC@GAKBG@EBABCBAF@D@B@DBB@B@BA@CBC@ABABAFCRAJABB@FFDBD@BBDJBFBD@BADEL@D@B@FBF@BAB@D@B@B@BDBDDBDBF@FBB@BFDB@BB@DAHAD@B@BBBNNDFFDDDDBJDB@@B@FADCBGDEDABAB@B@DBFBBABEDIFCDA@@D@HAL@B@D@D@B@BADAF@F@BABA@C@A@AA@C@CACAA@@E@A@CBADAB@D@BBB@B@B@@CBADAD@F@D@@BBJDDBBB@F@F@DABCFGHCBEDIBABAD@BBH@H@L@JAD@DEHABABA@C@EAGCIAIAIAG@E@IFGDCBGHGJADAB@FBDBBBBFBFFBD@D@H@DAB@@CAAAA@ABAB@DDJ@DDH@B@@@BA@@@A@C@EAA@C@ABEFC@A@CAEAC@ABEDEBABADAJ@BCBCAA@GCCCAACACBC@CBC@E@EAGAKCGEA@@CBMBGAC@EGGAC@ABI@EAGCI@C@ADADABABA@AACAGAC@CBA@AA@A@C@ABA@@@CC@@A@@DABABC@C@AAAACEAAA@A@C@AD@DAD@BEDGHEDGFADCDAL@BABA@G@EBC@AF@B@D@B@B@B@B@@BDBBBB@BBD@@@B@F@@@BEF@@@B@B@F@@ABCB@BA@BB@B@@ABCDAB@B@BBB@@ABCDCD@@@BAB@BADA@@B@@BB@@B@BA@BB@@BBB@B@B@@ABBFABAB@@@BABB@@B@@@BA@@BABAJ@BABABA@A@A@@@ABAB@BA@@@@B@@@BB@@B@B@B@BABCBA@@B@B@B@B@BBB@BBB@BBD@@@@B@@@@@B@@@BB@@@B@@@B@@ABABA@@@A@@B@@@@@BBB@@@@DBB@@@BB@@@B@@@B@@@B@BAB@@@B@@@@DBB@BB@@@BDD@BB@@@BBD@D@B@B@BBBB@B@@@D@B@DADAD@B@@@B@BBFBD@B@@@B@@CB@BA@@@@B@@BBB@@@BB@@@DABABCDAB@B@@@B@B@BBD@B@@@@CBA@@@@B@BB@BB@B@@@D@B@BB@DDDB@B@B@D@BBB@@ABCBA@@B@@BBD@DABBDBDBBD@B@BCF@BBBB@@BC@@FBBLDD@F@D@D@DDHBLDRF^LHBPD^JJBFBF@XFJ@H@LARAF@D@DBBBDH@BAFAF@B@D@BDFBBBBB@B@@AFGB@@@B@FH@B@B@D@BBBDBDB@B@B@B@BABEDC@@B@D@J@@BBBADCDCBA@@B@DBDFFDD@F@B@DABC@AB@B@JDB@@B@BAD@B@BB@B@HCB@D@@B@B@B@BCBKB@BA@BHABAD@@@BDB@B@@CFABAF@BDJB@B@@@BADC@AB@B@@@BBABAJ@BBBB@DBV@F@BB@BBBADAJ@DBNBLBBBBDBH@BBBB@D@DAHAH@BBBDHR`DFB@PFD@DA@A@EDCFEJEDCBCDEBA@AB@B@BBBBNHPJFDBDFFDFDHBBB@B@BA@@@A@A@A@AAE@A@C@A@A@CAC@A@A@@@A@ABA@@BAB@B@D@D@BBD@@BB@BDBDDD@BBB@FBB@B@FBD@B@B@B@BBBBB@BBBBDBBBB@BBD@DBB@B@D@DAB@B@@ADAFCFCFAD@BBBB@FBR@J@H@DBBBBBBBAB@BABEDCDEF@D@D@FBDDBHHFBB@DADADAJGFCFAPELEFAFADABAB@B@DBB@DBD@FBDBD@BBDBDDBDDDBDBF@N@JBBDBDAFELKBCHIBGBE@EAC@CAAEIACAA@@BAB@D@FDBBFDTXFFFDDBFDJFDDBBHLD@HANCF@DB@B@BCV@PBHBFJHLFTFDDHH\\dDBHLDFBFBFFBB@B@FBHAD@B@L@HAJEHGDCD@"],"encodeOffsets":[[118711,33350]]}},{"type":"Feature","id":"411528","properties":{"name":"息县","cp":[114.740713,32.344744],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AS@KAA@AC@CBEDC@CACAACAECAEAG@EACCGIKGOIECCA@CAABA@AB@BAFBF@B@DADAB@B@D@DBDAHAB@D@DBHBFBD@D@BALKHEBEDG@@AAAA@AAA@@BI@A@A@@AAEAA@CCAA@A@EAA@@AAA@A@CBCBEBABA@A@@@AACCACAGAC@E@@CE@ACAAA@A@A@@@ABABAB@D@JADABA@@B@JAF@DAJEPIDADAD@BBJBB@B@@AHMBE@@BAF@BAB@@A@G@@BA@ABA@@@IBE@A@AB@HCB@@A@A@A@A@AFIHQBCDCBC@A@@AC@C@@@E@A@@AAAA@@@A@ADAFA@A@A@@AAAAC@E@A@@@@@@A@@JC@@@A@@@A@@A@@@E@@@A@AA@A@A@AB@@AB@JBD@@@D@BA@A@@@AA@C@EA@@AA@A@ABCFI@AAA@AC@C@@AA@@A@ADCBCBC@ADCFEDA@A@@AECG@A@ADC@C@A@AAAA@E@A@@A@CI@C@EC@AACBADI@C@AAEIQCGAAEASCCACACE@C@CFQ@CAIAGCEIKMOCAEAC@G@eFKBE@CCKKAA@@JEJCDABC@C@CACECQGKEKCCCEIGMGKIGCEGCCAC@C@EBMFABC@@ACACIEMACAAA@AA@@ECCEAA@A@A@@BE@A@@@AA@A@KCOAA@AAAA@@BC@A@@AA@@EAA@A@@@CBCBABA@AAA@AAACAEAC@@AA@@A@@B@@@DB@AB@@A@A@A@IIIC@A@A@AEIECCCAAAA@A@A@A@AAAC@A@A@@BA@@AA@AACCGEAAA@AB@@A@GCGAE@AAGECAAAAAACAAA@A@A@A@@C@CAAAAACECEEEEICA@ABA@A@A@AAAACBAA@@@AA@A@AACA@AC@C@CBCBAAE@C@E@CBWNOFMFCBC@@@CAK@A@CDAFCDADAFCLADMPKNCFA@A@A@CAQKEAE@G@G@CB@BAF@FABABC@O@M@QBCH@D@DBBLFJDDDDFDJBFBDLDHDBBBB@DAJADCBSHAD@B@BDFHN@DCDEFIHAB@BBDRJFDBDBD@\\@@C@SMEAC@Q@CBAD@BDNDR@DADGFCBC@ECWOE@GDQLSJC@A@SQIGCEC@A@C@@DCFADGBmFILCD@DBBFBT@DBDBBDBFDBFBD@LR@D@J@FBDDBPDH@BB@B@DCFAJ@FBDDDF@RDLDHBBDBB@H@B@DBB@BADCBKJIJSNiXSHKBWDCBADABAF@@ABAB@@@DBBBDBDBBBBDBB@DBD@BB@BDD@DBJ@BAFEDEDKFA@CF@B@FBFBHFN@DAFGD@B@J@LBD@BFBJDHFB@D@J@RAJ@B@B@BAB@BCFAB@B@B@BBLDVLFBDDHFBBDBFBFBPBJAD@DABADCDGDEDCB@F@F@D@F@FAFBNBDBBBBDBD@FAHCJ@B@@@@@@BDDDDDNFHDF@DAB@BEBE@@@@DUFQBADAF@D@FBHDLFDBJ@B@BCBCBC@CFATMNAL@FBBBB@BDDDBF@DADADCBE@CBADAF@@ADCDAD@BBDBHBDDDFFJFDBF@D@BBFDJHBB@D@F@HCNKPABE@CAC@C@ABAFANAP@JDHDDDBB@F@DCFAFAB@H@DBB@BD@JDFDBBBF@TARBLAF@FCD@D@B@BBBFB@DBFAH@DABCHCLCF@H@FBBB@BBDBDBDBFJLBH@DAD@DAD@D@BLHF@BBFAFCFCHAL@HBdPJFD@T@f@PCfIJCPCJ@TGLCJEHEHIDCFAD@VH"],"encodeOffsets":[[117838,33417]]}},{"type":"Feature","id":"411526","properties":{"name":"潢川县","cp":[115.050123,32.134024],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@@AA@AA@ADE@A@AACCACAAACBC@AA@@@AB@DABA@@AA@A@C@A@ACACCA@@A@A@C@@@AAAA@@A@A@@B@DA@@@@@AAC@A@A@A@@@ABADCBABA@C@@AA@@A@AA@@@A@@B@@ADA@@@A@@@AACAE@A@A@@@ABCBC@C@A@C@@@AAAAAA@A@C@C@AA@@A@@ACC@A@@AAA@CA@@@@@A@@BA@A@A@@@A@@@A@@AA@@A@CA@@@@AA@A@@@@@AB@@@B@BABA@@@A@@@A@@AA@@A@@@@@A@@@@@AC@AAA@AAA@A@A@A@A@AB@DABA@A@A@A@AA@@A@@@A@@B@@ABABA@@B@B@B@BABA@ABIBA@AB@@A@@@AA@BA@A@@BABAAEBA@@@A@AAA@AA@@AABA@@@AA@@@AB@BC@ABA@A@@DCDCBA@@AA@A@ABADCBA@@@AAAB@@ADABA@@@E@A@A@@FE@A@@@E@A@@AC@AAAAAAC@@@A@A@A@A@C@ABEC@CA@AAA@CCA@AA@A@A@EBABA@GAC@C@A@@@ABCBC@ABA@A@@AA@@AACAAAAAACA@A@A@AA@@@CAE@A@AAAAC@A@C@C@AB@BA@ABA@A@@@CCCGEGACACB@@A@ABAAA@@AA@A@ABA@C@A@AA@@AAA@A@@BABABAAAAA@ABA@AAA@ACA@@AA@@AAECCECA@A@A@EBE@C@A@@@AAA@A@A@@BC@A@CAC@ABA@A@AAAACAE@C@ABKBCA@@AAACAAAAG@CAAAACAAAA@BC@CDEDAFCDADA@A@C@CACAEA@A@A@A@CBABABAAA@IIKIEEACCCAACACAA@E@@@INCF@@C@AA@@@CBCDEBA@@@AGAECAA@C@EBEFK@A@AAAAAIAA@E@GBABGFADAD@D@DBBBBB@B@B@@CDAB@@@BB@BADABCBC@EAEAA@C@CBCB@@@BBFHN@B@BAB@@A@CACGA@A@CBABC@E@KCC@GECAC@A@I@E@@AC@@@E@ED@B@B@F@HABABA@C@AAGCKIEAEECCEIKUAC@CBCBA@@@ACCKBU@KAE@CBABEFAB@FAF@DABKHCDEFADELAFCDCBGDABGLCBCBAB@DAFCDABEBA@A@ACCGECAACAG@E@C@C@ABEHABCBA@EAABC@MJGFCBGHCFADCBABIBABABCHGHABAPADCF@D@BBBBD@DBJBDDDBD@B@B@D@B@DDDDF@@@BA@EDCBA@EAEBGBC@EDCDAD@B@DBDB@FBDBB@BB@BBDADABCDED@B@B@@@@BBH@F@H@D@FDHFBD@DADCH@@@@AHAF@BBBBHDFDBJF@B@D@BBF@BA@A@GAA@GBC@ECA@CBA@A@@@AAAAAAA@C@ABC@A@@@C@A@C@A@A@A@@@@CA@@@A@A@ADA@A@C@A@A@@BAB@BCBA@A@@B@B@@CBCBCB@BAF@BA@AB@@@D@BBB@@@B@BABA@ABA@AB@FAB@@@@A@AAABCBCDCBCFCH@B@B@BA@@BEDEHABCJCJGLCF@BCBCBKDA@@BABBD@B@BCBAB@B@B@BBBBBLHBB@@@BCD@B@@@@FDBBB@BBBB@@@BAD@D@B@BFD@BBBA@CB@@@B@@DDBB@@@BA@A@E@A@A@AD@@DF@B@BA@@B@B@BJDJJB@B@B@@@BAA@@C@@@AB@@@BB@@BDBFBDBBB@BBB@BADADA@@B@B@FB@@BB@@@BAD@@BBBBB@PBLDB@B@@B@@@BAF@@@B@BBBDFFD@@BBB@BBBDFNDJDB@BD@BANEFAD@D@DBHDDFJHHLHNFJDDLDLFRHFDBD@D@DADCBIDIF@@BBLLDDF@LAfEH@D@FBDBNPJLDFBHBJ@DER@D@DDFDBDBTDFBBBDHJRBF@B@DCJABBD@BFDD@J@D@HCJKFGBABADAdBF@DAJIDCD@D@NFJDF@FABADENQBAAK@ABABADAB@D@PLDBD@H@HCFCJGBAB@H@B@BB@D@DABADAF@D@HDDBDFDHBR@PCNAJ@JDJHD@BABAHSDIFEDCHCHADADAFK@A@AAAAC@CBCFEBC@A@AACEEEECCAE@A@C@ADG@A@CACCEAC@C@EDGBCDCHGBCBA@CAEAA@ABCDCB@@@B@@DDD@BD@D@@ABABE@@@ABBB@BDBBDBD@H@FAD@HCJCDAJC^E"],"encodeOffsets":[[118146,33021]]}},{"type":"Feature","id":"411527","properties":{"name":"淮滨县","cp":[115.415451,32.452639],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@^HHADADCBCAM@CBEFEBAFELIFCD@D@HDD@XIFABA@C@E@CCGAE@C@CFEDAD@DBJJJLFFFBLHLJDBHBHAJAHA@@@ADAHEBA@A@C@@BCB@F@D@FBBAB@BCBCDAD@D@DBBDF@D@D@B@BABA@@AA@CAAA@CCCA@@@A@@BABAB@B@D@BB@BBDBD@@BBLFBB@DBBDBB@D@DAB@B@FDBBD@B@DCDCBA@AAAAAG@C@@C@@DA@ADAFCDABADAB@DDFBDBFBDBDBBBBB@BABAB@BA@@@BB@@B@B@HAF@@ABA@C@C@ABCB@BABBD@BBBB@DBD@BB@B@BADABC@A@@@AACCCECA@A@@A@@@A@AB@@@BAD@DAF@BAB@D@@@B@@@@A@@A@@AA@EA@@A@@@EB@@A@@@@@A@@AAA@AAAAA@@AA@@@A@@@ABAB@HIDABABAB@D@B@B@@@B@FBD@D@BBF@B@@BB@@B@@@BABAB@BCF@@@B@@B@B@@@B@BAB@DABA@@B@B@JBNBHBJBF@RDRDRBJBD@B@B@BA@@AC@A@A@@B@B@B@BDBF@BB@D@FBBBBDBBDBB@B@D@DCB@@A@A@E@@BC@A@C@E@A@A@AACAC@AAE@AAA@ABAB@D@BBB@@DBBBBD@BAB@FCD@B@DBDBB@B@@@DE@@@A@C@AB@B@@@BB@BBBB@B@B@BABABC@A@CACAA@ACAC@@A@A@@@ABADAFADAFCHCJCHCFABAF@D@DBBBD@DABA@A@CAC@A@ABABAB@FBD@B@BA@A@@@AEE@ABA@@BAB@DBB@@A@AAC@A@ABABADAFCB@BADGDGBCFMDGBGB@@CBCBEDEBAAGBA@ABAHAFAB@BA@AAE@CBADCH@D@F@D@B@FCBAFMFIDAB@D@D@D@NAJAD@BA@AAEACAACACACAC@CBABC@A@A@AA@A@CBAFADAFCD@BAB@@@BBDBBDFDRNLHLFHBCEQ_CGAA@ABGBG@C@CAAAAG@CAAAAAAKAM@CBIBCAA@AAAE@U@CAA@AA@ABIBAAA@@A@A@@BCDAB@@A@A@CI@ABEBADE@@@ACA@A@@BCBAAGB@@ALADA@A@A@A@AC@A@GDA@A@@A@ABC@A@AA@ICA@A@@BADCBA@E@C@ECCECAA@@@ABCDCDABAA@@@I@C@AD@FCBA@A@A@A@ACACAAA@A@C@A@AEGA@@@A@EH@BA@A@AAAACE@A@C@ABEBE@ACGAACAC@E@QBKBG@I@WEE@EAIA]IOCGA]KQEKCGACCC@C@E@C@KCAA@E]FIDCBIDGDC@EBG@C@CAAAACA@AA@B@@AFAB@BC@C@@ACC@CA@@@A@CDAD@BBBBF@DABADGHCDADCH@F@DBDDFBD@D@BCH@B@D@BBFDDFFFFBD@B@BADEFAD@DBDBB@B@BELCBCBGBGDCDEFCJGTABABC@IGICI@MBODQ@GAECACCC@G@CBEBCBA@C@CAAA@G@A@ABIHEDGDG@C@CAOKC@A@CBABAB@BBLABMRCFABEBE@ICMEC@C@CDIJCBE@cACBABABEHILGDC@@D@BB@F@B@BB@B@B@DCD@B@BDHBF@@@BCBEFCD@BADADCD@B@BB@@BD@D@@BBB@BEJAD@B@BBB@@FBD@B@@B@@@BABC@@@C@IAA@@BA@@B@B@BBBB@@@F@@@B@@@@B@@@B@@ID@@@B@@@@B@F@D@BBBB@@@B@BEBCB@B@B@@BBBB@@@B@F@@@DBD@@@BADCDADGREJ@B@B@B@B@BA@GDA@@B@BAF@J@@AB@BAB@@@H@BA@ABE@AB@@AFGN@BA@A@IAAAC@CBCBOJIFCBE@IBA@@@ABCBIBC@A@ABAB@B@@@B@BBBDB@BDF@@@FBDBHBDDDBB@@B@B@BAFADADAB@B@BB@@BB@F@BBBDDB@FBBB@@@B@BAJ@@BB@BBBBB@@CHAFGFKLABC@C@EAGACAC@A@GBCBCAC@A@A@CBCBA@E@EAABA@@BABBB@DDBFDPJLHHJDDFBH@FBDBBFBDDBDBD@FCDAD@@BBB@LBT"],["@@@@@@@@@B@@B@AAB@@BB@@B@ABB@@CEAB"]],"encodeOffsets":[[[117838,33417]],[[118283,33248]]]}}],"UTF8Encoding":true});}));