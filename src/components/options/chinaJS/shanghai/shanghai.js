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
									'上海市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "310105",
													"properties" : {
														"name" : "长宁区",
														"cp" : [ 121.4222,
																31.218123 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@A@@@@A@@@@@@@@@A@@@@@@@@A@@@@A@@@@A@@@@@@@@@A@@@@@@@A@@@@@@A@@BA@A@@@@@@@AB@@A@@@A@@@@@@BA@@@@@A@@@@A@AAA@@AA@@@A@@@AA@@@@@@A@@@@@AAA@@@A@AA@@A@@@@@@@AAA@@@@@@@@@@@A@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@BA@A@A@@@@@AA@@@@AA@@@A@E@@B@B@@@AC@@AA@A@@@G@E@CBG@A@G@C@A@A@@@A@@@@@@@EAA@A@@@@@A@C@@@@@AAA@A@A@MCECE@AA@@A@C@A@A@@@CB@A@@@@@@@A@A@@A@@@@@@@AAEA@DA@A@EAEAEA@C@@@@@@@@@@A@@@@@@@@@@@@BA@A@@B@@A@@@MTFBDBDB@BAB@@@B@@@@BBB@AT@B@B@D@DD@@@@BB@@@@B@@@@A@@AA@@@@@@B@@@@@DB@@BB@@@@@@@B@@B@DBFB@B@@@@@CBA@@@@@@@A@@@@@A@BB@@@@B@@BA@B@@BB@@@@@BBB@@@@@@BABB@CHA@@DA@@@A@@@A@A@@@BBABB@BDB@B@BBBAB@@B@@@B@@ADD@@AA@@ADA@B@@@DB@@@B@@@BA@@@AA@@CDAB@B@BA@ADEFGBCBA@AB@@@B@D@@@B@@@B@@A@A@@@@BAB@D@@@BABABA@@B@B@B@@@@@@@@@D@B@B@F@@@HA@@BAD@L@B@B@B@@@B@@@@B@B@@@@BB@@DAB@BBB@B@BBB@B@B@BBB@D@BB@@@@BB@@ABAD@@@@BB@@BA@@FC@AB@@@@@BBBDB@BB@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@BE@@@A@A@@A@B@BA@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@B@@B@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@A@@@@@A@@@@@A@@@@BA@@@@@@@@@@@A@@@@@@@@BA@@@@@@@@@@@@@A@@@@@AB@@@@A@@@@@@@@@@" ],
														"encodeOffsets" : [ [
																124354, 31964 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310104",
													"properties" : {
														"name" : "徐汇区",
														"cp" : [ 121.43752,
																31.179973 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@AAAC@CAA@A@A@CEA@@A@@@E@@@@@@@A@@@@@C@@BA@@BB@ABA@@@@@@@@@@B@@@@@@A@@@A@@@AB@@C@@BD@@@@@@@@BD@B@B@@@@@@@@BB@ABA@@DABB@@BB@@BA@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@BAB@A@@A@AAAAA@A@CA@@A@@@@@@B@@@@@@A@@B@@@A@@A@@@@B@@@@@@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@BD@@@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@B@@@B@@@@A@@@@@@@@B@@@@@@@B@@@B@@@@@BA@@B@@@@@@@@@B@@@@@@@@@@@B@@@@AB@@MAOAEHCFAB@@@@@@AB@@@@ABADAD@BCHAB@@@@@@GRCNCAAAA@GACJCHFB@B@@@BA@@DB@@BB@@@@@@B@@@@@B@@@@@B@@ABD@B@@@B@@@@B@@@BB@@@BAJBNDB@@@@@@BB@@@D@@D@@@B@@@BC@@@@@AB@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@B@B@@BD@@B@@@A@AF@B@@@B@@B@@B@@B@@@@@B@BABB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@BB@@@@@@@@@@@B@BB@@@@@@B@@@BBB@@@B@BB@@@@B@@@@@@@BB@@B@@@B@@BB@BBB@@@@@@B@@@@AB@@@@@@@B@@@BA@@B@@@@@@@BAB@@@B@@@@B@@@@@@@B@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@B@@@@@@@@@B@@B@@@@@B@BB@@@@@@@@D@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@BB@@@@B@@@@@B@@@@@B@@B@@@@@@B@B@@@@@BB@@@@B@@B@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@@B@@@@@@A@@@@B@@@@A@@@@@@@@@@@A@@B@@@@A@@@@@@@@@@@@@@@@@A@@@@BA@@@A@@@@@ABA@@@@@@@@@A@@@@@@@@@C@@@@@A@@@@BA@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@B@B@@BB@@@B@@CBA@A@A@@@A@@BA@A@@@@@ABA@@@A@@@A@A@@@A@@@@@@B@B@B@BA@@B@@@@ABACAEAECCEAE@EBEDIBI@CAEEEIICAAE@C@@@A@@@ABEHILMBEBCAGCECG" ],
														"encodeOffsets" : [ [
																124381, 31859 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310101",
													"properties" : {
														"name" : "黄浦区",
														"cp" : [ 121.490317,
																31.222771 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@B@@@@AB@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@H@F@B@B@B@@@B@@@@@@@@@@@@@@@@@@B@B@@B@@@A@@B@@@@@B@FAD@B@B@@@@@BA@AB@BAHB@BAB@@@@@@@@@DAB@@AB@@BB@B@BBBBB@B@@@B@@AD@BA@@@@B@@BB@@@BBBBBBB@BBB@NCAC@A@A@A@CBA@@@@@@@@@@@@BCHEFCHI@@@@@@@@@@FIBC@CACACMUEGECAAAAE@OCMCAB@B@@A@@@ABA@A@A@@@@@@@@B@@@B@B@@@B@@AB@B@@@@@BAB@@@B@@@B@BAB@DA@@@A@@AA@A@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@AB@@@@@B@@@@@D@@@@@@@@@B@@@@@@@@AB@B@@@@@B@@AB@@@@@B@@@@@@@@@@@@@@@@@B@@A@@@@B@@@@@@@@@@@B@@A@@@@@@B" ],
														"encodeOffsets" : [ [
																124373, 31970 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310106",
													"properties" : {
														"name" : "静安区",
														"cp" : [ 121.448224,
																31.229003 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@A@@B@D@@@B@@@B@@@B@@@B@B@@@@@B@@@@@@@@@B@@@@@@@@AB@B@@@@@B@@@@AB@@@@@@B@@@@B@@@@@B@B@B@B@@@@@@@B@@@@@B@@A@A@C@@@A@@B@@@@@B@BB@@@@B@@B@@D@@F@@@@@@@FBB@@DA@@B@D@@B@B@@@@@B@@@@@B@@@B@@@@F@@@@@@B@@@@B@@@B@@@B@B@@@@@@@@@@@@@D@@@@B@@@@@@@@@D@ENB@BD@@B@B@@@@@@@BA@@@@@@T@BA@CFBDBD@BB@@@@DBPB@AF@@@@@@@@C@A@A@A@A@C@E@AAEG@@CBE@A@@@@@@@A@@@A@@@@@A@@@@@@@A@@@@@@AA@@@@@A@@@@AA@@@A@@@@A@@@@@@A@@AA@@@@@@@A@@@@@@@@@@@AB@@@@A@@@@@@@A@@@A@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@A@@@@B@@@@A@@@AB@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@B@@@@@@AB@@@@A@@@@@@@@B@@@@@@A@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@ABA@@BA@@BABA@@@@BAB@@A@@B@@@@@@@@AB@@@@@BA@@B@@@@A@@@@B@@@@@@A@@@@@@@@B@@@@C@A@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@A@@@A@@A@@@@BA@A@@BA@A@@@C@@BCAA@@A@@AA@@@@@ABC@@BA@@@A@A@AAAAA@A@@AA@@BA@CB@@@@@@@@A@ABA@BG@ABAB@@A@@@@@A@ABC@E@A@@@@@AB@@@A@@@@A@A@@@@@@@@@@@@@@@@A@@@A@A@A@E@G@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@BA@@@@@A@@@@@@A@@@@@@@A@@@@@@@@@@A@@@@@@@@A@@@@@@AA@@@@@AA@@@@A@A@@@@@@@@AA@@@@@A@@@@@A@@@@@AA@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@C@@@@@@@@@AAA@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@B@@@@@B@@@@@@@@@@@@AB@@@@@@@@@B@@@@@@@@@@AB@@@@@B@@@@@B@@@@@B@@@@@@@@AB@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@AA@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@ABA@B@@@@B@B@@AF@@@BBB@@@@@BBBBBBB@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@BB@@B@@@@@@@@@@@@@@@@@@@B@@BB@@@@@@BB@@@@@@@@@@@B@@@@@@@@@@@@@@B@@B@@@@@BB@@@@B@@@@@@@B@@@@@@@@@@@BB@@@@B@@@@@@@@@@@@BAB@@@@@B@@BB@@BB@B@B@B@@B@@B@BC@@B@@@@@@@B@@@@@B@@B@@B@BAB@@ADEFEH@@ABA@CBC@EDA@ABAB@@@BAB@@@@A@@AA@@AA@@@@AA@@@@@@AA@@@" ],
														"encodeOffsets" : [ [
																124340, 32022 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310109",
													"properties" : {
														"name" : "虹口区",
														"cp" : [ 121.491832,
																31.26097 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@E@E@A@A@@@ADGBC@EBA@A@@@@@@@@@@B@@@@@@@DBB@JBDBBA@ABE@A@@@@@@AA@@AA@@@@@@@@@@@@A@@@@AA@@AA@@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@A@@A@@@@@@@@BA@@@A@@@@@C@@@A@A@@@@DA@@B@@@@@B@BA@@BABADABA@C@C@A@@@@BABC@ABAB@BADCBCBA@@BADE@@@@A@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@C@AI@G@IACACAGAMDA@AAA@AAAAAD@@@D@@@BAB@@@BAB@@@@@BB@@@B@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@@B@@@@@@@@@B@D@@A@@@@@@@@@@B@@@@A@@@@@@B@@A@@@AB@@@@A@@B@@@@@@A@@@@BA@AB@@@@ABAB@@AB@@AB@B@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@B@@@@A@@@@@@@@@@B@@A@@B@@@@A@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@A@@B@@@B@@A@@@@@@B@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@B@@@B@@@@@@@B@@A@@B@@@@@@@@@@@B@@@@@@BB@@@B@@@@B@@@@@@B@@BB@@@@@B@@@@BB@@@@@@@B@@@@@@@B@@@@@B@@@B@@@@@@@BAF@DH@BF@B@F@D@B@@@@B@D@@@@@B@@@@@@@B@@@B@@@@@BAF@@@BA@BB@@@B@B@B@D@@@@@@@@@@@@@B@@E" ],
														"encodeOffsets" : [ [
																124402, 32064 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310107",
													"properties" : {
														"name" : "普陀区",
														"cp" : [ 121.392499,
																31.241701 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DB@@@@@B@@@B@@@@BB@@@@B@@@@@B@B@@@BA@@@@@A@@@@@@@@B@@@BB@@@@B@@@@@A@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@BBA@@@BB@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@@@@@B@@@BB@@@A@@@@@@B@@@@A@@@@@@B@@@@@@A@@@@@@@@@@@@B@@@@A@@@@B@@@@@@@@@@B@@@B@@B@@@@@DA@@@@@@@BB@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@B@B@@@@@BBB@B@@BB@@@@@@@BBBCBB@A@@B@@A@@@@@@@A@@@A@A@@@AA@A@@K@E@@D@@@@@@AB@AA@@B@@@@AAA@@B@@ABCDBB@FB@@@B@@@@@@@@@@@@@B@B@@@F@@@@@@@B@@B@@@BA@BBMBCCADA@EB@B@@@@C@@ACBKBAECBEBBDEBABBB@B@BA@A@@@@BAB@@@B@@@BAB@BGA@BA@A@@BABB@@@@B@@@@@@BBDBB@D@BB@@@@@BABD@@B@@@@B@@@B@@@B@@AB@@@BBBA@@@@B@@D@B@BBB@AJ@@AD@@BB@AB@B@@@B@@@@@@B@@@@@BB@@B@B@@@@@DC@@@@BBBB@@B@BBB@@@DB@@B@@@B@AE@@ACCG@@AAJA@AFAA@HABBF@@A@@@@B@@@@@@@@BD@@@F@@@@AD@@BB@@BA@@BD@@BB@BBD@@@B@@BD@DAF@A@@A@A@@@A@@A@JA@A@@DA@@@@AA@@@@@B@@@ADAAAHB@@B@@AA@@ACECGB@@@BAB@@@@AB@B@@BD@@@@@@AAA@@@A@@@@@@@@@A@@B@@@@@D@@@B@@@B@@A@C@@@@B@@@B@@@B@@@BA@@B@@@@@@A@A@A@@@@@@@@@@HABB@@BB@A@B@@@@@B@@A@@@@@@@@BB@B@@AB@@@@@@B@@@@@@@@@@@@@@@@B@@B@@@@B@@B@@B@@B@@@@B@@B@@B@@BB@@BB@@@@@BA@A@@BABAB@FCD@DAB@BA@@FGFEBC@@BA@A@AA@@@@A@@@@@A@@@@@@@AD@@A@AA@@@@A@A@AAA@@AA@@@A@@@@BA@A@@@@@@@@@@A@@@@@AA@@@@@@@@@@A@@@@@@@A@@@@@AA@@@@A@@@@A@@@@@@@@@@@@A@@@@@@@@@@@A@@A@@@@A@@AA@@@@@@@@@@@@@@@@@@@A@@@AA@@@@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@AAAAAA@A@@@@AA@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@AAA@ACAA@@@@A@@BED@@AB@@AA@@@@BCBA@@AA@@@@AAC@A@AAA@A@A@AAA@A@AAA@CB@@AA@@@@@A@A@@A@@@A@A@A@K@C@AB@@GB@@E@A@A@C@@@@@@@@@A@A@A@@@ABABAB@@C@A@AB@@@@@B@BA@@@A@@@C@A@@@A@@BABADEHCF" ],
														"encodeOffsets" : [ [
																124267, 31987 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310110",
													"properties" : {
														"name" : "杨浦区",
														"cp" : [ 121.522797,
																31.270755 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@B@D@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@B@@@@@CFAB@@ABADCDABA@AB@BADAB@@@@@B@D@DABCBABAB@@ABA@@@@@A@@@CB@@@@@B@B@@@D@@@@@B@@AB@@@@@@@@@BB@@@@@@B@@@@@@@@@@@@@@@B@@B@@@@@@@B@@BB@@B@@B@@@@@@@@@@@@@BB@@BB@@@@@@@BAF@BABCAIAA@CA@@@@@@A@@@@@@@@@@@@BAB@FADCH@B@@@B@B@F@F@@@@@@@@@@@@@@BA@@B@B@@@@@@@B@@@B@@@B@@@B@@@B@@@@@@@B@B@@@@@@@@@B@@D@H@H@D@B@@@@@@B@BB@B@@@@@@@B@@AB@@ABED@@@BFDBDBDDDBDBBDDBD@@@@DANEHC@BDF@@FAFHhOHCNGDCDGDM@W@KBGFIFQBG@CAGEGCEIIGEOIKIC@ECIAGAGAG@@@@@@@G@" ],
														"encodeOffsets" : [ [
																124433, 31997 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310115",
													"properties" : {
														"name" : "浦东新区",
														"cp" : [ 121.567706,
																31.245944 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@bMnIpITCLCHCHCHCàTK\\OTKNI^_ÈïTQlaJQ¶±`e`Z¡LDCsEWOW]Wa[@GBI\\wsYg|QNUBģFqAZHZB@@JHBAH@BDJBHA@@@BB@H@@ABB@@F@D@B@B@@@@@DBB@BBH@@@DAF@DC@@BB@@@B@ABA@@@B@AD@B@B@B@@B@@BA@@@@@@BA@@@A@A@C@@B@B@BA@@AAB@@AB@@@DA@@@@@ABA@@A@@A@A@@@A@@@A@B@@B@BA@A@@AA@@D@@D@@B@@@@BB@@@BA@A@@BABADB@@BCB@@EDA@CDA@C@A@A@AAGJA@ABA@AAED@BBBCDABAB@BABADGDABIFABEDIFABIFCBEBEDC@CBEBC@A@C@C@C@E@ABKB@AA@@@@AA@AB@@A@A@@BA@A@GB@A@@@BQBO@IAG@I@A@A@@@@@A@AB@@@AO@A@ABABABABAD@BADC@AA@@OBA@OBACS@@@C@@AE@A@AA@@ABKA@@@BA@@@ABA@FD@BABBBB@AD@BA@@DC@@@@BA@A@@A@@ABBBD@D@@BB@@B@@@DBBBB@@DB@B@@@@@B@@AD@@@@@B@@ABA@@BBB@@CA@@@@AA@BAA@@A@@@B@@AA@@@@ACA@AC@@FAAA@@@@@@B@@@BCA@A@@@@A@@C@@@AE@@AAAAB@@A@@B@@@BA@@@@BBBF@@@B@@BBB@@BBABAA@BB@@B@@@@@B@BD@@@AB@VBB@@B@BBADAAB@AAABB@ABBBA@A@ADAAAD@DECA@A@@A@@A@@AABA@A@@AA@@@A@A@@A@@@AA@AB@BBDADAB@@DB@BB@@B@B@@@AB@@BFBABB@@AB@@@@BAD@B@BB@B@ADD@B@@@@BB@@B@@B@B@@@BBD@CBCA@@@B@@BBABB@@BBBD@@@D@@BA@ABD@B@B@@@@@B@@BB@@@FB@BB@B@B@B@BBADD@@AD@@BB@B@ABB@@BAAABA@@AA@@AAB@@@@ABA@ABA@@@C@A@A@AB@@@@A@@@A@A@AA@@A@@@@@A@@A@@@@@@@@@A@@AB@@@@A@@AA@@@AB@BC@CHBBB@BB@@BBABD@B@BBB@@@DBB@B@@BB@@@B@@ABABBBBD@@FA@@@@@@@@@AFCA@@@BADDBEFA@@@BB@@@@@@CFA@@@@@@BA@@BD@BBCDAACDAA@@AAABE@BCAAAAA@C@BBABA@ABAD@BE@@A@@@@CA@DA@@BA@@BE@ABGA@@@@EA@@A@@AA@@@@@@@A@@BA@GAA@A@A@@@@B@@@@@BAB@BA@@BA@@B@AA@@@@@@@AB@@@A@@@@@@C@@@CA@@AAA@BC@@BAAAABAAA@@BCH@DA@CAAA@BCA@AA@AFA@@B@B@BA@@@A@@@@@A@A@@@A@@@@@@@@A@@@@@@@A@@@@@@@A@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@AA@@@@BA@@A@@@@@@@A@@@@A@@AA@A@@@A@@@@@A@BAAA@@B@@@@@@@@@@A@@@@@@B@@@BA@@BEAAA@@DAAA@BA@@AA@D@@@BAB@@@BA@@@@@@@AB@@@A@A@@A@@@AAA@DA@@CAABA@GBDHDFBHADAFKNGJAF@B@@@B@@@DBFDBJJFFBF@DAJCJAF@FBFDFFDFBDBNDPDF@BBBBFDFHNVBDBD@DADEJ@@@@@@@@@@GJEDGFAD@@@@@@@@@@@@AB@D@B@B@BBDHBDBDBJBH@J@H@@@@@@@H@HBHBJBFDD@LJPJHFJJDFFHBH@DAHEREJAH@L@XCNCHCDMHGDgPUJMJEJCF@J@HHLJNRR" ],
																[ "@@PDNARCTEPEFGBKCeEQGEI@IBMNY\\GJELAJ@J@HBB" ],
																[ "@@HRHJNBX@XCRGfEFGBM@eCGIUKWGIgCIAK@KDMPIREVCXARBP" ] ],
														"encodeOffsets" : [
																[ [ 124438,
																		32149 ] ],
																[ [ 124808,
																		31991 ] ],
																[ [ 124870,
																		31965 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310114",
													"properties" : {
														"name" : "嘉定区",
														"cp" : [ 121.250333,
																31.383524 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@A@@@A@@@@@@AC@BA@A@@@@AAC@A@CAAA@@@@@@@A@@A@BA@AB@B@@AHB@ABA@A@@@A@@BA@A@@B@B@@A@AAABAFAACFADABFLADA@BD@@@@@@AFAB@BCDDNAAAB@@A@@@AA@@@@@@@E@@@A@A@@@@@@@@@@@@@A@@@A@@EAADCBA@@@AB@BB@@@@@AB@@BBA@@@@@@@CF@L@@@@BBB@@B@B@@@B@@@@@@@B@@@@AB@A@DAAA@A@@@@@@AA@@@AAA@A@@@@@A@A@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@A@@A@@@@@@CB@@@@A@@@@A@@@A@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@@@@B@@@@A@@@@@@@@B@@A@@@@@@@@B@@AA@@A@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@@@@AA@@B@AA@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@B@@@@@A@@@@@AA@@A@@@@@@@@@@B@@@@AB@@A@A@@@@@A@@@@@AA@@@@@A@@@A@@@@CA@BABA@A@CB@DB@@B@@AB@@A@@@A@@C@@@ACB@BB@@BC@BC@@@A@@@AA@ABAAA@A@ACA@CAAAA@@@@A@@@A@A@@@@AAGAGAA@C@A@@AEAC@CAA@A@@@CDE@CBA@CBA@A@C@A@A@EBCB@@ABEHAD@B@D@BA@@@A@AB@@ABA@AD@B@BDBBBABEAKDA@EAED@A@@@CA@@B@B@B@@@BAA@BCB@FA@CAA@EBAA@BC@@AC@@DA@@CA@@BA@@AE@@DCAC@C@@BABA@ABA@CBCAA@EB@CC@C@@BAA@@AA@@BAAAEA@AB@@@EA@CA@@DEAADB@@BA@AFB@ABAA@@@BA@@AAB@C@@@AAA@@@@@@ABAD@@CCCABCA@@BAAB@CAABAAAAAB@@A@AAB@@CC@AB@B@@@BA@A@A@ABAA@AAAA@A@A@@@A@ABAB@@A@@AA@@@@B@@@@A@@BBBA@AA@@@ACBAB@BAA@@AAA@@@ABC@@BB@@BB@@BC@@DAFCDEFCAAB@BA@AB@AA@@AAA@@@A@AEB@@AB@BBBBD@B@B@F@@BBBB@B@BD@B@BBABD@@@B@@@@BABAFA@@@C@@BC@@D@@CA@D@@ABAA@DDBAD@@@@@@@@@@A@@@A@A@@BA@@BB@@BD@CD@@ELCFCCEC@A@@BCMAA@A@A@ABBBAB@B@B@B@B@BA@BBAB@@@B@B@@@B@@@BAB@@@B@B@@@BB@B@@B@@@BB@@@BB@@@B@@@B@BB@@@B@@B@BA@A@BBB@@B@BA@BBA@@BA@@@ABBBA@ABB@@B@@@B@B@@@B@@ABBB@@@B@@@B@B@@A@CAA@EAABA@A@E@@HD@B@AB@BABAB@BCAC@AAA@@BA@@@C@A@@D@@BBABA@@@BBABB@@B@B@@@D@B@@AD@B@B@B@@B@@@@@B@@C@@D@D@@B@B@@BBB@F@B@@BB@B@@BCBC@@BC@AFDBF@DDFBBEBB@DB@@AD@@BFB@ADBHDB@@@@BA@BB@@D@ABD@@AND@BBB@@ABA@@B@@@BAB@@A@@@@@@@A@@B@@BBD@BBD@ABAB@@@BBBB@@@D@B@@@@BA@A@A@AB@@BB@@B@@@@BBBB@BB@B@@ABBBBA@BFBBCB@CDB@@BA@@BB@@@@BA@AB@@AA@@A@@B@@BB@@@@@BA@@@A@@@@BA@@@A@@@AB@@@@A@A@@@@B@F@@A@C@@DD@B@@@D@@B@BB@B@@BB@@@@BD@@@B@BB@ADB@AD@AB@BB@@BB@@AB@B@@F@BA@@@@@@C@@@@A@@DB@@BA@G@GBCBEBABA@AB@@@B@BB@AD@@@BBB@@@@AB\\LDA@@DBB@@@B@BAB@@@BB@@B@B@BAB@DBDBD@BBB@FDDB@@@B@BA@@BBB@@@B@BFD@@@BDBDDBBBBB@D@D@BBB@B@B@@BAB@BB@DDBBBBB@BBFBBBB@B@@A@AA@@@AA@@B@D@D@BADB@@D@D@@@BB@BB@B@B@BA@@@BBD@BABA@@@@BBB@@BB@BBBBBB@B@@@B@AB@F@B@@B@B@@AB@BBBBB@B@@@@A@AAAB@@AB@@AB@@A@C@A@@@A@AB@@CB@B@@BD@@AC@@AA@@AB@@A@@@AB@B@BB@@BBB@@BD@@BA@@BB@@BB@@BB@@E@CAA@@BA@B@@B@@@@@@B@@@B@@@@BA@@@@@@@A@@D@B@BB@@@@@@@@@B@@BB@@@@@BB@@@@@BBB@D@@D@BB@@B@@BB@AB@@@@CB@@@BABBB@DBBBB@@@@BB@BBB@ADB@B@@A@@B@@@B@@BD@@@@AB@B@@AB@@@B@@B@@@@@@BB@@@BB@@@BA@ABB@AB@BBB@BBB@@DA@@@FBBD@@B@B@@@BABABAA@BA@BDA@@@@B@@@BE@@A@@@@A@@@A@@B@@@@@@A@A@AB@BA@@@A@A@@BA@@BAB@@BB@@@B@@@@A@@@A@@BAA@@AB@@@@@@A@@B@@@@A@@@@AA@@@@A@@@@@A@@@CC@@@@B@BAB@@AA@@@BABA@@FB@AAC@@E@@@@AB@@A@@@@A@@@BA@AB@B@@AA@@AA@@@@@@@@A@@BAB@BAA@@@AA@@BA@A@@B@B@BB@@@@B@@AB@@ABC@@BABA@@@AA@@@AADEBG@@BABBBAD@B@@E@@DE@A@@@A@EA@@@@A@@@@@ABCB@@AA@@C@A@C@@@@A@A@BAA@@@@@@AA@A@@A@@@A@@@@B@@@@A@ABB@AC@BC@AA@A@A@A@@@ABA@QEIC@@BA@@B@BC@AA@@@@@@A@C@@A@@@@@@A@A@@B@B@@@BA@@BB@@BA@@B@@BB@@A@@@A@@@@B@@@@@@A@@@@B@@AA@@@B@@AA@@@@A@@AA@@@AAA@@@@DA@@@@@@@AB@@AB@@A@@BA@A@ABA@@B@@AB@DBBCA@BACAA@BA@@DC@@B@@A@@@@@@BA@@@@@@@@B@A@@A@@@@BA@@B@BA@@@A@@A@AABA@@BABA@ABA@@@AB@@@@@@A@@@@@@B@@@@A@@BA@@@@@A@@@@A@@@CABAA@A@@A@@@A@@@@@A@@A@@AA@@AA@C@@A@@@C@@@AB@F@@CB@@ADB@A@@B@@A@@BAB@@@@ADB@@@ABC@@@ABAA@BAA@@@C@@@AAB@@A@@CADCAA@@BA@@BC@BBCBCBB@CA@@@A@@@@C@@@AHB@A@A@@A@@@@AA@@ABAAAABA@A@@@A@@@@A@@@@A@@A@@@AA@@@@A@@A@@@@A@@@A@@@@AA@@@@@@A@@@@A@@@A@@AA@@@@@A@@A@@A@@@A@@@@@AA@@@@@A@@@@@AAA@@@@@A@@A@@@@DEA@BA@AB@@@BBBA@@BAA@@A" ],
														"encodeOffsets" : [ [
																124249, 32046 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310112",
													"properties" : {
														"name" : "闵行区",
														"cp" : [ 121.375972,
																31.111658 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@BA@@@@D@@A@@@A@@@CC@@@A@@A@@@@A@MCIAAB@@A@@A@@@A@@A@@@A@C@BA@@@A@@@@@A@@@@@A@@@@A@@AA@@CB@@A@@@AEADGDIHBB@BBDBDMHQ@@@@@@BADG@ABCBCBA@@@@BA@@@@@@BADEFGPBNB@@BA@@@@@A@@@@@@@@@@@A@@@@@@@@@AB@@A@@@@@A@@@A@@@@@@@A@@@@@@B@@@@@@A@@@A@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@AC@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@A@@@@@@@@@A@@B@@@@B@@@AB@@@@@@@@A@@@@B@@@DBB@B@BBBBB@@@@BBA@A@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@AB@@AA@@AA@BA@CB@BAA@@A@@@@@@A@A@C@@A@@@@@@C@@AD@@@BA@@B@@@B@@@@@@@@A@@@@@@@@B@BAA@@AB@@AD@@@@@B@@@@@@@F@@@B@@@FB@D@B@BBB@DBDBBHAB@BADB@@CBB@BB@@B@@@@B@B@@BA@@@@@@B@@A@@BA@A@@@CBB@@ABB@BB@CB@BBAF@@AB@@A@@@@@@@@B@@@@@@@@A@@@BBABB@@@@@B@@@B@B@@BB@@@@@@B@@@@@@@BB@@A@@B@@B@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@B@@@@B@@@@@@@B@@@@@@@B@@@@@@B@@@B@B@@@@@B@@@B@@A@A@AB@BEB@@BDB@ABBDBB@@CDG@AB@BBBABBAB@@ADB@BB@@DB@@D@@@@@@@@B@@BA@@@@@@B@@B@AB@@AB@@ABA@A@@@@@A@@B@B@B@HBB@@AB@@@@@@@B@@BB@@@FB@@@@HBBAF@@AB@@AB@@CDB@@@@@BF@@ABCBAB@BAAAD@B@BBBBADF@BABB@@BBDCBBDCAAC@@AB@@A@@@@B@DE@@@@@@AA@@B@FECABC@A@@DBBE@@@@@@@@B@@EC@AAAAAB@BA@@@A@@AA@A@CA@@A@AAA@C@BAAA@@AAA@AADGD@@ABA@@B@@BB@@@@@BA@@@B@@@@@@@@@BB@@@@@B@@@BBB@B@@@B@@@@@BAB@B@D@@@B@BAB@BA@@@@BA@BB@@BB@BABB@AA@BAA@A@@AC@@BC@BCAAA@A@A@A@@AEA@@A@@AA@@@@@A@A@C@BAB@@AC@@@C@AA@AA@BAAA@@@A@@DBDAC@AA@@A@A@@@@AA@@A@@A@C@BCA@A@@A@ABC@A@@A@@BA@BAEA@AA@@B@@@A@AA@@ACA@@BABCAC@ABAB@@B@@@BB@B@@@B@@BB@B@BA@BB@@@@BB@B@FD@CBCBBBCB@B@AABAA@BABBA@BBBCAAA@@@AA@UBA@@C@@A@A@@@@@AA@@ABBBAAA@@AA@AA@@@E@AA@A@@B@@A@@@AB@@@BABB@BF@@B@@@DB@@@@@@BDB@A@@@A@@@@B@BB@ED@@BDB@B@@B@@BA@@@B@@@BB@ABB@@@@DB@@AA@AB@BA@@@A@@@@BC@@@A@@@@@ACA@@AAAA@C@@@AA@@AC@C@AABA@@@BB@B@@A@@D@@CB@@ABCA@AABA@AECB@BA@@B@@AMC@@@AABCAC@A@C@@A@@@AA@A@@@ABA@@ABA@@@A@A@CA@AACBAB@B@@ADA@@@A@@@@BA@@A@@ABA@BBC@AAA@@AA@ADC@A@@B@@A@@@@AC@@BA@AB@AA@AB@@CB@BA@@BA@A@A@@@AAABBB@BAB@@D@@BA@@@@BAB@@AB@@C@@@@BA@A@@AA@AAA@A@AAA@A@A@A@CAAACACAAA@A@@CAABCJCNB@ABBDGDEAMAE@IAKGGAC@U@KACAGAEEECCCIEMCGCGAG@KAKAE@KCGAKC_IA@A@GAEAC@E@EBQHE@C@C@@@CB@BBN@J@BB@BBD@@BBBDDBBBBBDDDBB@FJHABCA@A@@A@@@@BMAADBB@@@B@B@D@@@B@D@B@B@B@B@B@B@B@B@@BBAD@D@F@DBB@BBF@F@D@D@D@H@B@BBBAD@@@@B@@@BC@BBABB@@DBBCBCHBLBJFAFFB@AHB@DB@EFFBADD@@D@@BB@@B@@@@@@@@@@@@@B@@BBABADBAD@BAD@@AD@DA@@DA@@@@B@@A@@B@@ABB@AB@@@B@@AB@BADAB@B@@GAADIACA@@@@@@@@@@@@@@@@@@@@@@@B@@AD@B@@@@@@@@AD@@@@@B@@@@@@@@@@@@@@AB@@@@@@@@@@@@B@FB@AB@@BBBFD@@AD@BABAB@BAB@@AB@BCDABADAB@@@@@@A@@@@B@@A@@B@@@B@@A@@@@@@B@@@@@B@@@@@@@B@@A@@B@@AB@B@@AB@@@BA@@BA@A@@@@@@@A@@@@@@@AB@@@@@B@@B@@@@@@@B@@@@@@B@@@@@@@@AD@BA@@@@B@@A@@@@@@@@BAB@@A@BB@@@B@@AB@@@@A@@@A@@B@@@B@B@@@@@BCB@@@DAB@@A@@@AB@@AB@@B@AB@@@@@B@@@BA@@BA@@@@B@@@@A@@@@@@BA@@@@@@B@@@@@B@@A@@B@@@@@@AB@B@@@@AB@@@@@@@@@@@B@@@BA@@@@@@B@@@B@@AB@@@@@@@@@B@@AB@@@@@@@@@@A@@@@B@@@@@@A@@B@@@@@@@@@B@@@@A@@@@B@@@@@@A@@@@B@@@@@@@@@B@@@@A@@B@@@@@@@B@@@@A@@@@@@@@B@@@@@@@@@@A@@B@@@@@@@@@@A@@BB@@@@@@@@@A@@@@@@B@@A@@@BB@@A@@@@@@@@@@@@@@@AB@@@@@BA@@@AB@@@@@@@@@B@@@@@@A@@@@@@BA@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@A@@@@@@B@@@@@@A@@@@@@B@@@@A@@@@@@@A@@BA@@B@@@A@@@@A@@A@BA@@@@@@A@A@@AAAAECCACAAAA@C@A@A@CBA@@BCBADCDCBADA@@@A@ADA@@BBABBAB@B@@ADA@EDDD@@@BA@@DAB@@ABAB@@BB@@@B@BAB@@ADDBAD@B@BCDA@@@@@A@BB@BCBB@AB@BA@A@@@AAABB@ABA@@BB@A@BBA@CAC@AB@@AA@BA@@@A@BB@@@@@@BBAB@@@@@@@@@B@@@BBB@@@@@@@@@BB@B@BBB@BD@@@@@@@@DBA@A@@BB@@@@B@@BB@@@@@BB@@@B@@B@@B@B@@@@BB@@@BB@@@BD@@ABBFAB@DBB@@EDA@ABB@A@@@A@A@AB@@D@@@BFCFBB@LCFBBAAACA@A@ABCB@BA@@BAB@@@B@@A@C@ABCFGBA@@DAFAB@B@D@B@B@DAB@DAF@DC@@B@B@DBD@FB@BB@D@B@HBHBBB@@@@@B@B@@@B@@B@BBDBBAAA@@B@B@@@B@@@B@@CB@DGA@BA@A@@@@A@AA@@@@A@@AA@B@@AA@@@@@AAB@@@@@B@@@@@@@B@DA@@@@A@A@AE@C@AA@@@@@@@A@@AA@@C@@@@@A@@@@B@@BB@@@@@@A@@A@@A@@C@@C@C@A@ABSA@AA@@@@@A@@BA@ACACAEANS@@B@@@@AB@B@@A@@@@@@@@@@B@@@@@@@@@@@@DFBFBFBB@B@@CFBBB@@@@@@B@@@@B@B@@@@@@@BDA@@B@B@D@B@@@BBF@FDNDB@B@B@BB@@@@D@B@@@@@B@B@FB@@@@@@B@@@B@B@D@H@B@H@DAF@H@" ],
														"encodeOffsets" : [ [
																124327, 31940 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310113",
													"properties" : {
														"name" : "宝山区",
														"cp" : [ 121.489934,
																31.398896 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@B@B@B@D@@@@@@E@@BOACA@@@@AAC@CAEA@DABS@@@@@@@AB@@@@@@A@A@@@ACA@FMC@@@@@@@@@A@@@@@@C@@@@@@@@@@@@@A@A@@@A@@@A@@A@@@@@@@@E@@A@@@A@@@@@A@@@@@A@A@@@@C@AB@@CA@EA@@@@@@E@@@@CA@@@@A@@A@@A@A@@@@@AB@@@D@B@B@@@@A@@@@@A@@@@@@@A@A@A@A@@@@@A@@A@@@@@@@BA@@@@@A@@@@@ABA@@@@@@@@@A@@@@@@@@@A@@@@@A@A@@@A@@@A@@@A@@@C@AB@@@@@@AA@@@@@@AA@@@@@@@@@@@@@@@@@@A@@@@A@@BA@A@@A@@@@@@B@@@@A@@@@@A@BAA@@AAGB@@@@@@@@@@@B@B@B@@@@A@@@AB@@A@@@A@@@A@@@@@@D@BA@@@A@@@C@@@@@A@@@@B@@@@@@@@@B@@BB@B@@@@C@@AA@A@@B@@A@AB@@A@DHDF@BB@@BA@@@GABBCB@B@@@A@@@@BB@@@@CB@@@BIBB@@@@B@@@B@BB@E@CBC@@AA@@@C@AAA@@AC@@AB@@AA@@AC@@B@@E@@@C@@A@@@@@@A@@@@@@BE@AAGBB@EB@BIBBB@@DHBD@@BFA@@@A@@@CA@@A@AAA@@@AAAA@@@@CD@@@@A@A@@@AA@@@@A@@@@@@@@A@@@ABAA@@AC@@BI@@BAA@A@A@CA@@@@@ABAA@@A@@BA@@BB@AB@@ABAA@@A@@BABB@CF@@@@@BB@@@@@B@BB@@@@B@@@@@B@@B@@@@@B@@@BB@@@@B@@@@BB@@@B@@@B@@B@@@@@@@BB@@@@@B@@@B@@B@@@@B@@B@@B@@@BB@@@@@@B@@B@@@B@B@BABBAB@BB@@B@@B@@@@B@BGA@B@@@D@@B@@@B@@DAAADAD@AAD@@AB@@BBCDDB@@@BA@BB@@D@@@B@ABB@AB@B@@AD@B@@CA@B@@A@AB@@@BA@@@@BCA@BA@@DE@A@@B@@@D@@@BD@B@@BB@@BB@@@@B@@@@@B@@@BB@B@ABDB@@B@@@@@@B@@@@AB@@@B@@A@@@@@@@@B@@@@A@@B@@AB@BABAB@@ABBBB@@@@B@@ABA@@@AB@@@@@BB@A@@@@@@@@@AB@@@@@@@BA@@@CD@@ABB@DBABB@ADCAA@@BA@@@AB@B@BAB@@@BA@@BA@@B@@@@@@CB@@@@BB@B@@BB@@@B@@B@@BA@@@B@@BA@@@@@@B@@@@A@@@@@@B@@@BA@@AA@@@AB@@AA@@AB@@A@A@@@@B@B@@@@B@@@@D@B@@@@B@@BADA@@@AB@@JDRFB@BA@@B@B@B@B@@BADD@@BAA@B@B@@A@@@@@@B@@@BB@B@@B@@@@B@ABB@B@@@@@@D@B@DB@@BA@AD@B@@@@@B@@B@@F@B@@@BCF@@@FA@C@ABAAAB@@AHCFBB@@B@@B@@ABAB@@AD@BA@@BA@@@@@AAA@A@@@@BAB@@BB@@B@ABA@AB@@@B@@@@@@B@@BB@@BA@A@@BAB@@B@@@@@@BA@@B@@F@@@BD@BEA@@ABAB@@B@@BA@ABA@@@@@DD@@B@@@@@B@@@@@BB@@@@@B@@A@@@@B@@@@A@@BB@AB@@@B@@@B@@A@@@A@@AA@AB@@AB@@@B@B@@ABA@@B@B@B@@@@A@@@@B@@@B@@B@@@AF@@A@@@@@CB@AABB@ABABAB@@A@A@@@ADB@@ABB@@A@ABBBBA@@@@ADB@@B@@B@@@@ABB@@@@B@BBAB@@@B@@B@B@@@BAB@ABDBBAB@@A@@@C@@B@@@B@@AA@@AB@BBB@BD@B@B@@FB@AB@@A@@B@@AA@A@@A@A@A@AB@@@B@@@B@@@B@@B@@ADB@B@@DB@@AD@@BB@@@B@LHPHNCPCHCNCPE|]BACEAABEDAFCLE@@@@FE`WXOdYPKLIFCVIDCDADCPMDCBD@@@B@B@@@@FA@A@@A@AA@@AC\\UQQIMGK@G@IDEFINIVIEGEB@@CE@AGDMFCB@@@@ACCCAAACCCACACEC@A@@FCBA@@BA@@@A@@@@@@@AAAA@@@@@@@@A@C@G@G@CA@@@@@@@@@A@A@@@@@@@A@@@A@@@A@@@A@@@A@@@@@@@A@A@@@AB@@@@@@@@@@@@@@@FA@@@@@@@@@@@@@C@A@A@A@@@A@@AAB@@E@AB@@@@A@@@A@@@@@@@A@@@@@C@A@@@@@" ],
														"encodeOffsets" : [ [
																124384, 32068 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310116",
													"properties" : {
														"name" : "金山区",
														"cp" : [ 121.330736,
																30.724697 ],
														"childNum" : 4
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@BB@B@@@@AB@@@A@@ACA@@A@@B@@@BB@@@@@" ],
																[ "@@BAD@BB@AB@BABAA@@AEAA@@BABA@A@ABA@AB@@B@@BB@D@" ],
																[ "@@B@B@@@@@BA@@A@@@@@@@@@@@AA@@@@@@@@A@@B@@@B@@@@@@@@" ],
																[ "@@B@@BB@@EB@@CB@@GAE@@ACAG@E@CAAAA@CAA@A@AAC@C@C@AHADAD@DA@EB@BAD@DF@GBABABDDBD@DBHBF@J@NB@ABCD@@BD@@DF@DBF@B@@CDB@BDAB@FA@ADB@BF@@CB@D@@DB@@DB@CB@BA@ABB@@BCAABA@C@@BA@@F@@@@@B@@@@DBBBDDBBBBHH@BFC@@BCBA@AF@BBBBB@@AF@B@NACQ@@@AC@@CC@CICCAA@A@AD@@ABAFHDBHABDB@H@D@@AB@@A@AB@B@BB@BLAB@@F@BAD@B@FA@@BA@ADBHBDD@BAB@AC@AB@@AD@FADA@AB@DAB@FA@F@F@H@BD@B@D@D@B@BABA@CFADAD@BBH@J@B@D@DBDBJ@FBF@NBDBDBFDDFDBFDBBBBBABCDANBB@@A@@@A@@D@BAF@DKDBBCA@BAAA@BA@FK@E@@@BD@@BDAJ@BCF@@AFB@AD@BADB@GA@@AF@@AB@@ADBB@@CDE@AB@@BDBB@@ABCB@BBBDF@@CB@DB@D@DD@@F@@@HA@BBA@BDC@BH@BA@@DBBB@DBF@@AA@@ED@BCBEHA@BB@BDDBBCBA@@@BF@@CB@ABB@@BD@BCBBD@@BD@DCB@B@@@D@DBBAB@B@BAD@BA@BB@BAFBBB@AHB@@B@ABDDABDBBADA@@B@@@@BBB@ABAB@BABA@AB@@A@A@ABE@CB@BCBA@IBCBA@C@AD@FABADABADAB@@AB@BAB@BAB@D@B@@AAA@A@@BA@A@@@@@C@A@@@ABA@AA@@@@A@@@A@@@A@A@@@A@@@@@@D@@@@@@@AA@@BA@AAA@@@A@@BA@@@C@EAA@ABC@@BA@C@A@A@@@AK@@EBEB@@A@@@@A@BA@@@ABBA@B@@@B@B@@AA@@@@AB@@@B@@B@@@A@@DA@A@A@AD@F@@CB@H@@B@B@D@DB@B@@BB@BAD@@@B@@A@EA@ABA@@EB@@CB@@B@A@@@ADCB@B@@@LA@@D@AADA@A@EH@@BBFLAFAJ@@AB@@BD@JU@ABBFCB@JMPYLQ\\i«ugWOCOCgBDaACVAJ@HA@@B@@A@@BB@@BABB@@BC@AB@B@B@B@BA@@@@@AB@B@BBDBBAFDBB@@B@D@BBB@@BD@BCDB@@BA@@@BBAD@@@BBB@BA@@BCBA@@AA@EFCBADCFCBCBKFGDCBAAABBBCBAA@@@BC@@AABBBCBEB@B@DAF@FADADABADBBABA@@B@B@DA@CAABADADABAD@BABG@G@G@CAEAA@@A@AAA@CBEBCC@CAADCDABABAB@B@@AA@@@AA@ABA@AA@@@A@AAACA@@A@AAA@A@CAEA@BABA@ABA@BB@@@BA@A@@A@@A@C@AAC@A@AAAA@H@@C@@@ABA@AAABCBC@C@ABC@C@@AAA@@C@@@AAA@@B@BCA@@AAA@G@@BC@@BA@A@A@E@A@@@@B@BA@AB@BAB@@CB@@@B@@@@@B@B@@B@@BB@@@B@B@D@B@B@@@B@@@@B@B@@@D@@@B@@@B@@@B@@@@@B@B@B@@BD@@@B@B@@@B@B@BBD@B@B@B@@@@@@BB@@@@@B@@@@@B@BBB@@@B@@@@B@@B@@BB@BBB@BBBB@@BBB@BB@@@@@@@@D@B@B@B@BAA@@@CCB@D@@ABBDABABABACABC@C@CBE@@AABAAA@DDBDAD@BBBFHAB@@@B@@AB@@A@AAIDAD@@@@@BA@@@A@@AB@A@@@ACE@ECABC@@BCBABB@@B@@A@A@@B@B@@A@@BB@A@@@EAECGCCAAAEAA@A@A@I@C@A@E@A@AACAGCDCC@BC@A@CBAKCIEIAFMEBA@ABADAAA@A@A@@AB@BA@@@A@@A@@@@A@@AA@@@@@@@@@@@@@@@@@A@ACA@@BAB@B@B@@BADB@@ABAB@DGIAEA@@@B@@@@AD@B@@@BAB@BA@AFGJ@@CBEBIDIBADA@CA@@GGEEAB@@BA@A@@A@@@CB@B@BA@AAA@ACB@CEABAAB@@AAAA@C@AB@B@@DD@@@BCBA@ABHFCBC@BB@BDD@BBB@@B@B@B@BDB@AB@BBDDABBBB@BB@B@B@@BBBBDD@@BBDB@@@BAD@DDGDDDAB@BB@BABDA@DDCDDFB@BDEBFFDCDBCB@BB@BBEBBDB@@@ABAB@@ABABA@G@C@CB@@@B@@BD@B@BA@A@CBWB@@A@@B@D@B@@ABA@@B@@DF@B@@@D@@BBB@@BB@B@D@@DD@BAB@BB@BB@@FA@A@C@A@AA@@@DBD@@@B@@@B@B@F@TBN@D@B@@CBADADABBB@LB@@@J@@GD@FBFBA@@@@BBBB@@@@AD@D@BAAAA@AA@BCA@CB@@@A@@AF@BGFAADDB@AJD@@@@@@HB" ] ],
														"encodeOffsets" : [
																[ [ 124321,
																		31442 ] ],
																[ [ 124337,
																		31429 ] ],
																[ [ 124341,
																		31419 ] ],
																[ [ 123933,
																		31687 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310117",
													"properties" : {
														"name" : "松江区",
														"cp" : [ 121.223543,
																31.03047 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@DB@FBD@@B@DBFBFBDHAD@BB@DABDBDDADCF@@@BFBBA@@@@H@BE@@BCHBBAAA@CB@@A@AB@BED@@AB@D@HAHBH@@B@@@BB@DBADD@@B@B@@B@N@@DJ@DBD@@BADAH@DHABPABBN@H@DH@@F@L@H@BA@@BAB@DIHGHGFGFB@BBDBDCB@HBBJFA@FCJC@@B@@@BA@A@@AABBBBBBB@BCDCBCBB@ABB@CBBDEBCEABCFCFFBBBABB@DB@DDDD@B@D@@ABCAA@A@A@AB@@CH@B@BCBABD@DH@DBBCB@BBPAADD@BAJ@BBB@@B@BA@@N@@C@A@A@@@AFADABAF@@C@AB@@CBA@EDAB@@@@CDAA@@A@A@@AA@A@A@@@ABADBBADD@ABBB@@ABAB@B@@@BABA@DB@BB@@BCFBBDCFDADBBBCB@ABB@@@@@@BA@@@FFBBBBB@@@ABFF@ADABBDCB@BABB@AFEBB@A@@BCB@@@B@DABCDDBED@@AB@B@@BJ@@CD@DEBBF@@A@@BA@A@ADBBCB@@BBB@BB@@LC@@FD@@AF@@AHB@ABB@@B@@FB@@HB@B@D@@B@@B@B@@@@@D@@@B@ABAB@BB@@@ADBB@@BBADDBB@B@BC@@BBHB@B@BB@A@@B@@@@@FA@A@@FA@A@@D@@@FDA@D@J@JLCHCFAB@B@@BB@@@B@@BBABDB@@C@@AA@ABBD@@@F@DEBBNBHBJBF@AC@A@C@@ACAEAA@AAA@C@A@@AGAE@A@@@AD@B@FB@@DBB@BBBADB@@@BB@B@@AB@ADBB@B@D@B@BBBD@JA@BBFA@A@A@C@AB@@L@@BBD@BDA@@F@DAD@D@B@@AAC@AB@AAB@@@F@@BB@@BAD@@ABB@@B@BDBB@B@@@B@@@@BRCF@FABBBBBBBBB@@BBBB@@BEFAAA@A@CFABCC@DBB@BB@ADBBAB@BBADAB@B@B@ABDB@@BB@AB@BAB@D@ABF@FBDBB@FBJBHDD@FBFBHDD@@@B@@AB@@A@@@A@@@@BAA@@@BA@@BA@@B@@@BA@C@@DA@A@@@@@A@A@@@AB@@@B@@@@@BA@@@A@@AAB@@@BA@A@@@@@@B@@@@A@@B@@ABC@@@@@@@@@A@@@@A@@@@@@@A@@@@A@@@@BA@@@@@@B@@@@@@@B@B@@AB@@A@@BA@@@ABA@@@AB@@@@A@@@@@@@A@@@@@A@@@@B@@@@A@@@AB@@@@A@@B@@@@@@@BABCBADC@ABA@@BA@ABABA@ABC@@ECAA@AA@@BEAA@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@A@@@@BC@@@@@@@@@ABC@@@A@@@@@@@@@@@@@@@@@@@@@@DBJBBCHB@@@ABABC@ABA@@@A@@BAA@BA@@@AB@@@@A@@B@@CB@@CBC@@BC@ABCCAABAB@AA@@@@@@@@@@@@@A@@@AA@@@CC@BCEAFEA@@CGA@BEABEIEKAGAADADCA@@AAAB@AAD@@A@@@@@BCAA@A@A@G@C@C@C@EAE@AAA@C@E@CBCAA@@@A@A@A@A@A@A@A@A@C@A@@@C@A@A@@AABCNB@A@@B@@@@BDBBAIG@EAACCACAAAACCAA@AC@AAA@@A@IAM@ADA@@D@D@F@RGFAF@D@FBHBB@BCBA@CBEAIBCBG@E@GAABA@C@@BABB@ABAA@@AAAABA@AA@ABA@ABE@C@CA@A@C@@@AAA@@@A@AA@@BAAA@@A@@@@BECBC@IB@DCBA@A@A@AAAAAECB@AA@A@@A@@@CBABCABACCBAA@@@GA@BAAEAABA@@AABC@ABA@A@ABCAC@@@A@A@CDC@@AC@AAADC@@AA@BAA@@DE@@A@@ABADCAACA@@AGBAFADC@@FB@@BE@CAA@AA@CB@@AAGD@ACB@AAB@@G@@@EC@@C@CCAA@@DE@ACAAA@AD@BA@CA@AA@@BCF@DA@CA@BA@@BE@@BB@@HCAABC@@BEA@BE@ADI@CB@AC@@A@@@FELB@@ABBABB@ADCACLE@ABC@@@@B@@@BA@MACBADABAAAAECCACEECCACAMAE@EAI@CACAC@A@I@G@AAC@CBEB@DABABA@C@C@A@C@@A@G@E@EEBA@CBA@@BCBEBC@@BA@@BBDA@ABC@ACAGBCB@@AB@@E@ABC@A@EA@KB@AAAA@A@@B@BA@@BC@G@A@ACGBCAEGAB@BC@@B@BBBDDDJD@@DD@@B@@DRMBA@E@@BA@AAAAE@@BABAD@@ED@AGGAAAACCAACA@@@@@A@@@@@EB@@AD@B@BADB@AA@BAB@@ADAA@@CA@@CC@A@@DE@@ACA@BEBA@CB@ACA@DA@E@CAE@@CC@@AC@AD@BMAI@E@GACAC@CAACABAB@HCEC@ABA@@FCBC@CBGB@B@D@DBD@B@BBB@DBBBB@D@FBHBD@@BF@HA@@DA@@FA@@AA@" ],
														"encodeOffsets" : [ [
																123933, 31687 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310118",
													"properties" : {
														"name" : "青浦区",
														"cp" : [ 121.113021,
																31.151209 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@E@A@AACAA@ABA@@FA@B@B@@BB@BB@@BBAB@@ABADBFEDCBE@CD@@AA@@AA@@AD@BA@@B@BB@@BB@ABADA@B@@BBB@AA@AB@@@@@@A@@B@@BB@@@BABAB@@@B@B@B@BB@BBBBAB@B@B@@A@@@ABAD@@DA@BBB@@@BABBBBBADBA@BB@AB@ADDBDD@@BCBA@@@@@@BB@B@@@DBA@BB@@A@@BBBAA@BEB@@AA@BCFB@CB@@DFB@@A@@BFBBBAB@@BB@@BB@AD@D@@DFAB@DBDAB@BAB@BA@AD@D@DB@CF@@BB@@AB@@DB@@CD@@@AA@@A@@A@@A@A@@@@AA@@@A@@A@@@@AA@@@A@@A@@AB@B@CA@@@@@@@@ACA@AAA@A@@A@@@@@@@@AA@A@@@A@@@@@@@@BAAA@@@@@@AAB@@@B@@ABB@@BAD@DBB@AAB@A@@AB@BAA@BABB@@B@B@@ABAA@DA@AAAB@@@@@B@DC@A@ABCCABC@@BA@A@A@@AA@@BABA@@BA@CB@@A@@CCFCB@BC@@@ABAAAAB@AB@BCB@@@B@BCDADCBCDA@AB@DAB@B@D@B@BBDBDBFDBBBB@@@B@B@@@@B@@A@BB@@@@@@B@@@AB@@AB@@@@@@@B@@@@@@A@@@@B@@@@@@@@A@@@@B@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@A@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@A@@@@B@@A@@@@B@@@@@@@@A@@@@@@@@BA@@B@@A@@@@BA@@@@@@@@@@@@@@B@@@AA@@B@@@@A@@@@B@@@@@@@@@A@@AB@@@@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@B@@@@@@A@@@@@@@AB@@@@@@A@@@@@@@@@A@@B@@@@@@@@A@@B@@@@@@A@@@@@@@@@AB@@@@@@@@A@@B@@@@@@@@@@@BA@@@A@@@@@@@@BA@@@A@@@A@@@@B@@A@@@A@@@@@@@@@@BA@@@@@ABA@@@@@@@AB@@@@A@@@@@A@@@@B@@A@@@@B@@@@@@AC@GCEAEAC@GCIAEAA@CAEAE@BAC@A@ABA@@BAA@@CABAA@A@A@CBAB@ABAAABCA@@AAA@CDDBADEB@B@BBFE@AA@AA@AA@AAAAAAAAEBE@QD@A@@A@@@A@A@CA@A@AA@BA@@BC@AA@@AE@@@A@BBA@@BBD@BA@C@C@CBE@@@CB@AAC@AK@@@BAD@B@B@B@AE@AIBC@AA@A@A@C@AAABCA@@BA@A@@A@@CAABAAA@CA@@EAA@C@@B@@@BBFBH@@@B@DBB@BBBBFBD@@@D@BBDE@IAGAMAAACFE@@@C@AA@BBB@@@DA@ACAB@AA@@@A@@AA@A@EBGDKD@I@I@CCB@E@@@CB@B@@EB@B@@E@@@@@AB@A@@A@AGAAA@@ADA@A@CABCAA@@AABC@@A@@ABABAA@@@C@@@@@A@A@@@@AC@A@A@@GA@@EA@@@AA@BGA@BE@@BC@@ED@@KA@@AAA@AA@ADCA@B@BAB@@@BE@AACFC@@DI@@AA@A@@BC@AFCCADCBA@@@A@AD@@@BAAEF@BAAABA@CDAACB@BEEBA@@A@AAAAEE@@B@@A@@@@A@BAA@ADAABCECCDAADE@AA@@ACAB@BA@A@@@ABABA@@AABAC@BCAABCBA@@B@B@B@@BB@B@@@BBDC@@@@BAFCB@DA@@BAD@@@BEBABCBE@@B@B@D@@@@MB@@A@AA@AAI@ABC@BCOBAAA@ADCAG@@CACABADA@G@@DA@@B@B@BBBAD@BC@A@C@CC@CCAA@BAAAEADEDEBADFFAACDAA@BAA@DADADC@AAAAAAABA@BB@B@@A@@@AD@DI@EEBAIGAA@CDCAAAA@HEHEHGJG@CBA@AB@@A@G@K@EG@@C@GAMBAAOGB@CBGBC@AC@CAI@@CM@A@@@@A@AC@BCCAA@@A@@@AG@GAGBC@A@@BC@AFA@@B@BA@@DBBABGAAD@@AFG@@@@@ABEA@A@@DEBCCCCABA@CAAC@GBACAEAE@C@AC@EAA@@CGA@@@@@@IC@BCABCEBAHE@@BB@@@A@@DDB@ABBB@BBABC@C@@B@@A@AA@A@@B@EAEAC@@HI@@@A@A@AHC@AHF@CHBD@@@B@BC@@DB@ADBB@BF@B@@@@@@@@@@@B@@BD@@BB@@B@B@BDB@DA@A@A@AD@B@BAJA@ADABBBAFGAADDB@F@BA@@DB@@D@@ADBBCDAFDBA@A@A@A@C@A@AB@BI@I@E@E@C@C@ABFFABE@ABADAJEBA@A@A@@@CAABA@AADAAEFACK[AAABAHI@AC@GBCBABCACBACOFC@KEAD@F@DO@A@@D@B@D@HBD@L@H@BCBEL@FABAB@H@JBHDHBHBH@DABBBB@BAD@BB@B@BCDAB@B@B@@ABCBAAA@AB@DABABADABBD@@ABA@@A@CA@E@IBG@@B@@BDE@@DE@@@AAA@C@@CG@ABADA@ABCAABCD@B@BBF@BB@B@DD@DB@BBB@BBFFDD@D@DBDBDBBBBDDBBBBDBB@bDB@NCB@D@HBHBJDRFnElITCDBLB`@TBB@B@HHADBBF@@BBB@@@BD@@C@@@ADBD@BA@@DABEB@BB@AD@BDBDDJA@A@AB@FDBDB@DHBBE@AD@D@D@ABDBF@F@@AB@@AD@@AAAB@FA@B@BADBBDB@BBB@CB@@D@BB@@@FDADB@@B@BEAADJB@DCF@BEAAB@BB@@BFBAFEFADJDABIAADDBB@@B@B@@AB@B@@@BBBB@ABCB@BE@@D@@B@B@@D@BAB@@@DAB@B@FAB@B@B@@@BAB@B@B@@@@@B@@@B@@AB@B@B@B@@AB@B@@@B@@@@@B@@@@@B@@@B@@@BD@@D@DB@B@@B@BC@@BA@@BA@A@@BADB@DB@B@B@DBA@BAB@B@DA@A@@AA@@@@@@@@@@@A@@@ABAAABB@BBBAB@BDABBH@DA@@@BB@BB@AB@HBJA@@@BBH@D@D@DBHBF@B@DD@BDFEBBHDNFF@@ABDBDABABAB@@AB@BCBEBEBA@A@ABCDADAD@BBC@@@FDBBDDBDDBBDBBD@B@BAD@@B@B@@B@@AHAACFCHA@DFAACD@BBDAAABA@@B@B@B@@BD@@CDAF@FBFB" ],
														"encodeOffsets" : [ [
																124062, 32028 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310120",
													"properties" : {
														"name" : "奉贤区",
														"cp" : [ 121.458472,
																30.912345 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@LBBA@@BBB@F@@BD@@@T@BDPAB@PA@@BBD@BC@ABCBABABABAB@P@@B@@BAB@@@@@B@B@J@H@JBP@RA@A@@@BHAB@B@@AB@B@@@BAB@@B@@B@@BLABAF@D@D@D@B@D@FADAD@FCFADAJEBAJEFCBAJEBAHCBCBA@ABABADCAA@AFCBBB@BAB@HIBBB@B@D@B@DCB@FC@@DA@AA@BCBA@AB@B@@A@@AA@@@@@AC@@@@CB@@BB@B@@A@AA@B@@@B@@@B@B@@@@BB@BA@@@@B@@C@@BA@@BA@BB@@A@A@AD@B@B@@@B@@A@@@@B@@AA@@@@A@A@ABCA@@@B@BAA@@@A@@AD@@CBE@C@@AG@AAA@C@@@@@A@A@C@EA@BA@@@GAA@@B@AGCI@ABGGA@IA@GYBYr]@©BBEU¡_[cGC[jKROZINA@EDAA@BIVC@@AA@@BI@EBKBAE@AG@@F@BCBBBC@@@KB@@A@A@CD@B@@@B@AA@@DA@@FB@BAB@@F@BA@@@C@ABA@@AA@A@@C@C@A@AG@A@@DE@C@@B@B@BCB@@@B@@@AA@@@A@@B@@B@@BA@A@@@A@B@AA@B@@ABB@@@@@@BA@AF@FL@@B@@@B@B@DAB@@AD@BBB@F@D@@AB@@@B@@BB@BAB@@BB@@@@@@C@@@@@@@@B@@@B@B@@@B@@@B@@B@@BAB@B@@@B@D@@@@@BAB@@@BBB@BA@C@A@ABA@ABA@@BA@CBABCBABEBC@@B@DABAD@JABADA@@DAF@B@B@BA@@BABABA@AB@BA@FDBBBB@B@B@BABCDA@@JADFD@A@@B@@@BBAB@@BBB@@@B@BB@@D@B@B@@D@DAF@BAB@BBBB@BABB@BB@AB@BAAAB@@@DABBB@H@FAHADBJAF@DABADB@`JLDHBLDF@LBLBH@HBHDNDJFDDFDFFHBDBLBV@D@HBLHJBF@NBFBHCACBAA@DMDIBADB@@@BBBDBDBBBDBB@B@B@B@BBB@B@BBB@@BB@B@@A@@D@@@BA@@BA@A@@B@@AC@@@BA@AAABABB@@B@B@B@@AB@@ADA@@BAB@@BBAB@@AD@@B@@B@@@@AB@D@BCB@@BB@BBD@AAB@BA@@@BB@@A@@B@@@B@BC@@@ABADABBB@@D@B@B@@AB@BB@BA@@B@B@@B@@@BD@B@D@DBBA@B@@ND" ],
														"encodeOffsets" : [ [
																124489, 31743 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "310230",
													"properties" : {
														"name" : "崇明县",
														"cp" : [ 121.397516,
																31.626946 ],
														"childNum" : 5
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@D@NELCHELCRCZAVEV@bWXCDAVEBERKD@\\U\\K\\GBCNCBJD@REHCXIB@JCTDÔoĒmÎ_ôgZñLcDgG_SY]O]_McIUAOASB]BYDUD_H±j\\fYHJYDODQH½pÛ`gBUAQImwf±ğĖEBoH~zh^rXbLVJZLbJTDVDP@LANE sNIRILMHIDC@@BCB@@ADADCFG@AD@FCBADEBCBCBCC@CACABAPWDEBCHGJI" ],
																[ "@@GBGBGBEDELIPIRGHEDGFOJIHlrjULeR[ZQRKJKHOJYLGFEFAF@D@DDDDDHBHA|GXEHCBAFKFQFKJIFCDC^GLA`K¬_\\CRCXI`MJCRCHCJCNIPIPGJGNMFGHIFIDE@IBGFS@K@GAKASCECEECCAGAE@" ],
																[ "@@KBIBEBgVIFEFQPCF@D@BDBDBN@RCNANEJEXQLKHGBEACACEAG@" ],
																[ "@@B@@@@B@@@@B@@@@@B@@@@BB@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@AB@@@A@@A@@@B@@@A@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@A@@@@AB@@@@A@@@@@@@@@@B@@" ],
																[ "@@CNELEJCF@DBBFBN@NAP@F@HCHCFAJ@L@FAPELCXGJCHA]FCBEKAOECECWBqBI@CACCG@QDGBCBCFGDIFIFSRKPEJAHAV@\\" ] ],
														"encodeOffsets" : [
																[ [ 124346,
																		32532 ] ],
																[ [ 124702,
																		32062 ] ],
																[ [ 124547,
																		32200 ] ],
																[ [ 125176,
																		32174 ] ],
																[ [ 124726,
																		32110 ] ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));