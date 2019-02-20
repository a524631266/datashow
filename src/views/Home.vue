<template>
  <a-layout id="app" class="panel">
    <a-layout-sider class="treeselect" v-show="openLeftBar" >
      <LeftBar />
    </a-layout-sider>
    <!-- <div style="{display:inline-block}">
    <LeftBar />
    </div> -->
    <a-layout >
    <a-layout-header id="nav" class="layoutheader">
      <SlotBar>
          <bread-crumb slot="leftbar"></bread-crumb>
      </SlotBar>
    </a-layout-header>
    <a-layout-content class="panel-body">
    <!-- <transition name="slide-left"> -->
      <!-- <keep-alive> -->
          <!-- <router-view id="panel"  /> -->
      <!-- </keep-alive> -->
    <!-- </transition> -->
    <z-main></z-main>
    </a-layout-content>
    </a-layout>
    <tooltip-route></tooltip-route>
  </a-layout>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import SlotBar from "@/components/SlotBar.vue";
// import FloatBotton from "@/components/bar/FloatBotton.vue";
import LeftBar from "@/components/bar/LeftBar.vue";
import PubSub from 'pubsub-js';
import Antd from "ant-design-vue";
import TooltipRoute from '@/components/bar/TooltipRoute.vue';
import BreadCrumb from '@/components/bar/BreadCrumb.vue';
import Main from '@/views/Main.vue';
// tslint:disable-next-line:no-var-requires
// const { Button, message }  = require('ant-design-vue');
// tslint:disable-next-line:no-var-requires
@Component({
  components:{
    SlotBar,
    // AButton:Button,
    // AMessage:message
    LeftBar,
    ALayout: Antd.Layout,
    ALayoutSider: Antd.Layout.Sider,
    ALayoutHeader: Antd.Layout.Header,
    ALayoutContent: Antd.Layout.Content,
    TooltipRoute,
    BreadCrumb,
    ZMain:Main
  }
})
export default class Home extends Vue {
    private collapsed = true;
    private openLeftBar = false;
    public destroyed() {
        // console.log((this as any).some);
    }
    public mounted() {
      PubSub.subscribe("openLeftBar",(mesg: any,action: boolean) => {
        this.openLeftBar = action;
      });
      PubSub.subscribe("toggleLeftBar",(mesg: any) => {
        this.openLeftBar = !this.openLeftBar;
      });
      // 初始化tree高低
      // 2. 同时初始化面包屑
    }
    @Emit()
    private toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
}
</script>

<style lang="scss">
$headerbarheight:24px;
$vheight:100vh; 
body{
    /* background-color: gray; */
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
  // color: #2c3e50;
  color: white;
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
.panel-body{
    position: relative;
    width: 100%;
}



#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
  z-index:401;
}
.ant-layout-sider{
  // top:24px;
  z-index:401;
  position: fixed;
  // height: calc(100vh-24px) !important;
  // overflow-y: auto;
  width: auto !important;
  max-width: 100vw !important;
  // min-width: 200px !important;
  flex: none!important;
  box-shadow: 0 2px 8px #000000;
  background-color: #2f4050;
}
.layoutheader{
  height: $headerbarheight;
  z-index:400;
  box-shadow: 0 1px 2px #001400;
}
.layoutheader:hover {
    z-index:401;
}
.ant-layout-header{
  padding: 0px;
  // background: radial-gradient(circle at center,#000066 0%,#000000 200%);
  background: rgba(0,0,0,0);
}
.ant-layout{
  background: transparent;
  overflow-y: hidden;
}

</style>
