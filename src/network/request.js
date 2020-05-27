import axios from 'axios'
export function request(config){
  // 1创建axios的实例
  const instance = axios.create({
    //这里的接口是错的，接口这里不提供，可以自己写，也可以加qq联系1104747986
    // baseURL:"http://152.136.185.210:8000",
    baseURL:"http://152.136.185.210:8000/api/n3",
    timeout:5000
  })

//  2 axios的拦截器
//  2.1 请求拦截的作用
  instance.interceptors.request.use(config =>{
    return config
  },err =>{

  })

  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);

  })
  // 3 发送真正的网络请求
  return instance(config)
}
