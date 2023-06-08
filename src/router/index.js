import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/MainModal.vue';

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
	{
		path:'/login',
		name:'login',
		component: () => import('@/view/login/NewLogin.vue'),
	},
  {
    path:'/main',
    name:'main',
    component: Layout,
    children:[
      {
              path:'/index', // 首页的路由
              name:'Index',
              component:() => import('@/view/mine/lianxi-1/IndexModal.vue')
          },
          {
              path:'/setting', // 设置页面的路由
              name:'Setting',
              component:() => import('@/view/mine/lianxi-1/SettingModal.vue')
          }
    ]
  },
  {
    path:'/user',
    name:'user',
    component: Layout,
    children:[
      {
              path:'/admin',
              name:'admin',
              component:() => import('@/view/admin/userDataModal.vue')
          },
          {
              path:'/lianxi-2',
              name:'lianxi-2',
              component:() => import('@/view/mine/lianxi-2/IndexModal.vue')
          }
    ]
  },
  {
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
  },
	{
        path:'/*', 
        name:'404',
        component: () => import('@/view/ErrorModal.vue')
    }
]
const router =createRouter({
	history: createWebHashHistory(),
	routes
})


export default router;