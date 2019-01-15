<template>
  <div id="container" class="row">
        <div  class="left"> 
            <ul  class="icon">
                <li  class="sword">
                </li>
            </ul>
            <h1>智能情报分析系统</h1>
        </div> 
        <div class="login">
            <form action="/login" method="post">
                <table>
                <tr><td colspan="2"><input class="bar" type="text" required="required" placeholder="用户名" name="username"></input></td></tr>
                <tr><td colspan="2"><input class="bar" type="password" required="required" placeholder="密码" name="password"></input></td></tr>
                <!-- <tr><td><input type="text" required="required" style="width: 180px;display:inline;" placeholder="验证码" name="code"></input></td><td><img id="codevalidate" required="required" style="display:inline;" onclick="changeUrl()" /></td></tr> -->
                <tr><td colspan="2"><button class="but btn btn-info " type="submit">登录</button></td></tr>
                </table>
            </form>  
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class Login extends Vue {
    @Prop({default: false }) public initshow!: boolean;
    @Prop() private some!: string;
    // private name = 111;
    // @Emit()
    // private dosomething(args: any) {
    //     ...
    // };
    // @Watch('some', { deep: true })
    // private watchsomeaction(beforevalue: any, nowvalue: any) {
    // };
}
</script>

<style lang='scss' scoped>
body{
    // background-image: url("/html/xinjiang/img/background5.png");
    /* background-repeat: repeat-y; */
    /* background-size: cover; */
    background-image: url("<%= BASE_URL %>xinjiang/img/background5.png");
    background-attachment: fixed; 
    /* background-position: left left; */
    height:100vh;
    width:100vw;
    overflow: hidden;
    min-width: 560px;
}

.login {
    position: absolute;
    bottom: 74px;
    right: 123px;
}

.violet{
    // background: url("/html/xinjiang/img/pnglet.png") no-repeat ;
    background-position: -8px 0px ;
    width: 125px;
    height: 142px;
}
.violet2{
    // background: url("/html/xinjiang/img/pnglet.png") no-repeat ;
    background-position: -148px 0px ;
    width: 125px;
    height: 142px;
}
/* body div{
    display: none;
} */
// #container{
//     height: 100vh;
// }
/* #login{
    position: relative;
} */
.left,.right{
    position: relative;
    height: 100%;
    width: 100%;
}
.left h1{
    position: relative;
    color: #fff;
    text-shadow: 0 0 10px;
    letter-spacing: 1px;
    text-align: center;
    /* top:60%; */
}
/* .right{
    top:20%;
} */
.left ul{
    position: relative;
    height:60%;
}
.left ul .sword,.left .violet,.left .violet2{
    position: relative;
    transform: scale(0.8)
}
.left ul .sword{
    position: absolute;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: Center; */
    bottom: 0%;
    left: 50%;
    margin-left: -250px;
}
.left .violet{
    position: absolute;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: Center; */
    left: 50%;
    top: 33%;
    margin-left: 155px;
}
.left .violet2{
    position: absolute;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: Center; */
    left: 50%;
    /* top: 50%; */
    bottom: 0%;
    margin-left: 175px;
}
ul li{
    list-style-type: none;
}
input[class="bar"]{
    width: 278px;
    height: 40px;
    margin-bottom: 10px;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px;
    border-top: 1px solid #312E3D;
    border-left: 1px solid #312E3D;
    border-right: 1px solid #312E3D;
    border-bottom: 1px solid #56536A;
    border-radius: 4px;
    background-color: #2D2D3F;
}
.but{
    width: 278px;
}
.right form{
    position: relative;
    /* display: flex;
    justify-content:center;
    align-items:Center; */
    top:40%;
}
.icon .sword{
    background-position: 0px 0px ;
    /* background-size: cover; */
    /* background-attachment: fixed;  */
    /* width: 350px;
    height: 280px; */
    width: 500px;
    height: 320px;
}

</style>