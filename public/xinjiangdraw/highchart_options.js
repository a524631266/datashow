//objectdata = {}
function drawBoxOptions(listdata,xAxisList,title){
	var showLegend = false
	var controlxAias = true
	var timedict = {}
	for (var i in xAxisList){
		var day  = xAxisList[i].split(" ")[0]
		timedict[day] = timedict[day]===undefined?1:timedict[day]+1
	}

	var timekey = Object.keys(timedict).sort()

	var newxAxis = [-0.5]
	var newdata = []
	var timeindex = { // 存储时间的inex
	}
	var calcount = 0
	var count = 0
	for (var i in timekey){
		var day = timekey[i]
		var n = timedict[day]
		var before = calcount
		calcount  = calcount + n
		timeindex[day] = before + n/2 -0.5// 中间点插入数据
		// var need2 = n%2// 中间点插入数据
		// var count = 0
		var b = newxAxis[newxAxis.length-1]
		newxAxis.push(before + n/2 -0.5)
		newxAxis.push(2*(before + n/2 -0.5)-b)
		for (var i=0;i<n;i++){
			newdata.push([count,0])
			count+=1
		}
	}

	// if(listdata.length === 2){
	// 	listdata.push(
	// 		{
	// 			name:" ",
	// 			xAxis: 1,
	// 			data:newdata,
	// 			showInLegend: false
	// 		}
	// 	)
	// }
	
	var option = {
        chart: {
            type: 'boxplot',
			zoomType: 'x',
			backgroundColor: 'rgba(0,0,0,0)',
			// height: '50%'
			// spacingBottom:12
        },
        title: {
            text: title,
            style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
        },
        /* legend: {
            enabled: false
        	y: '10%',
            data:names  
        }, */
        legend : {
			enabled:showLegend,
			align : 'center',
			verticalAlign : 'bottom',
			y : 0,
			floating : false,//不浮动
			itemStyle: {
				color:"#C1FFC1",
				fontWeight: 'bold'
			},
			backgroundColor: '#303030',
			// borderColor: '#ffffff',
			borderWidth: 2,
			borderRadius: 0,

		},
        xAxis: [
			{
				type:"category",
				categories: xAxisList,//'xAis',
				title: {
					text: ''
				},
				labels:{
					// enabled:false,
					formatter:function(a,b,c){
						// console.log(this,"2222222222222",timemapx[this.value])
						// console.log(this.value)
						// console.log(this)
						var chartHeigh = this.chart.chartHeigh
						var chartWidth	= this.chart.chartWidth
						var category = this.axis.categories
						var value = this.value // 2018/5/10 8
						var timevalue = this.value.split(" ")[0]
						var hourvalue = this.value.split(" ")[1]
						var pos = a.pos
						var isFirst	= a.isFirst
						if (isFirst && parseInt(hourvalue)>9){
							controlxAias = false
						}
						if (isFirst && parseInt(hourvalue)<10){
							controlxAias = true
						}
						var arr = a.axis.paddedTicks;
						
						// console.log(chartWidth,this.chart,a,b,c)
						if (chartWidth/window.innerWidth<0.25){//小图
							if (hourvalue>9 && controlxAias && arr.length>15){
								var time1 = JSON.stringify(hourvalue)
								// console.log(time1)
								// console.log("22222222",time1,parseInt(time1[0]) + "<br/>" + parseInt(time1[1]))
								return time1[1] + "<br/>" + time1[2]
							}else if(arr.length>20){
								return a.pos % 2 === 0 ? hourvalue+":00":""
							}else{
								return hourvalue +":00"
							}
						}else{
							return hourvalue +":00"
						}
						
						// return a.pos % 2 === 0 ? hourvalue:"<br/>" + hourvalue
						// if (hourvalue==="6"){
						// 	return hourvalue //+ "<br/>" + timevalue
						// }else{
						// 	return hourvalue
						// }
					},
					rotation: -45,  // 设置轴标签旋转角度
					style:{
						color:"white"
					}
				},
				// tickInterval:3,
				gridLineWidth: 0
				// plotLines:[{
				// 	color:"rgba(0,0,0,0)",            //线的颜色，定义为红色
				// 	dashStyle:"longdashdot",//标示线的样式，默认是solid（实线），这里定义为长虚线
				// 	// value:3,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
				// 	// width:2                 //标示线的宽度，2px
				// }]
			},
			// {
			// 	type:"category",
			// 	// categories: newxAxis,
			// 	labels: {
			// 		// overflow: 'justify',
			// 		style:{
			// 			color:"rgba(0,0,0,0)"
			// 		},
			// 		formatter:function(a,b,c){
			// 			// console.log(this,"是否更新轴")
			// 			for(var time in timeindex){
			// 				if(timeindex[time] === this.value){
			// 					return time.replace("2018/","").replace("2018-","")
			// 				}
			// 			}
			// 		}
			// 	},
			// 	min:0,
			// 	tickmarkPlacement:"on",
			// 	tickPositions: newxAxis,//Object.values(timeindex)

			// }
		],
        yAxis: {
            title: {
                text: ' '
			},
			labels:{
				// enabled:false,
				// formatter:function(a,b,c){
				// 	// console.log(this,"2222222222222",timemapx[this.value])
				// 	return timemapx[this.value]
				// },
				style:{
					color:"white"
				}
			},
			gridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
            '上边缘: {point.high}<br/>' +
            'Q3\t: {point.q3}<br/>' +
            '中位数: {point.median}<br/>' +
            'Q1\t: {point.q1}<br/>' +
            '下边缘: {point.low}<br/>'
        },
        series: listdata,
        credits: {
            enabled: false
       	}
    }
//	.....
	return option
}

