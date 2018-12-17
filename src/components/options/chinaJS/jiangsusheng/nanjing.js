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
									'南京市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "320102",
													"properties" : {
														"name" : "玄武区",
														"cp" : [ 118.792199,
																32.050678 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@B@@@@@@@@@B@@@@BBB@@B@B@BBB@@@@@@@@@DABA@@@@B@D@@AH@D@BD@D@@@B@B@B@@@B@BB@FAB@B@@@@@DBD@D@B@B@BB@@@@@@B@@@@@B@@@B@B@@A@@@A@@BC@AAAAAA@AAABA@@@@@AE@@@A@@@@@@B@@@BB@@@A@@@@B@@@BBDDDDFD@BB@@@@@BABA@@@AA@@AA@@@@@AB@@A@@@BA@@@@@AB@@@B@B@B@D@@@B@B@@@B@@BB@@AB@@@@@B@@B@@BA@@@@B@B@@@B@BA@@@BBB@@DB@@BBB@@@B@B@BBB@@@@@@A@@@@B@B@@@B@B@@B@@BAB@@@B@@@BB@@B@BA@@@@@B@B@BB@@@@@B@B@@@BB@@BABB@@B@@AB@BAB@BABCBA@@@@B@@@DADCFAB@@@B@B@BADCDAHABADE@A@@@A@@A@ABA@@A@@@@@AA@@@A@A@A@C@A@@@AAA@@@ABA@A@A@@ACA@@AAAA@@@@@@@@BA@@@@AA@C@@@@AA@@A@CBA@@@@B@BA@@BA@@@A@@BAA@A@@BAAAA@@@@@A@A@@A@@@@BADC@@@@@@AA@@@B@@A@@@@@@BA@@@@B@@@B@@@@@@@@A@@A@@A@@B@@@@A@@B@@@@@@A@@@@@@BA@@@@@@AA@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@BA@@A@@@@@@@@@@@@@A@@@@@B@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@AB@@@BAB@BA@@@A@@B@@@@@BA@@B@@@@A@ABA@@B@@A@@A@@@@@@@@@@@@A@@@@@@B@@@@@BAA@@@@@A@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@@A@@@@@@@B@@@@@@@@@B@@@@A@@@A@@@A@A@A@A@AA@@C@B@@A@@@AA@@AA@AA@A@@A@@ABA@AB@BCA@A@@BAB@@@@@@@@@@AA@@AA@@@@@@@BC@@@@@CB@@@@@@@FB@@@A@ABBAA@@A@@@@@@A@A@CB@BADAB@D@@@B@B@B@B@BABCBA@E@@AAAA@@@@B@@@B@@@@BB@@@@@BA@@@@@@@AA@@@@AAA@@@@CAMEA@AAAAEC@@@@ABA@@@A@AB@@@@@B@@@B@@@B@B@@@@@@@@@BA@@@@B@B@@A@@@A@@@@B@@@@@ACAA@C@CA@@AAA@@BCB@BCAA@AA@@C@@@CBCB@GA@AAAA@BC@@@@B@BBFI@@@@@@@@B@@@B@@@B@@@@@B@@ABC@C@AB@@@@@B@BBB@DCB@@@@@@@B@B@BBB@@@@@@@BA@A@CAE@A@AA@AAE@A@@A@A@@@BJI@@@EBA@C@C@I@A@CBG@C@C@A@GBA@E@E@G@@F@L@H@@@@@@@@@B@F@B@F@B@D@@@D@D@F@D@D@D@@@@@@@B@F@F@H@B@B@B@@@B@@FADAFADA@@D@B@B@@B@@@@AB@B@BB@B@BB@@@B@@@B@@@@" ],
														"encodeOffsets" : [ [
																121651, 32866 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320105",
													"properties" : {
														"name" : "建邺区",
														"cp" : [ 118.732688,
																32.004538 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DCBGAKAK@@@M@GAE@AGSIQNCB@BA@@@@CAA@@AA@@AEGJCDAB@D@FAB@@L@@@JJ@@@@@RAF@FAD@@@B@B@@@@@@@B@BBDBBBBB@@@@@@D@BA@CBCBE@A@C@@@A@A@@@A@@@A@A@A@@@A@@@EAA@A@@AA@C@@AABA@@A@@@@@A@@A@A@@EBA@@@@@@@AA@A@AAA@A@@CC@A@@AA@@AA@@@@@A@A@A@@AAAA@AAACEAA@@@@ACAA@AA@@A@@AA@@ACAA@@@@@@@AA@@@@@@@@@@@@@@@AA@AA@@@CCAAA@@AA@@A@@@@@@A@AAAA@@A@AACCECAAAAAA@AAACC@AAAEC@@A@EA@@@@@A@AKBIBGBG@GBE@ODOBGBC@A@A@ABAB@@ABAB@BABAFAFEJJJLRBHLZPZT^FN@@@@JT`lBBXZFH" ],
														"encodeOffsets" : [ [
																121577, 32864 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320104",
													"properties" : {
														"name" : "秦淮区",
														"cp" : [ 118.786088,
																32.033818 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@A@@@@@A@@@A@ADABABABAD@@@@ABADABCD@BADA@@@@@@B@@B@@BADEBCB@AABC@@@@B@@@@@@@@@@ABA@@@@@@BABAB@@@BA@AB@@@@@@@@@BE@A@EBGDA@A@@B@@A@@BA@@@A@@BA@@BA@@@@@@@@B@BB@@@@@B@@@ABBB@@@DBB@@@BBB@F@@@B@@@B@B@B@@@B@@@B@B@@@D@BAFAD@DABBB@@@@@@@@@@B@@@@@@@@@B@@@B@B@D@F@B@D@B@FAB@B@H@F@F@B@HAB@D@D@H@DAB@J@D@D@B@FA@@J@AI@@B@B@@@@BBF@BBBB@F@DBB@B@@A@@@@@@AA@A@A@A@@@@@@DA@CAA@A@A@@@@BAD@D@BA@@@A@@@@@A@@@A@@@A@@@@@@J@AE@A@A@@D@@ABBBBB@@HDADA@@D@@@BBB@DB@ADA@AB@BB@@DBD@B@DB@B@@@@@A@@B@@@B@@@@A@A@@B@@A@@@@@@@@@A@A@@@A@@@A@@@@BAB@@@B@BA@@@@ACEAA@@A@A@@@AACA@@ACAA@@AEA@AAC@@@@A@ABC@A@GECACCA@@A@@@AA@CEA@@@@ABAE@@AA@GG@@AAAA@@A@A@A@A@AAE@A@@@C@A@CAEA@@C@AAA@@@GCA@A@@@A@E@" ],
														"encodeOffsets" : [ [
																121662, 32744 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320113",
													"properties" : {
														"name" : "栖霞区",
														"cp" : [ 118.808702,
																32.102147 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@AB@@@@A@@A@@A@@@A@@@@@BBBB@@@FABADABA@A@A@A@@@C@A@CBABA@@D@B@B@@@@B@@@BBAA@B@B@@EA@@@@@@A@@D@@@@AD@@@@@@B@@BB@@B@@@@@@@@A@AB@@@BDB@ABAB@BA@@@BB@B@@BBB@@BB@@B@@@@A@DB@@B@B@B@B@B@@@B@@@B@@A@@@@@@@@@A@@@@@@@B@@@@@@@@@@B@@@@A@@@@@@@@@@B@@@@@@@@@@@@B@@@@@B@AB@@@@A@@@@@@@@B@@@@@@@@@@B@@@@BA@@@AB@B@B@@A@@@AB@@@@A@@@@B@@ABA@AB@@A@@B@@@@@@A@@@@@@@@@A@@@@@@@@@@BA@@@@@B@@@@@@@@@@@@@B@@@AB@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@B@@B@@@@B@@A@@@@B@@@@@@@@AB@@@@@@AB@@@@BB@@@@@@@@@@A@@@A@@B@@A@@@@B@@@@A@@BB@@@@@@CDAB@@@@@BB@B@@@@@B@BBAB@@@BBB@AB@@@B@@AB@@A@A@@B@DAB@@@BB@@@@@DBB@@@@AB@@@@@@@@BBBB@@DB@BB@B@B@BA@@B@BB@@B@D@B@B@B@@@B@@B@@@@@BB@BAB@@@@B@@@BCFABGBCBCDABA@A@@@A@EBCDCB@@A@@@@@ABADABA@ABA@@BA@@@AAAB@@AA@@A@A@@@@@A@@A@A@A@@@@ABA@@@AA@@A@@@A@AB@@@AA@A@@@A@A@@@@@@B@@@@A@AAA@A@@@A@AA@@CA@@AA@A@@ABA@@@A@A@@@@@AB@@@AA@@@@@A@@BA@@AA@@@A@A@@@C@A@A@A@@@A@@B@@@@AB@@B@@@BA@@@@B@@BB@@B@@ABAB@@@@A@@AECCCCCAA@@A@@@@@@B@@AA@@A@@@@@@@@B@@BF@@@@B@BABBB@BBBB@BAD@@@B@@@BA@A@@@A@@@@@A@@@@@@@AAA@A@C@C@CA@@@@A@A@EBA@@A@A@@@A@A@A@@@CACC@G@@BC@A@@@@@ABCB@@@@@@@@A@AAA@A@@@AA@A@@A@@@@@@@@@A@@B@@@@B@@@BBBBDB@@@@AB@@A@@@AB@B@BADA@A@@@@BBB@@@BB@@B@@B@@@BD@D@@@@BB@@B@@@@@@BBBBF@B@B@@@B@@@BA@@@ABAB@B@@@B@@@@@@@@@BA@@@AAA@@A@@A@@@@A@AA@@A@@EAC@@BAD@@@BA@ABAACCACAAA@CBABBB@@@@B@@@@@BBDBAB@@@@ABODUFFJNXBREVCNCJ@BCL@BADCL@LFLLJbTbLPBN@LBFATCRGLMHMJMDIFKHQFKdBbAjElBxFLBNBPBbFJBZHRN\\\\dpPLJDlFrDlCpIªaZKKKGEECIEAACAAAAAAKAAAACAIAE@AAKCEAC@A@A@C@CBABCDA@ABCAEAG@AAC@C@CAC@A@C@G@E@C@MFA@CBGDCBEBA@AACAE@AAGAA@@ACACA@AA@C@A@CAKASEC@CAA@MCA@C@GBA@@AA@@@ACFAEIAQA@I@S@QAQE@@@@A@ECCC@@@@CAEGBC@@@@@AIGKUAC@@IAIC@A@I@AECBC@@D@@@D@@AB@@@@@B@ABDA@@B@@@@@@@@AB@@@@BB@@@@@@@B@@@B@@B@A@@B@@@@@B@@@B@@@@B@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@@@B@@@@A@@B@@@@@@@@@B@@@@@@AB@@@@@B@@@B@@@FBBA@@BA@AB@@@@@B@F@B@@@AA@@A@AAB@@@AA@@@A@@BB@@BBB@@@AAB@@@@A@@@@@B@@BA@@@@@@@B@@@@BA@@B@@@A@@BABDBBA@@@@BABEAA@AAAAAAAA@@ABAB@DA@@@CAA@AC@A@CB@@@@ABA@AAA@AAADA@AAI@A@@@A@@@ABA@@@AAA@CBABABA@C@@@CCA@C@A@@@AAABA@ABAA@@CAAA@AEAAA@@BA@ABC@C@E@@@AB@F@@@B@@ECAEAAAGE@@@AAACA@@A@AA@A@AAAABCAABEAA@@B@BBH@@K@@@@@ABB@C@@@@@A@@A@@A@@@A@@@A@@@A@@B@@A@@@AB@@@@@@AB@@@B@@@@@B@@@B@@B@@B@@@@@B@@@B@@@@@B@@BB@@@@@@B@@@B@@BB@@@@@@@B@@@@B@@AB@@@@@@@@A@@@@B@@A@@@@B@@B@@@@BB@@@@BB@@@@@@BB@@@@@@@@@BB@@@@@@@@BB@@@@@@@@@BB@@@@B@@@B@@B@@@@B@@B@@@@BB@@@@@@@@BA@@@@B@@A@@@@B@@@@@@@B@@@@A@@B@@@@@B@@@@@@BB@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@A@@@@BA@@@@@@BA@@@A@@@@@A@@@A@@@@@A@@@@@AA@@@@@@A@@@@AA@@@@@A@@@@@@A@@A@@@@@AA@@@@@@AA@@@@@@A@@A@@A@@A@@@@AA@@@@A@@@@AA@@@A@@@AA@@A@@@@@@@A@@@A@@@@@A@@@@@A@@@A@@@AA@@A@@@A@@@A@@@@@AA@@A@@@@@A@@A@@A@@@A@@A@@A@@@@@A@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@A@@@@@A@@@A@@A@@@A@@@A@@@@@AA@@A@@@AA@@@@@@@A@@@AA@@@@A@@@A@@@@AA@@@A@@A@@A@@@@AA@@@@@AA@@@@@@@AA@@A@@@@@A@@@A@@@@@A@@@AB@@A@@@@@AB@@A@@@A@@@AB@@@@A@@@@@A@@@@@@A@@@@A@@A@@@@@@@A@@@@@@AA@@@@@@@A@@@@@A@@AA@@@A@@@A@@@@@@@A@@B@@@@@@AB@@@@@@@B@@A@@@@BA@@@A@@@@AA@@@@@AA@@A@@@AA@@@@A@@@@A@@A@@@@AA@@@@@@@AA@@@@AB@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@AA@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@@@A@@@A@@@@@AA@@@@A@@@@@A@@A@@@@A@@@@A@@@@A@@A@@@@@@AA@@@@@@A@@A@@@@AA@@@@@AA@@@@A@@A@@A@@A@@A@@@@@AA@@A@@@A@@A@@A@@@AA@@A@@@@@AA@@@AA@@@" ],
														"encodeOffsets" : [ [
																121751, 32795 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320106",
													"properties" : {
														"name" : "鼓楼区",
														"cp" : [ 118.769739,
																32.066966 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@A@A@EBA@C@A@E@C@A@A@@@A@@@@@@@@@A@@@@@@@@@@@AAC@@@@@@@AAAACAAAA@@@@@@@A@A@@@C@EBE@QB@@@@I@@I@@@KA@EBC@A@CBIDFH@BB@@BB@DB@@@@ABA@MDJRHT@BBF@H@N@@BLBLAHCDTXHJHLbVJLVEPCBA@@@@BACAAA@@@@A@@@@@AABADAB@BBBDDDBBBAB@@A@@BC@AD@FB@@@BB@@B@B@@B@@@@BB@BB@@B@@A@@@@@@@@@A@@@ABABA@@B@@A@@@A@@@A@AAEAA@A@@@@A@@@AA@@@@@CAC@@A@@@@AA@@A@@AA@A@@B@B@BC@A@ABA@@B@@@BA@@@@CAAAAA@@A@@@@@@A@@@@@A@@@A@@AAA@A@@A@ABA@@@@@AA@A@C@@@CBEBCBEB@@@A@@@A@A@A@G@E@E@A@@@@@@@C@C@C@E@C@C@@@C@A@E@A@E@A@@@@@@@@@G@K@E" ],
														"encodeOffsets" : [ [
																121635, 32811 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320111",
													"properties" : {
														"name" : "浦口区",
														"cp" : [ 118.625307,
																32.05839 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@BAB@@@B@@@B@@@B@@@B@H@jC\\DB@@A@@@AAC@CBADEB@@AA@@C@@AC@@@A@A@A@A@@BA@A@A@@AA@@BA@@AC@@B@BAB@@A@A@@@AAA@@@A@@@@B@@@@AB@BA@@@ABADABAD@@A@AAC@A@@@A@@@@@@BAB@BCB@@@AA@A@A@@BAFABA@A@ABAACBC@A@@AA@@@@A@@@@@@@@@A@@@@@@A@@@A@@BABA@@B@@A@@@A@A@C@AAA@AAAAAA@@@A@AB@BC@A@@@AA@A@A@A@KBA@@@@B@B@DD@@BBBB@BBBBDHHFF@B@@@@DB@B@@@@BAB@@AB@@@B@@@BB@@@BB@@@BB@@@B@@BBBA@@B@F@HBF@B@@ADK@ADIDMFUAQMWEIIKaUGKGISWEGWYAA_kIS@@@@EMS]OYKYAGKQIIQUCC_eYWKKOCMCA@WKYSY]_WSMaqMQCGCBA@EAEBIBKFKFGBABADABCDEBABBD@@@F@BAB@B@DBBBDBBDB@BBBBB@B@B@BABCBA@EBC@CBE@KDA@ABABCBA@CBC@ABABCFSFSHA@ABEBABABCFCBCDCDABCBCBA@C@C@@AIBE@C@IHCDAFCBABEDCBC@CBA@ABAB@B@B@DBDBBBBBDBBBB@B@DAD@D@B@B@D@B@DBBDDBDDD@BDBBBDBBB@D@DADABABADAB@B@@@BBBD@D@FBB@B@D@BBBBBDBF@F@D@B@DA@@B@@AB@B@B@@@BBB@B@B@B@B@B@B@B@B@@ABB@@B@BBB@@BB@@@BD@J@D@BDAFCDMD@@A@ABAB@@ABA@@BA@@B@B@B@B@B@BBB@B@B@B@@@BBB@B@@@BB@BBB@@@BB@@BBB@@B@B@B@@@BAB@BABA@A@A@ABA@AB@B@@AB@B@@@B@@@B@B@@@@DDB@@@B@@@BA@@@@B@B@BBBBBB@BB@@D@B@@@BBB@B@@@@@B@@ABAB@@@B@B@@BBB@D@B@B@BABA@AB@@@B@@B@@@B@B@@@D@@@B@@@@@@B@@@B@B@B@@@D@B@@@BB@@FL@@@BB@@ABABAB@B@@@D@FBB@D@H@B@@@BB@@@B@B@B@@@@B@@@B@@ABAB@@@B@@B@BB@@BBBB@BBB@BBD@B@@@BB@@@B@B@@B@@BB@B@@AB@B@@@B@@BBB@@BBDB@@D@B@@@B@@@B@B@@@BB@BBDDBBB@@BBB@BB@@B@@B@@BBAB@B@B@B@BBBDBB@B@FAB@BBB@BBBBD@DBFBD@B@B@BAD@@@B@@B@B@@CD@@ABAB@DCF@@@B@BB@D@B@@B@@BBAB@BA@@BBB@BBB@BB@BADABADAB@@@@@@@@B@@@@@B@@@@A@@@@B@@AB@B@@Md@BA@@BCFBNAD@D@B@@BBBBDBB@D@DBDB@@@@BB@@@@BB@@@B@@@B@@A@@B@@@B@@@B@@@@@B@@@@BB@@@B@@@@@B@@@@@@BB@@@@B@@@HCFCBAD@BAB@B@BBB@BBBBB@BDBBBB@BB@B@@@DAFCB@@@B@B@PD@BB@@B@B@@@BB@BB@@D@DADADAB@B@B@@BB@DBDBFDFBD@B@@@BA@ABADAB@D@D@D@BBD@BBB@@AB@@AACB@@ABA@@B@@B@@BBBBBBBBD@DBNBBBB@BBDBDBD@B@B@DAB@FCB@B@B@D@BBFDFDHDB@B@BBB@BDBBHJNNLLBDBBDB@BP^@B" ],
														"encodeOffsets" : [ [
																121524, 33026 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320114",
													"properties" : {
														"name" : "雨花台区",
														"cp" : [ 118.77207,
																31.995946 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@A@@@@@@B@@@AEEDBDD@" ],
																[ "@@@@@@@@B@@AB@@AB@@@B@@AB@@@@AB@B@HCFAB@F@@A@@@@@@@@BAB@@A@@BABA@A@@@@B@BA@@@@@@@@@@@A@@D@BA@BDAFABC@AA@@@@A@@@@B@BC@ADCBABCBA@@@@BCBABABABCB@@@B@@@@@B@A@@A@@@@@AA@@@@@AA@@@@A@@A@@A@@@@AA@@@@@A@@AA@@@A@@@@@AA@@A@@@A@@@AA@@@@A@@@A@@@A@@@A@@@A@@AA@@@@@A@@@AA@@A@@@@@A@@@@AA@@@A@@@@A@@A@@@A@@@@AA@@@A@@@@A@@@@@@@A@@@@@@AA@@@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@A@@B@@A@@@@@A@@@A@@@@BA@@@@@A@@@A@@@@@A@@@A@@@@@@AA@@@AA@@@@@@AA@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@BA@@A@@A@@@@@A@@@@@A@@@A@@@@@AB@@A@@@@@AB@@A@@@@B@@@@AB@@@@@@@@AB@@@@A@@B@@A@@@@B@@A@@@@BA@@@@@A@@@@@A@@@@@@@AA@@@@A@@@@@@@A@@@@@@@A@@@@@A@@A@@@@@@A@@B@@A@@@@@A@@B@@A@@@@@AB@@@@A@@@A@@@A@@A@@A@@A@@A@@A@@@A@@@A@@@A@@@A@@@AB@@@@A@@@A@@@A@@@@@A@@@@A@@A@@@@AA@@@@AA@@@@@A@@@A@@@A@@@A@@@@@A@@@AB@@A@@@A@@@@A@@@@@@@A@@A@@@A@@A@@A@@@@@A@@@A@@A@@A@@@@@@@A@@@A@@@A@@@A@@@@@A@@@@BA@@@A@@@A@@B@@@@@BA@@B@@@@@@AB@@A@@@@@A@@@A@@@A@@@AA@@@@A@@@@@@@AA@@A@@@@@AB@@A@@@A@@@AB@@@@A@@B@@A@@B@@@B@@BB@@@B@@@@@@@@AB@@@@@B@@@@A@@BA@@@@@AB@@@B@@@B@@B@@B@@@B@@B@@B@@@@@B@@@@@@AB@@@@A@@@@@AB@@A@@@A@@@@BAA@@@A@@@@@A@@@@@A@@@A@@@@AA@@@A@@A@@A@@@@@AA@A@@@@@A@@@A@@@AA@@@@@@@@BA@@A@@AA@@@@@A@@@@@A@@@A@@@@@AB@@@@@@@@AB@@@@@@A@@B@@@@A@@@A@@@A@@@A@@@A@@@A@@A@@A@@@A@@AA@@@A@@@A@@@A@@@A@@@A@@@@AA@@@@@A@@@A@@@A@@@@@AA@@A@@@@@@@AA@@@@A@@@@AA@@@@@A@@A@@A@@@@@AA@@@@A@@A@@@@AA@@@@@A@@A@@@@A@@@@@A@@@@AA@@BA@AD@B@@ABA@CBA@AB@F@D@BADA@@@@@@@A@@@A@AAAAA@AA@@@A@@A@@A@@@A@@@@AC@CBA@CHA@A@GAGAC@CBE@CAAAAAAAACAC@EAA@ABC@A@A@AAA@AAAGEGCIGECAAA@E@GDABCAA@E@ABC@@BA@BF@@B@@@@@B@@@@A@@@@@BB@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@BB@@@@@@@@@@A@@@@@@@A@A@AA@@@@C@DDDFBB@BKDA@A@AAA@CBCBC@E@AA@@A@GBEB@B@@BBFP@BBF@B@BGJ@BBLJbPDLLZX`fDDRVFIBEBEBA@ABABA@@BABAB@B@D@HAPAPCF@HAH@HAJALA@B@B@@@@FBB@@@FDBB@BDDBB@BBBBBBBFDDDBBB@@@BBBBB@@@@@@@@BB@@BB@BBDD@@B@@BBB@@@@@@@@@@@@@@B@@B@@@@@@BBBD@@BB@@@BB@@BBBBD@@@@BBDFBB@BBBBB@@@B@B@B@@@@BB@@BB@@@BDD@@@BBB@B@BBB@@@@@@B@FA@@" ] ],
														"encodeOffsets" : [
																[ [ 121465,
																		32640 ] ],
																[ [ 121615,
																		32781 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320116",
													"properties" : {
														"name" : "六合区",
														"cp" : [ 118.85065,
																32.340655 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@@AB@@A@@B@@@@A@@B@@@@@B@@A@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@@BB@@B@@@@@B@@@@@B@@BB@B@@@B@@@B@@@B@@@B@@@B@B@@@@@BB@@@@@@BB@@@@B@@B@@@@@@@B@@B@@B@@@@@B@@@BA@@B@@@@@B@@BB@@@@B@@@@@B@BB@@@@@@@@BB@@@@BB@@@@@@@BB@@@@B@@@@BB@@@@BB@@B@@@B@@BB@@@@@@@B@@BB@@@@B@@B@@@B@@@B@@@B@@@@@B@@A@@@@B@@A@@@@@A@@@@B@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@AA@@@A@@@A@@@@@@@A@@@@@A@@@@AA@@@@@@@@AA@@A@@@A@@@A@@A@@@@A@@A@@@A@@@@BA@@@@@@@AB@@@B@@@@@B@@@B@@@@@B@B@@@@@B@@@@A@@B@@@@A@@@A@@@@@@@A@@@@@AA@@@@A@@@A@@@A@@@@@A@@@@@A@@@@B@@@@@BA@@B@@@@@B@B@@@@@@@BA@@@@B@@@B@@@B@@@B@@@@@BB@@@@@B@@B@@@@BB@@@B@@@@@B@@@B@@A@@@@@@@@@AB@@@@A@@@@@@AA@@@@@@@A@@@@@@@A@@@@B@@A@@@@B@B@@BB@@@B@@@@@B@@@B@@B@@@@@@B@@@@B@@@@B@@@@@@BB@@@@@@B@@@@@@@@BB@@@@B@@B@@B@@@BB@@@@B@@@B@@@B@@@@@B@@@@@@@B@@BB@@@@@B@@@@@B@@@B@@@@@@@B@B@@@@@B@@@@@B@@@B@@@@@B@@@@@B@@@B@@@@BB@@@@@B@@@@B@@@@@BA@@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@B@@@B@@@@AB@@@@@@AB@@@@A@@B@@@@AB@@@B@@@B@@@@@BB@@B@@@@BB@@@@BA@@B@@@B@@@@@B@@@@@BB@@@BB@@@@B@@@B@@@@BB@@@@@B@@@B@@@D@B@B@B@B@DBHBLFDE@EICIEAEAAC@BE@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@AB@@@@A@@@@@A@@@@@A@@@@@A@@BA@@@@@A@@@AA@@@@@A@@@@@A@@BA@@@@@AB@A@@A@@@@@AA@@@@A@@@@AA@@@@@AA@@@@@AA@@@@A@@@A@@@@@@@AB@@@B@@A@@B@@@@@B@@@B@@@B@B@@@B@@@B@@@@@B@B@@@@@B@@@@@B@@B@@B@@B@@@B@@@@BB@@B@@B@@B@@@B@@@B@@@@A@@@@@AA@@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@B@@@BA@@B@@@BA@@B@@@B@@AB@@@B@@@@@B@@@B@@@@@@@@B@@B@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@B@@B@@B@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@B@@B@@@B@@@B@@@B@@@B@@A@BB@B@@@B@BA@@@@@@BB@@B@B@B@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@AB@@@@A@@@@BA@@@A@@@@BA@@@A@@BA@@@@@@BA@@@@B@@A@@BA@@@@B@@A@@@@BA@@B@@A@@B@@@@AB@@@BA@@@@BA@@@@@@B@@A@@@@B@@@@A@@B@@@@@@AB@@@@@@@@AB@@@@@@@BA@@@@@@B@@A@@@@B@@@@A@@@@B@@@@A@@B@@@@@@A@@B@@@@@@AB@@@@@@@BA@@@@@@@@B@@A@@@@B@@A@@@@@@@AB@@@@@@A@@@@B@@A@@@@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@@AB@@@@A@@@@@AB@@@@@@A@@B@@@@A@@B@@A@@@@BA@@@@@AB@@@@@@A@@B@@A@@@@B@@A@@B@@@B@@@BA@@@@B@@@B@@A@@BB@@B@@@B@@@B@B@@@@@B@@@B@B@@@B@@@@@BA@@B@@@@@B@B@@@B@@@@@B@@@B@@@B@@@B@@BB@@@@@B@@BB@@@@@B@@@B@@B@@B@@@@BB@@@@@@@BB@@@@@@@BB@@@@B@@@B@@@@@BB@@B@@@@@B@@B@@@B@@@B@@@B@B@@@B@@@B@@@B@@BB@@@@@@BB@@@BB@@@@BB@@@@B@@@@@B@@@B@@@B@@A@@B@@@@@B@@@@@B@@AB@@@B@@@@@BA@@B@@@B@@@B@@@B@@BB@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@BA@@@@B@@@@A@@@A@@@@@A@@BA@@@@@@@A@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@A@@B@@A@@@A@@@@@@@AB@@A@@@@@A@@B@@A@@@@BA@@@@@AB@@@@@@AB@@@@@@AB@@@@@@AB@@@@AB@@@@@@AB@@@B@@A@@@@B@@AB@@@B@@A@@B@@@@AB@@@BA@@B@@@@AB@@@BA@@@@B@@A@@@@B@@A@@@@@@@AB@@@@@@A@@@@A@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@@@A@@@@@@BA@@@AB@@@@A@@@@@A@@A@@@@A@@@@@A@@@@@A@@@@@A@@BA@@@@@A@@@A@@@@@A@@B@@A@@@@@@@AB@A@CAIBADI@MAGEOOIF@@EBC@C@AC@C@@@@@@@GAG@EBCJKDG@ACCEE@EAAC@GCACAE@QBE@EDAFA@ABC@E@@JEDAD@DDD@D@@@@CBC@GEAY@C@@AA@@A@@@CB@BAXGDADA@@@@LIA@AACCCCAEAAAAIA@@EE@E@@DEFGTOBAGGAC@G@I@GAEACBCFE@A@C@ACCAE@ABCDE@@@@BGAKBEBIAAAICEAE@@FETEPCJA@@@@DAN@@@@@HA@@@@@@DABCDCNGICOKco[[QMYGIAaEOAMAKAwEkAiFaBcAELGRELCJINGNKNQHSDEBKAM@OAaKaSKIEK@KDKBCA@E@GAE@A@@@ABAA@@@A@@AA@@A@@A@@AA@@A@@@A@@BA@AB@@@@@ACA@@@@@AEEGGACAA@AAAAA@@CCA@A@@@@@AB@L@B@B@BBB@@B@D@@ABAB@@@B@BBBB@BBB@B@D@B@B@@@BA@@@ABAB@@@B@@@B@@@@B@@@@@@@@@B@@@@@BB@@@BADBDAB@B@BABEBAB@@@B@BBB@@A@ADA@AB@@@@@@@B@@@BBD@B@BC@ABCBAB@B@@ABA@@B@@A@@@@@@B@@BB@B@@@B@BA@ABA@@@BD@@AB@@BB@@@B@BAB@@@B@B@B@B@@BD@@@DB@@BA@CFAB@DBD@B@@@BA@[CiDG@A@@@A@@@A@@@A@@@A@ABA@@BB@@BB@@BAB@@ABA@C@ABE@CBABCBADCB@D@B@BBDFJDHFHBDBB@B@B@B@B@D@BADAD@@ABA@@@A@AAC@ABC@ABAB@B@B@B@DBBDBDDHBDBDBDB@BBBBBDDDBFBJ@D@D@HAB@BBB@@@@B@DABA@ABE@C@C@CBA@ABBD@BDDD@DBF@DAB@FAF@D@BBBBBDBDBDADABCBIBA@ABAD@B@B@BDBBDA@A@C@A@ABAB@B@BBBBB@BB@D@B@B@DBBB@BCBABGLBBB@@@B@DAB@@@B@@@B@@B@@@F@B@@ABA@A@A@A@A@@@AB@@@@@BB@B@BBB@BB@B@@@BADCD@@A@ABA@AAAA@@@A@AAA@AAA@@A@@@ABCLCBIHA@ABAF@BBBJPBBBB@HDLBH@B@B@DCL@B@B@BBJBLBL@FB@@DB@@B@DAD@B@B@DBDBB@BADAJ@B@@A@A@G@@@EAA@@@@@GACAC@@@@@C@C@@BIBABGBKD@@A@@B@@A@A@@@A@@AA@@@A@@@A@@@@@@@AA@@@@@@AA@@@@@@@AA@@@@A@@@@@A@@AA@@@@@@A@@@@@A@A@@@A@@@A@@@AB@@A@@@A@@@A@@@A@@AA@@@@A@@A@@@A@@AA@@@@@A@@AA@@BA@@@@@A@@@A@@@@BA@@@A@@B@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@A@@@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@B@@@B@@A@@B@@@B@@@B@@@B@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@A@@B@@A@@@A@@BA@@@@BA@@@@@@B@@@@AB@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@BB@@@@@@AB@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@B@@B@@B@@@@BB@@@@@B@@@B@@@B@@@B@@@@@B@@@B@@@B@@@B@@@B@@@B@@@BA@@B@@@B@@@@BB@@@@@@@@BB@@@@@@@@B@@B@@@@@@B@@B@@@@@BB@@@@@@BB@@@@B@@B@@@@B@@@@B@@@@BB@@@B@@@@BB@@@B@@@BA@@@@B@@@B@@@@@BA@@@@B@@@@@BAB@@@@AB@@A@@@A@@@A@@@A@@@A@@@A@A@@@@@AB@@@@A@@B@@A@B@@@@B@@@@@B@@@@@B@@@@@BB@@@@B@@@BB@@@@B@@@BB@@B@@@@@B@@BB@@@@@B@@@@@B@@@@@@@@@B@@@@@BA@@@@@@B@@A@@@@@@B@@A@@@@B@@@@A@@@@BA@@@@@A@@B@@A@@@@BA@@@A@@@@BA@@@@@A@@BA@@@A@@@@BA@@@A@@@A@@BA@@@A@@@@@A@@BA@@@A@@@A@@@A@@@@@AB@@A@@@A@@@AB@@A@@@@BA@@@A@@BA@@@@@AB@@A@@@@BA@@@@@A@@BA@@@@@AB@@A@@@@@AB@@@@A@@B@@A@@@AB@@@@@@@@AB@@@@A@@B@@@@AB@@@@@@@BA@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@B@@B@@@@@B@@@B@@@B@@@@@B@@BB@@@B@@@B@@@@@B@@@B@@@B@@B@@B@@@B@@@@@B@@@@BB@@@@@@@B@@@@@BB@@@@B@@@@@BB@@@@@B@@@@B@@B@@@@@B@@B@@@@B@@@@BB@@@@@BB@@@@@@BB@@@@B@@B@@B@@@@@BB@@@@BB@@@@B@@BB@@@B@@@BB@@@@@@B@@@@@B@@@BA@@B@@@@@B@@@B@@B@@B@@@@@BB@@@@@@BB@@@@@@B@@@@B@@B@@@@@@@BB@@@@@@B@@B@@@@B@@@@@B@@@BA@@@@B@@@@A@@@@@A@@B@@A@@@@B@@@@@B@@@@AB@@@@@B@@@B@@@B@@@BA@@B@@@B@@@B@B@@@B@@A@@B@@@B@@@@@B@@@B@@@BA@@B@@@@@B@@@B@B@@@@AB@@@B@@@@@@AB@@@@@@@BA@@@@@@B@@A@@@@@A@@B@@A@@@@@AB@@@@A@@BA@@@@@AB@@A@@@@@A@@BA@@@@@AB@@A@@@@@@@@@@@@@@@@@BB@@@@@@@B@@@@@B@@@BB@@@@@@B@@B@@BA@@@@@@BBA@@BA@B@@@@@B@@@BBB@@@@B@@@@@@@@@B@@@@AB@BB@@@BB@@@@B@@@@@B@BB@@@BB@A@@BB@B@@@B@@@B@@@BBA@B@@@B@@@@B@@AB@@@BB@@B@@BDB@B@B@@@B@B@@A@ABA@AB@B@D@B@B@@@B@BAB@@BB@@BB@BA@@B@@@B@@@@@B@@@B@@AB@@@B@@@@@B@@AB@@@B@@@BA@@B@@@BA@@B@@@B@@A@@B@@@B@@@@AB@@@B@@@@@B@@@B@@B@@@@B@@BB@@B@@@@@B@@@@@B@@@B@@@@@BA@@B@@@@@B@@@B@@@B@@@@AB@@@@@BA@@@@@@BA@@@@@@B@@A@@B@@@@@B@@@@B@B@@@@AB@@@@AB@@@@A@@@A@@@@B@@AB@@@@@@AB@@@@A@@@@BA@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@AB@@@@A@@@@@AB@@@B@@@B@@@B@@@B@@@@@@B@@@B@@BB@@@@@BA@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@BA@@@@@@B@@@B@@A@@@@B@@@@A@@B@@@@@@A@@B@@@@@@@B@@@@@B@@@@@@BB@@@@@@@BB@B@@@@@B@@BB@@@B@@@B@@@B@@@@BB@@@@@B@@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@@@B@@@@@B@@@B@@@@@B@@@@@@@B@@B@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@B@@@@@@@@B@A@@B@@@@@B@@@@AB@@@@@B@@A@@@@@AB@@@@A@@@@@@B@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@BA@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@BA@@B@@@@AB@@@@AB@@@@AB@@@@@BA@@B@@A@@B@@@@A@@B@@@BA@@B@@@B@@@@@B@@@BB@@B@@@BB@@@@BB@@@@@@@BB@@@@B@@@@@@@B@@@@@@@B@@@B@@@B@@@B@@@@@@@BB@@@B@@@B@@@B@@@@@B@B@@@@@BB@@@@B@@@@BB@@@@@BB@@@@B@@@BB@@@@B@@BB@@@B@@@B@@@B@@@B@@@B@@@B@@@@AB@@@B@@@@@B@@@@AB@@@@@B@@@@AB@@@@@@@B@@@@@BA@@@@B@@@@@@@@@BA@@@@B@@@@@BA@@B@@@@A@@@A@@@@@A@@@@BAA@@@@A@@@@@@@@@A@@@@@@@AA@@@@A@@@@@@@A@@@@@@@A@@@@AAB@@@B@B@@@B@@@@@B@@AB@" ],
														"encodeOffsets" : [ [
																121631, 33369 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320117",
													"properties" : {
														"name" : "溧水区",
														"cp" : [ 119.028732,
																31.653061 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@AAAAB@@A@AHANBJHFA@AB@DFHPBBF@@@FA@ADCB@@@BBBFH@B@HFHFFAD@HDFFP@L@FAFEJEF@BD@@N@BCB@CKB@@C@@P@HGB@FMBM@AFAHCHAHBDACIDCHG@AFAF@HE@@DGFQBAB@L@B@B@FILIDGBE@@@C@AJD@@DI@@TADABBBAFAH@DAFAD@BAFGBE@G@@EI@AAKBIDADEBECGACEC@ABC@@F@JATA@@BABC@@@MDCFC@@BCAEBAH@@@DBDBDBJ@@@FBFBBI@@@A@@@AA@@@@A@@@@@AA@@A@@@@@AA@@@@A@@@@AA@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@AA@@@A@@@A@@@@@@AA@@@A@@@@@@@AA@@A@@@@@@@A@@A@@A@@@@@A@@@@@AA@@@@A@@@@@A@@A@@A@@@A@@@@AA@@@A@@@A@@@@AA@@@A@@@@@AA@@@@A@@A@@A@@@@@@@A@@A@@@@@@A@@@@@A@@A@@@@@@A@@@@@@AA@@@@@@@@@A@@@@A@@A@@@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@@@@@@@AB@@@@@@A@@@@@@@A@@B@@@@A@@@AA@@@@A@@@@@AA@@A@@@A@@A@@A@@@@A@@@@@@A@@A@@@@@@AA@@@@@@@AA@@@@@@@@A@@A@@@@@@A@@@@A@@A@@@@@@@AA@@@@@@@@AA@@@@@A@@@@@@@A@@@A@@@@@A@@@@@@@A@@@AA@@@@@A@@A@@A@@@@@AA@@@@A@@A@@A@@@@@AA@@@@A@@@@A@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@A@@@A@@@@AA@@@@@A@@@@A@@@@A@@@@A@@@@@A@@@A@@@@BA@@AA@@@@@@@A@@@@@@AA@@@@@@AA@@@@A@@A@@@@@@@@AA@@@@@@@AA@@@@@@A@@A@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@@AA@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@B@@@BA@@B@@@@@B@B@@@BA@@B@@@@@B@@@@@B@@@B@@AB@B@@@B@@@@@B@@@@@BA@@@@@@B@@@@@B@@@@A@@@@B@@A@@AA@@@@AA@@A@@A@@A@@A@@@A@@@@AA@@@@@@@A@@A@@@@A@@@@A@@A@@@@A@@A@@A@@@@@AA@@@@A@@A@@@@@A@@@A@@@A@@@@@AA@@A@@@A@@@AA@@@@@@AA@@A@@A@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@AA@@@@A@@@AA@@A@@@A@@@AA@@@@@@@A@@@@AA@@@@@@@A@@A@@@A@@A@@A@@@A@@@@@A@A@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@A@@A@@A@@AA@@@@@AA@@@@A@@AA@@@@@A@@@A@@@@@@@@@A@@@@@A@@@@B@@@BA@@B@@@B@@A@@@@B@@@BA@@@@B@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@AA@@@@@A@@@A@@@@@AA@@A@@@@@A@@@A@@@@AA@@@A@@@@@A@@A@@A@@@A@@AA@@@@@AA@@A@@@@AA@@@A@@@@A@@AA@@@@AA@@@AA@@@@A@@A@@A@@A@@A@@AA@@@@A@@@@@A@@@AA@@AB@@A@@@@@A@@@@@AA@@A@@A@@A@@@@EAC@A@@@AB@@@@A@@@A@@AA@@@@AA@@@@AA@@@@A@@AA@@@@@A@@@@A@@A@@@@@A@@@@@A@@A@@@@A@@@A@@@@@@@AA@@@@A@@@A@@@A@@@@@AA@@A@@@@@@@A@@@@@@AA@@@@@@@@@@@A@@@@@@AA@@@@@@@A@@A@@@A@@@@@A@@@A@@@@BA@@@A@@@@@AB@@@@A@A@@@A@@@@AA@@@@@@A@@@@A@@@@A@@A@@@@@AA@@A@@@@BA@@B@@@@@B@@@B@@@@@B@@A@@@@@A@@@AB@@@@A@@@A@@@AA@@A@@@A@@@@@A@@@A@@AA@@@A@@@@@A@@@A@@@A@@@A@@AA@@@@@A@@@A@@@@@A@@BA@@@@@AB@@@BA@@@@B@@@@@B@@@B@@B@@B@@@B@@@B@@@@@B@@AB@@A@@@AA@@@@A@@@AA@@A@@@@@@AA@@@@AA@@@@A@@@@A@@A@@A@@@A@@@@AA@@@A@@@@@A@@@A@@@A@@@@@A@@@@B@@A@@@@BA@@@@B@@@@AB@@@@@BA@@@@B@@A@@@@@@@AA@@@@@@A@@A@@@AA@@@@A@@@@A@@@@A@@A@@@@@AA@@@@@@A@@A@@@@A@@@@@AA@@@@A@@@@@@@AA@@A@@@@BA@@@A@@B@@A@@B@@@@A@@B@@A@@B@@A@@B@@A@@@@@A@@@@BA@@@@@@@A@@@A@A@@@@@A@@@A@@@A@@AA@@@A@@@@@@@@AA@@@@@@@AA@@@@@@@@AA@@@@@@@@AA@@@@@@AA@@@@@@@@A@@A@@@@@@A@@A@@@@A@@@@A@@@@A@@@@A@@@@A@@@@A@@A@@@@@@A@@A@@@@@@A@@A@@@@A@@A@@@@@@@@A@@A@@@@@@AA@@@@@@@@A@@@@A@@@@A@@@@@A@@@@@@@A@@@A@@@@@AB@@@@A@@@A@@@@@A@@B@@A@@@@@A@@@AB@@@@A@@@A@@@@@A@@@@AA@@@A@@@@A@@A@@@@A@@@@@AA@@@@A@@@@A@@AA@@@@@AA@@A@@@@@@@AA@@A@@@@@A@@@A@@@AA@@@@A@@@A@@@A@@A@@@A@@AA@@@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@@A@@@A@@@@@@B@@A@@@@B@@@@AB@@@BA@@@@B@@AB@@B@@B@@@@@B@@BB@@@@@B@@@BB@@@@BA@@@@@A@@@AB@AA@@@A@@@A@@@A@@AA@@@A@@@A@@@@@@AA@@@@@@@@@AA@@@@@@@@@@AA@@@@@@@@A@@A@@@@@@AA@@@@@AA@@@@A@@@@A@@A@@@@A@@A@@@@AA@@@@A@@@A@@@@@A@@AA@@@@@AA@@@@A@@@A@@A@@A@@@A@@@A@@@@@A@@B@@A@@@@@AB@@A@@@AB@@@@A@@@@@AB@@@@AB@@@@A@@B@@@@@@AB@@@@@BB@@@@@@B@@@@@@@B@@@@@@@BA@@@@BA@@@@B@@A@@@@BA@@B@@@@A@@@@@A@@B@@A@@@@@A@@@@@A@@@@@@@AB@@A@@@@@A@@@A@@@@BA@@@@@AB@@@@A@@@@B@@@@AB@@@@@B@@A@@B@@@@@BA@@@@B@@@@@BA@@@@B@@@@@B@@@@@B@@AB@@@@@B@@@B@@A@@@@B@@A@@@@@@BA@@@@BA@@@@BA@@@@B@@A@@@@B@@A@@B@@@@AB@@@@@B@@@B@@A@@B@@@@@B@@@@@B@@AB@@@@@B@@@@AB@@@B@@@B@@A@@B@@@B@@@@@BA@@B@@@B@@AB@@@@@B@@@@@@AB@@@@@B@@A@@@@B@@@@A@@B@@@@A@@B@@@@@BA@@@@@@B@@A@@@@B@@@@A@@B@@@@AB@@@@AB@@@@AB@@@BA@@@@BA@@@@BA@@@@BA@@B@@A@@@@B@@AB@@@@AB@@@@AB@@@@AB@@@BA@@@@BA@@@@BA@@@@BA@@B@@A@@B@@A@@B@@A@@B@@AB@@@@AB@@@@AB@@@@AB@@@BA@@@@@AB@@@BA@@@@BA@@@@BA@@@@BA@@@@BA@@B@@A@@B@@A@@B@@A@@B@@AB@@@@AB@@@@AB@@@@AB@@@BA@@@@BA@@@@BA@@B@@B@@B@@@B@@@@@B@@BB@@@@@B@@@B@@@@BB@@@B@@@@@B@@@B@@@@@B@@@B@@@@BB@@@B@@@B@@@@@B@@@B@@@B@@@B@@@BB@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@B@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@BA@@@@B@@AB@@@@@BA@@@@@A@@@@@AB@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@AA@@@A@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@B@@B@@@B@@@@BB@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@BB@@@@B@@@B@@@@BB@@@@@BB@@@@B@@@@B@@B@@@@@BB@@@@B@@B@@B@@@@@@BB@@@@AB@@@@@@AB@@A@@B@@@@A@@BA@@@@@@BA@@@@@AB@@@@@BA@@@@B@@AB@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@BB@@@@@B@@@BB@@@@B@@@B@@B@@B@@@@@B@@@@@B@@BB@@@@@B@@@B@@A@@@@BA@@@@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@@A@@BA@@@A@@@A@@BA@@@@@@B@@@B@@B@@@@@BB@@B@@@@@B@@@@BB@@@@@B@@@@BB@@@@@B@@@@BB@@@@@@B@@@@@B@@@@@@@B@@@B@@A@@B@@@@@@@B@@@B@@@@@B@@@@@B@@@@@B@@A@@@@B@@@B@@@@@B@@@@A@@B@@A@@@@@AB@@@@AB@@A@@@@@AB@@@B@@@@AB@@@B@@@BA@@@@B@@@@AB@@@@@BA@@@@B@@@@AB@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@BA@@@@B@@A@@BA@@@A@@@@BA@@@A@@@AB@@A@@@A@@@A@@@AB@@A@@@A@@@@B@@@@@@@B@@B@@@@B@@@@@@@B@@@@B@@B@@@@@B@@@@B@@B@@B@@B@@@@BB@@@@B@@B@@B@@@@B@@B@@@B@B@@@@@B@@AB@@@@@BA@@B@@@BA@@@@B@@@@@B@@@@B@@@@@@@@@B@@@@@@@BA@@@AB@@@BDBD@FBFBLBJ@BA@@@@B@@@@@B@@AB@@@B@@@BA@@@@B@@@@@BA@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@BB@@@@@@@BB@@@@@@B@@@@@B@@@@@@@BB@@B@@@B@@@B@@@@@B@@A@@@A@@@A@@@@@@@@B@@@B@@B@@@@@BB@@@@B@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@BB@@@@@B@@BB@@@B@@B@@B@@@@@@BB@AB@@@@@B@@@B@@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@BB@@@@B@@@@@B@@@@@@BB@@@@B@@@@BB@@@@@BB@@@@B@@@@B@@B@@@@@B@@@@@BB@@B@@@B@@@@@B@@@B@@AB@@AB@B@@@B@B@B@B@@@B@@@@B@B@NFHDB@D@FA@@B@@@@@B@@AB@@@@AB@@@@@BA@@@@@@BA@@@@BA@@@@@@BA@@@@@@B@@A@@@@B@@A@@@@@AB@@A@@@A@@B@@A@@@@@@BA@@@@@AB@@@B@@@B@@@BA@B@@B@@@@@B@@@B@@@B@@@@BB@@@@@@BB@@@@BB@@@@B@@@@@B@@@@@@A@@B@@@@A@@@@@@B@@A@@@@@AB@@@@@@AB@@@@@@BB@@@B@@@B@@@@@BB@@@@@@B@@@@BB@@@@@@@B@@@@BB@@@@@@@B@@B@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@BB@@@@BEDAB@BADADADABEDCDCFADAB]LaPAB@@DVABKZ@L@DBBBDDDHNBB@D@BCL@@@BB@B@DAFAFABA@@DAFCHILCB@@@B@@B@@BB@@BAB@HCJCDADAFAB@@AB@BAB@B@@@D@JBD@BBN@B@B@B@@AB@@A@@B@BAB@B@B@BBBBB@" ],
																[ "@@AACACEEEEGAEACECG@CBABABBF@BBDDFFFDDDFDDDBHDD@F@DABA@CAACA" ],
																[ "@@@@@AA@A@A@@@@@A@@@@@A@@@@@@A@@@@@@A@@@@@A@@@@@A@@B@@@@@@@@AB@@@@AA@@@@@B@@@@@@@@B@@B@B@@@@@@E@@@A@@@A@@@A@@@@@@A@@A@AB@@@B@@BB@@@B@B@@@@@B@@@@BD@@@BB@@B@@@B@B@@@B@@@@A@@BB@@B@@@B@@BB@@@@@@@B@@@@@@@@@@@@B@B@B@@@@@@@@@@@DA@@@@@@B@@@BAB@@AB@@@@A@ABA@@@C@@@@@@@@@@AABA@A@@@@@@@@B@@@B@@A@@@@@@C@@@@A@@@@@@@@@@@A@@@@@@BB@@@@B@@@@A@@BA@AA@AA@@@@B@@@@@@@B@@@@@@B@@@@@A@@@@B@@@@@@A@@@@@@A@@A@@" ] ],
														"encodeOffsets" : [
																[ [ 121837,
																		32532 ] ],
																[ [ 121722,
																		32278 ] ],
																[ [ 122006,
																		32172 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320115",
													"properties" : {
														"name" : "江宁区",
														"cp" : [ 118.850621,
																31.953418 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@@A@@@@@@@@B@@@@BBB@B@@@@@@@B@@@@@@@@@@@AA@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@A@@A@@@@@B@@A@@@@@A@@@" ],
																[ "@@H@B@B@BCB@FDPHB@L@HABA@CBE@ABEHIFEB@BBFDF@@@BAB@BE@@@CASAIIWMM@@BC@KDEFI@KFG@AAI@A@@DC@ADM@@CCCECCBC@@J@F@DFJCJE@@@ABA@A@SBAB@@@FA@@FA@A@E@EE@EDA@A@AC@@AEAK@@ACCCC@E@EDEDCD@@IFO@EA@@CEEAA@@@ADCBKBEAQEGAE@EECC@@EAG@@@KI@IBC@AFIJKFAFAFA@@J@B@DDBDFAH@FBD@@@B@FALCLAD@FCBABABAB@JB@@@@HB@@@@B@@@JGFKBM@E@E@@BCDC@CCE@AB@JC@K@A@CAAAAA@ICAA@@AAAC@ACEA@@C@A@C@AAAAC@E@@AA@@ECAAAAAA@@A@@@A@KBMDG@CBA@ABADAB@@ABCAIGKGA@IAIACIC@K@E@GGACCCK@G@A@@@C@C@G@G@ICCAABE@YCA@@A@E@@ACAAKB@@CC@ADE@@DA@@ACCCBAB@LCB@@ABAB@LE@ABABABCB@@@B@@@@ABC@ABABEDABA@ABA@@@@D@B@FCB@@@BA@@@A@@@A@E@@@@B@BAACCEEGaBEA@AAI@@BE@@AEAEA@AAAAA@A@A@ABA@@@@BA@@BA@A@A@M@AAC@IAC@@@A@A@ABA@@BA@EBCBCBIDGDA@AB@@AA@@@AA@@@A@KDGJEDCB@@ABEBEBCBA@A@@A@@DK@A@CAAGMCCACAA@C@KLYBACU@@BAbO^KBABCDEDCFCBABCBCBC@ABAFC@A@@A@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@A@@@@A@@@@@@AA@@@@@A@@@@@@AA@@@@@A@@@@A@@A@@@@@A@@@A@@AA@@@@@@BA@@@@@@BA@@@@B@@@@A@@@@B@@@@@@AB@@@@@@@@A@@@@@A@@A@@A@@A@@A@@@@A@@A@@A@@@A@@@A@@@@@A@@@@AAB@@A@@@A@@@A@@B@@@@AB@@@@@@@BA@@@@B@@@BA@@B@@@@@BA@@@@@@BA@@@@@@@AB@@@@@@AB@@@@AB@@@@@@AB@@@@A@@B@@A@@BA@@@@@A@@@EBC@A@GCMEA@A@@@@@@A@@@A@A@A@A@@@ABA@@BA@@@A@@@A@@@@@A@@@AA@@A@@@@@A@@@@@AA@@@@@@A@@A@@A@@@@AA@@@@@A@@A@@A@@@@A@@@@@A@@@@@AA@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@BAA@@@@@@@AA@@@@A@@AA@@@A@@@@AA@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@A@@@@@AA@@@@A@@@@A@@@A@@@@@@B@@@B@@@B@@@@A@@@@@A@@@A@@@AA@@A@@@@@@@A@@@@@A@@@@A@@A@@@@@@AA@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@AB@@@@A@@@@@AB@@A@@@A@@BA@@@@@A@@@@@ABI@KAEAEAC@CA@A@@BA@@B@@A@@@@@@@A@@@@@@@@@A@@A@@@@@A@@@@@AB@@A@@@AB@@@@A@@BA@@@@@A@A@@@A@@@@A@@A@@@@AA@@@@@AA@@@@@AA@@@@AA@@@@@@A@@@@@AA@@@@@@A@@@@@@@A@@A@@@@A@@@@@@@AA@@@@@A@@@A@@@AA@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@AAA@@@@@@@@A@@@A@@@A@@@@BA@@@A@@@@AA@@@@@@@@AA@@@@@@A@@A@@@@A@@@@@AA@@A@@@@@A@AA@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@A@@@A@@B@@A@@@@B@@A@@B@@@B@@A@@B@@@@AB@@@@@B@@A@@@@B@@A@@@@BA@@@@@@B@@A@@@AB@@A@@@A@@@A@@@A@@B@@@@@BB@@@@B@@@@@BB@@@@@@B@@@@@@@B@@@@@@@B@@@B@@@@@@AB@@@@A@@B@@A@@B@@A@@@@B@@@@@B@@A@BB@@@B@@BB@@@@@@@@@B@@@@@B@@@@AB@@@@@B@@A@@@@@@@AB@@@@@@@@A@@B@@@@A@@@@@AB@@@@@@@B@@@@@B@@@@@BA@@@@@@B@@@@@@@BB@@@@@B@@@B@@B@@B@@@@@B@@@B@@@@BB@@@B@@@@@B@@@B@@B@@@@B@@B@@B@@B@@@@BB@@@@BB@@@@@BB@@@@BB@@@BB@@@@AB@@@B@@@@A@@B@@A@@@A@@B@@A@@@A@@B@@A@@@A@A@@@A@@@A@@B@@A@@@@@AB@@@@AB@@@@A@@@@B@@A@@@@B@@@@A@@@@B@@@@A@@@@B@@@@A@@@@B@@@@A@@B@@@@A@@@@@AB@@@@A@@@AB@@@@A@@@A@@@@@@@A@@A@@A@@@@@@AA@@@@@@AA@@@@@@@AA@@@@@@AA@@@@AB@@@@A@@@A@@@@@@@AB@@@@A@@@@@@@A@@@@B@@A@@@@@A@@@A@@@@AA@@@A@@A@@A@@@@AA@A@@@@@A@@@A@@@A@@@A@@@@@A@@A@@A@@@@@@AA@B@@A@@@A@@@@@A@@@@@@AA@@@@@@AA@@@@@@AA@@@@@@AA@@@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@A@@AA@@@CBE@@@@@@@AB@A@@@@A@@@@A@BA@@A@@AA@AAA@@@AA@A@@@@@A@@@@@@B@@@@@@@@@@@BA@@@@@@AA@@AA@@@@A@@@@@@@@A@@@@@A@@@@@@@@@A@@BA@@@@@A@@@@@@AA@@@@@@AA@@A@@@@@@A@@@A@@@A@@@@AA@@@@BA@@@@@@@A@@@@@@@@AA@@@@@@@@A@@@@@A@@@@@@A@@@@@@@@A@@@@@@B@@@@@BA@@@AA@@A@@@A@@@@B@@@@A@@@AA@@@AAA@@@@@@A@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@@@@B@@@@@B@@@@@@@B@@A@@@@B@@@@@B@@@@@@@B@@@@@@@BA@@@@@@B@@@B@@@@@@@@@B@@@@@B@@@B@@@@AB@@@@A@@@@@AB@@A@@@@@@BA@@@A@@@@@A@@@@@AA@@@@@@A@@A@@A@@@@@@@A@@A@@@@A@@@@@A@@A@@@@A@@@@@A@@@@@@@A@@@@@@BA@@@@@A@@@@@A@@@@@AB@@A@@@A@@@A@@AA@@@@@A@@@@AA@@@@@@@AA@@A@@@@@@AA@@@@@A@A@@@@@A@@@A@@@@@A@@@@@@@AB@@@@@@A@@@@@@@A@@B@@A@@@@@@@A@@@@@AB@@@@A@@@@@@@A@@@@B@@A@@@A@@@A@@@@@A@@@A@A@@@A@@@A@@B@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@BA@@@A@@B@@A@@B@@A@@B@@A@@@@BA@@@@@A@@@@@A@@@@BA@@@A@@@A@@@A@@@@@@BA@@@@B@@@B@@@B@@@@@B@@B@@B@@@B@@B@@B@@@@@B@@BB@@@@@B@@BB@@@@@B@@@@@@@B@@@@@@@B@@@@@@B@@BA@@@@B@@@@@B@@@@AB@@@@@B@@A@@B@@A@@B@@AB@@@@@@@BA@@@@B@@@@BB@@@@@BB@@@@B@@@@@B@@@BB@@@@B@@@@@@@B@@BB@@@@@B@@B@@@@@B@@@@@@@B@@@@@@A@@B@@A@@@@BA@@@@B@@@@AB@@@@@B@@A@@BB@@@@@@B@@B@@B@@@@@B@@@@B@@B@@@@@@@BB@@@@@@B@@@@BB@@@@@@@B@@B@@B@@B@@B@@B@@B@@B@@BB@@@@@@BB@@@@BB@@B@@@@B@@B@@@@@@B@@@B@@A@@B@@@@@B@@@@@B@@@@@B@@B@@B@@@@B@@B@@B@@BB@@@@@B@@@@@B@@@B@@@@@B@@@B@@@@@B@@@B@@@@@@B@@B@@@@@BB@@@@@@BB@@@@@@BB@@@@@@BB@@@@B@@@@B@@B@@@@BB@@@@@@@BB@@@@B@@B@@@@BB@@@@BB@@B@@@@@B@@@@@B@@@B@@B@@@@BB@@@@AB@@@@@@AB@@A@@@@@AB@@@@@@AB@@@@A@@@@BA@@@@B@@A@@@A@@@@@AB@@A@@@@@@B@@@@@@@BB@@@AB@@@B@@@B@@@@@B@@@@AB@@@B@@A@@@@@@B@@A@@@A@@@@@AB@@@@A@@@@@A@@@@BA@@@@@AB@@@@A@@B@@A@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@ABA@@@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@@@AB@@@@A@@@@B@@@@AB@@@@@@@B@@@B@@@@@B@@@B@@@@BB@@@@@B@@@B@@@@@@@@A@@B@@A@@AA@@@A@@@A@@@@@AB@@A@@@@@A@@B@@A@@@@@@@AB@@@@@BA@B@@B@@B@@BB@@@B@@B@@B@@@@BB@@@BB@@@@@B@@@@@@@B@@@B@@A@@@A@@@ABA@@@@@@@@BA@@@@@@@@B@@@@@BA@@@@@@@@B@@@@@B@@@@@@@B@@A@@@A@@@AB@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@A@@@@@A@@@@AA@@@@@@@AA@@@@@AA@@@@A@@A@@@@@A@@AA@@@@A@@@@@@AA@@@@@A@@@@@A@@B@@A@@@@@@@AB@@@@AB@@@@@BA@@@@@@@AB@@A@@@A@@BA@@@@@A@@@A@@@AB@AA@@@@@A@@@AA@@@@A@@@AA@@A@@@@@AA@@@AA@@@@A@@A@@A@@AA@@@@AA@@@AA@@@@A@@A@@A@@AA@@@@A@@@AA@@A@@@A@@@A@@@A@@AA@@@@@A@@@A@@AA@@@A@@@@@A@@@AA@@@@A@@@A@@@A@@@A@@@A@@@@@AB@@@B@@@@AB@@@@@B@@AB@@@@A@@B@@@A@@A@@@@@AA@@@@@@A@@A@@@@A@@@@A@@A@@@@@AA@@@@@AA@@@@AA@@@@AA@@@@@AA@@@@@@@AA@@A@@@@AA@@@@@A@@AA@@@@@AA@@A@@@@AA@@@@@A@@A@@@@@A@@@@A@@@@A@@@@BA@@@@@@@@BA@@@@@@B@@@@@@@B@@A@@@@B@@@@@B@@@@@@AB@@@@@@@@@B@@A@@B@@@@A@@@@@A@@@@@A@@A@@@@@@@A@@@@@@@AA@@@@@@A@@@@@@@@@A@@A@@@@@A@@@@@@B@@AB@@@@AB@@@@A@@@AB@@@@A@@B@@A@@@@BA@@@@@@B@@A@@A@@A@@@A@@A@@A@@@@@A@@@@@AA@B@@@@@@@BA@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@A@@@@@A@@@@@A@A@@@@@A@@@@@A@@@A@@@A@@@@BB@@@@B@@BB@@@@@@@@B@@B@@@@B@@@@@B@@B@@@@B@@@@@BB@@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@B@@B@@@B@@@@@B@@@B@@@@@@B@@@@@BA@@B@@@@@B@@@B@@@@@B@@@@@B@@@@BB@@@@@@@B@@B@@@@@@@B@@@B@@@B@@@@@B@B@@@@@B@@@B@@@B@@B@@@@@@@@@B@@@@AB@@@@@@AB@@@@@@A@@@A@@@A@@@A@@@@@A@@A@@@@A@@B@@@@AB@@@@@@@@@B@@A@@B@@@@@@@BA@@@@@@B@@A@A@@@@@A@@@A@@@@A@@A@@@A@@@@AA@@@@@@@A@@AA@@@@@A@@A@@A@@@@@A@@A@@A@@@@@A@@@@@A@@@@@A@@B@@@@A@@@A@@@AB@@A@@@@BA@@@A@@@A@@@A@@@A@@@A@@BA@@@@@A@@B@@A@@@@BA@@@@BA@@@@@ADADAB@D@B@BABA@AAA@A@CAC@CAE@ABA@C@GDBFF\\P`V~DHNRbrTN`XZ^ZTXLB@NDIaAK@AHI@A@AAE@AEOAA@@@AFAHAB@@@BBF@D@DADAB@BBB@B@LC@AAACECCACFCB@@AD@BAF@B@DBBAHCF@B@BBFDJHHDHFBB@BBB@B@B@BAD@BBB@FBDBDBBBBBBDBF@DAD@HBHBB@B@DGB@DAD@@B@@B@@@B@@@@BB@@@B@@BBBBB@B@B@@@B@@@@@@CBABC@E@A@@BAB@DAB@BA@C@@BAB@@BB@@@@@B@@@@@B@@B@@@@B@@@@BB@@@@@BB@@@@@BB@@@@B@@@@BB@@@@@B@@B@@B@@@@@BB@@@@@@B@@@BB@@@@B@@@B@@@B@@@@@B@@B@@B@@@B@@@B@@@B@@@B@@@B@@BB@@@B@@@@BB@@@B@@@B@@@B@@@B@@@B@@@@@@AB@@@@@@@BA@@@@@@@@BA@@@@B@@@B@@@@@B@@@@@B@@BB@@@AB@@@@@@@@BB@@B@@@B@@@@@B@B@@B@@@@@BB@@@@B@@BB@@@@@B@@@B@@@@@B@@@@@B@@BB@A@@B@@@B@@@BA@@@@B@@@@@BA@@@@@@@A@@@@@AA@@@@A@@@AA@@@@A@@@A@@BA@@@@B@@AB@@@@@@A@@@@BA@@@@@@@@@A@@AA@@@A@@@AB@@@@AB@@@@@BA@@B@@@B@@@BA@@@@B@@@BB@@@@@@B@@@@@BB@@B@@@B@@@B@@@@@B@@@BA@@@@@@@AB@@A@@@@@AB@@@B@@@B@@A@@B@@@@@B@@@B@@@B@@@B@@@@@@@B@@@@BB@@@B@@@@@B@@@@BB@@@B@@@@B@@@@@@@B@@B@@@B@@@BA@@B@@@@@B@@@B@@@B@@@B@@@@@B@@B@@B@@B@@B@@@@B@@B@@@@@B@@@B@@@B@@@@@BA@@B@@@B@@@B@@@B@@@B@@@@BB@@@@BB@@@@B@@@B@@@B@@A@@B@@@@@BA@@@@B@@@@@BA@@@@B@@@@B@@@@B@@@@@B@@@@@@@B@@@@@@@B@@B@@B@@@@@@@B@@@@@B@@@@AB@@@@@BA@@@@@@BA@@@@B@@A@@B@@@@@@A@@B@@A@@@@@@BA@@B@@@@@BA@@B@@@@@B@@@B@@@@@B@@@@@BB@@@AB@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@@@B@@BB@@@@@@BB@@B@@B@@@@B@@@B@@@@@B@@@B@@@@@B@@A@@B@@@B@@@@@B@@@@AB@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@@BB@@@@@@@B@@@@@@@B@@B@@@B@@B@@B@@@B@@@@B@@B@@@B@@B@@B@@@@@B@@@BB@@B@@@@@B@@BB@@@B@@@B@@@B@@@B@@@@@BB@@B@@@B@@@BB@@@@B@@@B@@BB@@@@@B@@B@@B@@@@BB@@@@@BB@@@@B@@B@@@@@BB@F@B@@@B@B@HD@@B@BBD@@@FBDBB@D@@@B@F@BBB@B@B@B@@@BBBB@@HHB@@BF@AB@B@@B@DFB@@B@@@BB@DDDBHFB@D@BAB@@@@@BD@BFB@BB@DB@BB@BD@B@@@B@BB@FBBDFDBBBBB@NFDB@@@@BB@B@@B@@B@@@@@@B@@B@@BB@@@@B@@@BB@@B@@@@BB@@@B@@@BB@@@@B@@@@BB@@@@BB@@@@@BB@@@@B@@B@@B@@@@B@@@@B@@B@@@@B@@@@B@@B@@@@@@B@@B@@@@B@@@@@B@@B@@B@@@@@B@@@B@@@@@@@B@@@B@@@@@B@@@@@B@@@B@@B@@B@@@@@B@@@@@B@@@B@@@@@B@@@B@@@@@BA@@B@@B@@B@@@@@@BB@@@@@BB@@@@@@B@@B@@B@@@BB@@B@@@@BB@@@@@B@@AB@@@@@BA@@@@@@@A@@B@@@@A@@@@B@@@@@@@B@@@B@@BB@@@B@@@@@B@@@@@@BB@@@@@@@B@@@@@@@BB@@@@@@B@@@@B@@@@@B@@@@@BA@@B@@@B@@@BA@@@@B@@@BA@@B@@@@@B@@@B@@@@@B@@@BB@@@@@@B@@B@@@@BB@@@@@BB@@@@B@@BB@@@@@B@@@B@@B@@B@@@B@@@@@@BB@@B@@@BB@@@@B@@@B@@@B@@@@B@@@B@@@@@B@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@BB@@@@@B@@@@BB@@@B@@@@BB@@@@@B@@@BB@@@@B@@@B@@@B@@@BB@@B@@@B@@@@@B@@@@@B@@@B@@@@@@@B@@@BB@@B@@@B@@B@@B@@@@@BB@@@@@BB@@@@BB@@@@@@@BB@@@@@@BB@@@@B@@@@B@@@@B@@@@@B@@B@@B@@@@@@@BB@@@@B@@@@@B@@@B@@@@@B@@@B@@A@@@@B@@A@@B@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@AA@@@@@@@A@@@@@AB@@@@@@A@@@@@@@A@@B@@@@A@@B@@A@@@@@@A@@A@@A@@@@A@@A@@@@A@@@A@@A@@A@@@@@@@@AA@@@@@@@@AA@@@@@@@@A@@A@@@@A@@A@@A@@A@@A@@@@A@@B@@@@A@@B@@@@@@@@@BA@@@A@@A@@@@@@@A@@AA@@@A@@@@@@@AA@@@A@@@@@A@@@A@@@@@AA@@@@A@@@A@@@@@A@@BA@@@@@@BA@@B@@@@AB@@@B@@@B@@@B@@@@BB@@@@@D@A@BA@@@@L@@@AG@A@AB@FBBADBBABB@B@BBBB@@@DBBB@B@@HFBBFBDB@FA@@@E@A@@B@@@F@DAD@BAB@@BBFB@BBBDB@@BBBAB@BABB@@B@D@B@DD@@D@B@BABADAB@BB@@B@BA@@B@@@B@J@BBB@BCBBB@BBB@BA@@@@DAB@D@@BBB@D@@CBA@AB@BB@BBBBBB" ] ],
														"encodeOffsets" : [
																[ [ 121466,
																		32639 ] ],
																[ [ 121908,
																		32875 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "320118",
													"properties" : {
														"name" : "高淳区",
														"cp" : [ 118.87589,
																31.327132 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@@@@@A@@@@BA@@@@@A@@@@@A@@@@BA@@@@@A@@@A@@@@@A@@@@@A@@@A@@BA@@@@@A@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@BA@@@A@@@@@@@A@@@@@AB@@@@@@A@@@@@A@@@@@@@A@@@@@AB@@@@@@A@@@@@@@A@@B@@@@A@@@@@@@A@@B@@@@@@A@@BB@@@@B@B@@@@@B@@@@@B@@@@@B@B@@@@@B@@@@@B@@@B@@@B@@@B@@@B@@AB@@@@@B@@A@@B@@@@AB@@@BA@@@@BA@@@@BA@@@AB@@@@AB@@@@@BA@@@@@AB@@@@@BA@@@@BA@@@@@AB@@@@@@A@@BA@@@@@A@@B@@A@@@@@A@@BA@@@A@@@@@A@@@A@@BA@@@A@@@@B@@AB@@@B@@@B@@@@@B@@@@@B@@@B@@@@@B@@@@AB@@@@@B@@@@AB@@@@@BA@@@@BA@@@@@A@@B@@A@@@@@@BA@@@@@@@A@@@@@@A@@@AAA@@AAAA@@@@@@AA@AAA@AA@@A@@AAAA@AAAA@@@A@@@@A@@A@@@@AA@@@@AA@@@AA@@@@A@@AACA@A@@@@AA@A@A@C@A@@AA@@@A@A@@A@@A@@A@@AA@@@@AA@@@@A@@@@@AB@@A@@BA@@BA@@@A@A@C@AA@A@@@A@@@A@A@A@@AA@@@@AA@@@@A@A@@@A@A@@@A@@A@@AA@@@A@@@A@A@@@A@@@@@AA@@A@@AA@@@@@AA@@AA@@@A@@AA@A@@@@AA@@A@@@A@AAA@C@@@C@@@A@A@C@ABC@ABC@@@@@@A@@A@@A@@@AA@@@@A@@@@AA@@@@@AA@@@@A@@@@AA@@@@@A@@A@@A@@@@@A@@@A@@A@@A@@@A@@@@@A@@@A@@@@AA@@@A@@@@A@@@A@@@A@@@@@A@@@@@A@@@A@@AA@@@@@A@@@A@@@@@A@@@@A@@@@@A@@AA@@@@@A@@@AA@@@@A@@@A@@@@AA@@@A@@@@@A@@A@@@@@AA@@@@A@@A@@A@@A@@A@@@@@AA@@@@A@@@A@@@A@A@@@A@@AA@@@A@@@A@@@@@A@@@A@@@A@@@A@@@@@@@@@A@@@@AA@@@@@@@@@A@@A@@A@@@@@@@@@AA@@@@A@@@@@@@@AA@@@@AA@@@@@@AA@@A@@A@@@@A@@A@@A@@A@@A@@@@AA@@@@@A@@@A@@@@@A@@@A@@@@AA@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@AA@@A@@@@@@@@@A@@@@@@@A@@@@@A@BA@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@B@@A@@@A@@@A@@@@@A@@@@@A@@BA@@@@@@@A@@B@@A@@@A@@B@@A@@B@AA@@@A@@@@A@@A@@A@@@@AA@@@@@A@@A@@A@@@@AA@@@@A@@AA@@@@@A@@A@@A@@BA@@@A@@@@@@@AB@@@@@@AB@@@@@@AB@@@@@@A@@B@@@@A@@@@B@@A@@@A@@@A@@@@@A@@@A@@BA@@@A@@@@@AA@@A@@@A@@A@@@@A@@@@@AA@@@@@@AA@@@@A@@A@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@AB@@A@@@A@@@@@AB@@A@@@@@A@@B@@@@@@A@@B@@@@@@A@@B@@A@@A@@@@@@A@@@@@AA@@@@@@A@@@A@@@@@A@@@A@@@@BA@@@A@@@A@@BA@@@A@@@A@@@A@@@@@A@@@@@AA@@@@A@@@@BA@@@@@@BA@@@@@AB@@@@@BA@@@@@A@@@A@@@A@@@A@@@A@@@@@@@@@@@@A@@A@@@@@@AA@@@A@@@@A@@A@@@@AA@@@@@A@@A@@A@@@@AA@@@@@AA@@@@A@@AA@@@A@@@@@@AA@@@@@@@A@@@@@A@@@@@@AA@@@@@A@@@@@@@A@@@@A@@A@@@@@A@@@@@A@@@@@A@@@AA@@@@A@@@@BA@@@A@@@A@@@A@@@@@@@AB@@@B@@@@@B@@AB@@@@@B@@@@@B@@AB@@@@A@@@@@AB@@@@A@@@AA@@@@A@@@AA@@A@@@@@@@A@@@A@@@@@@@A@@@@@A@@@@@A@@@A@@@AB@@A@@@A@@@A@@@A@@@@@A@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@A@@@@@@@AA@@@@A@@@@@AA@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@B@@A@@@A@@B@@A@@@@@A@@B@@A@@@A@@B@@A@@@@@@@A@@@A@@@@@AB@@A@@@AA@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@@@@@@A@@@A@@@@@@@A@@@@@AB@@A@@@@BA@@@@B@@@@@B@@A@@@@@AB@@A@@@A@@@A@@@A@@@AA@@A@@@@@A@@@@@AA@@A@@@AA@@@@A@@@@@AA@@A@@@A@@AA@@@@@@@AA@@A@@@@@A@@@A@@@A@@@A@@@@@A@@AA@@@A@@@A@@@A@@@A@@@A@A@@@@@A@@@A@@@A@@@@@AB@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@AB@@A@@@A@A@A@A@A@AB@@AB@@ABAAA@KAE@CAE@A@A@A@@@A@@AA@@@AAC@AA@@A@AA@@A@@@A@@@@BA@@AA@AAA@AA@@@@@A@@@@@@@A@@A@@@AA@@@@AAA@@@AAA@CBAA@@A@@@ABA@@@A@@B@@ABA@@B@@@@@@@@AB@@@BA@@B@@@@A@@@A@@@AA@@A@@@A@A@AAA@A@A@@@A@@@@@@A@@AA@@@AA@@A@@@@A@AAAAA@@@A@@@@B@@@@A@@@C@A@A@A@A@@@@BA@AB@BCBC@CBCDGHABAFAD@BBB@FBH@FADADEFADCBCBCDEFCFEDCBEBA@I@GBK@GBE@C@A@AAABCBEBMNEDCBCDEBCDA@CBA@CB@B@@@@B@@B@@@@B@@@@BB@@@B@@@@@B@@AB@@@@@@@B@@A@@B@@@@@@@BA@@@@B@@@@@BA@@B@@@@A@@B@@@B@@A@@B@@@B@@A@@B@@@B@@AB@@@@@B@@A@B@@@@@B@@@@BB@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@BB@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@B@@@@@@BB@@@@@@B@@@@@@BB@@@@DLJPHLJXL`BDPVBBF@@@B@@@@@BB@@@@B@@@B@@@@@B@@BB@@@B@@@BEBA@CDABCBE@CAGCEAC@ABAB@BAB@BBBB@@B@DBHBB@BBDBB@B@D@DBB@B@D@HAD@B@BBD@B@DBF@DBFBFDFBFHBBJBHDB@B@BBB@@B@@B@@@BB@@@@BB@@@@B@@B@@B@@B@@B@@B@@B@@@@BB@@@@@BB@@B@@B@@@@BB@@B@@@B@@@@@@AB@@@@A@@B@@B@@@@@@BB@@@@@B@@B@@B@@@B@@B@@B@@@B@@B@@B@@BB@@@@@BB@@@@B@@@@BB@@@B@@B@@B@@@@BB@@@B@@@@BB@@@@@BB@@B@@@BB@@@@B@@@@BB@@@B@@B@@B@@@@BB@@@@@BB@@@@B@@BB@@@@@BB@@@@BB@@@@BA@@@@@@BA@@@@B@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@BA@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@BA@@B@@@@BB@@@B@@@B@@@@@B@@@BB@@@@B@@@B@@@@@B@@@BB@@B@@@@@B@@@B@@@B@@B@@B@@@@@B@@@B@@@BB@@@@B@@@B@@@@@BB@@B@@@@@B@@B@@B@@@B@@@@BB@@@B@@@@BB@@@@@B@@@BB@@@@B@@@@BB@@@B@@@@@BB@@@@B@@@B@@B@@B@@@B@@@B@@@@BB@@@B@@@@@B@@@BB@@@@B@@@B@@B@@A@@B@@A@@B@@A@@BA@@@@BA@@@@BA@@@@BA@@@AB@@@@AB@@@@AB@@@@AB@@A@@B@@A@@B@@A@@B@@A@@B@@A@@BA@@@@B@@A@@BA@@@@BA@@@@BA@@@@BA@@@AB@@@@AB@@@@AB@@@@AB@@A@@B@@A@@B@@A@@B@@A@@BA@@@@BA@@@@BA@@@@BA@@@A@@B@@@@AB@@A@@B@@A@@B@@A@@B@@A@@BA@@@@BA@@@@BA@@@@@AB@@@@@@A@@B@@@@A@@@@B@@A@@@@@AB@@@@@@AB@@@@@@A@@B@@@@A@@@@BA@@@@@@@A@@@@BA@@@A@@@AB@@A@@@@@A@@@AB@@@@A@@@A@@BA@@@@@A@@@@BA@@@A@@@@@A@@@@@AB@@@@A@@@A@@@@BA@@@@@AB@@@@A@@B@@@@A@@B@@A@@B@@A@@B@@A@@@@B@@@@A@@B@@@@A@@@A@@@@BA@@@A@@@@@A@@@@@A@@B@@A@@@@@A@@B@@A@@@@@AB@@@@A@@@@BA@@@@@A@@B@@@@@BA@@@@B@@A@@B@@@B@@@@@B@@@BA@@@@@@B@@@@@B@@@@@B@@@@AB@@@@@B@@@@@@AB@@A@@B@@@@A@@B@@A@@B@@A@@@@@@@A@@@@@@@A@@@@A@@A@@@@BA@@@@@@@AB@@@@@BA@@@@BA@@@@B@@@@@BA@@B@@@BA@@@@B@@@@AB@@@@@B@@@B@@@B@@@@BB@@@B@@@@@BB@@@@B@@BB@@@@@B@@@B@@@@@BB@@@@@BB@@@@@@BB@@@@@@B@@B@@B@@@@BB@@@@@@@BB@@@@@@@@@BB@@@@@@@@@@BB@@@@@@@@B@@B@@@@B@@@B@@@B@@BB@@@B@@@B@@@B@@BBA@@B@@@@@B@@A@@A@@A@@@A@@@@AA@@@A@@@@@AA@@@BA@@@A@@B@@A@@BA@@@@@A@@B@@@@A@@@@B@@@B@@@B@@@B@@@B@@@B@B@@@B@@@B@@@B@@@@@B@@BB@@@B@@@@B@@@B@@@B@@B@@B@@@B@@@B@@@@@BB@@B@@@@@@@BB@@B@@@@BB@@@B@@B@@@@@BB@@@@B@@@@@@BB@@@@@@B@@BB@@@@@B@@@@@B@@@B@@A@@B@@@B@@@@@BA@@@@B@@@@@B@@@B@@A@@B@@@@@B@@@B@@@@@@@B@@@@@B@@B@@@@@@B@@@@@@B@@B@@@@B@@@@B@@@@@@B@@@@B@@B@@@@B@@@@B@@@@B@@@@B@@@@B@@B@@@@@@B@@B@@@@@@B@@B@@@@@@BB@@@@@@@@BB@@@@@@@@@BB@@@@@@BB@@@@@@@@BB@@@@@@@@BB@@@@@@B@@B@@@@@@B@@@B@@BB@@@B@@@B@@@@@B@B@@@B@@@@@@@B@@A@@B@@@@@B@@@@AB@@@@AB@@@@AB@@@@@@AB@@@@AB@@@B@@A@@B@@@BB@@@@@@B@@@@@BB@@@@B@@@@@@BB@@@@@@@BB@@@@B@@@@B@@B@@@@@@B@@B@@B@@@BB@@@@@@@BB@@@@@@B@@@@A@@B@@A@@@@BA@@@@@A@@B@@A@@B@@@@A@@B@@@@@B@@@B@@@B@@@@@B@@@B@@B@@B@@@B@@@@BB@@@@@@B@@B@@B@@B@@B@@@@B@@@BB@@B@@@@@BB@@B@@@BA@@@A@@@@@A@@@A@@@AA@@@@A@@@A@@@@@A@@B@@A@@BA@@@@B@@AB@@@@@B@@@B@@@@@B@@BB@@@B@@@B@@@B@@@@@B@@@B@@BB@@@B@@@@@B@@@B@@@BB@@B@@@B@@@@@BA@@B@@@@@B@@@@A@@@@@A@@@A@@@@@AB@@A@@B@@@BB@@@@B@@@@B@@B@@@@@@B@@@@B@@B@@B@@@B@B@@@@@BA@@@@B@@@B@@A@@B@@@B@@@@@B@@@B@@@@B@@@@@@BB@@@@@@@B@@@@@@RE@@AA@@@A@@BAB@@@@B@@@@B@@@B@@@B@@@F@@@@@@@@A@AA@@@@@@@@@@A@@@@BB@@@@BA@@@@@@@@@AB@@@@@B@@@@@B@@@@@@@@B@@@@B@@@@@B@@@@@B@B@B@@B@@@@@BB@@@@@@@@B@@@@A@@@@@@B@@@@@A@@@@A@@@@@@@A@@@@@BBB@@BAB@@lX" ],
																[ "@@@@@@B@@@@@B@@@@@B@@A@@@@B@@@B@@@@@B@@@@@B@@A@@B@@@BA@@@@@@B@@A@@@@B@@@@@@AB@@@@@@@@@BA@@@@B@@@B@@@@@B@@@@@BB@@@@B@@@@@BB@@@@@@B@@@@@@@B@@@@@@@B@@@B@@@@@@@B@@@@@@A@@@@@@@A@@@@@AB@@@@@@A@@@@@@@A@@@@B@@A@@@@@A@@kW@B@@A@@@@@AA@@@@@@@B@@@@@@@@@@@B@@D@@@@@@@@BA@@@A@@@@@@@@@@BABBB@@@@@@@@@@@D@@AB@B@B@@A@@BA@AB@@A@@@@@@@CB@@@@@@@@@@A@A@A@@@@@@@@@@@@@@A@@@@@@AA@@@A@@@AA@@AB@@@@@@A@@@A@A@@@AA@@A@@AC@@@@@A@@@@@A@AQF@@@@BB@@@@@@@B@@@@@@@BB@@B@@@@@B@@@B@@@B@@B@@B@@@@@@@B@@@B@@B@@@@B@@@@@B@@@@@BB@@@@@@B@@@@BB@@@B@@B@@B@@B@@B@@B@@BB@@@B@@@@@BA@@B@D@FB@@@@@BB@@@@BB@" ] ],
														"encodeOffsets" : [
																[ [ 122027,
																		32189 ] ],
																[ [ 122001,
																		32200 ] ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));