<template>
  <!-- <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="tooltipShow" overlayClassName="tooltip2" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template> -->
        <a-tree
            :treeData="treeData"
            :expandedKeys="expandedKeys"
            @mouseenter="showtooltip"
            @mouseleave="hidetooltip"
            @select="onSelect"
            showIcon
        >]
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
    id: number ;
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
    private treeData = [
                {
                    id: "99998999",
                    pId: 0,
                    name,
                    title:name,
                    mapname:name,
                    icon: `${prev}/css/img/diy/building.png`,
                    open: true,
                    nocheck:true,
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
            ];
    private expandedKeys: string[] = [];
    private tooltipShow = false;
    private tooltipplacement = "leftTop";
    private nodedataref: ChildrenValue = {} as any;
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
        console.log("object1",val,e);
        this.onLoadData(e.node);
        if(e.selected) {
            this.expandedKeys.push(val[0]);
        } else {
            this.expandedKeys.splice(this.expandedKeys.indexOf(val),1);
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
        // const {key,name} = e.node.dataRef;
        const {clientX,clientY}  = e.event;
        // this.entity = key;
        // this.tooltiptitlename = name;
        const mouseleft = clientX + "px";
        const mousetop = clientY + "px";
        // console.log("111111",e);
        // 记录当前的target用来保管数据
        // this.selectnode = e.event.target;
        this.nodedataref = e.node.dataRef;
        const {key,name,isLeaf,level,coord} = e.node.dataRef;
        e.node.dataRef.hover = true;
        console.log(e.node.dataRef);
        // this.autoresizetooltip();
        PubSub.publish("showtooltip",{entity: key,name,isLeaf,level,clientX,clientY,target: e.event.target.getBoundingClientRect(),coord});
    }
    private hidetooltip(e: any) {
        // console.log("levetree");
        e.node.dataRef.hover = false;
        // PubSub.publish("hidetooltip","none");
    }
    private router2home(data: ChildrenValue) {
        this.$router.push({name: "node",query: {
            entity: data.key,
            name: data.name as any,
            level:data.level as any,
            isLeaf:data.isLeaf as any,
            coord:data.coord as any,
            },params: { entity: data.key}});
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
    }
}
</script>

<style lang='scss' scoped>

</style>