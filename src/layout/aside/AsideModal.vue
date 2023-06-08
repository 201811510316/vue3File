<template>
    <el-menu 
        default-active="/index" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-sub-menu index="/index">
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
        <el-menu-item index="/lianxi-3">
            <el-icon><Setting/></el-icon>
            <span>导航三</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import {ref} from 'vue';
import {Location,Setting,Document} from '@element-plus/icons-vue';

const isCollapse = ref(false);
function handleOpen(key, keyPath) {
    console.log(key,keyPath)
}
function handleClose(key, keyPath) {
    console.log(key,keyPath)
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse){
    width: 200px;
}
</style>