
<template>
<div>
    <button @click="post">点击上传</button>
    <input type="file" name="abc" id="aa" @change="addPhoto($event,0)" placeholder="第一张图片"/>
    <input type="file" name="abc" id="aa" @change="addPhoto($event,1)" placeholder="第2张图片"/>
    <img :src="imgurl" alt="配电柜名称" />
    <Upload action="/anomaly/upload/pic" listType='picture' :onRemove="removepic" :showUploadList="true" multiple :beforeUpload="(file, fileList)=>addPhoto2(file,fileList,1)">
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
    <Upload >
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import Axios from "axios";
import Antd from "ant-design-vue";
import qs from 'qs';
@Component({
    components: {
        Upload: Antd.Upload,
        Button: Antd.Button,
        Icon: Antd.Icon,
    },
})
export default class HighchartFactory extends Vue {
    @Prop() private some!: string;
    private name = 111;
    private imgurl = "111";
    private data: any[]= [] ;
    private names: any[]= [] ;
    private fileList = [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
    private props2 = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        defaultFileList: [...this.fileList],
        className: 'upload-list-inline',
    };
    private post() {
        const data = this.data;
        const fdata = new FormData();
        data.forEach(
            (blobdata: any,index: number)=> {
                fdata.append("file",blobdata as any,this.names[index]);
            }
        );
        // tslint:disable-next-line:no-unused-expression
        Axios({
            url:"http://192.168.40.148:8080/anomaly/upload/pic",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "post",
            data: fdata
        }).then(
            (res) => {
                console.log("file",res);
            }
        ).catch(
            (err) => {
                console.log("err");
            }
        );
    }
    @Emit()
    private addPhoto(event: any,index: number) {
        const file = event.target.files[0];
        const type = file.type.split("/")[0];
        const name = require("crypto").createHash("md5").update(file.name).digest("hex");
        // console.log(file);
        file.name = name;
        if(type === "image") {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const dataURI = reader.result;
                this.imgurl = dataURI as any;
                const blob = this.dataURI2Blob(dataURI);
                // this.infodata.deviceinfo[index].file = blob as any;
                // this.post(blob);
                this.data[index] = blob as any;
                this.names[index] = name;
            };
        }
    }
    @Emit()
    private addPhoto2(file: any,fileList: any,index: number) {
        const type = file.type.split("/")[0];
        const names = file.name.split(".");
        const suffix = names[names.length- 1];
        const name = "12345" +"_" +"1"+ "_" + require("crypto").createHash("md5").update(file.name).digest("hex") + "." + suffix;
        // file.name = name;
        file.prex = name;
        console.log("file::",file,"\nfileList::",fileList,"\n:::index::",index,"\n::: name::",name);
        if(type === "image") {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const dataURI = reader.result;
                // this.imgurl = dataURI as any;
                const blob = this.dataURI2Blob(dataURI);
                // this.infodata.deviceinfo[index].file = blob as any;
                // this.post(blob);
                this.data[index] = blob as any;
                this.names[index] = name;
            };
        }
        // 不上传
        return true;
    }
    @Emit()
    private removepic(file: any) {
        console.log("file",file);
        return true;
    }
    private dataURI2Blob(dataURI: any) {
        const byteString = window.atob(dataURI.split(",")[1]);
        // console.log("dataURI",dataURI);
        const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        const T = mimeString.split("/")[1];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for(let i = 0; i< byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab],{type: mimeString});
    }
}
</script>

<style lang='scss' scoped>

</style>