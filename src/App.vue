<template>
  <div id="app" class="panel">
    <FloatBotton />
    <LeftBar />
    <div id="nav" class="panel-heading">
      <SlotBar>
        <h2 slot="leftbar">默默组织</h2>
        <h2 slot="rightbar">默默配电柜</h2>
      </SlotBar>
    </div>
    <div class="panel-body">
    <transition name="slide-left">
      <keep-alive>
          <router-view id="panel"  />
      </keep-alive>
    </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import SlotBar from "@/components/SlotBar.vue";
import FloatBotton from "@/components/bar/FloatBotton.vue";
import LeftBar from "@/components/bar/LeftBar.vue";
import PubSub from 'pubsub-js';
// import Ant from "ant-design-vue";
// tslint:disable-next-line:no-var-requires
// const { Button, message }  = require('ant-design-vue');
// tslint:disable-next-line:no-var-requires
@Component({
  components:{
    SlotBar,
    // AButton:Button,
    // AMessage:message
    FloatBotton,
    LeftBar,
  }
})
export default class App extends Vue {
    private collapsed = true;
    public destroyed() {
        console.log((this as any).some);
    }
    @Emit()
    private toggleCollapsed() {
      this.collapsed = !this.collapsed;
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
  z-index: 400;
}

.ant-tree{
    z-index: 499;//小于 floatbotton;
    position: fixed;
    color: white !important;
    text-align: left;
    background: radial-gradient(circle at center,#000066 0%,#000000 200%);
}
.ant-tree li span[class~="ant-tree-node-content-wrapper"]{
    color: white !important;
}


</style>
