<template>
  <div class="text-dark bg-info border-success">
    [{{JSON.stringify(new Date()).replace("T"," ").replace('"',"").replace(/\..*?$/g,"")}}] 组件3-name:{{name}}
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch  } from 'vue-property-decorator';

@Component
export default class Third extends Vue {
    @Prop() private some!: string;
    private name = "嘎嘎";
}
</script>

<style lang='scss' scoped>

</style>