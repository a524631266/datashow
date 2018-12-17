(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
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
	echarts.registerMap('山南地区', {
		"type" : "FeatureCollection",
		"features" : [ {
			"type" : "Feature",
			"id" : "540525",
			"properties" : {
				"name" : "曲松县",
				"cp" : [ 92.201066, 29.063656 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540522",
			"properties" : {
				"name" : "贡嘎县",
				"cp" : [ 90.985271, 29.289078 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540521",
			"properties" : {
				"name" : "扎囊县",
				"cp" : [ 91.338, 29.246476 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540523",
			"properties" : {
				"name" : "桑日县",
				"cp" : [ 92.015732, 29.259774 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540502",
			"properties" : {
				"name" : "乃东区",
				"cp" : [ 91.76525, 29.236106 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540524",
			"properties" : {
				"name" : "琼结县",
				"cp" : [ 91.683753, 29.025242 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540526",
			"properties" : {
				"name" : "措美县",
				"cp" : [ 91.432347, 28.437353 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540528",
			"properties" : {
				"name" : "加查县",
				"cp" : [ 92.591043, 29.140921 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540529",
			"properties" : {
				"name" : "隆子县",
				"cp" : [ 92.463309, 28.408548 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540530",
			"properties" : {
				"name" : "错那县",
				"cp" : [ 91.960132, 27.991707 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540527",
			"properties" : {
				"name" : "洛扎县",
				"cp" : [ 90.858243, 28.385765 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		}, {
			"type" : "Feature",
			"id" : "540531",
			"properties" : {
				"name" : "浪卡子县",
				"cp" : [ 90.398747, 28.96836 ],
				"childNum" : 0
			},
			"geometry" : {
				"type" : "Polygon",
				"coordinates" : [],
				"encodeOffsets" : []
			}
		} ],
		"UTF8Encoding" : true
	});
}));