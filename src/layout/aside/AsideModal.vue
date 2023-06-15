<template>
    <el-menu
        :default-active="$router.path"
        :collapse="isCollapse"
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
            <el-icon>
                <component :is="item.icon" />
            </el-icon>
            <span>{{item.label}}</span>
        </el-menu-item>
        <el-sub-menu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
            <template v-slot:title>
                <el-icon>
                    <component :is="item.icon" />
                </el-icon>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <div v-for="(subItem, subIndex) in item.children" :key="subIndex">
                    <el-menu-item
                        :index="subItem.path" 
                        v-if="subItem.name"
                        @click="clickMenu(subItem)"
                    >
                        {{subItem.label}}
                    </el-menu-item>
                </div>
            </el-menu-item-group>
            <div v-for="(subItem, subIndex) in item.children" :key="subIndex">
                <el-sub-menu v-if="subItem.children" :index="subItem.label">
                    <template v-slot:title>
                        <el-icon>
                            <component :is="subItem.icon" />
                        </el-icon>
                        <span>{{subItem.label}}</span>
                    </template>
                    <el-menu-item 
                        :index="subItem2.path" 
                        v-for="(subItem2, subIndex2) in subItem.children" 
                        :key="subIndex2" 
                        @click="clickMenu(subItem2)"
                    >
                        {{subItem2.label}}
                    </el-menu-item>
                </el-sub-menu>
            </div>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import {ref, computed} from 'vue';
import store from '@/store';
import {useRouter} from "vue-router";
import menu from './menu';


const router = useRouter();
const isCollapse = ref(false);

// 获取一级菜单
const noChildren = computed(()=>{
    return menu.filter(item => !item.children)
})
// 获取二级三级菜单
const hasChildren = computed(()=>{
    return menu.filter(item => item.children)
}) 
// 存储和展示所点击的菜单栏信息
function clickMenu(item) {
    store.commit('selectMenu', item)
    router.push({name: item.name})
}
// 展开和折叠菜单栏
function isCollapseFun() {
    isCollapse.value = !isCollapse.value;
}

defineExpose({
    isCollapseFun,
})
</script>

<style scoped>
.el-menu{
    border-right: solid 0px;
}
</style>