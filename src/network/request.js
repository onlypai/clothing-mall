import axios from 'axios'
//因为本身axios.create方式创建的实例就返回一个promise，所以直接把instance实例返回即可
export function request(config) {
    //1、创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.1、axios拦截器的使用-请求拦截 成功和失败
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    //2.2、axios拦截器的使用-响应拦截-成功和失败
    instance.interceptors.response.use(res => {
            //返回数据
            return res.data
        }, err => {
            console.log(err)
        })
        //3、发送真正的网络请求
    return instance(config)
}


export function request2(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}