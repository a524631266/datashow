import Mock from 'mockjs';
import tableAPI from './table';


// User
// Mock.mock(/\/backend\/login/, 'post', userAPI.login);
// 拦截
Mock.mock(/\/*\/elecnum\/stackline/, 'get', tableAPI.list);

// http://localhost:8080/xinjiang/elecnum/stackline?entity=99928858&start=2019-03-04%2000:00:00&end=2019-03-06%2011:33:26&scale=900&winlen=2592000&neger=-3&poser=3
export default Mock;
