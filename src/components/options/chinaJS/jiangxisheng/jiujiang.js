(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('九江市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360402","properties":{"name":"濂溪区","cp":[115.99012,29.676175],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@BB@@@BHBB@D@H@@@@@B@@@B@@@@@D@B@LBJDBAFEDABA@@@AB@CI@@CG@A@@BA@AD@@A@@@@B@@A@@@@@AA@@ACBAC@@@A@@AA@@@@BABAD@BA@@HC@@@@JEHCB@BBD@F@@@BBBB@@@@CF@@AB@@@@A@A@@B@B@BAB@@AB@@@@@BRDDBHF@BB@FF@@B@@B@@B@@@@@@B@@@@B@@BB@@@@@@@@@FFB@@@@@BBFBHF@@@@@BDB@@@@FDFDFDB@@B@@AB@@@B@BB@DDBB@@AB@B@@@@@B@BB@B@BABA@@BA@@B@DBB@DBBB@@B@D@@@BA@@@A@AB@@@B@@@FNBBB@@@BDDD@@A@@B@@B@B@B@DAB@DCB@BC@A@@AAB@CG@AB@@@HBB@@@DMB@@@B@B@BDBD@@DB@@DD@@B@FAB@@@DBFDBBFDABCA@@CF@BCDAB@@B@@@@D@@@B@@@B@@B@@@@AD@B@@BB@BB@@ADA@@@ADAB@@B@@@D@@BB@@@@BC@@B@@@D@@ABBFAHR@J@V@NB`DjHF@F@HAbIlIPCbAJ@eaIIEIEKMeY{MYKMKGUsISKMMUACCCAGAO@OBEDMLaBOBQBGBE@BCDOAcCAA@@@@CA@AAB@@A@A@A@@@A@AB@@A@EBC@AAA@@@@AA@A@CBC@A@@B@@A@CB@C@C@@@@A@@@A@A@@@@BA@@@@@@@AA@@@BA@@@A@A@CB@@A@A@A@A@A@C@E@C@A@A@@@A@@AA@@@@@@AABA@AB@@AB@BAB@@@@@B@BA@A@AAA@@B@B@B@@A@@@CA@A@@A@ABA@AAABA@A@A@@BA@@@ABA@A@CBCBEBA@A@CDAB@BA@@@@BABABB@@@@B@@@@ADAB@@AACCAA@AAA@@@@@ABABA@@A@A@@B@@EA@@ABC@@BA@@D@BBB@@A@EA@@ECAAACA@CAA@A@A@CAA@A@@@CFABA@AA@@A@@@A@@B@@A@@@@A@@AAA@@@@ADABABCDA@@@A@@ECOIMGCAAA@AEGAC@EAIAG@@A@CAACA@CDKFCBEBA@@@@@@DCD@B@B@B@@@B@DDD@@@BEF@@@@C@A@@@A@@AA@@AA@CCAACAA@@@AAAA@AECCEA@A@A@AA@@A@CB@@EFA@ABC@@@CA@AA@A@A@C@@BA@CBC@A@C@ECCAA@C@A@@@A@CAEAEA@@AB@@A@A@@@BB@B@@@B@B@B@@@@@DB@@@B@@@@BBB@@@@@DB@JF@@B@@BAD@@CB@@@BAAABBBADB@AB@@@BA@@B@@A@@BAB@@@@@BB@@@@BAB@B@@B@@B@BD@FDDB@@@BABBB@@@B@@@BBBABBBAB@DBB@@@BBB@B@B@B@BC@@@@B@@@F@@@B@@BB@BB@BB@@B@@B@@BB@ADBB@FB@@BA@@B@@AB@@@DB@BA@@B@@D@@B@BBBBF@@B@@BB@BAB@H@B@DC@@B@B@@@@F@@BBHBBB@B@BBB@@@BB@@@@@@@@B@D@D@BA@@BA@@BAB@BA@AB@@B@BB@@@B@B@@BD@BB@DDB@@@@D@@B@BBNH@B@BBFBD@H@@BB@@FDB@AB@BABABIFA@AFAB@BA@@BA@@B@@@B@BAD@@@D@@@B@@@@@B@@O^@BBDFH@@B@BDBB@BBLABAFEJ@@@D@D@L@B@@BFDH@B@B@BBD@B"],"encodeOffsets":[[118708,30419]]}},{"type":"Feature","id":"360421","properties":{"name":"九江县","cp":[115.892977,29.610264],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DCwsgxQ_pEB@O[@CA@@AAC@A@A@ACGAE@@@A@K@C@C@@FIBEBAAK@AAAACA@@@EGAC@AP]@@@A@@@@@A@@@C@@BC@A@A@@@AB@@AB@@ABABEB@JEBABA@ABAA@EC@@AA@@@GACAE@A@AMGAAA@@@@C@@A@CCA@@AAC@@@A@A@@AAA@@@BAB@@ABA@AB@@AB@@A@C@C@A@@@@@@A@@A@@AA@A@AAAGAAA@@@E@@A@A@@@CDA@G@A@ABA@@AA@@@AEAA@A@AC@@@@AB@@ACA@@A@@BA@@@AB@@EAA@CA@BAA@@@AA@@@AAA@@AAA@@@A@@@E@@@A@@D@@A@A@A@AAA@A@@AA@CBAAABAAA@A@@@A@@AABA@A@@CAECC@@A@AA@@@@ABA@A@@A@@A@@@@BA@AB@@@@AB@@A@@BAA@BCAABABB@A@@DA@@BC@AA@@@IEA@@C@@@@AA@A@@A@@@A@@C@@@@@A@A@A@@@AAA@@B@B@@@BA@@FBFBDBB@@@B@D@B@DBFDD@B@D@DAB@@AD@B@B@B@@BDB@@D@BAB@FE@@DAB@AA@@BAB@@A@@@ACEAC@C@C@@CAAA@@GMEI@A@E@A@@A@EIACC@I@AAECACCC@@@@BA@@@ACC@@CAA@AA@C@@BA@A@A@@BAB@B@@A@C@@AI@@ACGGAAA@A@K@AAAC@@@@@AD@@@BAAGCE@A@@A@A@ABA@A@EGCA@@@CAAACAA@@AACAA@CA@@AA@@@ABABC@@A@A@@@@@@AA@@A@AB@@A@AB@@AB@BA@@@AAA@@AC@AA@@A@A@A@@@@B@@@BB@@B@@@B@BA@@AA@@B@@AD@DA@@BGBA@A@@AA@@@@DCBA@@@@AACC@@@@B@F@DA@@@@AEAEAI@@@ABA@@@A@A@EBACGAAA@A@A@@@@B@@@B@@A@A@AAAAECA@A@@@A@@@B@@BA@@BA@@@A@A@C@AB@@A@@@@@CDA@ABAB@@A@@@AB@BABAB@@AB@BA@BB@D@@AB@@AD@DABA@A@AB@BB@@B@B@@@B@D@B@B@@A@ABAB@BA@@BA@@@ADAB@@@@CA@@A@CFMJABEB@@A@@BADGJADAB@@@DDJ@D@BAP@D@D@BBHAH@@DB@B@@IB@BA@CDEJABA@GBA@@BCBONABA@IBAB@@@BBBBB@@FFBB@@BB@@AJ@@EF@BAF@@@BDB@@@BA@@BIBAJA@IB@@@B@B@BABCDCDCDABA@GBC@E@ABA@AB@BEJA@@BKB@@@@CCAA@@@@CDABA@@B@@AHCFA@@F@@B@BB@B@B@BB@FD@@@@AB@B@D@@@B@B@BCB@@ABAB@DCD@B@@@BA@A@A@A@A@A@E@AAA@ABC@C@A@A@CBA@ABA@A@A@G@AAA@A@A@@@C@A@@@@B@@C@AAA@A@AA@A@D@@@BB@BD@B@@@BABABA@A@@@@DA@ADAB@@A@@@A@@BA@@B@@@BB@B@FBBB@@AB@DA@ABA@CBA@CDA@@B@@A@A@@@@DAD@BA@@BAB@@BD@@@B@@AB@BA@A@@@@B@@@B@B@@@B@B@B@BC@CB@@AB@DABA@ADABCD@@A@@@@BA@@BA@ABA@@@ABABAB@B@B@BA@CD@B@@CDAB@A@@@AA@@@AAA@CBEBABAB@@BB@BAB@@@BB@BB@@AB@B@@@B@B@@@B@@AB@BA@B@@BBB@@B@B@BB@@BA@@BBB@@@@@@BBB@BB@BB@@B@D@@@@EB@BB@AB@FB@@@@BCBA@@BAB@B@B@B@@BB@@B@@CB@@@D@@@B@@D@B@B@@@@@ADCB@B@@DDB@BAB@@@@BBB@B@BBBB@@B@@BB@@@@BAB@BA@C@A@ABA@A@@BA@@@@BA@@B@B@B@@@BBB@@@A@ABAD@@@B@@CB@B@@@@B@B@@A@@BBB@@@BBB@B@@@B@BBB@BBABB@@BBBB@BBCDBBB@@@DB@BB@BAF@DBB@BADBBA@@B@B@B@@B@B@BAB@@@BA@ABA@@D@B@B@@CAA@@BA@@@BBBF@B@@BBB@B@BB@BBD@BBBB@B@DA@A@@@AAG@A@A@@@@B@B@@@DB@B@@BB@@AD@B@@BB@BDBFDD@B@D@B@@ABA@@BA@@B@@@@D@@@BDBBBB@@@B@@BBBBBBF@@H@@G@@@C@@DA@@@B@@B@DBD@DBB@B@@BD@B@B@BAB@BA@@D@DBB@@@B@B@B@B@BB@@BBB@B@DB@@BBBBB@@@F@@BBD@B@@A@EBK@A@@B@@@@@BDDDB@@FBB@D@HAD@@@D@@@FE@@@@BB@@@D@BADCJABB@@BFFBB@B@@EBA@@@KGAAA@EEAA@@A@AAGAC@CAE@A@@@C@A@@@CAABA@@B@@A@A@C@IAC@A@C@@AABA@AAA@A@CAA@CB@@AFAD@@A@@@A@A@A@@@@@A@A@@B@@@@ABABA@@BA@@@A@@@A@@@@BA@AB@@@BB@@B@@@B@@@@BB@@DD@B@B@B@B@D@@BB@@BB@@@@A@@BAB@B@@BBB@@A@@BB@@@@@@DAB@BB@@DB@@ABA@ABABA@B@@BB@BB@@@B@@@@CB@@@D@@CBCBCAA@A@C@@@AB@FB@BBDFBBDB@B@@@D@BB@BB@BB@BD@@FFBBFDBBDDBB@D@@@DAFCFCFABABC@ABEDA@CBSNCBGHED@BEH@@CBEDAB@BA@@B@BBB@B@B@BABABGFCDCD@@AFAB@BAB@@@@@@AB@BAB@@BD@@@@A@ABA@A@@B@B@B@D@@AB@B@@AB@DADATZB`CpUh]"],["@@GGMKGE_YGCI@aBODkJaJGBE@E@iG_CMAU@I@Q@SAU@KBMBfbTPTPTNTNzXPLB\\@V@VAHCJCTMNONUFGNQFEH@HA"]],"encodeOffsets":[[[118504,30539]],[[119052,30497]]]}},{"type":"Feature","id":"360403","properties":{"name":"浔阳区","cp":[115.995947,29.72465],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BGAEBA@@@C@@@AD@@A@@A@@AC@@@A@@@BABC@@B@BC@@AAA@@AA@C@@B@@A@@@@A@@@A@@@C@@A@@@BADC@ADE@@DBBAECAAECCA@@A@EBA@@@CC@@CA@@ACACA@A@@@A@CN@@A@GA@@A@@BDHA@BB@@@BADA@CDA@CBA@A@A@@@@AB@@@CCAC@@A@AAEM@@A@@@A@@B@B@@AB@@C@A@@@AACAA@CAA@@@AB@@ABABA@A@@A@A@@@@@ABA@@AACCA@@A@A@@BA@@@AA@ECECEC@@@@CA@A@@@@GEEAAA@@@@A@EE@@@@@@@@A@@AA@@@@@@A@@@@A@@@@AA@@@EEA@@AGECAQC@A@@@@BA@@BA@A@A@AB@B@@@@@BA@@DE@@@@AAAA@@E@C@AAA@GDIF@@@@GD@@ABC@ABAB@@@@BB@@@B@@BDDA@BB@@B@@@@@BA@@@@@@BC@@BAB@@@BDH@@DJA@@B@@ABCBEFABICKAA@C@@@@@A@@@A@@@@@G@C@A@GA@A@@AA@@A@B@@DP\\T@nHlRdjVNALAV@TB"],"encodeOffsets":[[118869,30476]]}},{"type":"Feature","id":"360425","properties":{"name":"永修县","cp":[115.809055,29.018212],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@A@@B@@@@@BA@@@AB@BA@@B@D@BBD@B@B@@A@@BA@A@@@AB@B@@@BA@@B@@AB@BBB@BBB@D@B@@@BA@@@@@@@AA@AC@@AA@@BA@@@A@@@A@C@ABA@A@@BA@@@A@A@AB@@ABCBADA@ABA@@AA@@@A@@@A@@BAB@@@BA@@@A@@@A@@@AAA@A@AAC@CAA@A@@AAAA@@@A@AAAAAAA@AAAAAAC@A@A@A@C@C@@BCBABADCBABAB@BA@@DCBABCBAB@@@BABA@@@A@AB@BC@@BA@@BA@@D@B@BA@@BABA@A@@@A@A@ABA@C@A@A@AB@@@BA@@B@FBD@FBB@DB@@B@B@@A@@@A@A@@BA@@@A@@BA@@@@@A@@@A@A@A@A@@BABAB@BABA@ABADABADAFABAB@B@@AB@@A@ABA@@BAB@@@BABA@ABAB@D@P@FBB@BBBBD@BBB@B@@@DBBBDDDB@@@B@@@BABA@@B@@@B@@AB@BAB@@@@@B@B@@BBDBB@B@BB@B@@@B@@ABA@CBA@A@A@ABAB@@@B@B@@B@BB@@@@@@BA@AB@@AB@@@@@B@BBBB@B@B@@@BABBB@BBDBBDFBB@@B@BAB@@ABA@A@E@C@C@A@@BABEBABABAB@B@D@B@BB@AB@BA@A@A@@@A@@@AB@B@D@@@D@BA@@BADA@@B@@@B@B@B@BA@@B@@@@@B@@@AAAACC@@AE@@@@@@AA@A@@BC@ABAB@HABB@@D@BAB@B@BB@@@B@B@BBB@BFDB@D@@@BABCBA@AB@BAB@H@D@D@JBFDDBB@HH@@@B@F@B@@BBBBBD@DBB@@@@A@A@@AAB@@@BB@@BBB@BDBBD@BB@@B@B@BBBAH@BBB@@@D@D@B@@@@B@BA@A@ABA@ABA@A@@@AACAECEAA@ABABG@@BA@@@B@@@B@B@BDH@@BBBBDBBBBAB@@@@A@@@@BAB@@A@@@@@ABB@A@@@@@@@A@@@A@@@AAA@ACAAC@AA@CCAAB@ROFDJJDFFJLPHFBBBBFBB@LAF@HCFAJADAD@FBBBHDFFHDFDHH@BBHFVBH@FCFCHOPIHIFKHKLCJCFAHBJBFHFJFNLHDTLLFPHFFLDHBLWFMTSNSTQTKLC^E¨ULAH@NBfBX@TANCBAD@HEFCHCHGDA@ABAPcDi@KAC@AAAAAAACCCAACKGIIAACCCCCCKGCEGCCEECAAA@IAGASEEAEAIACACAEAJiIeDA@@AAGCACA@@A@@@A@A@CB@@A@C@ABE@@@AB@AA@A@CBA@C@CBA@AACAEAIGECCCGCAAC@@@@BBB@B@B@@@B@BA@GA@A@@@@@A@A@@@ABCA@@ACAAAAAAA@AA@@AI@@@A@@A@@@A@@AC@@A@C@CAAAAAELOJ@@@B@F@D@B@BB@B@@@@@@B@@C@A@C@@BAB@@BBAB@@A@@AACACAACAAAA@@C@@AC@A@AC@@ACAAECEAA@@A@@@A@A@@@A@ABCD@BABBB@B@B@B@DE@EAA@A@AAABC@C@AA@@@@C@AAE@CAEACCA@A@A@I@CAAACAEA@@AD@@ABABC@CBA@@AAC@A@@A@CA@ACCAA@@A@AC@AAA@@DAAA@AA@AAA@C@@AA@@A@A@E@@BC@@@A@ABA@ABB@ABA@@BABC@CA@CICECE@GCGAEAECEECGCGAGAGGEECGAECIQaGMEGIKGKK@KAOAK@GBIDEAAGDIDKDQ@GAKCEECEACG@A@CBEAABC@CBC@EAAAACAC@A@AACAAACCCCCAAAC@A@CBC@E@C@GCC@C@CBABC@CAA@CAAAAAACAACAA@C@ABA@ABABABAD@B@D@BAF@BGJABABEDEDABABAF@FAD@B@BCBABC@EBA@C@AA@C@KACAAAA@AC@AAC@ABGBCDC@CBE@EAC@EDA@CBWBAAG@A@ABCHG@A@@BC@A@@@ABAD@@ABBD@D@@D@@B@@DDB@DB@@FBFAB@BB@@FB@B@@BB@D@@ABA@@@@@@BBB@@@@@B@B@B@BAB@@C@@AA@AA@@@@AE@A@@@@@A@AAAA@AAA@AAA@A@A@AB@@@B@BA@@BA@E@@BC@@@@@@A@@A@CA@A@@@@A@A@AB@@A@@@AB@@C@A@AACA@@@@@AAA@@@A@@AA@@@@A@@BAB@@@@ADA@A@@@ABABA@ABA@A@A@@@A@@A@@E@CBA@CB@B@@CB@@@FAHD@@@ABCD@@ABEDGBQBKAGBKFM@I@KDGFGHEFGHEJEFORGFGFEDEFGFGDG@GBI@QE_IA@A@AAA@@AAAA@A@AAA@@@@B@@@@AB@B@@@BA@@DA@@@A@AB@@@@@B@B@B@BBB@B@@@B@B@@@B@B@@@@@B@@AB@@@B@@A@@BA@@@A@AA@@A@A@ABA@A@@@ABA@AB@@ABA@A@A@A@A@A@A@@@@@@@AB@@@@@B@@@@@@@@A@@@@@@@@@@@AB@@@@@@@BAB@@@B@@A@@@@@A@@@@@A@@BA@@BAB@@AB@BA@@@ABA@@@@B@B@BBB@@@BBB@@@@@@B@BBB@BB@BB@@B@BBBBBB@@B@B@B@B@@@BA@@BAB@@A@ABA@A@@@ABA@A@A@AB@@A@A@@BA@A@A@A@AB@@@@@@A@@@@@@B@@@D@DABCD@B@DBBBBBLBFDDDBHFHDFFDFBD@H@H@H@DAFAFCFAHCFAHAJAFCHAHCFEHEX@F@H@@@B@@AB@@A@ABE@@@A@@@C@A@@@A@A@@BA@ABC@@BA@@@@BA@@@@@@@@BBB@BBB@BBFDDBB@B@@BHABCL@BBB@B@BAB@@AB@BA@@@@@AA@@AA@@@A@@A@@@@BABBB@FBB@DBB@@B@@@@@FFBD@B@D@D@PCLCVCJCNCLGNADAFAFB@@BB@@@@B@@@B@B@B@BAD@BBFB@@B@BADAHET@@AD@BBBBB@@D@DBB@D@B@@@B@@B@@B@BA@@BBABA@AD@@C@@BCA@BAA@@A@CBA@A@A@@@AB@@@@AAAA@@ETEJAHBFBHDFDDFBHFFGFANEHCJCJCJANGNCJCDCBCBM@ABCHAN@LHF@FALAJ@FEFAHCJ@RCF@F@F@HAFANANCHAREJ@FBLBLBNBL@PCP@NDR@NDH@NADAFGFEDCHIDGJCH@J@JAJDFCHAJEDEBG@GFEFIFBJBFBHBFBDBJBDBDA"],"encodeOffsets":[[118499,29979]]}},{"type":"Feature","id":"360424","properties":{"name":"修水县","cp":[114.573428,29.032729],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACAEAC@AAEAGA@@@@@@A@@BA@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@AA@@@@AA@@@@A@@@@AA@@@@@@A@@A@@A@@@A@@@@@A@@@@@@@@A@@@@@AA@@@@@@EECCCCAEBCBG@CACAG@E@@@C@@AC@@@@@@@A@@@@@@@A@A@@@A@@@@@@AA@@@@A@@A@@@@@A@@@@@@@@@@B@@@@@@A@@B@@@@A@@@A@A@@@@@@@@BA@ABAB@@@@@BA@@@@B@@@B@@A@@@@@@@@@@B@@A@@BABCBC@CBCAGEEEGGGGEEECC@AAAAC@A@@AA@A@@@A@A@@@@@A@@@@@A@@@@@@AA@@A@AA@@A@@@A@@@A@@@A@A@@@@@A@@@@@A@@@A@@@@@A@@@@@AB@@AB@@AB@@AB@@@@@@A@@@A@@@@@A@@@@@@@@A@C@@@A@@@@@@A@@@@@A@AB@@@@A@@@@AA@@@@@A@AA@@@@AA@@@@@@@A@@@A@@@A@@@@@A@@@@@@BAB@@AB@@@@A@@@@BA@A@@@@@@@A@@@@@A@A@@AA@@@AAA@A@@@@@@A@@@@@@@@BA@@@@@ABA@@@@@@@AB@@@@@@@@A@@@@@@@@@A@@@@A@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@@@AA@@@@A@AA@A@@A@@@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@@A@@@A@AAA@A@@@A@@@@@AA@@@@A@@@@@@@A@@@@@A@@@C@AA@@@@@@@@AA@@@A@@A@@A@@A@@@@@@B@@A@@@@B@@@B@@A@@@A@@@@@@B@@AB@@@@@@A@@@@BA@@@@@AB@@@B@@@@AB@@@@@BABA@@B@@ABA@@@@B@@@B@@AB@@@@@B@@@D@B@@@@A@@@@@@BA@@@AB@@@@AB@@@@@B@@@BA@@@@BA@@@ABABCBABE@A@AAAA@@CCCGCECAAACAGAACDEDEDEBCBEBG@EAEEEAACACAG@EAIGGCCCECCAE@EBEBCAAAAECCCCCACCEACAEAE@@C@C@A@@A@@A@@@@@A@@@AA@@@@@@@AAA@@@@@@@@@@@BA@@@@@@@A@@AA@@@A@@A@C@G@EBC@EBCBCBA@C@CAAACCCACAC@GBEBIBEBGBIBG@G@E@CACAAACAA@EBC@G@CAC@EAED@DABCBC@E@E@ABABCBC@C@E@CDABCDADAD@DAD@BADABCBGBABEBIHEDEDEDCFCDABCB@FADAFBF@D@FAF@FAJAHCFEDEFEDCA@C@EAACAEBC@EDC@E@E@CAAC@CCCCAEAC@CBCBC@CAGAECCACAGDCBC@C@ECEACAC@E@CBCBE@C@ECACCEEGGMEEACICEACCAABC@CBC@E@CBCDGDGBE@C@CAAACIDEBCBIDCDEBGBCBCBCDEDCDGBEBCAEAACCEECGAEAKAI@E@E@CBCBEDGFGBEBCBCAAC@C@GAEAAE@IBGBI@GDADCDAD@DEBEBEBABADADCBC@GBEDGDABAF@D@DCFGFCDEFEDCDEDCFCFCBG@C@C@CBCDABEFED@D@DAJ@JAJADAFADEFAB@DAB@FADADABCBEBG@C@AAAAACAAACEAC@C@CACBABABEFAFAD@D@DBF@DADADCDEFAB@@A@C@@@A@A@@E@ACCGCCACCAECGCICACCEAGAGEMGEEEAECCCCCAEBEBEAACAG@CAACAAEDC@EBEDCBCBCDBFBDBB@D@DBBDDBBFBDDBDBDBBBF@JBDBH@DADADABBDBF@FAF@DCDAAACEECCAAEAC@C@C@CFCFAFAB@FBDEDC@KAECCAGAGAEACACACAEACBC@E@C@C@E@GBEDAFCB@DAD@DABC@CAC@C@AD@D@D@DDB@DADCFADAFAD@D@DBDDDBFDDDBDBBB@FAFALCHEFEBCBABCBCBC@C@C@C@CAAACCEGCECEACAACF@DAJAFAHADCFCDCBADC@CBCAA@E@@BAA@BAB@B@H@D@BBBBH@@BJBD@D@B@BBB@@@B@D@@@B@@@B@@@B@B@B@B@B@B@@@@@@@B@@A@@@A@@@@@@@@@A@@@@BIECACAC@C@E@GCCACACECCEGAA@@A@@@ABEFCBAB@@A@@BAHGXEP@DAFAD@DAB@B@B@D@DBDFLDJ@B@DEDCDCFADCFGFADAD@DBH@FBF@D@B@B@DAFBDAFABEFA@@BBFDDBBDB@DHN@HAF@HBZ@FBDBFDFHDFDJBLAFFFJFJFJDNDBLDFBHFNLJFHBHBJFHFJDFFDFBTBFDDDBB@LFFDBDHLBJBFAJ@HBBBBJBNBPDLBDDF@HAF@HBHBJ@F@FAF@F@B@pDTFNBH@JCDAH@BBJHHFFDD@F@J@LDVLJHHBF@FCJCFAJBHBDBBFBHARGLCNAD@BBBFBD@BB@R@HJLFD@DAFADOJADBH@FTPBB@B@DAD@DAT@BCF@DBFFDHHPFDBXD@D@DADEJAHEHSFIHKNSHCHCH@P@HBJEF@FB^VNFD@fDL@LA@@HDDBDBB@B@B@@FBD@BBBB@BBB@B@BCBADA@AB@@AA@EACACA@A@@NGBA@@BBD@D@@@B@@@AA@EAABA@CDCDANANFVBJ@J@H@DABADCdDD]JGJOJYBCBCBC@C@EAEAGCCEEEEGEECEEm]GCEAECGCCCCGAEAI@EBGFGHEHEHCHCjSNCHCH@FAF@HAHAJBHBHALAH@HAF@HAHAFAF@HCDBFDDDFDHFFFDDHDHDHD`DHBF@H@H@D@F@FBF@JAJAHALCLBNEFCJ@NCLCHAPEZMRGFCLAFAFBF@DAHAFADAFMBEBEDM@EAIBMAE@G@CFEDAHBFDFBDDDBDDFDFADGBEDMFEFEDA@EAEAE@GAC@E@GBGHM@CBEBE@EBE@I@GBGBQDKAM@G@I@E@I@@@@@ACC@AA@@@BAAC@A@A@A@ACCAA@CACAAAC@A@A@A@CB@@ADCJEB@BA@@@ABB@@DABA@@@A@GBA@A@@B@@ABADIJMFGFEDGDEFGDEFGFAHEFCHANCH@D@FADAFAFAFAFAHCNIDEDCBCHGDEBCDCHCFCBA@G@CDCBCFI"],"encodeOffsets":[[117704,29567]]}},{"type":"Feature","id":"360423","properties":{"name":"武宁县","cp":[115.105646,29.260182],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HGLIJEJEXIHEDCDEBCDADCFADADAFADBDBDFDFDDDDFBDBHDFBJHDBPAR@H@L@DBJDHBD@JBJBHBHBHAFABADCDCBI@@ECAA@IAAA@CAC@AAAEAQ@CD@R@HAFEDEBC@GBI@EAE@E@EAGAI@C@ECE@EAG@EAE@EDEFCJED@DBF@F@H@FCDCDCBADCFAD@HBDBDBJBDAFAFADAHAVUHIBGFKBGDCGEEACCCEAGAEBGFIFS@@BBBB@@@@BA@@B@B@B@DAB@@@BB@ADB@AD@@@BCB@BAAA@@ABA@@@@AA@@@A@C@A@CAC@@@AAAA@ABC@@FSBGBC@A@AA@AE@ABC@A@A@A@A@@@A@@A@@AA@BEBEBCHMDKDMDIDUDK@O@C@C@AACEE@@@@A@@@AA@CAA@EAABA@A@@B@@@@B@@BB@@BB@@@@B@@ABA@@BA@A@AAA@ADKBAAG@@@AAACCAE@AAA@AAA@A@@@@@@B@@A@@B@@AD@BAB@@AB@B@@@B@D@@@B@@@F@BAB@@@BA@@@A@@@G@EFWFGDEBGDGBEBIBGDEBGDEBEBE@C@G@G@GACCEEEGCGECACCAEAKAAAA@C@ADCBA@C@C@@@@@@A@@@@@A@@AA@@@@@A@A@A@@@A@AAA@@@AAA@A@A@@AA@A@A@A@A@ABA@@@AB@@AB@@@@@B@@@@@@A@AB@@@@A@A@A@@@A@A@A@@@A@A@@@A@@@@A@@A@@@@@@@@@@B@@@@@@A@@@@B@B@B@@AB@@@B@@BB@B@B@@@@@@@@@BA@A@@@ABA@A@@@A@A@ABA@@@@@ABA@@BA@A@@@@@A@A@@@AA@@ABA@A@A@@@ABA@ABA@@@ABA@@@ABA@A@A@A@@BA@A@A@A@A@A@@@A@ABA@A@A@A@AB@@ABA@A@AB@@A@ABA@@BA@ABA@ABA@A@ABA@ABA@@BA@A@A@A@ABA@A@A@@@A@ABA@@@A@A@A@ABA@A@A@A@A@A@A@A@A@A@A@@@A@A@A@A@A@A@@@A@AAA@A@AAA@AAA@@@AAABA@A@@@@BA@@BA@@BA@A@ABA@A@AAA@A@AA@@A@AAA@A@A@A@A@A@@@A@A@A@A@@AA@@@A@AAA@@@AAA@A@AAA@A@A@AAA@A@A@AAA@A@A@AA@@A@A@@@A@C@A@A@A@A@A@A@@@ABA@A@A@@@A@ABA@A@A@A@ABA@@@ABA@A@A@@@A@A@A@A@A@A@A@A@@@A@AAA@@@AAAAA@@AA@AA@@A@AA@@AAA@AAA@@@A@AAA@@@A@AAA@@@A@A@A@AAA@A@A@A@A@A@A@A@A@@@A@AAA@AAA@@@AAA@A@A@@@A@@@A@AAA@@@AAA@AAA@A@A@A@A@AA@@A@A@A@A@A@A@A@A@A@@@AAA@A@@@AAA@A@AAA@@AA@AAA@AA@@AAA@AA@@AAA@AAA@@@AA@AA@AA@@AAA@AAA@@@A@A@A@@@A@AA@@A@AA@@@@AAAAA@@AAAA@@AA@AAAA@@A@AA@@A@A@AAA@A@A@A@A@@@A@A@@@A@A@@@C@@@AA@@AAA@@@AA@@A@A@@@AA@@AA@@A@AA@@A@AAA@A@AAA@A@AA@@AAA@AAA@AA@@AA@@@AAA@A@A@@A@@AA@@B@@A@@@A@@@@@AA@@@@A@A@A@@@A@@BA@ABA@A@@@@@A@AA@@@@AA@@@@A@A@AAA@AAA@A@@@@AA@@AB@@A@A@A@AA@@A@A@@@AAA@@@A@AAA@@AAAA@AA@@AAAA@AAA@A@@@A@AAA@A@A@A@@@A@AA@@A@AAA@A@AAA@A@A@A@@@CBC@@@ABA@@BA@@@@@@@@@A@@@@A@@A@@@AAAA@@A@@@A@A@A@A@A@AB@AA@A@A@A@@@A@A@A@@@AAA@AA@@A@AAAA@@AA@AA@@AAAAA@@AA@AAAA@@ACAA@C@AAAE@CBCFABCGGEAGCIEGGAC@C@ADC@@@A@@B@@A@@@@@AB@@@AA@@B@@@@@@@@A@@B@@@@@@@AAAA@A@@@@@A@A@A@A@@BA@@@@@AB@@@BA@AAABA@A@A@@@@BA@@@@@@@AA@AA@@AA@@@@A@@@@@@A@@@C@@@@@A@@@@AA@@@@A@@@@@AA@@@@@@@@A@@@A@A@A@A@@@@@@@@AA@@@@AA@@A@@@A@@@@@@@AA@AA@@AA@@@@AA@@@@AACAAA@A@@@@@@@@@@@@@AB@@@@@BA@AB@@@@@@A@@@A@@@A@@@@B@@A@@@@@@BA@A@@@@@@@A@@A@@AA@@@AA@@AA@@A@@A@@@@@@@AA@@A@A@@@@@@@A@A@ABA@ABA@A@A@A@@@A@@BA@@@ABA@@B@@ABA@@B@@@@@B@B@@@@AB@@@@@@@@@@A@C@@@A@A@@A@@A@@AA@A@A@@@@@@@A@@@@@A@@@@AA@A@@@@@@AA@@AACAA@@AA@@@CA@@A@A@@@@@A@EJADCD@D@HABEDGDCDADCFGHADCDCFMJGDEBEBEBEBCBEBC@G@MDGBEDGFEBEHCFEHCFCHEFEHINCJAB@BA@@@@BAB@H@B@@ABCB@@AA@B@@ABA@IFCD@BA@@D@B@B@BBDBBBD@DBBDD@B@B@B@BBDAB@@B@@BDD@B@@@@@J@F@J@HBNCLARAH@H@JAF@FAFAF@DGNAH@H@FBD@HBFBF@FCBEFEFCNAFCHEBECCCCACCEAECGACBEF@D@HBFANBJ@FCNAFAFENCBEBGBCBE@EAEBKBEDQHYNOFGBKDMDI@EDMFKAKDGBIBIBE@EAE@C@G@G@E@GA_CGCGCGCCCEEGEECCCECCAGDE@EBGBGBE@GBG@KBGBGAIAGBGBE@EBG@GDMDiTGDGDGFGFEHAH@FBJBFDHDDHDFDFBHDn^FFFDHFFFFFDDBHBF@F@DADADADIZIPIHC^nTLDHHJFPDLDJBJBJBHDFDFDFFFFHFDDBDDDHFDDFDFDbJTHPFJBPBJDJ@VGH@TDPFR@\\EFCJKBGAW@GHC`CBDFNJNLJTFNAVEFAFBHBFDHFHFDDFBHFLBNDJBNBLDJBF@HADCDE@CAEBEND@@@@@BB@@@@B@@B@@@@@B@B@@@B@@@BB@@B@@@@@B@BB@@B@B@@@@@@B@@@B@@BB@@@@B@@@B@@B@@@@B@@B@@@@BB@@@@@B@@B@@@@B@BB@@@B@@@@B@@@@@@@@BB@@@B@@@@A@@B@@@@@@@BBB@@B@@@@@@B@@@B@@@@@BB@@B@@@@B@@BB@B@@@@@@@BBB@@B@B@@@@@B@@@@BBB@DAF@DABAFCD@B@B@@@@B@BBBDDBB@B@@@B@B@D@D@B@BBD@B@B@@ABADA@AB@BB@@BA@@B@@@B@D@@AB@@@BB@@@B@DA@@FFFHDBDDBDBJ@@@@@@@@@@@B@@@@@@B@@@@@@A@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@BB@@@@@@@@@@B@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@AB@@@@@@@@@@AA@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@A@@@A@@@C@@@A@@@@@@BB@@@@@@@B@@@@@@@B@@B@BB@@@@B@@A@AB@@@@A@@B@@A@@B@B@@@B@@DF@@@@DF@B@B@@ABCFG@GAIAICIGCCMGCEBCBEDEFAJAFCBGCCCCKEI@KGOMCAE@ADAFMxEFCBE@CACAA@@BADCBABBBBBFBFDHFBDFLDBPFJTBLBHDDBFBFBF@DBDFBFA@@BCBEBABA@ABAA@@AC@@@AA@AA@@A@A@@AAAA@ABA@@@AAAAA@AAA@@@@@@B@B@BBDB@AB@@@D@D@D@DBFBB@BBBB@BADBB@DDF@BB@@BD@B@@@BA@ABC@AAC@CAEACAE@C@A@A@@BABCB@@@@@BBB@D@D@B@@@BA@A@@@ABAB@D@BABABBDB@@B@FBDBHBFDD@FDDFBLDBFHBFADCBWDGBC@ADAD@D@PBHDBHFFNVAF@FBDDBF@DFFBBB@D@BABAF@D@B@DBD@BB@BB@B@BDADBD@B@@B@B@B@BA@ABCBABAD@HAD@@ABCBCBCDCBA@@BA@@BBB@B@B@@@@@BADC@@D@BABA@ABA@@BCB@B@B@@@DD@BDBB@BAD@@AB@@@BB@BBB@BF@BA@@D@B@B@B@B@B@B@BBDDB@D@B@B@DBB@@@@B@BB@BBB@DABAD@F@B@B@BBBBBB@@BBB@B@DADCJEDCBA@A@CCGAA@@BABA@A@@@AA@BA@AA@@@@@A@A@C@@@AA@A@@@CAEAACACC@A@EBCDABAD@DBDBF@D@DANEHCDAHABAFCBAF@D@FB@@FAH@H@H@FBH@DDDD"],"encodeOffsets":[[117922,30223]]}},{"type":"Feature","id":"360426","properties":{"name":"德安县","cp":[115.762611,29.327474],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BBBB@B@BBD@@@@A@@B@D@@@B@B@B@BBH@B@B@B@BAB@DAB@B@D@D@BAB@BBF@B@B@B@B@B@B@@A@@@ADC@CBABA@@DA@A@A@A@@@C@ABA@@@@ECA@@A@A@AAAA@@@@EB@DEBG@@@AB@BADC@@@@BBDD@@@@LA@AB@FI@ABAB@BAF@D@HAB@BADCDCDCBA@A@A@A@@JAB@BIJA@AB@@A@@CA@A@@BE@AFE@@BI@@AA@@AAEE@@AAAA@A@@BAJAB@BAPMDA@AB@HAB@BAFIDCB@@AJA@@@ACA@@BGAG@A@C@CBO@A@CCI@C@@BABCHIBC@AB@@@FABANIDEB@@@@@BA@A@A@A@ABC@@BA@AAA@@GCA@@A@@@@BA@A@ABA@AAA@AEE@A@CAEAGAC@ABCBA@ABA@A@@@@BA@@B@@A@@@A@A@A@A@@AC@CAA@@A@@A@AAA@@@ABABA@A@@@@AAA@@A@ABA@@@@B@B@@A@@@@A@@@A@ADA@@@A@A@@@@@AAAA@A@AA@@AB@@AAA@A@A@@AA@@@A@@AAA@@@A@A@A@@AA@A@AA@AA@@@@@@@AAAAA@@AA@@@AAAA@@AA@A@@AA@@@@A@AAC@A@A@A@@BA@CB@BA@A@A@C@@@@@A@@A@A@AA@@A@AA@AAA@AAEA@@A@@@ABAF@BCF@BA@A@A@@@A@@A@@@@AAAAAA@@A@CAC@A@@@A@ABA@C@ABEBCBA@@BAA@@@@@@@A@AB@@AB@@@@@BA@@@@@A@@CAACC@@AA@@@@ABAB@@A@@@@@AA@@AA@@@A@@@A@AAAACECAAAACAA@@@@@@CBCAIACAEAGAEAIAEAEJEF@HAHCFIFGBEDICIBI@G@IDCHGJCDEFEHCBMBG@MCQ@MCO@ODK@MAKAKAEAI@QFGBMDMBEBGBE@E@E@QDI@GDEBEFI@KBEBE@KGM@GBAD@BANADCDIDMDMHIBIDIDGDMFEBEHCDAHELAHGJUVJN@D@B@FEJ@D@LFLBBFFDFDHHHDFDFHFJBHAFAFEHCHAFCF@BFBN@HBJ@HFD@B@@DBJFLFJHFFHJDJFJDHPNB@FDJDNBJBFBV@L@FBF@LBHBH@J@HAFCFCDEDCDEJCDAHBB@BH@FEHAH@HBHDDFDJDF@F@@@B@JDDB@@B@@@@A@AACCE@A@@@A@@@@B@B@DBBB@@D@BBB@B@B@BB@@B@@BDBB@BB@BB@@A@@B@D@FA@BF@B@B@@@B@B@BBB@BBB@B@@@@BB@@BB@BBBBB@@@@@B@B@B@@@BBB@@@@@BBD@B@B@FD@@DA@@BA@@B@BB@@DA@@@@B@D@B@@@DA@BB@BBB@D@DDBBBBD@BB@@DBB@BA@@B@B@BAB@@BB@B@"],"encodeOffsets":[[118450,30249]]}},{"type":"Feature","id":"360427","properties":{"name":"庐山市","cp":[116.043743,29.456169],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCDK@E@CAIO]KQEGEAOKWMEEIG@AECCEGEMCKCMCICICIEGCEGEGGIAGKSAEBIBKFMFIBIHEHGFENKHEDEHIBG@G@GMYIOKKCEAEAGAMGAKCEEOGKESKGCMKIEGEAEAIBGDEDILKLGJEJGPODGDE@EAGEUAG@AGGECGCEEGCAAEAC@CBIBEBGDE@KBA@EAAAAAGEKOEICEIIECQPA@BBDDB@@BBDDB@BBB@B@@@B@@@B@@@@@@@BAA@B@@@@@BA@AB@@@@@B@@A@ABAACAAAAA@@CG@A@A@A@@@A@@AB@@AHAB@BBBDFBFBD@B@@@BAB@BAB@B@BABA@@@@@@A@C@C@@AA@ABGAA@A@A@AA@@AACCA@AAA@AA@@A@@BA@BB@B@@@@@AA@CACAAAA@@@A@E@A@@GGA@CAECIAC@C@G@A@ABA@@BABADAB@@C@A@EC@AAA@A@A@A@@AAA@A@ABC@@@AAGBA@AB@BAD@@@BBB@@@@@@BF@@DDBBBB@@@@BB@@@@@B@@@B@B@@@BBB@DB@@BBBBDB@@B@@@@AB@B@@AB@@@B@@@@@BBBBB@@BB@@@BB@@@@B@@@@AB@@@@@BBB@BB@@@BA@@B@B@BBB@@@@@@@B@@A@@B@@@@@BBBB@BBBBBBDDDBDDD@BB@BB@@@@B@B@BB@@@@B@B@B@@@BBBB@BB@DF@@@BB@@BBB@B@BBD@BB@@BB@@DBB@B@@BB@B@B@B@B@@BB@BB@@BAB@@ABA@@B@@@B@B@@@@@@A@A@@@AAA@ABA@@AA@AAAAECA@AACA@@CA@A@@AA@@@A@AA@@AA@AAA@C@G@I@CAI@C@E@G@E@E@C@G@C@EBA@A@A@A@CBC@CBABCBC@CBC@EBA@@@AB@@@B@@@@@B@@@BCD@B@@@D@D@BAD@DABEDCDABC@A@A@ABA@@@@BBD@@DDBD@@@@DBHBB@B@@@BB@DDDFHBB@D@B@BAD@@ABA@A@@@A@A@ABCBADA@AB@B@B@D@B@D@B@D@BA@AB@@@B@B@D@F@LAF@D@B@B@@@BAB@B@@A@@BABABCBAB@@A@@@@BA@A@@@@@AB@B@BB@BB@@@@@BABAB@B@@BB@B@BB@@@BB@DBD@@@B@B@B@B@@@BA@@@AB@@@@@BAB@BABAD@BBDBHBF@D@BFF@BBB@BAB@B@BAB@@@@@BB@HD@@BB@BAB@@AD@B@B@B@BAB@@DB@@@@BABC@@B@@AB@@ABABAB@@@@A@A@C@A@@@A@AA@@ABAB@B@BA@CBC@@BA@@@CAAB@@ABA@@BABA@ABA@@B@@@BABAB@DC@@@@B@@@BAD@B@B@@@B@@AB@@AA@@@B@@@B@B@FDBBBBB@B@@@@A@@@A@@B@B@B@BBDHAB@F@B@B@@AB@B@@BJBFBF@@@@CBE@A@@@@@DDBB@@@@ABCD@@@@BB@@@BABAH@@CBC@@BA@@@BB@@ABA@@@A@@@AA@@A@@@@@@B@B@BB@@BBD@@BB@B@@ABA@@BA@@B@BA@@B@BB@@B@@@@B@B@@@ADAB@B@@BB@@DBB@DBBB@@BBBDBB@D@@DBFHB@B@BAB@B@@@@BDFBHAB@@C@@B@@@@BDBBL@B@B@BBHHBD@@BJ@@@D@BA@A@AB@@@B@BAB@@@DBBB@DB@@DD@B@@AB@@@@DDBDFDBBJ@D@BDFJB@@@@B@F@BFJHN@@BBDB@@@D@DBDDF@B@@@BA@AB@@BBA@B@@@BBB@B@B@DFFD@BBBBB@@B@DBBBDDB@@BB@@BB@@@B@D@@@@@FE@A@@CC@C@A@@@A@A@ADC@C@@@@B@FADALEDCB@BDDBB@@@BHBJ@FBDFH@BBBDBNHPJFD@@@B@@CBADABCB@B@@B@BB@@@B@@B@@@@AB@@@B@@@BBB@BADE@@B@B@DBB@B@B@DBB@BDBBFD@@FBB@@@AA@A@CB@@AD@BA@@FB@@@AB@B@@@ABAB@B@@@@BB@BBBDDBB@@BABC@@@@@A@@A@BABA@A@@B@@ABADCB@B@FADADAB@B@BA@@B@@AB@B@B@BABBB@BAB@@@@BDB@@B@@@@A@A@AB@BBB@B@@A@A@@@@BA@ABA@@BAB@BA@B@@@@B@@BB@@@B@B@D@F@D@B@B@B@B@B@@@DAB@B@@@B@@A@@BB@@@@@@B@@A@@B@B@@@B@@@@@@D@DDAB@@@@AB@D@DAB@B@@B@@B@BBD@FAB@@@BAB@@@B@B@B@@@BA@BDB@@@@BBdDPBDC@A"],"encodeOffsets":[[118927,30234]]}},{"type":"Feature","id":"360428","properties":{"name":"都昌县","cp":[116.205114,29.275105],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GAGEEEEGGICEEQ@G@EDEPOHCFCJAHAFCFCBEBEDGBG@IAGAG@GAECGACCCEGCEAE@EBCBGFEDCHEFEDEDCBE@GCCACGEECEECAAEEEAEAE@E@KBEFGHEBAB@B@B@@@@@B@DA@@@A@A@@@@BA@AB@BABAB@DA@@BA@A@AEA@@@ABA@A@A@C@ABA@AB@BAB@B@@AB@AC@@AA@A@AB@B@@ABA@@B@@@BABA@@A@@AB@@@@A@A@@BAB@@@@@@AB@@@B@BA@@B@@@@@@A@@B@B@BCBC@C@@BA@@@ABA@@CC@AA@@AC@CCAA@@@@AB@@A@A@@@AA@@@A@@BA@@B@DAB@@@BABA@I@CAE@@A@A@A@AB@@AB@B@@ABCB@@@@@AAAA@@AC@@A@@@A@AAAB@@C@@@@@C@@AAA@A@AA@@BA@@AAAA@AB@DADA@AAA@ABADA@@@@@A@A@AB@@A@ABABA@@@AFEBCBAB@BABADAD@BA@@@@AA@A@@@A@@@AB@B@@B@@BCAAB@B@@@@@BAB@@@@C@C@@AC@@AC@C@C@@B@@@BA@@BB@AAC@A@@@ADADCDABABCBAB@B@@@@A@@BAB@BADAB@BA@@BA@A@A@@@A@A@@BA@@@@CC@@B@@@B@@@BBB@@@BBBA@@@@BA@A@@@@@A@@@A@C@A@@A@@ABA@ABA@A@A@A@A@A@@@ABAD@B@B@@A@AAAB@ACAA@@BC@@D@@BBBB@B@DAB@D@NEVILEhWEAEEGE}m{SMUO×@WcS[LQMMACAAABABA@A@A@A@ECCA@AA@BC@C@C@A@CACCAACACAAAAAACCEEACACAACAAAAACCACEIACAAAAEGA@@AGAA@@ACAG@kE[Te^EDi`CDm^EB@@A@C@C@C@GCGACCCAAAAAAAAAEMAAAIAC@C@E@C@CBABGBGBCBEDE@ABEDIDE@ABE@I@EBC@ADI@C@A@A@I@CACAGAGAEAACCA@@@@@CBA@A@A@ECCAA@A@EB@BCAA@A@CAAAAAAC@ACAAAAACAC@@@A@@@@@ABAJAJ@F@B@BFL@B@B@B@@CD@B@B@F@D@B@B@BEDABABADABABA@ABA@G@GBC@Q@A@OBE@EBGBEBCBEBIFCBCDABEHCB@B@BCDCFEHEJEHADABGFGF@BAB@@@BBFBB@B@BB@FD@@@BDD@@@D@@@@DDFF@@FFZTDDB@FBDBDBJBFBFBTFHBJBB@BBFDDFHDDFLHDDDDDDBBJJLHBDDBDDBBBBBB@BBD@LCjOdAB@BCBGHGDEDGFC@ABMDSBW@eAMAG@KB§V]FKDSLSRMTSTENKXBNBHBFDFLLJPNZ@H@HAHGJCFGFMLEFGHGFAJEJENALAJBFLTBHHJFHFHHDJFJDJDNDLDNDHFDFFD@BJHFFXNPLFBFHLRP^BJ@D@FCLADB@@@H@@@BADCBABAB@HCD@@@B@BBBDBF@B@B@B@@B@B@@@BABA@@BG@@AA@@BADCB@@@B@@@BD@@@@B@BAJG@@@A@@@CAA@ADEB@D@@@DDBDBBBD@@@@B@BBDBB@B@B@BBLH@@BADADAF@B@@@FFBB@@@F@B@@BBBBDF@@@@B@@@DAB@@@B@@B@B@D@B@@H@@@BADCB@B@D@L@B@B@BABA@@@CA@BAFA@@@@BC@@BAD@@@B@@EAA@A@@@C@A@@CC@ACGBA@@JCFCB@B@B@FBB@BBHDB@B@B@BAFG@@B@B@DBB@BB@B@BBF@@@BB@B@B@@BFFBD@@@BABA@@@@@@BBB@BF@@A@C@AB@@@@@@B@@BBB@@@BABC@E@CAAC@AC@@@ABA@A@@BC@@@AA@@A@@@ABA@@B@@@BEB@@AFA@@@A@@@A@A@@B@@@@BBD@B@BAB@@AJ@@AB@@@H@@ABA@@BBB@BABAD@@@D@@B@@B@B@B@@@B@@@@B@B@@BAB@@@@DBB@BAD@@@B@@@BBAB@B@@@B@@@B@@DH@@@BA@CA@@A@A@@B@B@@ABA@AA@@@ACA@AA@@A@@@@E@ACCA@@A@A@@@A@@@A@@BAB@@@B@@@BBB@@@BAB@@C@A@@@AFAD@@@@@@BBDB@@BB@BBB@DBH@BB@B@@@BB@BABCDA@C@A@@@AD@@ABA@@BAB@BB@FHB@D@@@@@BD@D@@AB@@AH@B@BBBDD@@B@HB@@BBLFBBPDB@D@BABABEBIBCAA@AACAC@C@E@C@CACEE@@@ABAB@B@D@BB@@BBBFBDDDDDDBHBB@HAD@DCDAFIDCFADAFCDCBCDADAHAD@B@D@DBJDFFJBNJHHLNFHFBDBBBDDBHB@@BBB@BDPBBBBBBBB@@@B@D@@BBDDDHHDTFPDLDJBNBJDHBHBHBJ@J@FBADCLFDNHH@JALCFCDCFEBC@EBEBEBEBI"],"encodeOffsets":[[119317,30315]]}},{"type":"Feature","id":"360429","properties":{"name":"湖口县","cp":[116.244313,29.7263],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JQ@ECAGACAACDE@CFIFAF@F@F@BADC@CAGAEACAAEACA@CDEFGBE@E@ABE@GBEACCECE@GAC@C@EDEFE@E@EBCBE@CB@@@@@DIBE@CAGAEBEBEDEFCBCBE@G@OHKAE@E@C@EAC@C@GEAE@CBGBEDGDGBA@AA@@@A@A@@@@@AA@A@@@@AAA@A@@AAAA@@AAAA@@AAAAA@AAA@@@A@ACA@@A@A@AAAAC@A@@AAA@AA@@@@BA@@@AAAC@@A@@AA@@AAAA@A@A@@D@BA@A@@@AB@@AB@@A@@@A@@@AB@@@B@B@BAB@@@@@@@@B@@@@B@BB@@@C@@@ABA@@@AB@BAB@@@@@B@@B@@B@@@B@@@@@DB@@@@B@@@B@@A@@@@AA@@C@@@@A@ACA@@@A@AB@B@BA@A@@BADAHADADABA@@BA@@AA@@CA@AA@@A@@C@@A@A@AA@CAAACABABA@@BA@A@@@A@ADBNQ@A@A@A@@BAFA@@@CBED@B@@C@A@@AAAAAAAACO@AAA@AA@AGCCAACAEAEGKMGGMIIAEEICCAC@A@C@GBCBCBADCDEDCBEBCDEJCBCDC@GBA@GACACCCCACAEAA@@AAC@A@A@AB@B@@FFBD@D@D@F@DBDBD@BBBADAJAFABABC@A@OCAAKEAA@@GAA@@@CCAA@A@ABG@@BA@@@CAC@@@@C@A@EGA@@ABA@AB@BA@@BC@@B@D@B@DCBA@AAA@@A@A@@AAG@CAA@AAA@@CAAA@@@@@@BCBE@@B@D@@@BA@A@@AA@A@@@A@@BA@AB@@@B@@@B@B@@@DBBDF@@@@@@BB@@BDB@B@@BBB@BA@@@A@AB@B@@@DBB@@A@@CG@@@A@@@A@@@ABAAA@@A@@@C@ABA@CA@@@@BA@AA@A@@@@@@A@@@A@A@AA@@@@C@@BCBA@AAA@AB@BA@@@G@@BA@@BI@@BA@A@AAC@A@@A@@@@B@B@@@B@@EB@BA@AF@@A@@@AB@B@@@BB@@B@@AD@@@BAB@B@@BDD@BB@D@FADAB@@A@AA@@@A@@@@A@@B@D@BE@@AAA@A@@@@B@BA@A@@ACEE@AA@A@A@@A@@AE@A@AAAA@CAA@A@@@EHABA@A@A@GCAAA@EAA@A@A@EDID@@ABDH@BDD@@@B@D@@@BBB@FA@@@C@AB@@AD@@@@EBABB@@D@@ABABA@A@K@C@A@A@CDAB@@G@@@@A@C@A@AA@@@A@CB@@A@@@@@CEAAAA@@@A@E@@AAEE@@A@E@CBCBAB@@KGAAA@A@A@CAAAA@@@@@ACAAACCC@@C@A@CF@BBB@D@@@B@@IHABA@@@@@AC@@A@@@A@CDAB@@BB@@AH@@ABAB@@A@A@@@@A@A@AAEACAAA@@@C@GDA@ABABCDAB@@G@@@A@AFAHARAPKbCNAF@PBPBHDDBDNVLNJTVtLHLNNZZ|NfFLFJJJfbHD`ZHFNLHHTFTHPJLFPLJFJHHHNNj`NFTJZ"],"encodeOffsets":[[119186,30573]]}},{"type":"Feature","id":"360430","properties":{"name":"彭泽县","cp":[116.55584,29.898865],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@LOHAJBD@DCDEBGBE@CDCDADCLBDABGFMFIFIDGDCBABI@ABA@@B@D@DBFBHDJDHDHDF@D@BC@ECCAC@A@ABA@@@A@A@@BC@C@AAABC@AA@AA@C@@@A@A@@@AAA@@@@DA@@@AAA@C@A@ABA@A@A@A@A@A@A@AB@DGB@BAB@@@B@BB@B@BCB@B@B@D@DBF@@@@H@B@D@DAB@@@BBDBB@@@FDFBFFHDDBJBLGRIJEDEDCDCBCDCBEDK@GAICGCECEAG@G@GEQEICKCMGKIIGGEEEIEEEGIIIEGGIIGCIGCECEKOEMAECCEGEGKEGCEEECGEECKAEBCBCDEFCDMBG@KIEEGGCKACAGCIKIKAIEECAEIEACEGIOECGCKCEAECACCGEKEICGCE@CCCAGEEIACAGACACC@EBGDCT@NDHEFE@ABA@GAGEEECUQEEGECGEGAGBGFEHCFCJEHCFEHEFCFEFEBGDGEEGCEAGDGDGDGBKBCAEAEIGMEKEEECUGGCMCIAGAIAKBSDIFGFEFADCHCFEFGDI@GBI@EBIDIDGBGBG@CBEAAJAFAFAF@FADEFCDEDKDIBG@MGECDKBCEAI@I@GAGAGAICMAIAKCOCSEGCCGCCAA@@A@C@AF@D@@EBAB@@@B@B@BMRCA@B@B@@@BAB@@ABABDBBBDBB@@B@B@BD@@@@BB@@BDB@@BB@@AB@@ABCBCBGBCBAB@@@BABA@A@@B@B@@DB@B@B@@D@@@BB@@@@@BA@@@A@@@@@CA@@@@A@@@A@@@@AA@@@@@A@ABA@@B@@AB@B@@@D@@AAA@@@@@@A@@@@@@A@ABA@A@@@A@@B@@@B@@@BA@@BA@@B@@@BABC@@@@B@BBBBB@@BB@@@BD@BB@B@@AB@@@@BBB@BB@@@BBDBB@B@B@BB@BDB@@@B@BBB@BBBB@@BBBB@@BBBB@@@BBB@B@@B@B@@B@@@@@B@B@@BBB@HAHCFCHADAF@FB@H@DBD@F@D@FBFGL@P@HAFADEDCFAFAFBFBH@DAFCJ@@@@A@@DAFAD@F@FEFCF@F@DBD@HDFDFBDAF@HAF@B@FAFEHCF@DDBFBBBBDBFBH@DCDABE@E@E@EBEJ@DCFBDDBHBDB@FIRvXfTJDXP\\RLBNBP@vAXBRBNFLHJHN^LtLATD`L`P`BBT\\PNNHTDnHR@TBJAPCXG\\ORGLELCLARBZF"],["@@@@@@A@@@@AAA@@@@A@@B@J@@ABAB@@AB@B@@@B@@@@@@AD@B@@@B@@B@B@BBB@B@@C@A@@@A@@@@@@@AB@@@@@@A@A@@B@@A@A@ABAAABAAA"],["@@@@BBD@@@BAB@D@DBB@@A@ABC@@@C@ACC@AA@GDAB@@@@@ABA@@@@A@C@A@AA@@@@AB@@@BB@@BB@@@AB@BBB@@@D@@@B"]],"encodeOffsets":[[[119550,30779]],[[119507,30410]],[[119508,30410]]]}},{"type":"Feature","id":"360481","properties":{"name":"瑞昌市","cp":[115.669081,29.676599],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BSBC@CBA@@@ABA@@@C@A@A@AB@B@BAB@@@@@AC@@BA@ABA@@@@@@BA@ABABE@@DCDCHEBABA@A@A@AAA@A@AB@@ABAFCDA@@FG@AFCHGDATMDAB@FCBAD@BABADEDEBE@C@@@CAACCAAECAAEE@@ACA@@AAAA@@A@C@@@ACAAACEAAA@@EBA@@D@B@B@DBDADA@@@C@@DA@@@@@A@@AAA@@AA@B@BABAB@BA@@CA@@AAA@CB@@@@@@AA@@@BA@AA@@@ABA@AB@@@@@AA@@AA@@@C@A@A@A@ACC@@AA@@@@@A@@@AA@@A@@BAB@@A@@B@@@B@@@B@@AB@BABA@@@@@AB@B@@@@@B@B@B@@@B@@@BCBE@@DAB@DBB@B@BBB@BA@BD@B@D@JBD@B@B@@@@AB@BADB@@B@D@@@B@F@DBD@HBBBB@@@BBFFB@BBLH@@B@FA@@@AAAEE@AA@BADIBC@A@C@@AA@@@@EF@@C@@@C@GBC@A@EA@@CACC@A@@@@@AB@L@FAB@@@@AAC@AE@@@A@AAAA@@CAA@A@AA@@AAA@A@A@A@@@A@CAC@@@ABA@ABA@A@C@@AA@A@CAC@CAA@@@@A@@CB@@@D@@@HG@@@AEAAAA@AA@@@A@AACA@A@@@C@@A@@@AB@@AB@BA@C@A@C@ECCA@AAA@@@ABC@@AA@@@ACA@@A@A@@@@@@B@BBH@B@@@BCBA@A@AA@AAC@AAAA@A@AA@@@AAEAA@@B@@AB@DB@@@A@A@CB@BAB@@A@@BA@A@A@AA@A@A@@@ABCAABA@CAE@ABA@@ACA@@A@AADCAAA@AA@AA@BAAAA@AAA@@@A@A@AA@@A@AA@@@BA@A@@@@@@ADA@@@A@@BCBAB@@@A@AA@@A@A@A@@@AB@@@@AB@@@BAB@B@B@DABA@AB@@@@AA@@@AA@AA@A@AAA@A@@A@ABA@CC@@@ADABC@@@@A@A@C@@@@A@@@C@@DA@@@AA@@AA@A@A@A@AB@@ABAD@@@@EAA@@BAAA@@F@@C@A@@@AAA@@AAA@A@@@@A@AA@@AB@@AAA@A@@@AA@AA@B@@ABA@@@A@@@A@A@@@ABA@@AAA@@A@@BA@AAA@@BABAFADAB@BB@@B@@B@@@BBADC@@@ADCB@@A@A@ABABABA@@B@BAB@@AB@@A@@B@@@DCBABCB@BA@CBA@@DAD@@A@A@A@A@@@A@A@@@A@@B@B@@ABA@@@A@@AC@@BA@AB@@ABC@C@@B@B@@@@AB@DCB@DAB@BAB@@CBA@@AAEAA@A@@A@@@AB@@AB@@@B@@@BABCB@@C@@B@B@BABA@A@@@AACA@@A@@@CA@A@@AA@ABA@A@@@ABA@CA@@AAC@AAAACCC@A@AAA@@ACB@@A@C@A@@@@@CB@@AAA@@@AB@@CB@@ECA@A@C@AA@@@@A@AA@@A@A@A@@@@@A@AAAAA@@AA@@A@@A@A@AAA@AAA@A@@@A@A@E@@AEBC@A@@@@BA@@AAAA@CA@AA@@@AAA@A@A@AAC@@@AACAA@A@@@@@@B@@@BDFBD@B@B@@A@@@CAICA@@@E@E@ICECCCAG@GBGFG@EAGA@GACBIDCFCDCFEDEDGBI@G@GAKAE@EAK@U@EAIAMAICECA@OMCGEICIGIEEIGKEIECA@@@AEC@GAI@GAMAEE@EDGBGDEFEBGBIAGECECEGGCGCEEEAAEK@K@CFI@E@A@CIMGBCBEBEBCBIACACAGAC@EBCDABCDCDEDG@E@E@CAC@IFEDCF@FBF@FBH@FDF@F@DBJBH@F@FBF@FAJ@HADCFEFGBQ@C@@DBRBFBBD@DBB@BB@JBBFD@@AJCDCDABEBGBGAGAIAIAC@GAICCAK@G@Q@OBCAIGEAGCCAEACCCCCECECACAEBCBCBEBCDCBADCFCDGFWJIFIFKJGH@JEJCJBHAH@R@JBHBJFJ@BA@@B@F@@@BA@ADAB@@@@@B@B@@@B@@@@@@@@DB@@B@B@@B@@@@@B@@@BA@@B@B@B@BBB@@BBB@HD@@@@B@@@@B@@@@B@@@@@B@@@@@BA@@@@B@@BB@@@BBB@B@@@@@@FCFADGBEBEAEAEAGAG@E@A@@AEAAAAAC@@A@@A@@@@@@@A@@@@@A@A@ABCBCBCBA@A@CB@BABB@@BHBJBBBB@@B@@@@AB@@ABAB@B@BDF@BBBBBB@BBBBBB@B@BA@ABA@@@A@@B@@@D@BBD@B@B@BAD@B@B@BBBBBBB@BB@B@B@BBBBDDBH@D@FAFGDEBG@EAIBE@EBGFCDEFABAHAD@FBFBFDFBBFDFBL@HELGHIDIJIFEJCHAJ@J@H@JCFCH@JDHBJAP@NBL@RCLCHDJBNBLDNBJ@HAFABG@G@IEGAGBKFIHGFAH@@@B@FC@AB@@AB@B@@BFH@BDBB@BB@@B@D@@@BFFD@@BD@@DBB@@B@D@@@@D@B@DABA@@B@@BB@BA@@B@@@BBB@BBD@B@FFDHHDPFD@D@FADBBBBBB@BABA@@B@@@DB@@B@DADCBA@@BBDD@BBB@BAB@BFBDDNNFFBBJD@@DBDBFFB@BB@@BAD@B@@@@@HH@B@B@@HFJDHHDFDFDDBFHFHHJJFFDDDDHFJFJDFFHDHDHHFFDFCV@FELAHBHBJDHDHDF@FAHBFBFBJ@HFHHFBDHDFBD@DBFBPDDABA@@@@@@CF@BBB@B@F@@BB@@@@@B@@BB@B@@@BDJ@BB@F@JAF@LANAPBN@L@JBL@LBL@N@P@LBL@N@JBJBdFFBLBNB"],"encodeOffsets":[[118431,30566]]}},{"type":"Feature","id":"360482","properties":{"name":"共青城市","cp":[115.805712,29.247884],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@BADABABA@AB@@@@ABA@A@@@A@A@CBE@K@E@C@A@A@@BAB@@A@C@A@C@A@C@A@ABAB@BCDABAB@B@@@B@B@BA@@BC@A@A@CAAEGCC@CAA@@A@A@GACA@@@@ACCC@@AC@A@@B@BAB@B@D@BADCFCBA@CBC@A@C@C@@@ADC@A@@@A@@@@@A@@BA@@B@FAD@DAD@DABADAD@DAB@B@B@B@FAD@H@D@F@F@H@F@D@J@DBJ@H@D@B@BBB@@BB@@B@B@@BB@@@BDB@@DBBBB@FDBBBBB@@BB@BAB@BB@@B@B@@@@@@@@A@A@@@AB@BA@@BA@AA@@AAA@@@A@A@A@AAA@@@AAA@CA@@AA@@AAC@A@AAA@AA@@A@@CEA@@AAAAA@@A@A@A@@@@@AAA@A@@@@@AAA@@ACCACCCACAAAA@AAAAA@@@@A@@@@BA@@@@@@@A@AAA@A@@@AB@@A@@AAA@A@@@@BA@@@@@A@@A@@A@@AA@@AAAA@A@@@@@A@@BA@@@ABA@@@@@AA@ACAA@AA@@CAA@A@@@A@A@@@A@@@@AA@@@@@@A@@@@@A@@@ABA@A@A@@@A@@@CBAB@@ABC@@@C@A@A@@B@@@B@@@B@BABA@@BAAA@C@A@A@ABABABAFAB@@@B@D@D@F@BAB@BA@ABA@@@AACEAAAC@AAABA@A@@@A@AAAAAA@@@@@A@@BA@@BAB@@@@@@AAA@@@@A@A@@BABAB@B@B@DAB@BA@@@A@@@AAAA@A@CAAA@@@A@A@@@@BA@ABA@@@A@@@AB@BA@A@@@A@@CACCAACA@@A@A@AAC@AAAAA@EAO@C@A@AB@BABAB@@A@AB@@AB@B@BA@@BA@A@ABEBCBABCBAB@BABABA@ABAB@@@B@B@B@B@@@B@@@@AB@@@B@@AB@@@B@B@@@BA@A@@@CAA@EAC@EAA@@@AB@@A@@B@B@B@DAB@B@B@B@@@BABAB@@ABA@C@@@AB@@AB@@ADA@@B@B@@ABAB@@A@ABADABCD@@ABA@ABABCDABABAD@@@D@D@B@B@BBDBBBB@BBBBBBB@B@B@@BBBB@@@BBB@DBD@B@BBB@B@@@B@@@B@@AB@@A@AB@@@B@@@B@@BB@@AB@BCBABAD@BA@@B@B@B@@AB@@@BAB@B@D@B@@@B@@AB@@BB@@BDB@@B@@@@@@AB@@A@C@A@AAA@AAA@@BA@@@AB@@A@A@@B@@@BAB@@@BA@A@C@AAC@A@@@ABA@@B@@AB@@@@A@@@@B@@@@@@@@@@BBBDBBDBDFBBBBB@@@B@@@B@@BB@@B@@@@@BA@AB@B@@B@@BD@BDDB@@@B@@@@AB@@@@A@@BA@@B@B@@@@@@BB@AB@DAFABAD@B@BAB@@@B@D@DBB@@@BBBBBB@@@@@BB@@@B@B@B@@ADE@ABEBA@@B@@@FBBBB@BBB@@B@BB@@B@B@BB@@@@@D@B@B@B@@ADAB@@AB@B@B@D@BBB@@@@@BB@@@BBB@@BBBB@@B@@BB@BBBB@@@@@@B@@BBBB@B@@BB@B@B@@@B@BB@@@B@@BB@@@B@BBB@BA@@BB@@B@BBBBB@@@@B@B@@@B@BCB@@@B@@@"],"encodeOffsets":[[118595,30022]]}}],"UTF8Encoding":true});}));