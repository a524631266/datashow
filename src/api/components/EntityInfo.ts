import service from '@/util/axioscontext';
function postOneFile(data: Blob,filename: string) {
    const fdata = new FormData();
    fdata.append("file",data as any,filename);
    // tslint:disable-next-line:no-unused-expression
    service({
        url:"/anomaly/upload/pic",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        data: fdata
    }).then(
        (res) => {
            console.log("file",res);
            alert("上传成功");
        }
    ).catch(
        (err) => {
            console.log("err",err);
            alert("上传失败");
        }
    );
}

function addPhoto(file: any,fileList: any,index: number,entityid: string) {
    const type = file.type.split("/")[0];
    const names = file.name.split(".");
    const suffix = names[names.length- 1];
    const name = entityid +"_" + index + "_" + require("crypto").createHash("md5").update(file.name).digest("hex") + "." + suffix;
    // console.log("file::",file,"\nfileList::",fileList,"\n:::index::",index,"\n::: name::",name);
    if(type === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const dataURI = reader.result;
            // this.imgurl = dataURI as any;
            const blob = dataURI2Blob(dataURI);
            // this.infodata.deviceinfo[index].file = blob as any;
            // this.post(blob);
            // this.names[index] = name;
            postOneFile(blob,name);
        };
    }
    // 不上传
    return name;
}

function dataURI2Blob(dataURI: any) {
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

export {
    addPhoto
};
