import request from '@/util/axioscontext';

export function login(username: string, password: string) {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      username,
      password
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
