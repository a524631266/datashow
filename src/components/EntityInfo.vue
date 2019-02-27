<template>
  <div v-if="showinfo">
		<div class="mark"></div>
		<div id="info-dynamic">
			<header>
						<!-- <a href="#" class="logo"></a> -->
						<div class="desc">用户信息采集表</div>
						<div class="desc" style="max-width:500px ;overflow: hidden;">
							<span id="box-name" class="badge badge-secondary" v-text="`${entityid}: ${entityname}`"> </span>
							<!-- <div id="box-name" class="label label-default badge badge-secondary">
								<span class="input-group-text">{{$route.params.entity}} </span>
							</div> -->
						</div>
						<!-- <i class="hidden-btn fa fa-compress" aria-hidden="true" onclick="hiddeninfo()" ></i> -->
						<!-- <i class="hidden-btn fa fa-angle-down" aria-hidden="true" @click="hiddeninfo" ></i> -->
                        <!-- <i class="hidden-btn fa fa-angle-down" aria-hidden="true" @click="hiddeninfo" ></i> -->
                        <i class="hidden-btn material-icons"  @click="hiddeninfo">close</i>
				</header>
				<div class="tableinfo" >
					<form id="fillForm">
						<input name="entityid" id="box-entityid" value="123456" style="display: none;" v-model="infodata.entityid"/>
						<div class="divider">
								<h6>个人信息 <span class="badge badge-secondary">old</span></h6>
						</div>
						<hr class="hr"  width="100%" color="blue" size="2">
						<div class="row">
							<div class="col-xs-4 col-md-4">
								<div class="form-group  input-group ">
									<div for="inputname" class="input-group-addon input-group-prepend">
										<span class="input-group-text">姓名:</span> 
									</div>
									<input name="name" type="text" class="form-control" id="inputname" placeholder="张三" v-model="infodata.name"/>
								</div>
							</div>
							<div class="col-xs-4 col-md-4">
								<div class="form-group  input-group">
									
									<div for="sex"  class="input-group-addon input-group-prepend">
										<span class="input-group-text">性别: </span> 
									</div>
									<div class="form-control">
										<input type="radio" id="sex"  value="male" v-model="infodata.sex" name="sex" checked> 男
										<input type="radio" id="sex" value="female" v-model="infodata.sex" name="sex" > 女
									</div>
								</div>
							</div>
							<div class="col-xs-4 col-md-4">
								<div class="form-group  input-group">
									<div for="phone" class="input-group-addon input-group-prepend">
										<span class="input-group-text">联系方式: </span>
									</div>
									<input name="phone" type="text" class="form-control" id="phone" placeholder="130********" v-model="infodata.phone"/>
								</div>
							</div>
						</div>

						<div class="form-group  input-group">
								<div for="address" class="input-group-addon input-group-prepend">
									<span class="input-group-text">地址: </span>
								</div>
								<input name="address" type="text" class="form-control" id="address" placeholder="**省**市**镇**街道**幢" v-model="infodata.address"/>
						</div>
						<div class="form-group  input-group">
								<div for="other" class="input-group-addon input-group-prepend">
									<span class="input-group-text">其他: </span>
								</div>
								<textarea name="other" type="text" class="form-control" id="other" placeholder="***" oninput="autoTextAreaHeight(this)" v-model="infodata.other"></textarea>
						</div>
						
						<div>
							<div class="divider">
									<h6>家庭用电设备信息 <span class="badge badge-secondary">old</span></h6>
								</div>
								<!-- <hr class="hr" width="100%" color="blue" size="2"> -->
							<table class="table" border="0">
									<!-- <caption>家庭用电设备信息</caption> -->
									<!-- <label>家庭用电设备信息</label> -->
									<thead>
											<tr>
											<th style="width: 3em">id</th>
											<th>设备名</th>
											<th>功率(w)</th>
											<th>数量</th>
											<th>描述</th>
                                            <th style="width: 6em">图片</th>
											<th style="width: 6em">操作</th>
											</tr>
									</thead>
									<tbody id="ul-content">
											<tr v-for="(deviceone,index) in infodata.deviceinfo" :key="deviceone.key">
                                                <th scope="row" class="deviceid">{{index+1}}</th>
                                                <td>
                                                    <div class="btn-group" style="width: 100%">
                                                        <input name="dename" class=" dropdown-toggle glyphicon glyphicon-triangle-bottom form-control" v-model="deviceone.dename"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" 
                                                            placeholder="设备" style="width: 99%;float: left"/>
                                                            <span class="fa fa-caret-down" style="position:absolute;float:right;right:5%;top: 32%;color:black"></span>
                                                        <ul class="dropdown-menu">
                                                            <li onclick="insert2input(this)">电视</li>
                                                            <li onclick="insert2input(this)">电冰箱</li>
                                                            <li onclick="insert2input(this)">照明灯</li>
                                                            <li role="separator" class="divider"></li>
                                                            <li>其他手动输入</li>
                                                        </ul>
                                                    </div>
                                                    </td>
                                                <td><input type="text" oninput="onInputChange(event)" class="listen_kw form-control" name="devolt" placeholder="0" v-model="deviceone.devolt"/></td>
                                                <td><input type="text" oninput="onInputChange(event)" class="listen_n form-control" name="denum" placeholder="0" v-model="deviceone.denum"/></td>
                                                <td><input type="text" class="form-control" name="deinfo" placeholder="这个电视是" v-model="deviceone.deinfo"/></td>
                                                <td @mouseenter="showpict(index)" @mouseleave="hidepict(index)">
                                                    <!-- <input type="file" class="form-control" name="pic" placeholder="+" @change="addPhoto($event,index)"/> -->
                                                    <Upload  :customRequest="customRequest" className='upload-list-inline' listType='picture' :showUploadList="showlistindex" multiple :beforeUpload="(file, fileList)=>addPhoto2(file,fileList,index)" :remove="(file)=>reMovePhoto(file,index)">
                                                        <Button>
                                                            <Icon type="upload" /> 上传
                                                        </Button>
                                                    </Upload>
                                                    </td>
                                                <td><button  :id="`fillindex-${index+1}`"  class="btn btn-danger" readonly="true" value="-" style="border:0px" @click.prevent="removeSelf(index)">del</button></td>
											</tr>
										</tbody>
							</table>
							<hr class="hr" width="100%" color="blue" size="2">
						</div>
                        <div class="input-group" style="right: 0px;display:inline-block">
                            
                            <div class="input-group-addon input-group-append" style="float:right">
                                <span class="input-group-text">w</span> 
                            </div>	
                            <!-- <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> -->
                            <input type="text" class="form-control" id="totvolt" name="ndevolt" v-model="totolvolt" style="float:right;min-width:6em;max-width: 6em;text-align: right; "/>
                            <div class="input-group-addon input-group-prepend" style="float:right">
                                <span class="input-group-text">总功率:</span> 
                            </div>
                        </div>
					</form>
				</div>
                <div class="savegroup" style="display:flex;margin:0 auto;">
                    <button id="box-submit" class="btn btn-default" @click.prevent="submit">保存</button>
                    <button id="box-add" class="btn btn-info" @click.prevent="addBlackInfo">添加记录</button>
				</div>

                <!-- <div class="form-group col-sm-offset-5 col-sm-6">
						
				</div> -->
		</div>
	</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import PubSub from 'pubsub-js';
