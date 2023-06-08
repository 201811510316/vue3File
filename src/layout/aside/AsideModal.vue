<template>
    <el-menu 
        default-active="/userMain" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item index="/userMain">
            <el-icon><User/></el-icon>
            <span>个人信息</span>
        </el-menu-item>
        <el-sub-menu index="1">
            <template v-slot:title>
                <el-icon><Location/></el-icon>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/index">选项1</el-menu-item>
                <el-menu-item index="/setting">选项2</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template v-slot:title>
                <el-icon><Document/></el-icon>
                <span>导航二</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/admin">选项1</el-menu-item>
                <el-menu-item index="/lianxi-2">选项2</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template v-slot:title>
                <el-icon><Setting/></el-icon>
                <span>导航三</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/lianxi-3">选项1</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import {ref} from 'vue';
import {Location,Setting,Document,User} from '@element-plus/icons-vue';

const isCollapse = ref(false);

function handleOpen(item) {
    console.log(item)
}
function handleClose(key, keyPath) {
    console.log(key,keyPath)
}

function clickItem(item) {
   // 防止自己跳自己的报错
    if (this.$route.path !== item.path && !(this.$route.path === '/userMian' && (item.path === '/userMain'))) {
        this.$router.push(item.path)
    }
    // 面包屑
    this.$store.commit('SelectMenu',item)
}

function isCollapseFun() {
    isCollapse.value = !isCollapse.value;
}


defineExpose({
    isCollapseFun,
})
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse){
    width: 200px;
}
.el-sub-menu{
    width: 200px;
}
.el-menu{
    border-right: solid 0px;
}
</style>