<template>
    <div>
        <div class="my-12 mx-4">
            <el-card class="box-card">
                <div class="text item">
                    <FormModal
                        ref="formModalRef"
                        :rules="stateData.rules"
                        :formList="stateData.formList"
                        :options="stateData.options"
                        @on-ok="subminData"
                    />
                </div>
            </el-card>
        </div>
        <div class="mx-4">
            <el-card class="box-card-2">
                <div class="mb-4">
                    <el-button type="primary" @click="addForm">添加</el-button>
                </div>
                <TableModal 
                    :columns="tableHeader" 
                    :dataList="tableData" 
                    :pagina="pagina" 
                    :index="false" 
                    maxHeight="560" 
                    @pageChange="pageChange"
                    @pageNo="pageNo"
                >
                    <template #testStatus="scope">
                        <div v-if="scope.row.testStatus === 1">
                            成功
                        </div>
                        <div v-else>
                            失败
                        </div>
                    </template>
                    <template #operation="scope">
                        <el-button link type="primary" style="margin-right: 0.75rem;" @click="getDetails(scope.row)">查看详情</el-button>
                        <el-dropdown style="margin-top: 0.25rem;">
                            <span class="el-dropdown-link">
                                更多
                                <el-icon>
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        <el-button link type="primary" @click="getEdit(scope.row)">
                                            编辑
                                        </el-button>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <el-button link type="primary" @click="getDetele(scope.row)">
                                            删除
                                        </el-button>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </template>
                </TableModal>
            </el-card>
        </div>
        <AddDataModal ref="addDataModalRef"/>
        <DetailModal ref="detailModalRef"/>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import TableModal from '@/components/mine/table/TableModal.vue';
import FormModal from '@/components/mine/form/FormModal.vue';
import tableHeader from './common/column';
import stateData from "./common/stateData";
import { ApiClient } from '@/utils/ApiClient';
import DetailModal from "@/view/mine/lianxi-4/DetailModal.vue";
import AddDataModal from './AddDataModal.vue';

const formModalRef = ref()
const tableData = ref([]);
const pagina = reactive({
    pageNo:1,
    pageSize:0,
    total:0
});
const page = ref({
    pageNo: 1,
    pageSize: 10,
})
const detailModalRef = ref();
const addDataModalRef = ref()

// 分页
async function pageChange(index) {
    page.value.pageNo = index.pageNo;
    page.value.pageSize = index.pageSize;
    const bean = await gird({...page.value});
    tableData.value = bean.data;
    pagina.pageNo = bean.pageNo;
    pagina.total = bean.totalSize;
    pagina.pageSize = bean.pageSize;
}
// 翻页
async function pageNo(index){
    page.value.pageNo = index.pageNo;
    const bean = await gird({...page.value});
    tableData.value = bean.data;
    pagina.pageNo = bean.pageNo;
    pagina.total = bean.totalSize;
    pagina.pageSize = bean.pageSize;
}
// 查看详情
function getDetails(index){
    detailModalRef.value.show();
    detailModalRef.value.onLoad(index)
}
// 编辑
function getEdit(index){
    console.log(index)
}
// 删除
function getDetele(index){
    console.log(index)
}
// 弹出添加列表窗口
function addForm() {
    addDataModalRef.value.addShow()
}
// 获取分页数据
function gird(params){
    return new Promise((resolve)=>{
      const client = new ApiClient();
      client.post('/testResult/detailByPcbaIdPage', params);
      client.setSuccessCallback(function(response){
         resolve(response);
      })
    })
}
// 获取搜索框数据
function subminData(params){
    console.log(params)
}

onMounted( async()=>{
    const bean = await gird({...page.value});
    tableData.value = bean.data;
    pagina.total = bean.totalSize;
    pagina.pageSize = bean.pageSize;
})


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
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>