// import { def } from "@vue/shared";
import axios from "axios";
// import { Message } from "element-plus";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            // 根据code状态来进行下面步骤
            // Message({message:'请求错误',type:'error'})
        }
        return res
    },
    error => { return Promise.reject(error) }

)
export default service