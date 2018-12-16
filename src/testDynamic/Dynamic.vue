<template>
<div class="row">
    <div class="card col-4 border-dark" style="width: 18rem;">
        <h3 class="card-header bg-transparent text-success">使用说明</h3>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">1.动态组件实现tab切换效果</li>
                <li class="list-group-item">2.并添加组件的功能</li>
            </ul>
            <div class="card-text">
                动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数
            </div>
        </div>
    </div>
    <div class="col card bg-dark">
        <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item"><a class="nav-link" :class="currentView===first?'active':''" href="javascript:void(0);" @click="toggleTabs(first);">{{first}}</a></li>
                <li class="nav-item"><a class="nav-link" :class="currentView===second?'active':''" href="javascript:void(0);" @click="toggleTabs(second);">{{second}}</a></li>
                <li class="nav-item"><a class="nav-link" :class="currentView===third?'active':''" href="javascript:void(0);" @click="toggleTabs(third);">{{third}}</a></li>
                <li class="nav-item"><a class="nav-link" :class="currentView===third?'active':''" href="javascript:void(0);" @click="pop();">{{currentView}}</a></li>
            </ul>
        </div>
        <div class="card-body bg-light">
            <h6 class="text-primary">1.切换区</h6>
            <keep-alive>
            <div :is="currentView"></div>
            </keep-alive>
        </div>
        <div class="card-body bg-primary">
            <h6 class="text-light">2.组件动态添加区</h6>
            <anytags v-for="(value,index) in componetslist" :is="value" :key="index" keep-alive>
        </anytags>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import First from '@/testDynamic/First.vue';
import Second from '@/testDynamic/Second.vue';
import Third from '@/testDynamic/Third.vue';
@Component({
    components: {
        first: First,
        Second,
        Third
    },
})
export default class HighchartFactory extends Vue {

    @Prop({default: false }) public initshow!: boolean;
    private name = 111;
    private currentView = "first";
    private first = "first"; // 导航栏文本1
    private second = "Second"; // 导航栏文本2
    private third = "Third";
    private deletecomponents: string[] = [];
    private componetslist: string[] = ["first","Second", "Third"];
    @Emit()
    private toggleTabs(tabText: string) {
        this.currentView = tabText;
        this.componetslist.push(tabText);
    }
    @Emit()
    private pop() {
        const deletename = this.componetslist.pop();
        this.currentView = deletename as any;
        this.deletecomponents.push(deletename as any);
    }
}
</script>

<style lang='scss' scoped>
// nav{
//     width:600px;
//     background:#eeeeee;
//     padding:0 10px;
//     & a{
//         text-decoration: none;
//         color:#000;
//         display: inline-block;
//         width:150px;
//         text-align:center;
//         background:#aaaaaa;
//         padding:10px;
//     }
// }
</style>