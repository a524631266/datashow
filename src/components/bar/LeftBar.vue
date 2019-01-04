<template>
  <!-- <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="tooltipShow" overlayClassName="tooltip2" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template> -->
        <div class="treepanel" :style="{height:treeheight}">
        <a-tree
            :treeData="treeData"
            :expandedKeys="expandedKeys"
            @select="onSelect"
            @mouseenter="showtooltip"
            @mouseleave="hidetooltip"
            showIcon 
        >
            <a-icon slot="org" type="home" />
            <a-icon slot="user" type="user" />
            <template slot="custom" slot-scope="data">
                <!-- {{data.dataRef.title}}
                <a v-if="data.dataRef.hover" class="btn btn-sm right">图表</a>
                <a v-if="data.dataRef.hover" class="btn btn-sm right">用户信息</a> -->
                {{data.title}}
                <a v-if="data.hover" class="btn btn-sm" @click.prevent.stop="router2home(data)" style="position:relative;color:#007bff;text-decoration:underline">图表</a>
                <a v-if="data.hover" class="btn btn-sm" @click.prevent.stop="router2info(data)" style="position:relative;color:#007bff;text-decoration:underline">用户信息</a>
            </template>
            <!-- <a href="#" slot="entity">123</a> -->
        </a-tree>
        </div>
  <!-- </a-popover> -->
  <!-- <a-tree-select
    showSearch
    style="width: 300px"
    placeholder='请选择节点'
    :loadData="onLoadData"
    :treeData="treeData"
  >
  </a-tree-select> -->
  <!-- <a-tree-select
    showSearch
    style="width: 300px"
    placeholder='请选择节点'
    :loadData="onLoadData"
    :treeData="treeData"
    :value="selectvalue"
    labelInValue
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
  /> -->
    <!-- <a-tree
    checkable
    @expand="onExpand"
    :expandedKeys="expandedKeys"
    :autoExpandParent="autoExpandParent"
    v-model="checkedKeys"
    @select="onSelect"
    :loadData="onLoadData"
    :selectedKeys="selectedKeys"
    :treeData="treeData"
  /> -->
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
const prev = process.env.NODE_ENV === "development"? "/tree": "";
import Antd from "ant-design-vue";
import Axios from "axios";
import { entity,name,level } from "@/config/initOptions.ts";
import PubSub from 'pubsub-js';
export interface ChildrenValue {
    id: string ;
    pId: number;
    name: string;
    key: string;
    title: string;
    mapname: string;
    icon: string;
    level: number;
    coord: [number,number];
    isLeaf: boolean;
    entityNum: number;
    isEntity: boolean;
    label: string;
    value: string;
    lnglat: string;
    cityLnglat: string;
    districtLnglat: string;
    slots: {icon: string};
    hover: boolean;
    scopedSlots: {title: string};
    on: {
        [name: string]: (e: any)=>void
    };
}

