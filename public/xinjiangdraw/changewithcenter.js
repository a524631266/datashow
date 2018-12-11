
// var initCenterId = ""
// // arraylist 代表所有图标的数量
// function changeWidthCenter(arraylist,divid){
// }
// $("#"+id).css("width")
// initDoubleClick(["left-top","left-middle","left-bottom","center","right-top","right-middle","right-bottom"],"center")

(function(win){
    // console.log("win",win,$)
    var initCenterId = ""
    win.initDoubleClick = function(object,divid){
        setCenterID(divid)
        // console.log("11111111")
        for (var id in object){
            (function changeWithCenter(cid){
                // console.log("co")
                $("."+cid).dblclick(function(event){
                    var innerWidth = window.innerWidth,innerHeight = window.innerHeight;
                    console.log("initCenterId",initCenterId)
                    console.log("当前点击cid",cid)
                    console.log("divid",divid)
                    console.log("divid",object)
                    if(cid === divid || initCenterId === divid){
                        var cw = parseInt($("."+initCenterId).css("width"));
                        var ch = parseInt($("."+initCenterId).css("height"));
                        var cl = parseInt($("."+initCenterId).css("left"));
                        var ct = parseInt($("."+initCenterId).css("top"));
                        var sw = parseInt($("."+cid).css("width"));
                        var sh = parseInt($("."+cid).css("height"));
                        var sl = parseInt($("."+cid).css("left"));
                        var st = parseInt($("."+cid).css("top"));
                        $("."+cid).css("width",cw/innerWidth*100+"%")
                        $("."+cid).css("height",ch/innerHeight*100+"%")
                        $("."+cid).css("left",cl/innerWidth*100+"%")
                        $("."+cid).css("top",ct/innerHeight*100+"%")
                        $("."+initCenterId).css("width",sw/innerWidth*100+"%")
                        $("."+initCenterId).css("height",sh/innerHeight*100+"%")
                        $("."+initCenterId).css("left",sl/innerWidth*100+"%")
                        $("."+initCenterId).css("top",st/innerHeight*100+"%")
                        // 重新刷新图表 
                        object[initCenterId] && object[initCenterId].reflow && object[initCenterId].reflow()
                        object[cid] && object[cid].reflow && object[cid].reflow()
                        // setTimeout(function(){reflow(object,initCenterId,cid)},50)
                        // 更新图例样式
                        // var optioncid = {}
                        // var optioncenid = {}
                        object[cid].legend && object[cid].legend.options && object[cid].legend.update({enabled:!object[cid].legend.options.enabled})
                        object[initCenterId].legend && object[initCenterId].legend.options  && object[initCenterId].legend.update({enabled:!object[initCenterId].legend.options.enabled})
                        setCenterID(cid)
                    }else if(cid !== initCenterId){//之前的initCenterId与当前的cid不相同，也就是说，不双击中心图的时候
                        var sw = parseInt($("."+cid).css("width"));
                        var sh = parseInt($("."+cid).css("height"));
                        var sl = parseInt($("."+cid).css("left"));
                        var st = parseInt($("."+cid).css("top"));

                        var bcw = parseInt($("."+divid).css("width"));
                        var bch = parseInt($("."+divid).css("height"));
                        var bcl = parseInt($("."+divid).css("left"));
                        var bct = parseInt($("."+divid).css("top"));

                        var cw = parseInt($("."+initCenterId).css("width"));
                        var ch = parseInt($("."+initCenterId).css("height"));
                        var cl = parseInt($("."+initCenterId).css("left"));
                        var ct = parseInt($("."+initCenterId).css("top"));
                        
                        $("."+cid).css("width",cw/innerWidth*100+"%")
                        $("."+cid).css("height",ch/innerHeight*100+"%")
                        $("."+cid).css("left",cl/innerWidth*100+"%")
                        $("."+cid).css("top",ct/innerHeight*100+"%")

                        $("."+divid).css("width",sw/innerWidth*100+"%")
                        $("."+divid).css("height",sh/innerHeight*100+"%")
                        $("."+divid).css("left",sl/innerWidth*100+"%")
                        $("."+divid).css("top",st/innerHeight*100+"%")

                        $("."+initCenterId).css("width",bcw/innerWidth*100+"%")
                        $("."+initCenterId).css("height",bch/innerHeight*100+"%")
                        $("."+initCenterId).css("left",bcl/innerWidth*100+"%")
                        $("."+initCenterId).css("top",bct/innerHeight*100+"%")
                        
                        object[initCenterId] && object[initCenterId].reflow && object[initCenterId].reflow()
                        object[cid] && object[cid].reflow && object[cid].reflow()
                        object[divid] && object[divid].reflow && object[divid].reflow()
                        // setTimeout(function(){reflow(object,initCenterId,cid,divid)},50)
                        object[cid].legend && object[cid].legend.options  && object[cid].legend.update({enabled:!object[cid].legend.options.enabled})
                        object[initCenterId].legend && object[initCenterId].legend.options && object[initCenterId].legend.update({enabled:!object[initCenterId].legend.options.enabled})
                        setCenterID(cid)
                    }
                    
                    
                })
            })(id)
        }
    }
    function setCenterID(divid){//初始化内在的中心图变量
        initCenterId = divid
    }
    function reflow(object,initCenterId,cid,divid){
        console.log(initCenterId,cid,divid)
        object[initCenterId] && object[initCenterId].reflow && object[initCenterId].reflow()
        object[cid] && object[cid].reflow && object[cid].reflow()
        object[divid] && object[divid].reflow && object[divid].reflow()
    }
})(window)