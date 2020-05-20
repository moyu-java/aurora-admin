import axios from '../axios'
/* 
 * 系统登录模块
 */

// 登录
export const login = data => {
    return axios({
        url: '/oauth/token',
        method: 'post',
        headers: {
            'Authorization': `Basic Y2xpZW50OnNlY3JldA==`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        data
    })
}

// 登出
export const logout = () => {
    return axios({
        url: '/oauth/logout',
        method: 'get'
    })
}

// 登出
export const logoutLog = (params) => {
    return axios({
        url: '/upms/logoutLog',
        method: 'get',
        params
    })
}