// plugins/axios.js 文件
import Vue, { nextTick } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true
let loadingInstance
export default ({ $axios, redirect, store, req, $cookies }) => {
  // 基本配置
  $axios.defaults.timeout = 20000
  // $axios.defaults.withCredentials = true
  // console.log($axios.defaults)

  // 请求拦截器
  $axios.onRequest((config) => {
    console.log('$axios.onRequest', process.env.VUE_ENV)
    // console.log('Making request to ' + config.url)
    if (process.server) {
      config.headers.token = req.headers.cookie
    } else {
      loadingInstance = Vue.prototype?.$loading()
    }
    return config
  })

  // 响应拦截器
  $axios.onResponse((resp) => {
    console.log('$axios.onResponse', process.env.VUE_ENV)
    nextTick(() => {
      loadingInstance && loadingInstance.close()
      loadingInstance = null
    })
    return Promise.resolve(resp)
  })

  $axios.onError((error) => {
    console.log('$axios.onError', process.env.VUE_ENV)
    const code = parseInt(error.response && error.response.status)
    if (code === 404 || code === 500) {
      process.server && redirect('/')
    }
    nextTick(() => {
      loadingInstance && loadingInstance.close()
      loadingInstance = null
    })
    return Promise.reject(error)
  })
}
