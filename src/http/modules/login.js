import axios from '../axios'
/* 
 * 系统登录模块
 */

// 登录
export const login = data => {
    return axios({
        url: '/oauth/login',
        method: 'post',
        headers: {
            'Authorization': `Basic c2F0dXJuOkRzb1c2cDRIMmNnc1ljRUJobW1NcXRCNQ==`,
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

// 登录日志
export const loginLog = (params) => {
    return axios({
        url: '/oauth/log',
        method: 'get',
        params
    })
}