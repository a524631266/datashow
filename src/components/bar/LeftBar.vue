<template>
  <a-tree
    :class="openLeftBar?'':'hidetree'"
    :loadData="onLoadData"
    :treeData="treeData"
  />
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
    },
})
export default class LeftBar extends Vue {
    private openLeftBar = false;
    private treeData = [
                {
                    id: 99998999,
                    pId: 0,
                    name: "新疆维吾尔自治区?",
                    title:"新疆维吾尔自治区",
                    mapname:"新疆维吾尔自治区",
                    icon: `${prev}/css/img/diy/building.png`,
                    open: true,
                    nocheck:true,
                    level:2,
                    coord:[87.62781199999995,43.793028],
                    isLeaf: false,
                    label: "新疆维吾尔自治区label",
                    key: '99998999',
                    value: '99998999',
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
    private selectvalue = '99998999';
    private expandedKeys = ['99998999'];
    private autoExpandParent =  false;
    private checkedKeys = ['99998999'];
    private selectedKeys = [];
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
        // console.log('');
    }
    // @Emit()// 不能用，否则无法找到Promise
    private onLoadData(treeNode: any) {
        const {eventKey: postid } = treeNode;
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
                            children.level = value.level;
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
}
</script>

<style lang='scss' scoped>
.hidetree{
    display: none;
}
</style>