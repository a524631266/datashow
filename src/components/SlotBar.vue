<template>
  <div class="row" >
      <slot name="leftbar" class="leftslot">组织</slot> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home/entiydid">12346配电柜</router-link> |
      <slot name="rightbar" class="rightslot">配电柜</slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class SlotBar extends Vue {
    @Prop() private some!: any;
    private some2: boolean = true;

    public mounted() {
        console.log('');
    }
    public destroyed() {
        console.log((this as any).some);
    }
}
</script>

<style scoped>

</style>