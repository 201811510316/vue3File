<template>
    <div>
        <div class="my-12 mx-4">
            <el-card class="box-card">
                <div class="text item">
                    <FormModal
                      ref="formModalRef"
                      :rules="state.rules"
                      :formList="state.formList"
                    />
                </div>
            </el-card>
        </div>
        <div class="mx-4">
            <el-card class="box-card-2">
                <div class="mb-4">
                  <el-button type="primary">添加</el-button>
                </div>
                <TableModal
                    :tableData="tableData"
                    :tableHeader="tableHeader"
                    :total="total"
                >
                  <template #operation="scope">
                      <el-button 
                          size="default" 
                          @click="handleEdit(scope.$index, scope.row)"
                      >
                        编辑
                      </el-button>
                  </template>
                </TableModal>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import TableModal from '@/components/mine/table/TableModal.vue';
import FormModal from '@/components/mine/form/FormModal.vue';
import {ref, reactive} from 'vue';

// 表格所需的数据
const tableData = reactive([
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
]);
//表头数据  辅助tableData的数据 tableData是自己定义
const tableHeader = reactive([
  {
    prop: "avatar",
    label: "头像",
  },
  {
    prop: "nickname",
    label: "评论人",
  },
  {
    prop: "replyNickname",
    label: "回复人",
  },
  {
    prop: "articleTitle",
    label: "文章标题",
  },
  {
    prop: "commentContent",
    label: "评论内容",
  },
  {
    prop: "createTime",
    label: "评论时间",
  },
  {
    prop: "isReview", 
    label: "状态",
  },
  {
    prop: 'operation',
    label: "操作",
  },
]);

const total = ref(100);  //数据总数
const formModalRef = ref()
const state = reactive({
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
})

const handleEdit = (index, row) => {
  console.log(index, row)
}



</script>

<style scoped>
.text {
    font-size: 14px;
  }

.item {
    padding: 18px 0;
}

.box-card {
    width: 99%;
    height: 100px;
}
.box-card-2 {
    width: 99%;
    height: 700px;
}
.my-12 {
  margin-bottom: 2rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>