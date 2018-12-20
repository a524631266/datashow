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
        <div  class="leftslot">{{leftbarname}}</div>
        <div  class="middleslot">
            <LittleBar :show="true" :initshow="true" v-model="postparms">
            </LittleBar>
        </div>
        <div  class="rightslot">{{rightbarname}}</div>
        <FloatBotton />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import FloatBotton from "@/components/bar/FloatBotton.vue";
import PubSub from 'pubsub-js';
import LittleBar from "@/components/chart/LittleBar.vue";
import { PositionClass , PostParams, ChartLibrary } from '@/types/index';
@Component({
    components: {
        LittleBar,
        FloatBotton
    },
})
export default class SlotBar extends Vue {
    @Prop() public positionClass!: PositionClass;
    private postparms: PostParams = {} as any;
    private leftbarname = "新疆维吾尔族";
    private rightbarname = "某某配电柜";
    private middlebarname = "";
    public mounted() {
        PubSub.subscribe("updateleftbarname",this.updateleftbarname);
        PubSub.subscribe("updaterightname",this.updaterightname);
        PubSub.subscribe("updatemiddledata",this.updatemiddledata);
    }
    public destroyed() {
        console.log((this as any).some);
    }
    @Emit()
    private updateleftbarname(msg: any, name: string) {
        this.leftbarname = name;
    }
    @Emit()
    private updaterightname(msg: any, name: string) {
        this.leftbarname = name;
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
}
.headinnerbody{
    width: 100%;
    height: 100%;
}
</style>