import Axios from "axios";
import qs from 'qs';
import Antd from "ant-design-vue";
import {getVolidateImg} from '@/api/axiosProxy.ts';
import service from '@/util/axioscontext';
import { addPhoto } from "@/api/components/EntityInfo";
// tslint:disable-next-line:no-var-requires
const urljson = require("@/config/userinfo.json");
const initdata = {
                    entityid: "",
                    name: "",
                    sex: "male",
                    phone: "",
                    address: "",
                    other: "",
                    ndevolt: "0",
                    deviceinfo: [
                        {
                            key: 0,
                            dename: "",
                            devolt: "",
                            denum: "",
                            deinfo: "",
                            filenames: []
                        }
                    ],
                    vocode: ""
                };
@Component({
    components:{
        Upload: Antd.Upload,
        Button: Antd.Button,
        Icon: Antd.Icon,
    }
})
export default class EntityInfo extends Vue {
    @Prop() public entity!: string;
    @Prop() public name!: string;
    @Prop() public other!: string;
    private entityid: string = "";
    private entityname: string = "";
    private showinfo: boolean = false;
    private volidateimg: string = "";
    private firstloading = true;// 用来处理 页面首次加载的时候不加载用户信息
    private infodata = {...initdata};
    private picpools: Blob[] = [];
    private devicenum: number = 0;
    private showlistindex = false;
    private fileuidmap: any = {};
    // 计算属性一旦值变化就更新值
    get totolvolt() {
        const {deviceinfo} = this.infodata;
        let num = 0;
        if(deviceinfo) {
            num = deviceinfo.reduce(
            (before: number,data: {devolt: string,denum: string}): number => {
                    const devolt = data.devolt === ""? "0" : data.devolt;
                    const denum = data.denum === ""? "0" : data.denum;
                    return before + parseFloat(devolt) * parseFloat(denum);
            }
        , 0);
        }
        // 必须添加否则无法存数据进去
        this.setInfodata(num);
        return num;
    }
    // 一旦value辩护就设置值
    // @Emit()
    set totolvolt(val: any) {
        // console.log("info val: ",val);
        this.setInfodata(val);
    }
    @Emit()
    private setInfodata(val: any) {
        this.infodata.ndevolt = val+"";
    }
    private mounted() {
        PubSub.subscribe("showUserinfo",(mesg: any,data: {entity: string, name: string}) => {
            // console.log(" data.entity", data.entity);
            this.entityid = data.entity as string;
            this.entityname = data.name as string;
            this.infodata.entityid = data.entity;
            this.loadingdata(this.entityid);
            // this.showinfo = true;
        });
        // 加载之后获取图片图像
        // this.reloadingVolidateCode();
        // 初始化数据
        this.entityid = this.entity;
        this.entityname = this.name;
    }
    @Emit()
    private hiddeninfo() {
        this.showinfo = false;
    }
    @Emit()
    private removeSelf(index: number) {
        this.infodata.deviceinfo.splice(index,1);
    }
    // @Emit()
    private addBlackInfo() {
        this.infodata.deviceinfo.push({
                dename: "",
                devolt: "",
                denum: "",
                deinfo: "",
                filenames:[],
                key:this.devicenum++,
            });
        const container: Element = this.$el.querySelector('#info-dynamic') as Element;
        // tslint:disable-next-line:no-unused-expression
        // container && ((document.getElementById("info-dynamic") as Element).scrollTop = container.scrollHeight);
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
            (document.getElementById("info-dynamic") as Element).scrollTop = container.scrollHeight;
        },10);
        // container && (console.log("container",container.scrollTop,container.scrollHeight));
        // // tslint:disable-next-line:no-unused-expression
        // $('#info-dynamic')[0] && $('#info-dynamic').scrollTop($('#info-dynamic')[0].scrollHeight);
    }
    /**
     * 保存提交表单
     */
    @Emit()
    private submit() {
        // 预留一个接口用来保存数据
        const infodata = {...this.infodata};
        infodata.deviceinfo = JSON.stringify(this.infodata.deviceinfo) as any;
        service.post(urljson.puturl + "/" + this.infodata.entityid,qs.stringify(infodata)).then(()=> {
            this.$message.success("保存成功",5);
        }).catch(
            (err) => {
                this.$message.error(JSON.stringify(err.response.statusText) + "请稍后再重试",5);
            }
        );
    }
    /**
     * 加载成功之后再显示用户信息
     */
    @Emit()
    private loadingdata(entity: string) {
        // 预留一个接口用来保存数据
        // http://localhost:8080/tree/case/entity?id=99998999
        service.get(urljson.geturl+"/"+ entity).then((result)=> {
            this.$message.success("加载记录成功",3);
            this.showinfo = true;
            if(result.data.deviceinfo) {
                this.infodata = {...result.data};
            } else {
                const infodata = {...result.data};
                infodata.deviceinfo = [];
                this.infodata = {...infodata};
            }
            // console.log("data",data);
        }).catch(
            (err) => {
                this.$message.error(JSON.stringify(err.response.statusText + ":url"),3);
                this.showinfo = true;
                // 控制流程 上次用户
                if(entity === this.infodata.entityid) { // 如果当前的entity与之前的entity一致的话，什么都不操作
                } else {
                    this.infodata = {...initdata};
                }
            }
        );
    }
    @Emit()
    private settotol(val: any ) {
        // console.log("val",val);
        this.infodata.ndevolt = val.target.value;
    }
    // 添加图片 图片名
    private setPicName(name: string,deviceIndex: number) {
        // file.prex = name;
        this.infodata.deviceinfo[deviceIndex].filenames.push(name as never);
    }
    // 添加图片 图片名
    private removePicName(name: string,deviceIndex: number) {
        // file.prex = name;
        const filenames = this.infodata.deviceinfo[deviceIndex].filenames;
        const ind = filenames.indexOf(name as never);
        filenames.splice(ind,1);
    }
    @Emit()
    private addPhoto2(file: any,fileList: any,deviceIndex: number) {
        const name = addPhoto(file,fileList,deviceIndex,this.infodata.entityid);
        // console.log("上传文件名",name);
        // 存储文件名映射关系，删除数据的时候方便提取
        const uid: string = file.uid;
        this.fileuidmap[uid] = name as any;
        this.setPicName(name,deviceIndex);
        // 不上传消除自身不上传
        return false;
    }
    // 点击删除的时候删除指定的blob对象
    @Emit()
    private reMovePhoto(file: any,deviceIndex: number) {
        console.log("file",file,deviceIndex);
        const name = this.fileuidmap[file.uid];
        this.removePicName(name, deviceIndex);
        return true;
    }
    @Emit()
    private showpict(index: number) {
        // console.log("showpict",index);
        this.showlistindex = true;
    }
    @Emit()
    private hidepict(index: number) {
        // console.log("hidepict",index);
        this.showlistindex = false;
    }
    @Emit()
    private customRequest(a: any,b: any) {
        // pass
        console.log("a:",a,"\nb:",b);
    }
}
</script>

