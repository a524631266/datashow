import { PostParams } from "@/types";
import { PostPath } from '@/actions/axiosProxy';
// tslint:disable-next-line:no-var-requires
class Volidater {
    // private md5 = require("crypto").createHash("md5");
    private local = window.sessionStorage;
    constructor(local: Storage) {
        this.local = local;
        (window as any).ddd = this.md5;
    }
    /**
     * 用来在post之前参考本地是否有存储
     * --
     * pass true 代表可以执行post
     * data 如果pass 为false的话，会返回存储在本地的数据
     * @param urlparas 信息1
     * @param postpath 信息2
     * @returns
     * { pass: boolean, data: any}
     */
    public postVolidate(urlparas: PostParams,postpath: PostPath): { pass: boolean,data: any } {
        const key = this.localStorageKey(urlparas, postpath);
        const data = this.local.getItem(key);
        // console.log("获取到的数据",data);
        if ( data === null) {
            return { pass: true, data: null };
        } else {
            return { pass: false, data: JSON.parse(data)};
        }
    }
    public storeData(urlparas: PostParams,postpath: PostPath,data: any) {
        this.local.setItem(this.localStorageKey(urlparas, postpath), JSON.stringify(data));
    }
    private localStorageKey(urlparas: PostParams,postpath: PostPath): string {
        // 添加md5 根据 图表id + entityid + 开始时间  + 结束时间 做md5转换 几乎唯一
        const str = `${postpath}${urlparas.entity}${urlparas.starttime}${urlparas.endtime}${urlparas.pageid}${urlparas.pagesize}${urlparas.scale}${urlparas.thresholder.range}`;
        // console.log("daaat" ,str,require("crypto").createHash("md5").update(str).digest("hex"));
        return require("crypto").createHash("md5").update(str).digest("hex");
    }
}


export default Volidater;