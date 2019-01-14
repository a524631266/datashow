<template>
    <div class="pagecontainer">
        <div class="mdl-button mdl-js-button mdl-button--icon ui-stepButton" @click.prevent.stop="prepage_local">
                    <!-- <i class="fa fa-step-backward"></i> -->
                    <i class="material-icons">skip_previous</i>
                </div>
        <div class="btn squareborder nopionter">
            <span v-text="pagedata.pageid"></span> / <span v-text="maxpage"></span> 
        </div>
        <div class="mdl-button mdl-js-button mdl-button--icon ui-stepButton " @click.prevent.stop="nextpage_local">
            <!-- <i class="fa fa-step-forward"></i> -->
            <i class="material-icons">skip_next</i>
        </div>
        <div class="btn ">
            pagesize: <span class="squareborder" v-text="pagedata.pagesize"></span>
        </div>
    </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model} from 'vue-property-decorator';
/**
 * 属性为两个接口
 */
@Component({
    components: {
    },
})
export default class PageButton extends Vue {
    @Model("pagechange") public pagedata!: {pageid: number,entitynums: number,pagesize: number};
    get maxpage() {
        return Math.ceil(this.pagedata.entitynums / this.pagedata.pagesize);
    }
    @Emit()
    private prepage_local() {
        if (this.pagedata.pageid > 1) {
            this.pagedata.pageid = this.pagedata.pageid - 1 ;
            this.$emit("prepage",this.pagedata.pageid, this.pagedata.pagesize);
        }
    }
    private nextpage_local() {
        if (this.pagedata.pageid< this.maxpage) {
            this.pagedata.pageid = this.pagedata.pageid + 1;
            this.$emit("nextpage",this.pagedata.pageid, this.pagedata.pagesize);
        }
    }
}
</script>

<style lang='scss' scoped>
.pagecontainer {
    display: flex;
    justify-content: space-around;
    // width: 100px;
}
.squareborder span{
    border: 1px;
    border-color: white;
}
.squareborder{
  border: 1px solid white;
}
.nopionter {
    cursor: none!important;
}
</style>
