<template>
    <div class="pagecontainer">
        <div class="btn" @click.stop.prevent="prepage">
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="btn squareborder">
            {{page}}
        </div>
        <div class="btn" @click.stop.prevent="nextpage">
            <i class="fa fa-angle-right"></i>
        </div>
    </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model} from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class PageButton extends Vue {
    @Model("pagechange") public page!: number;
    @Emit()
    private prepage() {
        if (this.page>1) {
            this.page = this.page - 1 ;
        }
    }
    private nextpage() {
        this.page = this.page + 1;
    }
}
</script>

<style lang='scss' scoped>
.pagecontainer {
    display: flex;
    justify-content: space-around;
    width: 100px;
}
.squareborder {
    border: 1px;
    border-color: white;
}
</style>
