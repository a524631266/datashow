<template>
  <div id="panel">
    <router-view  id="container" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component({
  components:{
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
$headerbarheight:24px;
$vheight:100vh; 
#container {
  height: $vheight;
  background: radial-gradient(circle at center, rgba(0,0,102,0.98) 0, rgba(0,0,0,0.98) 100%);
  // opacity: 0.98;
  //  background-image: url("<%= BASE_URL %>xinjiang/img/background5.png");
}
#panel {
  //  background-image: url("/xinjiang/img/background5.png");
}
body {
  overflow: hidden;
  // background-image: radial-gradient(circle at center, #006 0,#000 100%);
  // opacity: 0.98;
}
</style>
