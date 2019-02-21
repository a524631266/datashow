import request from '@/util/axioscontext';
import { projectname } from './axiosProxy';
import qs from 'qs';
export function login(username: string, password: string,vacode: string) {
  return request({
    url: `${process.env.BASE_URL}login`,
    method: 'POST',
    data: qs.stringify({
      username,
      password,
      vacode
    })
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
