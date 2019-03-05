<template>
  <div id="container" class="row">
        <div  class="left"> 
            <div class="word" :style='{transform: `scale(${scale})`,marginLeft: `-${wordleft}px`}'>
            </div>
            <div class="sword" :style='{transform: `scale(${scale})`}'>
                <h1 :style='{marginLeft: `-${subtitleleft}px`}'>智能情报分析系统</h1>
            </div>
        </div> 
        <div class="login" :style="{transform: `scaleX(${loadingscale})`}">
            <!-- :action="`/${baseUrl}/login`" method="post" -->
            <form >
                <table>
                <tr><td colspan="2"><input v-model="userInfo.username" class="bar" type="text" required="required" placeholder="用户名" name="username"/></td></tr>
                <tr><td colspan="2"><input class="bar" v-model="userInfo.password" type="password" required="required" placeholder="密码" name="password"/></td></tr>
                <tr v-if="errorcount>2"><td colspan="2">
                    <input class="leftbar" type="vocode" v-model="userInfo.vacode" required="required" placeholder="验证码" name="vocode"/>
                    <img :src="volidateimg" @click.prevent="reloadingVolidateCode" alt="验证码" style="width:36%;height:76%;"/>
                </td></tr>
                <!-- <tr><td><input type="text" required="required" style="width: 180px;display:inline;" placeholder="验证码" name="code"></input></td><td><img id="codevalidate" required="required" style="display:inline;" onclick="changeUrl()" /></td></tr> -->
                <tr><td colspan="2"><button class="but btn btn-info " @click.prevent="login" >登录</button></td></tr>
                </table>
            </form>
        </div>
        <!-- <button @click="reloadingVolidateCode">测试验证cookie</button> -->
        <a-spin class="loading" :tip="loadingtext" v-show="showLoading" :style="{position:'absolute',top: '50%',left: '50%',transform: 'translateY(-50%) translateX(-50%)' }">
            <!-- <div class="spin-content">
                {{""}}
            </div> -->
        </a-spin>

    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import {projectname,getVolidateImg, baseUrl} from '@/api/axiosProxy.ts';
