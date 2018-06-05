import $http from './config'

export function axiosGet (url, options) {
  return $http.get(url, {
    params: options
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
export function axiosPost (url, options, config = {}) {
  return $http.post(
    url, options, config
  ).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function axiosDel (url, options) {
  return $http.delete(url, {
    data: options
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function axiosPut (url, options, config) {
  // console.log(config)
  return $http.put(
    url, options, config
  ).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
