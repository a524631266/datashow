
<template>
<div>
    <button @click="post">点击上传</button>
    <!-- <input type="file" name="abc" id="aa" @change="addPhoto($event,0)" placeholder="第一张图片"/>
    <input type="file" name="abc" id="aa" @change="addPhoto($event,1)" placeholder="第2张图片"/>
    <img :src="imgurl" alt="配电柜名称" /> -->
    <Upload listType='picture' :onRemove="removepic" :showUploadList="true" multiple :beforeUpload="(file, fileList)=>addPhoto2(file,fileList,3)">
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
import { addPhoto } from "@/api/components/EntityInfo";
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
    private filename = "";
    private post() {
        const data = this.data;
        const fdata = new FormData();
        data.forEach(
            (blobdata: any,index: number)=> {
                if(blobdata) {
                    fdata.append("file",blobdata as any,this.filename);
                }
            }
        );
        // fdata.append("filename",this.filename);
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
    private addPhoto2(file: any,fileList: any,index: number) {
        addPhoto(file,fileList,index,"1111");
        // 不上传
        return false;
    }
    @Emit()
    private removepic(file: any) {
        console.log("file",file);
        return true;
    }
    // private dataURI2Blob(dataURI: any) {
    //     const byteString = window.atob(dataURI.split(",")[1]);
    //     // console.log("dataURI",dataURI);
    //     const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    //     const T = mimeString.split("/")[1];
    //     const ab = new ArrayBuffer(byteString.length);
    //     const ia = new Uint8Array(ab);
    //     for(let i = 0; i< byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    //     return new Blob([ab],{type: mimeString});
    // }
    @Emit()
    private defaultfunction() {
        this.post();
    }
}
</script>

<style lang='scss' scoped>

</style>