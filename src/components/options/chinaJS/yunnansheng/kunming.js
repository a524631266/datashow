(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('昆明市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530112","properties":{"name":"西山区","cp":[102.705904,25.02436],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@zZ[HCF@DABCDC@@@@DEDGFEBADA@AB@@A@CBCBADEDCBABE@C@CB@BABAB@DEDAFEBC@A@A@AB@@A@@@@@@BEBCB@@@@@L@FAD@H@B@H@FAB@B@F@H@B@HAH@D@@G@A@@BA@C@@@@@@@@@@@@@@@AB@BCBC@@@@B@B@@@@@@@B@@@@@B@@B@@@@B@@@@@B@B@N@@@BBD@@@@@@@B@@@B@@@D@D@B@B@@@@@@@@A@@@@@AAA@@@@AAAC@A@A@@A@BA@@@A@@@@B@@A@@@ABG@C@@@C@@BA@@@@@A@@@@@A@@@@@@@A@@@AB@@@@A@E@@BC@A@CBA@A@A@@@AAE@@@A@@AA@@@@ACAI@@@@@AAA@A@A@A@A@C@A@@@AAA@AACACAAAA@@AA@@AACC@AA@AAEAAACC@@AA@@CCGE@@@@E@@A@@EEECAAuQBGBEDKBEDGLINIh]VUZYHKDGP[L]D[ABC@KEwqwSIOC]A{AAB@@@@@@GBE@GBI@G@CAKBA@AAEAEAIAGACACCAC@CCGAC@AC@AAABC@AACCCCA@E@G@A@E@CAI@EBE@EDABADABCBGFADGDEHCFCDCDCBC@G@IDEDEDABAFAFHDBD@DEFEJ@H@B@B@BAFAJAF@B@BDHBF@@@@@B@@@@@D@@@@@FBFBDBD@D@BAD@DABAD@LDBFDJBL@JBBBDBBBF@B@HDFBFDBBBD@FBD@BB@DBD@BBF@F@BBD@BAB@BABADCFCFCHCFABADAFAB@D@DBBBB@DAHADABCBE@EFCDCDAD@FBF@DBBDDDDBHBDDDBF@@HFHJHLHHHDJ@FABBDABABCBCBCAA@A@A@ADAB@DBDFDBD@@@BAFDF@DADGBEB@FAHFJBHBDBD@BADCBCBC@AB@D@D@BB@D@HEB@DAB@B@AJEF@HEHGDM@GDGFAB@@EDCFA@@@@BCH@HCFCB@BBFBD@B@@E@CA@BABCBA@CCEE@ACAAAAAA@A@EBCBCBABABC@CBEBCBCB@@C@KECGG@ADIJABA@@BAD@HAD@BADE@C@ABAB@BABBB@B@BADABC@A@C@AAAAACCAC@ABCDABCBE@CBE@E@E@CAAAACCA@AA@C@C@ABA@CBCDABCBCBA@AACAC@CBCBGBGBAB@@@B@B@DBBB@FB@BAHBB@BDFAFCFGBGHCFCDIBCBCF@@CD@@AB@@@LHZBHA@@@@B@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@AA@@@@@@@@@A@@AC@C@E@EBEAGAEAE@ABCDEDCBE@C@GEACE@GHAHAJBFAB@D@D@D@DAHADADED@@BB@DBD@DBBBDBB@@@FEFCD@HBH@J@NAHCFEAGAABADPLJVDRPfDFDBBBHLHHBDBDBBBB@@DAD@FCFAF@F@B@BBBABABCBABAD@D@F@FAD@DA@@LGPIHIDEDCFAHB@FBFDBFBFBF@B@DABA@CBCBEBCBABABABADC@AACAABC@KAG@EDCF@L@JAHFHFHBD@BCBE@KCECEBEDAHFLPHFHBB@BCQUEK@EDAFAHBLRHFL@JAH@FB@J@H@F@FBBJBF@"],["@@@A@@C@CAA@@A@A@ABA@C@AAAE@A@C@@@A@A@AB@BB@B@D@B@BB@BBDBD@BDBD@D@@@@@"]],"encodeOffsets":[[[105022,25764]],[[104968,25458]]]}},{"type":"Feature","id":"530103","properties":{"name":"盘龙区","cp":[102.729044,25.070239],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@A@AAAAACACEA@CCAAAAEEACAC@EDS@GEEE@IHORMNMBG@@@G@E@DJFJ@@BF@D@FHPNDJBDFDH@D@@B@@@DBDABC@CAACC@CBAFCD@FDFBDABCECGCCCCC@CBAD@DCB@BABDDBD@F@H@BB@B@D@BB@D@@@B@@CB@"],["@@E]@C@EBAJE@CBCGeEQEGEGCIKY@@@@IUOUGEKCKCGAECKSOcSYIIEAEC@@@@@@ECGAI@I@G@GDC@I@EAE@E@KDGB@@@@@@@@@@@@@@ED@@@@ABABA@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@A@@@@@A@A@@@ABA@@@@@@@A@@@@B@@A@@@@@A@C@G@A@A@@@@@@ABA@CBA@@@A@C@G@ACBEBCB@@@@C@@@A@@@A@G@C@@@A@@@@B@B@@@DAB@@BB@@@@@@@B@@@D@@AB@B@@@B@@@B@B@DAD@@@@@B@B@D@BA@@@CB@@@B@@@B@@@BBF@@@@BD@@@B@DAF@@BB@@@BDF@BB@LH@@@BB@@BBDBF@@@BFDDD@BB@AB@BAD@BDF@FBLABADCDKFEDADADBHVDBDBDBDBBDHRBV@BADA@BJ@@@BDB@@BJ@BBB@@AB@@@BAB@F@F@F@DAB@B@@A@A@AAC@A@ABAB@FDtAHADA@AD@B@X@BBHB@HBHBJ@HAJEJ@JDJ@N@HBB@@@B@H@DC@CAGIG@A@CBC@CBE@AACCCECACCCCCAACCCACACACA@C@C@ABABAD@DAD@BA@@F@HAJEHEHGHEDADAD@D@F@DBB@FALAFADAD@BBB@DBLBJ@JCHEFGBIDEB@DABAF@HAD@D@JCNCNBD@@@DBDB"]],"encodeOffsets":[[[105267,26036]],[[105365,25799]]]}},{"type":"Feature","id":"530102","properties":{"name":"五华区","cp":[102.704412,25.042165],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@@ABGEGKCQIWaQOIAEJAJBJHHBD@B@D@BADCBABA@A@CAC@A@ABABABAB@@C@A@G@E@C@EBEBCBAB@B@B@DB@EJC\\DFFFLBN@NANEB@D@DABABABA@@@@@A@A@E@CBE@AFEL@NJJJFb@LDHHD@@HBF@D@HABCB@BCBC@EAWCKCG@@CEAEBG"],["@@AG@A@W@ABCB@BCBGCs@EBABAB@D@BBB@B@@@@ABA@C@E@E@EBA@A@@BA@@AA@AAI@@CA@A@@AIB@BC@AAUGQACCACACACAUAGBCBCFCLEDCBCBAAK@ECE@ABC@ABAA@@ACCEC@A@@AEAC@AA@@A@@KGA@@ACE@A@@AA@@BE@C@A@@AC@@@@AE@A@@@A@@@A@@DA@@B@@A@C@A@A@@@@BC@C@A@A@@@A@@@ABA@@@C@@@A@@@@@@AA@@BA@C@@@A@A@@@@@@@@A@A@C@C@@@A@@@A@@@@@@@C@AA@@M@A@A@@@@@A@@@@@@AA@@@@@A@@@@@@@A@A@@@@@ADADA@@B@@@@@@@@@@@@@@@DAB@@@B@HC@G@GBA@G@E@A@A@EBG@A@G@C@EBK@@@@@A@ADAF@@@@@@@BA@@B@B@BADEFCBCFA@ABABA@@D@DAFABCDCFABAD@D@BA@@BCBABEFCHCF@@@@CDADCBE@GDY\\yF@LBDD@FCHGHKJABDDH@FBAFGDCH@DBBB@JCNAJ@NFJFHBF@L@JBFD@DEDAD@FFDD@D@BC@ABCDAF@D@DCB@DALTFFHF@B@BBFAF@FAF@DAFADAF@F@H@F@DBB@B@BB@B@BB@D@FBD@B@PDHH@F@LAJDRTHHH@@@D@F@D@DADADADABADABAB@@BBBBBBBB@BBD@DDBBBBDBB@BBF@F@@@JAFCHEDMFGB@"],["@@DGPGLKNGFKDG@EAESMICEAMAABA@@A@A@AAAC@E@CA@AAC@CBC@CBCAACCC@AACBADAFCJAFEFEHCDADADAFAFADABCD@BBF@DBFAD@DAD@DAB@F@D@BBB@B@BBBD@FBD@DD@B@@FC@CD@F@DHDPBFF@H@HIDU@A"]],"encodeOffsets":[[[105164,25987]],[[105201,25886]],[[105066,25920]]]}},{"type":"Feature","id":"530111","properties":{"name":"官渡区","cp":[102.723437,25.021211],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCDG@M@A@C@A@CAAAA@A@@AACBC@EDA@@A@CBABAB@D@BA@@AG@@@CAA@CAC@EAC@AAAAACAAAAA@A@C@C@A@CACACAA@@AAAAKBCDAD@@A@A@AAAA@ABEDC@CCGEIAI@AFEFG@C@CGC@CACAECEAACCCAACAAAC@C@AAC@CBA@A@@@A@CAAC@AACA@ACCCECEEECCCA@@CA@@CACAA@CACAE@A@C@C@IIIAEBGFGDCDBBAD@BAFABGBQBC@CCCAAAAACAC@E@C@A@CAA@AACACAA@GCCACACAAACA@@ABABABABA@A@A@@@CAAAC@@@@@A@O@KBCLA@ECG@@DAFI@[G@A@@CC@CBC@CCEE@MMCGCEAG@CCCEAEC@ECEGCGEGEECCCCAAAAACACAEC@@@ADCBABA@@@@@@@A@A@@@@@A@CB@AACCAAC@CAECIGECICA@A@ECKASCMCMEOE[CUVg^MJKJCHAFCLAFAHvRBBFDFF@@@BF@@@@@HFDD@@BB@@DDBBFBBBB@@BDDBB@@BB@@BBBBBDBD@BBB@B@@@B@D@B@B@B@BBB@B@@@@BJBD@@@@BB@@@B@@BF@B@@@B@BAB@D@BAD@@@F@B@@A@@B@@@B@@@@@@@B@@@@@B@@@@AB@@@D@@@DAH@B@@@BA@@@@@@B@@ABB@@@@B@BBDBB@@@@BB@B@@@@@BB@@@D@H@B@@@B@@@D@@@@@DAFADA@B@H@D@B@@AB@DAB@B@@@@B@B@H@D@B@@@@@B@@@@A@@B@@@@@@@B@BA@@B@B@@@@@B@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@A@@B@BABA@@@@FC@@@@@@@@@@@@@@HALCF@F@FBJ@D@HCH@J@J@HBFD@@@@@@FDFBJJTZPdLTFDHBLDLDHFPVJV@@@@LZDJFHFHFRHfAD@DIFAB@F@DF^FDDDFDFDDDBB@B@D@B@B@BBDDFFFDBDDDBBBBB@D@DBBBDBB@D@BBB@D@DBBBD@BBD@D@DDB@B@@DDDBF@H@tGRCBC@E@EBAJCNEDA@@@@FCFEHAFBPFNBHADCFEBE@K@K@MAQEMGEGCICK@EDAJIBAA@C@CHMJIHELGJI@A@K@I@C@ABADCBEBCBCHCJCDABCBCFABABADC"],"encodeOffsets":[[105519,25728]]}},{"type":"Feature","id":"530113","properties":{"name":"东川区","cp":[103.182,26.08349],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@ABABC@AAA@A@A@A@C@@AE@A@AAAA@AA@A@CAABCBC@ABE@C@C@CBCBABABCBABCBC@ABA@ABA@AAAAA@@@AB@B@BA@@@@BC@@BC@@@A@A@@@A@A@A@A@C@A@C@ABA@ABA@ABA@A@A@ABA@@@A@A@@@ABABA@AB@@@BA@A@AAA@A@A@CBC@G@C@A@A@C@@@A@A@ABABABA@@@A@@A@@A@@@A@@BC@@@A@@AA@A@A@ADGBC@AB@BE@EBCBE@C@E@A@ABCBABA@ABEB@AC@A@A@C@A@A@@@@BAB@BCBCBEDG@A@A@C@A@ABC@A@C@@AA@A@@@A@A@@@A@@@@B@@A@@BA@@@A@@BA@A@A@@@@@A@A@@@@@AA@@@AAA@@@A@@AACAA@@@G@E@A@CBG@ABA@A@@BA@@BAB@FEB@@@@A@ADGBA@A@@BAB@@@BA@@@@@AAA@AB@@AB@@@BA@A@A@ACCA@BA@ABA@@AA@@AA@@@A@@AA@@@A@@@AAEAE@A@A@AAA@@@A@C@C@@@ABCBA@@AAAA@A@AB@HGPE@A@ABA@ABAB@@AB@BAB@@@BAB@B@@@BA@@B@BA@@B@B@B@B@B@BBB@BBBBB@@@BBB@@@BBB@DAB@BA@EAMAKBIFELATADC@CEC@ADEHIDKFEHAFBHBDFEFCF@FJNF@F@FADCF@J@F@B@JIFCDEBABCHCJCFEDCFCHE@GBCDABAB@DABABABA@ABA@AAA@@AAAAAACCAAAC@E@@AAEAG@CC@A@ABAD@HADADCJGFC@CBG@ICCAEAE@A@EBCDGFGFCFEDGBKBG@C@CHBFCDCFEDC@AACAABAF@D@BA@EBCDEDCHAFC@CHIFG@E@CEECEACACCGACAECEGKA@@A@CA@@CAE@AAAAC@AAC@AAC@C@A@C@AAAAA@CBEDEBABC@A@@BABAD@N@B@L@BEACMAAAA@CAAABA@CDADCBC@CEAE@CA@EAG@EDGFCLALC@@@E@CAA@CACACBCAE@ACEDEDCDE@CCACCAE@AA@@AFE@CBA@AIAA@AB@@C@EEAECE@KBMB@@C@ABABADAJC@AB@@A@AA@MAAA@ADEAACAA@@A@CJBFBD@HCHCBCFCC@C@A@AAACA@AECE@BCCCA@@ACA@CC@A@@BA@AFADA@A@AACACAABAC@EA@CBEA@G@C@GCCAC@EBGBACAEA@CAAA@C@C@ACC@@CCA@AACBC@CAAAAA@@BAFA@CCCCBEBGDC@C@CAEAAAEACCC@EACCA@AAAAAACAO@QFMBQ@KDAB@@CF@BBBFFFD@B@B@@ABCBAB@@@@AHBHDDFD@D@F@DDBF@DBDFDFAPAFCD@J@FHD@BBBDB@@BF@D@FAH@FAFAD@B@@EJAJ@JDJBD@FBB@BAJ@HAF@N@H@HAD@BEBK@OI@EDAF@PCFA@G@ACAA@C@CAAAEAA@C@A@AAE@A@A@CACCCAACA@@AAA@A@A@@@AB@BAB@DG@AAIOEGC@ABGLA@A@C@A@@@EAAEG@C@AF@B@@G@CAGCI@E@CC@GCEE@ED@BA@CBCBA@E@CBCBEDCD@B@BBDD@DBBBD@BBBBBDBBBDBFBBDB@BBB@@@D@@@@BDB@BADD@D@HHHBF@DEB@BA@O@C@@BA@@BABAHAHCFAB@@CDMHEF@DA@E@GCE@CD@FBD@B@@BDABCDCBIB@@AH@FADE@@BABC@ABA@AAAAAAA@EAE@EACAAAACCAEAA@EACACAAAACAAAACAA@C@CBE@CDAFAF@D@D@D@@@BA@CB@B@@@BA@@BABCB@B@B@D@BAB@@A@ABAD@@ABABABAB@BA@ABA@A@@@ABA@@DADCPADBFCFEDCDCHAFCDG@ABAD@BCHAFCD@DBD@DBD@BEDMDE@E@E@E@C@CA@CCGCAIDKDIHCHAB@DBFBDBB@BBDBFBF@FED@H@FFLBFBHABAJADCHAH@BBDFD@FDH@B@D@BBBBB@DBBAD@D@B@B@D@DBDBB@B@D@@AB@D@B@D@BADAB@D@@ABAFADABADABABGDC@ABABABAB@@CB@@CB@BCBA@CBCBC@A@C@CBA@A@C@A@E@ABCBABABABCDCBCBABA@CBA@ABC@CBA@A@CBA@A@@BA@@BABB@B@BB@@@BBB@B@B@BB@BB@B@BAB@B@@@B@BBBDDBB@@@BA@@@C@ABA@@@@B@@@B@@AD@DAD@@@@@BB@@@@B@BABCDABA@@BB@@@@B@@ADA@@B@BA@@B@BAB@BA@@BBB@@BB@@@B@BA@@B@B@@@BBDB@@B@@AB@@@B@B@BBD@B@@B@BB@B@@@BBB@B@B@BBB@BDD@@DB@B@@AB@@@DA@ABA@@B@BD@D@DBFBDBD@FAL@D@F@DBDBB@@DBBBDBBBBBBD@HDHFDBBBBD@DBB@BBBDDLHDDBBDD@BBFBHBDBDDHDBDJDF@DB@B@B@FIDADABA@A@CEK@C@ADEDEDCD@B@DBF@D@FBBBD@B@D@B@D@D@D@B@BAHGBABAB@BBDBBBB@D@FBDBDBF@FBF@FAF@D@N@N@HBF@FDDBDDFDFJ@D@D@FBHBDBDFFDB@DADADADAH@DEX@DADADAD@H@HBHBH@H@HBHBJDHDFBHBF@HAH@BCJELCF@FAD@B@B@B@B@B@@B@@@B@B@@@@@B@DBFBH@D@DAH@DAF@D@D@D@DBDBDBB@B@B@DBDDDFDHFFDD@B@D@FBFBFDBF@DBB@BD@DBBBDBFBD@DAH@BAF@DAD@DF@BABA@ABCB@BA@A"],"encodeOffsets":[[105536,27172]]}},{"type":"Feature","id":"530114","properties":{"name":"呈贡区","cp":[102.801382,24.889275],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@K@G@K@G@ECGACACCACCEA@@A@GCCAEBIDADEDECCBAA@G@IACAEEKCABE@@@@@A@AA@A@A@CBEBA@AAA@@@A@G@KE@E@ICAGFAB@MEGC@ADBLCD@HCDEDCAECEGAE@C@EAA@A@GAONC@ACCAAA@CAA@C@AAAA@A@CAG@C@CAAAABCBC@A@A@E@@DADCDEBE@CAE@GBADABAFADA@A@A@@AACACC@C@ABC@A@A@@@AAA@@C@C@A@A@A@AAGCC@AC@IGAACI@C@CCAKCK@@CACCCAC@A@@BAB@FAF@BAB@@CBC@EBGBG@G@M@G@A@AC@AAC@CFEBGBEDEFEDEFI@ABCBE@ABA@ABA@CAA@AAC@AAE@@AAABEFCFGDGFAFBDH@H@DB@DAFADCDA@CAACAEEAEDCHABEBE@G@ECGAIBIFKFGD@BENCFCFEDAD@@I@MAI@KFGHCJ@JDHDFAHGFED@@EZOpCBC\\K^O\\CHGLYZ\\DPFNFNDTDLBFDB@B@JDFDJHFDDBD@BBDDBBA@@D@B@@@@@B@B@@@@@@ABABCD@B@@FDDBDBBBBBDBDDFDHFHFHDDF@FFDFBDD@DBHDFDHNNF@DF@DAD@DDD@@@B\\HJ@BE@CH@FDB@DKLAP@B@@@@@D@BBDB@@B@B@B@BABABABA@@DBBBDBDBDBHDB@DBDBBBB@DBB@D@F@D@DBBBBBDBDDD@RAHABABE@ABCAADCHCHEFAJBJJD@D@B@F@DBDBB@DBDBDIFCFEDG@GEKSWEW@M@@@C@EBCB@DDDDBBJDJLD@DA@C@KB@BCBABC"],"encodeOffsets":[[105474,25519]]}},{"type":"Feature","id":"530124","properties":{"name":"富民县","cp":[102.497888,25.219667],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@F@H@B@D@@@BABABABAB@D@DBB@B@BADABC@A@C@AACGGAIBIFIJBRPXbRJLDFHAH@BDCD@B@BBD@BDB@BDDD@BDAFCD@D@FFFBJ@D@BC@EBG@CAA@AECCCGCEAEAA@@A@ADE@EAKCEC@CBCBE@CAAA@ADCF@FABA@CAE@CAE@E@IAEACCACA@@@C@CH@D@B@BEDAB@DCDAB@B@BAAAACACGKE@E@AAA@CAAAAACCC@AAA@AAAAAA@AA@ABCBABCBCBCBCBC@E@C@@@G@GGQSICKBE@G@CG@O@AAC@E@CAAA@A@@A@Am`JDTNBF@FCHELMHKLOHCH²"],["@@@@@CCGCEIAMCGO@E@CAE@@GAEFMHIFE@AC@A@E@E@AA@C@C@A@EBCBC@SEADGBC@E@GA@@GCCG@KEaIIMIK@EF@BAF@D@F@B@B@@@@ABABABCBC@A@MFMBM@KAEECED[FIA@@C@A@ABADAFAFAD@±@BCVGJG@E@AECOCGE@C@@DED@@@ACCC@EAC@AA@A@AAA@A@C@EBA@CBC@CBCAE@CAE@ADCBABCBEBEBCBCDCFGFEBEDIBEBCDABBD@DDBBAD@DAD@DBD@BDBF@D@BB@B@B@BB@BANBFBn_AA@C@E@G@EBEBCBE@CBE@EBEAE@A@AGEEEKSCBA@CDC@E@CBAD@BADC@C@EC@EBCFC@CECIAK@E@GAIEMEI@MBIDA@AA@CDGHCBEEAG@CCBALIHGDG@ECCKAE@E@IAAA@E@E@G@IEAG@IBK@GEKQGAEBCB@FFLRVADA@GAGEKOGECBAFDFDF@LAFADC@GAGEGEIBK@E@CD@FBH@LADBBBD@BCDABABABABADAFAD@DABCBA@E@EAEACAAE@EGAEBCDCFGJOJKH@@CBC@EBE@C@C@ABABADABABEDCD@F@D@DFFDHJF@B@DBFBDBH@D@D@DADAD@@GHEFCD@@@J@HDN@D@BC@C@GCWIIAG@GFCHBf@HCFGHILAH@DBF@@@DBD@BBFFFBB@D@DEBKDABCDADABCBCBABAB@@@BBDDBDBFBFBBDBDAF@DADAB@BADBDBDFJJPFDB@D@D@D@BABCBCJCBAFCBE@IHE@@LAJ@FDHDD@D@D@D@FDDD@@BBDBDBFBBBDBBDCF@BFD@FCDEDAF@DDDB@DBBA@CBABDBB@DD@F@DBDFBBBBBDDBFBDBAD@XDBDAB@@AAC@ABAB@D@FABA@A@@DADADCDCFCBABADADADAB@D@B@BB@LDHJLPJb`HFFBHAbWHCDAB@@@B@B@BB@@B@FBBB@@@@BB@@@@BB@BBB@BBDBBBB@B@@@B@B@BB@@BBBBB@B@B@B@@BB@@@BB@B@BB@@BB@B@@@B@BB@@BDBDDBB@BB@@D@B@@@BDB@BBB@B@BA@AB@B@@AB@BAB@B@BA@@DAB@BA@@DA@@BABABAB@@BB@@@@@B@BBB@B@BBB@DBBBBB@@@DBB@@@B@@BB@BDBBBBB@BDBB@@B@B@B@B@B@DBB@BB@@DB@BB@BBDBFDDBB@BBB@DBBBB@B@B@B@@@BBD@BBB@BBBBB@B@BBB@F@BBB@FDDBBB@BBB@@DBBBB@B@@BB@@B@DB@@BBBB@BBBDDB@B@B@B@@AB@D@B@B@BBBB@@B@B@B@BAB@@AB@@BB@@@@BDBB@B@@@FBB@BBBBDB@FFFJHHHFDFB@BBDDDBFBDBDBF@FBDBFBDBB@DBD@B@@@DCB@B@BA@GDEHEHEDG@KEMCIAE@CFCJARCJAP@HAFGFG@GDOBKAKA@@AAA@E@E@EAAAA@@I@GCAC@I@OACICUAGG@CBCJAJELGJCXPRDF@HEDMFGJG@EA@@AAACAAACAEAC@@AA@C@E@E@CAACAC@A@AFEBC@@"]],"encodeOffsets":[[[105098,25977]],[[105235,26056]]]}},{"type":"Feature","id":"530125","properties":{"name":"宜良县","cp":[103.145989,24.918215],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@C@@@A@CB@AA@@AA@CCA@AA@@A@@@A@@@AB@@CBABCBAB@B@@AB@BCBA@ABA@@B@@@BBB@@BBB@@@BA@@BBB@@BB@BBB@@@@@@B@BAB@@ABAB@@@B@@@BA@@@A@@@@B@@@B@@B@@BB@@@@@@B@@B@@BDB@@BBAB@B@B@@@BDBBB@@@BA@A@ABA@CBABA@A@A@A@@B@@@BBB@BDBB@D@@BB@@@BB@B@B@B@@@B@B@@AB@@C@AB@@AB@B@@BB@BDBB@BB@@BBBBFBB@@B@@ABAB@BABA@A@C@A@A@@BABABA@@BA@@BABABC@AAACAKECE@EDKJEDEDBD@@@BA@@BA@AB@@CAA@A@ABCBA@A@@C@CBAIIEIG@IHEBC@EAQWECC@CB@B@B@BABCDAB@B@BE@CACCE@EDEBC@A@A@CAG@EBCBAAEECG@CCGEKCCCGAIACAI@ECC@C@CBC@C@C@C@C@CDC@A@EAGACAACCCAC@A@CBA@A@AAAA@@A@@BEBA@A@A@EA@@G@GCCEAUA@AAAAAEAC@AA@BEDCFEFC@@B@B@D@BAB@BCDCAAE@EAA@@AACCGCAIEEEICA@AA@A@A@C@CA@AACACAAA@ACEACAAAC@C@C@C@A@IGCAEDCFAFBFBFBFAFCFGDM@ECCCEGCCACEMA@@C@EAIBE@AAC@CCECAA@ADC@A@AAAAE@AAAAA@A@CBABABC@C@@EEACA@E@CF@ACACAAC@@BCDADC@CACCC@C@I@KAGBCBE@CAMAGEGA@AC@A@A@A@A@C@A@A@C@AA@@A@@BCBC@A@@B@DBB@BABC@@@@CCGCE@C@ADCBA@ACAC@@@A@ACCAC@KDGDGBA@@@ABABC@@@@BAHEFABA@C@GAG@EAAA@@BC@CAAA@ADCFC@C@CCGECCCGCAC@AAEAE@C@A@@EIAEAA@A@AB@DABAAACCQK@A@AF@HBFBBAB@DAFCPIJCFABEBGAGAEECIEGC@A@CACAC@AAC@CBC@CAE@GAAAWG@CE@CACCACBCDC@AA@ABCFC@AAACAC@ABEFCPILGBCBEAEACCKWCC@BABEDCBA@C@CAA@AAA@AAA@@@EEACAA@@CA@BAB@D@BAD@B@DB@AB@D@@BF@B@@BB@BBBBD@B@B@@@B@B@B@D@BBF@BBDAD@B@B@B@L@BBB@B@@@BAB@B@D@@BBBB@@@@@B@BA@ABA@A@@@A@CACACAA@A@A@AAAAAAAAA@@@A@A@A@AAAAAAAA@@AA@AA@A@E@C@A@@BCBCBA@ABA@AAA@A@@@CA@@ABA@A@A@C@A@EAC@A@@@A@@@A@@@AB@@@@@B@@@BA@AB@@@@AB@B@@@BAB@@@BA@@BAB@@@@@B@@A@@BC@A@@@@@ABB@@B@BB@@B@B@B@@@B@BAB@@ABA@@B@@@@BB@@@BB@BBBDBB@@@B@D@B@BA@@@AB@@AD@B@@BB@B@B@@@BA@BB@B@BB@@B@B@@AB@@CBA@@@@B@@@B@@AB@BA@A@A@@@@BBB@B@B@B@@@B@@ABA@AB@B@D@B@@@@B@B@@@B@@B@BAB@@@D@B@B@B@B@B@B@@AD@B@@@BAD@BAB@BA@@B@B@D@B@BBB@@@B@B@B@@@B@B@B@B@B@@BB@B@@BB@@@BB@@BAD@BBB@BBBBB@@@BAB@@@B@@@@DJ@@@BBD@D@B@D@D@BB@@DDD@BBB@BB@@B@B@@@B@B@B@B@@@BBBBBBBB@D@FB@@BB@B@B@B@@@BB@@@BB@@BB@BBB@B@@B@@B@B@B@BB@@B@BBB@@@@@BBB@@@BBD@B@B@B@@@@@B@@@@@BB@BBBB@@@B@B@@@B@@@B@@@@@BB@BB@@@@@D@B@B@BB@@BBB@@BB@DB@@B@@@BBB@B@B@@B@@BDD@BABCFADC@CDCBC@C@E@EAC@A@CDABA@@BABEFABABA@A@CAACACCECCAAEEGGCBCBEDCBEFAJADBBBF@D@D@F@H@FBFBD@D@@AFDBHBDD@H@HAF@@@DBDBD@DBD@BBBBD@DAB@B@BAB@DABABAB@B@BBBDDBB@BBHBH@D@B@B@D@BBD@DBD@B@DABADADAF@DAH@BADADABABAD@DENGHIFCJ@HEHCH@@A@ADABADA@@L@DCBC@IKICAACCCCA@AD@F@D@@@NFXTXFL@HCHEFEDCJ@@DB@@DBDDFFDFDFDD@BDBBBD@BB@D@B@@@BAB@DBD@B@DBDBBBDDBDDBBDFBFBD@DHD@D@DEHEF@BBJFJDH@DCDAF@BBBBBB@B@@@BCDCLABBBB@@BBBDBD@D@B@D@D@BBBBBDBBBBB@BBD@FBD@DBB@D@@BH@@ABC@A@ABAB@D@BB@FCD@DABB@@@BBBBB@D@B@D@B@NCHAD@@BFBBDBDB@B@D@DB@B@F@BABC@A@A@@B@DAD@DC@E@WBE@CACCG@EACF@BCACA@AC@C@ABABDDBBCBBHMBADBDAFBDD@DFDH@H@D@DAH@DHDF@@HF@H@D@D@@@DADAFAD@B@B@DBBBFDBFDDDBD@D@DBBBDBDBDBDBF@D@FBFDF@BBDBBDBD@B@DBHBF@BBDB@BD@B@D@BABEDE@ABAB@DADBDBD@DAD@B@B@@B@DA@CBABABBBBDBDDFBDB@DAB@BBADAFAF@B@@@@@F@F@B@DBDBDBFBDBD@DBD@DBB@DADAF@FABAB@D@DBBBFBDDDFHBBDBBB@FBF@DDBFDBFHAFCDAD@DBF@@EBCFBBLBFJH@@@D@D@DDDDF@DBDADCB@BA@DDDD@DFBBEDBFBH@H@HAHELGFEDEDEHCFBH@@A@ABADC@@AE@CACAEAAACAC@C@CAAACACCCAEACACAEAG@CBA@@@@@@B@@@@@B@@@B@@@@@@@B@@@@@B@@@B@@@@@@A@@BA@@B@@@@@B@@@@@B@@@@@B@B@BA@@@@@@B@@A@@@@@@BAB@@@@@B@@@@B@@@@@@B@@@@@@@FADA@@BCDABABBDB@BFADAD@HCA@@@@@@@AA@@@@A@@@@A@@B@@A@@@@@@@@@@AA@@@@@@@@@@@A@@BE@@@@@A@@A@AA@@A@@@A@AA@@@@@A@@@AA@@@@@AA@@AAA@@@@@@A@@@@@A@@@A@@@@@@BA@@@@@A@@@A@@@@@AD@F@DADCBABADAB@DBB@B@DADE@EBK@CBC@AACCCCG@GFEHCJCHGD@@BBD@@@B@D@DDHAF@F@D@FBBBBB@FDHBJ@XCb@N@NGDGBAFGFCDA@D@D@@B@@B@@B@B@JEB@B@BB@DABAD@@@B@@@BD@BB@@A@B@ABABCBABBBDD@D@DBH@F@BBB@@@DHDHBBFDFDBH@DCBAB@FADCD@BAB@@FHBF@BCBCBCF@DAD@D@BBBA@AFAB@DDB@BBB@@@@C@ABEBCBA@ADKEGAC@CAAACAA@@DCJGLEHG@CACKE@@@EAECEAABCAABCBC@@DCD@L@HARODE@G@IEGA@@ACAC@A@ABCBE@E@C@ACEACACAAAACACCAAACCAAAA@AAAEAGBGBK@MAWEKGOK@I@K@GBCFCN@LEB@BAFCBCBCDAFCFCDCBE@AEACA@A@ADABAFCF@DA@A@C@E@ABCDA@@BAB@B@BAFAFC@AAA@CDAFE@EDCAADA@ABC@MBABADAD@D@B@@A@ACA@@@ADA@@@A@@AAC@CACAECCC@IBC@E@EAA@A@A@C@ABA@CA@A@A@@AAAACACACAAA@A@AAA@@AA@EAA@@@C@C@@@AB"],"encodeOffsets":[[105929,25526]]}},{"type":"Feature","id":"530122","properties":{"name":"晋宁县","cp":[102.594987,24.666944],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DAPoFY@@FCHEBGCECG@IDIHGLEJ@NBJ@@@BCFCDEDEFM@AHCLEJEJAHBFDH@F@FABADGFCFBBFBDDBB@DCBCBE@CCAG@G@ACBEHEHCDEFEBA@@CGACCEEACCA@CACCAEACCCECCCAAAC@C@E@G@AAECAAAAC@A@C@G@GAC@ACEAAAACAC@CAC@CAA@A@AA@CB@@ABABCDABABAB@@A@A@C@C@ABABC@A@AAAA@C@AAA@@AAA@CAACAAA@AB@BA@A@AAA@@AAC@A@A@A@AA@AAC@E@ABCBABAB@@C@A@AAACIAGAIAAACCCAEAACEAG@IDADABCGI@CDCFCFCDG@EBAHCBCDAF@H@FA@A@AMCGCECGCI@ACCKICG@GFC@CCAAEC@AAEACCEAA@CAA@CAAIGG@K@CB@DDD@F@DCBGDG@E@AAAEAEEASMI@SCIAEGCCCBAB@BCDC@EDEF@F@DAD@@ABADBLHBBBBBCDCDCBCDCDGFC@ABC@A@E@C@C@E@E@CACAAAAA@CAAA@C@C@E@A@E@CAC@EACACAEAC@A@C@E@C@CBC@CDCDABABABA@C@@AA@A@A@@@AB@@ABA@@@EDC@AB@@BDJFB@B@DDD@BBF@D@DDF@@BABABA@CBA@A@EBA@FH@FADAFA@BBAHIFKDICCACACAI@EBABGDAAECCEGEGCCGECI@CA@ABC@IE@K@MFEFC@E@ADBFFDH@BDADABA@EAOCEGAC@CECGSGCECGGOAABGDED@HA@EAE@CBEBQJGAA@E@KA@A@CDCDEBE@CIEKKIG@ECEECGAEAEBC@C@AA@@@D@@@D@F@DADEFALCBGC@@C@EBE@CCIMGKC]@KEKCGECIAAAC@CACACCAA@A@EBA@@@ABCDAF@NDH@@@@GAAGBECCOCG@@@@@A@@@AA@@A@@@A@@@A@ABC@@@@@AB@@@BA@AB@@@@A@A@@AA@@@@A@@@AA@A@AA@@@@A@@@A@@AA@@CAC@CFEBG@CAEAEBGAGEEAGEICCC@CECEBEFB@CD@BEFCFEBC@CB@BAFABCB@B@@HDHDFDFF@B@BCDCDAFCDGFC@EAEBEDEFKDG@E@IDEFE@E@KCAB@BDD@B@DABCHADELEHWNY\\QC@DCBCJCXGJADBB@BHAJAH@BFNHFDPP@BBDJBVDJFDH@JBFNBHDDFBFDB@@FG@@JIDCBEDIJGPCPELIJIDCHATDABD@B@B@B@FBDBB@D@B@BBBBBB@F@FBFFHHBDJB@D@B@DAD@D@DBDBBBB@@BTTV@NDLLDHFDEJAJDJBHPJLFJDJAHADBD@H@B@FBDBBBBBJFDLJLDH@JCFGFEFA\\AHCBI@@@CF@BA@EHAFCDA@IAC@AB@BDDFBJB@@FBFJCJAHCBC@E@GCE@G@@BA@KFAJLDJDJHDFABC@CB@B@BJHFJHHHDDHAB@BJDEHEBAFHXAHKHBTTNHDRHBHDHFFLH@A@GFIFE@CACGCBEBEBAFCFCJCH@D@DADCDCDEFGHCBCHEDABABCBAFCF@FAJ@DBF@B@H@F@B@DDDDBBD@BABBD@@BBDDH@DBDDDDBHBJBFBFBBBB@LADBH@J@HAF@HA@@@@@@BA|B^BPDTJxxrLFD@BA"],"encodeOffsets":[[105206,25413]]}},{"type":"Feature","id":"530127","properties":{"name":"嵩明县","cp":[103.038777,25.335087],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EICIF@H@@@H@NANMPQJGF@FF@HCT@FBDBDFFBBBBDDB@DFDBBBBB@B@B@@B@BFBDFDJBH@H@HDDHFDNBXHbHXFD@JCDG@I@GB@J@L@D@DABBB@D@D@FAB@DHBBBBB@@A@A@AB@B@BC@@BDBDDBDBDAB@FCD@D@B@DABABCFCH@NFVDHBFDJBFFDDDBD@FDBDBBAFBDDAB@@BBBDAB@BBDALCHCDCFGHGB@D@BBDAHB@BD@H@HCHBLFFBH@FCTYFGJCLBLDL@LAH@JFFLDDD@FAFEJIPIF@B@B@DABCB@DIDQFEHEFCDGBGBABABCHAAIAGF@F@BBBDDD@DHFXJBD@FCF@B@HNJFDDBFCFADDBABAAE@GBCD@H@LBFABABCAEMM@AB@HBF@FAFCDEDG@E@G@EBGB@AABCBADA@A@AH@BAFA@ECI@C@CFCHGHGB@F@B@HBF@F@JAF@B@DDD@F@DABEBAAGLKFCFAD@FDFBF@H@HAFABC@ACECKCACCA@E@ABA@@@A@@@@CAC@ABADA@C@AAIEQEEECE@A@C@CGAE@E@@BA@@BABA@ABA@ADCBG@@@AA@AAABE@E@C@ACAAC@C@C@E@@@CDAB@B@BG@EAGDCFCFEFKHGFGBG@G@EACAAFEA@CCCCCB@@ADABCAC@CCECC@C@C@C@@IGAEAKEAAD@FE@CAC@CBEDGBAEECCA@CAE@EAACAAAEGCCACAEAA@C@CBABA@EBEBC@CAA@CAC@CACACAEACAC@C@A@E@E@@@@@ABEBEBCAAA@CBA@ACCEACACAABABADAB@@C@AA@A@C@CBC@CACACBA@AB@BCFAFABC@A@C@@ACAAAE@GACAA@C@CAAAAC@ACEAE@E@CAEACACACACAA@C@CACCCECCAAEAA@C@A@ABCBEBC@C@@@C@C@GGE@@CECGG@CBC@G@G@EC@CCCEACBCAABGNAAADCAACAB@B@DBDB@BDADE@BD@FDHBD@DAF@X@FCDC@CBA@@@@B@BADABE@A@A@@C@C@ACACAAAAE@@CDABABEBADADCBIDGDADADAFCDAB@B@D@J@L@BIJKHGFIJGN@D@DBBJABIFCL@JDHDHFFNBR@N@L@LAFEFCDGBMAOEEAGBEFED@@@@CBMFIDAB@F@FADQDsHG@E@CACC@@@ACA@C@CAC@AACAA@C@CAA@A@CAAACAA@C@CAAAACACCCAEECEAC@A@A@A@C@AAACCECECCCECCACA@@C@MAMDIDC@C@GBE@ABCBA@CFAJEHGFIDI@KACAA@AAC@CBEBKBEBA@CAE@C@C@CBCBGFGHGFIFGBE@@@ABC@CBC@ABAB@B@D@DDBDBDBDBDDBBDDDDBDFDDDBD@BAF@DAD@D@BJHBH@DCDG@A@@@A@GAM@I@ICI@IFGBI@GAGAA@A@EHCNGFEDIB@@HLBDBDBBABA@A@CBCDA@CBAFA@C@G@@D@D@@DBDBBDBF@J@FBF@DBF@DABEBE@CD@BBBDBF@DADAD@DFBL@FCF@B@BB@FBFBHDDDFD@BBB@DAH@FADC@I@EAEEC@C@EDCB@ACCACA@ACC@AAA@C@CDAHBFDF@@DHDLBX@FADADA@TFD@DAFAB@D@D@B@@B@F@F@BBDF@JENGFEHB"],"encodeOffsets":[[105214,26028]]}},{"type":"Feature","id":"530128","properties":{"name":"禄劝彝族苗族自治县","cp":[102.46905,25.556533],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@AB@BAB@@C@@BA@@@ACA@@CC@AAA@A@A@AAA@A@@@AAAA@@@@AAC@A@A@A@@BA@@@AA@AC@A@@@A@AB@@A@A@@AA@@AA@AB@@ABA@A@AB@@A@AB@BC@@@A@@A@@AB@BADCBA@A@A@@A@@A@@@@BC@CBC@@@A@@@A@@B@BAD@@@B@@A@@AACCAA@A@A@@@ABA@A@AAAA@@A@A@AAA@A@@AAA@A@BA@AB@@AB@B@DAB@B@DAD@BAB@DAB@BADADADCBABABADABAF@B@D@B@B@DAD@B@D@DADAB@DA@ADA@@DA@@BABABABAD@HCBABABCBABCBEBA@@@CBABC@A@C@A@CBA@@@C@AAAAC@C@C@A@A@CBCAA@CAAAA@A@C@ACG@EECAC@ABGDGBCBIBAAGAEEK@E@GFC@EAEAEAC@AAAACAE@CBADGJGLCJCDBDH@DDBD@F@F@F@F@NCFC@AAC@CAC@CDCBEDG@ABCBAH@DCBEDGDCFCDEAEBCDOBC@C@@@EAC@CCACCCCECEAAAGAA@CC@A@AAAAAAAC@@@@EAACE@@ACACCGCEAECE@AAG@C@AF@DBDEBABABA@AAC@CDABA@ECCACACCCEACBE@A@CCD@HCFGBCBAB@B@B@BF@DDAD@BA@CAAAACAAA@AAADABC@C@CAAC@@AAADAF@BA@@BGBC@A@CBBDBBABCD@DAB@@CCA@@AAAC@ACBC@ADA@GBBCAAEBACA@ABACCACBA@A@AGBGEICGAC@A@CBA@CAACCAACCCGACEECGAEEGGECECAC@A@C@EBEBG@E@EA@@@CDCBA@A@CAC@CAG@C@G@EBCBCFCBABA@C@AAE@CAGAGAAA@CDABC@CBEBG@A@@@@C@ABABCAAAABAB@DCN@DAB@AEACCCA@GA@AA@CIGG@C@ABEBCDCBC@CBC@C@A@ABCDADABA@AAA@ABABAB@BA@AAAC@AACAA@EAA@E@GBGAI@CACCCCCAAAGEBCAECBEDCDADCBG@KCGEAA@E@ACCGKACBC@CCACAAEEGIGKG@@@CAACAC@CAE@G@E@GAC@C@AC@CAC@CGDCBC@AABABCFAFCAA@A@ABABABA@AAAAA@@ACCAOAIAEAAC@E@GDEDCDIAGGEACAAAAAA@@@@AA@E@ADABC@CBE@A@AA@C@CAA@CAEACAEAE@CACAEACACCAAA@CEGEGGEIEEA@ACAA@AAA@E@@@AAAAC@@@@AA@@BA@@BA@A@A@A@AA@AA@A@A@A@CBA@@@A@A@ACAACAAA@AA@AA@@C@AA@@AA@A@AACA@@AA@AAACAECA@AAE@A@AAA@A@AAAAA@AAC@AA@@A@A@A@A@AACAA@AAA@CAECCAAAA@@ACA@@AAA@CAA@A@A@A@A@@@AAACA@AAAAACA@@AA@@@A@CA@@A@AAAA@CAA@A@AAA@A@A@@@@AA@@BABABA@AB@@CB@@ABA@CB@@A@ABA@ABA@@@ABAB@@A@AAA@ACA@A@@@A@CA@@AAACCCA@AA@@A@A@@@AAA@@AAA@A@@A@@AA@@@A@A@AAAAA@AA@@A@A@A@@@AAAAAAC@AAA@AAA@@@@AA@@@@AAEAA@@@AAA@A@@@A@CBGDaXGBEAGEa_OIIKCG@KAAA@C@A@CBCBCBABABEDCDCDCBCB@@@BABEBC@A@AB@BBD@BA@CBDHDFDFHDBD@@ADADAF@D@B@@B@@BB@H@JCB@@@@BB@AHAJBJFRCRELABCBCBIDGDCFABAD@DBB@DBD@DAF@DBFBDBB@D@BADCBC@E@CBCBCDCDAB@D@B@BBDBDCD@D@BBBBD@FADADDBJFBNBDAF@D@F@BABCBE@EAEAE@CAAACCCCCAA@ABABADCDAD@BAD@DADABABABC@CAC@CACBCBCBCDCFCB@DAD@D@DAD@BCBA@EBE@EACBCBAB@B@DAF@F@FAF@DCFADCBC@C@C@AAABA@@B@B@DBDBFBD@DDBBDFFBDDFDDBD@B@DAD@F@D@F@D@HDHDHBF@B@BIJKLMJA@EHKJADAD@DABABABAB@@@B@D@J@@@D@F@DBBDBFDDBBB@D@D@FAP@L@B@F@FDJ@@@BDDFBNBF@FBBD@@CDCHAJBHGABF@BBBDFBDBF@B@BDHCRKLKHKFGFABEDIBK@M@A@IJ@FBNER@NGH@LHJHJF@J@BBKFCDCF@DCD@J@JBDHDLDDDBF@FCFEDMDIDCDALBHFDADADABAD@B@BBDBDBDDBBDBBBBBDBDDFBFBD@D@DBBAD@D@B@DABADAB@BBD@BFD@BBB@@@BAB@D@BBBFDBDDFBFABAB@HBB@BBBBD@F@@@BAD@B@BDBBBDD@F@FABABABBBD@BBD@B@BBADGHAF@H@DCDA@@BC@@BEBABCBABEBA@A@A@C@AAA@C@CDABEBA@CBA@ABAD@DABAD@DCBCDCBABCB@@ABADABABC@CDC@CBC@CBCBABADABABCBA@C@ABA@A@AB@@CBABC@ABCB@BA@@@AB@@A@A@@@ABBB@@BBBBB@@B@@A@@D@DBD@F@@@@@D@BCBADADCBCBABCBABABABAB@B@B@D@D@D@BADABAB@D@BADABABABADCB@BA@AB@B@B@B@@@@BB@@DBDDBDBFBF@H@J@JBDBDBBFBDBDBBBDBD@DBF@FAF@H@H@J@F@HBJBHFFBDBH@H@D@B@BB@BBDBBB@HDDBHBDBDBB@B@B@FDFDDBDBB@D@DBDBDDDDBBHJBDDBDFFHBDDDFFBBDB@BBBDFBDDFBF@DBBJJHDBBD@J@D@DBFBH@DBD@LAF@J@F@F@FBD@DBBBB@FBDBFBHDFBFBBBDBFBBBD@B@FDFBPFDBDDDBDBBBD@BAF@F@DBDBD@BBB@B@LDPDLDHDFBDBDDBDBDBJ@PBDBBDDFDJBH@LBD@FAFCFCHENELGHANAFCFAD@L@DAB@DADCB@DCDCBCBEBEDKBCBEDO@C@CCCAACAGEOOMICCCCAEAGAE@KAC@C@CACCAAEACAC@A@ADAHEF@F@P@B@BA@EBADABAJEFCFCJCJCLCDAFCBCDEBC@CBE@ABADAJCHAD@DBD@DBD@FBDBNJD@D@B@@ABCBAFAHBFBBBFBDDDFBHBD@J@D@J@DABBB@B@DBB@DJNFHPLBDBDAB@DBBDBDBDBD@PBHBD@BDDBBDDDFNFFHFDBDBDBDDD@FBHBLBBBD@"],"encodeOffsets":[[105271,26935]]}},{"type":"Feature","id":"530126","properties":{"name":"石林彝族自治县","cp":[103.271962,24.754545],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BXBB@HBF@DAD@DBD@BBDBD@D@BHDJFFDBFBHAHAFEBIDOJEDCBA@ABEAGAE@@B@BRLDDBBABCBA@@B@BBBBFFJ@@@B@DBFBF@BBDHDDDFDDH@D@DEDCD@BBBDBD@@AB@BB@FBH@H@DABEBGFAB@@@@ADAB@B@@ABCHCH@LBDDD@B@B@@BDBDB@DABCD@F@HDDD@@@@ADABA@CAA@@@@BADAD@@@BB@@B@D@B@B@D@B@B@B@BBDB@FHBHBN@DAFADBH@L@J@DDDBD@DCDCBAD@@BDDBDB@BDEF@B@BDFF@@@DADABAB@D@BBBBB@BBFBB@B@BCD@BBBFDDDD@BBF@JAFBD@@@NBDFDBHDDFDD@FCNEHEDEBEAEAEAEBCDBFHD@J@B@D@D@DBDBBBDDF@BBBDBDBBBB@@D@D@B@BBBB@JDFFJFDBDHBD@BB@FBF@BBCDADA@ABC@A@A@@@EDEFCDAFB@@BBDBFBBBBB@BVDFHDH@@@FBB@B@B@FA@AB@@@BBBBB@B@DAB@D@DBDDBBBDBH@F@BCD@D@D@D@D@DAD@D@DDD@FBJBDBJDHDDFLDH@DDHFFBBDAFAH@DBB@B@D@FAFCF@DDDBF@@A@ABADCBA@A@A@ADAD@FDRXFBD@FAJGH@FJJJAB@D@DB@B@DABAB@B@DB@@BAB@@AB@@A@@ACFCFCLIFCF@FDBLBDBBD@BABA@AB@@AB@BABA@AB@B@D@B@B@BA@ABABA@@@AA@EAAAAA@@AAA@CA@AAA@@@ABA@@BAD@@@BA@@@A@A@@@A@A@AAA@@A@@AC@A@CA@AAA@A@@@AB@B@B@B@BADAB@BAB@B@@A@@AACA@A@@@A@ABAAA@@CA@AA@@@@A@@@@A@@AA@@@@A@@@A@@B@@@B@@A@@@A@@BABA@@BA@A@A@@@@A@AAA@@AA@AA@@AB@@A@AA@@AA@A@@@AB@BAB@DA@ABA@@@ABADABADA@@BA@@B@@@B@@@BBB@DDB@@BB@@BDAB@@@D@D@AC@@ACBAHCBCBABA@A@E@AAA@@@A@A@C@E@A@EEO@CDCHCJEFADGDMDG@@FAFAFCB@B@FABEAM@EBAB@B@DC@@BABA@A@@@A@AAAAA@@AC@@BA@@B@B@@@BBB@B@@BB@@@B@HEBA@C@AHBBAB@D@BBD@B@FAD@D@@@@A@AB@@@@@B@B@BBB@B@B@@B@@AB@BAB@BB@@@B@B@BAD@B@B@DB@BDDBB@BBD@BBB@BDB@BFV@HFDHBFADC@CB@BA@ABABCB@DADAD@FIHAF@FB@HDb@DBDDLBH@BB@@BB@@@@@BDDF@@@@B@HBJ@DAD@BE@EBGDEH@H@HDTJHBJ@H@LCHCHEFEDEBGCcCSCKBWDGHEFIFO@M@ICEIIEG@@@@BCBCBABCBADC@ABEBEDCFADA@CACCIACEOIM@A@ALK@@DEAAACAC@CACCAACCC@AAC@CAC@CAACCACCCAEAACAAC@CAAAC@@@@AAAC@CAAAAAAA@@CACACACAC@CBCDCDADABA@AAIEGGCECECAECIAACECC@A@CDADAF@FABA@@BE@A@C@A@CACAAACACCAACCAACCACCCACA@ACAUMGGCGA@EACACAAA@AACACAACAA@AAA@C@CACAAACAACACAAAAC@AAC@C@E@C@E@C@C@C@A@A@AA@@@A@@@A@@@@AA@ABC@A@@AA@A@ABC@A@@AA@@@A@@AAAA@@@A@@AA@A@AAA@AA@@@@AAA@@@A@@@ACCAAAAAAAAA@@@@@A@CAA@A@@AA@C@@A@@AA@A@@@AAAABADABABABCBC@CBA@A@AA@CAA@CAA@CAA@@GCEECAECUGEACAA@E@@HCBGHWF@BA@@D@B@BDBBBB@B@B@D@D@D@BBF@FBB@DBBBBBBBBDBBJHBF@DCBEBGDGD@D@DDDDFHBJDFBD@DDABABG@I@MBEBG@GAEAABADABCBCBE@C@@B@BFFABABA@C@EAEAE@GBKDKFEDEH@DEFEDEFEDA@C@EFCDE@EFEDCFC@A@CAC@C@E@EBEFCBCD@B@DAB@BE@IDE@E@E@@DDD@BABEBCFCDEDGBEDAD@B@BCBC@E@AB@@@DDBADABABC@C@AAAECCECE@CDGFCDADCFCDCDGDA@A@CBA@CAAAAA@@@A@C@I@AB@@A@C@@@A@AC@KCCAACAEBEHCF@FAFEBCAC@@CC@A@A@A@ABA@@@E@C@ECACAE@KDEBGBC@AA@@@@AKBUCEGCEAAC@ADADAB@BCHSBKBGBE@EEIEEGCEAEACEGEGE@C@@@CACBAB@DBB@@A@AAACAAA@CDABAF@DADC@CACECGAC@KDEBC@I@EBCBCP@BC@CAECI@EB@D@LADABA@CAECEGACA@CACBCBCD"],"encodeOffsets":[[105657,25113]]}},{"type":"Feature","id":"530129","properties":{"name":"寻甸回族彝族自治县","cp":[103.257588,25.559474],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@B@@@B@B@BAB@@AB@BCBABA@A@A@A@AAA@ACC@@AAA@A@@AA@@A@@@A@A@@BA@AB@BAB@DABABA@@BADC@@BA@@BA@ABA@@@@BA@@@@BA@@@A@@BA@A@A@A@AAA@@@@AAA@@AA@AA@AA@@AA@@@AA@@@@@@AA@@A@@AA@@AA@@A@@A@@@@A@@@A@@@AA@@@@AA@A@@@A@A@A@A@A@AAABA@@@A@@AA@@@CCAAA@@AAA@@AAACA@@AAAA@A@@@A@A@@@A@@@AA@@@A@@@A@@@A@@@AA@@A@@AAA@@@AA@AA@@A@@BA@A@A@@@ABA@A@@@ABA@ABADABAB@@@DABABA@@B@@@@ABC@@BA@@@AB@BA@ABA@@@AB@@A@@@A@@@CGCEGBEBA@CAAG@EAEACC@AAAAAA@@ABADABA@C@A@AC@@AA@BADCDC@ABC@CACAAAACAAAAG@ACCAAAEACEECA@@AAEAAACAAAAEAC@CBCBCBA@A@CACCCAC@A@C@CBC@CFCFCHCDCBG@IB@BAD@B@DAB@D@BBDBDBDDB@B@DBBADABABABABABA@AAC@A@A@AD@B@DAB@BABA@CBCBABCBABABA@@BAC@A@GAECCEAA@ABE@A@@A@A@E@G@G@CDE@A@CACCCECCCC@@CAA@@AAAC@C@CCCAGCCAC@AAG@I@GBG@IBEHKDG@E@GFGJKPGDI@E@EGCGBCFCFCDIFIFEBEAEKOMMAGBIHCDA@@BABCDADCDA@A@C@C@@GG@G@EACGC@C@CBGCEEAEDEFGBGBE@CCCIEAC@CBCJA@A@C@ABEBCBCAAAACCACACAAB@B@F@BA@AAAA@CAEA@@AA@@@A@ABA@@@@A@@@@@ABC@C@C@@AAA@A@CA@@@ADADA@A@A@CAABABABADA@ADCBCDE@CCAAACAAAAAAAC@A@AACA@ACCCAAACACA@A@C@C@A@AAAAAAAACCAAAC@AAC@AAECCACACAEACCEAKEGCCAECAAAACCAAAC@ABC@CAAAACAAAAAAA@C@C@A@A@CA@ACAAACCC@@AEAEGAECAC@A@ABAAC@C@AACACAEAEAC@CIBE@E@GAA@E@A@GHGHED@D@DDJ@FEBABG@@B@BCBABADBBA@AH@F@H@FCHCFEDEBE@GAA@@BNNBFADABEBKAG@C@AD@HBFABABCCEBEDCAECMI@G@ADE@EACWIGE@CCCACAAE@E@BHBJGBADABABAHCHEDGFEFCRCJA@ADCBA@A@E@OJIJEFEBC@CCEKIEG@KBK@KCKAIDEHSZEDG@EAKEGAGDG@C@@AGACBAAC@A@GHEHCDGDKDCBAAA@CBAA@AA@CBACBEAAACECC@CACCEEIAECGAUCMEG@EDADABCBA@C@C@EDA@CBCACAACAC@@ADA@A@@B@B@BA@AAAACGA@EBC@C@A@AACBC@K@I@A@@H@JCHIDC@WEaGWGMAECCGGCG@G@IAECACAEA@@@A@@DA@@@C@A@@A@C@AAAG@E@C@CAACABA@CDC@AB@DDDDDHDFDADCBEAECC@EDAB@DDDBB@DADCBCA@@A@@@ADEF@B@BBDBDDBF@F@D@B@@BD@FBDBBBDBBB@BB@@FIHEHCNGFE@QCWOIDKHIFIBAD@DHHVBJDBD@P@JBDHDJ@@@BBBB@F@F@FBB@BB@BLALCP@HEHEHGBO@IBQDIBED@DBFDJFN@LCHGFGFCF@HABA@A@CD@@@B@BAF@DADCB@B@FBB@@@@BBBBBBBDHFBHCJCDCF@H@FBDFBJBPBDBBD@@BBBB@BABABAB@B@BBBEDEBADABBBD@DAHC@DBD@DBDD@D@HBF@H@F@DBD@DBBB@D@@LHJHFHBFDBDB@DADBDHLDD@B@FBBHFLDH@DABCDCFCDABFADHFBBDBDDDDDBJ@HBHAF@B@FBB@DBBBD@BB@BABA@ABAB@BBB@BABCBCBAD@B@B@DAD@DADCDADAF@B@DHHDJB@@BHBB@DDBDBFA@CBM@CDA@ABBBBBADAB@B@D@@B@H@FADAD@BADCB@BBBHBH@DBF@B@DABABEDADAD@F@H@DBH@DBD@D@BABCD@D@@FBF@H@FAFAD@B@D@DBDFHFFHBFDHFFBDDHDDBBDDBB@DAB@D@BBDDHFJAHBHB@B@DADBBDBAB@BDFABBADHAB@BCD@DA@BBDBB@@DB@DA@CBC@ADABCAAA@D@BADAH@@ABE@CBBB@BD@BB@D@DADCBBB@BBBDBBBBB@DABC@CB@CAEA@A@A@ABADEHGDC@DDB@F@DAFBDDBDBDDD@FABCB@DBD@BABABABCFCAE@@B@DBH@BDFBFDFDHBDBD@@DFBB@F@@D@BBBBBB@B@BDDB@HBBBFBFDDDDDDB@DBD@F@@B@BA@@B@B@BAB@@ABABABABA@@BCBAB@@@BA@A@C@A@ADABA@AB@@A@@@ADAB@@A@@@C@C@CBEBEDCF@DAD@B@DBBBBBBDBBDBDBFBB@FBDBBDBBDBFBF@FBB@BBBBBBB@BAD@BA@AF@BC@EBG@@JADADCBAAC@@@AAC@EDCF@HDF@B@@CFENGDC@@BADEBGBGBA@AB@@AD@P@B@@AFA@CAEGG@G@CCCABA@AC@@@@@C@@AA@ACAAAAEACAAACAAAAC@AACAC@AC@A@ADCFCDADAF@B@DADAB@@AFCF@DF@HDDF@J@HDDBH@@@@ABED@H@BFFB@@B@D@B@B@HKBAD@FHJPBBH@@CBA@ABA@@B@B@B@BB@@DBBBDDBD@D@B@BBF@B@B@DBBBFBB@D@DBBBDH@B@DE@OBEFCJ@PL@FA@ABC@G@G@MBE@GBI@AAA@EACCI@IBIFI@@@ABCBE@EBG@E@CAE@@CAAA@AGC@E@IDCBEBOCECECAE@CA@C@E@CECCCAGBG@@@@BADABA@@@A@AECEEAA@ADE@@BALCR@NAREP@DBBBBBBBB@DDFBD@DDFBBBFBDBD@D@HCFADADD@DEBAB@@BBBBDBD@DABBB@DD@@DD@B@D@DBBDBB@BFBDHAFAD@DBHDD@H@B@AF@DFBD@ABBBBDBD@B@BCBEB@BAB@@@BDDB@BD@@DBDD@ADFBFJ@D@BA@CBC@ADDDABCFBDDDBHDDDBB@DABEFAB@BDBF@HBH@RABABABADADABABEBCHAHDLJHDFBBBJ@F@F@@C@ACEAAAC@CAA@C@EJIVIRAB@F@JBFDJHLFJHFJBD@@@@@BAFBDFBBBBD@DB@D@J@D@D@BDDD@@FAFCBC@ADADA@E@EBC@GBC@G@CACCCAACEACAC@CDEDCBADADAD@BB@@@@@@@@@BB@@@@@B@@@@@@@@@@B@@@@@@B@@BB@@@@B@@@@B@@@@@@BB@@@@@@@BB@@@@B@@@@@BB@@@@B@@B@@BBB@@B@@@@B@@@@@B@@@@@B@@B@AB@@@@@B@@@@@@AB@@@@AB@B@@@BA@@DBAFAB@F@BB@DCDABK@@@@@CDABB@AB@AE@A@AAC@@@A@ABABCBA@@DA@@B@@@B@BAB@@@@@B@@B@@B@B@@@B@@@BBB@BB@@@@B@@B@@@@@BB@@@@BB@@@@BB@B@@@B@B@DB@@@@B@@B@@@@@BB@@B@B@@@@B@@@B@BB@@B@B@B@"],"encodeOffsets":[[106023,26439]]}},{"type":"Feature","id":"530181","properties":{"name":"安宁市","cp":[102.485544,24.921785],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@AAC@EACAAECEAGCA@E@AACA@J@@D@B@F@BB@B@DAB@B@B@BB@DBD@@@@BRB"],["@@@@FCBCBCBG@C@C@C@CBAAEBIBGHGF@BDHFD@F@DAFCDCBAF@FBHBFBFAF@D@D@@BB@@@@@@@@@B@@B@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@A@@B@AGGY@K@@BA@@DC@@DEDAJADCDEHGHADEBECE@AAABG@AEAA@AA@C@A@A@@BAHAHADADAD@DBBBB@DADABADCDAB@BAD@D@B@@BDBBDBBDBF@F@F@DAF@DABADCBAD@DBBDBBBBD@B@D@BABC@A@AAABA@ABABAD@F@BC@ABC@GBC@AB@BAJIBCH@DHLFD@@@DADAFADAD@BABADADAFAB@B@BBBBDB@BFFDDB@DABA@ADBF@@@@AACAE@ADADE@GDG@A@@B@DEFC@@BAHEHCN@HCFG@GFEBIA@A@CBA@GFC@A@@A@C@CBAD@DADABC@AACACAGEIBG@EFAHABC@CCEBE@A@@ACECAC@CBABCB@B@B@DBDADABABAACBA@ECIGGKGIGEG@GE@CACCGACACCACCAE@EAC@CBCDED@FAFADCBGBCBA@AACAC@A@EBCBABEBGDEDEDCDABABA@ABC@AAE@E@AAC@CAA@QA@@@@C@C@CA@AACAC@AAAA@C@A@A@@ABAB@B@@IAAIAK@IAECCA@KBCBA@CBC@A@CACACAE@E@@@@@C@@@@@A@@@@AECG@A@ABEBIBE@A@AKGEECGAGQGGCSMASLGBGGWBEFAFGIC@ABACGGCGGEIIG@A@ADAD@BACEIGICKCBILEB@@AH@F@HDF@D@DABGDIEIEA@@IAEACC@ABAD@JBB@DCBEFGB@@ADE@@J@DABGB[FEHEDE@ICGIKCKIEAAAACAEAA@G@C@CAGBIBICKEOIAGCIBIFIECCGKKMCU@SS@AA@AACACAC@C@CBA@C@A@CIGAEGAE@E@EAAAAAAA@C@A@CAEAA@A@A@C@BASCGBCDIJKJOFODIHCJAFCDIJ@@EH@@GFDD@BHCDADAJBHDHRBFLHDbGJALAVCJBFCHY^KVBFBDL@N@HBBBBBDDBBABCF@@@BABEFAVCNHDDLFDBH@FGFAHHJFp@B@J@DBDFF@DADGJAB@BAD@B@H@BBB@@DD@B@BADABC@CDABAB@D@D@B@@@@@B@@@B@BAB@BBB@@@B@@@@@BAB@B@B@@@BB@@@@BAD@@DBPB@@@H@LELEHCB@@B@@B@@@@B@@@@@@@@B@@@@@@@B@@B@B@@@@@@B@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@@@@B@@@A@@B@@@@@@BB@@@@@@@@@@B@@@B@@@@B@@@@AB@@@@@B@@@@B@@@ADCJBDDLEDEBCF@DBBF@FD@BCDEDCDBHDJBD@BCDCBA@@@G@G@AACAC@CDGFEBADCDAHAFCJ@HDFFHBH@DCFGBGAIASMGCIBIC@D@@EDCF@JDNLR@F@@DDDDBBBB@@DDBBBBBD@D@@BDBB@BBD@@@BBDBB@BB@@BDBA@AB@B@BAD@BBDBB@@BB@BAL@@@@EBCBE@G@EBCBCFADBFDD@B@BABABA@C@CAGAACA@GAEAICEAC@EBEBEFA@@DABAD@D@B@DADEFADEDCDAB@DDDBFBF@D@F@DA@BFAFCDEBEFCHAF@D@DDFDDBFBFB@BDHFFDDF@D@B@FBBDBDBDAD@D@D@B@BC@CAC@C@C@C@CAAAC@CBABCDCDCDAD@D@FDB@D@NCNIBADC@A@A@EEMAEBAHEN@VDZLRND@FBF@BFDDDBFDFDDFDDHHDBB@D@FADADABCNAJ@FAB@D@DBF@FADCD@BB@DFHDDDBBBAF@DBFBB@BBDAD@DAD@DDHBFDDBBBBD@DB@@"]],"encodeOffsets":[[[104977,25459]],[[104819,25704]]]}}],"UTF8Encoding":true});}));