function drawLineOptions(listdata,title){
	var option = {
		chart : {
			panning : true,
			panKey : 'ctrl',
			zoomType : 'x',	
			backgroundColor: 'rgba(0,0,0,0)'			
		},
		title : {
			text : title,
			// x : -20,
			style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
		},
		subtitle : {
			text : '',
			x : -20
		},
		xAxis : {
			type : 'datetime',
			dateTimeLabelFormats : {
				millisecond : "%Y-%m-%d<br/>%H:%M:%S.%L",
				second : '%Y-%m-%d<br/>%H:%M:%S',
				minute : '%Y-%m-%d<br/>%H:%M',
				hour : '%Y-%m-%d<br/>%H:%M',
				day : '%Y<br/>%m-%d',
				week : '%Y<br/>%m-%d',
				month : '%Y-%m',
				year : '%Y'
			},
			labels:{
				// enabled:false,
				// formatter:function(a,b,c){
				// 	// console.log(this,"2222222222222",timemapx[this.value])
				// 	return timemapx[this.value]
				// },
				style:{
					color:"white"
				}
			},
			gridLineWidth: 0
		},
		yAxis : [{
				labels : {
					// format : 'A',
					style : {
						color : Highcharts.getOptions().colors[2]
					}
				},
				title : {
					text : '',
					style : {
						color : Highcharts.getOptions().colors[2]
					},

				},
				min: 0,
				gridLineWidth: 0
			}],
		tooltip : {
			xDateFormat : '%Y-%m-%d %H:%M:%S',
			shared : true,
			crosshairs : true,
		},
		legend : {
			enabled:false,
			align : 'center',
			verticalAlign : 'bottom',
			y : 0,
			floating : false,
			borderWidth : 0	,
			itemStyle: {
				color:"#C1FFC1"
			}			
		},
		credits : {
			enabled : false
		},
		series : listdata
	}
//	.....
	return option
}

