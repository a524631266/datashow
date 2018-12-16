<template>
  <div id="app" class="panel">
    <div id="nav" class="panel-heading">
      <SlotBar>
        <h2 slot="leftbar">默默组织</h2>
        <h2 slot="rightbar">默默配电柜</h2>
      </SlotBar>
    </div>
    <div>
    <transition name="slide-left">
      <keep-alive>
        
          <router-view id="panel" class="panel-body" />
        
      </keep-alive>
    </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SlotBar from "@/components/SlotBar.vue";
@Component({
  components:{
    SlotBar
  }
})
export default class App extends Vue {
    public mounted() {
        console.log('');
    }
    public destroyed() {
        console.log((this as any).some);
    }
}
</script>

<style lang="scss">
body{
    /* background-color: gray; */
    background-image: url("/html/xinjiang/img/background4.jpg") ;
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-attachment: fixed; 
    background-position: center center;
    height:100vh;
    width:100vw;
    // overflow: hidden;
    font-size: 13px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
#rrrrrrv{
  position: relative;
}
#nav {
  // padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.panel-heading{
  z-index: 1000;
}
</style>
