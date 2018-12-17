(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('连云港市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320703","properties":{"name":"连云区","cp":[119.366487,34.739529],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@@B@B@@@@B@@@@@B@@@@A@@@@@AA@@A@@A@@B"],["@@ZPKhUXIN@D@D@F@HAD@BBBDBDD@B@FBDBD@F@HANCFADA@A@A@C@ABABAB@^DD\\BE\\@B@BB@B@B@D@DABAFCB@B@@@B@B@B@B@DA@ABEBEBCBAB@DAF@D@L@D@B@B@BA@@@ABC@A@@D@BAF@FALCDAHABCB@@A@A@@AA@@AAA@ABCBA@A@A@@@BAAACAAAA@@@@AAA@@@AA@A@A@CAEBGBC@A@A@AAA@A@@@A@ABA@MLUHK@EQHQBGBC@AA@@@A@ABABADADEDAB@F@PAF@`@N@N@D@zCvWfMLALDRFFAAOCEIEIAAECECA_@AAAC@C@E@CBC@A@C@AAAAAE@A@CBADABA@A@C@A@AACA@CACAKACKK@C@C@AFCt[HClWRMRGTB^EJKFS\\atYZMjUJCaWQaUKIIOGOACCAOEUICCEIACC@A@ABEFABC@A@CAIGEAGEC@A@IDA@I@CBE@CBG@E@ABCACAEAE@E@GHGFMHEBE@CAGJ@LCH@BO@A@@@ATZBB@D@VBGTGHIJGHA@]D[JIDIDCBEDOLMLKJONADGHAFABH^ABADKPMRCDQLKJCBGDWKILKLLHUTWQHIRMGECDEJKD@@@@@@BFABEHCCEAEACACAA@A@A@ABAB@@A@EAC@A@@@A@EFGFCDA@@B@BA@CBA@@@AA@CAA@A@C@AEIA@A@@@G@G@EA@@CBA@A@QEAACC@@@@CBGHGHC@SLULCBE@CBCBGAG@ABE@IIC@EAM@C@UICAAEAICEE@IDSHMPAD@BDBRHBB@DGDCDBFPXNRLTBHBHARBHBFPfHFHFHBJ@H@NAZIREDHDL"],["@@B@@@@AA@A@@@@B@@@@B@@@"]],"encodeOffsets":[[[122360,35525]],[[122136,35593]],[[122250,35591]]]}},{"type":"Feature","id":"320722","properties":{"name":"东海县","cp":[118.766489,34.522859],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@KBADAN@B@BA@{PAB[BAB@BABABGBUIBQDE@CBEDG_AAGCCEAGAGBCDCH@BC@C@AECGCECAC@C@ADABMACmGBIDCDCDCBE@IBCDABABCBC@YAcDAFAFAB@BCDAFAR@PFL@FFB@H@PBBJBHFJFFFDHBFDBFDLDHFFJFHFFFBFDf@RnFHBFAJAFCFCBADAFACAG@CCC@G@EBCA@EbA@A@C@A@ACEAGCE@A@ABGBA@GBG@C@ACAC@EAICEA@G@CAAEEAABABCH@FC@IBO@@A]AKAGEIAEAE@CBABCBC@EAECCC@EAEBC@E@CBE@CaACAAA@A@@@@@@@A@@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@A@@A@@@@@A@@@@@@@AA@@@@A@@@@@@@A@@@@AA@@@@@@@A@@@@@AA@@A@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@EO@A@@@A@@@A@@@A@@@A@@@A@@@A@@@@BA@A@@@@@@@A@@@A@@@A@@@@A@@AA@@@@@A@@@@@A@@A@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@@A@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@A@@A@@A@@@A@@@A@@@@@@A@@@@@A@@AA@@@@@A@@A@A@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@@AB@@@@A@@@AB@@@@A@@@@B@@@@A@@B@@BB@@@@@B@@B@@B@@@B@@B@@B@@@@A@@@A@@@A@@A@@A@A@@@A@@AA@@@@@A@@@A@@@AA@@A@@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@A@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@AA@A@@@@@A@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@A@@A@@@@@@AA@@@@A@@@BA@@B@@@@AB@@@@@@@BAEAIGECCCCCAAAAACACAAAC@CMIGEAE@G@G@CC@CACBE@AD@F@JBJ@F@@@@@BA@@@@B@@@@@B@@A@@@@B@@A@@@@B@@A@@@@BA@@@@BA@@@@B@@A@@B@@@@A@@@@B@@A@@@@B@@A@@@@B@@@@IJGGGGC@C@CDAFIGC@A@ADCBA@ACCICAAE_@G@E@I@E@E@GAG@CAIBQBMBE@ABEACAGCEEEE@AGBA@@@A@@@A@@@A@@@A@@@@@A@@@@@A@@@A@@@AA@@@@AA@@@@@@@A@@@A@@@@@A@@A@@A@@@A@@@@@A@@@A@@A@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@AB@@@@A@@@A@@A@@A@@@@@@@@@A@@@@@@@@AA@@@@@@AA@@@@A@@@@@A@@A@@A@@@@@@@AA@@@@@A@@A@@@@A@@@@AA@@@@@AA@@A@@@@AA@@@A@@A@@A@@AA@@@A@@A@@A@@@AA@@@@@@AA@@@@A@@@@A@@A@@A@@@@AA@@@@@AA@@@@@AA@@@@A@@@@@A@@@@@@AA@@@@A@@AA@@@@@AA@@@@@@AA@@@@@A@@A@@AA@@@@@A@@@A@A@@@A@@@A@@@A@@@A@@@@@AA@@A@@@A@@@AA@@A@@@@@AAABA@@@A@@@@@A@A@@@@@@@A@@B@@A@@@@@A@@@@BA@@@@@A@@@@BA@@@@@@@A@@B@@A@@@@@@@@B@@@B@@@@@@@BB@@B@@B@@B@@B@@B@@@B@@A@@B@@@@AB@@@@A@@B@@A@@@@BA@@@AB@@@@AB@@@@AB@@@@A@@B@@A@@B@@A@@@AB@@@@AB@@@@@@A@@AA@@@@@AA@@@@@@A@@A@@@@A@@@@@AA@@@@@@@@A@@A@@A@@@@@@@A@@A@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@B@@@@@B@@@B@@@@AB@@@B@@A@@@A@@B@@A@@@@@A@@@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@B@@@@A@@@@@A@@@@@AB@@@@A@@B@@@@A@@BA@@@@@A@@BA@@@@@A@@@@@A@@@A@@@@BA@@@A@@B@@@@@@@B@@A@@@@B@@@@@@A@@B@@@@A@@B@@@@A@@@@BA@@@@@A@@B@@A@@@A@@@@@AB@@A@@@@@@@A@@@@BA@@@@@A@@@@@A@@BA@@@A@@@A@@@@@A@@@@@A@A@@@AA@@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@@A@@@@@@@AB@@@@A@@@@@@@A@@@@@A@@@@@@@A@@A@@@A@@@@@A@@BA@@@A@@@@@A@@@AB@@A@@@A@@@AB@@A@@@A@@@@BA@@@AB@@A@@@@BA@@@@@@@AB@@@@AB@@@@AB@@@@A@@@@@@BA@@@@@@@AB@@A@@B@@A@@@@@@B@@A@@@@@@BA@@@@@@@@BA@@@A@@@@B@@A@@@@@AB@@@@A@@B@@A@@@@BA@@@@@AB@@@B@@@@AB@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@BB@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@DADAB@FFDFAHBF@HFDDFBDDDBBFDBDDDF@D@HAD@DADADADAD@BE@I@CBE@AH@DCBI@@@@JEB@H@F@@EBQA@@IBKBEBEBC@IDEBC@CAE@E@CC@@A@@@@@@ACK@@A@A@@AA@@A@A@CACACCI@CAC@@@@AA@@E@EC@@G@@@AD@DADAB@@CBA@CBA@ABGD@@EBE@EDGDODG@E@A@@@CDGFA@C@@@CACAA@A@EAMGAAAAA@C@CCIGMI@@@GOGQGMC@@G@EFEB@@CBC@EAG@IBKDC@@BAD@@EHGDEBCAEECB@@@LAFA@EFABAD@@EDDFDFBDBD@H@DDFAFBD@HBD@DBFBFBDBDBDDFFDDBJFDFBDL^@D@D@D@DBF@H@DAF@DAFADAFCFAFAFAFAFAFAFAF@D@FAF@FAFCZ@H@DBDDH@BBFHT@NFHDBDDDCFCDAFABABABAB@D@D@BBFBDHBDD@D@FCH@B@@BBNALEFEDEBAB@D@DABAHADAB@@@BABBB@FBB@B@B@D@@@BB@BBBB@@@B@@BBBB@B@@BB@@FAJAH@HCJ@FBH@BBHFDFBFJLDDFBFBFBD@D@@DBJBPCJDBF@JAN@D@BABABCDADAH@NBHDJFFBLBF@HBF@DAD@D@HBDBD@BA@@DIDYBABALATEJCLCF@FBHDLHDBHBD@F@DAFANKLMFCBAD@F@H@FDFDPNLDNFH@R@N@H@JBJFDDNHPDB@@DBFDDFDVP@@@BILKJIHGFC@C@A@MEEAG@G@C@EDCBCFEFABA@EAG@C@ABABA@@F@BBDBB@@@BABCB@@@BDF@B@@ADDBJDHDD@F@D@DABAB@B@BDBFBJ@DABABCDEDKBAB@BBBB@DBB@DBBBDBD@B@D@BAJAB@HAF@HBB@FFDBB@J@@@B@BBAK@M@M@IAIBED@D@D@THF@`DD@XBH@D@RAR@H@F@HANCNCHCFADCHEHIHIDEBEBCDCHEHCNGTKDARILGVOHCPIFEFAJATGD@D@F@B@JBPF"],"encodeOffsets":[[121856,35526]]}},{"type":"Feature","id":"320706","properties":{"name":"海州区","cp":[119.179793,34.601584],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@EKs@CFCFEJENKNIDABAHABAB@NCNADA@HFHFD@@DAKSFEHCBID@@AF@@AJA@@AGAE@A@@VCRC\\GDCFE@@AE]@C@_BYAY@_AUAaAOAK@M@MA]@MEA@@@AAG@AAO@ADUAG@AAABGCAADGBCBA@A@@A@CCE@@@CDCDIGGIKKAAmDIBC@AK@@G@IAO@K@E@@BE@I@G@IBADAB@B@DABIFIDEBODCBCAGACAIEECA@BDDbF@DAF@D@FAFBD@DDBF@FADADAB@DBFBFFJBHBLB^@@AP@JEDG@ADABBBFFBB@D@HFBJDFBD@DB@B@DAH@HABAH@B@BDFBHDF@B@B@D@BaB@FDBFAH@D@DDH@DBEBCBABEDEDIBEBGAmE@QCeAEEEGEIEEECGCKAEECGAECEEEIAGAIOAG@A@EEK@OEQ@EBCBADA@EBEBCBBd@ZADADABCBAD@JAFCDCDCDAJnHBDANCB@B@DBDFDHDFD@B@DADG@CDADBHBHDFHDBBH`FCDAF@RCJAAVAHABABA@ABA\\OB@|ABA@M@CBAB@L^LPBNAbIHCHERSFAHCFAd@N@JBvNHBF@bAJAH@\\DF@D@FCBA@@FLDBD@F@DBBBHHBFDLBBHPBFBFADCDEDCDAFBHBFDH@FBJBFFFJBDBFDLR@D@FGH@F@DDJFJ\\VNGJAZHRA\\KYCKCGQFYJMBG@I@GAGEGEOeAEAGBQAGAGKSMQOWAEDCHC@CAAQGCA@ABCNOTGJCF@DFBJBFDBVJD@N@FBD@JJF@BAH@HBDADAF@DAVKTKD@HGHGDA@@@@DDBBRFB@B@DA@@FBH@H@@@B@B@FJ@B@D@BBB@DBB@@B@DAB@@A@AB@DCHEFEB@@@B@D@FBB@@@BABAB@B@B@DBDBFBFBDDFGBAAE@@@@@@LCFIDCHFQNGJXRVSKGLKJKXLHCDALIEAaQ[OUKAA@EeUR_IEGAE@IHCBIBIMa]CAEA_A"],"encodeOffsets":[[122166,35392]]}},{"type":"Feature","id":"320723","properties":{"name":"灌云县","cp":[119.255741,34.298436],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@BBDA@@B@@A@A@A@@AACAA@CB@B@D@@BBB@"],["@@AEJGCCka_SOICCGECCGCECAA@@K@GBOBK@G@ABAAA@AAAACACC@@AA@@@ADCBACAAAAACAA@@AECCACA@@AAC@C@A@A@A@@BA@A@AAC@EC@A@@AABADEBA@AAACAC@A@A@A@EACAGAGACAA@AAAACAA@ECAAKEKCCC@@ACAAOEKEGCECGEACACBA@AGCAAE@A@A@ABC@CA@@@A@AAAGEMEIEAAA@AG@AKGICMCMCC@@@ACCI@AA@SIKEOCGAA@@WKAG@E@OBGBC@A@E@GAKAG@C@AACACACAAAC@C@A@A@A@A@C@CAEAGAG@C@E@A@GBIBC@ABA@C@A@C@CAKAMAKA]EKAGAC@C@A@C@IBE@C@C@C@EAE@GAEAGAIAGCC@EAGAGAIAGCCAEAC@KCGCKCC@C@GA[AA@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@@@AA@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@AA@@@@@@A@@@A@@@@@A@@AA@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@A@@@A@@@@@A@@AA@@@@@A@A@@@@@A@@@AA@@@@A@@@A@@@A@@@@@AA@@A@@@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@AA@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@@@@@A@@@A@@@@@A@@@@@A@@A@@A@@@A@@@A@@@A@@AA@@@A@A@@@@B@@@@@B@@@B@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@A@@@@B@@@@@@@B@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@BA@@@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@BA@@@A@@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@BA@@@@@A@@@@@AB@@@@@@@B@@@@A@@B@@@@@@@B@@B@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@A@@@A@@B@@@@@@@@@B@@@@@B@@@@@@@B@@A@@@A@A@@@A@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@BB@@@@@@B@@@@@@@@@B@@@@A@@@A@@@A@@@AB@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@B@@A@@@A@A@@@A@@@A@@BA@@@@@A@@@@B@@@@AB@@@@@B@@@@@BB@@@@B@@@@@B@@@BB@@@@B@@@B@@@@@B@@B@@B@@@@@BDD@B@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@BB@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@@BB@@@@B@@@@@@@@@B@@@@@B@@@@@@BB@@@@@@@B@@@@@@@B@@@@@@@B@@B@@@@B@@@@@@@B@@@@@B@@@B@@BB@@@@@B@@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@BA@@@@B@@@BA@@@@B@@A@@@@B@@A@@B@@A@@@@B@@A@@@@B@@AB@@@B@@@@@@AB@@@@@B@@@B@@@@@BA@@B@@@@@B@@@@@B@@A@@B@@@@@B@@@@@B@@@@@@@B@@B@@@@B@@@B@@@@@@@B@@BB@@@@@@@B@@@B@@@@@BB@@@@B@@@@@@A@@@@@A@@@@@@@A@@@@AA@@@A@@@A@@@AA@@@@A@A@@@A@@AA@@@@@@@A@@@@@A@@A@@@@A@@B@@@@@B@@@@@B@@@@A@@B@@@@@B@@@@@B@@@@@B@@@@@BA@@@@@@B@@@@@B@@@@@@@BA@@B@@@@@B@@@B@@A@@@@B@@@B@@@@@BA@@B@@@@@B@@@@@B@@@B@@@B@@A@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@BA@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@B@@@@@B@@BB@@@B@@@@@B@@@@@B@@@B@@@@@B@@B@@B@@@B@@@@@@@BB@@B@@@@@B@@@BB@@@@B@@@B@@B@@@@B@@@@@@@BB@@@@B@@@@@@@BB@@@@@@@@B@@@@@@BB@@@@@B@@@@@@BB@@@@@@@B@@@@@@@B@@@@@B@@@@AB@@@@@B@@@@@@@B@@A@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@PB^@DPDLwE@F@@@B@@@@@B@@@B@@@B@@@B@@@@@B@@@@@B@@@BB@@B@@@@@B@@@@@@BB@@@@@B@@@@@@@B@@B@@B@@@@@@@B@@@@@BB@@@B@@@B@@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@@B@@@@@@@B@B@BBB@FDJFDBHBDBDAPCFAJCJEBA@C@ABABCJAH@J@F@@AF@L@P@JBH@@@BLD@JAnCBBLLHJJHDCDC@@F@DDB@@@@BABADCHBBHDBABBH@VBBCP@BBH@BB@@B@NF^@NBN@L@PBbBVB`BZ@ZB`AD@^@BF@@EFCD[HQDUD@@@BBFBH@@IB@BE@@BC@AJGDEFLTCB@@ECEG@GCBMBMDA@ABGBABCBMJMLIFEFED@DLt@F`BFBDBb^JNJADAJGF@HBJFQ`fV@FBBVL\\PbRFBRKDCNQLOBCBAG]BABEHGBCPMLINKPKFCDAJCJC\\I^CB@HGJIHGHSUAC@A@YABS@@B@P@@ADG@KHIDBF@FANGHEHGF@F@FBDBDBBAF@H@DAF@DAJ@B@JCB@D@HFFBJHDBB@D@BAFEBAB@D@BDFJDDVJPFDBBDHPJPLJbVXRVG[aHGvuECCACAC@EAECGCBGECAG@@@K@ABCDKDI@A@@@@A@@@@@KGWQAAcY"]],"encodeOffsets":[[[122751,35359]],[[122633,35247]]]}},{"type":"Feature","id":"320707","properties":{"name":"赣榆区","cp":[119.128774,34.839154],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@CBA@AA@AAACAA@@@@BB@BDBBDB@@BB@@B@B@B@@@BA@@AA@AA@@@"],["@@CAGKMGSGYMGGAEQiIaIWEU@qFg@YCOGUKaDINGDIE[FKJGFMAIKIAEHKly[UEICI@C@EHG@E@CKQECCAIAEEAEAI@ECGAEAGBEDCFCDCBCAEAEGOAACKAEGGAACAE@C@CAEK@@ABEDC@E@[CG@IBaBE@GAuMIAM@c@EBGDEBQTGFGDaJMBOA]KOEIAA@E@C@C@SHIBEBEFOJGDUPKHQJCBSLMHGDGFCDADAFCFGJGJGFCDEBGDMDMDGBE@G@Q@QBC@G@WAC@_CE@SGC@C@C@AFBJ@J@N@NBLBFDHDH@H@FCF@B@DBDDBBDDDADCDQNEDCHBDDDH@FADA@@B@@@@@D@@@LBD@B@D@BADAF@F@BBBB@@DL@BAL@DBR@DBDBFBDBDDDFFDDBDBD@DBDXbhnDDDDHDDDDFANAXDR@NBHDJBNA\\@LAH@J@HBD@B@@@@@@@@DBDBH@^HZJJDHDFFBBDBF@LDH@DBBAFADEFEFCFAD@PDFBHBDBHBFBH@D@J@FBFBF@FAB@HDHFFBF@HAF@F@D@F@HAL@J@FAD@F@FBDAF@HBJ@DAHBFBHFDBD@F@D@F@FAF@F@J@H@H@LAH@D@FDBB@XBBBBD@DBFHL^DFBDDBBBF@F@HBHBHBJDFDJDHBH@N@HDJBR@FAHCFAH@H@FDDDBFFBFBDBDDDFDBF@FBD@BB@@BADA@@B@@@@@@@@@@@B@@@B@B@@AB@BAB@@@@@B@B@@AB@B@@@B@@@@A@@@@@@B@@@@AB@@@B@@AB@B@B@B@@@B@@@BA@@@@B@@@B@D@B@DAHBB@@@BA@@B@@@BABABAB@@@BA@@@A@@BA@@@AB@@A@C@A@ABCBABABAB@BAB@@A@ABCB@HaSCECAC@CRkFODGACWGABEN@BJF@BQvEDE@MA"]],"encodeOffsets":[[[122149,35705]],[[122136,35912]]]}},{"type":"Feature","id":"320724","properties":{"name":"灌南县","cp":[119.352331,34.092553],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BADOBOA@@AAEISCECI@A@EDEBCNMBADGFEBE@A@CAA@@AAAAECEAA@MACAGCEECGAA@AAEGGA@GAICGA@@AAEGAC@EBC@ABGBC@AAC@AAC@@ICA@AACAEE@IACAECCEACAC@CACAIG@@AAEIA@CCCCIEAA@@MICAGCIGIEGEOICAAAMGAAA@OGGAKCAAA@MCIECASMCCKGIEK@GEUOCCCAACC@KGIAGAA@I@A@A@EBCB@@ACCAIIEEEAEGEEQIAAECECEACAECKEB@@A@@@AB@@@@A@@@@BA@@@@@@@A@@@AB@@@@@@A@@@@@AB@@@@A@@@@B@@A@@@@@A@@BA@@@@@@B@@@B@B@@@B@@@@@BB@@@@B@@@@@B@@BB@@@@@B@@@BB@@@@B@@@@@B@@B@@B@@@B@@@BB@@@@B@@@B@@@@BB@@@B@@@B@@@@A@@@@@A@@@@@A@@@@@AB@@@@A@@@A@@@@@A@@@@@AB@@A@@@@@@@A@@@@@@@A@@@@@@@@@AA@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@AB@@A@@@@@@@A@@@@BA@@@@@A@@BAA@@@A@@@A@@@A@@@A@@@@@A@@@@@@A@@@A@@@@@A@@@@@A@@@@@A@@B@@@@A@@@@@@@A@@@@@@A@@@A@@@@@A@@AA@@@A@@@A@@@@@A@@@AAB@@@@A@@@@BA@@@@@@@A@@B@@A@@@A@@B@@A@@@@@@BA@@@A@@@@@AB@@@@A@@@@B@@A@@@A@@B@@@@A@@@A@@B@@@@A@@@AB@@@@@@A@@B@@A@@@A@@@@BA@@@@@@@AB@@@@A@@@@BA@@@A@@@@@@BA@@@A@@B@@@@A@@@@BA@@@@B@@BB@@@B@@@@BB@@@B@@@@@@BB@@@@@B@@@@BB@@@B@@@@BB@@@@@B@@B@@B@@@@@B@@B@@B@@@B@@A@@@@@AB@@@@A@@@@BA@@@@@AB@@A@@@@@A@@B@@A@@@@@@@A@@@@BA@@@@@A@@@@@@BA@@@@@A@@@@@@@AB@@@@@B@@@B@@@@@B@@B@@B@@@@@B@@@BB@@@@B@@@@@BB@@@@B@@@@@B@@B@@@@@@B@@@@@@@BA@@@@BA@@@AB@@@@AB@@@@AB@@@@@BA@@@@B@@@@AB@@@@@@@BA@@B@@@@A@@B@@@B@@A@@@@B@@AB@@@@@BA@@@@BA@@B@@@@AB@@@@AB@@@@@@A@@A@@@@AA@@@@@@A@@@@A@@A@@@@@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@AA@@@@@@AA@@@@A@@@@A@@@@A@@A@@A@@@@@@AA@@@@@@AA@@@@AA@@@@AA@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@A@A@@@A@@@@@@@A@@@A@@@@@@@A@@@@@A@@@@@A@@@@@A@@A@@A@@A@@A@@@@AA@@@@AA@@@@AA@@@AA@@@@AA@@@@AA@@@@A@@A@@A@@@@A@@@@@AB@@A@@@AB@@@@A@@BA@@@@@A@@BA@@@A@@B@@A@@@AB@@@@A@@BA@@@A@@B@@A@@@AB@@@@A@@@AB@@A@@@@BA@@@A@@B@@A@@@AB@@@@A@@BA@@@A@@B@@A@@@A@@B@@A@@A@@@AA@@@@A@@@BA@@@@@A@@@A@@B@@A@@@@@A@@BA@@@@@A@@B@@A@@@A@@@@BA@@@A@@@@@@@@@AA@@@@A@@@@AA@@@@@@AA@@@@@@@AA@@@@A@@@@AA@@@@B@@A@@@@@AA@@@@@AA@@A@@@@@@AA@@@@@@@A@@@@B@@A@@B@@A@@B@@@@@BA@@B@@@@A@@B@@A@@@AB@@@@A@@B@@@@A@@B@@A@@@A@@@@@AA@@@@A@@@A@@@A@@@@@A@@@@@A@@@A@@@AA@@@@A@@@@@A@@@A@@@@@A@@@@AAB@@@@AB@@@@A@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@AB@@@@AB@@@BA@@@@@A@@@@BA@@@@@A@@@A@@@@@A@@BA@A@@@@@A@@@@@A@@@@@A@@@A@@B@@A@@@AA@@A@@@@@A@@@A@@A@@A@@@@@@@A@@@@A@@@@@@@A@@@@@A@@@AB@@@@A@@@AB@A@@A@@@@A@@@AA@@@@A@@@@@A@@@AA@@@@A@@@@@AA@@@@A@@A@@@A@@@AA@@@@A@@A@@A@@@@A@@@@AA@@@A@@@@@@@A@@@A@@@@@@@A@@@@@A@@A@@A@@@@@A@@@@@A@@@@@A@@@@@AA@@@@AA@@A@@A@@A@@@@@@AA@@@@@@@AA@@@@A@@@@@@AA@@@@@@@A@@AA@@AA@A@AA@@AAA@AAA@AAAAAAC@AAAAA@AA@@A@@@@@@AA@@@@@A@@@@@@AA@@@@@@@A@@A@@@@A@@@@@AA@@@@@@A@@@@@@AA@@@@@A@@@@@@AA@@@@@@@A@@@@A@@A@@@@@@@AA@@@@A@@@@@@@AA@@@@@@A@@@@AA@@@@@@@A@@@@A@@A@@@@@A@@A@@@@A@@@@@@@AA@@@@A@@@@@@@@AA@@@@@A@@@@@AA@@@@@@@@A@@A@@A@@@@@A@@A@@@@@@A@@@@@AA@@@@@@A@@@@@@AA@@@@@A@@@@B@@@@@B@@@B@@@@@B@@AB@@A@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@@AB@@@@@@@B@@A@@B@@@@@B@@@@@B@@@B@@@@@B@@@@AB@@@@@B@@@@@B@@@@@B@@@B@@@@@@@BA@@@@@@@@BB@@B@B@@@@AB@@@@@B@@A@@B@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@AA@@@A@@@A@@@@AAB@@@@@@A@@BA@@@@@A@@@@@@B@@A@@@@B@@@B@@A@@B@@@B@@@@@B@BBBBBB@@B@@@@AB@BAB@B@B@B@B@B@@CBABC@ABAB@@@DAB@@ABAB@BAB@B@B@BAD@@A@@B@@A@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@AA@@A@@@@@@A@@@A@@@@@A@@@@BAA@@@@@A@@@AA@@A@@@A@@@A@@@@@A@@@@@A@@@@@AB@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@AA@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@AA@@@A@@@A@@@A@@@A@@@A@@@@@A@A@@@A@@@@@A@@@AAA@@@A@@@A@@@A@@@A@@@@@A@@B@@A@@@@@A@@@@@A@@@AA@@@@@A@@AA@@@@@@A@@AA@@@A@@@A@@@AA@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@BA@@@@@A@@@@@A@@@A@@B@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@A@@@@BA@@@A@@@@@A@@@@@A@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@A@@@A@@@@BA@@@@@A@@@@@A@@@A@@@@@@@A@@@@@A@@@A@@@@@@@A@@@A@@@A@@@A@@@A@@@AB@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@@@@A@@@A@@A@@A@@@A@@@A@@@A@@@A@A@@@A@@BA@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@AB@@@@A@@B@@@B@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@@@A@@@@@@A@@A@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@AA@A@@@A@@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@@A@@@AB@@@@@BA@@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@@@@@A@@@@@A@A@@@@@AB@@@@@@@B@@@@@@@B@@@@B@@B@@@@@@@B@@@@@@@B@@@@@@@BA@@@@@@B@@@B@@A@@@AB@@@@A@@@A@@BA@@@@@@B@@@@@BA@@B@@@@AB@@@@@BA@@@@B@@A@@B@@A@@@@@@BA@@@@@A@@@@@A@@@@BA@@@@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@@B@@A@@@A@@@A@@@@@A@@@@BA@@@@B@@A@@@@@AB@@@@@BA@@@@@@BA@@@@@@B@@A@@@@B@@A@@B@@@@A@@B@@@@A@@B@@@@A@@B@@@@AB@@@@@@AB@@@@@@AB@@@@@@AB@@@@@BA@@@@@@BA@@@@@@BA@@@@B@@A@@@@B@@A@@@@B@@A@@B@@@@@B@@@@@B@@@@A@@B@@@@@@@B@@@@@@@BA@@@@@@B@@@@@B@@@@A@@B@@@@@@@BA@@@@@@@@B@@A@@@@B@@@@@@@BA@@@@@@B@@A@@@@BA@@@@@AB@@@@@@A@@@@@A@@@A@@@AB@@C@@@AB@@@@@@@B@@@@A@@@@B@@@@@@@BA@@@@@@B@@@@@@@BA@@@@@@@@B@@@@A@@B@@@@@@@BA@@@@BA@@@@@A@@B@@@@A@@@@B@@@@A@@B@@@@BB@@@@@BB@@@@@@BB@@@@BB@@@@@@BB@@@@BB@@@@@@BB@@@@B@@B@@B@@B@@@@BB@@@@B@@B@@@@B@@@@@@@B@@A@@B@@A@@B@@A@@@@B@@A@@@@B@@A@@B@@@B@@@@AB@@@@@B@@AB@@@@@B@@A@@B@@@@AB@@A@@@@@A@@B@@A@@@A@@BA@@@A@A@@@A@@B@@A@@@A@@@A@@@AB@@@@A@@@AB@@@@A@@@@B@@A@@B@@@B@@AB@@@@@B@@A@@@A@@A@@A@@A@@A@@AA@@@@AA@@@@AA@@@@AA@@@A@@@@@@BA@@@@@AB@@@@@@AB@@@@A@@@@B@@A@@B@@A@@@AB@@@@@@AB@@@@@@AB@@@@A@@B@@@@A@@B@@@@A@@@ADHDFDDBFFHH@B@@@@AB@@@@AB@@@@A@@B@@@@@B@@@@@@BB@@@@@@@B@@@@@B@@@@@B@@@@@B@@@@AB@@@@B@@B@@@B@@B@@@B@@@@@@B@@@@@BB@@B@@@@@@@BA@@@@@@B@@@@@@@BA@@@@@@@A@@@@@A@@@ABA@@@@@A@@@A@@@@@A@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@BA@@@@@@BA@@@@BA@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@B@B@@@B@@BB@@@B@@@B@@@B@@@@BB@@@@@B@@@@@B@@@B@@@@@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@BB@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@@@B@@@BB@@@@B@@@B@@@B@@@@@BB@@B@@@@@B@B@@@@@B@@BB@@@@@B@@@B@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@BB@@@@@B@@@B@@@@@@@BB@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@BB@@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@B@\\BHBD@D@LDHDLDD@FBDBHDJBHBHBFBD@HDJBHBFBHBF@FBD@D@D@F@JAD@B@D@D@HBLB^FLBNBLBDBD@B@D@B@BAD@JAHAB@F@D@H@HBFBDBD@B@B@B@B@D@D@BBDBDBDBBBD@H@LBHBF@B@D@HAPAF@H@LB@XB@HBPDLFTJB@@BDJBD@@D@NDNDJDLH@BBHB@BBJFNFHFBB@B@B@@DBD@BAB@B@F@BBHD@BABBDBDHFFDHDLFPFBBBD@@DDLDLFBBFDB@DBBBBBB@DBHBHBDBFBB@B@B@D@DBBB@BABCFABBB@@@BFDD@BBB@B@@AB@B@B@D@D@BB@@DBDBFD@BB@DBBBBBDBABCD@B@@BB@@DDDBBBBBB@BBBAH@L@PAHAL@@@BBFDHDDDHFDDPJ`TlbDDIHBFdZBBXRLH@@@@B@@@@@"],"encodeOffsets":[[122671,35274]]}}],"UTF8Encoding":true});}));