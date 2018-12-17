(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('攀枝花市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510403","properties":{"name":"西区","cp":[101.637969,26.596776],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@@@@B@@BB@@@@AB@@@B@@@@@B@LAJCVOFANANCHGJKHSDAvANAJEFEDAHANBPBJ@Z@J@JBDBPRFBD@@@@AEWACBABCB@^EJ@BA@CA_@Q@A@@@@AS@@A@C@GAAACA@AAA@AAAAACCAA@CACAAAAC@AAC@ABA@ABABGBABABCBADAF@@@J@BAFABAB@BA@A@E@A@CBC@CA@@GCACGAA@C@C@A@ABA@AB@B@BABABABCBABI@CBC@EAC@E@KAG@C@GAC@C@E@A@CAAAE@C@AAA@A@A@A@A@ABAB@BAB@D@BAB@@EFA@A@GCGACAC@EEA@A@A@A@EACA@AAA@CAC@A@CCICCIEACEEEECE@AAE@AAE@AAEAC@@AA@G@GA@@@CAAAAAA@AAA@E@C@CBA@CDCFBFLVNFBF@FAD@D@DBDJLBHAHCFCD@DARADEDIH@@B@BD@DBBA@BBBJ@BAB@B@BBDBB@D@DADADEF@F@FBBDDBDDDDBDDBD@H@D@DBBBBB@BBBDBJBB@@@@BBBB"],"encodeOffsets":[[103917,27314]]}},{"type":"Feature","id":"510402","properties":{"name":"东区","cp":[101.715134,26.580887],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCCEEOEaAIAGBEBKBs@IAECAGCIASCGBIDEFMLEJILWTGDC@ACKWCCGAEAC@EDAFEDCHELCBCBAAEAGDG@MFA@ABCDGDABADEFA@@B@@AB@F@BBD@BBDBBBB@B@B@@ABABE@ABBT@@@@@B@RJ@F@BD@VDHDFHDH@FADAD@DBFHHLFDNLFFLLPLPHJBF@B@hCFCDCDGJEJBLFP@HADCBAD@F@BBFRDFFBRBBCBIDKDI@A@CACCGIKGIEIECCCGC@AAA@C@A@A@ABC@ABA@A@@"],"encodeOffsets":[[104247,27241]]}},{"type":"Feature","id":"510411","properties":{"name":"仁和区","cp":[101.737916,26.497185],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DHDDBBBBD@B@BABADAB@TJB@@D@D@HB@D@D@F@BAD@BBDBBD@@B@HBPFDDJTHPDBF@DAFGDEDODGJEDADEBADEbQFCDMBCHEdIPEJCJOFEHCJGHEBG@UDONKDAFBLNPXDNDHFDFDHVFLBL@FBDB@FAFAFAFBBHBNFZHDLDFAFGL[@E@C@CB@DAFCHCDCDE@CDCDALAHCHEFEBE@G@CDCJEDEDE@CCE@EACMKGCAECaKEIAIFCHCDEDgDA@E@IAOGOKKKEEMKECGKEGCAC@CBEBG@GCCECG@UACE@I@B`@DABI@]FA@ADABBDFX@B@@C@EAOQCAIAI@Y@I@OAMAGBCBEFIFMBuBCBGTILGHMDMBEBUPIDKBA@@@@@A@@@A@@B@@A@@AA@@@@@AB@BABABA@A@CDABCBABAD@BAB@B@BA@A@AAC@CA@@CBAB@@CBABED@DAFBD@B@FBDBBBBB@@BFBD@BDDBB@D@BBBDDNBBDBJDHDNDPHDD@B@B@@"],["@@BAF@BABA@@@A@AAAAAAC@AAC@A@EBA@@@AB@FEBCBAHCDCBAB@NEH@HCFBBBDADAFKDGFCBEFCD@FBHBDDLXBDD@HCXSJKFINKFEJCHATDJBHDDBBF@JAtALAFBHBJFbFPDFDD@@J@HAF@FCPKJGDEDEFKDAVGDCBC@E@ECIAEBEDGFKDKBK@MBGBEDGBI@GAU@AHOBGBIAM@GBCDMDMDEDAF@H@N@F@DAD@BA@CBA@CBC@C@KBC@CFEDAH@LBD@F@REDAFAFCDIAIEOAKAe@AACCAACCK@C@EBCBCD@BABC@C@I@GBC@CBO@C@A@CAA@CAEAC@AAAA@@AGKAAAGAI@C@A@E@C@AACAA@A@C@ABC@C@E@AAE@ACCAAAAAE@AACACACACECCACEGG@C@A@A@CBC@CAAAC@AAG@C@EBABCBALMBABC@A@AAC@A@C@KACCAAAE@GAKAEAQECAGCC@AAA@GGAA[OCCGCCCIEAAAA@C@EBAHKBC@C@E@CACAA@EACCEGICCACAEBCBCHGDCBABC@C@CACAGAC@CDKC@K@ODIFQRIJMPEL@L@XBTDJHJHJBD@BA@C@EAA@gRM@CB@B@BDDDHBF@BABC@CAEGCAA@@B@DENMTY`KPCDGBEAE@CDGDE@O@K@ABCDGXCDCBA@E@IEKEOGG@G@MDEBGAIEKGGCEACBSVEHAD@PAFCDIFGDE@E@E@CD@DBDDHBHADCDEDKBA@@D@DFDHD@B@BABAB@BB@BBBBFJBHNJLDFDFBJ@vOF@F@LBDB@D@DCB]JGD@BAFBDBBFBJ@DBLRFPBF@DCBEDGFaFGDAB@F@HFRHZBFAFCBCB]@@@@BBFDHAF@B_RIHEDKBEDCDKRCFEFIHEJCFCBC@CAC@C@EDGFAFGHCBC@M@G@CBADCJGLEFGDCDAD@HELA@AG@GBC@CA@@AAICABCDABABABABCDABCDABEDCBAB@@AD@D@D@BBDBB@BBBBB@BBBBB@@@B@@@BA@@B@@@BAB@BA@@BCF@@AB@@C@CCKGEAC@A@CBABAF@DABA@AAA@A@@BDFDJ@BAB@BA@@BA@ECOMCAAAA@@BCB@BAB@BB@DBB@B@DDBL@BBBA@A@A@AAC@ABABABABAB@@A@@F@@HFDF@F@FCHE\\@D@@BDABDLBBBBF@\\ELAH@B@B@FBHDD@H@HCDAF@D@B@DBDD@@JFJGFCBCBQ@CDCDEBGAGIKAC@C@CBC@EAEMEKUAEDEDCB@DAD@F@B@BBB@BBBBDB@@B@@H@HBB@@BDBF@BBF@BBF@BDFFFFFBDJFDDDJ@D@BBD@DBB@BDBFBB@B@B@B@FFD@DBHBHDB@B@FE@@BA@A@CBA@ABABAB@B@B@B@B@BBD@F@BBDBB@F@D@D@HBD@H@LBF@D@FBD@DAJ@BADABABABA@A@ABAB@BAB@D@D@B@HBBDHD@@DBD@DAB@F@B@B@@ABABABE@A@I@@BEBCDABABAHABABAB@BAD@BBD@BBBBBD@DBBDDBBBB@BBB@BDBBBHBD@B@@@"]],"encodeOffsets":[[[103937,27378]],[[104101,27221]]]}},{"type":"Feature","id":"510422","properties":{"name":"盐边县","cp":[101.851848,26.677619],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MOCG@CBC@CBCCSEaCIEGIIKKCECIAMACCCMICECG@EBGBMAAMIkamYkWCAAC@EDCHCBEBE@KGa@KBKJmBCNONODEDMDMBCDALCdEPEJCLEHCFEDAFAJEFEDCDCHCLIPMBCDGBC@C@C@I@E@EBEBEDCBAB@B@BBBBBBB@D@DADABCDE@E@E@E@CDEBCJILILEDCBCDCD@FBL@NAJAD@FCF@FAD@F@PDHBB@@Y@GBCBAD@E]AQFDKFGNCL@HFDFF@@@@@@@N@@@@@@Dl@DFNB@F@BBDBB@LBHHFJ@BDLBJ@DBD@BD@HBD@D@BA@A@CBG@GAC@GGIAC@A@CDEDCHEBAF@H@DABAD@A@@C@CCC@ACC@CBCBABA@@@@@A@AAA@@AA@@@@@A@@D@@A@@AA@E@A@C@E@CCC@@@A@@B@@@@A@@CEA@CA@@@A@@FCBAB@B@@@BA@A@EAC@@A@@@A@A@@@A@@A@AA@@ACCA@@A@AAAAA@@A@@A@@@A@@DC@AD@B@D@H@D@B@B@B@B@B@@A@C@C@C@A@CFABADADIBO@OBEDAZ@J@@AFIFIBC@QBG@KASESAIBIBGFCDCDC@ABCAE@E@E@EBCDAFAFCBCBC@EEIGIGEAA@MEIECCACG@I@GEKAI@GBKBGAEGKCCAAC@ABADEBIBGDOBEBA@@DAJCFEFADGLCFCFCBE@GACACBE@C@CAEACCEAKACACCEKUoQFE@C@KAG@CBEF@DAD@L@DAD@DAB@DABC@CBE@M@G@E@CBCFCNCNAD@HBNAJAHGP@BBV@HAJCHAFAH@NALCLELCHAFBFDJ@F@FADCDUHCBELCFCFIHOLEDE@GBI@@@@@@BAB@BAD@B@B@B@DBB@BHDDDFDFJHJJLDHBD@D@BCJCLAJADQAEACEEQAAE@C@ABCDGBO@DbBFHDNLBD@FDF@DCFCFIFCD@D@HAFEFGFGDKBCBCD@DCFCDGDEDCBA@@D@D@FK\\EHEBKCGCEYAMAGEAEBEBEBA@AC@EAKEKGUECECCGCMOWKMEACBMLCP@VAHGFIHGDEFIPIDOFcJGFADCNEDaRCFABCFCBIFCHCPCFEHCBE@CAGOISCCOEGAA@@@ACCAAAC@ABE@C@C@A@@G@C@CA@SIA@CBABABA@C@AAAACCCGABGFEFADBDHPDDDB@@FAHCD@B@DD@BBF@@@H@D@FABCBGBA@AACAC@E@EDCBIDEFIFGDG@GDCDA@A@G@AACAGCEAEEACAEBCBEDEFCBC@CBGDCBEBEBA@EAU@EAAE@KDIFC@ABCDABCDC@EAEAAACCCACC@E@G@ACCCAA@CBCBC@@@G@CAGAIAE@CBABABBBBDBTEJ@D@BBD@D@BAD@BCB@@ECGCC@@BAB@D@BADABABCBABCFADABCBA@CAE@CDABBDBBFDDBFBHHLFDDBDBBADBB@D@D@B@@CDC@@@ABABA@@@ABA@BDFBDB@BDBBBBDFHDFDB@DBD@DBBDFBDDDFHBDBD@DAD@BCBEDEDADADADCFABADADEBKFABCD@DCDCF@BAB@D@DADEBC@EBC@CBEBE@C@AAEAC@CBABCBC@KAC@CBCDAFCDCDEDADADG@AAAACCE@CAICG@EBEBCDCBEBC@@@C@A@EBC@@@CDCDAD@JADABABCDEJ@B@DBDBFBHDJFFDFBF@DCHA@E@CACAG@G@K@G@G@C@CDCDCB@DAD@FBPBHBD@FCFABMFEFEFCAC@CAC@E@EDEBAB@@CBCBCBABCBCBCBCBABCBC@ABCB@@WDQFOJOHAD@DBR@DFFB@@BBBBBBD@DBB@DBD@DCHBDBB@D@DABAD@HDD@BDBBBD@BBBB@DBFBBBD@@BB@J@D@D@BABGBML@B@B@BB@@BBBBDBB@DBB@B@@@DBB@B@D@@@@@@@@B@@B@@B@BBB@@@BB@@@@@@BB@@@B@@@B@@@@@@A@@B@@@@@B@@@B@@@@@B@@@BA@@@B@@@@B@@@@@@@@@B@@BBBB@@@@@B@BB@@B@@@@BB@@@@BB@@@@@B@@@BA@BB@B@@@B@@A@@B@@A@@@@BB@@@@B@@@@@B@@@@@@@BA@@@@@@@@@@BB@@@@@B@@@@@@BB@@@@@BBBB@@@@@B@@BB@@@@@@@B@@BB@@@@@B@@@@@B@@B@@B@@BB@@@@@@@B@@@@@B@@BBF@B@B@D@B@BBDBDBNHDFFFDFBBDBD@B@D@DADEFC@@D@DBFDBB@DB@B@B@DCDCBAJAD@D@J@DBHBB@DBLLDDBBBBB@B@J@FBFA@@B@B@DFFFDBBBB@B@B@B@DCBCDCDADAB@@@D@DBHDBBB@D@B@B@B@BBDDD@@BD@B@BAFCBABA@ABCBE@ADABAFCFC@@BAB@FBH@D@LBBBDBDBBB@@BAB@DCFGDEDEDAFCHEJGDABCFC@A@A@ABC@@@@BCBCDABABAD@@ADFDDDBBBJFFBFDBFDD@BBF@JAFBD@BDBDBBBBDLR@H@DAD@@AFCFCFCH@F@D@@BBLDtV\\PFBB@D@FCD@B@B@D@D@DADCDCFED@FAF@P@NBDB@@@B@J@B@FDFFRBHBH@BDB@B@BAB@B@DBD@BBBDFHHB@B@FBH@DBDBDDBFDFBDBBDBJDBBBBDHBFPRDDBHBDBBDBFDB@BB@B@BAH@BBBBBDBDBJBJFDBB@D@FADAFAH@D@D@BBDDDDB@BBNADAD@BA@A@AAIAKB@@AB@HAJABAB@BA@CAEAA@A@A@@@ABA@@B@FDHBBBB@BADABABKBAAC@EBEDIBE@EAECICMAIEEAEAC@C@EAAACEEEEEE@@@ADABCDGBCBC@C@E@ABA@C@AAEAACEACAA@A@AFAFCDCFQNaHGJMNSDEBE@EBCDAFEDCDADCDCBEBALGLCDAD@FBFDB@F@FAFADBD@B@FEFCF@FAFBBDLHDBDBH@PCdOTING\\Y"],"encodeOffsets":[[104262,27753]]}},{"type":"Feature","id":"510421","properties":{"name":"米易县","cp":[102.109877,26.887474],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@BABCBEBEAEBEBCFCPIBE@C@CCAEC@@AM@EAAEAAAAA@@DCREBABA@ACCEECA@C@CBC@E@E@CDGDCDADCD@DCDC@@BC@EBCACBCBCDCLKDCHQBCBC@AACCACCA@ABE@CAAAAA@@@ADEBEJOBG@C@GDIBG@AD@B@FBFBFDBBD@DBDBBDBBHDNLDDB@B@D@NELCFADCBADC@ABEBCBEBK@@J@FBFDB@D@LEFCDEDINWDAD@HDPLBDBLBFBBJDJHFHFHDFBFBDFJFFFLBJBNDFBDDBPDFBFFHFBBJBFDDBJTBDTFF@HCD@B@DDBFBDBBHBLBD@DAFCDCBE@]DEHOBCBKDIDCDCFAH@J@HBHAHABCFKFKFEFAH@HAFADCFEBADADBD@@@B@BBDGB@FGBEACEGIGAE@M@EBSACCEGCSMECCC@E@CFKFUFMDEBQBI@AGOGOAIAACAAACA@A@ABADAFA@A@A@ACEEECCAA@ABAFCLGHGDEBE@GACEGAAAA@A@C@ABABA@@AA@AAAA@A@AA@AC@A@C@ABE@A@AAAAAACEAG@A@AFEBGDMDGBC@CAGACAEAC@E@GBIAK@C@AEACCAAF@BCDCBC@A@CAAA@C@A@CDCBCDABBvC@C@A@C@A@AEAE@A@ADEPIHEFABC@A@A@ACCCACAE@C@C@AAAEAE@CBAFCDCFABA@A@A@ABAB@JADAB@@A@AACA@@A@ABCBAAACAAA@CBAJG@ACAEGCEECCAACA@@GA@AAG@A@AA@E@CAA@CDEFGBC@CACCEGIEAEAGCG@AA@@AA@A@ABE@EACEEEAMAQCCACC@CHYBWAEAECAOEOAC@A@@B@@BD@B@BA@C@C@EBC@G@A@ABEFCHABABEBC@AB@BABABA@A@AAA@EACBC@C@CBABABBBFDBDBH@F@D@BABCDCBA@C@C@@@@FCDCHCHCBCB@BBDBDDD@D@FBP@DB@DDBD@FAF@DCDABCDABAHABEDCBCBC@AACA@AAA@EAEEMCE@A@ABC@AA@AAC@EBKDCBI@EACBE@C@A@AA@A@CBCBC@CAECGACGA@@A@@B@BA@@@C@ABCBG@E@ABGFCDCF@D@BBDHJ@HBD@HAH@D@BABC@C@GAC@@AAC@CAICK@AEIGGKAA@CAAAE@A@E@A@AAEAKEECC@CBEBCBI@C@ABAD@H@ZA@GAOCE@C@EBE@EDC@IBMBK@EAC@CDADCDKFKJIJADCF@D@F@F@FCFADCBCBC@A@AAAAAAA@A@ABCDAFAF@F@F@J@D@DADCHADONKJGDCDCDEFIFEBCBEFGDKFIDOFcFKDCBADCNCNCFMPMPADInAL@LHb@LAFAFGDCD@FBDDBlXnZlbNJBBANAH@FDHDFNJDDBDBNDJDFLLJJFHDJFbDTAD@DAD@DDHNPFJLPNPFDRDhDLBBBDDBP@L@HJf@BABM@CBCBELCF@DBBFFF@HBJDFXDRCJEPADBDDDFHFJBFAT@JBFFFNL"],["@@@@ACCI@C@ABCBAHGLQ@CBE@EDC@C@@AAAAA@GBOHMDABA@AA@ABG@A@CAACA@@A@A@ADABA@C@A@uB@DBDD@B@DABE"]],"encodeOffsets":[[[104343,27922]],[[104658,27497]]]}}],"UTF8Encoding":true});}));