import Antd from "ant-design-vue";
import {LoginResult} from "@/views/LoginInterface.ts";
import { LoginStatus } from '@/util/LoginStatus';
import { setToken } from '@/util/authcookie';
let validateurl = `check/code`;
if(!window.location.href.includes("index.html")) {
    validateurl = process.env.BASE_URL + validateurl;
}
@Component({
    components: {
        ASpin: Antd.Spin,
    },
})
export default class Login extends Vue {
    @Prop({default: false }) public initshow!: boolean;
    @Prop() private some!: string;
    private scale = 0.5;
    private wordleft = 500;
    private loadingscale = 1;
    private innerWidth = window.innerWidth;
    private subtitleleft = 140;
    private baseUrl = projectname;
    private volidateimg = validateurl;
    private loadingtext = "Loading...";
    private userInfo = {
        password: "",
        username: "",
        vacode:""
    };
    private errorcount = 0;
    private showLoading = false;
    // 看看是否包含index.html,没有的话就添加baseurl
    // private beforeCreate() {
    //     console.log("window.location.href",window.location.href);
    // }
    // private volidateimg = `http://192.168.40.148:8080/anomaly/check/code`;
    // private volidateimg = `/check/code`;
    // get subtitleleft() {
    //     return this.innerWidth > 1366? 140: 140;
    // }
    // get scale() {
    //     return this.innerWidth > 1366? 0.85: 0.55;
    // }
    // private name = 111;
    // @Emit()
    // private dosomething(args: any) {
    //     ...
    // };
    // @Watch('some', { deep: true })
    // private watchsomeaction(beforevalue: any, nowvalue: any) {
    // };
    // vocode 验证码
    // @Emit()
    // @Emit()
    private login() {
        // this.login
        this.showLoading = true;
        this.$store.dispatch("Login",this.userInfo).then((data: LoginResult) => {
            // if(data.status === LoginStatus.SUCCESS) {
            //     window.location.href="./home.html";
            // } else if(data.status === LoginStatus.USERPWDINCORRECT) {
            //     alert("密码错误重新输入");
            // } else if({
            // }
            switch (data.status) {
                case LoginStatus.SUCCESS:
                    if(data.token) {
                        setToken(data.token);
                        // 跳转页面 origin 代表主路径
                        window.location.href= window.location.origin + process.env.BASE_URL + "home.html";
                    }
                    break;
                case LoginStatus.USERPWDINCORRECT:
                    // alert("用户名密码");
                    this.$message.error("用户名密码,请重新输入");
                    // 同时重置密码
                    this.userInfo.password = "";
                    // 用户登录操作大于3的时候
                    if(this.errorcount>2) {
                        this.reloadingVolidateCode();
                    }
                    this.errorcount ++;
                    break;
                case LoginStatus.CODEINCORRECT:
                    // alert("code有问题");
                    this.$message.error("验证码错误，请重新输入");
                    this.reloadingVolidateCode();
                    this.errorcount ++;
                    break;
                default:
                    break;
            }
            this.showLoading = false;
          }).catch(() => {
            // console.log("this",this);
            // window.location.href= window.location.origin + process.env.BASE_URL + "home.html";
            this.$message.error("服务器异常");
            this.showLoading = false;
            this.userInfo.password = "";
            this.errorcount ++;
            // this.$router.push({ path: '/home.html' });
            // window.location.href="./home.html";
          });
    }
    private reloadingVolidateCode() {
        // getVolidateImg("111").then(
        //     (result: any)=> {
        //         // 设置开始地址
        //         console.log("resultddddddddddd",result);
        //         // this.volidateimg = result.data;
        //     }
        // ).catch(
        //     (err) => {
        //         this.volidateimg = "http://192.168.40.148:8080/anomaly/check/code";
        //         console.log("err:" + err);
        //     }
        // );
        this.volidateimg = validateurl + "?" + new Date().getTime();
        // this.userInfo = {...this.userInfo,vacode:""};
        this.userInfo.vacode = "";
    }
    private mounted() {
        if (window.innerWidth > 1366) {
            this.scale = 0.85;
            this.wordleft = 500;
        } else {
            this.scale = 0.55;
            this.wordleft = 350;
            this.subtitleleft = 140;
            // this.loadingscale = 0.8;
        }
        // this.reloadingVolidateCode();
        window.addEventListener("resize",()=> {
                   if (window.innerWidth > 1366) {
                        this.scale = 0.85;
                        this.wordleft = 500;
                    } else {
                        this.scale = 0.55;
                        this.wordleft = 350;
                        this.subtitleleft = 140;
                        // this.loadingscale = 0.8;
                    }
                //    this.innerWidth = window.innerWidth;
                });
        // console.log(this.$cookies,"cookies");
    }
}
</script>

<style lang='scss' scoped>
body{
    // background-image: url("/html/xinjiang/img/background5.png");
    /* background-repeat: repeat-y; */
    /* background-size: cover; */
    // background-image: url("<%= BASE_URL %>xinjiang/img/background5.png");
    background-attachment: fixed; 
    /* background-position: left left; */
    height:100vh;
    width:100vw;
    overflow: hidden;
    min-width: 560px;
}

.login {
    position: absolute;
    bottom: 4%;
    right: 4%;
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
    position: absolute;
    color: #fff;
    // text-shadow: 0 0 10px;
    text-shadow: 4px 5px #00000F;
    letter-spacing: 1px;
    text-align: center;
    padding: 0;
    margin: 0;
    bottom: 18px;
    font-size: 74px;
    // display: inline-table;
    white-space: nowrap;
    left: 50%;
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
    // transform: scale(0.8)
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
    // width: 278px;
    width: 76%;
    // height: 40px;
    height: 76%;
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
input[class="leftbar"]{
    // width: 198px;
    width: 40%;
    // height: 40px;
    height: 76%;
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
    // width: 278px;
    width: 76%;
}
.word {
    position: absolute;
    // right: 17%;
    height: 276px;
    width: 146px;
    top:10%;
    align-self: center;
    
    left: 50%;
}
.word.reflect{
    left:17%;
    opacity: 0.2;
}
.right form{
    position: relative;
    /* display: flex;
    justify-content:center;
    align-items:Center; */
    top:40%;
}
.sword{
    background-position: 0px 0px;
    /* background-size: cover; */
    /* background-attachment: fixed; */
    width: 780px;
    height: 348px;
    align-self: center;
    position: relative;
    // transform: scale(0.85);
}
.left {
    display: flex;
    justify-content: center;
}
.loading {
    pointer-events: none;
}

</style>