//arraylist = []
function drawTopOptions(objectlist,title,redrawEntityFunc,openInfo){
	// objectlist [{id:123134,value:12354,}...]
	var datalist = []
	var positive_id = []
	var datalist2 = []
	var negative_id = []
	var minvalue = 0
	for (var i in objectlist){
		if (objectlist[i].value>=0){
			datalist.push([objectlist[i].id,objectlist[i].value])
			positive_id.push(objectlist[i].id)
		}else{
			datalist2.splice(0,0,[objectlist[i].id,objectlist[i].value])
			negative_id.splice(0,0,objectlist[i].id)
		}
		if (objectlist[i].value<minvalue){
			minvalue = objectlist[i].value
		}
		
	}
	return getTwoDirectBarOption(positive_id,datalist,negative_id,datalist2,title,redrawEntityFunc,openInfo)
	// if (datalist2.length>0 && datalist.length>0){
	// 	return getTwoDirectBarOption(positive_id,datalist,negative_id,datalist2,title)
	// 	// return getBarPotions(minvalue,datalist,datalist2,title)
	// }else{// 只存在正或负的时候
	// 	return getTwoDirectBarOption(positive_id,datalist,negative_id,datalist2,title)
	// 	// return getBarPotions(minvalue,datalist,datalist2,title)
	// }
}
function getTwoDirectBarOption(positive_id,datalist,negative_id,datalist2,title,redrawEntityFunc,openInfo){
	return {
		chart: {
			type: 'bar',
			panKey : 'ctrl',
			// zoomType : 'x',	
			backgroundColor: 'rgba(0,0,0,0)',
			events: {
				load: function() {
						var seriesGroup = this.seriesGroup;
						Highcharts.addEvent(seriesGroup.element, 'mouseover', function(e) {
							var clientX = e.clientX,clientY = e.clientY;
							infoObject.createNewInfoDiv(e.target.point.name,e.target.point.name,clientX,clientY,redrawEntityFunc,openInfo)
						});
						Highcharts.addEvent(seriesGroup.element, 'mouseleave', function(e) {
							var timeoutid = setTimeout(function(){infoObject.hiddenInfo()},300)
							infoObject.setTimeoutId(timeoutid);
						});
				},
				render:function(){
					infoObject.hiddenInfo()
				}
			}
		},
		title: {
			text: title,
			style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
		},
		xAxis: [{
			visible:false,
			// 负的
			categories: negative_id,
			reversed: true,
			labels: {
				step: 1,
				style:{
					color:"white"
				},
				formatter: function () {
					console.log(this)
					if (this.value === this.pos){
						return ""
					}else{
						return JSON.stringify(this.value).slice(1,4)+"..."
					}
				},
			},
			gridLineWidth: 0
		}, { 
			visible:false,
			opposite: true, 
			reversed: true,
			categories: positive_id,
			linkedTo: 0,
			// lineColor:
			labels: {
				step: 1,
				style:{
					color:"white"
				},
				formatter: function () {
					console.log(this)
					if (this.value === this.pos){
						return ""
					}else{
						return JSON.stringify(this.value).slice(1,4)+"..."
					}
				},
			},
			gridLineWidth: 0
		}],
		yAxis: {
			title: {
				text: null
			},
			labels: {
				// formatter: function () {
				// 	// console.log(this)
				// 	return this.value
				// },
				style:{
					color:"white"
				}
			},
			gridLineWidth: 0
			// min: -4000000,
			// max: 4000000
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		tooltip: {
			enabled:false,
			formatter: function (e) {
				// console.log("random",index)
				
				
				// console.log(e,this,$(e.chart.renderTo).css("left"),$(e.chart.renderTo).css("top"))
				// var point_x = parseFloat($(e.chart.renderTo).css("left"))+this.tooltipPos[0]
				// var point_y = parseFloat($(e.chart.renderTo).css("top"))+this.point.shapeArgs.y
				// infoObject.createNewInfoDiv(this.key,"enttiname 配电柜名称",point_x,point_y,redrawEntityFunc,openInfo)
				// console.log(this)
				// return '<b> entity:' + this.key + '</b><br/>' +
				// 	'值: ' + Highcharts.numberFormat(this.point.y, 0);
				return null
			}
		},
		// plotOptions: {
		// 	bar: {
		// 		dataLabels: {
		// 			align:"center",
		// 			enabled: true,
		// 			// allowOverlap: true ,// 允许数据标签重叠
		// 			formatter: function() {
		// 				console.log(this)
		// 				//this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
		// 				return this.key 
							
		// 			  }
		// 		}
		// 	}
		// },
		legend : {
			enabled:false,
			align : 'center',
			verticalAlign : 'bottom',
			y : 0,
			floating : false,
			borderWidth : 0	,
			itemStyle: {
				color:"#C1FFC1"
			}			
		},
		series: [{
			name: '负',
			data: datalist2,
			color:"lightgreen",
			dataLabels:{
				align:"right",
				enabled: true,
				// allowOverlap: true ,// 允许数据标签重叠
				formatter: function() {
					// console.log(this)
					//this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
					return ""+this.key 
					// +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
						
				  }
			}
		}, {
			name: '正',
			data: datalist,
			color:"red",
			dataLabels:{
				align:"left",
				enabled: true,
				// allowOverlap: true ,// 允许数据标签重叠
				formatter: function() {
					// console.log(this)
					//this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
					return ""+this.key 
					// +"<br/>value:" +  Highcharts.numberFormat(this.y , 2)
				  }
			}
		}],
		credits: {
            enabled: false
       	}
	}
}

function getBarPotions(minvalue,datalist,datalist2,title){
	return {
		chart: {
			type: 'column',
			inverted: true,
			backgroundColor: 'rgba(0,0,0,0)',
		},
		title: {
			text: title,
			style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
		},
		// subtitle: {
		// 	text: '数据截止 2017-03，来源: <a href="https://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
		// },
		xAxis: {
			type: 'category',
			// labels: {
				
			// },
			labels:{
				rotation: -45,  // 设置轴标签旋转角度
				// enabled:false,
				// formatter:function(a,b,c){
				// 	// console.log(this,"2222222222222",timemapx[this.value])
				// 	return timemapx[this.value]
				// },
				style:{
					color:"white"
				}
			},
			
			gridLineWidth: 0
		},
		yAxis: [{
			// min: 0,
			title: {
				text: "",
				style: {
					fontSize:'16px',
					fontWeight: 'bold',
					color:"white"
				}
			},
			labels:{
				// enabled:false,
				// formatter:function(a,b,c){
				// 	// console.log(this,"2222222222222",timemapx[this.value])
				// 	return timemapx[this.value]
				// },
				style:{
					color:"white"
				}
			},
			min:minvalue,
			gridLineWidth: 0
		}],
		legend: {
			enabled: false,
			itemStyle: {
				color:"#C1FFC1"
			}
		},
		tooltip: {
			// pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
		},
		series: [{
			name: 'top',
			data: datalist,
			dataLabels: {
				enabled: true,
				rotation: 0,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // :.1f 为保留 1 位小数
				y: 10
			},
			min:minvalue,
			color:"red",
		},
		{
			name: 'top',
			data: datalist2,
			dataLabels: {
				enabled: true,
				rotation: 0,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // :.1f 为保留 1 位小数
				y: 10
			},
			min:minvalue,
			color:"green",
		}
		],
		credits: {
            enabled: false
       }
	}
}



var infoObject ={ // 内部维护一个单一的显示框工厂函数，只产生一个实例
	$tooltipinfo : "",
	hiddenlock:false,
	timeoutid:0,
	createNewInfoDiv:function(entityid,entityname,left,top,redrawEntityFunc,openInfoFunc){// 第一次创建，第二次并不创建
		//创建图形的时候实现要清空之前的timeoutid
		clearTimeout(this.timeoutid)
		// this.removeInfoDiv()
		var that = this
		if (!this.$tooltipinfo){// 初始化的时候绑定事件
			var container  ="<div id='tooltip'style="+"position:fixed;z-index:1000;background:white;margin-top:-15px;"+"></div>",
			entitynameInfo = "<div>名称:<span id='entityname'>"+entityname+"</span><br/></div>"
			strChart = '<a class="regin-chart"  href="javascript:void(0);"   data-para="'+1+'" style="color:black;margin-left:5px;" >图表</a><br/>',
			strInfo = '<a class="regin-info"  href="javascript:void(0);"   data-para="'+1+'" style="color:black;margin-left:5px;" >用户信息</a>';
			this.$tooltipinfo = $(container)
			strName = $(entitynameInfo)
			strChart = $(strChart)
			strInfo = $(strInfo)
			this.$tooltipinfo.append(strName,strChart,strInfo);
			// this.$tooltipinfo.after(strChart);
			$("body").append(this.$tooltipinfo)
			// 初始化添加时间查询
			strChart.on('click',function(){
				// 获取并更新图表
				var entityid = $(that.$tooltipinfo).data("entityid")
				redrawEntityFunc(entityid)
				infoObject.hiddenInfo()
				// console.log("点击chart",entityid)
			});
			strInfo.on('click',function(){
				// console.log("点击info",this,entityid)
				var entityid = $(that.$tooltipinfo).data("entityid")
				openInfoFunc && openInfoFunc(entityid)
				infoObject.hiddenInfo()
			});
			//新增事件
			this.mouseleaveInfo()
			// 移入框框之后设置delay
			this.mouseoverInfo()
		}
		$(this.$tooltipinfo).css("left",left+20+"px")
		$(this.$tooltipinfo).css("top",top-10+"px")
		$(this.$tooltipinfo).data("entityid",entityid)
		$(this.$tooltipinfo).data("entityname",entityname)
		this.showInfo()
	},
	removeInfoDiv:function(){
		$(this.$tooltipinfo).remove()
		// 同时设置这个id
		this.$tooltipinfo = ""
	},
	hiddenInfo:function(){
		if(!this.hiddenlock){
			$(this.$tooltipinfo).hide()
		}
	},
	showInfo:function(){
		$(this.$tooltipinfo).find("#entityname").text($(this.$tooltipinfo).data("entityname"))
		var tooltipheight = parseInt($(this.$tooltipinfo).css("height"))
		$(this.$tooltipinfo).css("margin-top",-tooltipheight/2+"px")
		$(this.$tooltipinfo).show()
	},
	mouseleaveInfo:function(){
		// 内部离开外部，不能用mouseout 因为进入子元素也会触发mouseout
		var that = this;
		$(this.$tooltipinfo).on("mouseleave",function(e){
			// console.log("1111111111111111111111")
			e.stopPropagation()
			that.hiddenlock = false;
			// 延迟200ms小时
			var timeoutid = setTimeout(function(){that.hiddenInfo()},300)
			that.setTimeoutId(timeoutid)
		})
	},
	mouseoverInfo:function(){
		var that = this;
		$(this.$tooltipinfo).on("mouseover",function(e){
			// console.log("1111111111111111111111")
			clearTimeout(that.timeoutid);
			that.hiddenlock = true;
		})
	},
	setTimeoutId:function(id){
		this.timeoutid = id
	}
}


function drawHeatmapOptions(listdata,title,redrawEntityFunc,openInfo){// redrawEntityFunc(entityid)
	// var title = "用电"
	// var listdata= [{x:123456,y:0,value:200},{x:123456,y:1,value:200},{x:123456,y:3,value:200},{x:1222356,y:23,value:200},{x:1234567,y:3,value:200}]
	var xmaptime = {}
	var timemapx = {}//代表时间与x的映射
	var namemap = {}

	for (var i in listdata){
		xmaptime[listdata[i].x] = 0
	}
	var xlist = Object.keys(xmaptime)
	var len = xlist.length
	var min = 1364774400000
	var max = 1364774400000 + (len-1) * 1000 * 60 * 60 * 24
	for(var i in xlist){
		var id = xlist[i]
		xmaptime[id] = min+ i * 1000 * 60 * 60 * 24
		timemapx[min+ i * 1000 * 60 * 60 * 24] = id
	}
	var newdatalist = []
	for  (var i in listdata){
		var id = listdata[i].x
		var name = listdata[i].name
		newdatalist.push({x:xmaptime[id],y:listdata[i].y,value:listdata[i].value,name:name})
		namemap[id] = name
	}
	return {
		// data: {
		//   csv: document.getElementById('csv').innerHTML
		// },
		chart: {
			type: 'heatmap',
			inverted: true,
			backgroundColor: 'rgba(0,0,0,0)',
			events: {
				load: function() {
						var xAxis = this.xAxis[0];
						var chart = this
						// console.log("11111111",xAxis.labelGroup)
						Highcharts.addEvent(xAxis.labelGroup.element, 'mouseover', function(e) {
							// 将原生事件添加上 chartX 和 chartY 值
							e = chart.pointer.normalize(e);
							e.stopPropagation();
							var height = xAxis.height,len = xAxis.categories.length,offsetX = e.offsetX,offsetY = e.offsetY,categories = xAxis.categories;


							// 计算x轴的坐标位置
							var key = 0
							var brothers = null;
							if($(e.target)[0].tagName.toLowerCase() === "tspan"){
								
								brothers = $(e.target).parent().parent().children()
								
								key = parseInt($(e.target).parent().index())// xAxisa 轴的位置
								// console.log("tspan",index)
							}else{
								brothers = $(e.target).parent().children()
								key = parseInt($(e.target).index())// xAxisa 轴的位置
							}
							var len = brothers.length
							// 计算index位置为第几大
							var index = 0
							for (var i=0;i<len;i++){
								if(parseInt($(brothers[i]).attr("y"))<parseInt($(brothers[key]).attr("y"))){
									index+=1
									// console.log("22222")
								}else{
									// console.log("3333")
								}
							}
							
							//修正一下

							var clientX = e.clientX,clientY = e.clientY;
							// console.log("random",index)
							infoObject.createNewInfoDiv(categories[index],namemap[xlist[index]],clientX,clientY,redrawEntityFunc,openInfo)
						});
						Highcharts.addEvent(xAxis.labelGroup.element, 'mouseleave', function(e) {
							// 将原生事件添加上 chartX 和 chartY 值
							// console.log("random",index)
							var timeoutid = setTimeout(function(){infoObject.hiddenInfo()},300)
							infoObject.setTimeoutId(timeoutid);
							// console.log("timeoutid",timeoutid)
						});
						// Highcharts.addEvent(xAxis.labelGroup.element, 'mouseover', function(e) {
						// 	// alert("aaaaa")
						// 	// console.log(e,this,$(this).attr("class"))
						// 	infoObject.hiddenInfo()
						// });
				},
				render:function(){
					infoObject.hiddenInfo()
				}
			}
		},
		title: {
			text: title,
			align: 'center',
			style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
		},
		legend: {
			title: {
				text: title,
				style: {
					color: 'white'
				},
			},
			backgroundColor: '#303030',
			// borderColor: '#ffffff',
			borderWidth: 2,
			borderRadius: 0,
			// shadow: true,
			itemStyle: {
				color: '#C1FFC1',
				fontWeight: 'bold'
			},
		},
		// subtitle: {
		// 	text: 'Temperature variation by day and hour through April 2013',
		// 	align: 'left'
		// },
		xAxis: {
			type:"category",
			tickInterval: 60*60*24*1000,// 以一天为单位，也就是不同个
			min: min-12*60*60*1000,
			max: max+12*60*60*1000,
			labels:{
				// enabled:false,
				formatter:function(a,b,c){
					// console.log(this,"2222222222222",timemapx[this.value])
					// console.log(namemap,timemapx,this.value)
					return this.value.slice(0,5)+"..."
				},
				style:{
					color:"white"
				}
			},
			gridLineWidth: 0,
			categories:xlist, // 这个要确保为[id,id,id] 而不是名字
			tickmarkPlacement:"on",
			
			// type:"category",
			// tickPositioner:function(a,b,c){
			// 	console.log(this,a,b,c)
			// 	return this.tickPositions
			// }
		},
		yAxis: {
			type:"category",
			title: {
				text: null
			},
			labels: {
				// format: '{value}:00',
				style:{
					color:"white"
				},
				formatter:function(a){

					var chartWidth	= this.chart.chartWidth
					var hourvalue = parseInt(this.value)

					// console.log(chartWidth,this.chart,a,b,c)
					if (chartWidth/window.innerWidth<0.25){//小图
						return a.pos % 2 === 0 ? hourvalue+":00":""
					}else{
						return hourvalue +":00"
					}
				}
			},
			minPadding: 0,
			maxPadding: 0,
			startOnTick: false,
			endOnTick: false,
			tickPositions: [0,1,2,3,4,5, 6,7,8,9,10,11, 12,13,14,15,16,17, 18,19,20,21,22, 23],
			tickWidth: 1,
			min: 0,
			max: 23,
			gridLineWidth: 0
			
		},
		tooltip: {
			headerFormat: title+'<br/>',
			pointFormatter: function(a,b,c){
				// console.log(this,a,b,c)
				var x = timemapx[this.options.x]
				var y = this.options.y
				var value = this.options.value
				return "配电柜id : "+ x + "<br/> 时刻:" + y + ":00" + "<br/>" + title +"量:" + value 
			}
		},
		colorAxis: {
			stops: [
				[0, '#3060cf'],
				[0.5, '#fffbbc'],
				[0.9, '#c4463a']
			],
			// min: -5
		},
		series: [{
			data:newdatalist,
			borderWidth: 0,
			colsize: 24 * 36e5, // one day
			
		}],
		credits: {
            enabled: false
       }
	}

}



//迁入前出图
function drawActionOptions(objectlist,title){
	// objectlist [{id:"111111",type:"in|out",starttime:"2015-1201",endtime:123134}...]
	var inlist = []
	var yAxis = []
	for (var i in objectlist){
		var day = Highcharts.dateFormat('%m-%d',objectlist[i].starttime + 8*60*60*1000)
		if (!yAxis.includes(day)){
			yAxis.push(day)
		}
		inlist.push({
			x:(objectlist[i].starttime + 8*60*60*1000) % (24*60*60*1000),
			x2:(objectlist[i].endtime + 8*60*60*1000)% (24*60*60*1000),
			y:yAxis.indexOf(day),
			name:objectlist[i].type,
			id:objectlist[i].id,
			color:objectlist[i].value>0?"rgba(255,0,0,0.8)":"rgba(0,255,0,0.8)",
			value:objectlist[i].value,
		})
	}

	// console.log(inlist,yAxis)
	// console.log("重新画objectlist")
	return {
		chart: {
			type: 'xrange',
			// type:
			backgroundColor: 'rgba(0,0,0,0)',
			zoomType: 'x',
		},
		title: {
			text: title,
			style: {
                fontSize:'16px',
				fontWeight: 'bold',
				color:"white"
            }
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%H:%M',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			},
			labels:{
				style:{
					color:"white"
				}
			},
			min:0,
			max:24*60*60*1000,
		},
		yAxis: {
			type:"catogory",
			title: {
				text: ''
			},
			categories: yAxis,
			reversed: true,
			labels:{
				style:{
					color:"white"
				}
			},
			gridLineWidth: 0
		},
		tooltip: {
			dateTimeLabelFormats: {
				day: '%Y-%m-%d'
			},
			headerFormat: title+'<br/>',
			pointFormatter: function(a,b,c){
				// console.log(this,a,b,c)
				var id = this.options.id
				var x = this.options.x
				var x2 = this.options.x2
				var y = this.options.y
				var name = this.options.name
				var value = this.options.value
				// console.log(this.options)
				// console.log(this)
				return "配电柜 : "+ id + "<br/> 开始:" +yAxis[y]+  Highcharts.dateFormat(' %H:%M:%S',x) + "- 结束:"+yAxis[y] +Highcharts.dateFormat(' %H:%M:%S',x2) + "<br/>" + name +":"+  Math.abs(value)
			}
		},
		plotOptions:{
			bar:{
				dataLabels:{
					borderRadius:0
				}
			}
		},
		legend : {
			enabled:false,
			align : 'center',
			verticalAlign : 'bottom',
			y : 0,
			floating : true,
			borderWidth : 0,
			itemStyle: {
				color:"#C1FFC1"
			}
		},
		series: [{
			// name: '项目1',
			// pointPadding: 0,
			// groupPadding: 0,
			borderColor: 'rgba(0,0,0,0)',
			// pointWidth: 15,
			data: inlist,
			borderRadius:0,
			pointPadding:0,
            groupPadding:0,
			// color:"black",
			dataLabels: {
				enabled: true,
				// color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
				formatter:function(){
					return this.key
				}
			}
		}],
		credits: {
            enabled: false
       	}
		
	}
}


// 箱线图测试
// var title = "用电"
// var boxchart2 = [{
// 	name: '观测值',
// 	data: [
// 		[760, 801, 848, 895, 965],
// 		[733, 853, 939, 980, 1080],
// 		[714, 762, 817, 870, 918],
// 		[724, 802, 806, 871, 950],
// 		[834, 836, 864, 882, 910]
// 	],
// 	tooltip: {
// 		headerFormat: '<em>实验号码： {point.key}</em><br/>'
// 	}
// }, {
// 	name: '异常值',
// 	color: Highcharts.getOptions().colors[0],
// 	type: 'scatter',
// 	data: [ // x, y positions where 0 is the first category
// 		[0, 644],
// 		[4, 718],
// 		[4, 951],
// 		[4, 969]
// 	],
// 	marker: {
// 		fillColor: 'white',
// 		lineWidth: 1,
// 		lineColor: Highcharts.getOptions().colors[0]
// 	},
// },]
// var timedict = {}
// var xAxis = [ "2018/11/23 00:00", "2018/11/24 00:15", "2018/11/24 00:30", "2018/11/25 00:40", "2018/11/25 00:20"]
// for (var i in xAxis){
// 	var day  = xAxis[i].split(" ")[0]
// 	timedict[day] = timedict[day]===undefined?1:timedict[day]+1
// }
// console.log(timedict)
// var timekey = Object.keys(timedict).sort()
// var newxAxis = [-0.5]
// var newdata = []
// var timeindex = { // 存储时间的inex
// }
// var calcount = 0
// var count = 0
// for (var i in timekey){
// 	var day = timekey[i]
// 	var n = timedict[day]
// 	var before = calcount
// 	calcount  = calcount + n
// 	timeindex[day] = before + n/2 -0.5// 中间点插入数据
// 	// var need2 = n%2// 中间点插入数据
// 	// var count = 0
// 	var b = newxAxis[newxAxis.length-1]
// 	newxAxis.push(before + n/2 -0.5)
// 	newxAxis.push(2*(before + n/2 -0.5)-b)
// 	for (var i=0;i<n;i++){
// 		newdata.push([count,0])
// 		count+=1
// 	}
// }
// if(boxchart2.length === 2){
// 	boxchart2.push(
// 		{
// 			name:" ",
// 			xAxis: 1,
// 			data:[[0,0],[1,0],[2,0],[3,0],[4,0]]//newdata
// 		}
// 	)
// }
// // // var xAxis = [ "0", "3", "6 <br/>2018/11/24 ", "9", "12"] 
// var listdata = boxchart2
// var xAxisList = xAxis
// console.log(newxAxis)
// var chart = Highcharts.chart('container', {
// 	chart: {
// 		type: 'boxplot',
// 		zoomType: 'x',
// 		backgroundColor: 'rgba(0,0,0,1)',
// 		// height: '50%'
// 		// spacingBottom:12
// 	},
// 	title: {
// 		text: title,
// 		style: {
// 			fontSize:'16px',
// 			fontWeight: 'bold',
// 			color:"white"
// 		}
// 	},
// 	/* legend: {
//             enabled: false
//         	y: '10%',
//             data:names  
//         }, */
// 	legend : {
// 		align : 'center',
// 		verticalAlign : 'bottom',
// 		y : 0,
// 		floating : false,
// 		itemStyle: {
// 			color:"#C1FFC1",
// 			fontWeight: 'bold'
// 		},
// 		backgroundColor: '#303030',
// 		// borderColor: '#ffffff',
// 		borderWidth: 2,
// 		borderRadius: 0,
// 	},
// 	xAxis: [{
// 		type:"category",
// 		categories: xAxisList,//'xAis',
// 		title: {
// 			text: ''
// 		},
// 		labels:{
// 			// enabled:false,
// 			formatter:function(a,b,c){
// 				// console.log(this,"2222222222222",timemapx[this.value])
// 				// console.log(this.value)
// 				// console.log(this)
// 				var chartHeigh = this.chart.chartHeigh
// 				var chartWidth	= this.chart.chartWidth
// 				var category = this.axis.categories
// 				var value = this.value
// 				var timevalue = value.split(" ")[0]
// 				var hourvalue = value.split(" ")[1]
// 				if (hourvalue==="6"){
// 					return hourvalue //+ "<br/>" + timevalue
// 				}else{
// 					return hourvalue
// 				}
// 			},
// 			rotation: 0,  // 设置轴标签旋转角度
// 			style:{
// 				color:"white"
// 			}
// 		},
// 		gridLineWidth: 0
// 	},{
// 		// type:"datetime",
// 		// categories: timeindex,
// 		type:"category",
// 		labels: {
// 			// overflow: 'justify',
// 			style:{
// 				color:"white"
// 			},
// 			formatter:function(a,b,c){
// 				console.log(this.value,timeindex)
// 				for(var time in timeindex){
// 					if(timeindex[time] === this.value){
// 						return time
// 					}
// 				}
// 				return ""
// 			}
// 		},
// 		min:0,
// 		tickmarkPlacement:"on",
// 		tickPositions:newxAxis//[-0.5,0.5,1.5,3,4.5]//,Object.values(timeindex)
// 	}],
// 	yAxis: {
// 		title: {
// 			text: ' '
// 		},
// 		labels:{
// 			// enabled:false,
// 			// formatter:function(a,b,c){
// 			// 	// console.log(this,"2222222222222",timemapx[this.value])
// 			// 	return timemapx[this.value]
// 			// },
// 			style:{
// 				color:"white"
// 			}
// 		},
// 		gridLineWidth: 0
// 	},
// 	tooltip: {
// 		pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
// 		'上边缘: {point.high}<br/>' +
// 		'Q3\t: {point.q3}<br/>' +
// 		'中位数: {point.median}<br/>' +
// 		'Q1\t: {point.q1}<br/>' +
// 		'下边缘: {point.low}<br/>'
// 	},
// 	series: listdata,
// 	credits: {
// 		enabled: false
// 	},
// });