@Component({
    components: {
        ATree:Antd.Tree,
        // ATreeSelect: Antd.TreeSelect,
        // ATooltip: Antd.Tooltip,
        // APopover: Antd.Popover
        AIcon: Antd.icon,
    },
})
export default class LeftBar extends Vue {
    private openLeftBar = false;
    private treeheight = "1000px";
    private treeData: ChildrenValue[] = [
                {
                    id: "99998999",
                    pId: 0,
                    name,
                    title:name,
                    mapname:name,
                    icon: `${prev}/css/img/diy/building.png`,
                    // open: true,
                    // nocheck:true,
                    level,
                    coord:[0,0],// [87.62781199999995,43.793028],
                    isLeaf: false,
                    label: name,
                    key: "99998999",
                    value: "99998999",
                    slots: {
                        icon: 'org',
                        // title: 'custom',
                    },
                    scopedSlots: {
                        title: 'custom'
                    },
                    hover: false,
                }
            ] as any;
    private historytreeSelectData: { [key: string]: ChildrenValue} = {[this.treeData[0].key]: JSON.parse(JSON.stringify(this.treeData[0]))};
    private expandedKeys: string[] = [];
    private tooltipShow = false;
    private tooltipplacement = "leftTop";
    private nodedataref: ChildrenValue = {} as any;
    private rootlevel = 2; // 根等级
    // @Emit()// 不能用，否则无法找到Promise
    private onLoadData(treeNode: any) {
        // console.log("treeNode",treeNode);
        const {eventKey: postid} = treeNode;
        const {level} = treeNode.dataRef;
        // const {eventKey: postid ,dataRef:{id ,level }} = treeNode;
        return new Promise((resolve,reject) => {
            // console.log(treeNode.dataRef.children);
            // if (treeNode.dataRef.children) {
            if (treeNode.getNodeChildren().length) {
                resolve("");
                return;
            }
            const posturl = `${prev}/case/entity?id=${postid}`;
            Axios(
                {
                method:"get",
                url:posturl,
                }
            ).then(
                (result) => {
                    const {data} = result;
                    const childrenlist: ChildrenValue[] = [];
                    // console.log(data)
                    data.forEach(
                        (value: ChildrenValue,index: number)=> {
                            const children = value;
                            children.title = value.name + "(" + value.entityNum + ")";
                            children.key = value.id + "";
                            children.isLeaf = value.isEntity;
                            children.level = level + 1;
                            children.value = value.id + "";
                            children.label = value.name;
                            children.coord = value.coord?value.coord
                                                    :value.lnglat?[parseFloat(value.lnglat.split(",")[0]),parseFloat(value.lnglat.split(",")[1])]
                                                    :value.cityLnglat?[parseFloat(value.cityLnglat.split(",")[0]),parseFloat(value.cityLnglat.split(",")[1])]
                                                    :value.districtLnglat?[parseFloat(value.districtLnglat.split(",")[0]),parseFloat(value.districtLnglat.split(",")[1])]
                                                    :[0,0];
                            children.slots = {
                                    icon: value.isEntity?'user':'org',
                            };
                            children.scopedSlots =  {
                                title: 'custom'
                            };
                            // children.on= {
                            //     mouseenter:this.showtooltip,
                            //     mouseleave: this.hidetooltip,
                            // };
                            children.hover = false;
                            childrenlist.push(children);
                        }
                    );
                    treeNode.dataRef.children = childrenlist;
                    this.treeData = [...this.treeData];
                    // console.log("tree data",this.treeData);
                    resolve("成功");
                },
            ).catch(
                (err: any) => {
                    // console.log("111111",err);
                }
            );
            resolve("111");
        });
    }
    private onSelect(val: string,e: any) {
        // console.log("object1",val,e.node,e.node.dataRef.key);
        const {node,node:{dataRef:{level,isLeaf},dataRef}} = e ;
        // console.log("this.treeData",this.treeData);
        if(!isLeaf) {
            this.onLoadData(node);
            this.historytreeSelectData[val+""] = dataRef;
            // tslint:disable-next-line:no-debugger
            // debugger;
            if(this.expandedKeys.indexOf(val+"") < 0 ) {
                // 先消除其他节点
                this.expandedKeys.splice(level - this.rootlevel);
                this.expandedKeys.push(val+"");
            } else {
                this.expandedKeys.splice(this.expandedKeys.indexOf(val+""));
            }
        }
    }
    // private onLoadData(treeNode: any) {
    //     const {eventKey: postid } = treeNode;

