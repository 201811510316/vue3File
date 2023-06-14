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
            <el-icon><User/></el-icon>
            <span>{{item.label}}</span>
        </el-menu-item>
        <el-sub-menu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
            <template v-slot:title>
                <el-icon><Document/></el-icon>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item 
                    :index="subItem.path" 
                    v-for="(subItem, subIndex) in item.children" 
                    :key="subIndex" 
                    @click="clickMenu(subItem)"
                >
                    {{subItem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import store from '@/store';
import {useRouter} from "vue-router";

const router = useRouter();
const isCollapse = ref(false);
const menu = reactive([
    {
        path:'/userMain',
        name:'user-main',
        label:'个人信息',
        url:'admin/UserMainModal',
        icon: 'user',
    },
    {
        label: '导航一',
        icon: 'setting',
        children: [
            {
              path: '/index',
              name: 'Index',
              label: '选项1',
              url: 'mine/lianxi-1/IndexModal',
              fatcher:'导航一'
            },
            {
              path: '/setting',
              name: 'Setting',
              label: '选项2',
              url: 'mine/lianxi-1/SettingModal',
              fatcher:'导航一'
            }
        ]
    },
    {
        label: '导航二',
        icon: 'document',
        children: [
            {
              path:'/admin',
              name:'admin',
              label: '选项3',
              url: 'admin/userDataModal',
              fatcher:'导航二'
            },
            {
              path:'/lianxi-2',
              name:'lianxi-2',
              label: '选项4',
              url: 'mine/lianxi-2/IndexModal',
              fatcher:'导航二'
            }
        ]
    },
    {
        label: '导航三',
        icon: 'data',
        children: [
            {
                path:'/lianxi-3',
                name:'lianxi-3',
                label: '选项5',
                url: 'mine/lianxi-3/indexModal',
                fatcher:'导航三'
            },
        ]
    },
])

const noChildren = computed(()=>{
    return menu.filter(item => !item.children)
})
const hasChildren = computed(()=>{
    return menu.filter(item => item.children)
}) 

function clickMenu(item) {
    store.commit('selectMenu', item)
    router.push({name: item.name})
}

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