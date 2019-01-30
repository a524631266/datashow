<template>
<div>
  <a-breadcrumb>
    <a-breadcrumb-item style="color: white;" class="fa fa-angle-right breadrighticon">
        <!-- <i class="material-icons">chevronright</i> -->
        <i slot="separator" style="color: white;" class="fa fa-angle-right breadrighticon">
        <!-- <i class="material-icons">chevronright</i> -->
        </i>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(data,index) in routes" :key="index" v-show="(index>=(routes.length-3)) && (showMaxLength<0 || index < showMaxLength)">
        <span @click.stop.prevent="onClick(index)" class="fiveword">{{data.name}}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Antd from "ant-design-vue";
import { ChildrenValue } from "@/components/bar/LeftBar.vue";
import PubSub from 'pubsub-js';
import { InitGeomapUrlProps } from "@/config/initOptions.ts";
import {orginitconfig, entityinitconfig} from '@/config/initOptions.ts';
interface BreadValue {
    entity: string;
    name: string;
    level: number;
    isLeaf: boolean;
    coord: [number, number];
}

@Component({
    components: {
        ABreadcrumb:Antd.Breadcrumb,
        ABreadcrumbItem:Antd.Breadcrumb.Item
    },
})
export default class BreadCrumb extends Vue {
    private routes: BreadValue[] = [InitGeomapUrlProps,
                                            {
                                                entity: orginitconfig.entity,
                                                name: orginitconfig.name,
                                                level: orginitconfig.pidlevel + 1,
                                                isLeaf: false as any,
                                                coord: [0,0] as any,
                                            }
                                        ] as any;
    private showMaxLength = -1;
    private mounted() {
        PubSub.subscribe("updateBread",(msg: any,data: BreadValue[])=> {
            // console.log("data",data);
            this.routes = [...data];
        });
        // 在下钻地图的时候添加
        PubSub.subscribe("appendBread",(msg: any,data: BreadValue)=> {
            // name是核心 level = 2 保留一个
            const data2  = Array.from(this.routes).splice(0,data.level - 2);
            data2.push(data);
            this.routes = data2 as any;
            // this.routes.push(data);
        });
    }
    @Emit()
    private onClick(ind: number) {
        // console.log(this.routes[ind]);
        const data = this.routes[ind];
        // this.$router.push({name: "node",query: {
        //     entity: data.key,
        //     name: data.name as any,
        //     level:data.level as any,
        //     isLeaf:data.isLeaf as any,
        //     coord:data.coord as any,
        //     },params: { entity: data.key}});
        PubSub.publish("toggleLeftBar",data);
    }
    @Watch("$route.query",{ deep: true})
    private showBreadCrumbTotal(query: any) {
        // console.log("this.showBreadCrumbTotal",level);
        if (!query.isLeaf) {
            if(query.entity === undefined) {
                this.showMaxLength = 2 ;
            } else {
                this.showMaxLength = query.level - 1;
            }
        }
    }
}
</script>

<style lang='scss' scoped>
:global(.ant-breadcrumb){
    // color: #69473ff7;
    color: #e2b8ae;
    // font-size: 14px;
    font-size: 1.16rem;
    white-space: nowrap;
    display: flex;
}
:global(.ant-breadcrumb span){
    display: flex;
}

:global(.ant-breadcrumb > span:last-child){
    color: white;
    // border-bottom: 1px;
    // border-bottom-color: yellow;
}
:global(.ant-breadcrumb > span:hover){
    cursor: pointer;
    text-decoration:underline;
    font-weight: 900;
    box-shadow: 0 2px 8px black;
    
}
.breadrighticon {
    border: 1
}
.fiveword {
    white-space: nowrap;
    width: 5em;
    overflow: hidden;
    display: inline-flex;
    &:hover {
        width: auto;
    }
}


</style>