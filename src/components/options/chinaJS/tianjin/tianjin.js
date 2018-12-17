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
									'天津市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "120103",
													"properties" : {
														"name" : "河西区",
														"cp" : [ 117.217536,
																39.101897 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@B@B@@@B@D@B@@AD@B@B@@@B@B@B@D@B@@@DB@@@@@@A@B@BBBB@@@@@@BBDBB@@BDB@@@@BBD@@@B@BBBB@@BBB@B@@@@@@B@@@@@B@@@@@@DB@@B@DBB@BBB@@@@@@@@@BBDCHGDGNIJI@ADGBGBABADAHCJCFCJAD@B@@@L@HANAP@@C@@GECC@@A@@A@ABC@ABC@CBA@AA@C@@@@@EAE@@DC@AAAAA@ABABE@AC@@@@@@AAA@C@@@@@@@BG@@@@@@@@@@BG@@@@@@B@A@@@@@A@@@@@@@C@A@A@C@E@M@@@@Dm@M@@@ABEHIJGJGHABOEA@@@@@EAEA@@@@@@@@A@@BA@@BA@@@AB@@AB@B@@AB@B@DAB@DAF@DAB@D@D@B@@@@AB@B@B@@@B@B@B@@@B@@@B@@@B@@@@@B@B@B@@@B" ],
														"encodeOffsets" : [ [
																119992, 40041 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120104",
													"properties" : {
														"name" : "南开区",
														"cp" : [ 117.164143,
																39.120474 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@A@A@@@@@@B@B@@@@@@@@A@A@@@@B@@@@I@G@@E@C@CAC@C@A@A@@@A@@@A@@@@@A@CAE@C@I@@@K@C@A@@@A@A@A@@@@@A@@@A@@@A@@@A@A@A@@@A@ABA@@@@@A@C@CBA@CBE@CBA@C@ABA@@@ABA@@BA@@B@@AB@@AB@IAYIA@A@A@A@ABA@ABA@EHGFCDGFABAB@@@@@@@@ADCDABABABCDCDCHABABAD@DAB@DAT@B@D@BAB@@@BA@@@@@ABCDABADA@ABCDABGFMLFB@BB@@@@@B@@BB@BB@BB@@@BBDDB@BBCB@FD@BAFD@@@@@@@@BB@@@@@B@@BB@B@@B@@@B@BADEBAB@B@BAFBFBB@@BBABA@A@@A@@@@@@AAA@@@@@@D@B@BA@@@@D@B@B@BA@@B@B@B@B@@@B@@A@@B@@@@@@@@@B@@@@@@@B@B@@B@ADB@@@@D@H@@@@@@@@@@@D@@HB@D@L@B@@@@@@@@@H@@@@@@@H@B@@@B@D@BBB@@A@A@IAG@A@A" ],
														"encodeOffsets" : [ [
																120007, 40074 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120106",
													"properties" : {
														"name" : "红桥区",
														"cp" : [ 117.163301,
																39.175066 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@FCB@BAB@FBB@@@@@B@@ABA@CAA@E@A@ADC@A@@@AAA@ACAAA@@A@BA@A@@BADADABAFCBCFEBABADCB@BAA@AAC@A@@@A@G@@@@@@@G@@@@@@@@@A@K@C@A@@GC@@@@@@@@@@@G@C@@@@@CA@B@AA@A@@@@@@@A@@@@@@@@@A@@@@BA@@@A@A@A@A@@@ABA@A@C@@@@@ABA@C@@@@@@@BB@B@@@@B@@@@BABAB@AA@EAEAABA@A@ABCFABA@@@A@@B@@AB@BAB@B@B@B@@@@@B@BBB@B@@@DBB@@@D@B@@BB@B@BBB@@@B@B@B@B@B@BBBDHBDBBBB@@BBBBBBFB@@BB@@B@BC@@@@BAB@B@B@LBJ@@@B@@ABA@AB@BAHC@@" ],
														"encodeOffsets" : [ [
																119980, 40125 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120102",
													"properties" : {
														"name" : "河东区",
														"cp" : [ 117.226568,
																39.122125 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@B@@@B@DBFB@@HBB@DEBCE@BGGA@C@E@AHBN@@@N_E@CAKAG@AAAA@@@ABIBC@CBABG@CBCBA@@FA@@@@B@@@@@^ERANCGE@CD@AG@@@@B@AEAAAEACA@@AA@A@AACB@@@BA@BFWF@@@A@@@@@AA@A@IA@DA@@B@BA@C@A@ACCDAACEAAAA@C@C@@@AC@IBEDIDGDCBABABAHCH@BIJMJCHGHCD@@CDEDCFADAD@D@DABA@@@C@BB@@@@@@@@BBGDA@CDA@@B@B@@@BBD@@BB@@B@BBHBDBB@@BB@@B@@@B@BBCFEDC@@@@@@@@@@NJB@@@B@J@L@F@L@@D@DAD@D@@@@@BB@@@B@B@B@B@B@@@D@B@B@B@B@@@" ],
														"encodeOffsets" : [ [
																120075, 40099 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120105",
													"properties" : {
														"name" : "河北区",
														"cp" : [ 117.201569,
																39.156632 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DBB@@AB@JBBBDBJKDB@@B@@@@@@@@@DBBBB@BBDBDBBBB@@@@@BA@@@@@@BABAFBHIDABBBA@@B@JJDDDB@@BABABABADCB@BABABA@@@AB@@@@@BABA@@BABAB@@A@@AA@@AACCCCA@AAAABBJ@@AHBBC@AF@@@@@@@B@@@@@B@@@@@@@BBBBDC@@@@@A@G@I@@A@A@A@A@C@@@A@A@A@A@A@@@A@@A@@@@@CBC@C@CK@E@K@I@A@@@A@MI@@@@@@@@@@CDEFAD@A@A@@@AA@@AA@CAGAAAA@@@AA@@AC@A@@@A@AB@DCB@HCAA@@@@@@@@AAA@CAGAEAA@A@ABABABAB@B@BBH@J@B@BABA@CDABABEFADEDABCBCBAB@@@BABB@@@BBDB@BBB@B@@@BCD@B@B@FBB@DAB@BA@@@@@A@EAA@ABA@EDB@@B@@@@@@BB@@D@DBH@DBD@AB@@@@" ],
														"encodeOffsets" : [ [
																119993, 40130 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120101",
													"properties" : {
														"name" : "和平区",
														"cp" : [ 117.195907,
																39.118327 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@D@L@@@J@DBF@D@B@@@@@B@@@B@@@B@B@DBD@D@D@FH@J@@@@@@A@@B@B@@@@@@@@@@A@A@@@@B@B@@@BABABABAB@B@FBHBDBB@D@@@B@BA@C@CBCBCDEFCDC@@AA@@@@@@@@A@AAA@CAA@@@CA@@@@@@@A@@@@@A@@@@A@A@AA@@AAAAA@@@C@AA@@@@CA@AA@CAAA@@@@@@AAAAA@B@@@@@@@CA@@A@C@A@A@A@@@A@A@C@@BA@C@A@@@A@A@" ],
														"encodeOffsets" : [ [
																119992, 40041 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120110",
													"properties" : {
														"name" : "东丽区",
														"cp" : [ 117.313967,
																39.087764 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@AA@AAC@C@G@C@EAAMAC@AACEAE@K@@AAA@IAIEA@CBOFIBOHA@@@A@@@@@@@@AA@A@@ACI@AAC@@@AAC@A@@AA@@@@@@@A@A@@@@@@@@@A@AAC@A@@AC@@@@@@@C@@@@AC@A@A@@@@@@@@@@@A@AAA@G@@A@@@@@@A@@@A@A@AAA@E@@@@@@J@@@@@B@BAB@B@@@B@B@D@B@L@JAB@@@D@D@BBB@@@B@@GBEb@@C@C@@@O@AAA@C@@@@@@B@@@@@@@@C@GV@AACICG@AAC@CBM@A@AY@OBA@@@C@ABE@ABA@@AEUE@IQ@@D@@AEMAEFCDADFB@B@ACAED@@AAKBCBA@I@@@AAACAECAAGECCCAC@@@A@@BADCFCF@BCDILCFCBA@A@CAC@ECEAC@A@CBC@CB@@CB@BAB@@@B@BBDBD@D@FADADCBA@CAA@@@CCECGEICCA@@GAA@KCE@G@G@A@GBC@ODID@@CBMFGFCDEJ@@CF@DAFCH@BCBCBA@@@I@GAG@A@@@GAG@CBE@KDIBCBAB@BEBILGFCDQHIBKDC@G@MBC@O@MBGBK@@@A@@B@@@D@DBBBBDFBBDCBDB@D@B@@A@AB@@CJBB@B@@B@@@@@B@@XEAEB@@A@@DABBB@B@@BB@BDBFBBBFA@@@@@BHC@@DHFMDQB]F@@@@A@@@@@EB@@ABAD@DAHAB@DADAJ@B@@BBBBH@LBDBF@M`@@M@GA@B@F@DHBAHF@ADCFA@GA@@EACAA@@@A@@J@H@B@@@@CDAAAA@@@@@@A@@@@@A@@@@@@@E@@BADGA@BI@AABBBBB@DDDDBB@@BB@@@BA@ABAB@@ABAB@@@@A@@B@@ABABABA@CDABABABAB@@BDHFDDFDBBDDHDHDJDLFJDF@LDFBH@LBBBLFAJCZEAAFB@@BQCAFD@DDDBB@BBDAB@LEHAFANCRCFA@ABCB@JBD@@@B@NAH@DAB@D@F@H@F@J@H@JCF@FAF@F@B@CD@BHDFBJB@DNBBA@@B@B@@AB@B@B@@ABAB@@A@@@A@A@@AACE@ABAACTCPHBFFBZADBFDBCHJJKRCP@JGJCBA@@FABA@@AQGIDA@@DAL@LDJD@G@@CEKEEBAAVEBB@BADDBLDBBADAB@@BB@@BA@@BABAB@AABA@Q@AHCJCHCJCLED@JAFAB@@@BBB@@@JAJ@HCH@BA" ],
														"encodeOffsets" : [ [
																120391, 40118 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120112",
													"properties" : {
														"name" : "津南区",
														"cp" : [ 117.382549,
																38.989577 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@D@NAH@D@LCJARGDCHEJKFA@ABADAJALCF@DAH@HB@@B@H@HBJ@@@B@DADA@ADGBE@CDE@@FIDCHENEDA@@JCPCD@HAB@H@H@F@LDB@HB@@DBJDHFFDDD@@B@DBB@DABCBC@E@CACAC@A@A@@BA@ADA@@DAD@DAB@D@FBFDD@DBB@B@DADEJKDC@ADEDEBC@AB@@@D@DBDDHFBBFDDBBBB@FA@@HAHCBABA@@@@BA@@DC@ABABABABABAB@@@DAB@B@@@B@DBB@@@B@BA@@B@@A@@@@@A@@@AAA@AAA@A@@@@@AAA@@@@@AA@@@@@A@@@@@AA@A@AA@@AAAAC@A@@@AAAAC@A@@@A@A@@@ABE@E@@@AC@@A@C@ABCBGBI@AGAGBIHSNA@KCQMCFKCQEBGBGDWBODOC@EAMAI@@@AA@@@@@@AAECIEGCGEAAEC@@A@ACIEECGEECCCACCAEIGU@@ABEFEFGHEDEHABCBIJCDEFECECGEMIEEEAIE@@@@AAYOGCECECECECEAECECCAAA@BA@CLH@HD@@ELBD@BG@AHH@CHE@@BCNIA@DALABEFMAS@@@CBCDMNMJ@@MNGFIHKJHHMHIDDJFP@B@@EBcRBBB@PAJARX@FBBDBBBBBIFABBBJHBAJE@@@@FCAGDABBBL@LDDJJ@BEFHBBBKFNDCBADABA@EAICCDA@CBALAB@DAHCDC@A@EHICGBABBBBBDAHAB@EJ@BBFABBD@BBDB@@@DDAD@@ADKCM@CBGAEBGBMA@@AJ@@@@A@E@AAMPN@n@@C@@N@F@D@B@B@D@@@@@@@B@@@@@B@A@@@@@@@AH@@@@@@@@@@AH@@@@@@D@B@BB@@@@@@BDF@BABAB@BBBBD@@CF@FB@@@@D@B@@BAB@DAD@BAD@B@BB@@@DDHF@@@D" ],
														"encodeOffsets" : [ [
																120108, 40016 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120111",
													"properties" : {
														"name" : "西青区",
														"cp" : [ 117.012247,
																39.139446 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@AAA@@@A@@@@AA@@@@@@@@ECABC@@EDAAAA@CCAA@@A@@AAAA@@AA@@@@@A@@AEANKHEBADCBAB@BCBADCBA@@@@B@@A@@BA@A@C@ABS@CBA@CBCBABADGDCDCBABABADCBC@@@@@@@@BABAHEDCHEFGB@BAB@BAB@B@B@B@ZJJB@@@@@@@@FBFB@@@@B@PFBAHGHIJIFGBA@@NOBBF@B@@@@@BI@@NBHAFAHBDAN@LDBC@@BCCC@@A@AC@AACBAAE@AFIA@GBCBAAAABAHAJDFGB@D@DCBG@CBABKDAB@DCJDFBB@BABCDAMCLEAAGAFE@AIICC@KAKAACBBHED@@@@IFABIGAABAJEAAAACAAA@EQWIBOBA@AAdQFA@@@AEOCIJCNGGGLIJGHENM@@NINMDCDA@@T@NBFEBABK@CJBDM@AF@DGG@BGH@@AACFK@@GCG@DKB@@AA@ECCAGECA@@@@@@DABCBAAA@ALCCAACCACAE@MFMJIBGBaJYHWFGDIDKFIHQNMJIHQNONEDSPMNORMPGNSVEHMRGJGHGLURGFKFOHGBIDWLGBKDEDGFCBCDIHEEAAA@@AAIkD@HDRF@@B@DKDA@@BDD@BFDOH]LSDaHWBOBBH@@@BE@BDA@OBDHWHC@FJABA@CGCBCGAACCKHIDIFEB@@A@@AAAADUBACECGHWKABAFBBRFBHE@EB@BUFB@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@@@B@@B@@@@@@@@@D@B@@@BDB@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@BB@@@@@B@@@@B@@@@@B@B@@@@@B@@@@@BB@B@DBBBDLAHZ@BFA@@@@@B@@@@@B@@@@@B@@@@B@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@B@@@B@@@@@@@@@@@@@@@@@@@@BA@@@@@@@A@@B@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@AB@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@B@@@@AB@@@B@B@@@@@@@B@@@@@@@@@@@BA@@@@@@DJ@@@@@BDF@@@@@B@@@@@@@@@@@@@@@@@@@@@BD@B@@@CJCN@@BB@@@DD@FBENCNF@JB@BN@BHK@GBAJ\\F@AACDAH@BBAB@DDFBBB@FFB@BAB@@@@@@@DADL@BA@@DF@@@@@@@JE@E@@@@BEB@FB@CB@RDHBNB@EB@NDH@DKDGFBDKCAA@BCB@BCDBVFB@@DE@AF@HF@BBANH@@EBK@C@CB@@CFBDDD@DBD@FAF@DBDBF@FBJDBBBAD@BIN@ALDBADA@@BFBDBHDFBH@HBFBD@F@F@D@HAN@NAJCD@AA@A@AAA@@@A@C@@AA@C@@@AAA@A@A@@@@@A@A@ABA@ABA@@@A" ],
														"encodeOffsets" : [ [
																119940, 40092 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120113",
													"properties" : {
														"name" : "北辰区",
														"cp" : [ 117.13482,
																39.225555 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@HIHGFFJICABACCDAKGJGLH@@DCNILGJEGCEAHEJEHHFAHEBCBAB@BA@AB@@@DCB@BA@BBDDABAFDFBF@@@DDDB@BB@@@HI@EBI@CAA@AAA@@CICKMC@QBAD@@@B@B@@AB@@AB@@A@A@@@A@@BA@@BA@@MA@CIAEAGC@ADCA@E@E@EBE@IDG@I@E@G@E@C@A@CBG@MBA@@@C@IAA@AD@BEBQDMDEBGBKFA@CBAAA@CACCC@BERD@AA@BEFBDYBIKEAAKAG@EAKCE@ICKEICGCGCCCAAECCCGEACCACCIIA@@@ABAACBGJEAABAB@@@@@@AB@@@@A@AACACAAAA@AACA@@@@@@@@A@@@CAILCAAAIAA@@BA@CA@@@@BAC@CAG@CAC@@@AA@@@@@@@AA@@@GDABA@@BAB@BA@@@I@KAA@A@A@AB@@@@ADA@@@AA@@EAAAAAAA@@AAAAACCGAA@A@A@A@A@A@A@@C@IDMBM@GBC@E@E@C@EAGAG@EAGCCAEA@AB@BCCABKM@AJC@ABAAICEAE@CACAE@EBC@CAC@CCEA@DA@@D@DAL@FG@BMAAE@@GBEF@@CA@UECAADA@ADB@DBCLEACHCLG@MCA@@FMAGAQCA@@DEAA@AF@@@@@FIF@@@@@@E@@CB@@ACKCB@@@@@@A@ABA@EEA@AAQJ@DFBBB@@GAAH@FBDBD@B@FT@JBD@@@@B@@BABCDAFBBBAFBJ@@@@@D@BBFDBABABBDDBD@EJFBBDCFANA@AFDBPDFAB@HJDBDDBB@F@FLABARA@DB@B@BB@HFA@PXB@@@@@BBD@B@@@B@@@BDAAFAL@AA@@@A@EAAA@@AJF@GPD@AN@BB@B@B@@@B@FBB@B@@@BBB@B@@@B@B@B@@@BBB@B@@@B@B@BB@@CGJBPDFIDKD@J@B@@AFDXB@B@DIAAFNDCF@BHDBBFBLDBBA@A@CBCDABABAB@@AB@BB@@@@@@@@@B@@@@@@@@@B@B@@@BBB@B@@@B@B@B@@BB@B@B@@BB@B@FBF@B@@@B@BBB@@@B@B@B@@@B@B@B@@@B@B@B@@AB@B@@@B@BBB@@@BCB@@@B@B@B@@@B@B@BB@@B@B@BA@@@AB@@A@ABBHEFAH@LB@@@BA@@BB@LDFFDFCD@LD@DBBKJFALIA@B@BB@@@@BFDHBBG@@B@@@B@BB@@@@B@BE@@F@H@@D@BDBD@ADBBDBB@DAH@AH@@B@@B@DCHDBF@@@@HBBD@BGJ@BBAFJDFBVFLABCH@ADDB@@BBFBJEF@BAF@FIBALAFBDC@A@@H@AHBDFBD@@B@BB@B@AADEFCLBJADADMDEB@J@D@B@BKGA@ADEB@B@@@FBLBD@BE@@@@@@@@HD@@BDB@" ],
														"encodeOffsets" : [ [
																120140, 40274 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120115",
													"properties" : {
														"name" : "宝坻区",
														"cp" : [ 117.308094,
																39.716965 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@GBAAE@AFC@@@@@@@@@@BABABBD@H@BC@@@@HE@@BQB@BADAHCH@@BBJ@BD@@@@@@@BBDDBB@DBADBBB@@A@B@BADCHCD@B@@JF@FPGCE@C@EHDDD@FFCHEBA@@@@BBB@BB@@BBBB@@BBB@@BB@@B@@EDADAP@B@@AHBBB@CB@@A@ABA@AB@@A@@@@BAB@@@BA@@B@BA@@D@BAB@@@B@@@B@@@D@B@@@BA@@B@@@BAB@@AB@@@@@B@@@@FBDBCDIA@@@@AD@@@@@@ABEF@@CF@@A@EFEJEBIPCB@@A@CBABBB@DBBHBALEBANCDGDEBEACBCFEB@CG@CDEBCAAJBBBDD@HFCJGFC@AD@@@DGBG@AD@BPBF@BCN@FDAF@DQJABA@ABKJC@ABG@C@E@@ADCAAA@CB@@@@@@AD@BABIDC@C@A@@DJ@DDA@BBGDEDEDABEBEFMJ@@EDKHIFCBIHKJIFSLIHGFGFQJKH@@@@FDAB@FAD@@B@B@@@BB@@D@@@@B@@A@@B@@@@B@B@@B@@@@@@A@AB@@ABA@@@@@BB@@@B@@@@@@B@@@@@B@@@B@@@@@BB@@@@@@@@@@@@@@@@@@@@BB@@@B@@B@@@@B@@@B@@B@@B@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@B@@@B@@@B@B@@@@@@B@@@@@@@@B@B@@@B@@@B@@@@@@@B@@@@B@@@B@@@B@@@B@@@@B@@B@@@@@@@B@@@@B@@@@@B@@@B@@@B@@@@@@B@@@@@@AB@@@@@B@@A@@@A@A@A@@BA@A@A@AB@@@H@@@@A@@@@@A@A@@@@@@@@B@@A@@@AA@@@@A@@@@@@@@B@B@@@@@@@B@@@BA@@@@@@BB@@@@@@@@B@@@@@B@@A@@B@@B@@@A@A@@@@@@@@A@@@@@@@@A@@B@@@@@B@@A@@@@@@@@BA@@@@@@@@B@@@@@B@@@@@@@@@@@@B@@@@@@B@@@B@@@@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@B@@B@@@B@@@@@BD@@HD@D@AD@@@BAL@@AB@@BBAF@@F@ADB@AR@@@@BBBFA@AB@BA@@BD@@BCA@HD@AJE@@ACAAHBBB@@B@@H@AD@@@B@BCB@EAA@@@@AB@@@BGB@BE@@BB@@@K@@BBDDFEBDD@BA@@BA@BDNBAB@BB@@@@@B@B@BABA@@B@@@BBAB@DCDADAD@B@B@@BBB@BB@@DAB@@@@@DB@@DBD@FBDAFBHA@B@@DFH@D@DF@B@@@@@BFA@BH@HHKJAB@DA@A@CDABA@ABEDGBABABA@@B@@CB@F@@@@@@@@@B@BAB@B@@@D@B@@@B@DE@@@AB@BE@AFGACE@BABA@A@@@A@@A@@GAALB@@@AJFABBB@IR@DB@@DB@@DBAFEDBF@@JH@@B@@L@H@@BJ@JBBCBBB@B@@@@DCF@@AFF@B@B@B@BBB@BCJDB@@@@@@@@@@@@@B@@@@B@A@@@@@@@@BEB@BBB@B@D@LC@EHBDDBB@@FBHBD@D@NAHAPC@@B@B@@@BA@@B@BB@AB@DABAB@@@@@BBB@BBBA@@B@BCBAB@B@B@B@BB@@BADCD@BAFC@A@@@ACA@@@AB@@@@A@C@@B@@@DBB@@@@@BC@@B@@@BBB@B@@CB@@@B@@BB@B@@@@@@A@A@A@@BCDA@AB@@@B@@B@@B@B@@@B@@B@@@B@@B@@@BAB@B@B@B@B@B@B@BABAD@BADC@@@AA@A@AA@@BA@@@ABA@@B@BA@@@C@AB@D@@@BABAB@B@@@BBBBBB@DB@B@@@B@B@@@B@B@BD@@B@@@BC@AB@B@@@BD@@B@@@B@BCDAF@BAD@BAD@BBB@D@@@BB@BB@@@@@B@BA@@@E@@BAB@D@J@@@@@@@@CBA@@B@D@F@B@B@FE@@B@@@BD@@B@@@B@@ACC@A@@B@D@B@B@@A@@AC@A@A@ADAFCDE@@B@@@D@B@DBB@D@@@@@BADABABA@@@A@@AC@A@ABABABA@@B@HAH@FA@@BABAD@B@D@FAB@@@@BBBBH@DBBNFDDB@B@@AD@B@@@B@BBDHDDB@BBB@B@@@@A@AACCC@A@@@@@@BA@@D@BB@@DB@BDBBBFBB@@@ABAB@@CB@BB@D@DAB@D@B@@@@@BB@@B@@ADAB@@AB@@@B@B@@BB@BFBB@@B@@A@@BEBEBC@@B@B@BBBBB@DBF@B@@@@@@CBABCDC@@DAD@D@@BBD@BB@BABABCB@BABABBBB@DBBB@BA@ABAB@D@D@B@@@@AAC@ABABAD@H@@@@@DBB@BAJGB@@@BB@@BDDFB@@@B@@@B@BADG@ABA@@BAB@B@DDD@B@D@B@D@@AB@BEBA@@BAB@@@BAFAH@FAHAH@@A@@@A@@AAA@A@A@AA@@@@@@@A@@BAHCB@@A@@@A@@@AAAA@A@A@ABCD@@A@@@A@@@@A@C@ABA@AAA@@A@A@CBA@AABC@@@A@@@AK@@AA@@ABABA@@BA@@JB@@B@@A@@AAA@@AGA@@@@@A@@B@DBB@D@BBBAB@B@FEB@@A@@@A@@AC@AB@@ADADADAB@BABAB@BABBD@J@F@B@@@B@@@BADA@@BAD@BBB@B@D@B@BAB@BAB@@@B@B@@A@@@@@A@A@@@A@@@@BA@@B@@@B@@@@BB@B@@BBBDBBB@@B@@@B@@@BABADG@@@A@@@@A@@AAC@@A@ACAA@A@@@@@@B@@@BAB@B@BAB@@A@@@A@A@AB@@@F@FBB@@@@A@@@@@AAAAACAA@@@@@@AB@DAB@DAB@@@BA@@A@@A@AA@@AAAAA@@@@@A@@B@BADAB@@@BAB@@@BBD@BBB@@A@@B@@CA@@A@AAAEEAA@@@A@@@@@ABADA@ABA@@@A@@@@@A@@A@@@@A@@@AA@@A@A@@@@BC@@@A@AACACAA@@AA@@A@@@ABC@EBEB@@A@@@@A@@@A@C@CBE@A@@@@@AA@A@AAA@A@ABA@CBA@A@@@@@@A@@BA@ADE@@@A@@A@@@AAC@AA@@@@@@@A@C@A@ABC@@@A@@@@@@A@A@A@C@CBA@A@A@@@@A@@@@@C@A@A@A@@@AAACCCAA@@@A@A@@@CF@BA@A@@AAA@A@@@ABEBG@C@ABA@@@ABBB@BBDBBBBDDD@DB@@B@@@@@@B@@BB@B@BBB@B@@@@A@@BA@@@AAA@C@@@@@A@@@ABABC@@B@@AB@@@B@B@FBDBB@B@@@B@@@B@@ABABA@@BA@@BC@@@A@@@A@A@@ACAAEC@A@@@@@ABCBA@@B@DAJBFBDBDBBBDBBDDB@D@@@@@D@B@BB@@@@BB@B@B@B@D@D@BAB@B@BABABABA@AB@HGHABAFAD@DABABABA@ABAAA@C@@CCCAAAA@A@E@A@EB@@@@CBCDABAAC@AC@@AABC@@BADEBAB@DAFAF@F@B@B@FADABCBC@ACCIDEBCBGABCCA@@EAA@@ABK@EEEK@ADIGO@AEMCA@CBABDBIBODWH@AA@@CFSBE@@CA@@IIgGAAAW@@CA@GA@@EDCIAC@@A@@@AGA@B@@@@ABAAO@A@KCCFAB@FGAA@@HGAA@AHIAKCDOBAF@FI@AGGGIKGIAIC[BGBAEI@@CBCEAICC@CDCFEBKEFIMEGEA@@BGAA@@A@CBGFSDM@EFQBBB@B@BEBKAAA@@@BA@@BIBGDCCAHMHBB@DEA@ICAAADGAOAEACC@CDA@CCCEACAGO@BDJG@CADGK@CC@@A@@BA@AB@@ABAAABECCBKEEDGB@@CA@@@CAA@@@@@@A@CBEBAABGFE@ACABCAA@@eA@HC@E@A@A@@@GB@@EBC@EB@@C@E@@B@@E@@NABGB@CCAM@I@@ACAEF_BA@CAGAKACG@AI@ACAC" ],
														"encodeOffsets" : [ [
																120145, 40295 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120114",
													"properties" : {
														"name" : "武清区",
														"cp" : [ 117.057959,
																39.376925 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@BC@EBAEC@@@@LGRIHEHEJGTKJELIJGDAJELGFC@@NIFEFABAFCFCHCAAB@CCI@@CB@D@D@JCBA@ABC@@@@@@DAB@BBCD@BF@D@H@BAD@LIBAB@BARI@CBEECM@ADE@OA@ABCH@HA@C@@BCD@HEDIGEC@ACAABIDBFADCH@@DFADEDAFBFAHCDCBMFABKGAAA@CAABADAB@@@DAJOFAFIFEB@@@DE@@FEBA@@@@@@BC@@@@JBDCCAEA@@@@@A@@@@BA@@BA@A@@@AB@@A@@@A@C@@@A@@@A@@BA@A@CB@@A@AB@@A@@BA@A@@B@@@BAB@BAB@@@DAA@AABG@@@ABOBCFC@@@AA@@AA@AA@@AAAA@@AAA@AA@@@@ABGFED@ECCGC@F@DDFOH@EIE@@@ADCDGBC@A@A@BA@AABCCAA@CAAC@A@@@@@@ACI@AA@@DGBGBC@ARA@AF@@G@@D@@A@GACBABA@A@@@@@@@@D@BEF@BBHAC@AAE@DID@@ABECI@@@@@AB@@@@CEEA@AC@@GC@@@@@@@@AFC@KAEA@@A@A@CF@BHBALA@C@I@A@CFCNCBIBKAEDCFBBA@A@@A@AC@EAACBGG@@@@BCDEAKBABEJE@ABE@IFEAAA@@CABCG@ADKBUEEAICBEAAI@AHC@AA@G@@E@CADG@C@AA@@@BGG@CBA@CAAABCC@CA@A@CG@E@@@AFA@@@@@AAA@@@A@@@AHGAEC@A@@A@@A@AJBBKIEALCAC@@KDCCEEEKCA@@AB@@A@@KAG@EBGFAA@B@BA@@B@@ABA@A@@@AAA@A@@@A@A@A@@@A@AD@@A@AAA@@@A@A@@BA@A@A@@@A@A@A@@@A@A@A@@@A@AAA@@@A@E@EAA@A@@AA@A@A@@AA@A@A@@@A@A@AA@@A@A@@@@@@@@@A@@@@@@@@@A@@ABA@@BABABADCDAB@B@AAKCEAAAGC@ADEMCBEJB@C@AWAEC@BA@I@C@CLEJOCIADH@@AAA@A@@@A@A@AA@@A@A@A@@@A@A@AA@@A@A@EAA@@@A@A@A@@ABMC@HOE@BI@@BBFBB@@@B@@BBKBECB@A@@@A@@@AAC@A@@@@WA@OEB@GAAA@A@@CQBABKB@E@EAACCCAGIA@EBOCCABEB@BMDEACEAFIC@CAACBABACAAE@A@C@@@@AIBEAAEACBADAB@@@A@@C@IAS@@E@AACAC@EBGHB@@AAEA@CRICE@CBAAAG@CBBD@B[EBIHAL@AGM@@AIAE@DMFMEAC@@C@@AA@@DMDIA@A@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@AA@@A@@@A@@@A@AH@@B@@@@@B@@@B@@@B@@@B@@@G^A@@@A@@@@@A@@@@@A@@@@@@@@@@B@@A@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@B@@B@@@@@@@@@B@@@@@@@@@@@B@@A@AB[FCB@@gAA@C@C@@BA@@@@@@@@@A@@B@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@AA@@@@@@@@@@@@@@BDDBABBN@DAB@@AB@DBFEDB@BNAB@B@DA@BH@B@BA@@T@@CHG@AR@B`D@AF@B@@PBBCJDBFABGB@@BB@@A@@@@B@@AB@@E@ABBB@B@@@@B@@@BB@@@J@@FC@@@A@DHC@@BC@CB@JA@@F@@CCA@@@A@A@@@@BAB@@C@@@A@@H@PABFDM\\JB@BAJ@FAHCRKA@FGA@JHB@F@@@BB@@@RDFBBCFB@BB@@@CRF@D@@BBDBB@B@D@D@@ANAFF@AD@@B@AHEA@BA@@@@@A@@@EDKA@BA@@@@@AFA@BCA@@@A@@D@@AH@@A@FBAFB@@DB@DAB@@BCFE@@BA@@BCA@@CA@@A@@AKA@FAA@C@@BEB@BCG@@CC@BAA@CCIICJGGKAA@@@@@ABA@GAA@@A@BA@B@@BA@CPCLAAAD@FFB@AF@@DJ@@BADHB@BA@ABGAB@IA@@@@AB@@ABC@@@@BA@A@ADB@AD@@A@AFL@@A\\D@B@B@BFBBEB@@BAD@@AFB@CF@@AF@@B@@BA@@B@@@DBB@DEA@B@@@BD@AFCACDBH@@B@FB@BB@ALF@AFB@DBBCPB@DB@ABBBB@@BD@@B@@@BB@@BB@B@@@DB@@@B@BHBAD@BABDBLEJNIDCB@@BBABKC@@A@GFCFQCBAA@@AA@@@CBAA@@AA@BCA@DOIADA@GD@BB@@@ALDA@BEBGDKFA@@@IA@B@@BE@AGABAA@EBGD@BEABCA@A@CF@@CHDAHC@B@@@LA@@BAA@DAAAD@BEAAJA@IBB@@BF@CB@@@BF@AB@B@BD@BABB@BN@ADB@HBFBJB@@@@@@@@@DD@@DF@BABABBB@B@@@EBB@B@B@@JB@@@EB@BAFB@AHABA@@@@B@DI@@BF@@DDA@ABBA@CRH@@@C@@@FB@@JB@@D@@BB@ABCPALFAEL@@@@ADEC@A@@BEG@@BA@IAE@@@A@ABCBALG@AJA@@BAFC@ABC@@FEAAHB@@DB@BDF@AHHFA@DBABD@B@B@AB@@A@@@BBCBD@BB@@JDB@DBB@@B@BB@AFD@@@D@ED@DCA@BABAB@BA@@@A@@B@BCB@@A@@@@@ABADDAAFA@@F@@@BB@AFB@@AB@@AB@@@BBBA@@@BBBBCFB@BA@@BE@@@B@@BC@@BB@A@B@@BB@@ABBAB@@@@E@AB@AA@@BB@@BFB@ADB@BHDBCA@BAGA@AB@@@B@@AC@BA@@@CDBB@DAB@CJF@B@@@@B@BCDABDBEJB@@BB@@BD@@@@@FB@@@@B@B@FCB@@EJD@@B@BB@@D@D@@B@@@D@BA@@BHBCDABABEFCBEFBB@@@@@@@@@@BBB@ABADA@FD@ADDFBAD@@BB@@BAF@@@D@@B@@AF@@@@@@DB@@DBFBH@BD@@@@@@@B@B@L@B@BA@A@BD@@@F@@D@H@@@@@@@D@B@D@@@@@@@@B@@@@D@@@BB@@@@@@@B@@@@@@D@B@B@HB@@@@@A@@B@BABA@@@@BB@@CD@@@@BBB@B@DB@@B@@B@@@@HBB@D@D@B@B@BA@@B@@@B@@@B@@@@BB@BC@@B@@@BB@@@@@@@@AB@@@@B@@@B@@@@@BB@@B@@@B@@@B@@@@@@@@@@@@@BB@@B@@@B@@@@@B@@B@@@@A@@B@@@@@@@B@@@@@@@B@@@@A@@B@@@@@@B@@@@@B@@@@@B@@@BB@@@@B@@@EF@@ADF@@BB@@@@@B@@@B@@@B@@@@B@@@B@@@@@@@B@BA@@B@@@B@B@@@@@@@@@@@@@@@@@A@@DB@@@@@@@BA@@B@@@@@@@@@@B@B@@@B@@B@@@AB@@@BAB@B@@A@@@@@@@@@B@B@@AB@@A@AB@@@B@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@BB@B@B@B@@@@@B@B@D@@@B@B@B@B@@@@@@@B@@@B@B@@@@@B@@@@@@@BA@@@@@@@@@@@@@@@@@@@A@@@@B@@B@@@@@@@@@ABA@@@@@@@@B@@@@BB@BB@B@@@@@@B@@@B@B@@@B@@@B@B@@@@@D@B@@@B@B@B@@@B@@@@@DI@CA@@@@@@@@@A@@B@B@@AB@@@@A@@@@@@@@@@@AA@@@@@@@@@@@@@@@A@@A@@@@A@@AA@@@@@A@@@@@@@A@@@@@@@@AA@@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@AAB@@@@C@@AA@@BA@ABCBA@B@@@AB@BA@A@@@@B@@@@@@@@@@@BA@@@@@@@AB@@@@@@@AA@@@@A@@@C@@@@@CA@@@@@A@@@@@@@@@@A@@@BA@@@@@@@A@@@@@@@A@A@@@AB@B@@AD@DA@@B@BA@@B@B@@AD@@@@@@@AEAC@A@A@A@ABC@ABC@CBABCDCBCB@@AB@@B@@B@@BDBB@BDBB@@B@@@B@BABAB@@A@@@A@C@C@C@@A@@@A@@@@@@@BA@@@A@@B@@@B@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@B@B@@@BB@@@@B@B@@@@@B@@A@@D@AB@@@@AB@@@@@@B@@B@@B@@@B@@@B@@@B@@BD@FB@@D@@@B@@@B@B@@B@B@@B@D@@@@B@@@@@B@@@@B@@B@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@@B@@@B@@@@@B@@@@@@@@@@@@B@@BB@B@B@B@@B@@@BF@JAFALAJCFAJAHAPAJCJCNCJAHCLELCNC@@@@@@AAB@@@B@B@@@@A@@@A@A@@B@D@@@D@@A@@@A@@BA@@@B@@@B@@@B@@@@@@@@B@DA@@B@@@@A@A@@@AD@@@BABB@A@@@@@@B@@A@AD@DBAB@B@@@@@@@AB@@@@A@A@A@@@@B@@@BAB@B@B@B@@@B@@@B@@@@B@@@@A@@@A@C@@@@B@@AB@@@B@@@@BBJCD@HC@BD@DDD@B@F@@@BBABD@" ],
														"encodeOffsets" : [ [
																119960, 40574 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120117",
													"properties" : {
														"name" : "宁河区",
														"cp" : [ 117.82828,
																39.328886 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@AB@@AB@@@B@@@B@BA@@BA@@BA@A@@@C@AB@RNDDLDJ@@BB@BBB@DAJ@FGJ@@A@@ACACC@@E@EAECABCBAC@AABA@CD@@A@@BABA@ABADGFEBGGIFGFFBHDIFKHMJCD@@KGIHLHCBDDABDBIJEEGHGJFF@D@@A@@B@@@@DJAF@BC@CJF@BBD@BDBDJ@@BDHLBHBDBB@`AFEDB@BJ@N@DB@DHABA@MF@@@@AF@D@@@FAD@FA@@HA@@B@B@F@D@@GfB@@BBADDB@BEFAHBBFADAB@@@@@@@BB@D@@DB@@HAFCLFDAFDBABBBA@@BAB@@AB@@@DDL@CHDBH@CI@AHPDBFBDD@DCB@DDDFBPBHBBCBBJDB@CFA@GAGNDBCDAHAJ@@AB@@B@BBALAFA@A@AAER@FCNETAH@D@BB@HB@AB@HFNFEJLFFADEDCD@JDFBAD@DJ@BFHA\\AJDJBLHHJHH@BEJE@ABCPLDJBBGB@HB@GB@HB@EBADELDB@P@BBBA@@@@@AHB@B@@@BD@JBCD@FB@@HDB@@BXBBhHJJ@@DB@@AFET@DB@@BXGPCJACABADAB@NDBFP@JHBCL@FF@FAL@BB@FB@@DBADHBDAFAJCAC@E@CBEFIJG@@@@DDFFD@@@F@D@B@FBB@FFDDBDBBDDBBDBBB@@@@@@@@A@@@@@@@@@@B@@AB@@@BA@@@@BA@@B@@@BA@@@@BAB@@@@@@@@AB@BA@@BAB@@AB@@@@@@@@@@@@@@@@A@@@@@@@@@@@BB@@@B@B@@@@@B@@@B@@@@@B@@@@@B@@@@@@@@B@@@@@B@@@@@@B@@@B@@@B@B@@@B@@@B@@B@B@D@BBB@D@@@@@B@B@B@@@@@@@@@@@@@@B@@@@B@B@@@B@@@B@@@B@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@BA@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@B@@B@@A@ABABABABAB@BABABB@BB@@@@B@@@BB@@B@@@@BB@@@B@BB@@B@@@@@BB@@@@B@@@@@BBB@@@BBB@BBDBB@DBABD@DAF@D@@@B@@@BAB@B@@@B@DA@@D@D@B@B@B@@BB@@BBB@@BBB@B@B@D@DBF@BAFABAD@FAHCBAB@DAFCB@BADAD@B@F@DAF@B@B@B@DBD@B@DBHCBB@ABF@@B@D@B@@@B@B@BB@@B@BB@@BBB@BB@@B@B@BB@@B@BAB@DCDAD@BAFAB@@@BAB@B@D@BA@@DB@@B@@@BBB@B@@@B@B@@@BAB@B@@@BAB@B@@@@@BAB@BA@@B@BAB@@@BAB@B@@@BAB@@@B@DCB@@@@@DAF@BABAF@DAB@B@B@HIEKABEGACC@EG@@CEA@AC@KB@AAAB@@AA@@AA@@@AAA@A@A@@C@A@@@AA@@AC@A@@@@@@@@@@@@BAECCB@@@@BAB@A@@A@@A@@A@@@@DAAEFCBBA@BB@@B@@@ACB@AA@@@AA@BA@C@@BA@@@@@@@@@@B@B@@AAE@@@@@@@ADF@@AEB@@@A@@A@@CA@A@@CC@@@AA@A@@@CA@@@@KA@@@@@@AO@@@A@@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@AA@A@@@A@@@@@@@@A@@@A@@@@@A@A@@@@@@@@A@@@@@@@@@AA@@A@@B@B@@@BAB@B@@@@A@@BA@@@A@A@@BA@@@A@@@A@@BA@A@@@A@@@A@@@AAA@@AA@@A@A@AA@@A@A@A@@AA@A@AA@@AAA@@AA@@A@BA@@@A@@@A@@@A@@@A@@@A@A@A@@@@@@@@@@AA@@A@A@@AA@A@@@A@@AA@@@A@A@@@AA@@A@@@A@A@@A@C@@@A@@K@C@A@G@I@@BI@G@K@U@@A@A@@@AAQAA@@@A@UC@@@A@A@@@A@@B@@A@@@A@AF@@@BB@@B@B@B@@@B@B@B@@@B@B@@@@ABCBA@ABA@@@@AA@A@C@A@AAC@A@A@A@A@ABCHGKGCA@@@@@B@@A@@@@@@@@@@@@@@@@@@@@B@@ABGH@@EACAOAI@E@G@MAA@E@EACAEAE@A@@A@CACAI@@@C@@BC@@FEHCFAF@DBDBJBPADABABE@@@@DBB@@BB@BBVN@@@@ABAB@@@@@@A@@B@@@@@@@@@@@@@@@@B@@@@@@@@@AB@@@@@B@@A@@@@BA@@@@@BBFD@@@@BA@@@@@AB@@@@AB@@@@@@@@@@@@@AA@@AA@@A@@@@@@A@@B@@@@A@@@@@@@@B@@BB@B@@B@@@@@@@@@@B@@@@A@@B@@@@@@@@@B@@@@@@@@BB@@@@@@@B@@@@@@@@@BA@@@@@@@A@@B@@@@@@A@@@@A@@AAA@@AAAA@AA@AAACAACA@A@@AA@@@AA@@A@A@AAA@C@A@@@@GB@@@A@@AC@CA@@AA@@@@@@AA@@@@@@@@@@@@@DCBAB@@@@@@@@@@@@@@@BA@@@@B@@@@@@@@@@@@@@A@@@@@A@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@@@@CE@@@@FAAABAF@CGBC@AGACRA@CECGHI@AC@C@CAAG^KDCAAEGAEAAEGGIEKMSCC@AACC@EBEB@B@@A@@@@@@@EBABC@ABCBEBABBBJNBBJCBDIDGA@@A@QHMFIDBB@B@D@F@F@DDDMFE@EAA@A@@AC@A@OEEECAA@AAC@C@GAMAGAQA@@S@A@@A@@@A@A@@@A@@@A@@@A@A@@@AA@@@S@A@AA@I@@@G@IB@B@JUF@FM@@HBDGBAEATGRGAA@@AA@@@AAA@@AA@@AA@@AA@AA@@A@@@AA@ACAAAAEGACAAAAEEAECEAA@ACGAGAE@@FA@W@Qa@_@G@CAAA@N@V[@AB@@AB@BA@@BA@@BAB@@AB@@AD@@A@AB@BA@@BA@@BAB@@AB@@AB@@AB@B@@CBGHAB@B@@A@@B@@@BIAA@AACA@C@@C@@@@A@@IA@AUE@C@E@A@Q@C@AF@FGEE@@@AEE@AAAAA@@@I@A@@@AgFGBQFKDGBA@GBABG@GDI@IB@@A@AA@@A@EBIBC@KFIDGDIDGD@B@RABBBA@ABAB@@AB@@AA@@BABCAAKCCABC@AAAUFBBFALFDF@@@HICKCK@CB@@CBHJBR@@ABEB@@ABIDIHO@QDILGIADECCAYBEAAEOGSDBDAB@BDFBB@@@B@B@@@BA@AB@BA@A@A@@BA@A@@@AB" ],
														"encodeOffsets" : [ [
																120221, 40183 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120118",
													"properties" : {
														"name" : "静海区",
														"cp" : [ 116.925304,
																38.935671 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@B@B@B@@A@@B@@@@C@@B@@@B@BA@AA@@@B@@@B@@B@DBB@@B@B@B@@@@@B@@@B@@@@C@A@I@C@@@@B@BA@@@@@@@@@@@@@@@@B@@@B@B@@@B@BA@A@A@A@A@@@@@S@ABARCRCHCL@@E@@@@@A@@B@@B@@B@@@B@@@B@@G@@@@@A@@@A@@@@@@@@@@B@@@B@@@B@@@@@@A@@@A@@AA@@@@@@@@@@B@@@@@B@@A@@@BB@@@@B@@@B@@@B@BBBB@BAB@B@@@B@@@@@@@B@@@B@@@D@@@@@@@@@@@@@DBD@@@BBFBLBBBJBBBBFFDDC@A@C@@@@FA@A@@@A@@@CB@@C@A@A@@@BD@@A@AB@@@@C@A@@@AAA@A@A@A@A@@@@B@@@@@@@B@@@@BD@B@B@B@@@AA@A@@AA@@@AA@@A@@A@@A@@AA@@@@B@@@@@B@BBB@B@@@DB@@B@B@@@@BB@@@BBB@@AD@@@@@@BB@@BBBB@@@@BB@@@@A@AB@@A@C@GAOCIAMCA@@@@@@A@A@@@@@A@A@A@@A@@@@@@@@A@A@A@@AA@A@A@@@@@@@@A@A@A@A@C@C@E@@BA@@@@@A@@@A@@@A@@@ABA@A@A@@@A@@@A@@@A@@@@@@@@@@B@@@@BB@@@BB@@B@@@@A@@@A@A@@AA@A@@@A@A@@@@@A@IAUAIAQCK@A@@@@@A@A@@@A@A@BA@@@@@@B@@@DB@A@@A@@@A@@@@@@@A@@@@@A@@@@@@A@@AA@@@@@AA@@@@@C@A@C@C@@@A@A@@@A@A@A@A@A@@@@@@@@@@@@@@BA@@@@@@@@@AB@@@@A@AA@@@@@A@C@@@A@@@A@@@A@A@@@@C@C@AAE@A@A@@@BB@B@@BB@@@@@B@@BB@@@B@@@B@@B@@@@@@B@@@@@@A@@@A@A@AB@@@@@A@@@@A@@@A@CAA@@@A@@@A@@@@@@AA@@@A@@@@@@@@@AA@@@@A@@@@@AA@@@@@@A@@@@@AA@@A@@@@@A@@@@@@@A@@@@AA@C@@@@@@@@@@C@A@@@@@@@@@@C@@B@@@B@@A@@@A@A@@@ABA@A@@@C@@@@@AA@@A@@@A@A@@@A@@@@@A@A@@@A@@@@@A@A@@@AB@@@@@@@B@@@@@@A@@@AB@@@B@B@B@@@@@@@B@@@B@@@@@B@@@B@B@@@@@@@B@BA@C@@@@B@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@BB@@@@@@@B@@@@@@@B@@@@@B@@AB@@@B@@@@A@@@@B@@@@A@@@@@@@@B@@B@@@@@@@@B@@BB@@@@@@AB@@@@@B@@BB@@@B@@@B@@@@BDBB@@A@@@@@C@AB@@B@@B@B@B@@@@A@@@A@A@A@@@A@@@@@AB@@@@@BBDA@A@BB@BB@@BBDBB@DBDC@@B@D@B@B@B@DB@AB@B@B@B@BAB@@@D@@@@@@@@@@A@@@A@@@A@A@A@CA@@@@CE@@A@A@A@A@A@A@A@A@@@A@@@A@A@A@@@A@@@CBA@@@A@@@A@A@@@C@A@C@@@@@@@A@C@@@AAC@@@@B@B@@C@A@A@A@A@@@E@C@@@A@A@@@@@A@ABA@A@@@@@A@A@A@A@@@@@A@@@@@CB@@C@@@C@@@A@AB@@C@@@A@A@@@@A@A@A@@A@@BA@@A@@@@@@@BA@@@B@@@@DC@@@@@@A@@@@@A@@@@A@@@@@@A@C@A@@@AA@@@A@A@@@@@AA@@@@@@A@A@@@C@@@BB@BA@@@A@A@@@@@A@A@A@@@@@A@@BA@@@@@@@A@@@@@ABA@A@@@C@A@@@AAA@A@A@@B@B@B@B@BA@@@C@@@@B@@@FA@@@A@@@@@@@@BA@@@A@@B@@@@@@B@AB@BC@A@A@GA@B@B@@CAC@@@A@@AAA@@@@A@B@@B@@@B@@@@@D@BBD@B@D@BBB@DBD@B@DBDBB@D@DBD@@ABA@@@A@@@C@@@A@A@A@A@@@@B@@@B@@@@@B@@@@A@A@ABC@@@@@@B@@@@@B@@@@@B@B@@@@B@@@@@@B@@@@@BB@@B@@@B@@BB@@@B@@@@@B@@BB@@D@DA@B@@@BBBA@EBA@A@@@@BBB@@BB@BBB@B@@ABA@A@CB@@@@@@BB@@@B@@B@@B@@@BB@BB@@@@@BB@@@@B@@BB@@@@@B@@BB@@@B@@@B@B@@@@@B@@@@@B@@B@@B@@@B@@@@@BB@@@D@@@@DBB@@@B@@@B@BBB@@A@A@@@A@@@@@@AA@A@A@ABA@@B@B@@@B@@@@A@@BBB@@@B@B@B@@@@@@@@@@@BBB@B@D@@@@@B@@@D@@BB@B@B@@@B@@@@@@A@A@@@A@A@@@A@A@@@CB@@C@@@A@@@A@@@A@A@A@@@A@@@A@A@A@@@A@ABA@@@@@@AA@@B@@@B@@@B@B@B@@@@@B@B@B@@@B@B@@@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@B@B@B@D@@@@@@@B@@@B@B@@@B@B@@@B@B@B@D@B@B@B@DAB@@@D@B@@@D@@@@@D@@@B@@@B@B@@@@A@A@@@C@C@C@C@C@@@C@@@@H@V@F@H@N@D@H@@@B@@B@B@@@@@AD@@@B@@@@@B@@@B@@BB@@@@@B@@@@@@@@@@@@@@B@@@B@@@@@@@B@@@@@B@B@@@@@@@B@@@@@@@@B@@BB@@@D@@@@B@@@@@@BBB@DBB@B@B@@@BBB@@@B@B@@BB@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@D@@BB@B@B@B@B@@B@B@@@BB@@@B@@@@@@@@BB@DBB@BBD@@B@@@BBB@@@BBB@@@BB@@@@@B@B@@@BB@B@B@B@B@@@@@B@@@@@@@@@@BBB@@BB@@BB@@@@@B@BBB@B@BBB@B@@@@@@BAB@@@@@@@@B@@BB@B@D@@@@B@@AB@@@@A@D@B@@BB@@@B@@@D@@@B@@@@BB@@@B@@@@@@B@@@B@@@@@@@@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@B@@B@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@@@@@@@@@@B@@@D@BB@@@@@B@L@JEB@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@B@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@FL@B@@@B@@B@@@@@@B@@@@@@@@@BB@@@@@@@@@@@@@@@@@@B@@@@@B@@J@XEDFHABDB@BDA@@BA@@@BB@B@@BD@@@@DBB@@@B@B@@@BD@DPCD@AICBC@AA@@A@A@A@ABAA@@@@@@@@C@@EC@@ABA@@B@@BBA@@@@C@@AB@@C@@D@@DB@@DD@@@@@BB@AD@@BD@@BD@@@B@@AD@F@@@@@@CLABBF@@AB@@B@@B@J@@@@A@C@A@ABBB@@BB@@@@@B@@@@@AA@AFBD@JDFBD@HA@F@BD@@GP@VBAFHBP@CLH@ERABHBHDFAB@@@@@VE@AFAF@AGQEAABEBAXLHGFDBDVABCBB@BB@@@FAJEJCLGDDBBDHDADHB@BAEID@XGCGPAB@ACF@@A@@AGPAXAbGTC^KPGEC@ACC@AB@LC@C@AE@CQ@GlCBJ@BB@BBFFJGDCDAHEFCLCHAXKJCHAPGLEHEVQHKHGHINQFGTUHMNOPQNMTOFCPMRMJGNIRMJGLEJCEG@@@@@@CCEEGGCCGEKKKKMKA@MHOHECKKCCPISQDALGFCPGDABCA@A@ECSKOGOGOIQGIC@@A@CDCBEBCAAO@@CAMGCAA@OG@@@ADBBAAGBEJD@AD@B@BC@GPEDBBB@DD@B@BB@@`DB@@C@@aA@AAAAI@EB@@AA@@@AGBS@OEEAC@ECDA@E@AG@@BEBA@CEABE@CF@F@@IF@DADI@@@C@C@AG@@CH@DACAE@AAD@H@BCAKA@@@@GEI@CA@@EE@A@BADAAEDC@GACCCECA@AAAAB@@@@@@A@@@A@@@A@@@@BA@@@A@@@@@@@A@@@AA@A@@@AB@A@CA@AAA@@@@@A@@@@AA@A@A@@@AAA@@@A@@@@@@@@@AA@@@@@@@AB@@A@A@@@AA@@@A@@@@@@@@@A@A@A@@@A@@@A@A@A@CB@@A@@@A@A@@A@@@A@@AA@@@@CB@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@A@@@@@@AAA@C@@@@@AA@B@@CC@@@C@C@A@@@@@A@A@@@A@@@@A@@@A@@@A@@@A@@@@@A@@ABA@A@C@CBC@@@C@A@@@" ],
														"encodeOffsets" : [ [
																119909, 39513 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120116",
													"properties" : {
														"name" : "滨海新区",
														"cp" : [ 117.654173,
																39.032846 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@B@@@JABADBL@BC@BFBDA@A@CECBEDBFFN@BC@@@JRF@FV@BB@BAF@BAD@@@B@PAZ@@B@BAN@DBD@BDHDJBBU@@H@D@@@@@@A@@@@@@@@DBB@B@P@@@D@Da@AF@HA@@@A@AAC@C@@@A@IBK@A@C@A@A@@@A@A@ABA@@@@@I@@@@@@@@FBB@B@B@B@@@B@@@@B@@@@HBB@B@B@@@@@@@@@@@B@BBD@@@@@D@@@@@@BD@@@BBD@B@B@@@@@@@@@B@B@@@@@@BB@@@BBD@B@@BD@BDJ@BB@B@@B@@@@@@B@@@B@PGJAPEDAB@JFJBB@BB@@@LBFDFBBD@NBBB@F@D@H@DBD@BBBHAB@HALCREHAhE@B@@@B@J@@BBBB@BFF@B@@FFEHE@@B@D@R@B@F@DVF@BJB@@@B@@D@@@@DDBBBB@JB@A@@@AB@@@@ABAHGDA@@@ABA@@BA@@BA@@BA@AB@@AB@@ABAB@@@BC@@BA@@BA@AB@@AB@@ABA@@BA\\@@U@MBBDBH@`@b@@R@XEB@@BFBHDH@BBBDFBFFFBBBBBDFHBBBBBDB@@B@@@BB@@BBB@@BB@@BB@@BB@B@@BB@@BBQHSHFBABCHGA@@ENE@IVA@A@@J@H@@@JBBB@T@@@B@@B@@@B@B@@@B@@@B@@@B@B@@@BB@T@@@RBHBNBHBD@D@BBB@DBFFPFB@D@@BB@B@FBF@NECC@C@E@E@C@AAAJCNERGB@@@HBJCACIDAAIMAABAFADABAD@BAFA@@@@@@B@@@@AFAFAD@BD@BDDNTFLHJFHBBBFFHBBCD]LBHDBD@D@@BGJDHDFB@DQHB@BADDHE@ABBBEB@@@@DF@@@@@@B@@AB@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@A@@@@@@@@@@@BB@@@@@@@@B@@@@@B@@@BB@@@@@@B@B@@@@BB@@A@A@@BA@@BADAB@B@NBHBH@B@@@@@@@@@JB@A@@JG@AAE@@@AD@FAD@DA@@B@@@B@@@@A@@@A@@@@@@@@B@@A@@@@@@@@@@@@B@@A@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@BB@@@@@@@@@@@@@@@@B@@B@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@B@@@@@BDAB@@@@@@@@@@@@@@@@@B@@@@@B@@@B@@A@@B@@@@@@@@@B@@@@@B@@@@@@@@B@@@@@@D@B@B@BBBAB@D@H@B@@@D@B@BA@@D@B@@@@@F@B@F@B@@@BCFA@BB@F@BA@B@@@@@B@@BA@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@B@@@B@@@B@@A@@@@B@@@@@@@@@B@@@@@@@@@@B@@@@@@@B@@@@@@B@@@BA@@B@@@DAB@@@@@@A@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@A@@A@@@@@@@@@@@A@@@BA@@@@@A@@@AFG@@BA@@@@@@@A@@@@@@@@@@@@@A@@@@@@B@@B@@@@BA@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@B@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@A@B@@@@@@@@@@@@ABA@@@@@@B@@BB@@@B@B@@@@@B@@@B@@@@@B@B@@@B@@@@A@B@ABA@@B@@AB@AA@@@AA@@@@A@@B@@@@@@@BA@@@@@A@@@@B@B@@@B@@@BB@@@@@@B@@@@@@BB@@@@@@@BA@@@A@BB@@@@@B@@@@BB@@@@AB@@@AA@A@@B@@@@A@@@@B@@@@@B@@@@@BB@@@@@@@@PG@B@@@@B@@@@BB@@@@@@@B@@@B@@@@@@B@A@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@B@@A@@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@@@@@@@@B@@@@@@B@B@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@B@@BB@@@@@@@@B@@AB@@@@@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@A@@B@@@@A@@@@@@BA@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@B@@@@@@ACA@C@CAA@AB@@@BAJCAA@AA@@A@@@@@@@@@@@@@@@A@@@@@@@@@A@@@A@@@A@@@@F@@@@A@@@A@@@@@A@@@@@@@@@@@@@@@@@@B@DAB@B@BAD@@AB@D@BAD@BAD@DAB@DA@@@@B@B@BA@@B@@@B@@@B@@A@@@@@@B@@@@@@@@@@A@@@A@@@A@A@A@@@A@@@A@A@@@@@A@A@A@@@A@ABA@A@A@C@A@A@@@A@@@A@@@@@@@@@@@@AA@@@@@@@EA@@@A@C@A@A@A@C@E@A@C@A@A@C@C@C@@@C@C@A@@@A@@@@A@A@A@@@ABMI@±]GaQai­{Y_YeK]EaDqPmHcBkBODKQBMEOGQKEUC_BOASY_YAYDXSIaa¹JgCeOQ[@RUbK¶MPGJMA¯CUSQÓgOKMWEa³OqICDCBA@E@C@ABA@@@AAA@CI@@@@EAA@@A@@FK@@@AA@@@@@@@A@@@A@@@@@A@A@@@@@@@A@@@@AA@@@@@A@A@@@AA@@A@@@@@@@A@@@@@A@@@@@A@@@@@A@@@@A@@AB@@A@@@@@A@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@B@@@@@B@@BB@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@A@@@@@@@A@@@AA@@@@@@A@@@@B@@@@@@@@@@@B@@@@@@@@@@@BB@@B@@@@@@@B@@@@@@@B@@@BA@@B@@@@@@A@@@@B@@A@@A@@@@@@@@A@@@@@@@@A@@@@B@@A@@@@@@@@@@AA@@@@@@A@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@A@@B@@@@@@@@A@@@@B@@@@@@@@AB@@@@AB@@@@A@@@@@@@@@@@A@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@BA@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BB@@@@@@B@@@B@@@@@@@@A@@B@@A@@@@@A@@@@@@@A@@@@@@@AAA@@@@@@@@@A@@AA@@@A@@@@@@@@@A@@@@@A@@@A@@@A@@@A@@@A@@BA@@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@A@A@@@@@A@AB@@@A@@BC@ABABA@@@@@AA@@@@@@@@@@A@@@@A@@@@@@@A@@@@@@@AB@@@@@@@@A@@@@@@A@@@@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@B@@A@@@@@A@@@@BA@@@@A@@A@@@@@A@@@@@@@A@@@@@A@@AA@@@@@@@A@@@A@A@CAA@A@A@AAA@A@@@AAA@A@CA@@A@A@A@AAA@A@AAA@A@A@AAA@@@C@@@CAA@A@@@AA@@@@A@CA@@AAA@AAA@AAA@@AA@AAA@AAAAA@AACC@@AB@@A@@BA@@@ABA@@@@@ABQK@@DA@AB@BA@@@@B@B@D@@@@@@@B@EEA@CCAA@@ECAAECCACACAA@CACAGACAC@CAICC@@D@N@R[C@C@AB@DMAAA@AAAA@@A@@AA@AA@@@@@@@@@A@@@A@@@AA@@A@@@AE@@B@@@B@@AB@B@@A@A@A@A@A@A@@@C@A@AAA@A@A@A@@@@DA@@AC@A@@@A@@@C@A@@A@@@@@@A@@ACAAAA@@@@AA@@@@@AA@@A@@@@AA@@@@@@@@@A@@A@@@@@@A@@@A@@@@@@@A@@@@AA@@@A@@@@@A@@@@@AA@@@@@B@@A@@@@@A@@@@@@@@@A@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@A@@B@@@@@@@B@@@B@@@@@@@B@@AB@BA@@B@@AB@@@BAB@@@BA@@@A@@@@@@@A@@@A@@@A@@@@@@@A@A@A@A@@@@@BSA@@@A@@@A@A@@@A@AA@@@@A@A@@@A@@@A@@@A@@@AA@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@A@@@@@A@@@A@@@A@@A@@@@@@@AA@@@A@@@A@A@AA@@@@A@A@A@@@@@@B@@AD@@@B@@@@@B@@A@@@@@@@@@ECGCEC@@@@AB@BAB@@AB@BA@@@@B@@@@@@@@@BA@@B@@AB@@AB@@@B@@A@A@@@@B@@@@@@@BA@@BAB@@@B@BA@@B@@@@AB@B@B@@@@@@AB@B@@D@B@@@B@BBB@B@B@BBD@BB@@D@B@DBB@@@@@@@B@@@@@B@@@@@BBB@@@B@AFA@@@A@@@@@A@@@AA@@@@A@A@CAA@C@@@A@@AA@@@A@@@A@@@AA@@A@@@A@A@AA@@A@A@@@A@@@@A@BA@@B@@@BA@@B@@@@@@B@@@@B@@@@BB@BBB@@BB@@BBBB@BBBBBBB@@@@DBF@DBDBD@@@@B@@@@@@@@AD@B@@@BB@B@D@@@@@@B@B@F@@A@@@@@@@@@A@@@@@@@@@@B@@@@ABAB@@@B@@@@@@@B@BA@@@D@@@AB@@A@@@AB@@A@A@@@@@AB@@A@A@@BA@A@@BC@@@@@A@A@@@A@A@A@@@@@A@A@@B@@@@A@@@@@@@@@@@@B@@AAAF@BG@BDB@@@@B@@B@@B@@B@@B@@BB@@@@BB@@A@@@@@@@BB@@@@A@@@A@I@IA@B@@@@@B@@BB@@@@@B@@@@@@B@@@@@@@@@@@@@@BB@@@B@B@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@B@@@B@@@@@@@@@@@B@@@B@@@@@@@@@B@@A@@@A@A@@@AB@@A@@@@@A@A@@@A@A@@@A@@@@@AA@@@@A@@@A@@@@@A@@@@A@@A@@@@A@@@@@@A@@@@@@@AA@@@@@@@@A@@@@@@@@@B@@AA@@@@A@A@A@@AA@@@A@A@@AA@@@A@@@A@@MA@@@@@C@A@@@@@@@@A@@@@A@A@@@@AA@@AA@A@@@FC@AA@A@A@@A@C@E@A@@@A@@@A@@@@A@A@@@@@@@A@A@@@@A@@@AA@@@@@@@@A@@@@@@@@B@@@@@B@B@BAB@@@@A@A@@A@@BA@A@@@@A@A@AA@BA@@@A@A@@AA@@@@@@@@@@@@@@@A@@B@@@AA@A@@@A@AA@@@@@@A@@@AAA@A@A@@A@@A@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@B@@@BA@A@@@@@@@AA@BC@@@@BC@@A@A@@@@@@@A@@A@A@@@@B@B@@@@@@A@A@@@@@C@@@A@A@B@FDDDBD@HCDBFCBABB@F@@FB@@DFJ@H@@B@BLADG@C@BBF@DBCBG@@DH@@B@D@D@@CJCBE@@JE@E@@DAFFB@DABAF@@BHF@B@DC@FBDFF@PATBH@@B@@BA@@FBJBB@BbB@@@DA@_C@@AAA@C@@CAACAOF@HADA@C@@BICAFBHABCA@B@@PHB@DBNHDB@@BPDBFADADCB@@@JDRHPJPHPHTLFDB@B@ADCBOHEDKHCBTROJDDLLFDPGNGB@NLLLLLHFDDHHFFDD@@@@@@FHHCXEZGbIHAJANINEF@DBDBBDDBKD@BBBABADCB@@@@@@DBHFDBFDB@BBDBFDFDFBFDFDFDFDHDZPBB@@@@JFFBFFNJHFFDFDFEDCJIDABAFGFCHGFEFEBA@@HVFJDBBDDDFDHFFDJFBDB@@@FDBBHFHDJFFDBB@@@@@@BB@@J@NBFBD@CPAPCXAHAHRFLDDERNLDB@TMJGHAHB@BAJAHAD@B@D@BD@@B@@@FAF@B@@@B@B@@@BBDBB@B@@@BBDBB@BB@@B@BBB@@@@B@@@@@B@@B@@@@BB@B@@@@@BBB@BBB@B@@@B@@@@@BA@@@ABA@@@A@CAA@@@A@A@CB@@A@ABABABABAB@BCD@@AB@@@@ABABGDGB@@EBA@" ],
														"encodeOffsets" : [ [
																120348, 39943 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "120225",
													"properties" : {
														"name" : "蓟县",
														"cp" : [ 117.407449,
																40.045342 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@@@A@@B@@@@A@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@AA@@@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@BA@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@A@@@@B@@@@A@@@@@@@@@@BA@@@@@@@@A@@@@A@@@@@@@@A@@@@@@@@A@@@@@@A@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@AA@@@@@@@@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@@@@AA@@@@@@@@@@@A@CBA@@@CB@@ADEB@@CDEBC@A@CAA@AAA@C@EBA@@@@@AD@BCDAB@B@B@@@@A@A@@@C@A@KFCD@@C@@@CB@@A@C@C@AA@@AB@@@@C@A@@@A@A@@DA@@@@C@AG@CAA@@A@A@@AAAA@@AACB@@A@ECAAAAA@@AA@A@AAA@A@A@@@A@C@A@A@CBA@@AA@@AA@A@@@CAA@A@@@A@A@ABA@A@AA@@A@A@A@A@A@C@C@@@AB@@@@A@AAAA@A@@A@AAA@C@@@@AABA@A@C@ABA@C@@@C@A@A@AB@@@BA@@@A@@@A@A@CDAB@@B@@@A@ABB@@B@B@@B@@@@@@A@@B@@A@B@@@@@B@@@@DB@@@B@D@B@@AAA@A@@@A@AB@@A@ABA@@BA@ADA@ABA@@@@@ABBB@@ABABA@@@@B@BA@A@E@@@@B@@@@@@A@A@@@A@@@@B@@@B@@A@@@@@@@A@A@A@AAA@A@@@@A@@@@A@@@@AABA@A@A@CA@@AB@@@B@@CB@@AA@@A@A@@@A@A@@AA@@@@A@@B@BA@@E@@@@@AAA@@AA@ABA@A@AB@B@@BB@B@@A@AB@@@@ABCAA@CBC@A@@@A@A@@@A@@BA@A@A@@@@@CG@AAB@@AB@@AA@@A@ADA@@BA@@@AAA@@A@@@@BA@@@ABA@A@A@ABADA@@BABA@C@AB@@@B@@@BAB@@A@A@ABA@AAAAACA@@@AA@@@AAEA@A@@@A@@@AAA@CA@@@@@@GC@@CAGB@@@@A@@AA@@AA@@@@CA@AAB@@ABA@A@CIAA@@@@A@@@EDA@AEEB@@CE@@AAAC@@@ABG@@@CFAJCDAHAGIB@@A@AACCBACA@@B@@@@ABCE@BADA@@@C@@@@@@AGAA@@@A@@@C@@@@@@@BAB@@@@@@A@@@A@@@@AA@@B@@@B@@@@@B@@@@@@B@@@@@@B@B@@@@@@@@@@@B@@@@@@@@B@@@@B@@@@@@@@@@@@@@BBBBB@AAA@@@A@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@A@@A@@@@A@@@A@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@A@A@A@@@@@@ABA@@@@@@@BB@@@@@@A@AB@@@@@@@AA@@A@@@@AB@@C@@@@@@@@A@A@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@AA@@A@@@@@@@@@@@@B@@@B@BA@@@@@@@A@@@AB@@@@@@@@@@@@A@@@@@ABC@@@@@A@@@@@A@@@AB@@A@@@@@@@@@@@@@@@@B@@@B@@@B@B@B@B@@@@@@B@@@@@@@@@@@@@@B@@@@@BA@CB@@@@A@C@GBG@GBG@C@@@A@@B@@ABABA@@FEFE@A@@@@@@A@@@@@A@@@@@@@@A@@B@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@AB@@@@A@@@@@@@@@A@@@@@@@@@@@@@AB@@@@@A@B@@@@A@@@@@@@@@A@@@@@@@@@@@@B@@@@@B@@@BB@@@@B@@@HIFGBH@@@@B@@@@@BA@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@A@@@@@@@@A@@@@@@@@BA@@@@@@@@@A@@@@@@B@@@@@@@@@@@@A@@@@A@@@@@@@A@@@AAA@@@A@@@@C@A@ABA@AA@@@@@@@@@@AA@@@@@@B@@A@@@@B@@A@@@A@@@A@@@@@@B@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@AA@@@@@@@@@@@@C@@AD@@CF@@C@@@AB@@I@C@@BB@@B@@@B@@AB@@BD@DB@@@@B@LOFE@A@AFO@A@CB@@@@@D@DA@@@@D@@@@@AA@AA@A@@@CA@@A@@AA@@@A@@@@@A@I@@@@@AABC@A@ABC@@AC@@AA@ACCAAA@AA@@@@@CA@AC@@@ALC@@AAB@@AFAIOG@CCA@ABA@@@AAA@@@AAB@G@C@ABAB@BBD@B@@A@C@C@A@AB@BABA@AA@CAAAAABABA@ADABABA@@AAC@AC@C@CB@@CDADAB@D@@@@A@E@CAA@AAAAA@A@@@ADAFAF@@@BA@@@AAAEA@@AA@A@@@A@@BA@CB@BA@@@AA@@@@A@C@A@CBC@A@@ADA@@BABA@@A@EAAACA@ACA@@AAC@@@AB@@@@@@@BDDBD@B@B@@A@A@AAA@CCCGAAA@@@A@C@@BA@A@CCMEAA@CAGAA@A@@A@EBC@A@C@ABAB@@EBG@GBA@@@ABABAB@B@BBD@@@B@@ABABCBAB@@@@C@A@CAA@C@@@A@@@CFEDCB@B@B@BBD@@@BA@A@C@A@@@@BDD@BA@@@A@@@AC@@A@@@EFA@A@E@C@A@@@AB@D@@@@@@I@C@A@AB@@@F@@ABA@@@@@A@@AAA@@C@A@AAC@ABC@ABE@CBADA@@@A@@@AC@@A@A@@BAD@@A@@@ACA@A@@@A@A@@@A@A@@CAAAAAA@@A@A@ABAB@@C@A@@B@D@@ABA@@@AB@B@@AB@@BBB@B@@B@@CDABC@ABABA@A@A@A@A@A@A@AB@@A@@@@A@@@AA@@@A@A@@@@AA@@@A@@BCBAD@@@B@B@B@@@@A@A@@AA@@@A@@DA@A@AA@@A@@@AD@@@@A@CA@@A@@@@D@B@@A@@B@@DB@B@@@BEDABC@CDAB@@AAA@A@A@A@ABADA@@@ABAAA@AA@@@@A@ABCBA@@BAAA@@@AB@@A@AD@@@B@@A@@@CAABAB@@@BB@@@B@BBB@@B@@CB@B@@@@DD@B@B@@BB@@BAD@@BB@@BA@ADAB@BCD@@ADCFAB@@@B@@@BEFA@CBAAC@A@C@AA@@@CAA@A@@A@A@A@@@CBA@A@AA@@@EA@@@A@A@GDEDE@@@GAA@@BA@@F@@A@E@EBGBA@AB@AA@AAC@A@ABA@EHABA@A@@@ACAAC@A@AB@@@B@@BD@@@B@BCBA@@@A@AA@@@CAA@@AAC@A@EBCB@@@B@@PJ@@@B@@@BCBCB@@A@@A@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@ABCB@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@AAA@@@@@AB@@@B@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@B@@@@BB@@BB@B@B@@@BBB@@@BB@@B@@BB@BB@CBCDEFEBAB@DBDB@BBJDDBBD@D@BABC@@@A@A@A@@@A@G@A@C@@BAB@DAF@BA@@BC@G@@B@@@B@@B@F@D@BBHBFB@@@@ABAB@DCF@B@BFFB@B@B@@@FCB@BBBB@BABEHED@@A@@@A@A@AB@BA@BDBABADABBBB@@BBBBB@FDB@DBD@B@DF@@@BAB@B@BABBDAB@B@@CBCB@@@@@BB@JEB@B@F@B@BEBAD@@BDHB@@B@@BF@@@BC@@BBB@@@HADB@BBB@@@H@B@DB@BD@@DB@@JF@AFD@@@@BD@@DB@BFA@@B@@@DA@@@@@@B@@@@BBA@@@@@@B@@AB@D@@B@@@@@@B@B@@@B@@@B@@BB@B@@AB@@@@@@AA@@@@A@BB@B@@AB@@@B@@@BABA@@BBB@B@B@DABABC@A@@BAB@@@D@B@D@D@@AB@B@B@B@D@B@B@B@@@B@@@@@B@@@DB@@BA@B@@BB@@@CD@B@@AB@@ABCB@@@BB@@BABAD@@@B@BBB@BBBBAB@BAB@BB@@FA@B@@@B@B@@BDA@BBB@B@B@DAB@BAB@B@B@@@@AB@@@B@B@@@B@BBDB@@DA@AB@BBB@B@B@B@BAB@@BD@B@BB@@@BCBAD@@@B@@ABA@@@AB@@A@AB@BA@@BAB@@@D@BABA@@BCBBB@@BB@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@@@B@@@@@B@@@@@@@@@@@@@@@@@@@AB@@A@@@@@@@B@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@@@AB@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@B@@@@BB@@@@@@@BA@@B@@@@@B@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@@@@@BA@@@@@@@BB@@A@@@@B@@@@@@@@@@@B@@@@@@@@A@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@@@@B@@A@@@@@@@@B@@@@@@@@@@@BB@@@@@@@B@@@@@@@@@B@@@B@@B@@@@@@B@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@B@@@@BB@@@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@B@@B@@@@@B@@@@@@@@B@@@@@@BB@@@@@@@@B@@B@@@@@@@@@B@@@@B@@@@@@@@BB@@@@@@@@@B@@@@@@@B@@@@B@@@@BA@@@@B@@@@@@@@@B@@@B@@@@B@@@@@@B@@@@@@BB@@@@@@@@B@@@@B@@@@@BB@@@@@@@@@@B@@@@AB@@@@@@@@@B@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@BB@@@@A@@@@@B@@BABB@@B@B@D@B@@A@@B@B@DA@@@@@@@A@@BAB@@AB@@A@A@@B@B@DA@@B@@B@@@BBB@@B@AD@B@B@B@@@@B@BBB@@@@BBB@@@B@@B@B@@BDDBBB@B@F@BAB@@@BA@@B@@@B@@@B@BA@@B@@@@@BBAB@@@B@@@@BBB@@BBBDBB@@B@@BBBB@@A@@BB@@DB@BB@B@B@B@DB@B@@@DDB@@@DB@@@AB@BABBDA@@BBB@DBBB@CFA@A@@B@B@@@@@@AB@B@@@BAAA@A@@BBB@B@D@@@@@@@B@B@@@@@BB@@B@D@D@BABBB@B@BBB@BDBDB@@BB@B@@CB@BDBB@B@B@BA@A@A@C@A@@@A@@@BB@@DBB@@BB@@@@B@@A@C@A@@AAB@@BBBB@@DBBBBBBBB@ABB@D@@@B@@B@@@BA@AB@BAB@B@@ABBB@@AB@@A@@@@BABAB@@AB@@@@@@@B@B@@ABA@@@@B@BB@B@@@B@D@D@@@@@B@B@@ADA@@@BB@@@@BA@@@@B@@DB@B@BBAB@@@AA@@BA@@B@A@A@@@AA@AB@B@B@@@@B@@@@@B@@@@@@@@@AB@@A@@@@BB@B@@@@BBB@BB@@B@B@B@@@B@B@@@B@BA@A@@B@@A@@BAB@@@B@@B@@AB@BAB@B@@BA@@BABB@@B@@@B@@AD@BBB@BAB@B@@@B@@@BBABA@ABB@@@DBDBHFB@@BBA@@B@@@B@B@@@@B@BB@BB@@@BB@@@@@ABA@A@AB@BA@AB@@A@@@A@AB@BA@A@AAAA@@CA@A@@@B@@CB@@CA@@@@AA@@@A@@A@A@@@A@A@@@A@BB@BA@@@@B@@BB@B@@@@@BB@@@@B@@A@C@@@A@@@@@@B@@AB@@@B@@AB@@@B@B@@@@@@@B@@BBBB@@@BB@@@@@BA@A@@AA@@@@@@@@@@@@@@FB@@B@BBB@BAB@@@@@@@BB@@@@@@@@@ABB@@@@@@B@@@@@@@@@@@@@@@@@@B@@A@A@CB@BAB@@A@A@A@@@@@AA@@A@A@AB@@@B@@ABB@@@@BA@@@@@A@A@@@@@@B@@@B@DBBABAB@@BB@@@@A@@@@@BBBAB@BB@@BB@@B@BABBBABBB@@@B@@@B@B@B@DB@BAB@@@@@B@@@BA@@BABABBBDBBB@BBB@B@@@@FB@@B@BAB@B@B@@A@@@A@@@AB@BA@@B@@B@B@@D@@BB@@@@@@@AA@@B@@@BB@@BB@@BB@B@@@@@@BBB@@@@AB@BB@@@B@@ABBBAB@BA@@BAB@@BB@@@B@BDD@@B@@@@@B@B@@@BB@@@@@@@@@@@@B@@A@@B@B@D@@@@@B@@@B@@@BA@@BA@@@@@@B@B@FBBB@@@@BB@BB@BB@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@B@@@B@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@B@@@@@@@@@@@@@BADAB@B@@A@@B@D@B@B@@AB@BAB@B@@A@@B@@AB@B@@@@@BAB@BA@BB@@ABA@A@@B@@@@BB@@@B@@@@@B@@@@@B@B@B@@@@@DC@@@A@AB@@A@A@AB@B@BAB@@@@AB@@@B@B@@@B@@@@AD@B@D@@@BA@@B@@@B@@@B@@ADA@@BABA@@B@BB@@B@H@B@@@B@@@B@B@B@BBB@@@@@D@BB@@BAB@@BB@@@BA@@B@B@B@DB@@B@B@B@B@B@B@BBB@B@B@FB@@B@B@@@BBB@@@D@@A@A@A@@B@@@@@BA@AB@B@B@BB@BD@B@BAF@B@B@@@B@B@@@BADABAB@@A@@@@CB@@@A@@B@B@AA@AB@@ABA@ABA@A@@A@@A@A@@A@@@@A@@@@AA@AA@@@A@A@@AAA@@AA@@@AB@AA@AA@@AA@@@BA@@B@D@@@B@@@BAB@BABABA@@@@B@@A@@@A@@@AA@BCAA@@@@@AB@@@B@BA@@BA@@@ACAAA@@B@BA@@AA@ABAB@@A@AA@@@@A@@B@@A@@@ABA@C@@B@D@@ABA@@BA@@BA@@BA@@@A@@@@BA@@BAB@BAB@@AB@@@@@B@@BB@B@B@@B@@@@@@B@@@@@@@@@B@@@D@B@@BB@B@B@@@BABABC@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@A@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@B@@@@@@B@@A@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@B@@@@@BA@@@@@@@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@@@A@@AB@@@@@@@@@BB@@@@@@@@B@@@@@@@B@@@@@@@@A@@@@@@@@@@@@B@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@A@@@@@@@@@@BA@@@@@@@@@@@@@AB@@@@@@@@@@@@@@AB@@@@@@@@@@@B@B@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@ABB@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@A@@@@@ABA@AA@@A@AB@BAB@BAB@@@@A@AB@@AA@@AA@@A@A@@@AB@\\G@@@AAA@@@AB@BA@@@@BBB@@@@@@A@AAA@@@@@B@@@@A@@A@@B@@@A@@@@@A@BA@@@A@@@@BA@E@A@A@@@@D@B@@@A@CA@AD@BA@@@@C@@@@@@@@A@@@@B@@@B@D@@AA@@@D@@@C@@A@@D@@@A@AA@AAAC@EA@@AAAA@ABC@AAA@@AA@@A@A@@A@@@@BADABCBA@@@@@@@@B@B@@@@B@@@AB@BA@@@@@@@@@B@@BBB@@@@AB@@BB@@B@@@@@DBB@BB@B@D@@A@@B@@@@@BB@@B@@@@B@@@@@B@@BB@@@BD@@A@ABA@AD@@@@@@@@A@@@CBA@@@AD@@EF@AAAA@AB@A@@C@@@@A@@A@AB@B@D@@@@B@@@@BJ@@@C@@@AFABB@@@@B@@@@AAAB@B@FA@@BD@@@@BDEB@@@@@BBAD@@@A@@B@@@@@DBD@@@@@BBBB@B@@@D@B@@@@@@BB@@@@@BABAB@BABBBA@@B@D@B@@B@BB@@@@@B@@A@@@ABA@@@@@C@@@@BCA@BEBCB@@BB@@@AB@@@@ABFB@A@A@AD@@@@@@A@@@@@@@@@@B@BA@BB@@@B@@@@@@@A@@A@@FC@@D@B@B@D@BB@@B@B@DA@ABA@@@@F@B@FBH@B@BB@@@BB@ABB@@@F@B@B@BA@@BAB@@@@A@@@AB@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@A@A@A@@@@ABC@A@A@@D@@@@@DE@@@@B@B@B@B@@@@@@@@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@@@@A@A@@@@@@BA@@@A@@@@@@@@D@BC@@@@@@@@D@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@AB@@@@A@@@@@A@@A@@A@@@@@A@@@AA@@@@A@@@A@@@AA@CCECA@ICCACA@@@@@@@@A@@@A@A@EB@F@@A@@E@@AB@BCA@D@@AA@G@EB@@CAA@@@A@CA@@AA@AAAA@@@A@ABC@I@C@@@A@CB@BADCB@BA@@DADCBAB@B@@@@BB@@B@B@B@DAB@@BB@BB@BB@@@BB@@@B@BABA@@@BB@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@DBB@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@A@A@@@A@A@A@@@AB@@@AB@@@B@B@B@@@B@B@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@B@B@B@B@B@D@B@B@B@D@B@@A@@@A@A@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@A@@@A@A@AB@@B@@@B@@BB@@B@@@BA@@B@@AB@B@B@@@@AB@AA@@@@@A@@@@@AB@@AB@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@A@@C@@@A@@@@A@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@B@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@B@@A@@@@@@@@B@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@A@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@AA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@A@@@@@@@@A@@@@@@@@@@@A@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@A@@A@@@@@@@@@@@@@@@A@@@@@@B@A@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@@AA@@@@@@@@@@A@@@@@@A@@@@@@AA@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@" ],
														"encodeOffsets" : [ [
																120609, 40926 ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));