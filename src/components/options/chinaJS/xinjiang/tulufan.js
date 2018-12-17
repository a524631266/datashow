(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}
		(
				this,
				function(exports, echarts) {
					var log = function(msg) {
						if (typeof console !== 'undefined') {
							console && console.error && console.error(msg);
						}
					};
					if (!echarts) {
						log('ECharts is not Loaded');
						return;
					}
					if (!echarts.registerMap) {
						log('ECharts Map is not loaded');
						return;
					}
					echarts
							.registerMap(
									'吐鲁番地区',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "650422",
													"properties" : {
														"name" : "托克逊县",
														"cp" : [ 88.655771,
																42.793536 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@AB@@A@C@@BCBABABAB@B@B@B@BBB@B@@BB@BBBBBBDBDBD@B@DBF@BBB@B@BAB@BADAB@FAFAFAFAJ@JAB@F@HABAD@DADADABAB@FAD@BAD@BABADADAFABAD@BA@@BA@CBA@A@C@@BC@A@ABA@AB@BABABA@ABAB@@AB@B@B@@ABAB@@@BABA@@@@@@@@@A@@@@B@@@@@@@@A@@@@B@@@@@@A@@@@@@B@@@@A@@@@@@@@@@B@@@@@@A@@@@B@@@@A@@@@B@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@B@@@@@@A@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@AB@@@@@@@@@@@BA@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@@@@@B@@@@A@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@A@@B@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@B@@A@@@@@@B@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@B@@@@@@@@@B@@@@A@@@@B@BCBCDGBAFEHEDADA@@@@@ABC@ABCBEBABC@@@A@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@A@@@A@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@A@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@BA@@@@@AB@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@A@@B@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@BABADCBABAFEDALEDAFAB@DAD@J@HA@AD@@@@@D@H@D@BAB@DC@CBC@C@A@ABCBCBEDEBCBAHIBEBCBEBCDO@C@EBC@C@ABABCB@DCB@@ABA@@@C@A@A@A@ABABC@@BABAB@@@@AB@BA@@B@B@B@D@@@D@B@B@B@D@B@B@B@DAB@@@D@BADAB@BAB@BA@@BA@@BCDC@ABABA@ABABABC@AB@DA@AD@@@@ADA@@BABA@@@@BAB@@@BABEDAB@BA@ABA@@BC@@BA@AB@@ABCBABCBCBAFC@ABABAB@@AFADADAFADAD@B@B@B@DAFAB@BAD@DAFCB@FA@@DADAFC@@DAB@B@B@B@DAB@B@B@@AB@B@B@@AD@BA@@B@@@B@DA@@B@@@BAD@B@@@B@BA@@B@DAD@BAB@BABABA@A@@BA@@@A@AB@@@@AB@BAB@BAB@@@B@@@DA@@BABAB@BA@ABABA@@BE@@DCBABCBABAB@@ABAB@B@@AB@@@B@@@B@@A@@BA@@BA@@BA@@@AB@@A@ABA@ABCBABCB@@A@@BABABABA@@BAB@@ABA@@BA@@AA@@@A@@@@BA@@@A@@BABA@AB@@@BC@@@ABABA@@DCBABA@ABABA@@@A@ABA@A@@BABABA@@@@BABA@ABCBABA@A@@BCBABABA@@@@@A@@@A@A@AAA@CAC@AAA@@@A@C@A@ABE@AB@@A@ABABE@@BA@A@@BA@@B@@@@@@B@@BAB@@@B@B@B@B@@@BAB@DCBAB@@@B@B@B@FAD@F@B@DBB@B@B@B@@@BAB@B@BADABADABAB@@@DA@@@@BB@@B@BAB@@@DB@@B@@A@@@@B@B@B@D@@@DBB@@@BA@@B@@AB@@@@AB@@@B@B@B@@@@@DAB@BBB@B@DAB@B@B@D@@@D@B@B@F@BAB@@@BCAA@C@E@AAIAA@K@I@E@C@@@A@CAA@@@A@AAA@A@A@@AC@A@A@@A@@C@C@E@A@A@A@@@CAA@A@A@A@A@A@A@CAA@A@C@A@CAC@A@A@@@A@@@A@@@A@@AA@@@A@@@A@AAA@A@A@@AA@@@AAA@A@A@AAA@@@A@@BA@@@A@ABA@C@@@C@ABG@A@A@C@@@CAE@@@ABE@G@M@A@E@C@@@A@C@A@C@A@IAEACAC@C@A@@@A@A@A@@AEAA@@@CBC@E@@@CBC@C@C@CBA@A@A@A@A@@@@@C@@@A@CAC@AAE@@@C@C@A@A@C@E@CBA@EBA@A@C@@@@BA@@@AB@@A@@@C@A@A@C@@@A@C@A@E@AA@@A@@@A@A@@@ABA@@@A@A@@AA@AA@AA@@AAAA@@AA@A@@A@A@@AA@AA@@A@A@@A@@A@A@@A@@@@AA@@AAAA@@A@@@BA@AAA@@@@@A@@@C@@@@@@@@@A@@@@AA@@@@@AAA@@@@AAA@AA@@AAAAAAA@A@@A@A@@AAAAAA@@A@@@AA@@@A@A@AAAAA@A@ABA@@@ABAA@AC@A@AA@@@C@A@AA@A@A@ABABA@A@A@AAAA@@AAAA@AAAAA@CAA@@AA@AAA@@AAAA@AA@@AABAB@B@BA@@BA@@BA@AA@AAA@AA@A@ABAB@B@BA@@B@@AAA@AAAAAA@@A@A@A@A@A@AAA@CAAACAAAAAABA@AB@B@D@B@BAB@BA@A@CBA@@@AB@BA@@BA@@AA@@ABA@C@A@AA@@@A@AB@@AB@A@@AA@A@C@AACACA@A@@@@@CDA@C@A@@@@@A@C@@@A@@AAA@AAA@@@@@AA@@@A@@AA@A@A@A@A@@@A@A@ABA@A@@BC@A@AAA@A@AA@ACAAA@@C@@@AB@@@BA@ABA@AB@@AAA@@@AAC@A@A@@@C@@BA@A@AAC@CACA@@AAAA@AAA@CAA@@A@EAAAA@AC@@A@A@CBA@A@AACCAA@CACAIAEAEAEACAECKE@@@@A@@AA@@@@@@AA@@AB@AA@@AA@AAA@@AA@@AA@@A@AAA@A@AA@@AAAA@@@AAAA@@AAAA@@@@A@@@A@@AA@@A@A@AAA@@@A@@A@@@A@@A@@@@@A@@@@@@@@@A@@@@@@A@@@A@A@AB@@A@A@ABA@@@@AA@@AAAAA@AAA@A@@A@@@A@@@A@@@A@@@@A@A@@@A@A@AA@@@@AA@@@AA@AAA@@A@@@@@@BAB@@A@@BA@C@ABA@@BA@@BA@A@@BA@C@AA@@C@AAC@@@A@@ACAC@@AAAA@@@A@A@@AA@AA@@A@A@AA@@AAAAAA@ACA@@AAA@CAA@A@A@@@C@@@A@@@A@@@A@A@@@@@AB@@A@@@@@@@AA@@@@@A@@@A@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@A@@A@@@@AAA@@@@@@A@@@A@@BA@ABA@ABA@A@@@A@@B@@BDBBBBBB@B@BBB@D@D@B@BBD@B@BBB@B@B@B@@@B@BBB@@@BB@AB@B@B@BABABAB@BA@@BAB@B@B@@@@A@@@@@A@@@@B@@@@@@@@A@@@@@A@@@@BA@@B@@A@A@A@@@A@@@@@AB@@@@A@@@@@A@A@@B@B@@AB@D@@@B@BA@@B@B@@@B@B@@@B@@@@@B@@@BA@@B@@A@@B@@@BAB@BAB@@@@@BA@@B@@@BAB@@@@@BA@@B@@@@AB@@@@A@A@@@A@@@@BA@@@A@@@@B@BA@@BA@@BABABA@@BA@@B@@AB@@@BA@@B@@AB@@@BA@@@@@A@@@@B@@A@A@@@@BA@@@@@AB@@@@@@AB@BA@@@@BA@@@A@ABA@@@@@AB@@AB@@@BA@@B@@AB@@A@@BA@@@@BA@@B@@AB@BA@@@@B@@A@@B@B@@A@@B@@A@@@@BAB@B@@AB@@@BA@@BABA@AB@@A@A@CAAAC@@@@ACAAA@AAAACC@@@AAAAA@A@AACAA@@AAAA@@C@AAEA@@C@CAAACACAA@CAAAAC@AAAAAE@C@A@@@E@A@CAAAA@AAAAAA@AAAAAA@AACA@@AC@@ACAA@@CAAAEICGACCACAAAA@AAAA@AAA@@@E@@AG@CBEBE@E@@BA@EBE@GBG@E@E@I@CAC@A@C@A@A@A@A@@AC@A@C@EAC@CDGBI@@BEDEBC@ABA@A@ADCBCBCBA@@@@DEHMFIJYLOBSBYFIFSFGNKTMTG\\GRI\\MPELCLCREVCRERGPGJELENGPITMVKRKLIHEBCJMTWJKJQDWDSAUCYCGEKIMGGGIEIKKKMMWSWGMIQKQKMKOGIBEHKPULSPWFSHIDSHWFWAW@GBGBKBIBGBGAGAGAEBEHAJAHCPCLABAFCBEAGBEDEJCLCPEJCZAXCTCVELCHCJIDIDIBMAKGMCGAEGOAK@E@O@E@E@EBI@C@EA@E@CAEAA@IBC@AAEECCGGC@E@EAGBIBIBG@GFEBADCDADCBA@A@GBABCDABABA@IBE@C@C@GAG@M@CBABBDDDFFA@@BE@IBMHcPQLMDMBSDSBOFQDQFMFGDABS@S@GCCCEGAAI@S@U@YDDU@QB]AYAG@E@ABIHGFSPKHABI@KAGBS@EBGDIDIBE@MDCDAB@DBF@FAD@BCBCDEBC@MDG@EBC@KBGBGBC@A@ABEBA@C@QCM@U@K@O@M@O@QBK@C@I@IBA@CCEACAABABCBE@EAE@G@E@EBGBG@A@CBABCBEBC@I@E@EAECG@E@A@C@AACCA@C@OHEBA@E@CAECECECCAIBI@K@G@GAQAC@G@C@C@ABAB@@@@@@@@AA@@A@@@@@@@A@@@@B@@@@@@@@A@@@@@A@A@@@A@@@A@@@CAA@A@A@@@A@@@A@@@@A@@AAAA@A@@@@AAAAAAAA@A@@A@@@A@A@A@A@A@A@A@A@@@A@A@@@A@AAA@A@@A@@A@@@AA@@A@@@A@A@ABA@A@@B@@ABA@@BA@@B@B@@ABA@A@A@ABABA@ABA@A@@@A@A@@@EAE@MCIAWEG@EAA@AAA@A@@BA@A@ABAB@@ABA@@@ABA@@BA@@@AAA@@@AA@@@@A@@@AB@@A@A@@BA@A@@AA@@@A@@@@@@B@@@@@B@@@@@@@B@@@B@B@@A@@B@@@BA@@BAB@@AB@@A@@BA@A@@AA@@@A@A@A@@B@@@@A@@@@BB@@@@B@@B@@@@B@@@@@B@@A@A@@@ABCAA@A@@@A@@@A@@B@@AB@@@B@BA@@@@BA@@@A@A@@@A@ABA@CBA@CBC@@@A@ABCB@@A@@B@@A@@@C@AB@@A@A@@@@@ABA@@@C@C@@@C@@@A@@@@@A@A@@@@@A@A@A@A@@@A@@@A@@@A@@@AB@@@@@@@@@@@@A@@@A@@@@@A@@@@@@@@@A@@@@@@@@B@@@@@B@@@B@@@B@@@BB@@@@BB@B@@@@B@B@BA@@BAB@@CBA@A@@@@@AB@@@B@@ABA@@BA@A@A@@@A@AB@@@BAB@BBB@BB@BBD@BBB@BBDBB@DBB@DBB@HBDBFBBBB@@B@@@BC@ABA@@BB@@@BBB@B@BAB@B@B@@@@@B@@@@@@B@@@BB@@@@@B@@@@@BBB@@@B@@@@B@@@@@B@@@@@B@@@@B@@B@@@AB@@@@@B@@@@@@@@@@@@@@@@B@@@@B@@BBD@@B@@@@B@@@@@@@@@BA@@@@@@B@@@@@@@@@@@B@@B@@@@B@@@B@@@B@@ABAB@@@@@@AB@@@@@@@@B@@@@@@BB@B@@BBB@BA@@BA@AB@@@F@B@B@BAD@D@BADABAFCHAD@@BB@BBD@@@B@B@B@DBBBB@DAB@D@@BBBBBBBDBBBD@BBDBBBBBB@B@@BD@BEDADEFAFCDAFADABAB@B@B@BABAB@B@@@D@D@B@@ABA@@B@B@DBBDJBD@DBBB@@BBB@B@DABBBBHBDBB@BB@@DAH@HAL@H@P@HBF@F@D@D@J@L@F@F@D@H@F@F@B@D@B@F@FAD@FABAF@B@F@BAFAD@DADABEHCDEDABADCDEDCHEFCDCDABADCBCFCDADCFGHCFCDABEFGDEDYNGD@@C@KFMFEBA@CDIFKHKFCDC@ADEFGFKLADAB@BABAB@DADCDADCFAFGLEJABAB@B@B@B@@@D@BBB@@@BA@AB@@@@@B@BAB@B@B@@@B@@@@A@@@AB@@A@@B@@A@@B@@B@@@@B@@AB@@@BBB@DB@@@@B@@B@@@@@@B@@A@@@@@@@@@A@@AA@@@AAA@C@C@AB@@ADABA@A@AB@@AD@@AB@@AB@DCDADABABADCB@BAD@DAB@D@B@B@BA@ABAD@BBD@B@DAD@DAD@B@BABBD@@AB@@C@A@A@CBCBA@@BAB@BBBA@@BAB@BADABABADABA@@BAB@BAB@BA@@B@B@BABA@@BA@@B@Dę¤^CDI`@BCDADCD@@ab@BcjUbgGPIbGVEV@FBNCDIFABAFCLBBHFJD@@DDFDJDDFBJDFHFBBZPPFdTHDjfXZDB\\F¤^tRfRNHLFFF@B@D@BLH@@@BCF@F@FB@@@F@F@B@@DBFDHDHHFDD@F@@@DEDEFCD@B@@DJBD@@BBF@D@D@BBDD@@FBFBFDLBJBFBB@@@FHFF@BCD@D@F@DCFADCBAD@B@BB@D@B@FA@@RHDDBHBH@BDFFNBJBDBH@@@B@@ABGDCDGFA@@BABAFCHC@EBOAABA@@@@BFJ@@ADALEPGPA@SRQLABMDKJIDOBSDUFMBOFMFCBGFEDE@GBABMJMFEBOBC@GBCBGFAB@@CBAHGJEDGBA@GDKDGFABGJA@GJABA@ABEAOAIASCG@M@A@@@@BBJ@BAJGJCDEBKBI@A@IACBGBCB@BCBEJCJ@F@B@@@@BHBLBFAFBB@B@DAFGNCFIFCDGDAB@@ADCDKBCFAD@FCDEBGBGBAD@D@DABCDOLSPAB@B@FAD@@@@@@ABCBA@BBDFBBA@A@]EGAC@E@C@MDM@EDA@CBA@AAE@C@CAUGWCW@UDA@SFEBKAICC@A@@@IFC@A@C@EAA@GEGAEAEASDGDODKDE@GBUBE@A@IAIAKBMBI@IBIBC@CBIFGFE@I@GCCAGAC@KBGDGBK@KAKBSHUHQJ@HHBLJDDFF@@DH@@DHDJBD@@DFDFDBBBDDDF@HDF@DBFABODGDKFIFA@ABEAA@C@I@K@C@@BCA@@CBA@A@C@AB@BB@@BH@NAJ@H@D@@@DB@@JDD@A@KDEBABA@@@G@G@C@AAAAAAG@C@ABGF@BEB@BDD@@@@DCB@BADB@@BA@@CA@A@@@A@@B@BBB@@@@@BABB@@BBBB@@@@AB@@BB@@DA@@@D@@@@B@@@@@BCB@LBB@@AD@@@@B@B@@@@B@@@DCBAFC@@NC@BB@@BDNBFDFBFDFBBCVADAH@@HFDDJ@DCBA@AB@RAPEDAJ@NFDBFBLATANATCJAB@BBHBHDZDb@TAVCNANEFAD@HAL@JB@@@BBB@B@BAD@@@@BBB@B@H@LCDAPGHCDAD@B@DBDDDBB@HBHBB@@@DCHEJGHIHEFABCFCFEFCFCHEFAJ@J@B@B@DCDCBC@EDA@AD@FA@ADAB@BABAFAFANENGFEBCBADABCB@DADAFA@AHCFE@AD@B@B@@@BBHF@BD@DDB@BAD@@@@@@ADBRBJ@\\AVA`ABBDDBBB@ADKJELELEH@BABEDKFKJOLCBODSFQFC@KBGBIDEDCDMJQNMPKLGHSP[HYDGFOJCB@@CHADADGHGHGFIF]JC@MFSHkNUJGBIBQBKBGBEDKBEBCBSFAB@DBBBD@DBH@DAHAF@JALCLABABGDABE@MFEBC@I@C@GCMAC@E@ABEBIDGHIJIFIFEBMDEBG@EDAFCJA@CBG@C@CBCBEFCDKJUNIFIDKFIFKBE@EAKAKCE@C@EDGFCDGDC@E@CBABA@E@C@CAECCAC@GAE@A@A@A@GBEFEDCDCBCBA@A@AAC@E@A@AAA@A@@B@BAD@BAJBH@JBHAF@LAFBJ@D@HCH@DAB@@DBDDDDDB@BBB@@AB@B@@@BBB@D@BBBBD@BAHADCDAB@@@B@@@B@@@BABAB@BABCB@B@D@B@B@B@@@B@B@B@@@B@B@DBBAB@DAB@B@B@B@B@@BB@@@D@B@B@@A@BFAB@D@B@DAD@@@B@FAB@DABA@ABADAB@@AB@BAB@BAB@@ABA@@BAD@@@@@B@@@BA@@BAB@BA@AB@DA@AD@NDD@FBDD@D@DBD@B@DAB@LA@@DABAF@DBDDBBBBDAB@FCBC@ABAD@DAD@H@HBDBF@BBL@@@BABABAD@HEDABABADAD@F@FBHAF@FDB@HBF@D@F@DAFABC@@BAH@H@B@D@F@DBBB@BB@B@FANAFAF@D@FBBAD@B@@@B@B@@B@@@@@BB@B@B@D@B@FAFADAD@DAFBF@N@F@DBB@B@@@B@BA@C@A@ADADAH@JBH@J@L@@@DBD@D@FBD@F@HBHBDBD@B@HADBF@DAF@FBFDB@DBFBBBDDBBDB@@HDDB@@B@B@@@DADABAB@F@D@F@D@J@B@BA@AB@F@B@DBB@B@B@@@DBBBB@BDB@@BBB@@@@@B@DCBA@@B@BBB@B@@@B@B@@@@@@D@B@BCBAD@B@BBD@D@B@B@DBDBFBFAB@D@DBDBBBB@D@B@H@J@HD@@BB@@FBDBB@@BB@B@@@DCB@BAB@@@BAB@B@F@HAF@B@B@B@D@DBBB@@JBB@DBB@@@B@D@B@@AB@B@D@D@B@H@JA@@J@D@@@H@@@DBB@JBBBDB@@@@DBDBDB@@@@B@@@@@F@FADC@@F@B@BA@@F@@@B@F@D@F@FBB@@@D@B@B@B@BBB@B@@@B@@@BABA@@F@B@BBBAB@@@B@H@NBLBPDNFNDZ@`D\\DZFD@FAHGPMPCHDJFPJLFNDLBVDL@F@HCF@JDLBDCD@FBFBHDLDD@H@J@N@DBHDHBF@HAH@@@DBBJBBFAFCLEH@FBFBF@FBHBD@D@JARCF@FBDDB@JIDCD@J@F@J@HBR@JCDCAAGA@AFEAIAMIGGMCO@ODK\\g@@R]LYNEFAD@D@F@H@PCJAJ@LCLET@F@FBBD@HBHDBDBJ@HAJAD@BFDDHBLAJANGTK^QPETCXIPCJ@LBFDPHNFNDHBFDBD" ],
														"encodeOffsets" : [ [
																90587, 44251 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "650421",
													"properties" : {
														"name" : "鄯善县",
														"cp" : [ 90.212692,
																42.865503 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@A@@@AAA@@@@@A@@B@BAB@@@BAB@BABADAD@D@B@@@BB@BBBBB@@@@BB@B@@BB@B@@@@@@@@AB@@@BB@@@@@@@B@@@@@@@B@BB@@B@B@@@B@@@BB@@@@@B@@@@BB@@@@BBB@@@BBB@@BB@@@BDB@BB@BD@BBBBBBB@BBD@@BB@B@B@@BB@BBBB@@B@@@B@@@B@B@B@D@@@B@@@B@@@BAD@@AB@@@BB@@BA@@@@@AB@@@BA@@@A@C@A@@@ABA@@B@@@B@B@B@@@@@B@BBBBDB@@B@@@B@@@B@B@BBD@DBB@BBB@BB@@@@B@@@@@@A@@B@@A@@BA@@@A@@@@B@@A@AB@@A@A@AB@@AB@B@BAB@B@B@B@B@@@B@B@@@B@@@B@B@BBB@D@@@@@B@@@B@@@B@@@B@@@B@D@BAB@BADABAB@B@@AD@B@B@B@@@D@@@@@B@BAB@@AB@@@@@B@@BB@B@B@@AB@B@DBBBD@DBDBD@B@@@B@B@B@B@@@DB@B@@@B@@@B@@@B@@@@@BB@DAFA@@B@B@DBD@BDB@B@B@@@B@BA@A@AB@BADCDABA@A@A@A@@CA@AA@AA@@@@@A@AB@B@@AB@@@B@B@B@@@B@@@@@@@B@B@B@DAB@@@B@BB@@@@B@@B@@@@D@F@B@B@@@B@D@BBFBB@BBB@@@B@B@@BB@@@@@B@BA@AB@B@B@B@BBB@B@DAB@B@B@D@DBBAD@B@B@B@@@@@@E@@@@@@@@@@BAB@B@B@D@B@D@D@B@B@DB@@B@@BB@BB@@B@BAB@B@B@B@B@@@B@B@@BB@BBBBBB@@@@DB@BB@B@@BB@B@B@B@@@D@BBB@B@@@B@@@D@@@B@@@D@B@BAB@@@B@B@BB@@@@BB@@B@B@@@BBBBBBB@@BB@B@@@B@@@B@B@@B@@@BBB@B@BB@@@B@DBB@BBBBB@B@@@@@B@D@DABABAB@DAD@BABAB@B@@@B@DBBBBB@@B@@@D@B@BADADA@A@@BB@@B@@@B@B@@@B@B@@@B@B@@@D@D@@@B@B@B@D@@@B@DB@@B@B@BBB@B@B@B@B@B@@AB@B@B@D@D@@@BA@@@@@@B@@@@B@@@@BBB@B@B@BAB@B@B@B@B@D@BBB@BBB@@@@@AB@BB@BBB@@B@@@@@B@@B@@B@@B@B@@BB@@@B@@@B@B@@@BB@@B@@@B@@@BA@@B@@@B@@@B@D@@@B@B@BBB@B@B@B@B@B@BAD@D@B@BAB@D@BA@@B@@@@@BA@CB@BAB@D@B@B@@@BB@@B@B@D@BBB@B@B@@@B@@A@@B@@@@B@@B@@@B@@@B@@@@@B@B@B@BA@@@B@@@@@@BBB@@@B@B@B@DAD@B@B@BA@@@@BB@@@B@@@B@B@@BBD@@BD@B@D@@@B@@@BAB@@@B@@@B@@@BAB@B@@@@@B@DBBB@BD@B@B@BBB@B@B@B@@@B@B@@@B@@@DBBBB@BB@@B@@@B@BAB@D@BAD@@@B@@@@A@@@@B@@ABA@@BA@@@A@@@ABA@@@@@A@@@@AA@@@@B@@@@@BAB@B@@@B@@@B@@@B@@@B@B@@@B@B@B@B@B@B@D@B@B@B@@@@@B@@@BABAA@@@B@@@@@B@B@B@@BB@@@B@@@@@B@@@@B@ADA@@B@BA@@@@B@@A@@@AB@B@@@B@BA@@BA@@@@@A@A@AB@@@BAB@B@B@@A@@@@@A@@@@B@@@@@@@B@@@B@@A@@B@D@B@@@BA@@@@BAB@@@D@BA@@@@B@@@BDB@@@@@B@@B@@@BBBBB@@B@B@@@B@@A@@B@@@BBB@B@@@BA@@B@@@B@@A@@@@B@@@B@@@@@B@@@B@@AB@@ABBBABBBA@@BB@BB@BB@AB@@B@ABB@@BBB@@BBB@@B@BBB@B@B@@@BBB@B@B@D@D@B@B@BB@BB@@@B@@@@@@@@A@@B@B@B@B@@@B@B@BA@ABABC@@BAB@@@B@BAB@DA@A@ABA@A@A@@A@@@@@A@@@@@@@@@@A@ABABCB@@A@@BA@@B@@@B@B@B@B@B@BBB@B@BBB@@@B@B@@@B@@@FB@@BB@@B@@@B@B@B@B@@@B@B@B@@@B@B@DAB@BAB@@ABADA@@B@@@@ABA@A@A@@@@BA@@BBB@DBD@B@BBD@BBD@B@B@@@D@DB@@B@@@B@B@B@D@D@D@B@B@B@BB@@B@@@B@BAB@D@B@B@B@FBB@@@B@B@B@DA@@BADCBABABABADCDAB@@@B@B@B@@@BAB@B@@@D@BBB@@@B@@@B@@AB@@@@@B@B@@BB@B@D@BBD@@BDBBBBBBB@@D@D@D@B@D@BAB@@@BB@@B@BBB@B@B@@BB@D@B@@@B@@BB@B@B@BBBB@AB@@@B@@@@A@@B@@C@A@AB@@@@A@@@@@ABAB@BAB@@AB@@@@@AAAA@@@A@@@@@@@@AA@@@@@BA@@@@@@@AA@@@@@@@A@@@@A@@A@@A@@@AAA@AAA@A@A@AAA@@@A@AA@@A@A@@AA@@@AA@@@@A@@@@@A@@@AA@@@@@@A@@@@@@@@@@@@AB@@@@@@@@AA@@@@@@@@@@@@@@@@A@@@@BA@@@A@@@A@@@A@A@@BA@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@B@@@@@@@@@@@AA@@@AA@@AB@@A@@@@B@BA@@@@@@B@@@@@@@AA@@@@@@@A@@@ABA@AB@@@@@BA@@B@@@@AB@@@@AB@@@@A@@@@@A@@BA@A@@@A@@@@@@@AB@@@BA@@BABA@@BA@@B@BA@@B@BABADA@@B@@AB@BAB@B@@AD@@@@@B@@@B@@@@@BA@@@@@@@@BA@@@@@@@A@@@@@@BA@@B@BAB@B@B@B@@@B@@A@@B@@@B@@@B@BAD@B@B@@@@AB@@@@@A@@@AAA@AA@@A@@@CA@@@@@A@@AA@@AA@@@AAA@@@@B@B@B@B@B@@AB@BA@@BA@@@AAA@A@ABAB@@A@@@C@@@@BA@@@@@A@@@@AA@@@A@@@@@A@@BA@A@A@@@AB@@@B@B@B@B@@AB@B@BA@@BA@CBA@ABA@@@@@@BAB@BC@AB@@@@@B@B@B@@@B@@AB@B@@A@@B@@@@@@@AA@@@@@@@C@@@AA@AAA@CCA@@AA@AAC@A@A@@@A@@@AC@AA@@A@@@AA@@A@A@AAA@@@AA@@C@A@ABA@@@A@A@@@@BA@@B@B@@@B@@ABA@@@A@@B@@@@@BABABABA@@B@B@B@BAB@@@@@@A@@@A@A@@@@BABAB@D@@@B@@@@AAA@@AA@@BADAB@DAB@DABA@@@@B@@@B@BAB@B@B@F@@@B@@@B@B@DAB@B@@@B@B@BB@@B@@@B@B@@@@@B@@@@@@A@@AAB@@A@@B@AA@@AA@A@@@@A@@A@@BABA@@@@@A@A@@A@@@A@AA@@@@A@A@@@AA@@@@@A@@A@@@@AA@A@@A@A@AB@@@@A@@B@@@@@@A@@@@@A@@@@@A@@@@@@@A@AAA@@AAAAAAA@@AA@@A@@B@BAB@B@B@@@BA@@B@@@@AB@@C@A@AB@@A@@B@@@@AAA@@@ABA@C@ABA@A@@BC@A@@BA@ABC@A@ABA@ABABEBEBEBABEHWFODKFOBCBCBC@ABA@ABCDKDGBIBE@CB@@ABCBCDKBABEBE@CBC@ABCBA@ABC@C@C@@@A@A@A@A@ABABCBCBCDCDABCBABC@@@C@E@IBE@ABAFEHGHGHEDCHGJIHGHG@@BA@ADOFQDKBKBGFSDG@CDK@ADI@EBCBCBE@EBGBC@ABGDMFOBKDKDK@CDKBGBEBE@CBCBE@GDI@CBGBKBIBEBCBI@EBIBC@CBC@CBGDMDOBKBC@CBIBEBKBGBC@CBC@CDQFW@@AC@C@CAE@A@C@@IM@IAABC@CAC@A@E@CBC@A@E@A@AAA@AB@@ABABADC@ABABABABA@@BA@@BA@@@A@@AA@A@@BA@C@@@ABCBC@IAK@CBABC@@BA@@@ABA@@B@@A@@B@@@@A@@B@AC@AAA@AA@@AB@@A@ABA@ABA@@@A@@BA@ABA@C@A@A@ACEACAGCIAECICI@AAECGCIAGCICIAE@E@@AK@IAC@G@IBI@EBGDGBMBKFG@CDEDEFEFEBCDEBGBEBGBK@I@KBE@CAC@G@K@O@I@C@GBE@GBC@CBEBIFKDGFE@AFIBCBCBE@IBIAO@Q@E@GAW@MDKBSD[D[D]FiHq@@@@@MBE@CBGBEBGDIBEDGBK@I@K@G@EAC@EAKAC@EACEKAEAE@A@CDAHEHCFCFIDCFKBAFEDCDCFADEBABC@ABABC@@DGDALEDAJCDAHEFCHCDAF@BAD@B@DAJCFAJADAFAJEFCFEDAHCJCJAJEHAFCFCHCF@HAFAHAB@JCHEDCFCHEBABCBCBGBG@EDEBG@GBABG@GAGAEACCACCA@@@CCCCACAC@E@E@E@A@A@@BAHADAHADAB@D@D@B@JCDAD@DAB@B@BAD@H@H@F@NAJBFAF@B@DAJGFCFEDCHGFIDEDEDGFGDEFKFIDGBCDE@CBABGFODGDMFODE@CFIFMFKDKDEHEDC@@BABADABAFE@C@AB@@C@CAA@CAC@E@CBCBCDC@ABABCHEFCBABABCBABA@CBEBABA@@@@@A@A@@@AB@BA@@AC@AAC@A@ABAAA@@@A@A@@@A@A@ABA@A@ABADEBA@A@CBA@CB@@AAA@ABA@ABABA@A@AAA@@DC@A@C@@BABABA@ABADA@A@A@A@A@CBC@A@ADCB@@AB@@ADA@@@AB@@A@A@@@ABA@ABA@A@AB@BABA@CBC@AA@@CBA@A@C@CBABADCBCBABABCBA@ABA@ABABABCBA@ABA@A@@BABAB@@A@C@AAA@A@A@@DE@A@A@C@A@A@@@@BA@AB@BA@CBCBABA@ABCBABA@A@@@A@A@AAC@ABA@@@AB@@A@@@AAA@CAAAC@A@C@@AC@C@@AAA@CAAAAACC@AAA@A@ADA@@@C@A@A@AAACAC@CACA@A@AAC@@AC@A@@@AAE@AACAA@@A@AAA@A@A@A@CB@@@A@A@ABA@CBA@AD@@A@@@A@CBC@E@A@A@@AA@AAG@E@C@C@CBCAG@I@EAABI@C@@@@@@@EBABGBABCBA@AA@@ACCCA@ACA@A@C@A@C@A@@@AACAAACAA@A@@BA@ABC@ABC@C@@@AAC@AC@@@AAA@A@@@AABCBABC@ABABC@A@A@AA@A@GAAAGCGAEAGACAEACACAAAEACAA@@A@@@A@AB@D@@@@A@AA@A@@@AAA@@A@@@CACCC@@AC@C@AB@BABC@A@@AA@A@@@ABA@AAA@ABABABE@@BCBA@A@AA@@AAE@A@AB@@@@ABAAA@A@EBA@ABAFAD@BAD@@ADA@A@@B@BAHAH@B@B@D@B@@@H@H@B@D@BAB@BABCBCBA@EBE@@BADA@AB@@AB@@ABABC@C@CBE@ABA@@B@B@HEDABA@AB@BG@A@ABADE@AB@DA@ABABAJGBAB@DAFA@@DAD@DA@@DCB@BA@@@A@AAA@A@A@A@AAEAC@CBC@ADABABCB@BAFEB@@CBA@@BAAC@C@CDABAB@BAB@B@P@B@BAB@@@DCDCBCBGBC@E@A@AAEAAACAE@@AC@CAA@A@@@A@A@@DABA@A@@AA@ACA@@A@@ABK@C@CBG@EBIBEA@BA@A@EBC@ADCBABEBCDE@ABC@EACCG@CACACACAGACBE@ABEBE@C@ABCAC@ACC@AIBGBE@E@UDODIBGBEBMBE@KBK@GAI@@@EAKAQCI@EAMCE@OAQCIAOCKAMCKAEACACAOCEA[IUEaKwS[GWGGAUCSASCWAQCQA_EYCGAYA]CaCC@A@CAG@EAKAIAGAG@EAE@GAE@CAA@E@A@EAC@E@E@E@ABC@G@EBG@A@C@ABE@EBKBGBE@EBG@E@IBC@I@C@E@I@I@I@O@GBE@E@A@A@CBEBGBIBEBEBCBGDC@A@ABE@K@K@G@K@C@E@GBC@IBGBG@A@GBA@K@I@GBC@QBG@EBK@KBG@IBKBC@A@A@A@CBGDEBGBCBC@IDGDE@CBEBKDIBEBIBG@KBODGBKBEBI@EBE@EBC@CBE@i@C@C@CAA@CBIAC@K@A@C@EAC@C@GAC@EAIAG@C@E@GAMAIAA@A@@@C@CBG@E@C@I@E@C@A@CAA@A@E@@@ABAB@@C@A@A@CACACAC@EAGAA@CAE@GAA@G@G@E@CACACCCCAAGAEAGCE@EAG@I@C@C@E@EDEBC@CBC@CBE@A@A@EAEAGAE@CAC@E@E@A@E@CAE@GAC@E@EBG@G@E@C@CBGAE@A@E@CAC@I@I@E@E@E@C@E@C@C@GBG@EBG@C@ABGBE@ABABA@A@A@EBK@ODI@C@GDYFSAS@UAQAK@KBG@_D_DUBeFQBYBMBK@GBG@C@E@I@I@GAG@G@GAA@E@KC@@A@EAIAGAIAEAOCE@C@G@G@C@E@EAC@K@A@CBE@CBA@CBABC@A@A@E@G@A@AAEAA@C@G@C@AACACAEACCC@C@C@EBCBE@C@IBC@C@A@C@A@C@A@GAC@EBC@C@E@EBI@A@@@C@G@CAC@C@CBC@EBEBGBCBCBA@E@G@G@I@C@GBI@E@G@EBK@G@O@M@@@M@I@EAA@C@A@CB@@A@C@A@A@@@ABC@ABG@A@C@K@G@E@C@I@CAC@E@A@CBC@CDA@A@E@C@C@E@cBkDqBaXi^{lk^e\\SRCDCDIDGH[NKHE@GBEBMBODMDIBGBMDGBMBK@MDMBG@K@GBKBEBMAI@OBI@CBICKCMEGAICCACCCEGCEEEEEAACEACAC@C@A@ABABA@@@A@A@AAA@CACACAA@EAEAGAE@GBC@C@AASFMDC@CBA@CBCFGHCBADGBCBIFEBA@Q@QB@AA@EECEAACCAEA@@@ABAB@@@BBBB@AD@DA@CBABABCDADCBC@EBMFODWNOHEHEHIHCBALAJ@JELGRERAJAFCLANGNCJAFAFAFAFAFEJCPELITGLGNIRGXGVGPAJBH@LDHHFNLRJZPTNPLJLHLDJALETIbAP@NER@T@PBNBPBJAPBHB\\@fBV@PBRBL@L@NBL@L@VARBL@LAL@F@ND`@H@JBR@TAJCdANAFGLEJINKNAFAHCHCNAHAFAB@@BBBF@DCRAN@DAD@B@@AD@BAF@@@BA@@B@B@@AD@@@B@BADAD@B@BAD@B@B@@@B@DAB@BAD@BAH@@@@QdCF@BAB@BCHAHCF@DELAFCHADCH@BAFABABM\\@@AB@BABADAB@@AB@@ABA@@BABABA@@@AB@BABADA@ABADAD@B@@@HAH@D@B@BAD@B@@@D@D@F@B@D@B@DAB@@@D@@AB@@@BCD@DAD@D@@AB@B@@@@ABAB@@@@AB@@ABAB@@AB@@ABABCDABCDABADCBCFEFABADA@CDEDGDABABA@AB@BABADABADABCDAD@BABABABA@ABA@ABAB@BC@@@@@A@C@@@E@A@C@AB@@AB@@@@A@AB@BA@ADABCF@@CBCDCDABEDEDABABABAB@@@@AD@@ABABABABA@A@AB@BAB@B@BBD@B@DBF@F@F@D@D@D@B@B@DBB@B@D@B@BBB@BBBDBBBDBBBBBB@@B@BBB@BBB@BAB@B@@ABA@@B@B@@@@@@AB@@A@AB@@A@AB@BA@@B@B@@AF@B@D@@@DA@@B@@AB@@@BABAB@BAB@B@@A@ABA@@B@B@@@B@@BB@BB@@BBB@B@@@B@B@@AB@B@@@B@B@@@@@B@B@@B@B@@BB@B@BBB@DD@@@@@@DBBB@@@BB@@B@@BB@BB@@@@BB@@@B@B@@@@BB@@@@B@B@D@@@D@@AB@B@BAB@@@BAB@B@B@@A@@BAB@@ABABAB@@@@@B@B@B@@@D@BBB@BBB@BBB@B@@@BB@@@@B@BBB@@@BBB@B@@@B@B@@@B@@@@AB@@@B@B@@@BAB@B@@@B@@A@@BAB@@@@@B@@BD@@@@@BBBB@@@D@B@B@B@BB@@BB@@BB@@@BAB@@A@@BA@AB@@AB@@@B@@@B@@@BBBB@DB@@@BB@@B@@B@@B@BBB@@BBB@@@BB@@B@BB@@@@@B@@BBDD@@@D@B@BDB@@@BB@@B@@B@@@@B@@@@@@BB@@@@B@@@B@@B@@@@@B@@BB@@@B@@B@@@BB@@@@@B@@@B@BBB@@@@AB@@AB@BAB@B@@@B@@@B@@BB@BB@@BBBBB@@@BB@BB@@BBB@@@@B@@@@@D@@@BAB@BA@@@@B@B@B@@@BBBA@@B@@@@AB@BAD@B@DBB@B@BAB@@@B@@AB@@@BA@A@@@A@@B@@AB@BAB@@AB@B@B@B@@@B@@@B@@@@AB@@AB@@@@@BA@@B@@@B@@@D@DBDB@@BDB@BBBBD@D@BBB@BBB@B@B@B@@BF@@@D@B@@@B@@@B@B@B@D@BBB@B@@BB@D@@BB@DBB@BBDBF@B@DBD@BBD@FBF@B@B@@@B@BBF@D@BBB@@@F@DBB@@@B@B@B@D@@@B@@BB@B@D@B@B@B@BBD@FBDBFBD@B@@@@BBBBDDBB@@BBBB@B@@BB@BDF@BFJ@@BD@BBBBD@BBB@@BD@@DF@@@DBB@BBB@B@@BFB@BJBB@B@DBB@BDFBDBDFH@@@BBDB@@B@B@B@BA@@BBB@@@@BDBBBB@B@@BD@@BB@BBDBB@@@B@B@B@@@B@B@@@B@B@B@B@BAB@B@@AB@B@B@DAB@BABBBABDDDFBDBFBDBDBD@DB@@BBDB@@BBBBB@BBD@BBBBBB@BB@BB@@B@BB@@BBBB@BDB@@BDDBBBB@B@@BB@BB@B@DB@BDBBBDFBBDDBBBDDFBDDDBB@D@BBB@BBBBBBBDDBBFBDDFDFBDBB@D@BBB@@@BBBBBBDBBBBBFBBBFBDBHDBBBBDF@BDFBDBBDFBDBBFFDBDBD@B@FBH@B@HBB@F@@@B@H@H@D@BBB@BBB@DBDDB@DBB@DBD@DBB@BB@@BBBBD@DDBB@@BB@@BBBBB@BBBBDBBBBBFDDDBDBBBBBBHFBBHHBBDDFDBBFD@@BBBBDBDD@@DBDDB@@BBBB@BBDBBB@@@@BBDB@BD@BBB@@BBB@BB@BBDDB@DBBDB@BBB@DBD@@BDBBBDBBBBBB@@BBBBDB@@BBBB@@B@@BBB@BBDBBDDBBBBBDBBBB@BBBB@BBBB@BB@BB@@BDBDBBBFDDB@BBBB@@BB@BDBBBBBBDBBB@BB@@BB@@BDDBBBBBBB@@@@@BBB@BBB@BBB@@BB@@BBBB@@BB@BBBBBBHD@BB@@BBBBB@B@FDDDFDFBDDDFHBDFDDDHFFHFDBDDHBFDHFLFHDDDFDJFLHJBDDBBDBDDDBBBBBBDDDDDDBBBDBDB@BB@BBBBBBDBD@BBBBDDDBBBBBDBBBBBBBB@BDDDFBDBFDDBDBBBBBDBB@@DD@B@D@@BF@D@DBD@B@BBB@B@B@B@BB@BD@@@BLA@@@B@B@B@B@B@BBB@B@@BD@D@@BH@BBB@DBB@@DB@BB@@BB@BB@@@@@@@B@B@B@B@B@D@@@@@BB@@BBB@H@D@J@BBF@BA@@B@BA@@BB@@BBB@@@DBB@@@B@B@@AB@B@B@@@D@@@B@@A@@BA@@B@@AB@@BBAB@@@B@@@@@BB@@@@@@BA@@@AB@@ABA@@@A@@BA@@@AB@BC@@@@@@B@@@@A@@B@@@@A@@@AB@@AB@@@BA@@@A@@B@@@B@B@@@@ABA@@@@B@@@B@@@B@B@D@B@B@@@B@B@@BD@B@@@B@@DD@BBB@@BD@B@B@B@B@@AB@@@BA@@F@@@B@B@@BB@@@BB@B@@B@DBB@B@B@@@B@B@@AFAB@@BB@@@BA@@@CB@@A@@B@@@B@@@@BB@B@@A@CD@@AB@@@BB@@@@B@@@@AB@@BB@@@@@@@B@@@BB@@@AB@B@@B@@@@B@@@@@BAB@B@@@D@B@@AB@B@@@@@@A@@@CDBFABCBA@AB@DDBFBBBBDDFBDBB@FDF@B@DDJABABAB@DBDBHBDHFBDBDBJBBJH@@BB@@BB@@@BBB@@@@@BFDDFBDBDB@BB@B@DA@@BA@ABAD@@@@@B@BBD@@@B@B@B@@@@BBBB@@@B@B@@@BAB@@ABAB@D@B@@AB@@ABABABABA@A@CAG@C@C@@@AB@@@@AB@B@@CD@@ADA@AB@@A@@@AB@@@@@B@@B@BB@@DBBB@@@B@@@@BB@@@B@@@B@BA@BB@@BB@B@BBF@F@BLDJFLDLFJF@@@@BB@@@@@@B@@@@@@@@BB@@B@@@B@@@@@B@@@@A@@B@@@@@B@B@@@@@B@B@@@@@B@@@@AB@@@@A@@@@@@@A@@@@@@@@@BB@@@@@B@@A@@B@@A@@@@@A@@@@BA@@@@@@@@B@@B@@@B@B@@@B@@B@@B@@B@@B@@@BB@@@@@@B@@@@A@@B@@@B@@@@AB@B@@@BBB@@@@@BA@@B@@AB@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@B@BA@@B@@@@@@@B@B@@@@@B@@@@@BA@@B@BA@@BBB@@@B@B@@@BB@@@@B@@@B@@@@@B@@@B@B@@BB@@@B@B@@@D@@@B@B@BB@@B@@@B@@@D@D@B@@@BB@@@BBD@B@@@BA@AB@@@@@@@B@B@@@B@@@@BB@B@@@@B@@B@B@@@@@BABABABAB@BB@@B@B@@@@@BB@@@@D@@@BB@B@@@@B@@@@ABA@ABA@ABABA@@DB@@@@BB@B@B@@@B@D@B@B@@@B@B@BBB@B@B@B@@@B@@@@@BA@@@@@A@@B@BA@@B@@@B@@@B@@@B@B@BBBBBBBB@BB@@@@@B@@@B@DBD@@@B@@BB@@BB@BB@@BB@@@@B@@@@@B@@@BA@@@AACB@@A@@BABCBABC@@BA@@B@B@B@@@D@B@@@DBB@BB@@@@B@@@B@BAB@B@@@B@B@BB@@B@@@@BB@@BBBBBBB@@@B@@@B@@@B@@B@B@DAD@B@@@@@B@@BB@B@B@B@BBB@@@BBDBB@DBDBB@B@@@B@@AB@@ABABABAB@DAB@BAB@B@@B@@@@@@@B@B@@@BB@@B@BBB@DBB@@B@BBB@B@@@D@BBB@@@BBBB@BBB@@B@@BD@BBDBB@B@@@B@@@B@B@@@BAB@B@B@B@B@B@@@BABB@@B@@@B@B@B@DBB@BB@BBBDBBBB@DB@@D@FBB@DB@@B@B@@AD@BA@ABC@ABA@AB@BA@A@@@A@@B@BAB@B@B@D@BAB@B@B@D@@@B@B@@@DAB@@AB@BCDABAB@B@B@B@BAB@@@D@B@B@B@BB@@B@BDBBBBB@BB@@D@D@@@B@B@D@B@B@@@B@DABB@@B@B@B@@@@@BAB@B@@@B@@@B@@@DB@@@@B@@@@@BA@@BAB@@@@AB@BA@@B@B@B@@@@@D@D@B@B@@AB@@AB@BAB@BAB@B@B@F@B@B@@AB@BABA@@BA@AB@@AB@@@BA@ADAD@@@BA@AB@@AB@@A@@B@@@B@B@B@B@B@D@@@B@B@BAB@BAB@@@@@BA@ABAB@@ABA@@B@B@B@B@B@BABAB@BAB@BAB@@AB@BABABAB@B@@@B@@@B@@BBD@@BBB@@B@@@@@B@@@@BBB@@BB@D@B@B@B@B@B@BBB@B@@@B@B@B@BAB@D@B@B@D@DBB@D@BBD@D@@@D@DBB@@AB@B@BADABAD@@AB@BCBA@A" ],
														"encodeOffsets" : [ [
																92542, 44552 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "650402",
													"properties" : {
														"name" : "高昌区",
														"cp" : [ 89.182324,
																42.947627 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DFJHFHBHBJBHFDHHHD`JDB@@@@B@BB@@B@@BBB@@B@B@@@BBB@BBB@@BDB@@BBB@@@BBBB@@BBB@@@@BB@@@@@BB@BB@@B@@BBB@@BB@@BBDBBBB@@@DBB@D@B@DAD@DA@ABCBA@@B@@@B@BBB@@@@@@@@@B@@@@@@A@@@@@@@@B@@@B@@@@@@@B@@@@@@@B@@@@BB@@@BB@@@@BB@@@@@@B@B@B@BAB@@BB@@@@@B@@B@@@@@@@@B@@@@@@@B@@A@@@A@@@@B@@@BA@@@BB@@@@@@@@@B@@@@@B@@@@@B@B@@@@AB@@@@@B@@@@@B@@B@@B@@@@@B@@@@@BBB@@BBB@@@@@@B@@@@AB@@@@@DA@@DA@@BA@@BAB@B@B@B@B@@@@@B@B@@@@@@AB@@@@@@@BA@@@B@@B@@@@B@@@@BB@@B@B@@@@@B@@@@BB@@@@@@@B@@@@AB@@A@@BA@@@@B@@BBB@BB@@DB@@BBB@@@@@@B@@B@@@@@B@@AB@@@B@B@@@BA@@@@B@@B@@B@@@@@B@B@@@DA@@@@B@@@B@@@@@B@@AB@@@@A@@BA@A@@@@@@B@@@@@B@B@@@BA@@@@@A@@@A@@B@@@B@BAB@B@B@B@@@D@D@@@@BB@@@B@@BB@@@B@B@B@@@@@B@@@@B@@@@@B@@@B@@AB@@@@AB@@@@@@@@@@@@@B@@@@B@@@@@@AB@@@BAB@@@B@BA@@@@D@@AB@@@B@@@B@B@@@DBBBB@@@B@@@BD@@BB@@BBB@BBB@D@BBB@DBB@B@B@B@BA@@@@BA@@@AA@@A@@@@B@B@B@@BB@B@@@@A@@BA@@B@BAD@D@B@@@B@@@@@BB@@@@BB@@@@BA@@B@@AB@B@B@@@B@B@@@@@BAB@@@B@B@B@B@@@B@B@B@@@B@@@B@B@B@B@B@BAB@B@@@B@@@B@@@@@B@@@@B@@@@@B@@@B@@@@AB@B@@@B@@A@@B@@@@@@BB@@B@B@@@DBB@B@@BB@BB@@@@B@@B@@@@B@@@BB@@@@@@B@B@@@BBB@B@@@BB@@@@BBB@B@DBB@BB@@B@@@@@B@@BA@@@@B@B@@@B@@@@B@B@@BB@B@B@B@B@@@B@@@B@BA@@B@@@D@B@BBB@B@@@B@BB@@B@B@BBB@B@B@@@@@BB@@@@BB@@B@@@B@@@BB@@B@@@@B@@@@BB@@B@@@@BB@@@@@B@@B@@@BB@@@@@@B@@B@@@BB@@B@B@D@B@B@B@B@D@B@B@B@@@@@B@@@B@@@BA@@@@@@B@B@@@B@@@B@B@B@@@@@@BB@@@B@BBB@BAB@@@B@@@B@B@@@B@@@@@@B@@BA@@@@@@@A@@@@B@@@@@B@@@B@@B@@@BB@@@@BB@@@@@BB@@B@@B@BB@@@B@@BB@@@@@@@BB@@@@BB@B@@B@@@@@B@@B@@@@BB@@@B@@A@@B@@B@@B@@B@@@B@@@@B@@@@@@@BB@@@@@@@B@@@@AB@@@B@B@@@@@@@@@B@@AB@B@B@B@B@B@B@B@B@@@@@@@BB@@@@B@D@B@B@@@B@@@B@@@B@@@B@BBBAD@B@@@B@B@BAB@B@@@B@@AB@@@@@B@B@B@B@D@B@B@B@BA@@B@@@@@B@@@B@@@B@B@B@B@B@@@B@F@D@DAD@D@B@D@@@DAD@D@B@@@D@BAB@@@D@D@DAB@B@DA@@@BB@@@@BB@BB@@B@@BB@@B@@@BBBB@BB@@BB@@@@BBB@@@BBB@@@B@BB@B@@BBBB@@@@@BBBAB@@@@B@@@B@@@BB@@B@@@BBBBB@@B@@@@BB@@B@@B@@B@@BDBB@@@B@B@D@BBBBB@B@BB@@B@@BB@@@BB@@@@D@@@B@DBB@B@BBB@D@BB@@BB@@B@@@DBB@B@B@BBDBDB@@@@D@D@DBB@BBB@B@D@B@F@@@BBB@BBB@BB@@@DB@@@BBB@BB@@@B@@AD@D@B@B@B@BBBBDBD@@@B@@@B@B@BCD@@@@@BB@@@DBDB@BBB@@@@@BAD@D@@@B@BBB@BBH@B@BAB@@@B@@BD@B@B@@@@AB@B@@@B@B@B@@@B@@@DAB@B@@BB@BBBBB@@@B@@B@@@@BBBB@@@@@@@BB@@@@@BB@@B@@BDB@@@@B@@B@@@BB@@B@@B@@B@@BB@@@@BB@@B@BDD@BDF@BBB@B@@@BAB@@@BBB@@B@@BB@BHDD@BBBBB@@@B@B@@@DA@B@@BBBB@BB@@@BBB@D@BB@B@@@BBBB@B@@@BBBBB@B@BB@@B@@@@@BBBABAB@B@@@B@@ABA@@BAB@@@B@B@@ADA@A@CB@@CB@BA@A@ABAB@@@@@@ABAB@B@@@BAB@@@B@@AB@BA@@BC@@B@BBHFL@F@B@DCHABGFGHA@CD@BABABCDAHABC@AB@BCDBBDFAF@BBBB@@B@@J@H@D@DAD@DEDCBEDCFAFAFAF@D@F@D@FAFADCD@FAH@D@@ABCBCBADAH@HBJ@HBFBFBF@DBFAFCDABCDAHALAH@F@HEFCHAH@JCD@FAFBH@DDBDDBJBLAJAHAF@HDFBF@HAHAHBH@F@HAH@DAFAH@FCFAHAB@DCHCHCFAFCFCDCBCCC@E@CBEHCHADADADEDE@CCEACBEAGCGAA@@B@BAB@@AB@B@BA@@B@B@@AB@B@@ABA@A@@@CBA@A@@@A@@@A@@@@B@B@B@@@JCJ@HDDDFDFBFAFBBBBDBFBDJBFBBB@@B@@@@@BBB@BB@BBB@B@B@B@@BB@@@BB@@BB@@@@@B@B@B@@AD@B@B@B@B@B@@@BBB@B@B@BABBB@@@B@BB@@@AB@@@@ABAB@@AB@B@B@@AB@B@BAB@BA@@BAB@BA@@BAB@BABAB@B@@ABA@@B@B@B@BAD@F@B@B@@@B@BA@@@@BA@@@A@A@@@@@A@A@@@ABA@@@@@A@@@A@@@AA@@A@@B@BA@@@@BAB@BAB@@AB@BABA@A@@BA@@AABA@@@@@A@A@@@ABA@@@@@AB@@A@@@@BA@@@@@ABA@@@@@@@A@A@@@A@@@AAA@A@@A@@A@@@@BAB@B@BA@@B@B@B@@@BA@@B@@@@AB@@@B@@@D@BAB@B@@@BBB@B@@@B@@@B@@AB@BAB@B@@@BAB@B@B@@@B@B@B@@@B@@@@@B@@AB@@@D@BAB@B@@@BABB@@B@B@B@@@B@B@@AB@@@@@B@@@B@@@BA@@@@BA@A@ABA@@@@@A@A@@A@@@@@A@@@@@@A@@@A@@@A@@@A@A@@@AB@@@@A@@@@@@@@@A@@@AAA@@BA@@@A@@@AB@@A@@@@BA@@@@@A@@@@@@@@@AB@@A@@@@@A@@@@@@@@@A@@@@@A@@BA@@BAB@BA@@B@@@B@@@B@BAB@@@B@BA@@B@@@BAB@@@B@@@@@@@@A@@@@BA@@@A@@@A@@@@BC@@@AB@@A@@B@@A@@@@BA@@DBB@@@B@@@@@B@B@@BBB@BBB@@BB@@BBB@B@B@B@@@B@B@BA@@@@B@B@DA@@DB@@D@B@B@@@B@@@@@B@@AB@B@BA@@B@@@@AB@BA@@@ABA@AB@@@@@B@FBD@B@BB@@B@BAB@@@B@@@B@B@@@BAB@@@@@B@@@B@B@@@B@B@B@B@@@B@@@B@@@@@DBB@BBB@BAD@B@BAB@B@B@@@B@@@B@B@@@B@BBB@@@@@B@@@B@@B@@BB@@BB@BB@BB@BB@@@B@@AB@B@B@@@@BB@@@@@B@@@@@@@B@@@@@@@B@BA@@@@B@@@B@B@@@BAB@B@@AB@@@BAB@@@B@@AB@@@B@@AB@@@B@@@BB@@B@@@@@B@@@B@@@B@@@B@@@@@B@@@B@@@B@B@B@B@@@@@B@B@@@@AB@BA@@BAB@BA@@B@@@DA@@@@B@@@@A@@BA@@BA@@B@DBB@B@@@B@@@B@@AB@@@B@B@BA@@BA@@BA@@@@BA@AB@BA@@BAB@@ABA@@@@BA@@B@B@B@BBD@B@B@BBDB@@B@B@@@BA@@B@@@B@@@B@B@@@B@@@@@B@@@@@BA@@B@@@B@@@@@@@B@@@@AB@@@@@@@B@@AB@@ABAB@B@B@BAB@B@D@DAD@@@B@@@B@B@@@B@@B@@B@@@B@B@B@B@B@@@B@@@@@@@@@@@B@@@B@@@B@@@@@B@@@B@@@B@B@@@@@@@D@B@@@@@B@@@B@@@@@B@@@B@@@@@@AB@@@@@B@B@B@B@B@B@B@B@@@B@B@@@B@@@B@@AB@@@B@@@B@@@BAB@@@BAB@@@B@BAB@@@@@B@B@@@B@@A@@B@D@B@B@@@@@@@BA@@BA@@@@B@@@B@B@B@B@B@@B@@@@BB@@@@B@B@B@@@BB@@B@@@@@@@@@@@@@@AA@@A@@@AAA@A@@@@@@@C@@@A@@@A@@@@B@@@BAB@@@B@B@@@B@B@@@@@B@B@BAB@@@B@@@B@@@B@B@B@B@@@B@@@@@B@@@@@@@BAB@@AB@B@@@@@B@@@B@@B@@BB@BB@@B@@BB@@@@@@B@@BB@@@@B@@B@@@B@@BB@@@B@@@@@@B@@@@@@@@@@A@@BA@@B@@@B@@@B@@@@@@@@@@@@@B@@@@@@B@@@B@B@@B@@B@@AB@@@B@@@B@B@B@@@BB@@BAD@B@@@B@BB@@@@FAFAFE@@@@BA@@@A@@B@A@@AB@@@B@B@@A@@B@@@B@@@BAD@DD@DBBF@FAHAB@BB@@@@B@@B@@@B@@@B@@@BB@@@@@@B@@@@@@BB@@@@@@@@@@BA@@@@D@FAFB@BDDADAD@@@@@@A@@BA@@@@B@@@B@@BB@@@@BB@@@@BBB@@@@BB@@@@BAF@DFDBFFFDFBD@FAD@@AB@@@@@@BB@@@@@@@BB@@@B@@AB@B@@@B@@@B@@@B@@@BA@@@AB@@@BAB@@AB@@AB@@AB@@@B@@AB@B@@@@AB@@@@@BB@@BB@@BB@@BB@@@BB@@@B@@@@@@BB@@@@@@@@BB@@@@@@@@@@@BA@@B@@@@@@@B@@@@@@BB@@@@@@@BB@@@@@@B@@B@@@@@A@@@@B@@@@@B@@@@AB@@@@@@@@@@@@A@@@@@@B@@@@@B@@@B@B@@@D@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@A@@@@A@@B@@AB@@@B@@@@@B@@@B@@BB@B@@BB@@@@@B@@BBA@@B@@@BAB@@@B@B@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@B@BBB@@@B@@@@BA@@@@@@B@@@@@@@B@@@@B@@@B@@B@@B@@@@@B@@@@BB@@@B@@@@@B@BA@@@@B@@@@AB@B@@A@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@@@@@AB@@@@BB@@@@A@@B@@@@@@@B@@@@@@@@@B@@@B@@@@@B@B@@B@@B@@@@@B@@@@B@@B@@BB@@B@@@BB@@@@B@@@@@@B@@@@@BBB@@@B@@@B@@@B@@@B@B@@@B@B@@@B@@@B@BAB@B@F@B@H@DB@@D@@@@@B@@@B@@AB@@@B@@BBBJAHA@@B@B@@@BAB@@@@@B@B@@@B@@@B@@@@@B@@@BA@@FABAB@BA@@@@B@@@@@@@B@@AB@@@BA@@B@@AB@B@BA@@B@@AB@BA@@B@@@B@@A@@@AB@@@@AB@@@@AB@B@B@B@FB@@@@B@@@B@B@@@B@@@@@B@@@B@@@B@B@@@B@@@@@@A@AAA@@AAB@@A@A@@@A@@AA@@@@@A@@AACA@@AAA@@@@A@@@@BA@@B@@@BAB@BC@@DC@@@ABA@@@@BA@@D@D@H@DBB@B@BABABABA@@BA@@@A@CBABA@@BA@A@@@A@A@@AAAA@@@@@A@A@A@@AC@A@A@@@@BCBAB@@AB@@C@AAAA@ACACCEEC@A@@@@AA@A@@AA@@AA@@IGAAAIACACGEACAGAC@CBABABACI@C@ACE@EAAACCEACAAEACA@CBAB@DABAAEDC@@B@@@@@@@@ABA@@@A@C@@@ABA@A@@@@@A@@A@@@@ABA@@A@@A@@@A@@@@@@AA@@BA@@@@@A@@A@@A@@BA@@DCB@@@@AAA@@@@@A@@@AB@@@DA@@B@@A@@AA@@BABE@@@A@A@@@A@AAA@C@AA@A@@A@@AA@@@A@A@@@EB@@A@@BA@@@A@A@A@AAC@@AA@ACC@@@A@@@AAC@@@A@A@@@A@A@C@A@A@@@A@@@A@@B@BA@@@@@A@A@@@AB@@@B@@A@@BA@@BA@@B@@@@@@AB@@@@@@A@@@@D@@ABA@@B@@AB@@@B@BA@@BA@@B@@A@@@@A@@A@@@@@A@@BAAA@@BA@@@AB@@AB@@@@A@@@C@@@A@ABA@@@A@A@@AA@C@@AA@AA@@AB@@A@AB@@AAE@A@I@C@GAA@AA@@A@@@@@C@A@A@A@A@A@@@@@@AAA@@AA@@ACA@@AA@CAA@AAG@@@CAC@@@AAA@A@A@A@A@A@A@@KB@A@@ACA@@A@A@A@AAA@A@AAC@C@CAE@@@C@ACC@@AAACAAAAACCCAEACCECC@AAAAAAAAAACAAAACCACAA@AACACAAAA@AAAA@ACACAACCCCCCAAAAAACCACACCAACGIEKCICECCEGEKCGAECGACECEGGECCECACEGCCACCECECC@E@AAAAA@AA@@AGCAAAAAAA@@AA@AA@AA@@AA@AAA@AAA@AA@@@@A@AAAAAACC@AA@@AA@@AAACAAAAAAAACA@@AA@AA@ACAECAACACA@AA@@AAAA@AA@AAAAAA@AACAAAAACAACCAAAA@AA@@@AA@AA@AA@ACAA@AA@AAAACAAACA@AC@CAA@AAA@ACCAA@CCAAA@@AAA@AA@AAC@@ACAAA@@@@AACAAAA@AA@AA@CCCA@@CCCAAAAA@@ECAAECCCAAGGAAGEAAAAAAACCCECAAAACAAAAAA@AAAA@@AA@@AACCC@AAAA@@AAA@CAC@CAA@CAA@CCCAA@AAA@AAC@G@G@A@@@E@A@GAA@G@EAA@C@CACAEEAAACCEAAACCE@ACEAAAAGCCAEAAAEAAAAACAAAAAAA@@A@AAC@A@CAEAECCCEAAACCAAAAAA@AAA@A@CAACCACCEACAACCAACEAACA@ACAA@A@@AAA@@@AAAAACC@AA@ACA@AA@AA@@A@AA@@AAAA@AAAA@AAC@AAAAA@AA@AC@AA@@CACACACAEACCECCBAAABA@ABA@C@A@ABA@@@ABA@A@A@A@A@A@@@A@A@@@A@A@A@@AAAC@AAA@@AC@@@AAAAAAC@@@@AA@AB@@A@A@A@AA@AC@A@@EGACACCE@AAA@C@AAAAIA@AE@@@AAA@AAA@C@@CE@@AC@@AA@AACAA@AAC@@EI@ACE@AAA@@@AAAAA@@AACCAAAA@@@@@AACAEAC@EAC@A@A@A@A@C@AAA@@@A@@@C@A@A@A@@AA@C@E@@AA@A@CAE@A@A@@@A@AAE@EAC@AAC@C@AAEAC@AAA@CAA@@@CAA@@@AAA@A@C@A@A@A@@@A@@@A@C@@AE@@@A@A@AAA@AAA@A@CACAA@ACA@AA@AC@C@C@@@A@@@AB@@A@@@@BA@@BA@@@@@A@@@A@@@A@A@ABA@@BA@ABA@@@AB@@@B@B@@A@@BA@@@A@@BA@A@AAA@C@ABC@ABA@@@@@AB@AA@A@@@A@A@A@@B@@ABA@A@@@C@@@@@A@@A@AA@@AAA@@A@@AAAA@AA@@AAA@@@A@@@A@@@ABA@ABA@@BA@@@@AA@A@A@@@A@@@@AA@@A@@@@A@@AA@@@A@@@@@AA@@@A@@@@@AA@@@@@@@A@@A@@@@AA@@A@@CA@A@A@C@@CCAA@@@A@@@@AAA@@@AA@@A@AA@@AA@A@AA@@@@AA@@A@@CAA@AA@A@@@A@@@A@@BA@@BAB@@AB@@@BA@A@@AA@@AA@@AAA@A@A@C@@@A@AA@A@@@@AC@@@A@@@@BA@AB@@@@A@@@ABA@A@@@A@A@@BA@@@@@A@@@A@A@@@AAA@A@@AA@A@A@@A@@A@@@AAA@AAA@AAA@A@C@@@A@A@A@@@@BABABA@@BA@AB@@@@A@ABA@A@@BA@A@ABA@@@C@@@C@A@A@@A@@A@@A@A@@@A@@A@@A@@AAA@@@AA@@A@@AACA@@@@@@CCA@AAA@A@@AA@A@@@@A@A@@@@@A@A@@@ABA@@@A@A@@@AAA@AA@@AAA@@@A@@@A@AB@BAB@@@@ABA@ABABA@A@@BA@@@AB@@C@@@C@ABE@@@A@AB@@ABAB@@@BAB@@@BA@@@@@@@A@AB@BA@@@ABA@AAA@AAA@A@AA@AAAACAAACAAA@AAA@A@A@C@AAA@C@A@A@C@C@C@E@EAE@C@AAC@A@ABA@ABAB@B@BABABABA@@BC@@@@BABABABAFCFCBADCDCDA@@DEBABCB@@ABAB@@@@@BA@@BAD@B@F@@@D@B@@@@@D@@ABABAB@BAB@BABABA@ABCDCBABCBABCBA@ABAB@BABAHCFCDCB@BCBAFEDEDABCBADCBADCBABA@@BA@@BABA@@BA@@@@BABA@@@@@ABA@@@CBC@CDC@A@@BA@@@C@@BA@C@A@C@A@E@C@C@@@ABC@A@A@CBG@G@@@ABCBCBAB@BCBA@ABA@@B@BABA@AB@BA@@BA@@BABCBA@ABA@@N[BABABE@ADGBCDGBEFK@CDEBGDG@ABA@ADERc@@@@BG@ABC@ABA@C@A@@@A@ABC@A@ABCBC@A@A@@BC@@@A@AB@@A@@BE@ABC@@@ABC@CBMDQ@CAEAA@@BABEBGDMDGBGBELMJMFIHKBEBMDcBI@SAQ@I@GC_@M@EBK@KAKBQ@U@KAK@M@KAKAQ@OAU@eA[AGBOAIAOAM@O@SFQ@MBOJaFSBKCIGKIKOKSMYOQIMKGECG@KAGBIHOHUHWJQHMHKJSFKDOFIBEBEBEBEBEDIHMBMDKBEBIFQHQFK@IBIBKDAJGFGFGPGXMPCNEFAD@DABCDCBABADAB@@CBCA@AA@AABCBIBODO@G@G@CAGEKCMAEBQBMDIBGDMBEBM@QFEBE@GAOAQCKAMAIACACACACBGBIBA@C@GAGAE@I@C@CDA@C@E@I@IAI@CBCDBBBDB@@BAFAHADMDMDO@UBI@GBKBGFABBD@D@BCFIDKDIDMBE@KAMAEAGBMDA@AB@DABE@G@G@AA@A@E@C@E@CAEAAA@CBMBG@KBI@IBIBA@@@AACAE@G@G@EBA@A@EAEAGCC@AAACAAAAEAECEAC@A@C@ABC@C@E@E@A@CAE@A@AACEAA@C@AA@@A@F@DAJ@F@F@F@P@FBLHPBFDHHNBLANCJCJIJGDKDUFSDWDYBIDOFKDIDCFAFBHAFEDABKBODGDIBGBAFBFBHBHAHAHAJALAH@HBXEXGXCTGJETOXKTOVGLAFHJLPLNLRJRHNTXNXLNLLFJHJHHJNFLDHDZBVCTCXIRILSXINADGFKJQLULSNOJMHKFIFOHQHQFUDQFKDKDOF[NQJ[HSHSNMLEHETEJAZATKPIZEJGNCF@@@@ABADADCD@B@BAB@BADCFAF@@AJCH@DBD@F@D@BBD@@@B@B@B@B@D@BBD@D@J@F@FAH@HAF@FAB@@@FAFAF@DBH@@@F@@BB@BBBBBB@BBDBDBBDDHFJBBDB@@BBBD@@BD@@DBBBB@BBBB@BBBBBBBB@BBDBB@F@@@B@D@F@BBBB@BBDBBDBB@DBDBBBDBD@@@FBBBD@@@BBBB@@BBBD@B@BBBBB@B@@DDBBBBB@BBBD@@@@BDBB@D@B@BA@@BABAB@@AB@@A@@BA@A@AB@@@@@BA@@@@BA@A@@@@BA@@@@@ABA@@BA@@@AB@@@@AB@@@BA@@BA@@@AB@@A@@BA@@B@@@@AB@B@B@@AB@@@@ABA@@B@@@@A@@B@@@@AB@@@@@B@BA@@@@@@B@@@@AB@@A@@BA@@@AB@@A@@BA@@@AB@@ABABAB@@AB@@ABA@@@@@@B@@AB@@@@@B@@@B@B@@A@@B@@A@@@AB@@@@A@AB@@A@@@AB@@@@A@ABA@AB@@A@@@@BA@@@AB@@A@@@@@A@@@A@A@@@A@A@@@ABA@@@C@A@@BA@A@@@@B@B@@@@@B@@A@@B@@@@@B@@@B@B@BA@@@AB@@@@@B@@@@@B@@@@@@A@@@@@@B@@@@@B@@A@A@A@AB@@ABA@ABABABA@A@A@@BAA@@A@AAA@@@A@A@A@A@AAA@C@AAA@C@C@A@AAA@A@AAAACA@AA@@@@B@@@BAB@BAB@BAB@@@B@@@B@@@@B@BB@@@@@BB@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@B@@@B@@@@@B@@B@@@@@@@BA@@B@@@@@B@B@@@B@@@B@@@D@@@B@BBB@DBB@BB@BDB@BBBB@BB@@B@B@BB@@BBB@@@B@B@@BBBB@@BDBD@@@B@@BD@B@DB@@B@DAB@@@BAB@@AB@@AB@B@DAB@@@BA@AB@@@@@@@BB@BBB@@B@@BB@@@@BBB@B@@@B@B@@@@@@B@@@B@@@B@@@BB@B@BBB@BBBB@@BB@@@@AB@B@B@BA@@B@B@B@@@B@@@@B@@@@@@@@@B@@@@@B@@@@B@@@BB@@@B@BBB@B@@@BB@@@B@@@B@@B@BB@BB@BB@B@@BBBB@@BBB@B@BBB@@@BB@@BB@@BB@BBB@@BBA@@BB@@B@@@@B@@BB@@@@@LFFDDBFBFBFBJBDBDBB@DBBD@B@BAB@D@B@BD@@BBBBB@F@BB@DBB@BBB@BB@BB@BD@DBD@B@BAB@@@D@@@B@BBD@B@@BB@BA@@BAB@BAB@@A@@B@@@DB@BBBDB@@B@BBB@B@BAD@@@BAB@B@B@B@@@B@B@B@BBB@@@B@@BB@@@@B@BBB@BB@@@B@@@D@B@@@@@B@DCB@D@@@@@BDBDBBBD@B@B@@BB@A@@BA@@B@B@@BBB@D@B@BA@@BB@@AB@@ABA@@B@@AB@D@BABA@ABA@C@A@A@@BABBBBBBBBDBB@DBB@B@B@B@B@B@BB@BBBB@BBB@BA@@@ABA@A@AB@B@BBBB@BBB@@BAB@@AB@@ABA@A@ABBB@@BBB@BB@BB@BBB@@BB@DBB@BBBBB@BB@BB@BB@B@B@BABAB@B@B@BBBB@D@@@B@@B@BBDB@AB@B@@AB@B@BBBBB@B@B@B@@BB@@B@@@BBBBBB@@@B@BB@B@BBBBBB@@BBB@BB@@@@BB@B@@@@BB@@@@@B@@@@@@@@@D@@@B@@@@BB@BAB@@B@@@BBBB@@BB@@@@@BB@B@@@@BB@B@@@BBB@@BB@B@@@@BBB@@BBBB@@BBB@@BBB@@@B@B@@AB@B@@@B@B@@@BB@@B@F@B@D@B@@@D@B@B@D@@@BA@@B@@AB@@@@@D@BAB@FAB@D@F@D@B@B@D@D@@BF@BBD@D@B@@@D@@@@@B@B@B@BAB@D@D@DAD@D@@@FAD@D@@BBBF@@@B@B@B@@@B@DBDBDBF@J@B@D@B@D@B@@@D@F@B@N@HAF@B@@BF@D@@@D@B@BAH@B@D@@@DAB@B@B@@AB@@@B@@BB@B@B@BBB@B@@BB@@@B@BBB@B@B@@@B@@BB@@@B@@@B@@@B@@@B@BBD@D@B@D@BBB@D@B@B@B@B@B@BBB@D@@@B@B@B@F@D@DB@@@@B@BBD@@@B@BBB@B@B@@BB@D@B@@@D@F@J@LBBBJ@B@F@DBBAD@@A@ABE@A@A@C@@@C@A@A@A@CBA@A@AAA@CB@@@@A@A@A@@@A@@B@@A@@BA@@@AB@@A@CA@@C@A@A@A@@@@@@BA@@@CA@@A@ABA@@@AA@@@@CB@@A@ABCBABCBABA@A@AB@@A@A@A@A@CAA@E@C@EBA@A@A@@@A@ABCDA@AB@@A@A@A@A@@@A@AB@@@A@@@@A@@@AB@@@BAB@@AFAB@B@BA@@BAF@B@B@D@B@@BB@BBD@DBB@B@B@B@@@B@@@@ABABABAD@@@BABABAD@BABAB@@@@ABABAB@@@BAB@B@B@@ABAB@BABABCD@@ABAB@B@@AD@@A@@BABAB@@@B@@AB@@@@@B@@BB@@AB@@AB@BA@AB@@ABABABAB@@@BA@ADABAD@BAB@B@BA@@B@@AB@@AB@@AB@@@BA@@@A@@@A@@BA@A@AB@BA@ABABADABCD@@AF@@ABAB@BABA@ABAB@@CB@@A@@@A@ABA@ABA@@B@@A@@B@B@@AB@@@BABABABA@ABC@CBA@@@ABA@@@A@C@AB@@A@@@CBA@@@A@@@ABC@@BA@A@A@@BA@A@A@CBA@A@A@A@CB@@EDCBCB@@EBA@EDCBC@ABA@EBCBA@A@A@C@CBEBCBCBEB@BA@ABAB@BEDABADADABAD@BA@@BAB@@AD@@AB@BABA@CBAFAB@@A@AB@@@@ABAB@@CB@B@@C@@BCBA@@BADABAB@BABAB@BCDAD@@AB@@ABA@ABA@CBABC@@@A@CBA@A@A@C@A@A@A@C@@@C@A@A@A@@@ABA@@B@@A@ABAB@@ADAB@B@B@B@B@D@@AB@BA@CDA@ADAB@B@DAD@F@DCPADAFADAFGJABADCFAFADAD@B@B@DAD@DCDA@ABC@G@C@@@@@C@@BGBI@C@CBA@EBCBKFCBEFABABCDABAB@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@BA@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@A@@B@@@@AB@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@B@@@B@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@B@@ADABAFAD@BAD@B@@@@CBCBGFEFABCHADADA@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@@AB@@@@@@@@@@@@A@@@@B@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@AB@@@@@@@@@@A@@B@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@@B@@@@A@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@A@@@@@@B@@A@@@@@@B@@@@A@@@@@@@@@@@@B@@A@@@@@@@@B@@@@A@@@@@@B@@@@@@A@@@@@@B@@@@@@@@ABAB@@A@AB@BA@A@A@@BA@AB@BABABABA@@BAB@B@BAD@@@D@BAB@DAB@@ABC@ABEBCBCBABABC@ABC@EBA@ABCBCBCBC@ABGBE@A@IBI@EBEBEBEBA@CBABA@ABA@A@AAE@CAA@C@CACAAAAAAAA@@AA@A@AAA@A@A@A@ABABABAD@@@D@BA@@B" ],
														"encodeOffsets" : [ [
																90587, 44251 ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));