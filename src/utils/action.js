export default { 
    'SERVER': 'http://localhost:3109', //服务器 
    'SYSTEM_USER_DOLOGIN': '/login', //登陆 
    'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用 
        return this.SERVER + this[k]; 
    } 
}