import Axios,{AxiosPromise, CancelTokenSource} from "axios";
/**
 * 手动管理axios请求类
 */
interface AxiosSourceManage {
    /**
     * 用来保存source管理器，用来后期进行及时删除操作
     */
    axiosSource: CancelTokenSource;
    /**
     * 用来发起请求并获取数据
     */
    getData: ()=>void;
    /**
     * 手动删除之前的在getData中的token
     */
    cancelAxios: ()=>void;
}


export  {
    AxiosSourceManage
};
