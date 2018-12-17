(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('桂林市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450305","properties":{"name":"七星区","cp":[110.317577,25.254339],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@J@FCDCHEBABIBIAEBABABAFC@@@A@ACAEAA@AACE@ABE@GACAAEGCCAABCDCFC@C@A@AC@CAAA@@ACBEBABCBA@AA@AAABC@G@A@AAAA@A@@@A@@@@@@BK@CAC@A@A@AA@@@@@@@EBKF@@@BQJ@@@@MJMNCBG@EIA@I@CAA@ACAAA@GFMJKHABADABC@C@@@@AA@A@@@A@AB@B@HA@ABABEBAB@B@B@BBBDBDBBF@BBDABAD@B@B@DBDBDBDDF@BB@@@DJ@B@BBHABADADBD@DDD@@@@@@@@DBFDHDFFB@@@@@@AD@@ABC@AAC@@@@AA@CBCFC@@@@B@RGLCB@DBDDHFDBHBDAHAD@D@D@XJDBDB"],"encodeOffsets":[[113031,25907]]}},{"type":"Feature","id":"450311","properties":{"name":"雁山区","cp":[110.305667,25.077646],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@AAA@ABCDEBABA@C@ACK@GBCDGJU@CAAAAA@AAA@A@A@AB@BA@A@A@AAAACEC@CA@A@GAA@A@ABAB@DC@ABC@@DCDAF@BA@A@CAI@CBABCLODABAFABBDBDBFHDF@BBDABAH@BBBBB@B@BABABCBABAB@D@BBBD@JAB@FIDABADAB@DCB@BAB@@BD@B@FAB@D@D@D@BA@@@A@A@C@KCICKACBEHIFAFADBDADAFCDCNMXODABCBGBGBAH@DA@@B@HEBC@CACECACCEAA@AAAECA@@CBA@ABACGAGAAAAAAA@EBABGJA@A@A@EBA@@@@DABCDEDEBCBAAE@CACECKAEA@AAAAEBC@EESSCECG@EBI@A@CA@@@AAA@AB@@ABA@@DADABABCAGCACGCEBCB@D@DCBC@A@CCCGACCACBEBGDCAEACAA@EAMDKDEBA@CAAA@A@AFGBABAD@@B@BBDB@DABABABC@C@AC@A@@AA@@AAA@@CCA@A@C@@BCD@@AB@@CBABBH@@@@DB@B@BADC@KCC@ABABCJALAFAHCFAFADEFADAB@@A@AAAAA@A@EDCBA@A@EGECG@A@EBCDEBCBCDGBGVENIPCDABCB@B@BAD@B@BBB@@B@DAD@@BHFHJBFAFADKFIHADBDDNBDDHDH@BB@B@@@BJF@B@B@B@F@F@VBJBFDFBF@HBDBB@@BB@@@@@B@B@B@D@@@@@BB@B@@@B@B@@@BAB@B@@@@@B@@BBB@@@@BFF@@@BA@@@@@AA@@A@@B@@@B@@@@@BHF@@@@@@CB@@@@@BBBDB@BBB@@@@@@BB@B@@@@A@@@A@EA@ABA@@A@@@ADA@AB@@@A@@@@@A@@@@@AA@@B@BA@@A@@ABA@@@@A@@ABCBAFAFBHDRFDB@D@F@BAFCBCB@DBBBBd@FABABE@@@@@A@ECCAGAC@ABAB@HBHDD@FCD@B@DDFBJABBBBDBDNIHEB@BBBDB@DBJ@B@FJH@DANMNI@@@@RI@A@@LEFA@@@@@@B@"],"encodeOffsets":[[113029,25816]]}},{"type":"Feature","id":"450302","properties":{"name":"秀峰区","cp":[110.292445,25.278544],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAA@A@ECIAAGEC@A@CAAAAAA@@A@A@@BAD@B@BA@A@@AA@@C@A@AA@C@A@@@@A@CBABA@CEAA@AAA@@B@B@B@B@@@@@BA@@@@AAE@@@A@@AB@B@BA@@@AEAA@@A@CBAB@DBB@DAFA@@@A@@@@@@@@BAD@B@B@BA@A@AAA@@B@@@B@B@BB@AB@@@@@@@@E@@@AB@@@@@@@@@@@@@B@@F@@DBB@@@@@B@DADA@ACI@@A@@ACEACEBABA@EBC@C@@@@@@@@@ABA@A@C@A@AA@@@@@@@@AAEAC@@A@@AC@@@@@@@A@CAAAAAAAACAI@E@@@@@@@@@@@A@AC@C@A@AD@JBF@BAD@DABC@C@ACCUGAA@C@ABCBAACEAC@ABCBI@IAGCCAAE@E@AC@C@A@ADBFAB@BBDBD@B@B@BA@@@CFABABA@@B@FABCBABABBF@DB@@D@@@@@@DDNNDFBLDHBBD@D@@@F@@B@DBBBBJD@@ABABE@AAC@A@@BBD@BDB@BFDHFBFDPBHBDBD@JBDBBDBD@B@B@B@BDBB@BCHCD@D@BBBD@B@DABABABADADAF@DAB@@@@@@@BBBBB@D@@@BA@@@@B@BE@@@E@CBABAB@BB@HBBDDD@@@"],"encodeOffsets":[[112949,25941]]}},{"type":"Feature","id":"450304","properties":{"name":"象山区","cp":[110.284882,25.261986],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACACAABAAICE@C@ADC@ECCAG@GBABAD@HBDBFDB@@@@@F@BABA@EAcAACAA@ADEDABE@C@A@ECCQAGBEBEDABA@@@B@@B@BA@@@BB@@A@AB@@B@@@@@B@@@@@B@@BAB@BC@@B@@@AB@BFBB@@@B@@@@@@AAA@@@@@@AA@ACAAA@A@@@@DA@@@@@@GE@A@@@@@A@@@AB@@@BB@@@@B@@A@@EE@A@@A@AA@@@A@@@@@ABA@A@@@A@A@@@AAA@@@@C@A@A@A@@@@@A@@AA@CAGAE@EAECIAUAE@E@A@A@A@E@BFBFBBFJDDDBBB@BABABC@C@A@AB@BBFDFDF@D@BABABCBA@A@ECA@CBAFAFABAB@BABA@A@E@AAE@A@CDCBABEDCFAB@B@D@DBH@D@@C@A@@@AA@IACAAAA@FCP@BBDBDDFFFBB@D@BCBABCB@DADAB@BBDDD@BAF@BB@D@D@@B@FBFDBHDJBJ@DABAD@FBBDABAD@B@DBBVHDD@B@DADCBC@ABE@IAC@@B@B@DBDB@@@@@@@@@@@F@J@DBBBBBBBBB@D@B@@@@@@BD@@@BD@FBBB@@@@@@@@BBB@D@B@B@BA@@@@@@@@D@D@FAB@BAFAACAC@C@A@ABCBAAC@AAECACAAA@A@A@ABAFABABAB@@G@ABAB@@@B@B@@B@@D@D@BABCBALG"],"encodeOffsets":[[112964,25838]]}},{"type":"Feature","id":"450312","properties":{"name":"临桂区","cp":[110.205487,25.246257],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@IIIIMCKAIDMFKDCFEFCFCBABEAGBGFEFAJBLBPAFI@G@ICIAKIGMEIEEAECCG@EDEDGFECM@IBMBS@Y@M@@DC@CAECCAC@CBC@C@C@E@GAEAGAEAEAG@ACEAEAA@EAG@E@KBCBCBAD@JDFBF@F@DCFCDGBAD@DAB@D@D@FBD@@@B@@@@ABAAC@ABC@AAA@C@C@CBC@AAEAACA@A@CDAD@FBPFRJHDD@B@HADADBHA@@LCFCDCDC@CCCACAAAACBA@ABCAA@ABAD@BA@CAA@A@CA@A@ADE@C@A@GCEBCBARKDCBCAECE@CBAFEDAH@F@BBF@B@B@BABABC@A@C@A@AAC@A@ABAB@BAD@D@D@BBBAB@@C@CAC@EAE@AC@AA@EDCLIFADCBCBEDEBCDAL@AC@AB@D@BBF@BABA@@ICAAAA@C@AE@@@C@C@AACGAKCEMMCC@@@@@@@CA@@CAEBABADABA@E@AB@BABADE@@B@@A@A@AACAC@ABAAEBC@ABE@ACCAC@ABABC@CDABADA@A@CAAEECEACAC@ADO@EBBBBBD@JBB@@B@D@@@@CAG@C@C@ABADEFCBADADCB@F@BBF@B@B@BA@ABABABEBEDAB@FDB@B@DABABA@A@CCECEAE@ABAB@D@D@BABA@AAACACCEIAAAEAEAI@@A@A@@ACGCGACCMACBCJGLEBCBEAEGIGE@AC@CBA@@@AA@A@ABC@A@ADABADCJOFMHUHADCDAFADCFAB@H@FDFHB@B@DAFCB@B@BBBBB@@@BABCFEBCBEDEBGBEBKDIBABAD@LDD@BC@A@ACA@@@@AGBADA@@BA@@DC@AD@B@@A@C@ADEBC@CACGA]ACAECSICAACBEDCLEFGFEHUDIBCFKLOFM@I@EEGCEGEKAMAEBG@GAICEC@CDEHKDGBC@E@CCEGCMCEAEACACGAGEMEGEEGAGAGBMDMBKAGAQGEACCCEMDEDEBEFCDGFCDCFGLGHEJAF@D@D@HFHFJDJAJCNCNCJANCLAJAHCHCJCJBLBL@HDJJLBH@FAFAHEHKJOLKNENEPCJBHBFBDFDDDDHAFADGBG@I@CBCD@HAHADGBKBIBI@IAG@EBCH@HDL@HAFCFGFGBID@DAHBJ@HAHAJAJCHIDIJGNEHGHAHEHCBEBE@ICOIIEMEKCMEMAMAI@IBEDE@K@YAKCKEGEEACAEAGB@DDJBFAHCFGDEHKLGFGFIJGJIFEDK@MCICGAGAGBGBKJILCLAPDLDNDJJRFRHLDHDRDNDJAFAHCDCBE@MGM@MBEDGNEL@JDHDJDPDLDJ@@AJ@D@DCBGBEB@BABBBDBDDDBD@BBBD@B@@ABC@E@C@@BABBFAD@BCD@B@B@BB@B@B@BBABE@EDAB@DBBDBF@LGHEHCF@D@BD@B@JBL@DADCDCFAHAFBB@DBB@D@B@FBDBBDBBBFD@B@D@H@HBDBBBBD@DE@AB@B@B@AD@NADEBEDCDCDEBK@E@EBIFGBCBC@I@E@AAAAAE@CAEAECCCAGAC@GDCBE@MAECAEAEACEAC@@BA@@@@D@@BBB@BD@F@@@BAB@@@@@B@B@BADA@@BCBAFBFBDA@CBEAC@CAE@E@ABABABEBK@C@@BC@CBADAF@DBH@DBDDNBHBLDPFJFFFDFBNLHDJ@LELCJCFAB@LEN@HBRJJFJF@HEFKDCBELEHEHCFALBJDTFLFHFJHDHCFCB@FDDDBDDHDP@BB@BBD@BAB@D@B@HDD@B@HAB@F@F@B@BABA@A@IBE@ADCDCFALCFALAFBLAH@D@BB@BADMJ@@@DBDHDDF@DADADAHDTBF@BFHHNBJBJ@JCJCJGPMTGNCHBDJJJBR@TARHPHPFLDPBJBJCLIJENEHAJ@NBNBVJLDJ@J@LEHAHCJBJBLDJBJ@NGDEDIBIIO"],"encodeOffsets":[[112751,26270]]}},{"type":"Feature","id":"450303","properties":{"name":"叠彩区","cp":[110.300783,25.301334],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CACAWIC@C@C@GBCBGACAGECCCAA@KDQHA@@@@@EDAD@DBB@@@@BD@BAD@BC@@B@@@@A@EEGCECCA@@@@@@@@CC@CACBCBCBAAG@ACBCBA@@@@@A@CA@@@EA@@@@@@@@@@@@@A@@B@@@F@@@@@@A@@BAAA@A@@@A@@@BB@B@BABA@A@C@AB@@@@@@@@@B@@EBCBA@CAA@AB@D@BB@FB@B@@ABA@A@@BB@@@F@BB@@@@AB@@@@A@A@A@A@@@BB@BBBDFB@BADAB@@@@@@B@DBBB@D@@@BB@@@BABA@C@AB@@@B@BB@BBBBDBB@D@HFBBDJ@F@BBB@BD@@@@@@@DB@@@@B@HBJDFDBDFBDABB@@@@B@BB@FBD@D@BBBBBDDFB@@@@@@B@HDLDDABCDAF@FBDFB@B@BAAC@ABCBABAAAAC@ABCDA@@@@BABA@A@AA@CAAA@CFCHALCFAFAHCDCDC@AACCCGICA@C@EAA@CBCBEBA@@"],"encodeOffsets":[[113031,25907]]}},{"type":"Feature","id":"450321","properties":{"name":"阳朔县","cp":[110.494699,24.77534],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LBDEDIBKFIDGFEDCFC@G@ECEEEBGDEFGDEDCFCBGBCCIBGDKDEDCDGBM@IBG@KDEDEHEDCFIFG@EBIFGDCFCFCFK@ECQAGAG@G@KAICEEGMEKGGKCOAK@OAQAMBKDGHQDKDM@MCIGSOMSISESCSAOAIE@AICEACC@@BA@ADC@A@A@A@G@ABEBCBAHE@ABC@A@AB@BADC@ABEBMBA@C@A@GAC@C@IBEBC@A@ABA@ADAB@JAD@B@BAB@@A@@AAECCCAAACAAAAKKEEACCAKCA@AAE@CACC@@ABCACAGCEAAA@BCDCBCFABEBIAEBMBIFEFIBIFEDAF@DAJIFKCQGQ@QAO@MAC@IBKDIFEFEHEFEBE@GACCACACE@KBM@EAIBIFGBGDI@KCICE@G@EDAF@LBRDJBF@LEHCD@@CDGFIDIBEAGCAB@BEHCBGBC@ABCBCBE@CACECEA@CAOACBEDEDEDGLABCBA@AAAI@CC@A@CDAB@HADEBADAFEH@BA@C@AACAEAC@@BBF@@ABCAABA@@BBB@B@BCBE@CACAGAE@C@ABEFCDCBG@ADADADBDDFDBBDBFBFDFDBBDBB@D@@ABA@EBAFAD@D@B@BBD@D@BGFAB@NAFBDADAD@D@D@DAFCD@BDFDDFBRHHBLBNANCHAHBHBFFFHFNBHDHDBFBFBNDHDDF@D@FADCHGLCF@DFDJDHBH@FANBLBHFDFFH@F@JENKPELADCJGVEFEHKFCDAFBDDBTJFDDB^BHBBD@DADCF@B@D@BB@DD@@BB@BB@@BB@D@@B@DADABABCBA@AC@A@AC@ABABEH@B@BBBDBB@FALCNCFBB@DBFBDBHCFADADBBDDHDDB@D@DA@C@CDAFAHDBDHDDBBABABC@CB@BA@@BAB@BB@@B@@D@BAJ@FDHDFTTFFD@FABBBBB@BFDLDFDBF@BBDAFAFCDCBA@C@@B@FAB@B@B@HIBAFAB@BBBBBBBHDHB@D@DBB@FADBDANAN@FBHAHCHCHIDGBIDGFCHCFBFDHJFHDLDDBDJLHBPDR@P@PDPBHBL@"],"encodeOffsets":[[113266,25659]]}},{"type":"Feature","id":"450323","properties":{"name":"灵川县","cp":[110.325712,25.408541],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@B@BBD@DAL@@@@@@@B@@@BBBBBB@H@D@BABBB@@BABADABAFBD@@BBDBD@@B@B@DEDCDADBBDDFHBBBD@HAF@BDFBBB@FBDB@B@B@@EDABABABBFAJAJABGFCDEDI@@@ABAFAD@DBB@F@DDBHJDDBD@BCDCDGDEBEBKDGBED@DBBDBB@@B@BABAB@@@@CBAD@BBDBBABABAD@BBDABA@A@CEEAE@CBADCBKCGCA@@@@@@@EACCAAAA@A@CAC@EAAA@@@@@AACBEAACECICGAA@@@@@CA@@@@@@C@@@C@CCAA@GAAA@ABAB@D@F@@AFA@@@@@AB@@C@A@AAAA@@@@@@A@CBE@CBCBABABABCBA@C@AA@A@CDCDG@AAAACA@A@A@C@CAAAAC@IACACAGCOAEGEEC@ACA@AK@CBADCFAFADCDEBKJCD@FBBD@@BBF@FBD@D@DA@ABAAC@C@C@ABA@AB@B@BBD@B@B@D@BADABABA@A@E@AAE@G@CBEFAB@DDFBFADCDQLABADDF@H@B@DCF@B@BDBB@B@DBB@@ABCBAB@DBBAB@DABBBBBDDD@DCDCDEDKD@@GBCACBGBA@C@GCQIOEEAC@CB@D@BDBBBBF@BAD@D@D@DBB@BAD@BBDAB@B@@A@@@C@EAC@C@A@CBC@ABCHEDCDE@E@EAICC@ABADAD@L@FBH@FBBBFDF@BBHBFBFBHBF@H@F@D@DAD@DBDDDBF@DCD@@@N@ZATAN@JDNEFCHCF@FDHFDFBJFNFJHBLDJ@J@HEJOBKAIAEBEFAHBHAFABEDEDEFCDELCNBJDLJNJJ@JLFJBHBHFFFFLBHDHDFHDLFNBPBDBFDHDHFJJHLFPHRDRDLDJDHBH@JDPAJBFDDBDDFBDDBDDJ@F@FBHBB@TB@@D@D@DABAFAFADCDAB@F@DDFADBBA@@@CAAAGAABC@AAAAABABABA@A@A@AAGAAAABABAB@BADADCBC@AFABCBC@CBCDADABA@CBC@GBC@O@K@IBGBIBC@ABE@S@IBCFEFCDEBCBEDC@I@GBE@C@C@CEECAAAACAKBCHGJKJGL@LCFCFCJEJGHAHCDIDI@IAKAIDIFCNCPCNBJBDDDJDJHJHFHDHCHCHGBGFINKLEJEJGHKFGBAH@FCDA@AEIBEBC@CBCBEDC@EDEHIFEBADC@CACAC@CAGACCCAAC@A@@A@A@@BABABABCFCBADAD@D@DBHFBDBDBDBBBB@BDFDJBBHBHDJBHDB@JALCDAFIBAB@HFDFJJB@@A@C@GCIAAAEAGCCCAACACA@CBA@AA@@@EACCAGACAAC@ABAHEFCFCDABA@A@CAEEGEEACCCECAAAABCBABAJADADCBECK@C@ABABCBEDGDABAD@F@D@DBD@DAB@DAB@BA@E@E@A@AB@DADCDGAC@EBADCF@DAF@D@DABCBC@E@E@I@ECCAA@E@A@C@AAA@CBABEBABAFEDAF@H@PFNFRF@@@@XH@BB@@@B@RBL@J@HAD@@C@ADCBAH@J@FABADABGBAB@B@BFDDBB@ABABABADC@CDAB@F@DD@@BB@@FB@@@B@B@B@BD@FCDAB@B@JBD@D@DCD@FCBCBC@CBCBAFC@CBGBABCF@D@H@FBF@FBB@@@@AEW@C@@BABBD@H@HBF@D@F@BADADAD@DDD@B@B@@A@E@ABA@C@CCAA@CAA@A@CBA@A@A@C@@@@CAG@IAICIGEEGAEBKDMFEFGBE@CCEKCKBIAEAAGBAFCBEBC@GCEBEDCBCFICK@O@M@KBGHKLINENKLCHEHIFOFEFAFEFEDGBG@EECICIDKBSCMCGAG@GBGDGFGHGJGBK@GAOCO@MCO@MDM@O@MAEACCCKDMBODIBIAGCEGAGBIBQBIAGACE@CBEBO@GAEIGK@GAOAOCO@Q@OCGAIKACCCCKEGGIECEAGDEDCHAJCHGJGDGDGBEAM@MBCBCAEBA@CAC@A@AB@BAB@DB@FDBB@BBBDFBDFDBD@DADGFA@@@CBG@ABAHAHADCBWPMNCDEDCBCBCAEBEBGJAFBDDLDJ@L@D@B@B@@ABC@C@C@A@EBA@C@@AA@ABA@CDA@CBABCBEJA@IBC@AA@A@CBABADABABA@A@AAAAA@ABGBAAC@ACEEGCACAAAEBABCBKPADAB@DBJ@D@BABE@CBCD@@AD@BCDA@AB@B@BBB@H@BDBD@DFBBBBB@B@B@@ABAB@B@B@BBB@BBBB@DIVCHAD@HDL@B@DABABCFAD@BBB@B@B"],"encodeOffsets":[[113029,25816]]}},{"type":"Feature","id":"450325","properties":{"name":"兴安县","cp":[110.670783,25.609554],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCBI@GAICMGKGGGGEMEQAIBIHMJIJGH@F@DBDFBFBNFNFHJBF@HDHDDDBJAHGJEJAJDJJJJNJTHNDJHNJHHFFHFNFJFJHDHFJHFHJFLDHBHADBHEDGFIFGFCDCBCDG@IFGHIHEHAHCJAJAHGHGFKFK@IBEHEBCFALANBL@LALBL@RBJ@JDJAFCHGBG@I@EEGEIAOBKBKDELIJGLCHAHBFBLFDHBB@BHELOFKDKDQHMLQPGRER@RHJDFHPFHDJBJCDCBCFAF@JHDHLRFJFHFFHDPARINCNEHIDIDG@CAEEGE@O@ICGGBIDGJIJCLALAJGJIFCFCFANBLBJ@HCBEDICI@EAICSCMIICGGMKOGICEEICK@EBCBI@EAGEKCKCECKAKBKBGDG@I@ECIAEBMDKDKDGHEFAH@LBNDJBHCDAFGDIJMJOFCHCJAN@NDNFN@H@NDNALAJAFADGFKAI@CAECEOEM@ECECCA@EBGAO@IEEEGGCMCGCEGCKAI@I@G@IAQ@KBODG@I@I@EGGGAMAIAEDIFGNGHGEKAIEGEIGMEQIOGGIGGEEIEKCGCCCCCAC@E@GEEIEEGC@A@A@C@CCC@CBCBABE@C@E@GAG@C@AAAB@@@DFX@B@@A@EAE@EAG@C@E@ADABAH@DEDABAD@DADADEDC@CDC@C@IAA@A@CBEDC@@A@A@A@A@@EA@@AA@@CCE@A@CB@DCDABABAB@BAACCAEA@A@ABAHCBABEBI@G@ABCD@B@DC@GBI@K@QAA@@@A@@AWG@@@@QEMEOEG@E@CBEFABABAFAB@DBB@B@D@B@FBBDD@F@J@F@FADADCBC@E@CBE@CDAB@FBDCHCDCBA@@B@B@F@FABA@CBA@CBC@CAC@E@C@ABCBCHAFADAB@B@DDLAFCDCBIBABABADBBBBFDDDBDFFFHBF@D@BABCBEDEDGFAB@BBDDBHBDBBD@F@@BBB@DAB@BDBDDBDDBHBFBBDJ@H@D@BA@IICEGEA@ABEJCBKDIBA@GCIAGCGAAACICE@AAAAAACACACGECAC@C@CBABEDADABABAB@@@B@BB@D@BBDDBDBH@DBDBD@DCDABEFGJCF@FCDAFAD@DADAFFJ@BCBEDG@ABEHGLIHIFKFMLEJAHGHGDGDGCGEGICICICCIAMAODMDEDCJBJBL@JCJCJGDGBIHIFEDEDKDK@IHILGHADBLBDBBDBFF@D@D@DAF@H@JCDAFADCFEDEFAD@J@TAF@BADAJAH@J@L@PAD@HAD@DABCBCBAD@DADADEB@BADCDCBABA@ABABBBBBBH@B@B@BABABABBBBB@BADBBBHBB@D@@ABCAEBCCE@A@CBCDEBEBABCBBBBDBBDAD@DAH@HBFBDABCBCF@BBD@LFFFDL@LDRDRDJHHNLLFN@N@T@LAL@RDJDF@L@"],"encodeOffsets":[[113009,26462]]}},{"type":"Feature","id":"450324","properties":{"name":"全州县","cp":[111.072989,25.929897],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@KSAG@C@ABCLED@H@HBJ@FADABADCBADAHBFBD@BAAGCG@A@A@AB@B@DBB@B@DADABAB@B@B@BBBDBBDBDBB@BA@@@C@CBABAB@FBB@@ABCBAB@B@BBBBBBB@DABAFCJIDCDAFAD@D@BADAD@D@B@B@@DBBBBB@F@BBD@B@D@DADBD@B@D@HADADAD@F@FB\\@DBNDD@B@D@DADAFAD@D@J@FAFBN@FBD@DAB@BABC@CAG@C@ABCAECGEKACDCHGHGHCB@D@DFBBB@B@BC@EBC@CDAB@FBHHDBB@D@HCFCD@BBBF@BBBPDF@FDD@D@HAH@D@DA@CBEDEDCFIFE@A@CAKBCDABA@E@EAEAC@CBCAC@CCAEAOCEAE@E@CAACACBC@EDE@C@CAAEAACAEBA@CFCBCBAD@BCB@ACA@CCACAEBE@CACCCKM@CACACAC@EBEDKBE@AFEFCBC@E@IDCAEAA@A@C@C@A@A@CECIECCAC@@@A@AB@FDDBD@@@B@AA@CCCKEMIEGGI@@BCBAHEBEBALGDAFADABABABAAA@AA@C@G@C@ABG@A@AEAAAAGCE@C@CAC@ACCA@CAA@GAEACECEGAAAECACAEACA@AAA@ADE@A@CCCCCAA@ABABA@A@CACCGAEAEAA@A@E@A@CCGCCCAECACAG@I@CEGCEA@@ADALBJDB@BCBEAIBGBAJCL@DADA@AACEEAABEHGNIFADIAAC@G@CAACA@BCBEFEDCPKLGDEDE@A@KBGBEBCDCRGJ@JAR@B@HEHCDAB@B@FLDPBNBFDDJHTLFFJDFBB@@FBDBDFBTHF@B@B@LSBCDEDADAD@BBBB@BBHBDBDDDHDHBB@B@BA@ABAAE@E@C@AHEDC@ABAAAACAA@A@@B@D@LBXDHBDAJKDED@DDLLHDFBJCH@N@HBFDD@FABCACGGAC@IDCF@HDHDHBXGPCBAAEIMMCEAGBG@EAECKKOA_ACCCECKCQ@EDCLEDEBCBMBQBIBIBIBK@KCCECGAI@GDOAKKKSIOCAME]ECCCACAE@CBE@_IIAG@IDEDE@IAGCGMGCCAACACBQGCMGIGGCECE@G@IBMLKFGB@DDDFBLFJBDBDFALCDIHEFGBK@Q@KBIHELGHGFKJGDKCIEIKIGCEIASAMAMAKGIKGSEO@M@C@@@@@QDWBKAI@GACECG@I@IDMFKDMBGAGCCI@KBW@MBKCICEIEOBM@KBMAKIIGGCCAG@K@MBODOAOBKAQEKAICG@I@IAKGMIKMBIDO@KDIDGBG@E@IEKCICGCI@E@E@KAECECCEAGEKEIKCEEBIBKBMBMCG@M@MEMCM@IBGDEDIPINCJEHCBGDIAMCKAG@EBGFCHCLCLANBFDJ@F@JCHAHALBLDLDFDLFLBH@FAJAD@FDLFJDFHJLPHNDHJJDNDTBJ@FDJCJAFGDI@KAMAEBEDEDIJIHKBKBIDIJCHAJHHJDP@F@FHBF@DCHCJGJMFMDQJOBGCEEEGEIKQCGIGE@EBADCDIDIAGCOEEGICQGQ@QFOHKRGNCRCLELKPGFNJHFDHBFBHADEFGPCJAH@JDJDLHRFHDHHFDHFDHLFFHFHDDFDHDHDJDJHDHDFDLHLHHJBFBJBNBRBLFJHFNHPJLLFJ@NAPIJGNCL@HBJDDHJLNNPNNLPHNLZFLNTJNNPPPFNHPFNDHJJFDJBNFLHJLFHLNDJJPFNHLHHFJHLFTDLDLJLTNLFHFHJBNHAD@D@BB@DADBJDJFNDJDHBD@FABEF@BABDD@FAD@FCDCBAHCFCFCB@BBBD@TDDBFBBDFZBJAN@DBBBBBB@D@DALCHCDBFBBDFLDHDLBH@BBFBD@D@BADEBAFABA@C@E@CDCFEFEJCXE"],"encodeOffsets":[[113673,26992]]}},{"type":"Feature","id":"450326","properties":{"name":"永福县","cp":[109.989208,24.986692],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BAB@F@D@LBDDH@FBD@BB@DBDDBB@D@DABI@@@AD@B@BDBLJBB@BADABC@E@AB@D@BD@F@BBBB@DADADBBAP@R@FCBCBEFCD@DABAFBF@@@D@DBB@BB@@@FBD@B@F@F@@B@BADCDCDGBAB@B@H@BCFAD@DAD@JBDADBDBB@JBDB@F@FBDBF@BB@H@BBBB@B@@@HEDADAB@HABB@@BBBB@@@B@BA@A@CBC@ABA@@B@D@F@BDDBBAVCL@@BDAB@@BHHPFLDNCNCR@JDDHFFFJLBRCJCHKJMLKHEFEHBFBFFJHVFTARFJFHHBJDTHNHNLJNJLNPNPJPDL@LBJDFHLDFBNCJ@JBJFFHJNLJLFJDN@VD`B\\@VCNCH@@@FA@BH@L@J@BHDD@DADG@ABAD@BBBBBJADABABCBEBABAD@B@B@BFFBBDFDDBB@D@D@DDDDB@DAD@B@BGFEBGD@B@DDBHBF@B@D@@B@D@F@BDFD@L@FABABABAF@F@DBD@FBDAB@ACAEBEDA@AB@BC@A@A@A@@@@BA@A@@@EACA@AA@@@C@@B@@AD@FBBDBFBFFDNBF@DAHCD@HBDBDDBFBF@DBFBBBBF@J@D@DAHAJEFAF@L@FADCDCFCFABC@MBCA@A@A@@BCFC@AAAAAC@G@G@C@AECAACAAAAC@E@A@CAA@CAABEBGDEDCBC@CAK@I@AACC@E@GDGFKHE@CAAA@CBAFCF@BAAAA@A@A@@A@A@ADC@ABCAEBA@AD@F@D@BA@@@AACAAC@CACCCAAABA@AFAHADA@C@CBI@@CICKCOCICG@IFKHMFCNAN@NHF@DADCBGBECICMCQCGGKEQIQCICMCKBODKJKLIHAHAHBHBJDNDL@FCJEHIJIHEHELKFGHCDEBGAECI@CHAFBDBFBHFLFLDZBL@F@FCJAJ@NBNBNFLDNFJFPJJDF@FADAFGBGHGFGHMJIJCDGBIBIBG@GAIBG@CJCHAHEDEBE@GCK@GDGFAH@JBJ@JALAHABCBG@GDCDAJ@H@HABCBECGCCECACAEAGDIFOFMLMPKLIFGBGBE@EAGIKCI@GAKAKDIDIDGBGBIDKBMDIDMDMBICIEIEG@G@C@CBEFIHGHKDEDCHEDCFEFAFCNC@ADCBE@C@C@CBCBCACBE@MBAHE@A@CAC@A@A@CBCBEFAB@BA@@@CAAACCACEAEAEACCACEACBCK@I@EAACE@CBKHEDGBAA@A@ABIBEAECCECCCCCEAKBC@CAEACACCCAA@E@CBA@EECAGGACACAEAC@CDI@E@K@GBCACCAAAC@A@CBC@AAACAAAAC@CC@A@C@C@EBABABA@C@GBCDEBABCDA@ABAAEAA@@@EAC@C@@AAEBC@AACIAAA@@BA@ELA@A@C@A@A@@@ABABABGBC@A@ACCAA@CAC@AAGEAAC@CBCB@BBH@B@@@BC@CBA@CD@BBB@D@@@BCBA@C@@@AB@BAF@D@BABABA@A@A@AB@BBBB@@B@BAB@@A@AAC@A@@BABAD@B@@ABA@A@@@AAA@CCAGAC@AAEAA@@CACBEBA@AA@A@CAAACCAG@E@CAACCACAC@C@C@ABCDAF@HCDCDC@CDE@KCI@GBCBGDADBDEL@H@FAFBBDDBFADGLA@GAEAAABCBA@AAC@ACACAEAO@C@ABAB@F@FBFABABCBEBABDH@BCBE@C@GCE@A@@DBF@FBHBHBF@B@BDDBBAD@DADBB@@D@DB@@BB@D@HAF@@@FABADCDADED@DAF@DBD@BA@A@CCACCAGEAC@AB@@ABC@AACA@CAE@C@CBC@A@ABC@C@CC@AECAAC@A@ABED@HABCBC@EBEFAFBDARDBHFBD@BABCD@B@BAF@FAF@F@DA@ABCBGBEBABABC@A@@AAA@EE@CACACAA@ABA@AAC@GAC@CDCDAFA@ABABEDCBABABBHAH@FAB@@AAECECAA@AC@ABCBA@CCAAC@ABA@C@@@CKAECECAEBC@CBEFABEBABEAMBO@KFIBO@Q@IBGDMJKDIBKAK@GBOHIHKFKDMDI@KAKGIGIEKEKAKAEBC@@@CBC@A@"],"encodeOffsets":[[112252,25432]]}},{"type":"Feature","id":"450327","properties":{"name":"灌阳县","cp":[111.160248,25.489098],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B_DEFK@IAKE]AIBODILQJILGLGJKFIBE@CEGGEEQGWGQAEAO@MBGDIBEBK@GAI@@BCGYAA@@@A@A@@@AA@@@@A@@A@@@@A@@@@@AB@@@@A@@AC@@A@@A@@@@@AB@@@@@AA@@@@A@@@A@@@@@A@@@@@@A@@@@A@@A@@@@@A@@BA@@@@@AA@@@@@@A@@A@@@@A@@@@@A@@@@A@@@@BA@@@CGIICECGCEAG@IDG@CAIACGIGOGGCAG@CAACAIAAA@IFE@E@CAAA@IIOAE@K@I@AKCGCKGCGEKCAMCSKKICAA@GBSBUDC@AAEGACIGCECE@C@C@AAAIEAEM]OSSWGEWKCCACA@A@EBA@CAQKEBC@ECEEGKEKCAEAEBI@I@IACAACICEAK@EAGCIAIAEBCACAKUAAAACAY@MEKAKEIBWBQCKIMMOESAGFAFN^MAUCOASAQCOEMEIIKKIKEICKCUACCCGEECECCCEAEAEAI@GFCBEBG@GAEACBEBADAF@HCFEFCBGAEAE@E@G@GFIFGHIFKFIBI@MDADCDAFDF@HADAFEDABBHFBJBLALDDF@DAFEHEFCNALBFFHHFDJBJ@JBH@D@@D@B@B@B@DAB@B@DBB@DB@D@DAB@B@F@BD@FHJFFF@H@FBDDDDDHDLDJFFFHHHJPHRJNFJHHFJFLBHFHGHMJEFCJBNBHBHH@F@J@JCHAP@LBR@J@H@JBJDLFHHDNDHDFHFF@JBPAH@FDBFDFDN@PFDFBF@DBJELCHDFJLLFHFFBDDDFBF@L@F@FDJDHDJFL@J@FAHCHCJ@LCPAJLNNJLHJBJ@H@JDLBRFLBPAPBPCNAL@H@DBHDJHLJNBLAN@PAJFDFDJAL@NAX@LDJHDHBNALCNEJCJ@H@FDBD@HBJALCX@R@@@@@D@NFPHTJLLHNBNBTBJBDFJHJLJFLDHCLIHEHGFKJGLAR@L@HAFEJGDCBKCECAIAKEEACC@CHALENKJAH@F@FDHDJHNHHD"],"encodeOffsets":[[113980,26325]]}},{"type":"Feature","id":"450328","properties":{"name":"龙胜各族自治县","cp":[110.009423,25.796428],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AIDGFKDGFEFEDCBECGGOGQCK@@@@@CAKDKBGHGHBLBLHJFNFJAJEHEJGLAHEFEDIDMCGCG@GBEBEDEDCDGFEK@E@ICQCK@KBS@M@M@KEMKGGCICQCQ@KCKEEKEC@AAE@ADADCBEAGAG@CBC@CBAAACAAC@C@@@SAA@GAEAE@I@CCCAACCEACCCAEBICO@IAGCGCICKCQGQEOGKIIGEGCECCAOAMAKEGCCECGAGEKEEGEGAIAKEJPAJCJCFMHI@IAKCIAIAGDGBKFI@I@KCUIMAMAI@GBMFIFKJIDIAOAKCOEOGQGSBQ@IAIIACDGHMNSHODIDI@IAIAIGMEG@AAECSBGBCBC@CCEGCAC@C@@NIBC@AAAC@G@KBEAKBEBKDEBCDCD@BAF@J@BABABA@E@E@A@GBA@C@GCA@C@A@ABC@AAA@@ACOCGACCCECA@EDGDGCEIEGEKCSAIBKDEFGFGFKDALCFE@GIEIEQIGAM@KFA@EBIDKDKFI@GCMK@J@D@FAHAFCFEJAH@JCJCJGHIFEDEDCDCFAJAJGJGFCFAFBJBNFFJHJJHLBFJHBD@DDBFBF@NADBDBHJBFDJDLBFDFDBFDFBDDBHFDJBDDBD@BCFCBCDEHABC@E@ABAB@B@FA@@BA@EAABC@CBIFCJ@TJLBJHLHLHNJN@JCFIDKBKDGFGHCLCT@JCHIJGFKBQFOHMFMHGFEHAF@LFXDZFRFPBB@@@@FDHDLFJFJFFFBFBBDBHDBADAD@JGJI@@RDVHNFJFDDBHDPJTDFFPBJCNENEJGHINAJCH@LADBJ@FAFIHKFIBKJCF@F@LFJFJFTNXHLHFFDLBJALGPGNEPAPCPDJFDFHPFRFNDR@J@JDHBHFJFDHFD@DDBF@LAJDRDPBJBJDTJJFJJDLFLDPLJJNLFJHHFHFDFFHAFIHIHEHCH@L@DBB@DDJDBBL@FAFABCDCDCBCJKBEBAHCFAFAD@DDHFHDN@JAL@L@JBDDD@F@JAH@DAD@@ACEACAGAC@G@G@EBCBEDE@CBCBA@ABA@@B@@B@A@@@A@AAC@A@@@@AB@BA@A@@@CC@@@A@@@A@AAA@@CC@A@A@A@AAAAA@A@@CCAA@A@A@AAAACAA@ACACEAA@A@AB@B@@A@AA@CA@@@A@@@AACCCAC@CAA@GAQCMIMCMBEDGJENAHAJEHKDIBEFEFBHHHNHHF@HATILIJGHADA@@B@@B@@@@@A@@B@@@@@B@@@B@B@@@@@B@@@@@@@@@@@BB@@@@@@B@@@@@@@@AB@@@@@@@@@B@@@@@@@@@@@@@@@HFLFFJFTDNHPJNHHJHL@HCHGDGBKDKFELGNEJCHCNGJMDKDIDO@MEKAOCO@MFEJEHAH@NBLBPD"],"encodeOffsets":[[112929,26589]]}},{"type":"Feature","id":"450330","properties":{"name":"平乐县","cp":[110.642821,24.632216],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JDPCJAFCJEFGHKJIHGLCRENAHEJEJILIFEHGDADCBC@ECGAG@GDKDIBCDEHCFAHCFEDGDGBGDEDCBADEFMJHNXZWZAGsNQPEJKFGBGBEBEDCBCBC@EBEDCDADCDGBCBGBE@GBG@GFGHCJGHCHEPGLGLGHGDALAHDJDDBFADG@IDEFIHGFCHCJ@D@HBHDLFHDFADGFEHEHI@EAGMMKGIECGAIDOHMHKJGJEHCDAFCDEDIBIDIHQHGPINKHEDE@CBCCEACOGQEBCFIJKHGDGACEEKKIICOCMAOCIEIGIMIGEGGCEAG@ICO@CGCCACCEACBGDIDEBCACCCC@ABADAHGHEDAD@H@D@FCHCBA@@DAF@JAD@FAD@B@D@FBD@FADAHGBA@A@CAC@CDC@E@EKAK@@@CC@GAGCECE@AAAAAAEEAE@C@E@CACACCECCCCAACCCACA@CBCBC@EAGBABCBAB@B@FABAF@D@BBFBD@DADA@@DGJ@DABAFADC@CDABC@A@@ECAEECCCEEK@C@CDCBA@A@AC@EAE@G@G@EA@ABAJCFA@C@AA@CAEAG@EACCAA@AACDC@EAACAAC@CCACCCEACCCEECCACCCCCCAA@A@ALCL@JBHATEHCHADBNBJCFIJQHKLDM^ELEHIBMBOCOAKEMOMQGQCIAIDKFIFG@KCKEECCK@MDODIHGHGBGBO@MAOAI@KFGFGHMHODC@@LCJBNAHGFO@K@IAGBGBIBE@AHBL@LAJBHAH@L@L@PBF@P@F@JCFADE@O@GBKJCDEDG@GAECKAMCIAK@EFCH@H@N@P@LAV@NALCNAJAPALAFCHALCLEFADGBGDCFCFAJBHFJDFBF@HAF@@A@CDABAD@BBDBDDDDDDBBB@B@DABAFAB@DBBFFDDB@BBB@@@BABB@@@B@D@B@B@@DBBDBDBF@BAD@F@B@DDD@@DDDBF@BBB@LDDBBDFFLLBBBBBDBBDDFDBB@@@BA@ABA@C@IBA@CB@BAB@B@BADAF@J@DBD@H@B@DABANAF@BCDABA@@B@BAD@BGFABADAF@B@H@B@B@BCD@BAB@@DDFBJD@BJFPBTBTDTFTJPNHTDJ@NCNCLGRCHALBNBR@PBLDPHLLHNFFHDFBJ@L@H"],"encodeOffsets":[[113336,25483]]}},{"type":"Feature","id":"450329","properties":{"name":"资源县","cp":[110.642587,26.0342],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AMGIGEKESMIKCKCKESGKEIGGGKEMIOCIKMEGIKKGMEIAECIICGEMGOEMOOMOIMMSEKKYGMKOMMMOKMGICCAI@GDKHMJIBO@MEIKKOIMGGEEIAKAQAMAIAEGIKGKGECGCGCCICICGCGCEGCGEEEGKECCGGECGEGGQCKCI@IBGDIHOFEBCAGAECGGEMI@AAACGKEEAGAGBKDIHKJCFALALBPFJFH@F@JAHGHEDIBICI@QAK@KAKBK@MAKBEBADGFAF@JELELGHGHIBIBGDGBGFGJEH@JCHADCDEDEHEJCHGFCAGBGAKCIEEGIGGEGCEIEIEMEGGEIGGMCIGMISIMIICIBIFIHIBGAICCGCGCE@IAEGEMAMAECECAE@G@IHIJGNAJBJFRFNHHHHHLDNBJ@HAJEDEFCHCDCFAFAF@HDHDHCNCJEFGFKBIHGFIFIBMEIEKGKAGAGHAHCLBL@D@@@@DLHRHPDHAFCDEFEFCHELCHBJLDBAHAD@B@B@B@BB@@@BABBB@@@B@@B@@@BA@AB@@@@@B@BD@@@B@@@B@@@BBA@@BA@@AA@A@@@A@@BAB@B@B@BDBBF@PFJFHJHLDLDNFRHJDLFNFJDLFFBF@HEFCJFJHFFDFHFFBFHJ@H@NHJJLLJJJNNNHPJRPHJHLNTHFHBHFNHLHDFHHFFFDH@HGDKFEHCHBLFNNJJJLFJHHFLHPDDHJLJFPBJBLAR@RFN@JDJBJBJDFJBJBJBFDFDFBLFBHDJHJHPLJJJNJJ@FADEDMBMJEJERCNDRFPJLAPCREPEJIDIFIHEF@NFHLJNFJHBJBHGHQBOEGIKIIKK@GJGLIJGJGFCLANBPFNHLBR@P@T@RCJ@L@D@JBJFHFLJRBXBZDJDLBVBH@D@@ABGDEJIBAACCEAA@A"],"encodeOffsets":[[113584,26886]]}},{"type":"Feature","id":"450331","properties":{"name":"荔浦县","cp":[110.400149,24.497786],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCBCH@DADCFEBAD@F@HBDBDBF@DA@A@AAA@AB@BADBBA@@AE@AD@FBDBBBD@B@@AFGBEBCFABC@GBADCB@D@@DBJBBB@DABAHKFCFCFCDAPBDBB@DFDFDBF@DADABAD@HADAFG@ABAHDFBJAJCHEDC@@DCFG@KAECIAQ@KBEFCH@F@JDLDJ@HCHAJEJAFBN@LAF@BDBDDDHBF@FAFEFGFEJELCJAD@NBP@RBR@RHLDJEBI@CBEFCJEJAFEJENAFAJBFABADEDADC@ABBFBHDDBDBBACC@C@A@EBC@AAEACACCA@@@A@A@C@A@@AAAB@@A@AAA@CCEEAA@CBABEBA@C@AAACACCCCACAC@ABCBADCB@@@BE@GAECEEIAGBIDEDEHCHABCFEDKBKDGBEBKBOBIDMBK@MBU@K@O@M@GDGFEL@JBNDLBFDHBH@FCDCLIHAP@F@BCDE@I@E@OAE@O@K@KBGAGBI@KAKBGF@JAHAHAJBL@P@HEBGAMDI@KMDMBEFKHGDMDMHIFGJEJELCFCFGFEFKBGDMBK@IBK@KCGGEGAGAKEGEEEEMGKBCDA@G@CDAH@B@D@DBDBFBF@DAHAH@D@H@F@DA@C@QEE@AA@CAC@CAAA@AAAACGCIAAA@CCICGE@ACM@A@CAAC@EAAA@CB@@A@AAA@EBCBEACCAE@CBMDG@MAGDEFEFEDC@CC@KDAHGFGBCFOFKBG@E@GCCE@U@YBEBMFADDDBFAHEBK@G@KBAJ@FE@ECKKIIKEKAI@KBIBS@OGKCOGMMKMGAICK@OAIAI@EFID@@A@A@C@C@A@G@C@ABEBCBCBAB@DABA@ACGAACC@@BBB@@BB@D@J@D@DBD@BABC@E@G@AD@BBF@BABED@B@BBFB@@DA@@D@B@BB@B@DAB@BB@@@BBDDH@BAD@B@BBD@DADCBC@C@KACCGCCAE@K@AAECA@A@@BA@@DBDDD@DABC@C@ECEEAE@GCEA@C@CDCDCBC@CCGAEACBABAD@F@FBFFFBF@FADCDCBKAAB@FADAFBBDBD@DBDDJJNJFH@FABCBA@EBAAEAKCC@@@CDA@@DHFHFHDBBAHABGNAD@D@DBDBF@FBBD@DBDB@BBBAFADA@A@@AEAGAEAIDAAMGA@AACAECKAAAABABABADADABA@E@CCCCCCAC@AC@@B@DCB@BG@A@CDADCDEDA@A@CBAAGBE@C@@B@FADCD@D@BBBHFFF@@JFDDHLBF@BCDCDAD@BDFFFB@DD@D@BADCDAF@BBDBDBFBB@BADADE@@BBB@BA@AB@BBBF@BADB@BDAB@B@@BABBDD@D@DAD@D@BBDDBBDHFBDDBBDFHDBB@FAFAF@F@FABCBCBAD@BBD@B@DCJAFBFBBDB@BCB@F@DADGLCB@DBB@DBD@HCDCDCB@F@FBDBDDBF@FAD@DAB@LF@@DBBBBBBFAHADCDCDAD@BADEBCACAECCCGAC@CBCFA@ABA@A@EC@@ABCF@B@B@@BB@@@DBD@F@@BBBFAB@BCBADABCFAD@H@DABABAB@F@D@D@BDDD@BBBBBDBBD@DAB@D@BBDBBDAD@H@L@FCJ@DBDBFBDBDHHDBFFB@DAF@B@DBDDDBFBDBD@LAFBDDDDFDDDBFAFAJ@B@BBBHAFCLGDAF@BDFBJ@L@"],"encodeOffsets":[[112876,25354]]}},{"type":"Feature","id":"450332","properties":{"name":"恭城瑶族自治县","cp":[110.82952,24.833612],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@GN]BG@GAG@CNUBC@G@EEECG@EBEAEGGKCOCEACCGCECGACAACGGECAEACA@AAOBE@GACEAGAACAA@IBI@ECcOWGGG@ABGDE@CACCCE@ACCEMUAEACAA@C@CBA@AAEGIAA@EBCHCBC@AGKYYKK@ABAFAB@@CCEGIGKEKAKAG@CHSDMACAE@EDKBCBKBC\\WBCBCAICEGEAABCDEDANAHAD@FEFE@A@EEKCO@GBIB@@A@AB@@@H@B@BAAAEK@@K@A@A@@@EGCG@A@@@AB@D@B@DDJFBFDBBBBB@@FD@@B@@@BAHIL@HBBBFJBDJBPBFAJCNAJ@JFNFTFL@HDJDDBHAJ@@IBGH]HSJIFIFCJELEJ@LBJFJHHFFBLAHEDGFSBUAUEWEKCOAOBODMFMFKBKBQAM@GCEECEAIAE@G@GCEMEMEIGOCKACECGCKAGBEFGAGCCEAOBEHKBECCCAKEM@MBGBGEEICKCMGMKEKAQ@KBGDIBEAGCCGIWGOAM@GCICCEAI@I@ECEEBIEBGCKEGCGAC@I@GDEDGHEJCF@JCHEBCAICGCKBCBGHKHKHOHGFGDIHGDEH@HAH@HAFAHADCHCDCBCDAF@FADADCDAFAFAHEHILOFMRHtYBYXMWIGENCFABCDCFAHCHCHEFGDEBGDCFADCJCL@HBHDH@FADCDCBGHEFKJIJIFGFMBQFKDGHIJGLEHIFEDIBODICBHBHDR@FELEDEDCDEHAJ@FEHEJCDGFCFCF@LAH@JANCHCDCFCLAHDJADAHEDCDCFEHCFAHFFDF@F@HEDCDEFCHEJALCJCFKAJHBF@HAPAF@DDFHBJBRAJAHAHBDFBHAJCJAPCNDLDDFBNBP@N@NCP@NDP@PDHBL@HAHIHGHEHCHAH@HBNDTDLAJCJDFD@FAHCHEFEFEBEFEPGJGFKDMLMFKJGLAH@L@N@PDLEJNCJ@JALEJEHGJEHEH@F@F@FBHBDAFEDE@GBEBCFADAFBHBH@FADAHEJ@FBFBFBDDFDFDHFDDBDDVDLFJJLLLJJNFPFRDTBPBVDNBM]BEHETBPFNNLJRDXAJALFLBNFZ@DBBBBBLVDBDBFAJBJBHDFBL@FBJDBDDBJBJ@J@FAFBDBFLHLFFFDD@FA"],"encodeOffsets":[[113770,25892]]}}],"UTF8Encoding":true});}));