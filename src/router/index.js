import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/MainModal.vue';
import { storage } from '@/utils/storage';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import empty from '@/utils/empty';
import Modals from '@/utils/Modals';

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
          component:() => import('@/view/admin/UserMainModal'),
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
          component:() => import('@/view/mine/lianxi-1/IndexModal'),
          meta: {
            title: '选项1',
          }
      },
      {
          path:'/setting',
          name:'Setting',
          component:() => import('@/view/mine/lianxi-4/SettingModal'),
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
          component:() => import('@/view/admin/userDataModal'),
          meta: {
            title: '选项3',
          }
        },
        {
          path:'/lianxi-2',
          name:'lianxi-2',
          component:() => import('@/view/mine/lianxi-2/IndexModal'),
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
          component:() => import('@/view/mine/lianxi-3/indexModal'),
          meta: {
            title: '选项5',
          }
        },
      ]
    },
    {
      path:'/mine',
      name:'mine',
      component: Layout,
      children:[
        {
          path:'/lianxi-5',
          name:'lianxi-5',
          component:() => import('@/view/mine/lianxi-5/lianxiModal5'),
          meta: {
            title: '选项六',
          }
        },
        {
          path:'/lianxi-6',
          name:'lianxi-6',
          meta: {
            title: '二级导航',
          },
          children:[
            {
              path:'/lianxi-7',
              name:'lianxi-7',
              component:() => import('@/view/mine/lianxi-6/lianxiModal7'),
              meta: {
                title: '选项七',
              }
            },
            {
              path:'/lianxi-8',
              name:'lianxi-8',
              component:() => import('@/view/mine/lianxi-7/lianxiModal8'),
              meta: {
                title: '选项八',
              }
            },
          ]
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

const whiteList = ['/login']
router.beforeEach((to, from, next)=>{
    const token = storage.get(ACCESS_TOKEN);
    if (token) {
        next()
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router;