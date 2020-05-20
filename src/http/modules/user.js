import axios from '../axios'

/* 
 * 用户管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/upms/user/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/upms/user/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/upms/user/list',
        method: 'post',
        data
    })
}
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
    return axios({
        url: '/upms/user/listPermissions',
        method: 'get',
        params
    })
}


// 导出Excel用户信息
export const exportUserExcelFile = (data) => {
    return axios({
        url: '/upms/user/exportUserExcelFile',
        method: 'post',
        data
    })
}

// 根据用户名查找
export const findByName = (params) => {
    return axios({
        url: '/upms/user/findByName',
        method: 'get',
        params
    })
}
// 更新用户密码
export const updatePassword = (params) => {
    return axios({
        url: '/upms/user/updatePassword',
        method: 'post',
        params
    })
}