import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/util/authcookie';

interface UserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state: UserState, token: string) => {
      state.token = token;
    },
    SET_NAME: (state: UserState, name: string) => {
      state.name = name;
    },
    SET_AVATAR: (state: UserState, avatar: string) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state: UserState, roles: string[]) => {
      state.roles = roles;
    }
  },

  actions: {
    // 登录
    Login(context: {commit: any}, userInfo: {username: string,password: string,vacode: string}) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password,userInfo.vacode).then((response: any) => {
          const data = response.data;
          // 设置token值
          setToken(data.token);
          context.commit('SET_TOKEN', data.token);
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        });
      });
    },
    setnametest(context: {commit: any ,state: UserState }) {
      // context.commit('SET_NAME', "1212121212");
      // setToken("1111111111111111");
    },
    // 获取用户信息
    GetInfo( context: {commit: any ,state: UserState }) {
      return new Promise((resolve, reject) => {
        getInfo(context.state.token).then((response: any) => {
          const data = response.data;
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            context.commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }
          context.commit('SET_NAME', data.name);
          context.commit('SET_AVATAR', data.avatar);
          resolve(response);
        }).catch((error: any) => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut(context: {commit: any ,state: UserState }) {
      return new Promise((resolve, reject) => {
        logout(context.state.token).then(() => {
          context.commit('SET_TOKEN', '');
          context.commit('SET_ROLES', []);
          removeToken();
          resolve();
        }).catch((error: any) => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut(context: {commit: any}) {
      return new Promise((resolve) => {
        context.commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
