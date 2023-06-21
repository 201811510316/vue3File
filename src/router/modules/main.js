import Layout from '@/layout/MainModal.vue';

export default {
	path:'/main',
	name:'main',
	component: Layout,
	children:[
		{
            path:'/main/index', // 首页的路由
            name:'Index',
            component:() => import('@/view/mine/lianxi-1/IndexModal.vue')
        },
        {
            path:'/main/setting', // 设置页面的路由
            name:'Setting',
            component:() => import('@/view/mine/lianxi-4/SettingModal.vue')
        }
	]
}