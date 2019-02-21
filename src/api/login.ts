import request from '@/util/axioscontext';
import { projectname } from './axiosProxy';

export function login(username: string, password: string,vacode: string) {
  return request({
    url: `login`,
    method: 'POST',
    data: {
      username,
      password,
      vacode
    }
  });
}

export function getInfo(token: string) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export function logout(token: string) {
  return request({
    url: '/user/logout',
    method: 'post'
  });
}