<style lang='scss' scoped>
header {
	width: 100%;
	height: 50px;
	box-shadow: 10px 10px 10px rgba(111,111,111,.5);
	position: relative;
}
#info-dynamic{
	z-index: 400;
    position: fixed;
	min-width: 750px;
	width: 750px;
	top:0vh;
	max-height: 100vh;
	margin-left: -350px;
	left:50%;
	overflow-x: hidden;
    overflow-y: auto;
	background:  radial-gradient(circle at center, #006 0%, #000 200%);
	color: white;
    height: 100vh;
}
.mark{
	position: fixed;
	left:0;
	top:0;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	background:#000;
	background-color: rgb(252,248,227);
	z-index: 400;
}
.desc {
	font-size: 18px;
	line-height: 50px;
	border-left: 1px solid #ccc;
	position: relative;
	left: -1px;
	top:0px;
	padding-left: 20px;
	font-weight: blod;
	float: left;
	padding-right: 20px;
}
.hidden-btn {
	position: relative;
	top: 0px;
	right: 18px;
	line-height: 50px;
	float: right;
	height: 50px;
    cursor: pointer;
}
.tableinfo {
	position: relative;
	// top: 20px;
	margin: 0 auto;
	width: 100%;
	min-width: 600px;
}
#fillForm {
	padding: 18px;
    position: relative;
    & div{
        position: relative;
    }
}
.hr {
	margin-top: 0px;
	margin-bottom: 10px;
	border-top-color: #465c71;
}
.divider {
	left: 0px;
}
h6 {
	text-align: left;
    color: white;
}
.fa-angle-down:hover {
	cursor: pointer;
}
.table {
    margin-bottom: 0px ;
}
.footer {
    bottom: 0px;
    position: relative;
}
.savegroup {
    display: flex;
    justify-content: center;
}

#info-dynamic::-webkit-scrollbar{
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
#info-dynamic::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(240, 212, 212, 0.8);
}
// https://www.lyblog.net/detail/314.html 滚动轮样式查看地址
#info-dynamic::-webkit-scrollbar-corner{
    background:#82AFFF;
}

// .upload-list-inline .ant-upload-list-item {
//   float: left;
//   max-width: 100px;
//   margin-right: 8px;
// }
// .upload-list-inline .ant-upload-animate-enter {
//   animation-name: uploadAnimateInlineIn;
// }
// .upload-list-inline .ant-upload-animate-leave {
//   animation-name: uploadAnimateInlineOut;
// }
.upload-list-inline >>> .ant-upload-list-item >>> .ant-upload-list-item-name {
    color:"white";
  }
</style>