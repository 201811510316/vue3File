const state = {
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
      },
      {
        label:'选择器',
        key:'option',
        type:'select'
      }
    ],
    rules:{
      name: [{required: true, message: '请输入', trigger: 'blur'}],
      mobile: [{required: true, message: '请输入', trigger: 'blur'}],
      option:[{required: true, message: '请选择', trigger: 'blur'}],
    },
    options:[
        {
          label:"a",
          value:"a"
        },
        {
          label:"b",
          value:"b"
        },
        {
          label:"c",
          value:"c"
        },
    ]
}

export default state;