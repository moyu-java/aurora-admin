import axios from '../axios'

/* 
 * 操作登录日志模块
 */

// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/upms/log/login/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/upms/log/login/list',
        method: 'post',
        data
    })
}