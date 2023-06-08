<template>
    <div>
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-sub-menu index="2">
                <template v-slot:title>我的工作台</template>
                <el-menu-item index="2-1"><div @click="userData">个人信息</div></el-menu-item>
                <el-menu-item index="2-2"><div @click="rePass">重置密码</div></el-menu-item>
                <el-menu-item index="2-3"><div @click="logout">退出登录</div></el-menu-item>
            </el-sub-menu>
        </el-menu>

        <!-- 重置密码页 -->
        <DialogForm ref="dialogFormRef"/>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import DialogForm from '@/components/Dialog/DialogForm.vue';

const router = useRouter();
const dialogFormRef = ref();
function handleSelect(){
    console.log("asdas")
}

function userData() {
    console.log("个人信息")
}
function rePass(){
  dialogFormRef.value.dialogFormVisibleFun();
}
function logout() {
    router.replace("/")
}

</script>

<style></style>