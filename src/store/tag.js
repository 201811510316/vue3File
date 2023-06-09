export default {
    //数据，相当于data
    state: {
        currentMenu:null,
        tabsList:[
            {
                path:'/userMain',
                name:'user-main',
                label: '个人信息',
            }
        ]
    },
    //里面定义方法，操作state方发
    mutations: {
        // 更新面包屑的数据
        selectMenu(state, item) {
            if (item.name === 'user-main') {
                state.currentMenu = null
            } else {
                state.currentMenu = item;
                // 如果点击的不在面包屑数据中,则添加
                const index = state.tabsList.findIndex(val => val.name === item.name)
                if (index === -1) {
                    state.tabsList.push(item)
                }
            }
        },
        closeTab(state, item){
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    },
    actions: {},
}