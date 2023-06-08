export default {
    //数据，相当于data
    state: {
      tabList:[
        {
            path:'/userMain',
            name:'user-main',
            meta:{
                title: '个人信息',
            }
        }
      ]
    },
    //里面定义方法，操作state方发
    mutations: {
        // 更新面包屑的数据
        SelectMenu(state, item) {
            // 如果点击的不在面包屑数据中,则添加
            const index = state.tabList.findIndex(val => val.name === item.name)
            if (index === -1) {
                state.tabList.push(item)
            }
        }
    },
    actions: {},
}