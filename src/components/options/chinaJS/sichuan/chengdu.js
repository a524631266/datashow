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
									'成都市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "510105",
													"properties" : {
														"name" : "青羊区",
														"cp" : [ 104.055731,
																30.667648 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@EI@@AAB@A@@@@@@@A@CBCBABEG@A@@A@@A@@@@@@@@ACA@@A@@@@@@G@@@@@A@@@@@A@@@@A@A@@@@C@@C@@@@@A@A@@@@A@A@@@ACACCCA@A@@@ABABAB@BA@@BA@A@@@A@AAC@A@@@@BK@A@@@A@CAA@A@C@@@C@A@G@@@@@C@@@ABC@@@@@AB@@AD@B@@@B@@@@AB@@EAA@@@@@AC@@@@AAGAA@@@A@ABAB@@@B@@@BB@@@@B@@@BAB@@@@A@@@A@A@@@A@@B@@A@@@A@A@@@A@@@@CAA@@@AB@@@@A@@@@CCA@@@AB@@@@@B@@@BB@@B@@@B@@@@A@@@A@@@@@AB@B@@@@@@A@@@@@@A@@@A@@@AA@@@@@A@@B@B@@@B@@A@A@@@@@@@AB@@@@@@@@@@@@A@@@@@EE@A@@A@@@@@AB@BA@@BA@@@A@A@AA@@A@A@@ACC@@AA@@A@AB@@A@@B@@@B@@BB@BBB@@B@@B@@@@@@A@C@ABC@A@C@A@@B@@A@@@@@AA@@@@B@@@@@@@@A@@@@@@AA@@A@@@A@A@@@@AA@@AAA@@@@A@@@C@@@A@@@@@@@@@@BA@@@@B@@A@@@A@@@@AA@@@@A@@@@@@@AA@@@A@A@@@@@@B@@@@A@@BB@AB@@@@A@A@@@A@@@A@@@A@A@@@@@A@@@AA@@AA@@A@@@A@@@@@A@@@A@@@@@A@@B@@BB@@@B@@@BAB@BAB@@A@@@@BABABA@A@C@EBOD@@@@A@ABA@ABC@@@@B@@@B@@A@@@C@A@@@@@ABABABAB@@@BBB@BFAD@B@BB@@B@@@BB@BB@@B@B@@@@B@@@B@B@BBBBBBBB@BFDBBBD@@@@@@@@B@@B@B@BAB@B@@B@@BB@HD@@B@@B@B@@@DB@@B@@B@DAB@B@BBDD@BA@AD@DABAB@B@BBB@@B@DAFCBABBB@@@ABAB@B@BBBDBB@DB@AB@@@@@@A@@@@@@@@B@B@@@@A@@@@@AB@@@B@DBBB@@B@B@@AB@@@@@@A@@@@@A@@A@@C@@@A@@B@@@@@B@@@B@@@B@@B@@@@@AD@@@@@B@@@@@@@BA@A@@@@BAAA@A@@@@@@B@@@B@@@B@@@B@@@B@@@B@D@@@B@@@B@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@B@@@@BB@@@@@B@@A@@@@AA@@@@@@B@@A@@@A@@@@AA@@@A@@@@@A@@B@B@@@@A@@B@@@@@@A@@@@@@DA@@B@BCBA@@H@FBDBD@@B@@A@@@@@A@@@@@@B@@AB@@@@B@@B@@@B@BA@@@@@C@@@@@@@@@@@FF@@@@@@@@J@B@D@DABEBCB@DBFB@@@@@@B@BA@@AA@@@@@@@A@A@ADA@A@@@@@@BA@AAC@@A@A@@@@@@@E@AAA@@A@AD@D@B@@@@@B@@@B@@@@@@@@@@A@@@@@@BC@@B@@@B@@@BA@@@@B@@@@@@@@B@@BAB@@@B@@@@@@@@@@B@@B@@@@@B@@B@@B@@A@@@@B@@@@@@@B@@@@@B@B@@A@@BA@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@@BA@@B@@A@@B@@@B@@@@@@@@@@@@AA@@@@@@@@A@@@@@AA@@@@A@A@@@@@@@@B@@@@@B@@@@@@A@@@@A@@@@@@@@A@@@@@A@@@@@@@@B@@@@@@@@@@@BA@@@AB@@@@@@AB@@@@B@@B@@@@@@AB@@A@@B@@@@@B@@A@@@@@@B@@@@@@@@@@@@@@@@@@@BA@@@@@@D@BABABABDBB@@@@@@@@DB@B@@@@B@@B@@@B@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@BB@@@B@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@B@@@@@@B@@B@@@DB@BB@@@@@@@@@B@B@@@@@B@@@@@@@@@B@@B@B@@@B@@@@@@@@BB@@@@@@@@B@@@BAB@@@D@@AB@@@BABA@@B@D@B@@@BA@@@AB@@@B@B@FCBAB@@@D@@AB@@@BA@@BAB@" ],
														"encodeOffsets" : [ [
																106588, 31407 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510112",
													"properties" : {
														"name" : "龙泉驿区",
														"cp" : [ 104.269181,
																30.56065 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@DD@BDBD@HBH@D@BABABCB@B@D@@BBD@B@BABAD@B@BDH@DBB@BAFAF@BA@CBC@A@@B@BBB@BB@D@@@@@@BC@@BABCB@B@J@@ABB@@DAB@BA@A@@@CCA@@@ABAB@D@BBB@@B@@@@@B@B@B@BAB@BA@CBAB@D@@@@BABAB@DBBDHHDDBBA@@@@@@@@@@BCBCB@D@D@DDD@HBFBFBDDBF@DBBFBFBB@@@@@B@@@@AB@@@@@B@@@@@@@B@@@BB@@B@@@@@@@B@@A@@B@@@@@@@@@BA@@B@@@@A@@DBDBB@D@BAH@@AB@DBB@B@B@BBBBB@BBBB@BB@BBB@BAB@@AAC@A@A@A@AB@B@F@B@BABA@@BC@@@@B@D@@@BBB@BB@@@@@@@@A@@@A@@@@B@@@B@BB@D@@@@@B@BA@B@@@@@B@@@@@F@@@B@@A@@@@@@B@@@@B@@@B@@@@@B@@A@@B@@@@B@@@B@@@@@@A@@B@@AB@B@@@@@@BB@@B@@@BB@@@@@B@@@@@@@B@B@@@@A@@B@@@@@B@@@@@B@@@@@@@BAB@B@@@B@BBBBDBBBF@BB@DHBBDDBBBBBBB@BBB@B@B@BAFAB@LC@@@@VEB@B@BBFDB@B@B@D@D@\\GB@@B@@@B@H@BBBB@B@D@DAJKFC@@@@@@DADCdM@@@@^KB@BBDB`EDABA@ABCAO@CBABABAXIDABAB@B@BB@BBBBPBDB@BBD@D@FAFAFCHCDCBEBE@G@@@A@C@A@A@@CCAAAA@AGQ@A@@@C@A@E@AAGA@@AB@@A@A@@B@BA@@B@FB@@BBB@BB@BBBBNBBBDDDFDBBB@BA@@BABI@CBC@C@C@C@C@A@E@AACAAAACA@AAA@AAA@A@A@C@A@@@@ECCCAAA@CCA@A@A@ABA@CB@BA@A@A@@AAA@A@@@E@@@AACAA@AAACAGCC@A@EAEAA@@@@@CCCC@AAC@C@AACACAGBI@EBCHI@A@AGGAC@CAE@Q@I@AAACA@A@A@A@ADEFEFABAB@DBB@BADABC@A@CACACCAGCGCKCAAAAAA@ABCBG@A@C@E@@@@@@AACACCA@AAaHC@E@C@@@A@@AEI@@CAC@KBA@AACAMAA@A@@B@B@DBBFDBB@B@DADCJAFELCFADGFEBABA@AAAAAC@C@A@AB@D@D@B@D@@ABA@@@AEIHK@@CCGAC@I@IAA@CBIHEFE@ABAFABCBA@C@@AA@@A@CACAACCCAIEIGEAA@SCGACCEEAC@ABCDED@BA@C@@AACAE@ICCAMBEBA@@@@@EBC@GBC@CB@BA@@BADB@@@@B@@@@@@@@@@@B@@@@@@@@@@A@A@@@@@@@@@B@AB@@@@@@@AA@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@B@@A@@AA@@@@@AB@@@@@@A@@B@@@@@@@@@@@@A@B@@@AA@@@@@B@@@@@B@@@@@@@@@@A@A@@@@@@@@@B@@@@AA@@@@@AB@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@@A@@@@@A@@AB@@@@@@A@@B@@@@@@@A@@@@A@@@@@@B@@@@@@A@@@@B@@B@@@@A@@B@@@@B@@@@@@@@@@@@@@@@@B@@@@B@@@@A@@@@@B@B@@@@@@@@@@@@A@@@@@@B@@A@@@@@AA@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@A@@@@@@@@B@@B@@B@@BB@@@@A@@@@@@@@@AA@@@@A@@B@@AB@@@@@@@@@@BB@B@@@@@@@B@@@B@@AB@@@B@@@B@@@@@B@@A@@@@@@@BB@@@@@@@@A@@D@@@@A@@BB@@@@@@@@@@@@@AB@@@B@@@@AA@@@@@B@@@@A@@@@@@@@@@@A@@D@@@BCFELEF@BAB@D@@@@@@AF@DADAB@BABAB@@ABA@@@@@A@@AA@@@A@@BA@@BAD@BAB@BABAB@@A@CBA@E@CBA@MJABAB@B@B@B@BBF@BBB@BA@@BABBBB@@BB@BA@@BB@@@AB@B@@@H@@BB@ABABC@AB@@@@B@D@B@@@@@BB@@B@BA@@B@@BAD@@@BBBAB@BCBAB@A@@BE@A@AAA@@A@@@@B@D@B@BA@AB@@A@A@ABB@BBB@BB@@@@@@BDDFBBBB@D@DDB@@@@@@@@B@@@@@BB@@@@@B@@@@@@@@A@@B@@@@@@@@@@@B@@@@@@AB@@@@@@@@A@@@@@@@@A@@@@@A@@@@@@@@@A@@@@@@@@@B@BA@@@@@@@@@A@@A@@@@@@BA@@@@@@@A@@A@AA@@@@@@@@A@ED@@A@C@@BC@@B@B@@@@@BCB@BC@FH@@B@@B@@@@@B@@B@BBED@AAB@@A@A@@@A@@@A@@@@@A@@B@@AB@B@@@BA@@@EB@@@@@@@B@@@@@B@@@B@@A@@BA@@B@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@A@@@" ],
														"encodeOffsets" : [ [
																106640, 31353 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510107",
													"properties" : {
														"name" : "武侯区",
														"cp" : [ 104.05167,
																30.630862 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@B@@@D@@@B@@@@@BB@BB@@B@@B@B@@@B@@@BB@@@@@@@B@@@@@@A@@@@@BB@@@@B@@@@AB@D@B@D@BAD@B@@@@@@@@AA@@@AA@AAA@@@A@@@AB@@@BAB@@@BB@@DD@BB@B@@@BBB@B@@@B@@AB@@ABA@@@@B@@@@BFF@@@@B@@@@@@@@@@@@@BA@@@@@@B@B@@@@A@@@A@AB@@@@@B@@B@@@B@@@B@@@@B@@@@@@@@ABA@@@@B@@@B@@@@@@A@@@AA@@A@@@A@@@@BA@@B@DD@@@@@B@@A@@B@@BB@D@@B@@@B@B@@@B@@@@AB@@@B@B@@@B@@@@@BA@A@@@A@@A@@A@@@A@@BABAB@@@B@HBBB@@@@BD@@@@B@FB@@BA@@@@@A@@@ABC@@BA@@@@D@BA@@D@@@@@H@B@D@@@D@B@B@DBB@@@B@L@@A@@B@D@BBB@@@B@B@@AB@@ABABABA@@B@B@D@D@B@B@B@@@FAF@B@D@B@B@BAB@DABADADAB@B@BADC@CBABEBA@A@A@AAA@@AAA@E@A@A@CC@A@A@ABA@A@A@AAA@@@A@ADA@A@A@AB@BC@A@CAC@AAAEAA@AA@A@EBA@ABA@A@@@AAA@@C@A@@AAC@A@A@CBA@C@A@CA@AAAAEE@@@A@ABAB@D@D@B@B@BA@@@A@A@AAAACAA@@@ABAFCBA@A@C@AAAAAA@AAE@A@AAA@@A@A@@@AB@B@@ABCBABA@ADA@@@A@@AA@AA@C@@@C@@@A@A@AA@@AACCA@IEEDSRCBEBA@A@@@AA@ABC@OAC@AAAC@A@C@AB@D@DBJ@F@BCBE@CBCDCFAH@HDJDFFBDH@B@B@D@@@BAB@DCB@BA@@@A@@@A@AAA@A@A@ABA@@BADABABABABA@ABIBC@@@A@A@@@@A@@@@BAB@@A@@@@AA@@@A@@A@@AA@@@@@@AA@@@@@@A@@@@@A@@AAAB@F@@C@A@CBA@CBGDA@ABA@A@AACAA@@@@@@@AAA@@A@@A@@@@@CC@A@@@E@A@AAA@@@A@BA@@@@@A@@AA@C@A@A@CBCBAB@@@@@B@@BBB@@@@B@@@@A@A@@@AB@@@@@B@@BB@@@@@@ABA@@B@@@@@@@@A@A@@@@@@@@@@B@@ABA@@@@@AB@AAB@@@@@BA@@B@@BDB@@@@@@BBA@AB@@B@@@AD@AA@@@C@@@@@ABBA@B@BA@@B@@A@@@@B@@B@@@@AD@@@B@@@@BB@B@@@B@@@B@@AB@@@B@@@B@BBB@B@@@@AB@@@B@@@BB@@BB@AB@B@B@B@@@B@@@B@@@@@@A@@@AA@A@@A@@@@BAB@B@@A@@@A@A@@@A@A@@@A@@B@DAD@B@BBB@B@@@@AB@B@@@BB@@@BBB@@B@@@@BB@@AB@@@@@@@B@@@@B@BA@@B@@@@@@BB@@@ABA@@BABA@AB@@@@A@@B@@@B@@@@CBAB@@@BA@B@@DB@@@@BA@@B@@A@A@@B@@@@@@@B@@BB@B@@@B@B@B@B@@A@@@@@@@A@@@A@@@@@A@@@@@@@@@AB@B@B@@@@@B@@B@@@@BB@B@@B@@BD@@@B@@@@@@AB@@@BA@@@@B@@BB@@@@@@@BA@" ],
														"encodeOffsets" : [ [
																106445, 31395 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510106",
													"properties" : {
														"name" : "金牛区",
														"cp" : [ 104.043487,
																30.692058 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@B@B@@@@@@@@@DBD@@@B@@@@@@B@B@@BB@B@@B@B@BAB@@C@A@@B@@@@@@@@@BA@B@A@@@@B@@@@@BA@@BA@@@@FABCB@@@HBB@@@@BABEH@@ABCD@BA@@BBB@B@@@@@@BBBBB@DBB@B@BAB@BADCBAB@DAB@BBB@B@BBDHBBBB@@@@@@DDBB@B@@@BA@CDABAB@D@B@F@@@@@@@B@DBDBBBBBBHBHBD@BAD@@A@@@@BA@@BA@@B@@@@@BA@A@@@@AA@@@@AC@@@@C@@@@@@AAA@@@@B@HC@@B@@@@BDB@@@@B@@@@@@A@@@A@@@A@A@A@@@A@A@@@A@@B@@@B@@@BB@@B@@@BA@@BAB@@A@@@@@@A@@@A@@@@@@A@@BA@A@@BA@A@@B@BADAB@@@@@B@@@@@BB@B@B@@BB@@B@@B@@@B@@@B@@ABCB@@ABAF@@@@HBB@@@DD@@@@BBDB@@@@@@BBDB@@@@@@@@@@@@@@@@B@@@@@@@B@DB@@DABA@@@@HABAHEDABADABAB@@A@@DAD@D@B@DD@@@@@@@@@BBDBJ@BBDDBB@D@FBB@B@FDFBBDBB@@@B@@@@@@@@A@@@@@A@@@@B@BB@@@@B@@B@B@@@@B@@@@@@AB@@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@@@@@A@@@A@A@@@A@@@@@A@@@@@@B@@@@@B@@@@@@@@@BA@A@C@A@@AA@@AAA@@A@@@@@A@@A@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@@@@AB@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@B@D@@@@@@A@@@@@@@@@AA@@@@@A@@@@@@@@@@@@@@@A@@@@A@@@@@@@A@@@@@@@@@@BA@@@@@@@A@@@@B@@@@@@@B@@@@A@@@@@@@@@B@@@@@@B@@@@@@B@@@@@@@@A@@@@@@B@@@@@BB@@@@@@@@@@@BAB@@A@@B@@@@@@@@@@@@@AA@@@@@@@@@ABFJBB@D@B@B@B@BAB@BCBCBA@A@@@@@AA@C@@@AA@@@A@ABCD@@C@AB@BA@@B@@@BBBBBB@@BBB@BBB@B@B@B@D@B@@BB@@B@@@BABABABAB@B@BBB@BB@@BB@BAB@B@@@BB@@@B@B@B@B@@@@@@@@@B@@BFD@@B@@AB@@@B@@@@@BB@DB@@@@@B@B@@AB@@AB@@A@@@A@@@@@AA@@@@@AA@@AA@@@A@A@@B@B@@@B@@B@@BB@BBB@@@@B@@@BA@@@@@A@AB@@A@@A@@A@@AAA@@@AA@@@ABA@@B@@@B@@@BBB@BBB@@@B@B@B@@@BA@@BA@A@AB@@A@@B@@@B@BCD@BADAD@H@FADABADABC@A@A@A@AAAA@KIA@@A@AB@@ABADAB@DAD@JBB@BAB@BAD@BABA@ABA@CBS@E@A@@AA@BCAAB@@@DAB@BCAA@C@ABCBA@@AACBC@@A@@A@@@AB@DA@@@@@AA@@@@@@AA@C@@@A@A@@@EB@@@A@@B@@@BA@@@@BA@AA@@@@@A@@@@@A@@@A@@@@@@AB@AA@@@@@@@A@@B@@@@@@@@@CCA@@A@@AACBAA@@C@AA@@@@@@A@C@@@@@@@ABCBA@@@ACBC@A@CAACAE@I@@@AA@@@@A@@@@@@@A@@@@@@AA@@A@C@A@ABA@@A@@A@@@@A@ABAAA@C@@@@@@@@D@@@@A@A@A@C@A@@@AA@@@AA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@A@A@@B@@@B@@DB@@@B@@@@A@@@@@@@@@AB@@@@@@@@@@@@A@@A@@@@@A@@@@@E@EBAA@@CB@@C@A@@@C@@@@@@@G@AJ@B@`@AA@@AA@@@@@@@@DCB@@@@@AA@A@@@@A@@@@@@@AA@@@@@@BA@@@@@A@@@@@A@@@@@@@A@@@@B@B@KOJC@@@@B@@@@@@A@@@@@@@@@@AAACAAAA@@@A@@@@@@A@B@A@@@A@AB@@AB@@A@@BC@@@A@ABEDA@A@@@A@@B@@AB@@A@C@A@@@ABAB@@A@@BC@@@A@AB@@A@@@@@@@@@AA@@@@@@@@@A@@@A@AA@@@@@@@@@A@@@@@A@A@@@@@@@@@A@@ACA@@A@@@@A@@@@A@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@A@@AA@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@A@@@AA@@@@@@ACA@@@@@@@@AAACABABABC@@@@@@@AB@@@@@@@@@@@@@@@@@@A@@@@@@@@BA@@@@@A@@@@BA@@B@@@@A@@@@A@@A@@B@@@@A@@B@@AB@@@@@@@@@@A@@@@@@@@@@B@@@@@B@@@@@@B@@@@@@B@@@@A@@@@@A@@@@@@@@@@B@B@@B@@B@@@@@B@@@@@@B@@B@@@@@@@@@@A@@@A@@@@BA@@@AB@@@@@@@@A@@@@@A@@@@@@@@@A@@@@@@@AB@@@BA@A@@@@@A@@@@@@@A@@@@@@BA@@@@AA@@@@@A@@@@A@@@@@@@@A@@@A@AB@@@A@@@@@@A@@@@@AB@@A@@@A@@@AD@@@@@@@B@@@@@@@@A@@@A@@@@@A@C@C@@B@BB@BBF@@@@@@@B@B@@@BD@BAB@@@@@@@BCB@B@B@B@@@@@@BB@@ABA@@@@@@@EACAA@ADAFCBC@A@I@@@@@@@@@EE@@@@@@@@@@D@@@@@B@@A@A@@@AA@@@@@BA@@@A@@@@B@@@@@B@@@@AC@CAEAG@@@ABADA@@@CB@@@@@@@B@@@@A@@@@B@@A@A@@@@B@@@@@B@@BB@@@@@B@@@BA@@@@@@@BB@@@@@BA@@@@@A@@A@@A@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@BA@@@A@@@C@A@@@A@@@A@@@A@@@A@@@A@@@@@@@@BBBAB@@@@@BAB@@@@@@A@@@@@C@@B@@@@@AA@@@A@@@A@@@@@A@@@@B@@@DB@@@@B@@@@@B@@" ],
														"encodeOffsets" : [ [
																106450, 31459 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510108",
													"properties" : {
														"name" : "成华区",
														"cp" : [ 104.103077,
																30.660275 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@A@ABA@AAA@@AAAAAA@AAAAA@A@A@CAA@@BG@ABC@A@CACA@@@B@@A@@@AB@@@@@@@@A@@@@BA@@@@@@@A@@@AA@@A@@@@@@@A@@@@@A@@B@@A@@@@@A@EAEAAA@CAECCEAEAGAC@CCC@C@A@ADAD@@@@@@@@@@ABCAGCCGAA@CBABA@A@@C@A@AB@DABA@ABA@A@A@@@@@A@@@AA@A@CBABA@@B@DD@@B@B@@ABA@CA@BA@@@I@ADABA@AD@@A@@@@C@A@@AAA@A@AB@D@DAB@@ABEBE@AAA@CCG@A@ABCBA@A@AAC@AC@A@A@ADABABC@G@GAC@CA@ACC@@AA@@@@@@@B@@@@@@AB@@A@@@A@A@@@A@@@AA@@@@@@A@@@@@A@@@@@A@A@@BA@ABADCB@@@BDBBB@B@@@@@BA@A@A@A@@@C@@B@@@@@BBBB@@@B@@@DAB@BB@@@@@@@@@B@B@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@B@@@@A@AB@@@BA@@@@@A@A@@@A@CBSJ@@@@@@@@@@IFA@GDCB@@A@A@@B@@A@ABIDCB@@BBBDDD@@@B@B@@BD@@@@BB@@B@B@@@@B@@@@@BA@ABABAB@@ABA@AB@@B@A@B@@@@@@@@B@@BBBBBDBB@@@@@@@@@@@B@@@@A@@@@@IDLPA@A@@@@@@B@@@@@@@B@@@@@B@@@@AB@@@@@@BB@@@@@@B@@@@@@BBB@@@@A@CD@@@@@@@@BB@@BB_@A@I@@B@H@@@@@@@D@@@B@DA@@DB@AB@F@F@@@@@B@@@@@BB@@@@@@@@@@@@@BA@@@@@@@@B@@@@@@A@@CA@@@A@@@AB@B@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@B@@BB@@B@D@B@B@B@@@@@@C@@@@@@D@B@BBBAB@@@@@@BB@@@AB@B@B@D@BB@@B@@@@B@@@@@@@B@@@@@BB@@J@F@DBBB@D@BADBD@@B@DABA@@@@@@D@B@@@@@@@BBD@@@BBDABB@@@BB@DD@@@@@@@@A@@@@B@@@@@@BBA@@B@@@@B@@@B@@@@@B@@@@@B@@BAB@@@@AB@@A@@@@B@@FA@@B@B@@@D@B@@B@@@@B@@B@@@@CBA@@B@@@BB@@@ADBD@BB@DABAD@B@DB@ABA@C@@BADB@ADA@@@A@AA@EAA@@@A@@AC@@A@@@@DABAB@@@B@B@DBBB@@BBB@F@N@H@D@FAB@BA@A@A@A@A@BA@@@AA@@@@BA@AA@@ABADG@AB@DBBBDDD@BB@@@@B@BBB@DA@@D@B@@@@AAG@CD@DBBDBB@@B@@@B@BAB@@AB@@A@@AA@AACAG@A@A@@@AB@@@B@D@BAFAF@DBD@BC@@@@@@BAB@@@@@BA@@BAD@BB@B@D@BDBDBDBF@DBDAD@B@BABABA@@AA@@EAA@AAA@@A@A@ABABAHC@@@@@A@@AC@@@@@A@A@A@A@@B@BAHCBABA@AB@@A@AA@" ],
														"encodeOffsets" : [ [
																106738, 31424 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510104",
													"properties" : {
														"name" : "锦江区",
														"cp" : [ 104.080989,
																30.657689 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DDBDBD@@B@B@@@@@@B@B@@@@@DD@@@@@@B@B@@B@@@@@B@@@@@H@@@@@@@@BB@BD@@@@@@@@@BB@@@@BFHBADADAB@@@@@@@B@A@BB@@FJBAB@BA@@BABABAB@@A@@@@@A@@A@A@@@AA@@@@AC@@@A@A@@CCACAA@@DAJCBAB@@@@AB@B@@@DAHCB@JE@@@@@@@@@@TIDAB@@@B@B@@@@@B@@A@@BAB@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@A@A@@@@@@@@AAA@CB@@A@@@A@AA@A@@@@@AD@@@B@B@B@B@@A@@@@@AAACA@A@@DABCBAB@@AB@B@@@@@B@@@@@B@@@@@@@BB@@B@@@B@B@@@B@@@BA@@@@@@@A@@@@@@BB@@B@@@B@@@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@AB@@AB@@@@A@@@A@@@@@A@@@@@@FA@@B@@A@@@ABA@@@AB@@@@@B@@@B@@@B@B@@@BA@BFCAAA@@@@A@@@@@AA@@@EGD@@ADA@A@@@@@A@AD@@AD@B@@@FCB@@@@@@@@@BBB@@@@B@@@@@@AB@@@@@@@BB@@@@@@@@@B@@A@A@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@B@@@@@@@@@BA@@@@@@@A@@@@@@@@@@@AB@@@@@@@@@@A@@@@AA@@@@A@@@@@@@@@CA@C@CAAAACEAC@@@@@@AAA@AAA@BAB@B@@@BAB@@A@A@C@A@@B@@@BB@B@BAF@@@BBADA@ABAAA@A@@BC@AA@@@ABA@@@AA@@@@A@C@A@@@@@BAD@BABAA@@AG@@@A@A@@B@@AA@@ABA@@AA@AA@@AB@@A@@@A@CC@@A@@@A@ABAFABABA@A@A@A@A@OE@@C@AA@@A@AA@@CKA@@A@@B@@AD@@AB@DC@CCC@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@B@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@@AB@@AA@@@@A@@@@@ABA@@@@@A@@@@@@@@@A@@@@@@A@@@A@@@@A@A@A@@A@@A@@@ABAB@@A@AB@BAB@B@BBB@BBD@@BB@BBBB@@@@@B@B@@@@B@@@@@BAD@@@DABAD@BC@ABABC@C@C@A@ICA@AA@@A@@@A@A@@@AB@@A@A@AAEA@B@@ABA@A@C@C@A@AB@B@B@@FFBBBBB@@D@B@DAB@D@B@BBD@BB@D@@@BB@B@@@BAB@BAB@F@BBBB@FBBB@BBD@D@BADA@@B@B@BCB@B@B@@BB@B@B@BAB@B@B@BDDB@B@F@B@BB@@BB@B@B@BABAFAB@DCDABA@A@CBCBABCBA@ABA@A@C@A@E@EB@@A@A@A@C@C@" ],
														"encodeOffsets" : [ [
																106558, 31383 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510113",
													"properties" : {
														"name" : "青白江区",
														"cp" : [ 104.25494,
																30.883438 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@@@B@B@BA@@B@@@@A@@AAAA@AA@@A@AHIBABC@ABC@ABC@AB@BAB@B@BBD@FDBBB@BAB@BA@ABAB@F@B@DA@ABABC@ABC@ABG@C@A@@AAGE@A@@A@AA@AAC@A@I@CAAA@AAABC@A@IBA@AAEAA@A@A@I@A@A@AA@A@A@A@ABEBA@A@CBA@AB@B@B@BBB@FF@@@BBBAB@@B@@BB@B@B@@@BA@ADGBA@@DC@@@A@@@A@@GK@AAA@@BA@ADEBA@ABA@C@@@ABA@@B@B@@@@ABA@A@@BADAB@DAB@B@@A@@@A@@CE@A@@@A@A@A@@@A@@GAAA@@@A@@@A@ABABABABAD@BADBD@DBB@B@B@DAPEDAB@D@D@@@@@@@D@BDDBDDBBBBD@NBBBB@@BFD@@@@@@B@@@@A@@AA@AA@AAAAIEA@@A@AA@@ABAFKBADABAD@D@BBDBDHB@BBDAB@BAHIDAB@B@B@@@@@@@BBPNBBD@D@JABAB@DA@CBA@CAAAC@CAA@CBCBG@E@G@IBA@CBADC@A@@@A@ACC@AAAAAAAAACCCA@@AC@C@C@A@ABAB@D@B@H@DBFB@B@@@B@@ABA@AB@@@B@@@@B@@@D@BAB@DABABA@A@A@@@A@A@@A@@@C@AA@@@A@@@AB@BA@ABA@CBA@AAA@ECCCGGG@A@@@A@AB@@@D@B@D@D@BADAB@BA@ABABC@A@A@@@A@@AAA@OA@AA@@A@EAC@E@A@AB@BEB@@A@@@AA@AAAAA@C@AAA@ABKDKDIHA@CBGBG@A@@@A@@@@AB@@@BABABA@@@@DEB@@A@@@AAA@@@@@AB@@@D@B@@@@@BA@@AA@@A@AAA@A@ABA@ABA@AB@BAB@DAD@@@@@@C@@@A@@BA@AB@@A@@@@HAFAFCDGDEDEBEBC@C@AAA@ACAOAA@AAAA@A@ABCBWJABABAB@DBPAD@BABCB_FCAAAA@]L@@@@cNCDCB@@@@@@EDIL@HAF@DAFAD@@@@@B@B@@DD@@B@AB@@A@C@@@AB@DA@@@@@A@A@@@@BAF@@@@A@@@IIAAA@A@A@A@@BCDABA@CBC@E@K@A@@@AA@@AA@@AA@@@A@@@AB@@A@@@@AA@@AA@@A@A@@@A@@BA@@@A@@AA@@@A@@@@@@A@@@@BAA@@BEDABABC@MFADEFCDAB@B@D@B@B@BB@@BB@BBFB@BB@@BFN@B@BABABCBCBABAB@DAF@BAD@BA@ABA@AB@@@B@@@B@BB@@@B@@B@@@BA@@BABABAB@B@DABAD@BA@ABE@E@C@@@A@@@AB@BB@@B@B@@@BAD@BABIFADADAB@D@BBDFNBB@@B@B@JEBA@@B@B@@@BB@@@BA@CD@B@@@@@B@@B@@@BBB@@@B@@@@B@@@@@BA@ABA@@@AB@B@@@@@@A@@@@@@@@@@@@B@@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@B@@@B@B@@BDBB@@@BABEHCBABABCBEDCBGBCBABA@C@A@A@AAAAAAA@@@A@@BAB@BAB@BA@@@A@AAAAGGAAA@A@AAA@AB@@ABCDABABA@CBC@A@C@C@E@AAAAAAAC@@AA@A@A@@A@@@@A@@A@@@@@@A@@A@@@AB@@@B@@@@@@AB@@@@@@@@@BA@@@@@@@@B@@@@BB@@@@@B@@@@@@@B@@@@@@ABEBABAB@@@B@B@BB@@BB@BBH@@@B@@BB@@BBD@B@D@B@D@F@B@B@@B@BBD@BBD@FDDDDFDHBD@FBF@B@DB@@BFBFBBBN@BADABA@A@@@A@C@@AA@@BA@@B@@@B@@@BB@@@@B@@@B@@AB@@@@AA@@@BA@ABCDA@AB@B@DF@@DBDA@@HGBABA@@B@B@@BBBBBF@F@B@DAB@D@B@B@DBDBDBDBDD@DB@BBD@DA@A@A@CBA@AD@D@BBDBDBD@D@FAF@BAB@@BD@FDD@B@BAF@FABAFAD@FAF@BAB@DCBABAHAB@D@B@FFDDDFBBD@B@BBB@B@B@@A@@@C@@B@@@B@@@BB@@BB@@B@BBB@@B@@BD@@@B@@B@DABA@AB@@A" ],
														"encodeOffsets" : [ [
																106856, 31644 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510115",
													"properties" : {
														"name" : "温江区",
														"cp" : [ 103.836776,
																30.697996 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@DEBCBABCB@@@@A@A@A@@@ABE@A@@BCDA@A@@BE@@@@FCFA@@B@JA@@B@BA@@B@B@BABAB@B@B@B@B@BAB@@@BAD@BABA@@@@DC@@@@BCB@@@@ABC@AA@@A@@@A@@@CBA@@BABAB@DA@@@@BA@A@ABA@@B@D@B@B@@@BBB@B@@@D@@@B@@@B@DB@BB@@@B@@ADCBAB@@AB@@A@C@E@@@A@@FC@@@A@C@@@AB@@AD@@AB@@A@ADABC@@@A@AA@@AAA@@@@@A@@B@DAB@FBPCHA@@@AHADC@ADCBCFCDCDAJGB@BAD@B@DAHCDCJCBABABABAB@BATAB@FA@@@@FAB@D@B@B@@BB@@B@B@@EFCDAB@@@B@@BBB@BAFADAHABAD@@@BAB@BCHEDAFEFADADAD@D@BB@@BBAB@@AB@@@B@@BBB@B@@@BAB@B@BADABAFC@AFABABA@AB@@A@AB@B@BA@@B@BB@@F@@@@@BA@@@@@AA@@@@@@@@A@@B@@AB@@B@@B@@@B@@@B@@A@@@@@A@@A@@@@@@AB@@@B@@@B@@A@@@@@@AAA@CAA@CAAA@A@ABABA@@A@AAABEDCBA@@@AA@A@ABABA@CBCB@@ACCAAA@A@CBA@@@@AA@@C@@@A@AA@@@GCA@@AA@@@@ABA@A@A@AA@@@@@@@@@ACAAEC@AAAAAAAAAA@A@@@A@@@@@@A@AA@@AAA@@A@@@AAA@C@EB@AAA@A@@BABABABA@@@@B@D@@@B@@@@A@@@A@@D@BAB@BAB@@@@@PCFAD@B@B@BABA@A@@A@@@CB@@@A@@A@@@@@AA@@A@@BA@AB@@@@A@@@@AA@CC@@@@A@AB@@A@A@@@@@A@@@@@A@A@A@E@GBC@CACAAC@CBC@CAAA@CAAA@A@ADA@@@A@AAAC@CBA@ABCBA@A@CA@AA@AD@B@BDJ@D@BABCDABA@@@AECKCCACAAAAAAEAAACACA@AAA@A@@@@@A@@@@@@BC@C@@@C@ABA@C@@AAAAA@A@ABCDABCDCBA@A@A@AA@A@@@C@ADCBC@EBE@A@@AAA@CAA@AAA@CCAAA@A@EBE@AB@@@@A@A@A@E@E@C@@@@@E@KBCBC@ABCFABABA@A@A@A@@@@@ECCDCBA@@@@B@@@@BB@@@@@B@@AB@B@B@@@B@@AB@@@BA@@@A@@@@@A@@DABAD@@A@@B@@@@@@ABA@@@@@@@AB@@@@@@@@@B@@@@@@@@@B@@CB@BA@@@A@@@AB@@@@@BAB@@@BA@@@@@@B@@@B@@@@@BA@@@@@A@@@AB@@@B@@BB@@AB@BA@@BAB@@ABA@@B@@@@@B@@@B@@@@@B@B@D@@@@AB@@@@@@A@@@@BBD@@BBBBBBAB@DCFGNCFCDAFAJAH@F@F@F@FBDA@ABAB@B@D@@A@@BC@A@ABA@@B@B@B@@@@@@@BA@ABA@EF@@A@A@A@@BA@@B@BBB@B@@AB@B@BCBAB@@@BAB@B@@BB@B@@@BCF@BA@@B@B@B@@@DABAD@@AF@@ABAB@@@B@BBD@@AB@@CB@@AB@B@BB@@BB@BB@@AB@BBB@D@B@BABAFCHAFAD@D@B@B@@@B@@@B@B@B@BAB@BA@@B@B@B@@@BAB@B@@@B@B@@@BBBAB@@AB@@CB@@ABAB@@BB@B@@AB@BA@A@@BA@ADCHCDCH@B@D@NAF@DCF@D@D@@ABABAB@D@B@B@BA@ABAB@B@@@B@@@B@B@@@BABAB@@@B@B@@@D@BA@@BAF@BDBH@@@@@@A@@B@@A@@BCBA@@B@@@DA@@B@@ABA@A@A@A@@BA@@B@B@@@BABAB@BC@@@AB@@AB@B@BA@@BA@@DA@A@@@ABA" ],
														"encodeOffsets" : [ [
																106206, 31602 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510121",
													"properties" : {
														"name" : "金堂县",
														"cp" : [ 104.415604,
																30.858417 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@C@A@@@@@@@GBE@A@EAEAKECACDGDEBCBGBI@EAC@GAC@A@E@C@C@A@AAECCA@A@A@CBEBG@A@C@@A@A@A@@@A@@@AAAA@@@BA@A@@@AA@@C@A@AAA@A@@@@BA@@@AA@@A@ABA@@@AAA@@@@@A@@D@@A@@AC@ACCA@@A@@@@@AC@@A@A@AAA@A@A@E@E@A@ABAB@@@B@@B@DDDBDB@@@BA@@@@BA@A@E@@@AB@@@@BB@@BB@@BB@B@@AB@@AAA@CA@@AB@@BD@@@BA@CD@@@BBDIDGDQDEBEBEBA@@B@B@H@DBD@B@BABAB@DAHAHCDA@CBGDMBGDCBCBE@QHEBEDEFAF@D@FBHBJBD@D@B@@NHBBFHFJBB@B@B@BAB@@E@A@ABCBCBC@ABC@A@CBA@@@@BCD@@A@A@@@@D@@A@@@A@@@@@@@@@@@CC@@@@@@@B@@@B@@@@A@@B@@B@@@@@@B@@@@C@@@@@A@@B@AA@CA@CA@@@@@@BAB@@@B@@@@@BA@@@A@@@@@ABA@@@A@@@A@@E@@@@EB@@@@@A@@AACA@@A@@@@@@B@@AB@@@@BF@@@@A@A@A@A@ABA@@@ABC@@@@@@B@B@@A@EA@@@@@B@@@BA@@@A@@@CDABAA@@AA@@@@AB@BA@@AAAA@A@@@@@@C@@CAA@A@@B@B@@BD@@@@A@CBA@BBA@C@CBA@@AA@@ABAA@@AGB@@@@@B@B@@@@@@@@AAA@@AAB@@@@BD@@CB@@ABA@A@ADILCDCBAB@AA@GAGC@AA@AB@@EJEF@BAB@F@@@BA@A@GCCCA@AC@CAI@AACAAABC@IDOFAAA@@B@DA@@@AA@AC@@@@A@@@@@ABAB@BA@@CA@AAA@@C@A@@DA@@@CC@@@@BA@@A@@@@@ABA@A@@@AD@@@@@BBAB@@@BB@@A@@@A@G@@@AB@@A@@@@@@A@C@ABA@@B@B@BA@@AA@@E@ABA@A@@A@A@@@@AB@@A@@@BA@ADA@@@@@@@@@A@@A@A@@@@A@@DE@@AAGAE@A@C@AAACCEMGAA@A@E@@AAA@C@GDCBAA@A@C@A@AAAA@CBGCC@A@A@EDCBC@AAGAECMCC@M@A@ABABADA@C@AAICC@A@A@ABGFABA@E@C@ABGBHDDBBB@BBBBD@B@@@F@@@BBB@BB@B@B@@ADAB@BAB@B@B@DDB@BBDDFD@@@@@B@D@B@BBB@BBB@BDBBBBBBD@B@F@B@D@D@D@DAD@DAJAB@@ABA@AAECCCACAAAMAA@AAAA@AA@@EAA@@@ABA@@@@B@BA@@BB@BH@B@F@B@D@@@BHR@BBBBBDD@@@B@B@D@B@@@@B@@@BAB@@AB@@@D@@@@@@@BC@CBA@ABAB@BAB@BAB@B@BBB@@@BB@@AB@@@@A@C@@@A@@B@@@@BB@B@@@BA@CF@@@@ABABAB@@A@@B@@B@@@B@H@HADAB@JGLCLCBAB@BBD@B@BBBBB@@B@@@BA@AFA@@B@B@FBD@F@BB@@BPBB@BB@@@B@@@B@BADAB@BABA@CBABC@C@A@C@@@A@@B@B@@@BHHDHDD@FBB@BAB@DAB@BABA@@B@@@B@@BBD@@@B@@@@B@B@@@B@BABABCBA@ABC@@@A@@@@@@A@@BAB@BA@@@A@@@AEACAG@A@C@A@AB@B@B@D@DBD@@DBDDBBBBBBBB@BDD@B@B@@@BCDAB@DAB@J@H@FAHAD@DBB@DBDBB@DAB@DCBA@ABIBC@C@AAOMAA@@@@@@A@A@A@CBGJABA@CBAAA@CGCAAAC@C@ABCBABELAB@BB@@B@BB@JFBBBBB@@BBB@@@B@@A@@@@@@@EC@AA@AAMAC@AAAACCCAACC@@@@@@@C@C@A@CBOFCBA@A@A@CAC@CAABC@ABABABAB@B@B@@@B@@BBHB@@@B@@@B@B@B@@@BDF@@@B@@@BA@A@CBA@CBAB@@@BAB@B@@A@A@@@AB@B@@@DAB@BABCF@BAB@@BB@BHL@@@B@@@B@@CD@@ABCH@BAB@@A@A@A@@AA@@@BAAA@A@@EEA@AAA@A@A@@BAB@D@BABAF@B@B@B@BBBB@B@J@B@B@B@FBBBB@JAB@D@BABBB@BB@D@J@BBD@BBBB@@@@BHFBB@@@B@DAH@BAD@BADAB@BCBA@E@A@AB@BABA@ABA@AAECC@AAA@A@ABA@@BAD@BAD@BADABGJ@B@BB@@BBBBB@@@B@@A@@@ABA@A@@@@@@@@@B@@BBDBHHD@BB@@B@@AB@BABDHFHDHBBBB@BBB@B@DDBBDDBDA@@DA@@BCDAFAB@BA@CBA@@@A@@BCBAD@DB@B@DBBBDBDBB@DBD@D@B@BB@BBD@@AB@@@DC@@BA@@BC@@D@@@HBFDFBHB@@FB@@DBD@FADAF@@ABB@BB@B@@@@@B@BAB@DAD@BABB@@B@@@B@@BB@@B@DBB@@@@BAB@@@B@B@@B@@@B@BB@@@@@D@@@@@@BB@@BB@B@F@D@@BB@@@@@BABA@AB@F@B@B@@AB@B@@ABAD@DAD@BBB@@@@A@AB@B@@AHC@AB@DAB@@@@ABA@@BA@@DBB@BB@@BAD@BAD@BAB@B@BBFBBADABCBC@@DCBA@@DCDADAB@JCBA@A@CGW@I@G@CAACAC@@AAAA@AA@@AC@@@A@C@@@ABCB@B@B@B@D@DA@@D@DA@@F@HAD@@@FCA@HABA@@DAHA@@HAHA@@DAF@@@FA@@BADA@BDC@@BADA@@D@B@DAFAD@DBFBD@B@@@B@@ABABABABAD@@AFABC@ABC@C@A@ADAB@@@D@D@F@@@DB@@FDDB@@D@@@D@@@D@DA@C@@BABCBCBCBA@ABABAD@@@FAFA@@F@D@@@D@@@B@DADAD@DA@@BAB@F@DAH@@@D@D@@@DCBC@@DCD@F@B@@@DA@@LB@@D@D@D@@ADABA@CAAAAAAAC@@@A@@BC@@@E@@DABC@@DC@@BCDC@@@@BEFQBE@@BC@E@ABA@CAA@@@@A@@@A@AB@BA@@@@AAAB@ACBCBA@@@@DA@@D@@@FBFDBB@@BB@@BDDBDBDA@@DA@BBCBC@EDI@EBC@@BC@@BCBCBADC@@DA@@@@BA@@@CAEAA@@ACAC@@@A@@BA@@B@@@DA@@BABABA@A@@AAAC@ABABAA@BADAD@DBD@D@B@BABAB@DBB@D@@@BAAA@C@@@C@@@CBA@@DB@@DBDBD@@@F@B@FAFB@@B@@@D@FAD@@@BC@@@C@@CCCCAA@@AC@C@@@C@CBC@@@C@C@@@C@@@@ACBC@@BAF@F@F@D@@@DA@@BABA@@BE@@@A@@DA@@DC@BBCBC@@@C@@BC@@@CBC@@DC@@@A@@DC@@@ABE@@@CBC@@@C@A@ABCBA@AAG@C@@B@@AB@BA@@D@B@@BBBBDBB@BB@BBD@B@DAB@DBB@B@BB@A@A@AFGDABA@C@C@AAIEGCCCCC@AAAE@C@A@@A@ACAA@@@@@A@@A@@@@A@@@@@@@A@@B@@@@@@A@@A@@@@@@@@A@@@@A@@@@@@@A@@@@@C@@@@@@@@@@@AA@@@@@@@A@@@A@@@@@@@A@@@@A@@@A@@A@@A@@A@@@@A@@@@@@@@@@@AA@@@AAA@@@@@@@@@@A@@@@@@@@@@A@@A@@A@@@@@@@@@AB@@@@A@@AA@@@@A@@A@@@@@@@@@@BA@@@@@@@@@@@@@A@@@A@@@AA@@A@@@@A@@BA@@@@@@AA@@@@@@@@@@AB@@@@@@A@@@@A@@@@@@@@@@@@AB@@@@@@@@@@@@@AA@@@@@@@@B@@@BA@@@@@A@@@A@@A@@A@@B@@AB@@@@A@@@@@A@@@@A@@AA@@@@@@@@@B@@@@@@@@@B@BA@@B@B@@BBB@@@@B@@@@@B@@AB@@@DB@@@@@@@B@@@@BB@@B@@@@@BB@BB@@@@@@@B@@@@@B@@AB@@A@@B@@@B@@@@@B@@@@@@B@@@BB@@@@@BAB@@@@@@@@@@B@@@B@@@@BB@B@@@@A@@@@B@B@@@@@B@@@@B@@@@@@@DC@AB@B@@@B@@@@B@@@@@@B@@@@@@@B@@A@@@A@@@A@ABA@@@@@@BB@@@B@@@@@@BBB@@@@B@@@@BB@@@@BBB@@@D@@A@@@@@@AAB@@@@@BA@@@@@A@@@@@AB@@ADABA@@BABCB@BC@C@C@CDEFCBC@@B@DAB@@ABA@A@C@AAA@A@@BCDAB@BBDFFBBBD@B@@ABADA@A@ABC@A@MAA@@AAAC@@@CACACGKEE@A@C@@BC@A@A@@@AA@E@CA@A@@@C@A@@AA" ],
														"encodeOffsets" : [ [
																107393, 31242 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510116",
													"properties" : {
														"name" : "双流区",
														"cp" : [ 103.922706,
																30.573243 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@DDLFNFJBLBFBBBDBHBDBD@DAH@J@BBB@D@DAHAH@BADCBABCB@BAB@BAD@FABADCBABGHCDABCBAB@B@FFH@BBFFJ@BADABCDADABAJAHADABADOLEBC@G@CACAA@@@@@@@A@@@@@@@@@@@@BA@AJAD@@@@AB@@@@ABEDCBCBGBK@C@A@@@CAGAGAC@E@EBC@A@A@CCGAE@@@@BAFADADADBD@DAB@@ABABAB@@@BAF@B@@ABCBADABCL@BBD@HBFFH@BBDBD@FBF@FAD@F@D@D@BADABABADINMNCJCHCDAD@B@D@DAHINFD@@@@B@B@B@B@BABADEBAD@DALAF@@@@@D@F@F@B@B@B@@@@@BAF@FAB@B@BBDDB@BBB@DBB@BB@@@BAF@FADCD@B@D@@@BBBB@B@B@DADCBADCBAB@B@BBBB@@@DAB@B@D@@@DAD@@@@@@@B@@@@@BBB@BDBDBBBFBBBBBBBBDDDDLBF@@B@BADCBA@A@CCI@A@ABCB@@BDBB@B@DABAB@DAD@BB@B@B@@CB@B@BBBDBB@BB@DAD@DBDDBDBD@HAF@B@B@B@@@@@B@@@@@B@B@@@BAB@@@@@DDB@@B@@B@@@@@BAB@@AB@@@BB@@@@B@@@@B@@DA@@B@B@@@BA@ABA@A@@@A@@AA@@@AB@@@@@B@@@B@@@@@B@@@B@@@BB@@BB@@B@@@@@B@B@@@B@@@B@@@B@B@@@@@BAA@@AB@@@@@@A@@@@B@B@@@B@@B@@@@@@@B@@B@@B@@B@@@B@@@@A@@B@@A@@@@B@@A@@@@@@AA@@@A@@B@@A@@BA@@@@@@@A@@AC@@@AA@A@@A@@A@@@@A@@@@@A@ABA@@@@@@@@B@@@@@B@@@B@@@@@@@B@@@@A@A@A@A@@@AAA@@@A@@@@@@@AB@B@@@@AB@@A@@A@@CA@B@@A@@BADA@@@@@A@@@AB@@@@@BAB@BA@AB@BA@@A@@A@@@@A@@@ABA@@@@@@A@@@@@@BA@@AA@@@@@AA@AA@@A@@A@@@ABA@@@@@AAA@A@ABC@C@AB@@@B@B@@@B@B@@@B@@@@ABA@A@@B@@@@BBB@@B@@@@@@@@A@@@A@@@A@A@ABAA@@AA@@A@@@A@@BA@@@@@AAA@A@A@@@A@@BA@@@A@@@A@@@AAA@@@@@A@@BC@@@@@AA@@@@@@BA@@@ABA@B@AA@B@@@@@D@@BBC@@B@@@AA@@BAB@A@@@@A@AC@@@AB@@A@@@@BA@BBA@@@@B@BA@@@A@@@@@@@@B@B@@@@@@@@@@AB@BA@@@@@@AA@@@A@@@@BA@@B@B@@@@@@A@@A@AA@@@A@@@@BADADAB@B@D@B@@BB@@@@@B@@A@B@@BB@B@B@F@@@BDD@@@@B@@@@BB@BB@@@@@@B@DBBBB@B@BAB@HCDAB@DAB@D@@@@EBABB@@@B@@@@@B@@@@B@@B@@@@B@@BB@@@@B@@BB@@@@@BA@AB@@@@@B@@B@B@@@D@JABAB@BABABABABC@AB@BAB@B@B@BBB@@@B@@@B@@ADA@CBA@A@@@C@A@ACGEACECI@GBGDEDCDAF@DA@A@EAI@C@CBAD@B@D@BB@BBD@PAD@BBB@@B@B@FADATQFCJFB@DDBB@@BBB@B@@@D@@@D@B@@BBB@@@B@@CB@BABABAD@BA@A@@B@@@B@BB@BBB@F@BBB@BBBB@B@D@BABEDAB@B@@BBBDBB@B@BFBBBB@B@@@BA@@B@B@@@B@@@BBB@JDB@D@D@D@BABAD@@ABCBA@C@@BC@A@@@@@A@@A@A@@@@@A@AA@AAA@@AC@AAA@A@ABA@ABAB@@@BABA@@B@@@@BB@B@B@@@@@@B@@@B@@@@B@@@@@@@@@B@@@@@B@BA@@@@B@@@@@BB@@BA@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@A@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@DD@DCDA@@BC@@BA@@@@BB@DL@@BBB@@@BBD@@@PFB@B@B@B@B@BABABEBAB@@@B@@@DDB@@@B@@@BA@@BA@AB@@AAA@AAE@A@A@A@ABABANIB@DAF@B@DAB@@@BABA@ABA@ABC@AB@@AB@@@B@@BB@@@@@B@BA@@BABA@ABABC@CBE@@@@@@@CBA@AFEFKDE@A@@@CB@@@@@@@@@@@B@@@@@@A@@@@BB@@@@@A@@BA@@@@@@@@@@@@A@@AB@@@@@@CB@@@@@@@@@AA@@@@@@B@@@@A@@@@@A@@@A@@BA@@@A@@@A@@@@@@@AAA@@@@@@@@@@BA@@@AB@@@@@BB@@@@@@@@B@@@@@AA@@@AA@@@@A@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@BB@@@@B@@@@A@@@@B@@@@@@@@@@@@@@A@A@@@@@B@@A@@@@@@A@@@@@@@@@@@@@@@@@A@@A@@@@B@@A@@@@A@@B@@@@@@@@A@@@@B@@@@@@B@@@@@@@AB@@@@@@@BA@@@B@@@@@B@@@@@@B@@@@@@@@A@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@BA@@@@B@@B@@A@@@@@@@@@B@B@@@@@@@@@@@@A@@@@@A@@@@BB@@A@B@@@@@@@@@@@@@@AB@@@@@@@BA@@@@B@@BB@@@@A@@@@@@@A@@@@@@B@@@@@@@@A@@@@@@B@@B@@@@@@BAA@@@@@@@@@B@B@@@@@@@@@@@@A@@@@@@@@@@@A@@A@BC@AB@@ADAD@HAD@FA@@@@B@FANAAC@AAABABCB@DAFBJBDBJAFAB@@A@AAAEKCCEGCISS@AAA@@DE@A@C@@A@A@CAG@C@A@C@CAA@CEEEAA@CBC@IAG@CAAA@AAGAC@AA@A@C@ABA@C@C@G@EAA@ACCAAIIEIKKGGAC@A@A@EDE@E@AAACAGOC@A@AA@@@@ACAAACEEAA@@AACA@A@ABEAEAGCGB@CC@CAA@@CA@@CAAC@A@@@A@C@AAGAA@@ACAAAACACAACAACK@AA@AACC@@@A@CAA@C@A@E@B@C@C@A@@@G@CAA@@@ACAAA@@CCECAA@@CAAAEAGAAAAAA@@@CC@@AAIA@@C@C@@@CB@@CBAD@D@@@B@@ADABA@A@CBODCB@@ABABAFABADABCBC@B@EACAA@AB@@A@@@@B@B@@@BBB@@@BAB@@CBA@CACAC@@@CB@@AB@BCDB@AB@@CH@@ADA@@@A@AA@@CC@@AAC@@@A@@@ABAB@@AB@B@@@DADA@C@@@KC@@KCEC@@C@@BAB@@@@@FAD@BC@AAEC@@CAA@CBC@@@CA@@AA@@GC@@CA@@GA@@EBA@A@@@CBAD@@ABADCDCDCDA@AB@BAD@BADCB@@ABCB@@CBADADAD@F@@BBBN@@@D@BABA@CB@@ABCB@@AD@@ABAD@@@DCD@AAD@@CBC@C@CBCB@@CD@@CDAB@@ABCDEDAF@@@BCHABCD@@AFAD@B@DBBDBBBFD@B@@@B@@CBEACBEBE@C@CBICA@" ],
														"encodeOffsets" : [ [
																106414, 31088 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510114",
													"properties" : {
														"name" : "新都区",
														"cp" : [ 104.16022,
																30.824223 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@FAB@F@B@BBBD@BBB@@D@B@B@@@B@DBB@@@B@BC@@BCBA@ADAB@D@BBBBB@@@D@BABCDAB@B@B@A@@C@AAE@EACCGCECCECC@AAC@AAA@@@@A@A@E@C@A@C@AAC@AA@@AA@@@G@AAA@@AA@@A@A@A@@BABAFABA@@@@@@@A@@@@@@@A@@@@AA@@@@@A@@@@@@B@@A@@@@@@@@BA@@@@@@@A@@BA@@B@@@@B@@@@B@@@@B@@B@@@@B@BBB@@BDBBBBBBF@D@D@B@D@DAB@BABADCBA@@BAB@BBB@B@BBHHBBBBB@@@B@@ABA@ABA@AB@@@B@BBBBBBB@B@D@B@BADAHADAFCDABABADAFGBA@A@@AAAC@@@A@A@@@A@@B@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@@B@@@@@@@@ABA@@B@BAB@@A@@@@@A@@A@@@A@AA@@A@@@@A@@@@@ADCB@@A@@AA@@A@A@@@ABIFA@A@@@AAEMAC@A@CBABCBCJEBA@ABC@A@@@A@AA@@ABA@@B@@@D@F@F@BAB@@ABCBA@C@ABABABA@AB@@A@@@AA@@@A@@A@A@@@A@@BAB@BAB@@ABC@ABE@CBABADADABABA@A@AEM@AA@@AEAAAA@@AA@@A@A@A@C@ABADCFEBCNED@BABAFC@AB@AB@@@@@B@@@@B@@@B@@BB@@@B@@AB@@@B@B@@@BB@@BB@@@@@BA@@B@@@B@@BB@@BB@@BB@@B@L@F@D@DAB@BADC@AB@B@B@B@BBJJ@@B@@@@@BE@A@@B@B@@@@@B@@CBA@@D@B@@@BAA@@@CC@@@A@A@@@@BCBE@CBE@GCBC@A@A@AA@A@G@A@@@AA@[HC@C@A@A@A@ECAAA@A@UF@@@@KDA@EBABA@A@A@AAA@AAAAAACCAACGA@@AAEAAACAA@A@A@@@ABA@A@@@@@@@A@@@@@A@@@@@AB@@@@@@A@A@@@@@@@A@@@@AA@@A@@@AA@@@@@@@ABA@@@AB@@@@@@@@A@@@A@@A@@@@BA@@@@@A@@@A@@@@@@A@@@@B@@@@A@@@E@@@@@A@@@@@AABA@@@@@C@A@@A@A@@@A@@B@@@B@@@@@@@@@AAA@AA@@C@A@@@@@AD@@ABABA@E@A@A@@B@B@B@BBD@BB@@B@BA@@BABABGDABA@@@@B@B@B@B@@@@BD@@@B@@@@GDABAB@B@B@BB@BBB@FB@@BB@@ABABABA@C@CBCAE@CACACA@A@C@AAAC@AB@@AB@@@@A@AB@@@@@@ADC@CAE@EBABC@A@@@A@@B@@@B@BBHBD@BBB@@@BA@@BA@ABA@@@A@@@AAACCAC@@DBH@B@@A@C@@@CBA@AAA@@@@@AAC@CCAACAA@@BCHAB@BB@@BAB@@@@BB@@B@@A@B@B@B@BABA@EBC@G@M@E@A@AA@@AACAA@A@@@A@ABCB@@@@@BD@@BB@@@B@FBB@@B@B@@CBBB@@@B@FAT@DAB@BABABC@ABA@ABA@IAC@CBA@CBAB@BA@@B@BB@LJB@BB@B@B@B@BADCBABCBEBG@C@CBABC@ADA@@@A@@@@BA@@B@BAB@@AB@@A@A@A@@@A@AAA@AA@@A@@@A@@@AB@B@@BB@@B@BB@@@BB@@@@BA@@B@B@@@@AB@@A@@@@@AA@AAA@@@AA@@@A@A@@@@B@B@@BB@@BB@@@@B@@B@@@@@B@@@BA@@BA@@BA@A@@@@@A@@CAA@@@@A@@@A@@BA@@@EC@AA@@@@@@@@@A@A@A@A@@@A@@A@@@ABA@AAA@@AAA@AAA@A@ABABABAB@@A@@@AA@@@A@C@A@A@AAA@AAA@AA@AAAA@A@@@AB@@ABAD@@@DCBAB@@@B@@B@@@DBB@@@@B@B@DADA@ABA@A@A@A@A@CAAEIBA@@@@@@@@B@@B@@@@@@@@@@@@@AB@@@BA@A@@@@@@@@@@AA@@@@A@@@@@@@@B@@@@@@A@@@@@@@@A@@@@A@@@@@@@@@B@@@@@@A@@@@@@@A@@B@@@@@@@B@@A@@@@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@B@@@@BB@@@@@@@@B@@@@@@@@C@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@BA@@@@@@@@B@@@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@BB@@@@@B@@@BB@BB@@BB@D@B@B@@A@@@@@@@@@A@@@@@A@@@@B@@@@@B@@@B@B@@@B@@@@@@@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@@@BA@@@@@@@A@@A@A@@@@A@@A@@A@A@@B@@@@@B@@@@@@@@@@A@@AAACEAECA@A@EAC@A@CAAC@AAIAC@A@@@@@@@@CCA@C@C@CB@@@BA@ABCBABCBGFABGB@@@@ABCBB@@B@@@@AB@@A@@BA@@@@@A@@@A@@@@@A@A@@@SN@@A@@B@B@@BB@B@B@B@BADEJ@B@DB@@BB@B@D@BAFABAD@B@D@@@BBBBBB@B@BADADABABA@@@AA@@@@CAA@C@A@CB@@ABAB@B@BB@@BDBB@@B@B@@@BABABABA@ABA@A@@@@B@@AB@B@B@@ABABA@@@GDA@@B@@@B@@@BBD@B@B@@@BA@CDCBCBIFA@EDA@CAEAA@@@CDA@A@A@A@@@A@A@@BAD@B@@ABA@CAAAABA@ABGHABA@C@C@A@ABEDA@@BB@@BB@@B@@@BCH@BA@ABC@A@@@A@AAC@EBA@CBA@ABA@ABAD@@AB@@AH@@@B@@@@@@ABAB@BABABABADAB@B@B@BBBDBDDHHB@@B@@@@ABCBA@@BAB@@BB@BBBHF@@@BABABQJABAB@D@D@BDDDBDBCBA@C@ABA@CD@@@@CBA@A@AB@@CBA@A@KHC@CBEBEDCDCDAB@B@BB@BAB@DABCDAD@D@F@J@F@BBJANAB@B@B@B@FCDCDAB@BAD@@@B@@B@@@D@BB@@@B@B@DCBAB@B@BBBBBB@B@B@D@@@@@F@B@BBBBBHBBBBBHFBBB@D@F@D@BBB@B@BBB@B@B@@@B@BAB@DA@@B@BBD@B@@@@B@@@@AD@@@@B@@@D@B@D@D@B@DB@@BB@BBDB@@BHDDBDBBBHHBBBBDBB@H@@@@@B@B@B@BBDBFF@BBBB@B@DAB@@A@A@C@ABABABAPGBCB@@A@A@A@E@ABABCDEBC@A@E@A@AAC@A@A@ABABAFEHEFAFAL@HAHAFAF@ZDB@DADADAD@D@JDDBF@H@DBF@B@@@B@FABAB@" ],
														"encodeOffsets" : [ [
																106650, 31656 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510124",
													"properties" : {
														"name" : "郫县",
														"cp" : [ 103.887842,
																30.808752 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@CAA@@@@@@@A@@@@@@@@@@@@@@@@@CAAA@@@@@@CAAA@@@@CC@@A@GA@@@@BEBA@@DABA@@@A@@@A@@@AA@@@AA@@@A@AAA@@@@A@@@@@A@CBABA@@@@BAB@@@BAB@@@B@@@@B@@@B@@@@@@@@BA@AB@@AB@@A@@@AA@@A@@@A@@@@B@@@B@B@@@B@B@B@@@B@@@B@@@@A@@@@@CA@A@@A@@@GDA@@@@@BB@B@@@@D@@@@@BD@@@@BB@@@@@BAB@@@@A@@@AB@@AB@@@@@BC@ABC@GAGAAAAAAAAC@C@A@@@@@@@E@A@CBABADCB@@A@@@AAACC@@@@@@AAAACGAAA@A@AAA@CBA@ABCDABA@ABA@A@CAA@AAAA@@@@@@@AAA@AB@@ADCBA@@FGBA@A@@A@GA@@A@ADEB@@@@AB@@AB@@@@A@@@@@@B@AAB@@@@@@@@A@@@@B@DA@ABA@A@@@@AAA@@@A@A@@@@A@@@C@CA@@@@@@@@A@A@@@A@@BA@A@@@AACAA@@@A@@B@@@@@B@@A@A@@@@@@@@@@B@@@@A@@BB@BB@@@@@@@BA@@@A@@@A@@B@@@@B@@@@B@@@@@BA@@@A@@@A@@@@AA@@BA@@@@B@@@@@@B@@B@@@@AB@@@@E@@@AAA@@@ABA@A@@B@BA@@BABABEB@BEDABCBABA@A@AB@@A@A@AA@@@A@@BA@@BAAA@@AAC@C@CBCBEBEFCBGFADA@AB@@C@ABGBCBEBABA@AA@@@A@@BADCFE@@@A@AA@@AA@A@C@A@EB@@@@EBA@SBABA@ABABABABIDCDGDCBA@C@ABA@IHCBCDEDADCD@BCDGB@B@@GBODEAA@CBA@@@@B@@@@BB@BB@@B@B@@ADCB@B@BA@@BC@@BA@@B@@@D@B@@ED@@@B@@@F@D@BA@@BA@ABCD@BA@@@A@@ACAA@@@A@@@C@@@A@A@AA@@A@A@C@A@@@AB@B@BAB@@@@CBA@ABAB@@AB@D@@@B@@@BB@@BAD@B@@A@AD@@@@CD@@@@ABABC@AB@@A@ABA@A@A@A@A@ABABA@A@@@ABA@@@IBA@@@EBED@@@@AF@@@BCBAD@@@BAF@B@@@B@B@B@@A@ADABADCF@@BBJBH@DBFFFJBD@B@BBB@DB@FBF@B@BBDAD@D@B@FD@BD@B@D@DBABABCJ@BABA@C@ABABABADCBBDBBD@DABABBHJBDBLBFBB@BD@@@DL@H@@@@@B@H@H@FBH@B@DCH@B@DBBBDBB@@@@B@FF@@B@@@D@B@@@B@@ABAB@@AB@B@DAB@BAB@BADE@AB@BA@@D@@@B@@ABC@@@@FCBAB@B@@@BBBBB@B@B@D@B@B@B@B@@@B@D@@AB@BAB@@ABAB@B@@@B@@AB@@AB@B@@AB@@A@CBA@@BA@@BA@A@@@@@A@@@A@@BAB@D@B@F@B@B@@@BAB@@@DBBB@BBB@F@B@BD@BBD@B@FAB@D@FDD@D@DADABCDABADAD@H@B@B@BAD@D@BAB@B@@ABADAB@B@J@DBB@D@@@@A@ABADCDCFCFADAD@LGB@B@DA@@BAB@B@DA@@@@DCB@BAD@B@DACACACC@A@C@CBABARIBABA@A@@GEAA@AAA@@BA@AB@DABA@@@@@AA@GGCCCAAA@A@A@ABABCBABABA@ABABA@@@@@@@A@@BG@@BA@@BCBAB@BAB@DAB@FAD@BBB@@@B@D@BAB@@ADG@A@@@AA@@AA@@AB@FCBAB@D@D@B@BAHGBAB@BABBDBB@BA@@@ABC@AB@B@@@B@B@B@B@DC@@B@FBDBB@FCB@JEDADADCB@@A@@@A@AAC@A@@@A@@@AB@HC@@B@BABA@@@A@ABA@@@A@@B@B@BAB@BABABA@A@@@A@AA@CA@AA@@A@ABABA@@DAB@D@B@DB@@@@BB@@B@BABABCBC@A@AAAAAAA@@C@A@C@ABEBABC@A@A@@AA@@C@AFIBC@A@A@A@AAA@@@A@AB@@@TM@@B@B@@@@@B@@@B@@@@@B@@AB@@@BA@@@@@AA@" ],
														"encodeOffsets" : [ [
																106546, 31491 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510131",
													"properties" : {
														"name" : "蒲江县",
														"cp" : [ 103.511541,
																30.194359 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@A@CDCBAF@HA@ABGDEBADADCFCBAB@B@@BD@BABCFADCFABCBE@CB@B@B@D@@FDJDBDBDBFB@ADCHABBB@DDD@B@@@@@@@B@@@B@@@@CFCBG@EDCD@F@BBBBBDDBBBD@B@BCFCD@D@B@B@BDBFBFFBDBBADAF@@BBBDDB@BBF@D@FCH@F@FA@IBCDABG@A@EBEDCBCBAAEACBABC@A@CAWGE@AB@BABDN@FCNGNCDIBNPDBNFD@@BBD@D@TBBBBB@BA@@BCBG@G@C@AB@BBFDBDDF@B@BABEDAD@BBBB@H@FAD@BBPLDBFBFBDAFB@B@D@DBBDDFDJDD@BAFAB@FALBJBHFDDBBCF@BDDXJJHDBBBD@BAB@DGBC@CBADADAD@D@B@HDFBNBB@FBJ@DBFBFFBBB@D@B@JMD@F@B@B@BBEHBDD@NAL@B@D@B@@@HEFAFAH@BBB@@BBFBDDBBBB@B@DCDAFAD@D@DBJFHDF@D@D@BA@ABC@C@@@AAECG@C@A@EBCB@FAFABABAD@H@HAH@HBJBLFJHD@H@D@H@F@J@F@DAB@HIFAFADAD@DBB@DDDBB@B@B@B@@CBIDABABAD@FBDBB@B@DAHGDAFALIBAHAD@HM@@DE@@@AAAACE@CAA@@@AAAAAC@A@@BC@C@@A@@A@@AC@EBA@AB@D@BAB@@A@ABEAA@@@@@@BAB@B@BAB@@@AA@@@A@@@@B@@@AAA@@@@@B@AA@ABA@ADA@A@@GEICMCSAYCA@EAACCGAE@C@ABAFEBA@AA@@E@AFK@KACA@C@QJGBABCB@DADCDABABA@@@CKACKQCEAACACAC@A@ABABBBBDDD@B@BA@GBIBE@C@EAAAI@AAEGA@A@A@EBA@@@SGEAAAACAEA@CAEAOCICSE@@@@@A@@@@@@@ABA@A@@@A@@@AB@@@@AB@@ABA@@@AB@@@@AB@@AB@@A@@@AB@@@@A@@@@@@BA@@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@A@@@@@AA@@A@@@AA@@AAAAAAAAAACGGGCSGGCAAAC@EAEACAAGDA@CAMMMQIQA@AA@@A@@DALCH@BCBCDCBAB@BBFBD@HAB@BA@AAEA@@A@C@GHEBGAE@CC@CFKDCBAFAFAHEDCBEBE@CCICEGEEAE@A@GBA@CDAFIPAD@B@BFD@B@BAB@@@DHBDB@@@B@@ABAB@@@@A@AB@@@BA@AB@@@AA@GAC@@@AA@@@ABC@ABAB@@@B@@@A@@AAA@A@C@A@C@AAAECC@A@A@GNABCAA@ACAAEACAW[ECG@CB" ],
																[ "@@@CABCBA@@@@@F@B@" ] ],
														"encodeOffsets" : [
																[ [ 105877,
																		30818 ] ],
																[ [ 105927,
																		30843 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510180",
													"properties" : {
														"name" : "简阳市",
														"cp" : [ 104.550339,
																30.390666 ],
														"childNum" : 0
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [],
														"encodeOffsets" : []
													}
												},
												{
													"type" : "Feature",
													"id" : "510132",
													"properties" : {
														"name" : "新津县",
														"cp" : [ 103.812449,
																30.414284 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@ABE@A@@BABABA@@BA@CACBCBCBCBE@A@@F@HBDDB@B@D@FAF@D@HBHBDB@@B@D@L@HADADAFCBA@@@@BA@@@@BCBIB@@A@@@@@@@@@@B@@@@@@@B@DBDBH@D@FAPKBCBABCBGBIBABCDCBABC@AEIAE@AEG@E@ABADABADCHGBADABCBA@EBC@ABA@ADABADABC@ABGBG@C@CAA@A@IBG@CACACAGACAAAEAKEIEMCK@CCACA@@ACAA@CBADE@@BC@BBC@C@AAC@@CAC@AAB@A@ACAG@CAACBGBC@G@GAMCA@CB@D@B@BABABAF@BABABCHCBAB@B@N@BC@@ACICACAM@@@@@@@GAEACACACAC@A@SBEBE@CAU@I@A@E@IDEBC@EAMGIEECKCCCCAEICBA@A@A@C@A@C@@BA@@DBBBDOHECAE@ACAC@E@EBED@B@B@DDFHDJFJDD@DDDF@B@BILCD@DAJ@J@BABCDKLKREHOZMNIJGDCD@D@D@DBBDDHFFDFDDB@@ABAB@B@BDDDB@@@@FDHBDDBFBFBDDBBD@DALBH@BBBBBDBBB@DBH@F@DDJFDDBBBD@HATDL@N@JAJAB@@@@@H@H@BBB@@@@BCBEBAB@DABA@ABABAD@BBBFFDBBB@DBBBBF@FAD@FAB@DBF@FDDDBDB@BA" ],
														"encodeOffsets" : [ [
																106313, 31259 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510181",
													"properties" : {
														"name" : "都江堰市",
														"cp" : [ 103.627898,
																30.99114 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@NJFBB@DDDFHFDLDLAR@XDNHHJNPJLHLHNFNHHFFLDBJ@D@@@DBD@BF@@ABCD@HAD@D@DDLBDBBBBBH@B@F@F@BAJADAF@D@JAF@B@BADCBEBEBCDA@@BAB@@@B@BDFFJHLFDBBDFBFBD@D@F@FAD@D@DBBBBDFDDDDBDAFCF@D@B@DDDDB@FBDBFFBHLHJBFDH@D@DBD@BBBDDBDDFFDDDBDAFBDDB@BDFBFBL@FBFB@FBFDFDHJHHBD@F@J@BAD@D@H@BADABCDCF@BFV@DBHBJ@H@F@BAFCDINIHBH@F@H@D@BDDDFHLBDBF@BCDCFABCH@DAF@DAD@BAFBBBH@B@DADAFAF@B@HBFDDDBHAB@D@FBJ@D@JBFBDDDFDFB@D@DADABABCJBHAFAFABBBBDDBBBBB@FBNDF@D@HABADAD@DBBBHBHBBBBBDDDHBBHHJGDABCDEBADEDED@BA@CAGAG@A@CBAFE@C@EDEDCFCF@BABABAAA@CFG@A@AACACEC@ABCB@DABC@A@CBABGBAHEDA@C@E@I@GAEACCECCECGECCCCCEECECCECE@GACGKCGAEACAE@C@CBEDCFIFCBCBCBABE@A@C@A@ABAB@BAD@D@B@B@HGJMDCDABCBABADCJAHCB@B@HBB@B@@C@CAGACACCG@A@A@ABABCHGBA@A@CAC@ABC@EDEBE@CFIBABAJ@BA@CBCDCHCBCBEAO@EHEFCD@DBL@H@BABACEA@A@U@GAKCA@G@CAOGEAE@C@E@IBC@AAAA@ABENIFAD@BA@C@GDMJW@@FAFIBAACEQ@A@ABCJIFEDCFABABAHQBA@@@AB@DC@A@E@ABADAF@DAB@@A@ACC@AAABCDUGGAB@BA@@@A@C@@@A@@@EEA@@@@@AAACAA@C@ADG@C@AAG@E@G@G@A@@@@@GCK@@C@@AAAAEAKACGIAAABCBC@AAACDABCBABABAD@B@BA@ADIBABACAC@A@C@@AECA@C@C@CBAAA@E@EAA@@CAA@A@AACEIEECAG@IAAAAB@B@@@BCB@@AB@@ABA@A@@BA@@B@@ADA@ABAB@@A@A@@@AB@@@B@B@BAB@BA@@@CB@@A@@@ABAD@@@BA@@@@B@@@@G@CA@ABE@AB@@A@C@@@A@A@@BABA@A@@@A@A@@@A@@@ABABAB@@A@A@A@CBABABA@@@C@CDE@CBE@M@C@ADGDCDGBCB@@AB@B@@ABA@@@AAA@@BABA@@DA@@BA@@BAAA@A@@@A@A@@@ABA@A@@@A@A@AB@@ABA@A@A@A@A@@@A@@@A@A@CBCBEDGBEBA@A@A@CAA@ABA@@AAA@@AA@@A@ABA@@DA@@BA@@AC@A@A@@BABA@@BE@@BCBA@C@@@A@A@AB@@AE@UAABENEJILIDMD@@@@CBGB@@@@EBE@KBKAIAQESCE@SCmG@D@@AB@@ABCF@BA@ABAB@@@B@BBBBBBD@BBD@@BBB@@BBDAJ@B@@EBAB@@C@CBCB@BAHCJAF@DA@CBABGAA@C@A@C@CBABAJABABI@ABOHC@C@A@AACAAA@@@@AAEAABIH@BAD@BBD@B@DAB@DCBA@C@CBC@C@C@C@E@C@C@ABABCBABA@AAA@CBEBE@CBCBABAD@JAFCBC@C@KBEAGAC@CD@DCHADCBCDEBEAC@C@IDGBEBMFA@G@EAC@@BA@BBBF" ],
														"encodeOffsets" : [ [
																105916, 31620 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510129",
													"properties" : {
														"name" : "大邑县",
														"cp" : [ 103.522397,
																30.586602 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@ACDC@E@E@CBEDEHCDAFIFGDAFAF@HBFCFGJGNGBEFEDCFAPCJ@HAFADCDCF@HBHFLLRPNHHDF@FAFAFGBCBEBEBCFAJBDABEDEBADAFKDI@EBCFAD@JBFBFAJCBAFBHHDFBBHDDBHFBDD@BBDAB@@ABOBABCFAHIFEFAH@DBBD@J@F@BFDJHJHJJDBF@D@HCJKFCHAHANBPHNFNFFAFCLIPOFAD@DBFDDBF@FCBCBAFAN@DBFFDDB@D@DEHAJADADADCBAF@H@F@FEDABABCBE@ABABCBADBFBDBBBD@D@JIBADCNIDADADCDA@ABABCHGHIBCAAAE@E@E@C@UBCBCDCBA@CAC@CDEDABCBA@CB@@@BA@A@CAE@A@ABC@C@A@@@@@@@C@A@@@A@@@@@A@@AA@@@@@A@@@AB@@@B@@A@@@@@@@@AA@@@@A@@A@A@@AAB@@CB@@@B@@@F@BA@@AG@@AA@ACAC@AA@@AAACCMAE@EAA@ABEDGBEFGBCBC@CGGAAAAAC@CBEDEBABADAB@JDF@D@D@DAHAD@H@H@DAD@D@DABBBBBBTPD@NDD@BA@ADABABAAAACACAC@ABCBCBAB@F@BA@@@A@@CACAAC@A@CB@@CAE@AACB@FADBBBJDDBFHFDHLFHDHDFDBF@DBFDDBBFFDDBDBD@D@DEBBBB@BBBFDD@DABBF@@D@D@D@@JDD@BABAD@D@DBBBDDBBB@B@DABABABCFADENKNILGDCHO@ABC@@HMDEBGBAFSSCGBC@AACAECCI@C@EAG@CAACAAAAA@AAGBK@CACCAACAEAECCGAEC@@@@CACC@A@ABABA@@CAECECGECFCDIHADADBBBBBBADABGDCBGAC@A@CBABABCDABCDCDA@@@ACCAC@CBCBCDEFGFE@CAC@AAECGGEECACAC@ABABCB@@A@AEAGCACACAAA@ABABC@@DE@@D@@@D@BB@ABC@A@CBEAA@CCGAAAAC@CBE@C@E@KACBGBC@EACAC@CACBA@C@A@ADCCA@C@C@A@CBCBCBADCDCBC@CAAAACCCA@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@AA@@B@@@@@@@@@B@@A@@@@@@@@@@@BB@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@B@@@@@@@@@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@BB@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@AB@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@B@@@@@@@@A@A@@B@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@A@@@@@@@@A@@B@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@B@@B@@@@@@@A@@@@@@@A@@@@@@@@@B@@@@@AA@@@@@@@B@@@@A@@@@A@@@B@@A@@@@@@@@@@@@A@@A@@@@@@@@@@@A@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@B@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@AA@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@A@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@AB@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@B@@@@@@@@@B@@@@@@@AB@@@@@@@@@@@B@@@@@@@@@A@@@@BB@@@@@@@@@@@@@BA@@@@@@@@A@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@A@@@@@@@@@@B@@@@@@@@B@@B@@@@@@@@A@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@A@@@@@@B@@A@@@@@@@@@A@@@@@@@@B@@@@@@AB@@B@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@BB@@A@@@@@@@@A@@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@BB@@@@@B@@@@@@A@@@@@@@@@@B@@A@@A@@@@@B@@@@@@A@@@E@IFEFIDIBIBICA@AA@ABCACACAAAAA@@@A@@BAD@BAB@@CBS@CBA@ADAFA@EBA@@@@B@@BJ@BABAFAFAD@FAB@@ABEDIHADEFIJCFCB@BC@MFCBEDE@CBA@@@@BCDABAD@@ABEB@@@@CAAAA@@@A@@BEBCBCBI@A@A@A@AA@ACAEEAAA@@@A@@@ABC@CFEBUPGBE@IIEIECIAG@IDKBG@MAKCCCAC@CBELIBEBGAIEICAC@ONGDIBEBEBEAKCCC@CCACACACA@CBEAECCE@IBEDCDEDABC@A@KGG@I@EBEDCDAF@NABCBGAGAA@CBCD@BADCDABA@CAEAEAC@E@OAKBKDAFBFDJHRDTCLEFABKJEHAH@H@DEBC@ICGAEDGDCHCH@FBD@VBFDHFFDJ@LCL@LBJAJCFEFEFAFAHEFCBI@I@KDIFEHGVEDGFGDEFAFDJ@HEFCBI@yYIAE@AB@F@DDV@BCFCFSTGDGDIHCFOZELAJ@JAHHBB@D@BBB@BBBBB@BBBD@B@B@DBBDBD@DBDADBLDBBBBLFNFP@P@DBPLPJN@F@B@DAFCNGFAHCJEPGLCBAB@@@" ],
														"encodeOffsets" : [ [
																105596, 31534 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510183",
													"properties" : {
														"name" : "邛崃市",
														"cp" : [ 103.46143,
																30.413271 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@BA@@@@@@@@@@@@@B@@@@@@B@@A@@@@@@@@@@@@AA@@@@@B@@@@@@@@@A@@@@@@@@@@BA@@@@@@A@@@@@@@@@A@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@BA@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@AB@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@B@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@AB@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@B@@@@@@@@@@@B@@@@B@@@@@@@@@@B@@@@A@@@B@@B@@@@@@A@@@@@@BB@@@@A@@@@@@@@@B@@@@@@@B@@@@@@@A@@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@AB@@@@@@@@@@B@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@AB@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@BAA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@AAA@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@AB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@AA@@@@@@@@@@B@@@@A@@@@@@@@@AB@@B@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@DDBDBBDBD@DADCBCDADADAB@D@D@B@DDBCB@D@B@DADBD@DBFBD@HADALBF@D@F@DAD@BBBBDH@DBBAF@D@BAD@BAAC@@@C@@@CF@@ADAB@BBBDBDBDBBHBFB@@@DABABAD@DBDBFFHHFDBBD@DBF@HEFEDCDADAD@DBBD@@B@DCDCBADCBABADAB@D@HBDAHCBABCAAAAAABCBCJGDCDECCAA@C@C@CDCHCJINMPYFGLQLKDCBA@A@IBI@CDCJK@A@ACECCC@ICIEGCCE@C@A@AFCFAF@D@DB@BBFFDPGACAA@CB@@AD@B@D@B@B@B@DAA@@ABCBC@C@C@@AAA@A@CBABC@G@CAA@CC@C@MAA@@EBA@CAAAA@EFABA@G@E@CAAA@A@A@CJKJK@C@CAC@AA@A@A@IDC@A@AACCAA@AA@A@CBAACE@@AAACAA@@CGCCAAA@C@AACBGBA@@BB@FB@@@BE@A@EAAA@CAA@@E@CBEDA@@DAD@@@BBDBBBB@@B@DBF@BDBB@B@@CF@@GNC@GBABKJEBCBGHCBA@A@CAEAC@ABABCBAJ@DA@A@A@A@CACCA@CAC@CBEBEBGJA@CBE@I@E@G@C@G@C@IGKEIAGAG@GBG@C@ABABEBEBA@AD@F@B@DDHBF@B@@@DAD@BABC@C@E@GCIECAC@C@EBCBCDA@A@AACAACAE@AA@AAG@EBEBGF@@A@C@A@K@MBC@ACFGAAA@A@E@C@INA@C@A@AAEEEACAI@EAA@MAEAGCA@C@C@CBCBAB@DADCHA@ABC@AACAIGWICC@ADEAACCGEIAKAEBA@EBABC@ICECCCAA@C@C@AEACBEAEACAOKAAC@EBG@A@AA@ABCFCBA@A@ACEACECAAA@@B@D@HAHAD@@ABA@AAAA@S@CAC@AC@MECAMOMDM@G@GAC@CBA@CBAAICAACAeSICECEEGQCGAKCCAC@ABEAECCACCAA@GCA@EBEDADADBL@B@DABADAF@FABEFCFABCBC@CCECABABMNEFABA@C@@@CCACEKGIGGKQIQEEICCAK@K@GA@@ABABEFA@GDGBWDWBSDOD@D@DDF@FAHADGFADBF@H@HAJ@JC@IBCDAFAFDNDLDLDLCFEFCD@HDHDDDBHBDDDFFLB@B@BABAFBFBFDHJNLJLJJNNTX@H@DCDEDGBCBADDJBHBHBDADAFCDBREFBBDDDD@FBDBD@BGN@BDLDBD@DAHEJAB@D@B@BB@DB@@B@BADQHIHADBDJFDHLJFJJFFD@@D@HBB@BCBED@D@@D@BFH@DBDBBB@@B@@B@@BBFDDDFDDBJBDDBFHFF@DEJAFCB@B@BBDD@FBFBDBB@BADCBC@ADCDAB@HBHBDABA@MBEDCFCFAJ@H@LHB@D@BAFCDCFCJAF@DDBFAF@DDBDBDBDB@DDDLDFBFAFAJAHCPMD@DBFJBJAHAFKJAF@DBDDDLDNBH@LAJCH@JBFDFJJJF@HAVOFADED@BA@@B@@@B@BBFFDB@BBBB@B@B@J@DADAFA@AB@@@B@BBDB@@@@FABA@@BCBADC@A@@B@DAF@FCDANED@@ADADEJIFEBCJGFCBA@@BA@EBCBEBEBA@AAI@@@A@@B@FAB@BEBCB@DAT@DA@@BA@ABC@AB@@@B@BBBBBDBDAD@BBBB@JDJAJAJCFEJEF@@@B@@@@@@@@A@@@@@BB@@@@A@@@@@@@@B@@@@@@@@A@@@@AA@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@A@@@@@@@@@A@@@@@B@@@@@@B@@@AA@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@A@@A@@@BA@@@@@@@A@@@@@@B@@@@@@@@@B@@@@A@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@B@@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@B@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@" ],
														"encodeOffsets" : [ [
																106013, 31191 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510182",
													"properties" : {
														"name" : "彭州市",
														"cp" : [ 103.941173,
																30.985161 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@@DBBB@B@@BB@B@@B@@@D@D@BAB@@AB@DABE@A@CBC@CBABAFEFCFEBAB@B@B@BBB@FDF@BAD@BAH@BBD@D@FBFDDBDDDBDBB@B@DCBCDADABAB@D@DBD@DBBBBBBBBBBB@@B@DAD@DEBAAA@CAA@AAC@A@ABABABC@EBADCDCDEFE@C@E@C@ABABABAB@BA@@BADCFEDC@A@C@AAC@ABA@@BAB@B@DADCBC@C@ECEACCAA@A@C@CAEAECEEECEEEEECEGAEAE@G@G@C@C@E@ABEBADCBAHABABCBABC@ABADEB@DADA@ABCBCDAHCFAJCBABCDCBC@A@AAACAAACAAC@EBCDC@ABADCDC@ABAAEAACCACAA@EBCBCB@FI@@BAB@B@BBB@B@@@B@BC@@B@B@@A@@@AB@@@@@BAA@@@@@A@@@A@E@@A@@@@@@@AB@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@A@@@@@@A@@B@@@@@B@@@@@BB@@@@B@@@@@BA@@@@AAAA@@@@@A@A@@@A@@A@A@@A@@@A@A@@@ABC@AB@@@B@B@B@DBB@@@@AB@B@@A@@B@@BB@@@B@@@DD@B@@@@@B@@@@B@@BB@@@@@FGBDDBB@@@@@@@B@@@@@DA@@@@BA@@@@@A@@AA@A@@B@@@@BB@@@@@@A@@@@B@@@@@@@BB@@@A@@@@@@@@@@@@A@@A@@@@B@@@@@B@@@B@@AB@@@D@@@@@B@@@BA@A@@@AHE@@@AAA@A@@@@BAB@@@BB@@B@@@DA@AB@@ADA@A@@B@@@BABA@ABA@@@@@A@A@@@A@@B@BC@AB@@@@@@@B@@@B@@@@@@@B@B@@@@@B@@B@@@@@@@@B@@@@@BA@ABA@A@@@@@A@@@@@@A@@@@AB@@A@@DA@AB@@@@AB@@@@@@AB@@@@C@AA@C@AAA@@@AADA@A@AA@@@@A@@@A@@AC@A@@@A@@@@@AB@BC@@@@@@@@@@B@@@@@B@@A@@A@@A@@@@BA@@B@@@B@DAB@FCDCCE@AACBA@@@ADA@AAA@@@ABA@@A@@A@@@@@@@@@A@@B@@@@B@@@@@@@@BA@A@@@@A@@A@@@@@@@ADC@@@AEA@@AA@@BAAA@C@@@@A@@A@@A@A@@AA@@@@AB@@@B@B@B@@@@@@@BA@@@@@@BB@@B@B@@@BAB@@@BA@@B@@@B@@@@@@@@@@AAA@@A@CAA@@@A@@AA@CA@AA@@A@A@@@@@@B@JB@@@@@@B@@@@AB@@@@@@@B@@A@@@@@@@@@A@@@@A@A@@@@@@A@@@A@@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@CC@@@@B@@@@@@@B@B@@@@@@@@@@@BA@@@A@@@@BAB@@@@A@@@@BA@@B@@@B@@@B@@@BA@@B@B@FA@@@A@@B@@AA@AAAA@@B@@@@AB@@@@C@CD@JEB@@@@@DAB@@@B@@@B@@@B@BA@@@@@A@@@A@A@@@@@@@@@@B@@@@@@B@@@@BA@@@@@@@@@A@E@A@@@A@A@@@A@@A@@@@@@A@@@@B@@@@@@@@@@@@A@A@@B@JAB@D@B@DABA@@BAB@DABAB@@A@@@@BCAC@A@@@A@@A@@@@@@@@A@@@@B@@AB@BA@@BA@@B@BAB@@A@@@@@A@@@@@@B@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@A@@A@@@@@@@@@@@@@BA@@B@@A@@AAAA@@@A@@DAD@B@@A@@BA@A@@B@DARC@@B@B@@@@@B@@@A@@BA@@@@@B@@@@@@@@@@@B@@@@@@@A@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@B@@@@@@B@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@B@@@@@@D@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@A@@B@@A@@@@@@A@@@@@@@@@BA@@F@B@D@B@B@B@B@B@@@@@@ABC@@A@@@@@AAC@A@@AA@@AA@BAAA@A@@@ABA@ABA@@B@B@@@@BB@@@B@B@D@@ABAFADAB@FA@@@@HA@@D@B@@@DAB@@@@A@CB@@A@@@@@A@@@@@@@@B@D@BA@@B@@@@AA@A@@A@@@@@AB@@@D@@@B@@B@B@BB@B@@@@@B@@CBA@AB@B@@@B@B@@ADA@A@A@@B@BAFEDC@CBC@CA@AAA@AA@ABCDCBC@E@A@ABC@@AAAA@AAA@A@A@A@ACAAAA@@A@ABCDC@A@C@@EAA@C@@CAE@AACA@CACB@AAA@A@A@A@C@A@A@A@A@A@@@CAA@@A@@@CAABCAA@A@AA@@AABA@AB@DAB@@ABC@A@A@ABA@ABA@@A@ABEBA@@@A@E@CAG@E@CAICC@C@CBCBCBA@YCE@EBGBGBK@EBEBGFEFABAB@B@B@BBD@B@B@F@BADCFADAB@B@F@B@B@BA@ADOHABABAB@B@D@B@BA@CBA@A@AA@AEECAAAA@A@A@@@@@G@A@CAAAAAGGAACACAGC@AA@AC@AAA@@CAA@C@C@A@C@@@A@@@@@BC@@@@@A@@A@C@AAA@@@CBA@ABA@@@A@A@A@AAA@A@AAC@E@C@A@AAGEAAAAGAAAAA@A@A@E@@@@@C@A@AAAAAAAA@A@ABCDA@A@@@A@@A@C@@@AA@@@C@ABA@CBCDEDA@A@A@A@MBIBAAE@I@E@C@C@CBADCBA@ABA@@@C@A@CAI@A@A@CBAB@BA@A@ABC@C@ABA@A@G@C@CBABCBADCBCBC@C@ECC@A@EBA@C@AAC@@A@A@EAA@AAACA@@A@AB@@A@A@E@A@C@A@AB@@@B@@@B@@@@@BAB@@AB@@AB@D@BA@@BA@A@@BA@@BA@@@A@A@AB@BA@ABA@@BC@A@@@A@A@A@A@C@A@A@A@AAAA@@A@A@ABED@@@@AD@BA@@@C@@@ABA@@BCFABA@ABA@CBA@A@@BA@HHCVADBB@BDD@B@BA@CBE@CBAB@B@F@BCDA@@B@@ABGRABABEBCDEFIJAD@B@BFRBDABEJEB@@IXCN@H@DABC@EBMJAF@BBBBBD@JAF@D@F@FBPHDBH@B@LDHBV@B@B@DFABABG@K@CAC@EDGF@FBPAFADGDCDAD@DABI@ABABEJ@DAFCF@FAD@BBD@D@BABGHADAB@B@B@BDHBDBDBH@D@DA@A@GAA@A@GDIBCDABABADCBCDINGHA@A@C@C@ABA@AB@B@B@D@BAFABADADEDEJCDAF@D@DBFBDBFDHHLBD@HDFDFFDFDDFDDDDHFFDDDDFBDBF@H@J@F@DCBGFABAHAB@D@BADCBA@AD@BFDBDBD@B@BEH@DBBABABABE@EDCDCF@F@DEFAB@D@BBHBH@DABC@CFCFABCFADCBIH@BBDDDDDJFFDDDDDDDDD@DBD@BB@DBB@B@N@F@DBFBB@BBD@FAFB@@DBDBDBD@DBDBBF@DBFBD@D@D@BDDHFHDLDLDHBFFD@FDJBFDD@B@@@DA@ADAD@BBD@DA@@BAB@B@@@" ],
																[ "@@@@@@@@@@@@@@@@@@@@A@B@@@@@@B@A" ] ],
														"encodeOffsets" : [
																[ [ 106294,
																		32185 ] ],
																[ [ 106606,
																		31777 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "510184",
													"properties" : {
														"name" : "崇州市",
														"cp" : [ 103.671049,
																30.631478 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@AEAAB@@AD@FBH@B@NEFAHAJCD@D@FBFADCDABCDG@CDCD@HBFBLAD@D@DABE@IBCBADADAF@FADAB@BBB@BADABABAD@D@F@D@D@D@D@DAD@B@DA@CBA@C@AAC@ABC@AJGBAFBBB@@@@BBDBBBB@D@D@PGBAJ@BABABIBADAD@B@D@B@HBBADAB@@CBEDIBG@ADADAD@@@BAFA@@@ABIAC@AA@AA@@AC@AACAAAA@A@A@@BABAB@@ADEBA@@BA@@@CnHTDF@TDRFJBLBLAF@FA@@@@HADA@@@@NCJCJKFIFMBAVBF@DE@A@@@AAA@@@ABA@A@@BADA@A@ABA@@@AAA@A@AB@@AB@B@B@@@FEB@BAB@@A@@@@@@@A@A@AB@BAB@D@@AB@@@@C@ABABAB@AC@E@E@E@EBGBIBEDCDEHMDE@CBAAAAAAA@@AC@A@@B@@@@@@@BA@@@@@C@A@A@@@@@A@@@A@@@@@AB@BA@@BA@AB@@ABA@@AA@@@A@@BA@@B@@@@@B@@A@@@@@A@@@A@@@@B@@A@@BA@A@@@@BA@@B@@@B@@ADA@@@A@@@@@@@@@A@@@@@@@@BA@@@@@@B@BA@@@@@@@AB@@@BCBA@CB@@@@@B@@@B@@A@@BA@@@A@@@A@ABA@@@A@@@@AA@@@@@A@@B@DADCJMBG@C@C@ABCDCDGDINMJMBCBABABC@A@C@C@EBC@EAE@EACAC@AEGAE@GAC@ADKBABCDABAABA@ACCCECE@CAA@EBC@EBE@AAAA@CAACAEEAA@ABCBABAB@BA@CBAFADA@A@@A@AAG@G@@@@@A@IBIBM@K@ETABAHCFGN@@AD@BGPCDKHMJMLCFEBADABABCBA@A@AACCAACAC@C@ABABC@IC@@@C@C@CE@AACBC@ECAA@AAAAACFC@C@CACAECAECAECCAE@CACECGEGGKECEGCAICAACAEBA@BD@BBF@DA@@D@BBDDBDB@@@B@@ABE@A@ABADAD@BBDBDBDBBABABCB@BABC@MCC@SOAAAAAACBC@C@CBG@G@C@GBCBC@C@E@ICA@CBABABCFAF@DBDBBBBHH@DADADEHAFCHAF@BBB@FBFDNBDBB@@BBD@DB@BBB@@BH@@ABE@@@A@@@A@@DA@BB@@@B@BB@@@@@BB@@@@@@@@@BA@@@A@@B@@@B@@@@BB@@@B@@@@@B@@@B@D@@@@@@@B@DAD@B@BBF@D@BAB@@A@@DABADCBCF@DBD@DABCDADAD@V@D@F@FBFBBADGJGHADAB@BCBCDCBCBMJCDABIJC@C@AACAEACAABADAB@BAFADABCBEFE@G@E@ABCDCBCBIBGBCFC@A@CCEECAM@EBABADEDE@CAECCAC@EBOPKJEDEBMEMEOGMAGBGBEDILGDC@E@CAIIIGIGEC@A@E@IACCAG@EBEFGJEBADABAP@BA@CBAAC@ACGECAGCAACEGGEAABIDEBEAIAC@EBAD@FCJELCBABCFAFCBIAEBADAFAFADEHEBEBE@GCMGQOKKGEGAE@CDCDEBGBI@ODEBCDEFAFMHIHEHEDGAE@EBCBEHEJCBGDCFAF@D@F@FCDBD@AFAJFLNDNDJDFJBJHHDFFDFJTDFLFHDH@JCJBJBJATMHADAD@B@FBB@B@FADAD@B@B@D@DBLBBBB@DAH@HDFDF@BADGFGBAHCDAD@DAD@FBB@D@D@JIFIBIBCDALCF@FDNHLFJHHFJAF@HPHNNRFFD@LBLFHDLFJF@@H@H@P@JBLB`^B@B@B@DAB@D@@@" ],
														"encodeOffsets" : [ [
																105916, 31620 ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));