(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('池州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341722","properties":{"name":"石台县","cp":[117.482907,30.210324],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@POHCFGBCFM@@@AB@BABA@ABA@@BAACB@BA@@AA@@ABCBA@@@AA@AE@AAAC@@@@@@C@A@A@@@A@@ADC@@DAFA@A@A@@E@@@@A@@@A@@@A@A@AA@A@G@C@A@A@@AAA@A@@CCCC@AAAKAAA@CDGHE@AAAECECG@G@KBG@CCBEBG@E@GBGFGAAEAKCEAE@K@E@IAEAKAMCGCEEGIKIKKAIBKDGFCJAHAHANEFALAFE@IEICIAGCGK@OIOIK@I@EEIEIKKGIEGCICGCMAOAO@KAM@KAKCOCWEIA@@AACAA@E@A@A@A@@@A@A@A@CA@@@@A@BCACA@EAEA@AC@AAAACAA@A@@@@@AABABADA@ABA@AAAAAA@@AA@CAC@A@E@C@@CHE@@@AA@A@@@ACA@AA@@B@@ADAB@BCB@@AA@@AAA@@@@@BCB@@AB@AA@@B@BA@@A@@@AA@@@A@C@I@A@ABCBABCHI@IAAECKAACA@@@@@@BC@@@ACA@@@@CD@@CCAAA@C@@DAD@@A@EBA@CDCDCDABC@A@@BA@@B@B@FAD@B@B@B@@AB@B@B@B@@ABBB@B@@ABAD@@AAA@A@AAA@C@CBAAA@A@@@@A@@B@@@B@@@@@ACA@@BG@@@ECA@AAAA@@AAA@@ACEAAA@@AA@C@@@E@@@A@CAA@A@A@AA@CA@AAA@@AB@@C@A@A@@A@EA@@A@C@A@@AA@@AHAHAD@B@@A@A@AAC@@A@@A@ABC@A@A@AAA@A@@@@A@AAA@@@AAA@AA@@CCA@@@ABAB@@@@BD@B@@@@@BA@A@@@A@@AA@AB@@@BB@BDB@A@@B@AGCAB@@@@@@@B@BBB@BB@BBBB@B@B@@@D@@ABC@@@EBA@AAC@@@AB@@@B@@@B@B@BCB@BAB@@@BA@C@@@@@@AB@@@ACBA@AC@AAA@@ACCEAA@AA@A@A@AAGB@@CDC@@BABAB@B@BB@@BA@AAA@A@A@@HDB@B@DB@@B@@@@A@AA@@AA@AAACA@AAAAAAAA@@BCBGBA@A@A@@BEBEBGAGDAKEKEKGICKEECIAMAM@KBIBIBI@KBIACAGGCECEECCCIAKAE@KBGDGFOHUBMCEECGAEAG@EACCCGAIFI@IAIAI@KAGAICGEECICEAC@MDG@I@EEICGCIAEAMCECIAGCGAMDFJDDBHBJAJCLCHAF@L@LDNBLBJFTFJDFBH@LBJBHFFFFFFHHJFHJDHCLIHMH@LCH@F@JDDDJHHHHFHHDBD@DGBIDCHBFBFAF@JAHEHGHGFIFGDGBK@G@GAICGGGEKAEDCF@H@HBJ@H@F@HBJ@FAJCFEHILILKJHDNFHFJAFBPDLBPFLFFDFFJHB@BBBBDB@B@@AB@@@@@B@@B@BB@@@BDB@@@B@@@@@@A@A@AB@@A@@D@BABCB@@@@BBFBDBBBBBFBBBDBBBDBDBBBBDDBB@FBB@BBDDBBB@F@BBBAB@@@@@AA@A@@AA@A@@B@@AD@@@@BB@@@@BBA@B@@A@@B@@BBDB@@@@BABADAB@@C@AB@BC@@@A@A@A@@BA@@B@BA@@BC@@@A@CB@@AB@@@BCBA@A@AB@BA@@BB@@D@B@@@B@@@@@B@@@B@BBF@@@BB@@DB@B@@@@BBB@@@DB@@@AB@@CB@DA@ABA@AA@@A@@BAB@NBNDLFNHPFRDVABABA@@B@B@@AB@BCB@@AB@B@DADAB@@@B@B@BAD@B@DAB@BA@BBBB@B@B@BBD@BB@B@BBBBB@@B@BAB@DABB@@@BCF@B@@@BBB@DBD@@DBBBB@@BD@@@@@@BDBB@BB@@BBAB@@PLJFLFLFH@FADEBI@GBIBGDKFODKDEJMHGLAHAB@B@B@DB@@@@B@BADAB@B@DDHFLBFBB@DBFDDB@@AHAB@B@@B@B@B@F@B@B@BAD@H@B@D@@@@ABCBC@AH@B@DCD@BAD@@@BA@A@E@@B@BABA@@B@B@B@@@BA@AB@@@B@@BB@@@FBD@B@B@@@B@B@DB@@B@B@B@B@@@B@D@B@B@B@B@B@FBD@@@B@B@B@B@FBB@D@B@@@HEFC@AAG@@BAD@B@B@DBB@@AB@D@BA@A@ABCB@@AB@@@BAB@DBB@BBB@@@AE@AAC@A@AB@D@FABABAB@BA@@@@B@@BDAB@BA@@ACBCBAB@@@BB@@@BAB@B@D@@B@B@D@D@@B@@B@@@B@B@B@@B@@@BAB@@BB@DBB@@@B@@CBAB@@A@A@@@@B@@ABA@@BBJA@ABCBC@A@@@C@@@@@@B@@A@A@AB@BAB@D@FBBB@B@B@BAB@@AB@B@B@@@@@@B@@@BA@@@@BBBBD@B@@A@ABADCBCDABEB@BAB@DB@F@BBHBFBHBH@@@B@@B@@BB@@BB@@@@B@@B@BA@AD@@@DBBDBDBBFBDBB@BB@@@@DB@B@@@AB@@@B@B@@BBBBF@HCHEJEFCLCR@HAN@LBLBLBHHFHHFHJHGJAFAHCFAHANAJDHFDJFHHHHHHBL@DAHAFAJ@LBLDFBHFLFLBJALETGLCJ@H@HBBD@H@DGJAH@FBB"],"encodeOffsets":[[120747,31096]]}},{"type":"Feature","id":"341721","properties":{"name":"东至县","cp":[117.021476,30.096568],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@C@ACAACA@@AAAA@AAA@CA@@@@C@@A@@@@@A@C@ABADKC@AAA@AA@A@@@A@CB@FCFCBA@AAA@ACAA@KAEA@BE@A@C@AAEACAA@C@@BA@@@@B@BB@@BDB@BBBAB@@ABA@G@A@CBCBABC@A@A@AAAC@AAACAGAC@@A@A@KBE@AACEEMMCCEACAGCGECCECEG@EBGDIDCHCFAJAR@NDNBHBF@LBF@D@LAJCDE@GAEECGCCECE@I@GBG@GDEDCDC@EAECCACDGDEJIDI@KBIFIFCF@J@PD\\JN@FCDEDMHCN@N@LBLBPAN@AAA@IGEEECKEOEKAOCEAIBGEMEGCLIJKJKFGDEBI@EAI@G@E@GAI@G@GDEFCLBHFHHJDHBH@L@HAHCJEHEHGFGBG@IBEAEAEDGJCHA@CACGCEGGGGGCICC@I@EDG@KNGJGDKCGGIIEGGEEEEEEAGAI@KAGCEEIESAIAKCM@K@KBEDGDKBIAIAGCCEIYEI@OAICKAKAI@GAECCGCI@IBM@KBQBOBGE@EAICMEI@MBKCIGMAIEKAKGICGCCCEEAE@G@E@EBCDGDKAI@ECEECIEGAEAICECECCGEGGEEGEAIAO@GCAC@CBEDEFEHAHCFEDCBEHCHAVEREFALGDEDGBEDIBKAEEEGEECICECIIGEAG@GHEJEHKDGAGCIEGGGKGOIOGGCCAEAGAGAG@GCGEGEGCGAKAEAI@GBIBOBKDK@I@EAKCECGCACEECEAEAECEEECCECGCGAIAIAI@GAICGCGCGCGEKIMEOIOGIEKCGCGEGGCGCEEEEGGGEEOWCAAAECA@CACCCAIAMCKAK@KBI@MBGBCDA@@@@@AA@@@@@@A@@@@@AA@@A@A@@BA@@@@@A@@B@@A@@B@@@@@B@@@@@B@@@BA@@B@@@B@B@B@@@@@BBB@@@@BD@B@BBBBB@BBD@@B@@BBB@@@B@@@@ABA@@@@@A@@@@@@@A@@@@@A@@@A@AB@@@@A@@BA@@@@@@BA@@@@@@@A@@@@@A@@@@@A@@A@@@@@@A@@@@@@@@@@@AA@@@@@@@A@@A@@@@@A@@@@@GFEFEBECGIGEC@GAGEIQEICEEEEAE@@@@BAB@@@BBB@@@@AB@@@@@B@@@B@BBB@@@B@@@B@@@BABA@@@A@@@@@@B@@B@@BBB@B@B@@A@@B@B@@AB@BA@@@@@@@@@A@@B@@A@@@@B@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@BA@A@AB@@@@@@A@@BA@@@@@A@@@@@A@@@AB@@A@@@ABA@CBA@ABA@@BMFIFCHAHEFEFEDGFEFGDIFEDGDEFAHBHFHDHHFFFVRFDFFBH@HABrPBA@@@@BBB@D@B@@@@@AB@B@@@@BAHCB@@BDD@B@D@@AD@B@BA@CAC@A@AB@@C@AA@@A@BBABBBAB@B@B@BA@@@@B@B@@@@A@@B@@@@@@@B@@@B@DA@A@AAA@A@@@@A@@@AqD@DDFDHFJFLDHBDFDFBLDHDFDJPFHBDJFBFFDJFLBLJDJBHBDDLHHFFLJH@NADCFEDCDAFALBFDHFFDFFHDLFFHFHDDBFFNLPDFDFJHHDJJHHJFJJFHFFFJFFHHJJHLDNDLFJFR@H@HBHDFDFDHBJ@HCLAFCDADCDCDCFIFQJKHIACAGCEEEAEC@@A@CAAA@@A@CBC@A@G@@@@@AE@C@C@A@ADA@A@AAAA@@@A@ABA@CHA@@B@B@B@B@B@B@BAB@B@B@DBB@B@@CB@@@@BB@B@@@B@B@@@DBBB@@BADBB@B@DAD@@@B@B@@AB@B@BBDDD@FADC@E@GCGCICGCEACAC@A@@@AB@BAJABCDCHEJEJENAHCBKACDCBCD@DAFAHCFCDC@IAGBKPrbrpjdtd~@HP^dVTbVVNHPFNBVBNCNK^ADCFO`MrA@AJOhI`ATDHDHAJ@NBJHFJDLAPS\\VPH^F^PTPXZRN^X`JR@B@J@L@L@P@R@PBN@L@P@N@P@NAJ@XEFCHCFCLGJEJCFCHCLCHAPENANBBB"],["@@BC@@@@@@@A@@@ABA@@BABA@@@I@AB@@@@@BB@B@@B@@@@@B@@A@@@C@@AA@ABA@@A@@AA@@A@@qO@BEFGFMCS@CDAH@FDDDBHBDBJBFFBHDDrC"]],"encodeOffsets":[[[120013,31200]],[[119500,30421]]]}},{"type":"Feature","id":"341702","properties":{"name":"贵池区","cp":[117.488342,30.657378],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@A@A@ABACECC@A@A@@@AB@BAB@NBN@B@FBJBB@B@BAB@@A@A@@@CAACIAA@A@AB@BAJ@NAB@B@@B@@BB@D@B@B@@BB@@B@B@@ABA@@@ABAA@AEAA@ABC@ABA@@BAB@@C@AAC@A@@BA@@@A@C@@@@AC@@@AB@@AD@BA@@@@@A@AA@AAA@CAACA@@AA@@@A@A@@AAA@A@@@A@@D@B@B@B@@@@A@@A@AA@A@A@@@@B@@@B@D@D@B@@A@A@@@AB@B@@@@ABA@@B@DABABA@@@B@@@B@@@BB@B@B@D@BAB@BAB@BADADAFE@ABABA@@BA@C@@@ABADADC@@@@CA@A@@@@@@BA@AA@@ABA@@@@@A@A@E@@AB@@A@AA@@@A@AAA@@@GAGAGCEGEEECEEECEEEGCECKAKAG@IBE@IBGAGAGCGCGEEGAEAGBGACACEEEECEGICCCICCCCCEEGCEGEECGEEA@@@@AA@@AA@C@@AAAACAA@C@@@@A@@@A@CAA@@EAA@AAAAA@@@GACAC@AA@@AA@ACA@A@@@ADABEBAA@@A@@@A@ABA@CDABA@@@@C@A@A@ECAA@@@@@A@@@A@@@@@@@A@@@A@@@AB@BAB@AE@A@@@ABA@@AA@@@G@@D@FB@@BB@BBB@BBB@@@@FA@@@A@A@@B@@B@BB@BAB@@AB@@A@A@ACAAAB@A@@A@@B@@A@@BA@@DB@@BC@@BAB@@@@A@ADA@A@@@C@AB@@@BAA@@A@A@@D@BA@@A@CAAC@AAAFE@@@@C@BA@AACB@BBBB@@BB@@@@BA@@DEFI@@B@@@B@@A@@B@@@@A@@@AB@BAB@@@DAD@@AB@BAB@@@B@@@BAB@JAB@B@FBFDB@B@B@@@B@@@@ABA@CB@@ABAFABALELEREJAJEJCFCDEBE@EBICGEGAGAGAEAIBE@KBG@MAK@K@IAI@GAIAEAECECEAEAGACEKGIGEEGGGKAKAKAM@GBQ@KDEDIFGFGDE@AAAA@@@A@A@@BA@@A@A@@C@@A@@AAAACAECACAAA@C@@BCB@@A@AA@@@@@AA@@AA@@@AA@@@G@GAEAGAAAE@A@@CBA@AFABADCDABCBAB@@@@AACAA@A@@B@@A@@@A@@@@A@A@A@@BA@ABA@A@A@AA@E@CBA@ABAB@B@@@@A@@@@D@@@B@D@DABAB@AI@AB@BA@@@A@@B@B@@@BADA@@@A@@AA@CAA@@BA@A@@@AA@A@A@@@A@@@@AC@C@A@A@@@@C@ABA@A@@AA@@A@ABADBD@@ABA@CB@AA@@@@@ABA@ABABEBC@A@@B@BBD@BBF@@A@AAA@CAA@AB@@A@@BA@AD@B@BABC@A@@BA@CAA@A@C@AB@@BH@BEDGF@@A@C@A@EAA@A@A@A@@@C@EAA@A@A@A@A@C@A@@@A@A@A@A@@@CAA@A@@@A@A@C@EA@@A@@AA@@@A@@BAB@@A@A@A@@@ABABA@@@@F@BAB@@C@ABC@CDA@G@@BADAD@B@@C@A@G@C@ABA@A@E@A@A@A@@@@ABABG@@CAECCAA@EAKAGECCA@A@CBABA@@@@@CAA@A@A@GBKBGHINCFCLEPCLAHAJ@HAJCFEBG@KEKEIEOK@@BAAA@@AAA@CA@A@@@@C@@AA@AACA@@AC@CAA@A@@@ADE@A@@AACBA@ABA@@@AAAA@A@AAAC@AAA@A@A@AA@AABA@CBA@C@ABA@A@@@A@CBCBA@A@@BA@ADA@@BA@A@@@ABABUBQCOEMGKEMCMAA@AB@@@BB@@BAB@BCBA@@DA@@B@@CA@@A@AA@@@@@ACA@@AA@@E@AAA@@@A@@@@@A@@@A@C@@@AA@@ABA@@B@BABAD@@A@@BA@@D@B@@AD@@ABA@@@AB@@@B@B@B@@ADA@@B@DA@CBABAB@@@@CAAA@@@AB@@@@AAB@A@@A@@A@@C@@BA@@@@BBB@@@BBB@@@@A@ABAAE@A@AACCAAA@EAA@CAACAACACAAACAAAEAAAAACAEAAA@@@@DABA@A@CB@@@BAB@B@@@@@@@@A@@CA@A@@AAA@@@@A@@@@BA@@@ACAAAM@OBKAKAM@M@GDCNCFEDM@[IOCI@E@EDEJAJ@LCJIJCFCHBDDDBF@FCDCDCF@HAH@H@JDFDFHDFDBF@HCFIDKBC@E@KAE@GAMAMCQ@IBEBGDCDCJAH@FFHFDDDHFHDDBFBDDNNFFBD@BAF@L@B@BD@HBDBBB@BBDBBB@B@D@BADADAB@H@B@BA@@BAAA@ACA@AA@@A@A@@B@@AD@B@DBFBBBD@B@F@@AFBLBB@DB@BBB@BABEDEDA@@D@B@@@BBBB@BBD@CLAB@B@D@B@@@@@BD@@@@@DBB@BBB@BB@BB@BDDB@B@DHBJHFDDDo@@BEDEH@FADE@CEECC@A@EAACCEAG@ACACAC@CDAFBJ@J@HAJEJEF@FBZPFD@DKLAHBHFFHBJBDDDJDJDFDBNBBDDFDF@J@HAHAJCFEDIDG@G@EAECEEAC±@HDL@LDJDJFJBLBJ@P@HAHCJCJCFEFCFIHEHMJIJEJATpVlTVLjZPHPHRDPFPFTHZFVDjDNADADCBADADAPEB@VETCLAL@HAF@J@J@N@F@B@DBHBHFDBFB@BBBFHDD@BDDBDBD@DBBBD@BBDBBBB@BBDDT@@FBBFjRbPZÎjrJ\\VJHZT@CAM@@@ACE@CAABADBL@L@J@HBD@DDPLHFFDBFB@B@BA@ABCBAJBB@BABC@EDEBC@GAECCEACA@C@ABANGF@"],["@@DDHFHHFFFHDHFJFFBLDJBNBB²AACGCECEOIG@EC@EAACAE@EAEEG@GCAC@Ep"]],"encodeOffsets":[[[120586,31513]],[[120027,31209]]]}},{"type":"Feature","id":"341723","properties":{"name":"青阳县","cp":[117.857395,30.63818],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HGDEFCBE@GCEIKKKEGEGEGCE@CFCH@J@LADCFCDIDGFCDAL@HAJALAJ@HAHADAFAHCFCHEDGFEJEFANGLGHCLCHANCHAJEFELIFIFIHEFEFGBGBGAG@KEGGIEIEEEGEICECCEICI@GBEBEMMOIIEGEAGCICICGCGECIAIBIAICIGEEEGEEACECECECIAKCEAG@G@IAGCGEGI@IDIBI@IAGAGACCGCCGGCGCCEGMGGGEICGEMCIAKCKAKBIAMAGAMAGAGAGCI@C@EBIBGFGFCDEHABG@C@KEEEEGECEGCCCE@ICGCECEECAAA@EBGHI@C@GACGAG@I@KDSHKFIBKAKEGEEAKCKAI@EBGBCBK@GAGGGGEGCIGEICMBGBEBGDEBIBGHFLBDBHBFDFDFBFBFBJ@HBJ@J@LBL@NAH@LAFBJBFBHBHFHDHAJ@FAFCFEDIDIFIBQFKFKFABEBAB@BA@@DAB@B@@A@@@A@A@A@ECEAA@A@IBA@AB@@A@@@A@ABA@@BC@CB@@A@ABA@@B@@@B@@A@@@@BA@@@A@@@EJCF@@AB@@@@AA@@AAAAA@BD@BABD@@@@@EFBB@BBDDBB@@@ABC@@@@B@BB@AB@@A@@B@D@@@BCB@B@B@@A@AB@@AD@@CA@@AB@@@BA@@@@BB@A@BBDB@B@B@BA@@BA@ABA@@A@AA@@@@B@B@@EB@@@@AA@AAA@AAA@@EAC@@@@H@@BB@@AB@B@@@BBFA@ABA@@B@@@B@@@B@@@@@@@B@@@B@@@@BBFDB@B@D@@@@@ABCB@DAB@B@B@@@BB@ABAFCB@B@@@BDB@BBB@@BBD@DBHB@@B@BBBBB@FB@@BB@D@B@@@B@@D@B@DBBBBB@@@DBB@@BB@@@@FBHFFDHFDFFHDFDDDDDJDDHJDFFFFFBDBDAHBHBFFHHFHDHDHBHBJAF@JAH@LBLBFDHDFFDFFFDFFFHFDFBHBH@H@@BB@B@B@@BBB@@@BA@@@F@B@B@@@@AB@BB@@BAB@@@@@@@BDB@@@@CDCBAB@B@@@DAB@@ABAB@BEFCBCBABA@ABA@ABC@A@A@A@@A@@@A@@@A@@ABABCBA@@@AB@B@@A@A@@B@@@B@BA@C@C@A@@@A@@@@@@B@BBBB@@@@B@@A@A@A@C@@@@B@@@BBB@BB@B@@@B@@BB@BDDBB@BBB@@B@B@@@@ABC@@BA@@B@@BD@@@@@D@B@@AB@@@BBD@B@DA@AB@@AB@BAD@BBBBFB@AB@B@@@@@B@@@B@@@@@BB@@B@@@@@@B@@@B@@@B@@@@@@@B@@@@B@@@@@@@@B@@@B@@B@@B@@@BBB@B@B@@B@@@AB@B@@@DBHDHDJDLDFDFF@J@FBFFHJFFFJFJFLJFFFBJDHBH@J@JBJBLDHDFDFBFFBDFDDDDFDBHDF@HABAFIDEDCDCBCBCDAFDBDBDBDFFHFFHJJHJ"],"encodeOffsets":[[120812,31585]]}}],"UTF8Encoding":true});}));