import axios from 'axios';

const url = 'http://127.0.0.1:8000';

const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

instance.interceptors.request.use(function (req) {
  const token = sessionStorage.getItem('token');
  if (token) {
    req.headers.Authorization = token;
  }
  req.headers['Content-Type'] = 'application/json';
  return req;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (res) {
  if (res.data.code == 20001) {
    sessionStorage.token = '';
    $vm.$router.push('/');
    $vm.$message({
      message: '登录已过期，请重新登录！',
      type: 'warning'
    });
  }
  return res;
}, function (error) {
  return Promise.reject(error.response);
});

export default instance;