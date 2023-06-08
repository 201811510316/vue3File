import Layout from '@/layout/MainModal.vue';

export default {
	path:'/user',
	name:'user',
	component: Layout,
	children:[
		{
            path:'/user/admin',
            name:'admin',
            component:() => import('@/view/admin/userDataModal.vue')
        },
        {
            path:'/user/lianxi-2',
            name:'lianxi-2',
            component:() => import('@/view/mine/lianxi-2/IndexModal.vue')
        }
	]
}