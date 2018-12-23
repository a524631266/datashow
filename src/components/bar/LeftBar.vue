<template>
  <!-- <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="tooltipShow" overlayClassName="tooltip2" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template> -->
        <a-tree
            :loadData="onLoadData"
            :treeData="treeData"
            @mouseenter="showtooltip"
            @mouseleave="hidetooltip"
        />
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
import Ant from "ant-design-vue";
import Axios from "axios";
import { entity,name,level } from "@/actions/initOptions.ts";
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
}

@Component({
    components: {
        ATree:Ant.Tree,
        // ATreeSelect: Ant.TreeSelect,
        // ATooltip: Ant.Tooltip,
        // APopover: Ant.Popover
    },
})
export default class LeftBar extends Vue {
    private openLeftBar = false;
    private treeData = [
                {
                    id: entity,
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
                    key: entity,
                    value: entity,
                }
            ];
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
        console.log("111111",e);
        // 记录当前的target用来保管数据
        // this.selectnode = e.event.target;
        this.nodedataref = e.node.dataRef;
        const {key,name,isLeaf,level} = e.node.dataRef;
        // this.autoresizetooltip();
        PubSub.publish("showtooltip",{entity: key,name,isLeaf,level,clientX,clientY,target: e.event.target.getBoundingClientRect()});
    }
    private hidetooltip() {
        console.log("levetree");
        PubSub.publish("hidetooltip","none");
    }
}
</script>

<style lang='scss' scoped>

</style>