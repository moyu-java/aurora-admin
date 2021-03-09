import axios from '../axios'

/* 
 * 用户管理模块
 */

// 创建用户
export const createUser = (data) => {
    return axios({
        url: `/users`,
        method: 'post',
        data
    })
}

// 更新用户
export const updateUser = (data) => {
    return axios({
        url: `/users`,
        method: 'put',
        data
    })
}

// 删除
export const deleteUser = (id) => {
    return axios({
        url: `/users/${id}`,
        method: 'delete'
    })
}

// 分页查询
export const getUsersForPage = (params) => {
    return axios({
        url: `/users?${params}`,
        method: 'get'
    })
}

// 查询用户信息
export const getUserById = (id) => {
    return axios({
        url: `/users/${id}`,
        method: 'get',
        data
    })
}

// 查询用户信息
export const getUserByAccount = (account) => {
    return axios({
        url: `/users/account?account=${account}`,
        method: 'get'
    })
}

// 查询用户的角色列表
export const getUserRoles = (id) => {
    return axios({
        url: `/users/${id}/roles`,
        method: 'get'
    })
}

// 更新登录用户密码
export const updatePassword = (params) => {
    return axios({
        url: `/users/me/password?${params}`,
        method: 'put'
    })
}

// 查找用户的菜单权限标识集合
export const getPermissionCodes = () => {
    return axios({
        url: `/users/me/permissions`,
        method: 'get'
    })
}

// 查询登录用户的菜单树
export const getMenusTree = () => {
    return axios({
        url: `/users/me/menus`,
        method: 'get'
    })
}

// 导出Excel用户信息
export const exportUserExcelFile = (data) => {
    return axios({
        url: `/users/exportUserExcelFile`,
        method: 'post',
        data
    })
}
