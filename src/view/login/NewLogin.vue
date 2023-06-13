<template>
  <div class="login-body">
    <div class="login-container">
        <div class="head">
            <img class="logo" src="https://s.yezgea02.com/1582958061265/mlogo.png" />
            <div class="name">
            <div class="title">Vue3练习</div>
            <div class="tips">Vue3后台管理</div>
            </div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
            <el-form-item label="用户名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" class="button-css" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import { ApiClient } from '@/utils/ApiClient';
import { storage } from '@/utils/storage';
import {ref, reactive} from 'vue';
import {useRouter} from "vue-router";
import {ACCESS_TOKEN, REFRESH_ACCESS_TOKEN, CURRENT_USER} from '@/store/mutation-types';
import empty from '@/utils/empty';
import Modals from '@/utils/Modals'

const router = useRouter();
const loginForm = ref();
const ruleForm = reactive({
    name:'',
    pass:''
})
const rules = reactive({
    name:[{required: 'true', message: '账户不能为空', trigger: 'blur'}],
    pass: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }],
})

// 登录
async function submitForm(){
    const flag = await Modals.confirm("asdsd")
    if (flag) {
        router.replace('/userMain');
        return;
    }

    if (empty(ruleForm.name) || empty(ruleForm.pass)) {
        Modals.error("请填写用户名和密码")
        return;
    }
    const values = Object.assign({},{"mobile":ruleForm.name,"password":ruleForm.pass})
    // loginAdmin(values,function (result) {
    //     console.log(result)
    //     const ex = 7 * 24 * 60 * 60 * 1000;
    //     storage.set(ACCESS_TOKEN, result.token, ex);
    //     storage.set(REFRESH_ACCESS_TOKEN, result.refresh_token, ex);
    //     storage.set(CURRENT_USER, result.loginUser, ex);
    // })
    //router.replace('/userMain');
}

function loginAdmin(params,callback){
    const client =  new ApiClient();
    client.post("/adminAccount/login",params);
    client.setSuccessCallback(callback);
}


</script>

<style scoped>
.login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;;
}
.login-container {
    width: 420px;
    height: 450px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
}
.head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
.head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
}
.head .tips {
    font-size: 12px;
    color: #999;
}
.login-form {
    width: 70%;
    margin: 0 auto;
}
.login-form :deep(.el-form--label-top .el-form-item__label) {
    padding: 0;
}
.login-form :deep(.el-form-item) {
    margin-bottom: 20px;
}
.button-css{
    width: 270px; 
    height: 42px;
    margin-top: 1rem;
    margin-left: 86px;
}

</style>