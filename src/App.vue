<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view id="rrrrrrv" />
    </keep-alive>
  </div>
</template>

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
    overflow: hidden;
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
  padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
