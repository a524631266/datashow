<template>
  <div class="headinnerbody">
        <!-- <slot name="leftbar" class="leftslot">
            <div class="leftslot">左边</div>
        </slot>       
        |
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/home/entiydid">12346配电柜</router-link> |
        <slot name="middleslot" class="middleslot">
            <div class="middleslot"></div>
            </slot>
        <slot name="rightbar" class="rightslot">
            <div class="rightslot">右边</div>
        </slot> -->
        
            <div  class="leftslot">
                <slot name="leftbar">
                    {{leftbarname}}
                </slot>
            </div>
        
        <div  class="middleslot" style="width: 60%;">
            <!-- <LittleBar :show="true" v-model="postparms">
            </LittleBar> -->
        </div>
        <div  class="rightslot" v-text="rightbarname"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import PubSub from 'pubsub-js';
// import LittleBar from "@/components/chart/LittleBar.vue";
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
import {entityinitconfig} from '@/config/initOptions.ts';
@Component({
    components: {
        // LittleBar,
    },
})
export default class SlotBar extends Vue {
    @Prop() public positionClass!: PositionClass;
    private postparms: PostParams = {} as any;
    private leftbarname = "新疆维吾尔族";
    private rightbarname = "配电柜";
    private middlebarname = "";
    public mounted() {
        PubSub.subscribe("updateleftbarname",this.updateleftbarname);
        PubSub.subscribe("updaterightbarname",this.updaterightname);
        PubSub.subscribe("updatemiddledata",this.updatemiddledata);
        this.rightbarname = entityinitconfig.name;
    }
    public destroyed() {
        // console.log((this as any).some);
    }
    @Emit()
    private updateleftbarname(msg: any, name: string) {
        this.leftbarname = name;
    }
    @Emit()
    private updaterightname(msg: any, name: string) {
        this.rightbarname = name;
    }
    @Emit()
    private updatemiddledata(msg: any, postparms: PostParams) {
        this.postparms = postparms;
    }
}
</script>

<style scoped>
.middleslot{
    width: 60%;
}
.leftslot,.rightslot{
    width: 20%;
    font-size: 14px;
}
.leftslot {
    text-align: left;
}
.rightslot {
    text-align: right;
}
.leftslot,.rightslot,.middleslot{
    height: 100%;
    float: left;
    line-height: 30px;
    color: white;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    background-color: radial-gradient(circle at center,#000066 0%,#000000 200%);
    /* 有边框为0 */
    border-right: 1px solid radial-gradient(circle at center,#000066 0%,#000000 200%);
    /* overflow: hidden; */
    /* background-image: linear-gradient(180deg,#262628,#303032); */
    /* box-shadow: 0 2px 8px #000000; */
}
.headinnerbody{
    width: 100%;
    height: 100%;
}
</style>