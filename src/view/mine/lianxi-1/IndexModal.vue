<template>
    <div>
        <div class="my-12 mx-4">
            <el-card class="box-card">
                <div class="text item">
                    {{'列表内容1'}}
                </div>
            </el-card>
        </div>
        <div class="mx-4">
            <el-card class="box-card-2">
                <TableModal
                    :tableData="tableData"
                    :tableHeader="tableHeader"
                    :isOperate="isOperate"
                    :total="total"
                    :operateWidth="operateWidth"
                >
                    <template v-slot:state>
                        <el-tag>文章</el-tag>
                    </template>
                    <template v-slot:action>
                        <el-button
                            size="default"
                            type="success"
                            @click="updateCommentReview(scope.row.id)">
                            操作按钮
                        </el-button>
                    </template>
                </TableModal>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import TableModal from '@/components/mine/table/TableModal.vue';
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
    fixed: "left",
    label: "头像",
    width: "130px",
    align: "center",
  },
  {
    prop: "nickname",
    label: "评论人",
    width: "130px",
    align: "center", 
  },
  {
    prop: "replyNickname",
    label: "回复人",
    width: "130px",
    align: "left",
  },
  {
    prop: "articleTitle",
    label: "文章标题",
    width: "130px",
    align: "left",
  },
  {
    prop: "commentContent",
    label: "评论内容",
    width: "130px",
    align: "left",
  },
  {
    prop: "createTime",
    label: "评论时间",
    width: "130px",
    align: "left",
  },
  {
    prop: "isReview", 
    label: "状态",
    width: "130px", 
    align: "left",
  },
  {
    label: "来源",
    slot: "state", //插槽根据需求显示
    width: "130px",
    align: "left",
  },
  {
    label: "操作",
    slot: "action",
    fixed: "right",
    width: "130px",
    align: "center",
  },
]);
 
const operateWidth = ref(160); // 操作列宽度
const isOperate = ref(true); // 操作列是否显示
const total = ref(100);  //数据总数

</script>

<style>
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
</style>