import { axiosGet, axiosPost, axiosPut, axiosDel } from './axios'

const urlPrefix = '/api/v1'

// rest-auth

// 登录
export function login (obj) {
  return axiosPost(`${urlPrefix}/rest-auth/login/`, obj)
}

// 注销
export function logout (obj) {
  return axiosPost(`${urlPrefix}/rest-auth/logout/`, obj)
}

// 修改密码
export function changePWD (obj) {
  return axiosPost(`${urlPrefix}/rest-auth/password/change/`, obj)
}

// 注册
export function register (obj) {
  return axiosPost(`${urlPrefix}/rest-auth/registration/`, obj)
}

// 获取用户信息
export function getUser (obj) {
  return axiosGet(`${urlPrefix}/rest-auth/user/`, obj)
}

// 修改用户信息
export function editUser (obj) {
  return axiosPut(`${urlPrefix}/rest-auth/user/`, obj)
}

// bills

// 获取账目列表
export function getBills (obj) {
  return axiosGet(`${urlPrefix}/bills/`, obj)
}

// 创建新账目
export function addBills (obj) {
  return axiosPost(`${urlPrefix}/bills/`, obj)
}

// 删除单个账目
export function delBills (id) {
  return axiosPost(`${urlPrefix}/bills/${id}/`, {})
}

// 删除单个账目
export function batchDelBills (ids) {
  return axiosDel(`${urlPrefix}/bills/`, ids)
}

// 获取账目信息
export function getBill (id) {
  return axiosGet(`${urlPrefix}/bills/${id}/`, {})
}

// 编辑账目信息
export function editBill (id, obj) {
  return axiosPut(`${urlPrefix}/bills/${id}/`, obj)
}  

// categorys

// 获取类别列表
export function getCategorys (obj) {
  return axiosGet(`${urlPrefix}/categorys/`, obj)
}

// 添加新类别
export function addCategory (obj) {
  return axiosPost(`${urlPrefix}/categorys/`, obj)
}

// 获取类别信息
export function getCategory (id) {
  return axiosGet(`${urlPrefix}/categorys/${id}/`)
}

// 修改类别信息
export function editCategory (id, obj) {
  return axiosPut(`${urlPrefix}/categorys/${id}/`, obj)
}

// 修改类别信息
export function delCategory (id) {
  return axiosDel(`${urlPrefix}/categorys/${id}/`, {})
}

// summaries

// 概要信息
export function getSummaries (obj) {
  return axiosGet(`${urlPrefix}/summaries/info/`, obj)
}

// 折线图
export function getLineChart (obj) {
  return axiosGet(`${urlPrefix}/summaries/linechart/`, obj)
}

// 环状图
export function getRingChart (obj) {
  return axiosGet(`${urlPrefix}/summaries/ringchart/`, obj)
}

// utils
