// utils/http.js

// 导入模块
import Request from 'luch-request';
import { handleNetworkError } from '@/utils/checkStatus';
// 实例化网络请求
const http = new Request({
  // 接口基地址
  baseURL: 'http://api.test.11228899.net/api',
  header:{
	  // "content-type": 'application/json',
	  // "platform":"ios",
	  // "version":"1.0",
	  // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTEyNzQ5ODYsImV4cCI6MTc1Mzg2Njk4NiwianRpIjoiZTM3OTc3NmNhMDhlMzI3ZGE4Y2QzNDRmN2JkNTk2ZDdkZTYxZDlhOCIsInVpZCI6MjJ9.YvyULUGwDc7kiRLe6BIwYifVoxP7mvxkF4nkC2ZXINI"
	  // "platform":"ios",
	  // "token":'eyJhbGci0iJIUzI1NiIsInR5cCI6IkpxVC]9'
  },
  custom: {
    loading: true
  }
})

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // 显示加载状态提示    
    // 定义头信息，并保证接口调用传递的头信息
    // 能够覆盖在拦截器定义的头信息
    config.header = {
      // Authorization: '11111111',
      ...config.header,
    }
    
    return config
  },
  function (error) {
	  console.log(error.data.statusCode);
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  function ({ statusCode, data, config }) {
    // 隐藏加载状态提示
    uni.hideLoading()
    
    // 解构出响应主体
    return data
  },
  function (error) {
	  console.log(error);
	  handleNetworkError(error.data.code);
	  // handleNetworkError(error.data.statusCode);
	  // handleNetworkError()
    return Promise.reject( handleNetworkError(error.data.code))
  }
)

// 导出配置好的模网络模块
export { http }