(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宿州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341321","properties":{"name":"砀山县","cp":[116.351113,34.426247],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GDCBGFCBE@CBGBE@EBGBG@EDGBE@CBE@GBEBEBGBG@I@G@EAGACAECCACAEEAAECAA@AAAECCAEEAAGESCAJMNHLCDA@E@A@CAA@CACA@@@AAA@AA@@BA@BCCAB@CAABCE@@AABADKA@ADAACAA@@DKE@BA@@A@@ABA@@AAA@D@@@CA@ADC@AH@@@CABAA@DA@@B@@@B@@ACC@@B@@ADIA@E@AA@@FKA@DC@CAEAE@GAEACACEACIDEBAF@BAFFFBD@DDFDFDFBFAD@DAF@DCD@FADADADEFIDCBCBEDGBGDEBGBEBE@CBGDCDGDCBG@EBCDGDGBCDEDADEFADAFAHEDCHEBEDCBCBEBCDC@CBGBG@EBE@E@EAE@GAG@EBGBGBEBEBEBEDCDCF@FFDFDDD@FAD@FCBADCFCDCFCBEDGBEFCBEDEDCBGBED@BABAH@DAFAHCDGHCBEFAFCDJLBFAFBDH@DDDFBHDBBB@DATXBRRJF@VIF@DCFCDADADCF@FBH@DBFBFDDBFAFBD@D@F@DADBDAF@BBBDDFBJAJALCDCDCFEFMFEHEFCHABDDDDFBFBFBHBFDFBDDBDFFBFBDBHBJ@D@DDBDBD@H@F@D@FBFBDFBDBH@DAH@F@F@FCHCFEH@F@DBDDBDBD@DBF@D@H@DDDDBDBFBF@D@HBJBD@FBD@FBHFFBFBDDDBBBFDDAF@FADDF@DBDBDBJDDBDBDDFBDBDBFBF@JBD@F@FABCBCBE@E@G@CACBEBCBCHCFCFADCDADAF@HCHAH@H@D@FBHEBCBG@CAEDCDEFCDCFEDEAE@EAC@C@EBEDEDCFEFCHEBADADCFADADAFEFCHCFADAD@F@F@H@FADAHEFEFEFABCBCHEFCDCDADADCDAHCDADCBAB@D@B@B@D@BA@AB@@A@CBA@ABA@C@ABA@@CG@@@A@@A@EA@AA@I@IBKFE@GAAC@A@ADADCDAF@D@H@H@D@D@J@D@J@FAHBB@B@PADBDEBEDE@A@M@MDGBAHEHIBI@OAGGGKISCGGAG@MDMDIDA@@@@HCFGJM@I@AOEIAGB@GPEFCBKFKDIAGCG@EAU@IFCFKSaACQOAEDCDA@AMCEAC@MACBAB@DE@EA@AIKA@GD"],"encodeOffsets":[[119377,35101]]}},{"type":"Feature","id":"341302","properties":{"name":"埇桥区","cp":[116.983309,33.633853],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBLAB@ACACGWTBFADAJEVGVM@@\\@B@@L@@J@JIFCJGXBN@H@H@LB@@@LB@P@@@DBDDFBBDFBFBF@JA@CBCDCFCFAHAHAJ@D@BFBFBFBFDDBDDBFBFAHBHBDBHBD@F@DBF@H@D@DADCFAFEBAFCFCDADADGAEACECAC@CDEHAH@H@FCFCDCBCDABCDEBCDGCE@ECE@EBGBGBGDIFI@EBE@E@CBEBGDG@C@G@GAEAE@GAEAGAGAG@EAE@GBIBI@ICGHSLMFGHA@AA@@ABC@CAA@A@@@@A@AACAAACACA@@A@@@AA@AA@AAAAA@@@@A@@@@AAAA@@@@@A@A@A@@AA@@AAAAAAA@@AA@@A@A@AAA@@@C@A@A@A@A@@BA@@BAB@@@BAB@BAB@@@@ADCDE@@@CB@@AB@@AB@@@B@BAD@BA@@BA@@B@@@BA@@BB@AB@@@@@BA@A@@@@BE@CBC@C@ABA@@BABAB@BA@@BA@@@@@A@C@CS@MCKI@KDUcKQEAMBC@CAC@EAG@C@EBG@GDE@@BG@ADGB@FCHBB@@ADa@BJBD@D@AMEAEE@@CE@A@M@@LAD@@A@A@AIOCG@IDCBCDGBC@@NEBA@A@O@@AAA@CI@E@IFCDA@@DE@AAG@CAAKAI@EMQJA@CCCKDAB@AI@ACGEGCIAE@GAEAEACAGGAG@G@CBEBEBG@IACCGAGE@ECCGAC@ABEBCFCBI@@@EAA@A@ADCB@@BF@F@FEBGD@@CECECAMQEGAI@@DQFYLA@G@MDG@@AEACAA@C@@@ABA@C@A@A@C@C@CDa@C@A@G@@G@E@A@A@A@CBA@C@A@C@C@CBG@E@EBA@C@C@CBCBCBC@CBAB@@A@A@A@A@C@E@@MAG@AEIAC@@ACCECECCEECEEEECEE@@@EC@@@CG@@I@AA@G@CAGAGAMAEAICDEDEFIFIHGHIHEDGFIHEFCBCSEQAAA@ABED@@KBE@@@EEAC@AA@AAGBAAAA@KCKD@FAFA@AFCHIDEB@CE@A@A@AAC@@@AA@@AAA@AAAACAECGAA@@A@A@@@@AA@AA@@@@AA@@ACAA@@A@@@@BA@@BABA@@@A@A@A@@@A@A@@BA@A@CBABABABEB@B@@AB@BBB@B@@@B@BBB@@@B@@AB@@A@@@AA@@AA@AA@@@A@A@A@AB@BA@A@@@A@CA@@A@ABAB@@AB@BC@ABABAB@B@BA@A@A@A@CACAAACAAAACAA@@AAA@@BCC@AGEGAGOKYPAB@@@DF@@B@@@RENELCHEDELKB@@CACACAAA@EASCAA@@ACCIACAAG@I@CABU@ALCZALADAB@FC@@HK@@@A@@@C@@@CAA@A@A@A@A@A@@AA@A@@@A@A@A@@@AAA@A@@@A@C@@AA@A@@@@ODKBE@IBE@G@A@CBYBMBOBEBGBGDAAGIAC@@CCCECCCECAG@G@GBC@EBEBGBGAGCG@G@GBEDIDGDCBEDCDEDADEFCDCDEBEDGBCBEBDDBFBBDH@HAFAB@@CBABABA@ABE@@BDD@BBB@B@BAB@BA@EDA@@BCD@B@BDBBBDAB@BABBFBBB@D@DBF@B@BBDBBB@FBB@@BBDBB@BBBBDBBBFBF@BBBBBB@FAD@FAFAD@D@@B@DBF@@DDDBBBDFBBB@FBDBB@B@@BAB@BA@ABCBEDABAB@B@BDD@DFP@B@BCBA@AD@DBBDHDFBB@B@DA@ABA@A@AB@D@H@HKDAB@@@BBFAB@BABAAG@C@E@GBA@C@CBCBCDABCBCDABAB@F@H@B@BC@GBE@EBC@A@A@AFA@EBE@A@AB@@@B@BBBBBFDDBBBDDBB@BBBFDB@@BEBAD@D@@CBAB@BGBCBA@AB@B@BBDBFBF@DBHBDBBBF@HBD@DBBBDBDD@BDBDBBHA@DHA@FBD@BGBBFBDBABB@FBBBF@B@@@BBB@DBB@BBB@DBDBABHBDAB@BA@E@GC@AE@E@CAC@ABC@ABAAAAAC@@AACBABA@A@AAA@CAABAAACCDABAD@@A@GBEBCBCDEBCDEFEDADCDADABCHCH@DAD@HAFAD@DADAH@DBDDFBDHHDFBHBH@F@BAD@DAH@D@F@DBD@FBDDFF@D@DBHAFCF@D@DAF@DAFAJADBJBDBDB@@BAFAFADAD@BB@D@B@L@HARAN@BBD@@F@@B@ABB@BF@HB@@@D@HCPCLAFAD@B@DAD@B@H@L@@DD@BBADAB@F@H@B@D@@@F@CHADADABCB@NAD@H@BAD@B@BBBFDBBBB@D@D@DBBBB@DBDAF@F@J@PBNBD@B@D@FADBJ@D@DBBDHDPBH@F@J@FBD@BBH@D@P@LBFBFBD@BB@FBH@FBDBDBDBBBBB@@BBDABAB@BBDBFFDDBD@BDD@DBDA@@B@@CBABAB@HCD@B@BBBDDBBBBBBBFBDBBF@FDHDDBJFF@DDFDDDDDDFDDBDBFBHBFBDBFBF@FDFDDD@F@FCDADADCFCDAFDDDFDDDFDDBDDDBBDDDFFBBDDDBFFDDFHDFBFDFDF@DBHBDFF@DDD@DDD@FBDDFBD@BA@B@ADBD@J@DBFBFBF@DBHDB@H@BDJLCBFDDF@DFF@H@DDDH"],"encodeOffsets":[[119962,34918]]}},{"type":"Feature","id":"341324","properties":{"name":"泗县","cp":[117.885443,33.47758],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BBFBDBFDDDFDFDDFDHFDFDDFH@JBFDDB@B@B@@BBBAHIBBX@@@@BJJTI`EF@B@B@BAF@BDFDJCP@@EBBPBNDH@@DDB@BB@BBBB@@B@BGLEFCDA@AAKCGCA@@D@HA@K@@P@DBF@@ABCDGFE@GB@@@F@@DF@@@LBRB@HHDFDFFH@DB@R@H@@D@D@BHDFDBJ@LBRAFAHAFA@I@G@@BABAFCPADDDFBFDHBH@HBF@H@F@H@FAJ@FBBBAXCfCpAn@rDH@@@BJXDjJFD@FBD@T@@B@@BA@A@AAA@A@A@@@A@ADA@@BAB@DABAD@@@BABABCBECGB@AAB@@CBA@DNCAAFAA@DAAKFAD@BBD@BB@@@AB@@FF@BF@@B@B@F@BBFHB@B@F@F@D@B@HDDDB@BBBBB@DB@BBB@B@BB@@@DBD@B@BBB@D@FBD@B@H@B@BA@@B@@A@BB@B@D@D@DDB@D@DBDAB@DA@AB@@@B@B@B@BA@@B@B@@@BBF@B@BBB@D@D@D@HAD@D@BAB@BA@@B@B@DAD@DAD@BAD@B@@@B@HCB@B@H@B@B@BKD@JENB@FCHCD@HFB@DJ@@AJBADLBBEB@BC@@DAF@DAHAHAHAFBFBHBFDDFBB@D@FDH@D@FBDDDBFFBFFBB@@@@DABA@@BABA@ABA@@@A@@BI@A@AB@@@@@DAB@BAB@@@D@B@B@B@B@F@DBFBFB@@@ED@@AHAB@FA@DFA@BDA@FB@@@B@B@B@@ED@D@D@ACB@@EB@@CD@BBB@@AF@@BHB@@CL@BD@ABF@LBB@FB@AA@BCDB@EF@@DA@AFD@B@ABFDNH@AJD@@BB@@B@@BBB@DBFD@D@H@B@F@D@H@DAB@@@B@D@B@B@@@B@B@B@B@J@F@B@B@B@@ABBBBFBFBDADAFC@AB@FE@@BCB@@@@@@A@@@@@@B@DEBAB@@@DC@@B@FCFABA@@B@B@DAD@B@B@@@B@DBFBFBF@BBB@B@@@B@FAB@@@@@HAD@HCF@HCB@@@@@@@@A@@CACCA@@@@A@AA@@@@AAAA@@AA@@@AA@@A@AAA@A@A@@@IBC@A@CBA@@@@AACKY@@@APCLCBA@@@AAAAC@AAA@CAE@C@C@A@CAG@CBA@A@A@CBA@C@A@C@A@C@A@C@A@ABCBC@A@A@A@A@@B@@A@@A@CC@@@@AAGEAAOOIGGE@ACAAAA@AAACA@@@CCAACAACA@ACA@CCCCA@@@@AA@AA@A@@IEA@A@@AA@@@@@AA@@@@BCBEBCBA@GBIBG@C@@@A@CAECY@GCW@KAIAMAI@E@EA@@CMAEB@EB@@GJA@CF@@A@@@AD@@CAA@GAIACBO@A@G@Q@I@E@@aLGBGDE@IDGDEBIBCBEBA@E@I@@A@AA@@@@A@@@A@@AA@@@A@@@AA@@A@@@@@AA@@A@@@A@@AA@@@A@@@@@AA@@A@@@@@A@@@AAA@@@@@AA@@@A@@@A@@@A@@A@@@@@AA@@A@@@@AA@@@A@@AA@@@@@AA@@A@@A@@A@@AA@@A@@AA@AA@@@@@AA@@@@AA@@@@A@AA@@A@A@@@A@@AA@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@AA@A@@@@@AA@@@AA@@A@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@@A@@@@@A@@@@@A@@A@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@A@@@AA@@A@@@@@A@@@A@@AA@@@A@@AA@A@@@A@@@AA@@@@A@@@A@@@AA@@A@@@A@@@@@A@AA@B@@A@@@A@@BA@@BA@@BA@@BA@@B@@AB@@@@AB@@AB@@A@@BA@@@@BA@A@@BA@@@A@@@@@A@@@A@@@A@@AA@@@A@@@A@@@AA@@A@@@A@@@A@@@A@@@@@AB@@A@@B@@A@@BA@@@@BA@@@@@A@@@AA@@@@AA@@@AA@@@@A@@@@AA@@@@@AA@@@@AA@@@AA@@@@AA@@@@A@@A@@@@AA@@@@AA@@@@AA@@@AA@@@@AA@@A@@A@@A@@AA@@@@AA@@@@@AA@@@@AA@@@@AA@@A@@A@@A@@A@@A@AA@@A@@AA@@@A@@AA@@@A@@AA@@@A@@@@AA@@@A@@@A@A@@@A@@@A@@@A@@@A@@@ABA@@@A@@@A@@@A@A@@BA@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@@@A@@@A@A@@@A@@@A@@A@@@@@A@@AA@@@@@A@@@A@@BA@@@A@@@@BA@@BA@@BA@@@AB@@@@A@@BA@@@AB@@@@@BA@@B@@@B@AA@@A@@@AAA@@AA@@@@A@@A@@@@@G@EAE@E@E@EAE@EBC@E@E@E@GBE@C@I@G@@@GA@B@F@@EHADADEFUG@@@A@ABI@@IEC@C@EAG@E@E@E@G@CAGAEAECCCACAC@EAE@CAEBGACCEACGCC@EAC@EBCBGBEBEBC@EBEAC@GACC@EBE@CAEAEECCCEAEAGBEBEBEBGBIBaGkGSTcCMLUFE\\YJKNGVSF]F"],"encodeOffsets":[[120467,34134]]}},{"type":"Feature","id":"341322","properties":{"name":"萧县","cp":[116.945399,34.183266],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ZWJKFADBF@H@H@H@LBHBH@F@DBFDFDDDHFFBDBJBD@JBHDFBH@HBFAF@JADAJAFCDAHCDAFAJCFAFAH@HADADCLA@CO_AOB@@ARAF@BALEB@@@BABE@C@G@C@CACCGGIEECCAEAE@C@EBCBCBAFCD@AKEICECG@E@E@GBEDCFCHELGHEHCLEHEJCFAH@F@DABCBS@ANE@@FFBA@A@CDGBEi]A@CBCB@B@B@DAF@@BD@BBDAB@B@@A@@@AAA@ACGGMEG[CGLBB@_UBMBUGAHIPCHCEGGCGOA@CBDF@FBHADMDAIAICIJSJMBA@@\\JL@BN@@BBBBBBBA@BB@@@DCB@DA@@BBBFHHJJD@NKB@@B@BCF@HBD@@F@HBBADEBEDABABMB@JDFBTEFEDAFAHAH@J@J@FCFEDCDEDCDCDCFAFAH@F@D@F@HEBC@CBCBC@E@E@CBEAC@E@@H@PEJA@@FB@@CGCCG@E@CEE@CCAEKDCI@A@GCAAG@CAEAEAE@C@IACBCA@B@@AACCEAC@ECC@CCC@CEEACAG@CCECEAECEEGCCEECACCAAEECCACCACCCAECCCECCCECCBEDCDCBCBEDE@C@CCCE@EAEAEACAEAGAEACCCCECCCCECCCE@IECAGCECE@AABB@DAJ@BEDA@ABABADABDDBB@B@BABAB@DABEBGDCAECA@AAG@C@EDCBCBMD@@@BBD@BBBB@BBDFBBBBA@BB@B@@B@@BD@BB@@B@@B@@DB@BBB@@BBAB@@@@BB@@BB@@BBBB@B@@@B@@@@@BADA@@BA@@@@BJLBDOPE@BHBPEFA@ODS@C@@BBB@B@BBB@@@B@@@B@B@@@B@@A@@BAB@@@BAB@B@@@@@B@@@B@B@B@B@@@BBB@B@@@@BB@@BBBBB@BB@BBB@@BBBBDBFDBB@BBBBBBB@@DDBBBB@BBB@BB@@BB@BDBBEBSBIEI@WFE@M@FLGJ@@GDCBEBCBEBC@GDC@ABA@AA@AAAAA@AAAAAAAAAAAA@AAAAAAAAAAAAAA@ACAA@AAAACAA@AAAAC@AAAAAAABCBAB@@CBA@C@A@ABCBA@ABC@A@CBA@EBCAGCBADCCMYGAIA@EC@@OPAFEFAF@FHN@BA@SMEEFIFGGGEW@OEM@IHMD[AGAGCCBGCC@EA@ABA@C@A@BB@D@BABAHOFGBA@BF@BaB_BEHG@OEGC@FCBA@SCS@GEGCIDQJKCAGC@C@EBMHMFGBSDCEE@K@EFC@CCICCBCBGBE@CBE@E@G@@B@BAB@BABABIX@BAB@@A@ABKH@BA@@B@D@B@@ABEDAB@B@@@B@D@@ABABAB@B@BABA@B@@DF@@DEA@BAB@@A@@@B@@@A@@BA@BBA@@@C@@BC@@@@AEJBH@HADADCHCDCDEFEBEDE@GBGBC@E@EDABCBAFADAD@D@D@F@DBH@F@DDDBFBHBD@DBDBD@FDDBDDDJHNFLBHDHFAB@@@BBB@B@@AB@@ABA@@BABA@@@@B@@@@@@@B@@@B@@@B@@@BA@@D@B@B@@@@CB@@EA@@A@@BA@A@AB@BAB@B@BA@AB@@AB@@AB@@@@@B@@@@@B@@@@BD@@@BABCBAB@B@@@@@B@@@@B@@@DB@@BB@@@B@@A@ABCD@@@B@@@F@@@B@@@@@B@@@B@@AB@@@B@@@B@@BB@@@B@B@B@@BBDBBB@@@B@BA@ADA@@B@@BD@D@BA@@BAB@BBB@BB@@@F@B@@@B@B@D@B@DBBB@@BB@BBDB@@BB@DBDBD@BBB@BBBD@BFDDDBBDD@@BFDBB@@B@F@B@D@B@BEDABHCB@JL@BFBF@@CBADANBD@FBND@BCBCDBFRPBDTbELED@JBV@FDHBHCJELALEDOF@HHAJBPF@B@JINEHGD@@@@CBCJCN@NBHHHTDLJHHBH@PAJGJGFABCH@N@N@BCFAFCFD@LABAJARIDCDADAD@B@FAJCDAAXBT@`GLA@@HAFA@@FADAFABAHCTM@AFCBABCBGBCDE@A@C@CAE@@BA@@B@B@DABADA@@DEDGBAHENGDCDCDC@@"],"encodeOffsets":[[119615,35233]]}},{"type":"Feature","id":"341323","properties":{"name":"灵璧县","cp":[117.551493,33.540629],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AS@C@EAC@IECiIW@A@@CG@qBmDoDeBWAAEAI@EBG@E@G@E@GAG@GAECEACCBCDOBEBA@AH@J@B@BEBGBEAQ@KAIECGC@A@C@CG@Q@A@@CEGCECEGGA@AQ@K@@CE@@@E@@HAF@HEDCBA@@AE@C@OL@B@@G@CB@HDLDBBB@DCFEHK@A@AA@AA@AAAA@CC@@CGAMAOFA@@DOCICE@ABE@A@A@AFEJ_ISAI@@@@AWJABGAA@AA@A@A@CCAE@IEGCCCEGEECCCCECECCAEACAE@AG@MTQD[KSOUOEBQB[PUC[GUXQFSBSRkCWNA@cV]XITIVSZYXITAXIVQLaRoJU@U@U^OJGD@B@DCb@D@D@D@B@B@DAB@B@@@DBBBDBF@@CH@N@HKBEZCR@@BJFHNRDBDFDF@@HCFA@E@EAE@@DABCB@B@FB@@J@DADEFABAD@HBDD@FHFHBDDJBH@FAFADAH@H@HBBHBDBFBF@HBFDJFHDH@BBJA@CBDLDDB@RIFNJ@LBBB@DBH@BCF@@CBED@J@FDJB@BB@@@P@BABMF@@ADCHADCD@JDHJP@B@B@BC@KB@@@N@BDF@@FFFBBNC@C@IA@ACb@BA@GAEDA@CH@BAH@@CF@HAH@F@DBH@FBD@DADBNRFdLCV@LLJNDT@@D@D@B@@@@AB@@ABA@ABAB@@AB@B@DAD@DAF@@@@@BAB@@@@A@@BAA@@AB@@A@@@AB@@ABC@ABA@@@A@@BA@@BA@@D@@CFCD@B@@A@ABA@AB@@A@AB@@AB@@@B@B@B@B@D@@BB@B@B@BB@@BB@BBBBBB@@BB@@@B@B@B@@@@BBBB@@@@@B@@B@BBBBB@@BBB@@B@@@DBDBBBDBBBB@@@@@@BBB@DAD@BB@@BGBEHKNGTDH@JAJAJ@HBF@FBHBHBHBF@HBFBF@H@H@DCHAHAF@D@FAF@FEJCJAHAHAH@FDF@FDFBGBCDCDAFCD@FAD@H@FBH@D@JDH@HDFBFBDBDBHBDBDBHDDBDBDDDBDDFBDBH@FBJ@HBFBFBBFBFBDDDD@F@JAFCFCFCDAFCDCDCFCDCFGFCBCBAAE@CAG@CAEBGBIDAFCFCHADCDEDE@CBCBGDEDCBCFAHADBJBDBHDDDDFBDJDFBHBF@DBFBFDBFBF@B@H@B@FAFCFCDCDADFDD@F@DAHCFCFCBCDCBADANB@GHCDCLEFEFCDAFC@ADA@CBAFABC@I@ACMA@A@@AEGAEAGBA@C@EDCDGDAFEBCAE@E@C@G@C@CFGDCFCBCFCDCBCBCDCBCBEBCBCDEBEBABEBCBCDGBAFEFCDCDADAD@HBDDDBD@HFDDDBDBHDD@FBD@FAFAFCBCBC@C@E@@BKCIAEAG@@E@DMBG@A@C@@AAAAACAOASEA@AA@@CFKFI@@@GAC@E@CAE@CAEAECGAG@CAG@CAC@GAC@EACACAECACECEC@EAGACE"],"encodeOffsets":[[120549,34557]]}}],"UTF8Encoding":true});}));