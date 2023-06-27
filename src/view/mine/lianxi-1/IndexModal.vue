<template>
    <div>
      <div class="my-12 mx-4">
          <el-card class="box-card">
              <div class="text item">
                  <FormModal
                    ref="formModalRef"
                    :rules="formDataState.rules"
                    :formList="formDataState.formList"
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
                :index="true" 
                indexLabel="序号" 
                maxHeight="600" 
                @selectionChange="selectChange"
                @pageChange="pageChange"
                @pageNo="pageNo"
              >
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
      <IndexAddModal ref="indexAddModalRef"/>
      <IndexDetailsModal ref="indexDetailsModalRef"/>
    </div>
</template>

<script setup>
import TableModal from '@/components/mine/table/TableModal.vue';
import FormModal from '@/components/mine/form/FormModal.vue';
import {ref, reactive} from 'vue';
import tableHeader from './common/column';
import IndexAddModal from "./IndexAddModal.vue"
import IndexDetailsModal from './IndexDetailsModal.vue';
import formDataState from "./common/formDataState";

// 表格所需的数据
const tableData = reactive([
        {
          serviceId:'001',
          service:'苏无名',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'002',
          service:'卢凌风',
          mobile:'135222222222',
          address:'bbb',
          company:'xxx',
          job:'xxx-2'
        },
        {
          serviceId:'003',
          service:'裴喜君',
          mobile:'135111111111',
          address:'ccc',
          company:'xxx',
          job:'xxx-3'
        },
        {
          serviceId:'004',
          service:'的法国红酒看来',
          mobile:'135111111111',
          address:'ddd',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'005',
          service:'薛环',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'006',
          service:'裴坚',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'007',
          service:'证先从',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'008',
          service:'选项',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'009',
          service:'企微端',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
        {
          serviceId:'010',
          service:'三重门',
          mobile:'135111111111',
          address:'aaa',
          company:'xxx',
          job:'xxx-1'
        },
]);
const pagina = reactive({
      pageNo: 1,
      pageSize: 10,
      total: 15,
})
const formModalRef = ref()
const indexAddModalRef = ref()
const indexDetailsModalRef = ref();

// 多选
function selectChange(index) {
    console.log(index)
}
// 分页
function pageChange(index) {
    console.log(index)
}
// 翻页
function pageNo(index){
    console.log(index)
}

// 查看详情
function getDetails(index){
    console.log(index)
    indexDetailsModalRef.value.show()
    indexDetailsModalRef.value.onLoad(index)
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
    indexAddModalRef.value.addShow();
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
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>