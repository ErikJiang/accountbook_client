import { axiosGet, axiosPost, axiosPut, axiosDel } from './axios';

const url_prefix = '/api/v1';

// rest-auth

// 登录
export function login(obj) {
  return axiosPost(`${url_prefix}/rest-auth/login`, obj)
}

// 注销
export function logout(obj) {
  return axiosPost(`${url_prefix}/rest-auth/logout`, obj);
}

// 修改密码
export function changePWD(obj) {
  return axiosPost(`${url_prefix}/rest-auth/password/change`, obj);
}

// 注册
export function register(obj) {
  return axiosPost(`${url_perfix}/rest-auth/registration`, obj);
}

// 获取用户信息
export function getUser(obj) {
  return axiosGet(`${url_perfix}/rest-auth/user`, obj);
}

// 修改用户信息
export function editUser(obj) {
  return axiosPut(`${url_perfix}/rest-auth/user`, obj);
}


// bills

// 获取账目列表
export function getBills(obj) {
  return axiosGet(`${url_perfix}/bills`, obj);
}

// 创建新账目
export function addBills(obj) {
  return axiosPost(`${url_perfix}/bills`, obj);
}

// 删除单个账目
export function delBills(id) {
  return axiosPost(`${url_perfix}/bills/${id}`, {});
}

// 删除单个账目
export function batchDelBills(ids) {
  return axiosDel(`${url_perfix}/bills`, ids);
}

// 获取账目信息
export function getBills(id) {
  return axiosGet(`${url_perfix}/bills/${id}`, {});
}

// 编辑账目信息
export function editBills(id, obj) {
  return axiosPut(`${url_perfix}/bills/${id}`, obj);
}


// categorys

// 获取类别列表
export function getCategorys(obj) {
  return axiosGet(`${url_perfix}/categorys`, obj);
}

// 添加新类别
export function addCategory(obj) {
  return axiosPost(`${url_perfix}/categorys`, obj);
}

// 获取类别信息
export function getCategory(id) {
  return axiosGet(`${url_perfix}/categorys/${id}`);
}

// 修改类别信息
export function editCategory(id, obj) {
  return axiosPut(`${url_perfix}/categorys/${id}`, obj);
}

// 修改类别信息
export function delCategory(id) {
  return axiosDel(`${url_perfix}/categorys/${id}`, {});
}


// summaries

// 概要信息
export function getSummaries(obj) {
  return axiosGet(`${url_perfix}/summaries/info`, obj);
}

// 折线图
export function getLineChart(obj) {
  return axiosGet(`${url_perfix}/summaries/linechart`, obj);
}

// 环状图
export function getRingChart(obj) {
  return axiosGet(`${url_perfix}/summaries/ringchart`, obj);
}

// utils