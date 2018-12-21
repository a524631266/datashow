<template>
  <a-popover :placement="tooltipplacement" :title="nodedataref.name"  :mouseLeaveDelay="0.1" :autoAdjustOverflow="false" :visible="tooltipShow" overlayClassName="tooltip2" ref="tooltip2" @visibleChange="visibleChange">
        <template slot="content" class="aaa" >
            <a :href="'/home/'+nodedataref.key" target="_self" @click.prevent="router2home" class="btn btn-sm">图表</a>
            <a :href="'/info/'+nodedataref.key" target="_self" @click.prevent="router2info" class="btn btn-sm">用户信息</a>
        </template>
        <a-tree
            :class="openLeftBar?'':'hidetree'"
            :loadData="onLoadData"
            :treeData="treeData"
            @mouseenter="showtooltip"
        />
  </a-popover>
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
interface ChildrenValue {
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
        ATreeSelect: Ant.TreeSelect,
        ATooltip: Ant.Tooltip,
        APopover: Ant.Popover
    },
})
export default class LeftBar extends Vue {
    private alignConfig = {
                    points: ['tl', 'tr'],        // align top left point of sourceNode with top right point of targetNode
                    offset: [10, 20],            // the offset sourceNode by 10px in x and 20px in y,
                    targetOffset: ['30%','40%'], // the offset targetNode by 30% of targetNode width in x and 40% of targetNode height in y,
                    overflow: { adjustX: true, adjustY: true }, // auto adjust position when sourceNode is overflowed
                };
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
                    // children: [
                    //     [{
                    //         value: '0-0-1',
                    //         key: '0-0-1',
                    //         scopedSlots: { // custom label
                    //         label: 'label',
                    //         },
                    //     }, {
                    //         label: 'Child Node2',
                    //         value: '0-0-2',
                    //         key: '0-0-2',
                    //     }]
                    // ]
                }
            ];
    // private treeData = [
    //     { title: 'Expand to load', key: '0' },
    //     { title: 'Expand to load', key: '1' },
    //     { title: 'Tree Node', key: '2', isLeaf: true },
    //   ];
    // private selectvalue = '99998999';
    // private expandedKeys = ['99998999'];
    // private autoExpandParent =  false;
    // private checkedKeys = ['99998999'];
    // private selectedKeys = [];
    // private selectnode = null;
    private tooltipShow = false;
    // private tooltiptitlename = "";
    private tooltipplacement = "leftTop";
    private nodedataref: ChildrenValue = {} as any;
    // @Emit()
    // private onExpand(expandedKeys: any) { // 展开那个值?
    //   console.log('onExpand', expandedKeys);
    //   // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    //   // or, you can remove all expanded children keys.
    //   this.expandedKeys = expandedKeys;
    //   this.autoExpandParent = false;
    // }
    // @Emit()
    // private onCheck(checkedKeys: any) {
    //   console.log('onCheck', checkedKeys);
    //   this.checkedKeys = checkedKeys;
    // }
    // @Emit()
    // private onSelect(selectedKeys: any, info: any) {
    //   console.log('onSelect', info);
    //   this.selectedKeys = selectedKeys;
    // }
    public mounted() {
        PubSub.subscribe("openLeftBar",(mesg: any,action: boolean) => {
          this.openLeftBar = action;
        });
        PubSub.subscribe("showtooltip",async (mesg: any,data: {entity: string,name: string,isLeaf: boolean,level: number,clientX: number,clientY: number}) => {
          this.nodedataref.key = data.entity;
          this.nodedataref.name = data.name;
          this.nodedataref.isLeaf = data.isLeaf;
          this.nodedataref.level = data.level;
        //   this.tooltipplacement = "right";
          await this.autoresizetooltip(data.clientX+"px",data.clientY+"px");
          this.tooltipShow = true;
          console.log(this.nodedataref.key);
        //   this.tooltipplacement = "right";
        });
        // console.log('');
    }
    // @Emit()// 不能用，否则无法找到Promise
    private onLoadData(treeNode: any) {
        console.log("treeNode",treeNode);
        const {eventKey: postid} = treeNode;
        const {level} = treeNode.dataRef;
        // const {eventKey: postid ,dataRef:{id ,level }} = treeNode;
        return new Promise((resolve,reject) => {
            console.log(treeNode.dataRef.children);
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
                    console.log("tree data",this.treeData);
                    resolve("成功");
                },
            ).catch(
                (err: any) => {
                    console.log("111111",err);
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
    //  调整气泡输出位置，这里不需要用默认
    @Emit()
    private showtooltip(e: any) {
        // const {key,name} = e.node.dataRef;
        const {clientX,clientY}  = e.event;
        // this.entity = key;
        // this.tooltiptitlename = name;
        const mouseleft = clientX + "px";
        const mousetop = clientY + "px";
        // console.log("111111",e.event.target);
        // 记录当前的target用来保管数据
        // this.selectnode = e.event.target;
        this.nodedataref = e.node.dataRef;
        // this.autoresizetooltip();
        setTimeout(()=>this.autoresizetooltip(mouseleft,mousetop),50);
    }
    private autoresizetooltip(mouseleft: string,mousetop: string) {
        const tooltipdom = document.getElementsByClassName("ant-popover");
        if (tooltipdom[0] === undefined) {
            setTimeout(this.autoresizetooltip,100);
        } else {
            (tooltipdom[0] as any).style.left = mouseleft;
            (tooltipdom[0] as any).style.top = mousetop;
        }
        this.tooltipShow = true;
        // console.log(tooltipdom);
    }
    @Emit()
    private visibleChange(e: any,b: any) {
        console.log("visible222222",e,b);
        if(!e) {
            this.tooltipplacement = "leftTop";
            this.tooltipShow = false;
        } else {
            this.tooltipplacement = "right";
            this.tooltipShow = true;
        }
    }
    @Emit()
    private getPopupContainer(trigger: any) {
        return document.body;
        // return trigger;
        // console.log("childNodes333333",this.selectnode);
        // return this.selectnode;
    }
    private router2home() {
        this.$router.push({name: "node",query: {
            entity: this.nodedataref.key,
            name: this.nodedataref.name as any,
            level:this.nodedataref.level as any,
            isLeaf:this.nodedataref.isLeaf as any,
            },params: { entity: this.nodedataref.key}});
    }
    private router2info() {
        this.$router.push({name: "node",query: {
            entity: this.nodedataref.key,
            name: this.nodedataref.name as any,
            level:this.nodedataref.level as any,
            isLeaf:this.nodedataref.isLeaf as any,
            },params: { entity: this.nodedataref.key}});
    }
}
</script>

<style lang='scss' scoped>
.hidetree{
    display: none;
}
.tooltip2{
    display: block !important;
}
</style>