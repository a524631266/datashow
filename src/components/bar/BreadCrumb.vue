<template>
<div>
  <a-breadcrumb>
    <span slot="separator" style="color: white;">></span>
    <a-breadcrumb-item v-for="(data,index) in routes" :key="index">
        <span v-show="index>=(routes.length-3)" @click.stop.prevent="onClick(index)">{{data.name.substr(0,5)}}</span>
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
@Component({
    components: {
        ABreadcrumb:Antd.Breadcrumb,
        ABreadcrumbItem:Antd.Breadcrumb.Item
    },
})
export default class BreadCrumb extends Vue {
    private routes: ChildrenValue[] = [InitGeomapUrlProps
                        // {
                        // key: "111111",
                        // name: "爱上的假设的逆反" as any,
                        // level: 2 as any,
                        // isLeaf: false as any,
                        // coord: [1,2] as any,
                        // }
                        ] as any;
    private mounted() {
        PubSub.subscribe("updateBread",(msg: any,data: ChildrenValue[])=> {
            this.routes = data;
        });
    }
    @Emit()
    private onClick(ind: number) {
        console.log(this.routes[ind]);
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
}
</script>

<style lang='scss' scoped>
:global(.ant-breadcrumb){
    // color: #69473ff7;
    color: #e2b8aef7;
    font-size: 14px;
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

</style>