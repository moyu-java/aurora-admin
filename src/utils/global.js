/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台管理系统服务器地址
// export const baseUrl = 'http://139.196.87.48:8001'
// export const baseUrl = 'http://114.67.106.207:8889'
export const baseUrlPrefix = 'http://localhost'
// export const baseUrlPrefix = 'http://114.67.106.207'

export const baseUrl = baseUrlPrefix + ':8090'

export const registryCenterUrl = baseUrlPrefix + ':8848/nacos'

// 系统数据备份还原服务器地址
// export const backupBaseUrl = 'http://139.196.87.48:8002'
export const backupBaseUrl = 'http://localhost:8002'

export const successCode = '00000'

export default {
    baseUrlPrefix,
    baseUrl,
    registryCenterUrl,
    backupBaseUrl,
    successCode
}