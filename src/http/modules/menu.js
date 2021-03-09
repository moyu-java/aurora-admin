import axios from '../axios'

/* 
 * 菜单管理模块
 */

 // 保存
export const save = (data) => {
    return axios({
        url: '/permissions/save',
        method: 'post',
        data
    })
}

// 删除权限
export const deletePermission = (id) => {
    return axios({
        url: `/permissions/${id}`,
        method: 'delete'
    })
}

// 获取权限详情
export const getPermission = (id) => {
    return axios({
        url: `/permissions/${id}`,
        method: 'get'
    })
}

// 获取所有的权限列表
export const getAllPermissions = (params) => {
    return axios({
        url: '/permissions',
        method: 'get',
        params
    })
}

// 获取所有的权限树
export const getPermissionsTree = (params) => {
    return axios({
        url: '/permissions/tree',
        method: 'get',
        params
    })
}