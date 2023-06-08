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
    path:'/report',
    name:'report',
    component: Layout,
    children:[
      {
          path:'/userMain',
          name:'user-main',
          component:() => import('@/view/admin/UserMainModal.vue'),
          meta: {
            title: '个人信息',
          }
      },
    ]
  },
  {
    path:'/main',
    name:'main',
    component: Layout,
    children:[
      {
          path:'/index', 
          name:'Index',
          component:() => import('@/view/mine/lianxi-1/IndexModal.vue'),
          meta: {
            title: '选项1',
          }
      },
      {
          path:'/setting',
          name:'Setting',
          component:() => import('@/view/mine/lianxi-1/SettingModal.vue'),
          meta: {
            title: '选项2',
          }
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
              component:() => import('@/view/admin/userDataModal.vue'),
              meta: {
                title: '选项3',
              }
          },
          {
              path:'/lianxi-2',
              name:'lianxi-2',
              component:() => import('@/view/mine/lianxi-2/IndexModal.vue'),
              meta: {
                title: '选项4',
              }
          }
    ]
  },
  {
    path:'/lianxi',
    name:'lianxi',
    component: Layout,
    children:[
      {
        path:'/lianxi-3',
        name:'lianxi-3',
          component:() => import('@/view/mine/lianxi-3/indexModal.vue'),
          meta: {
            title: '选项5',
          }
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