<template>
    <div class="table-container">
      <el-table
        :data="tableData"
        style="width:100%; height: 60%;"
        :header-cell-class-name="headerBg ? 'headerCell':''"
        :row-key="rowKey"
        @selection-change="handleSelectionChange"
        :stripe="stripe"
        :max-height="maxHeight"
        :show-summary="summary"
        :border="border"
        :summary-method="summaryMethod"
        :span-method="spanMethod"
      >
        <!-- 展开行 -->
        <el-table-column v-if="expand" type="expand" width="70" align="'center'">
            <template #default="scope">
                <slot name="expand" :row="scope.row" :index="scope.$index" :column="scope.column"></slot>
            </template>
        </el-table-column>
        <!-- 多选 -->
        <el-table-column
            v-if="selection"
            type="selection"
            width="70"
            align="'center'"
            :selectable="selectBox"
        />
        <!-- 序列号 -->
        <el-table-column v-if="index" type="index" width="70" :label="indexLabel" align="'center'" />
        <!-- 数据 -->
        <el-table-column
            v-for="column in columns"
            :prop="column.prop"
            :label="column.label"
            :key="column.prop"
            :width="column.width || 'auto'"
            :show-overflow-tooltip="column.tooltip ? true : column.tooltip"
            :type="column.type || ''"
            :sortable="column.sortable || false"
            :fixed="column.prop == 'operation' ? 'right' : column.fixed || false"
            :align="column.prop == 'operation' ? 'center' : column.align || 'center'"
        >
            <!-- table自带的作用域插槽 -->
            <template #default="scope">
                <!-- 作用域插槽， scope：拿到这一行的数据-->
                <slot :name="column.prop" :row="scope.row" :index="scope.$index" :column="scope.column">
                    <!-- 默认显示 -->
                    <span>{{ scope.row[column.prop] }}</span>
                </slot>
            </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <template v-if="hasPage">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagina.pageNo"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pagina.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagina.total"
        />
      </template>
    </div>
</template>
<script setup>
import {ref, reactive, watch} from 'vue';

const prop = defineProps({
    columns:{
        type:Array,
        default:() => []
    },
    dataList:{
        type:Array,
        default:() => []
    },
    pagina: {
      //分页数据
      type: Object,
      default: () => {
        return {
          pageNo: 1,
          pageSize: 10,
          total: 10,
        };
      },
    },
    maxHeight: {
      //最大高度
      type: String,
      default: '560',
    },
    stripe: {
      //是否显示斑马纹
      type: Boolean,
      default: true,
    },
    border: {
      //是否显示纵向的边框
      type: Boolean,
      default: true,
    },
    selection: {
      //是否可多选
      type: Boolean,
      default: false,
    },
    index: {
      //是否显示序列号
      type: Boolean,
      default: true,
    },
    expand: {
      //是否展开行
      type: Boolean,
      default: false,
    },
    hasPage: {
      // 是否显示分页组件
      type: Boolean,
      default: true,
    },
    rowKey: {
      //行数据的key
      type: String,
      default: '',
    },
    indexLabel: {
      type: String,
      default: '序号',
    },
    headerBg: {
      //表头行是否有背景色
      type: Boolean,
      default: true,
    },
    summary: {
      // 是否显示合计项
      type: Boolean,
      default: false,
    },
    selectBox: {
      //复选框可用/禁用状态处理函数
      type: Function,
      default: null,
    },
    summaryMethod: {
      //合计行处理函数
      type: Function,
      default: null,
    },
    spanMethod: {
      //合计行处理函数
      type: Function,
      default: null,
    }
})
const emit = defineEmits(['selectionChange','pageChange','pageNo'])

const tableData = ref();
const pagination = reactive({
    pageNo:1,
    pageSize:10,
})

// 多选
function handleSelectionChange(selection) {
    emit('selectionChange', selection);
}
function handleSizeChange(pageSize) {
    pagination.pageSize = pageSize;
    emit('pageChange', pagination);
}
function handleCurrentChange(pageNo) {
    pagination.pageNo = pageNo;
    emit('pageNo', pagination);
}

watch(
    [
        () => prop.dataList,
        () => prop.pagina
    ],
    (newValue1) => {
        tableData.value = JSON.parse(JSON.stringify(newValue1))[0];
        pagination.pageNo = JSON.parse(JSON.stringify(newValue1))[1].pageNo;
        pagination.pageSize = JSON.parse(JSON.stringify(newValue1))[1].pageSize;
        pagination.total = JSON.parse(JSON.stringify(newValue1))[1].total;
    },
    { immediate: true },
    { deep: true }
)
</script>

<style lang="scss" scoped>
.table-container {
  .el-table {
    margin-bottom: 20px;
  }
  .headerCell {
    background: #edeeee;
    color: #333;
  }
  .el-button {
    margin-bottom: 10px !important;
  }
}
</style>