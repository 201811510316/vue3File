<template>
    <div >
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#000000"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-button class="my-4" @click="isCollapseFunction">
                <el-icon :size="20">
                    <Fold/>
                </el-icon>
            </el-button>
            <BreadcrumbModal/>
            <div class="flex-grow"/>
            <el-menu-item index="1"><div class="my-1">处理中心</div></el-menu-item>
            <el-sub-menu index="2">
                <template v-slot:title>工作台</template>
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
import BreadcrumbModal from '@/components/Breadcrumb/BreadcrumbModal.vue';
import { storage } from '@/utils/storage';
import {ACCESS_TOKEN, REFRESH_ACCESS_TOKEN, CURRENT_USER} from '@/store/mutation-types';

const emit = defineEmits(['emitDemo'])
const router = useRouter();
const dialogFormRef = ref();

// 重置密码
function rePass(){
  dialogFormRef.value.dialogFormVisibleFun();
}
// 登出
function logout() {
    storage.remove(ACCESS_TOKEN);
    storage.remove(CURRENT_USER);
    storage.remove(REFRESH_ACCESS_TOKEN);
    router.replace("/")
}
function isCollapseFunction(){
    emit('emitDemo');
}


</script>

<style scoped>
.el-menu-demo{
    width: 100%;
}
.el-menu-modal{
    display: flex;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.flex-grow {
  flex-grow: 1;
}
</style>