const formDataState = {
    formList:[
      {
        label:'姓名',
        key:'name',
        type:'input'
      },
      {
        label:'手机号',
        key:'mobile',
        type:'input'
      }
    ],
    rules:{
      name: [{required: true, message: '请输入', trigger: 'blur'}],
      mobile: [{required: true, message: '请输入', trigger: 'blur'}]
    }
}

export default formDataState;