const menu = [
    {
        path:'/userMain',
        name:'user-main',
        label:'个人信息',
        url:'admin/UserMainModal',
        icon: 'HomeFilled',
    },
    {
        icon:'Document',
        label: '导航一',
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
              url: 'mine/lianxi-4/SettingModal',
              fatcher:'导航一'
            }
        ]
    },
    {
        icon:'Setting',
        label: '导航二',
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
        icon:'Histogram',
        label: '导航三',
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
    {
        icon:'Discount',
        label: '导航五',
        children: [
            {
                path:'/lianxi-5',
                name:'lianxi-5',
                label: '选项6',
                url: 'mine/lianxi-5/lianxiModal5',
                fatcher:'导航五'
            },
            {
                icon:'Menu',
                fatcher:'导航五',
                label: '二级导航',
                children: [
                    {
                        path:'/lianxi-7',
                        name:'lianxi-7',
                        label: '选项7',
                        url: 'mine/lianxi-6/lianxiModal7',
                        fatcher2:'二级导航',
                        fatcher:'导航五',
                    },
                    {
                        path:'/lianxi-8',
                        name:'lianxi-8',
                        label: '选项8',
                        url: 'mine/lianxi-7/lianxiModal8',
                        fatcher2:'二级导航',
                        fatcher:'导航五',
                    },
                ]
            }
        ]
    },
]

export default menu;