    //     return new Promise((resolve,reject) => {
    //         console.log(treeNode.getNodeChildren().length);
    //         if (treeNode.getNodeChildren().length) {
    //             resolve("");
    //             return;
    //         }
    //         const posturl = `${prev}/case/entity?id=${postid}`;
    //         Axios(
    //             {
    //             method:"get",
    //             url:posturl,
    //             }
    //         ).then(
    //             (result) => {
    //                 const {data} = result;
    //                 const childrenlist: ChildrenValue[] = [];
    //                 // console.log(data)
    //                 data.forEach(
    //                     (value: ChildrenValue,index: number)=> {
    //                         const children = value;
    //                         children.title = value.name + "(" + value.entityNum + ")";
    //                         children.key = value.id + "";
    //                         children.isLeaf = value.isEntity;
    //                         children.level = value.level;
    //                         children.value = value.id + "";
    //                         children.label = value.name;
    //                         childrenlist.push(children);
    //                     }
    //                 );
    //                 // treeNode.$children = childrenlist;
    //                 console.log("this.treeData",this.treeData);
    //                 // this.treeData = [...this.treeData];
    //                 // resolve("成功");
    //             },
    //         ).catch(
    //             (err: any) => {
    //                 console.log("111111",err);
    //             }
    //         );
    //         resolve("111");
    //     });
    // }
    private showtooltip(e: any) {
        // // ##########版本1
        // // const {key,name} = e.node.dataRef;
        // const {clientX,clientY}  = e.event;
        // // this.entity = key;
        // // this.tooltiptitlename = name;
        // const mouseleft = clientX + "px";
        // const mousetop = clientY + "px";
        // // console.log("111111",e);
        // // 记录当前的target用来保管数据
        // // this.selectnode = e.event.target;
        // this.nodedataref = e.node.dataRef;
        // const {key,name,isLeaf,level,coord} = e.node.dataRef;
        // console.log(e.node.dataRef);
        // // this.autoresizetooltip();
        // PubSub.publish("showtooltip",{entity: key,name,isLeaf,level,clientX,clientY,target: e.event.target.getBoundingClientRect(),coord});
        // 版本2
        // console.log("sssssss");
        e.node.dataRef.hover = true;
    }
    private hidetooltip(e: any) {
        // ##############1
        // console.log("levetree");
        // PubSub.publish("hidetooltip","none");
        // ##############2
        e.node.dataRef.hover = false;
        // console.log("hhhhhh");
    }
    private router2home(data: ChildrenValue) {
        // 1.  触发路由
        this.$router.push({name: "node",query: {
            entity: data.key,
            name: data.name as any,
            level:data.level as any,
            isLeaf:data.isLeaf as any,
            coord:data.coord as any,
            },params: { entity: data.key}});
        // 2. 自动关闭数
        PubSub.publish("openLeftBar",false);
        // 3. 更新左标题 因为之前没有点击选择，是直接通过用户信息做的，所以需要更新
        const keys = [...this.expandedKeys,data.key];
        this.historytreeSelectData[data.key] = data;
        const data2: ChildrenValue[] = keys.map(
            (key: string)=> {
                return this.historytreeSelectData[key];
            }
        );
        PubSub.publish("updateBread",data2);
    }
    private router2info(data: ChildrenValue) {
        // this.$router.push({name: "entityinfo",
        //     query: {
        //         entity: data.key,
        //         name: data.name,
        //         other:"123456"},
        //     params: {
        //         entity: data.key,
        //     }});
        PubSub.publish("showUserinfo",{
                entity: data.key,
                name: data.name}
                );
        PubSub.publish("openLeftBar",false);
    }
    private mounted() {
        this.treeheight = (document.body.clientHeight - 24) + 'px';
        // PubSub.publishSync("updateBread",this.treeData);
    }
}
</script>

<style lang='scss' scoped>
:global(.ant-tree){
    z-index: 499;//小于 floatbotton;
    position: relative;
    color: white !important;
    text-align: left;
    // background: radial-gradient(circle at center,#000066 0%,#000000 200%);
    background-color: #2f4050;
}
:global(.ant-tree ant-tree-title) {
    font-size: 12px;
}
:global(.ant-tree li span[class~="ant-tree-node-content-wrapper"]){
    color: white !important;
}
:global(.ant-tree li .ant-tree-node-content-wrapper:hover){
    background-color: transparent!important;
}
:global(.ant-tree li){
  padding: 0px 0px;
}
.treepanel{
    top:24px;
    position: fixed;
    min-width:360px;
    overflow-y:auto;
    background-color: #2f4050;
    overflow-x: hidden;
}
.treepanel::-webkit-scrollbar{
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.treepanel::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(240, 212, 212, 0.8);
}
// https://www.lyblog.net/detail/314.html 滚动轮样式查看地址
.treepanel::-webkit-scrollbar-corner{
    background:#82AFFF;
}
</style>