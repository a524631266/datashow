/*
 Highcharts JS v6.2.0 (2018-10-17)
 X-range series

 (c) 2010-2018 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:"function"===typeof define&&define.amd?define(function(){return g}):g(Highcharts)})(function(g){(function(c){var g=c.addEvent,t=c.defined,x=c.Color,u=c.seriesTypes.column,f=c.each,v=c.isNumber,r=c.isObject,q=c.merge,p=c.pick,y=c.seriesType,z=c.Axis,k=c.Point,A=c.Series;y("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;r(a)&&(a=a.amount);t(a)||(a=
0);return 100*a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},borderRadius:0,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:c.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,autoIncrement:c.noop,getColumnMetrics:function(){function a(){f(n.series,
function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,n=this.chart;a();b=u.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,n,e){b=A.prototype.cropData.call(this,this.x2Data,b,n,e);b.xData=a.slice(b.start,b.end);return b},translatePoint:function(a){var b=this.xAxis,n=this.yAxis,e=this.columnMetrics,d=this.options,c=d.minPointLength||0,m=a.plotX,l=p(a.x2,a.x+(a.len||0)),h=b.translate(l,0,0,0,1),l=Math.abs(h-m),w=this.chart.inverted,g=p(d.borderWidth,1)%2/2,f=e.offset,
k=Math.round(e.width);c&&(c-=l,0>c&&(c=0),m-=c/2,h+=c/2);m=Math.max(m,-10);h=Math.min(Math.max(h,-10),b.len+10);t(a.options.pointWidth)&&(f-=(Math.ceil(a.options.pointWidth)-k)/2,k=Math.ceil(a.options.pointWidth));d.pointPlacement&&v(a.plotY)&&n.categories&&(a.plotY=n.translate(a.y,0,1,0,1,d.pointPlacement));a.shapeArgs={x:Math.floor(Math.min(m,h))+g,y:Math.floor(a.plotY+f)+g,width:Math.round(Math.abs(h-m)),height:k,r:this.options.borderRadius};d=a.shapeArgs.x;c=d+a.shapeArgs.width;0>d||c>b.len?(d=
Math.min(b.len,Math.max(0,d)),c=Math.max(0,Math.min(c,b.len)),b=c-d,a.dlBox=q(a.shapeArgs,{x:d,width:c-d,centerX:b?b/2:null})):a.dlBox=null;a.tooltipPos[0]+=w?0:l/2;a.tooltipPos[1]-=w?-l/2:e.width/2;if(b=a.partialFill)r(b)&&(b=b.amount),v(b)||(b=0),e=a.shapeArgs,a.partShapeArgs={x:e.x,y:e.y,width:e.width,height:e.height,r:this.options.borderRadius},a.clipRectArgs={x:e.x,y:e.y,width:Math.max(Math.round(l*b+(a.plotX-m)),0),height:e.height};n.categories&&(a.category=n.categories[a.y])},translate:function(){u.prototype.translate.apply(this,
arguments);f(this.points,function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var c=this.options,e=this.chart.renderer,d=a.graphic,g=a.shapeType,m=a.shapeArgs,l=a.partShapeArgs,h=a.clipRectArgs,f=a.partialFill,k=a.selected&&"select",p=c.stacking&&!c.borderRadius;if(a.isNull)d&&(a.graphic=d.destroy());else{if(d)a.graphicOriginal[b](q(m));else a.graphic=d=e.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=e[g](m).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(d);
l&&(a.graphicOverlay?(a.graphicOverlay[b](q(l)),a.clipRect.animate(q(h))):(a.clipRect=e.clipRect(h.x,h.y,h.width,h.height),a.graphicOverlay=e[g](l).addClass("highcharts-partfill-overlay").add(d).clip(a.clipRect)));a.graphicOriginal.attr(this.pointAttribs(a,k)).shadow(c.shadow,null,p);l&&(r(f)||(f={}),r(c.partialFill)&&(f=q(f,c.partialFill)),b=f.fill||x(a.color||this.color).brighten(-.3).get(),a.graphicOverlay.attr(this.pointAttribs(a,k)).attr({fill:b}).shadow(c.shadow,null,p))}},drawPoints:function(){var a=
this,b=a.getAnimationVerb();f(a.points,function(c){a.drawPoint(c,b)})},getAnimationVerb:function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"}},{applyOptions:function(){var a,b=k.prototype.applyOptions.apply(this,arguments),c=b.series;c.options.colorByPoint&&!b.options.color&&(a=c.options.colors||c.chart.options.colors,c=b.y%(a?a.length:c.chart.options.chart.colorCount),a=a&&a[c],b.color=a,b.options.colorIndex||(b.colorIndex=c));return b},init:function(){k.prototype.init.apply(this,
arguments);this.y||(this.y=0);return this},setState:function(){k.prototype.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())},getLabelConfig:function(){var a=k.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});g(z,"afterGetSeriesExtremes",function(){var a=this.series,b,c;this.isXAxis&&
(b=p(this.dataMax,-Number.MAX_VALUE),f(a,function(a){a.x2Data&&f(a.x2Data,function(a){a>b&&(b=a,c=!0)})}),c&&(this.dataMax=b))})})(g)});
//# sourceMappingURL=xrange.js.map
