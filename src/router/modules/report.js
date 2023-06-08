import Layout from '@/layout/MainModal.vue';

export default {
	path:'/report',
	name:'report',
	component: Layout,
	children:[
		{
            path:'/lianxi-3',
            name:'lianxi-3',
            component:() => import('@/view/mine/lianxi-3/indexModal.vue')
        },
	]
}