import axios from '../axios'

/* 
 * 角色管理模块
 */

// 创建角色
export const createRole = (data) => {
    return axios({
        url: `/roles`,
        method: 'post',
        data
    })
}

// 更新角色
export const updateRole = (data) => {
    return axios({
        url: `/roles`,
        method: 'put',
        data
    })
}

// 删除
export const deleteRole = (id) => {
    return axios({
        url: `/roles/${id}`,
        method: 'delete'
    })
}
// 分页查询
export const getRolesForPage = (data) => {
    return axios({
        url: `/roles`,
        method: 'get',
        data
    })
}

// 查询全部
export const getAllRoles = () => {
    return axios({
        url: `/roles/all`,
        method: 'get'
    })
}

// 查询角色菜单集合
export const getRoleMenus = (id) => {
    return axios({
        url: `/roles/${id}/permissions`,
        method: 'get'
    })
}

// 保存角色菜单集合
export const saveRoleMenus = (id, data) => {
    return axios({
        url: `/roles/${id}/permissions`,
        method: 'post',
        data
    })
}