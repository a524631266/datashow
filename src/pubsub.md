popsub 函数对应的公共方法

@openLeftBar
该方法用来自动打开树选择框
true 打开
false 关闭
```
PubSub.subscribe("openLeftBar",(mesg: any,action: boolean) => {
        this.openLeftBar = action;
      });
```
@toggleLeftBar
该方法用来自动打开或关闭
```
PubSub.subscribe("toggleLeftBar",(mesg: any) => {
        this.openLeftBar = !this.openLeftBar;
      });
```
@updateBread
更新面包屑的标题名根据数组来更新
```
@PubSub.subscribe("updateBread",(msg: any,data: ChildrenValue[])=>{
            this.routes = data;
        });
```
@showtooltip
该方法用来显示tooltip
```
@PubSub.subscribe("showtooltip",async (mesg: any,data: {entity: string,name: string,isLeaf: boolean,level: number,clientX: number,clientY: number,target: DOMRect,coord: [number, number]}) => {
          this.locktooltip = true;
          this.nodedataref.key = data.entity;
          this.nodedataref.name = data.name;
          this.nodedataref.isLeaf = data.isLeaf;
          this.nodedataref.level = data.level;
          this.nodedataref.coord = data.coord;
          if( data.target) {
              this.overlayStyle = {left: (data.target.x+data.target.width) + "px",top: data.target.y + "px"};
          } else {
              this.overlayStyle = {left: data.clientX+"px",top: data.clientY+"px"};
          }
          this.classname = "tooltip3";
        });
```
@hidetooltip
该方法用来隐藏tooltip
```
PubSub.subscribe("hidetooltip",(mesg: any) => {
            // if(!this.locktooltip) {
                this.delayhidetooltip();
            // }
        });
```
@showUserinfo
该方法用来显示用户信息
```
PubSub.publish("showUserinfo",{
                entity: data.key,
                name: data.name}
                );
```

@updateleftbarname        
PubSub.subscribe("updateleftbarname",this.updateleftbarname);
@updaterightbarname  
PubSub.subscribe("updaterightbarname",this.updaterightname);
@updatemiddledata
PubSub.subscribe("updatemiddledata",this.updatemiddledata);




@doubleclick2changecenter 
双加交换图表的中心位置
```
PubSub.subscribe("doubleclick2changecenter",(mesg: any, id: string)=> {
            let idindex= 0;
            let beforepositionClass = "";
            let geoIndex = 0;
            let geopositionClass = "";
            this.datalist.some(
                (data: any,index: number) => {
                    // tslint:disable-next-line:no-unused-expression
                    if (data.id === this.centerid) {
                        geoIndex = index;
                        geopositionClass = data.positionClass;
                        return true;
                    } else {
                        return false;
                    }
                }
            );
            this.datalist.some(
                (data: any,index: number) => {
                    // tslint:disable-next-line:no-unused-expression
                    if (data.id === id) {
                        idindex = index;
                        beforepositionClass = that.datalist[index].positionClass;
                        return true;
                    } else {
                        return false;
                    }
                }
            );
            if (beforepositionClass !== PositionClass.Center) {
                this.datalist.some(
                    ( data: any ,index: number) => {
                        if(data.positionClass === PositionClass.Center) {
                            // debugger;
                            if (id === this.centerid || data.id === this.centerid ) {
                                that.datalist[index].positionClass = beforepositionClass as any;
                                that.datalist[idindex].positionClass = PositionClass.Center;
                            } else {
                                that.datalist[idindex].positionClass = PositionClass.Center;
                                that.datalist[index].positionClass = geopositionClass as any;
                                that.datalist[geoIndex].positionClass = beforepositionClass as any;
                            }
                            return true;
                        } else {
                            return false;
                        }
                    }
                );
            }
        });
```

## 添加pubsub时事件 在 TooltipRoute中定义

PubSub.subscribe("leafrouter2home",(mesg: any,data: {entity: string,name: string}) => {
            this.leafrouter2home(data);
        });
        PubSub.subscribe("leafrouter2info",(mesg: any,data: {entity: string,name: string}) => {
            this.leafrouter2info(data);
        });


moment官网
http://momentjs.cn/