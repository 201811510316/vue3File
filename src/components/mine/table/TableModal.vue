<template>
    <div>
        <div>
            <el-table 
                :data="tableData" 
                :border="true" 
                style="width: 100%" 
                @selection-change="selectionChange"
            >
                <el-table-column type="selection" width="50"/>
                <template v-for="(item,index) in tableHeader">
                    <el-table-column
                        v-if="item.slot"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :fixed="item.fixed"
                        :align="item.align || 'center'"
                        :show-overflow-tooltip="item.overHidden || false"
                        :min-width="item.minWidth || '100px'"
                        :sortable="item.sortable || false"
                        :type="item.type"
                    >
                        <slot :name="item.slot"></slot>
                    </el-table-column>

                    <el-table-column
                        v-else
                        :key="index + 1"
                        :prop="item.prop"
                        :label="item.label"
                        :fixed="item.fixed"
                        :align="item.align || 'center'"
                        :show-overflow-tooltip="item.overHidden || false"
                        :min-width="item.minWidth || '100px'"
                        :sortable="item.sortable || false"
                        :type="item.type"
                        :width="item.width"
                    >
                        <template #default="scope">
                            <span>{{ scope.row[item.prop] ? scope.row[item.prop] : "" }}</span>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </div>
        
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :background="true"
                :total="total"
                :current-page="currentPage"
                :page-size="pageSize"
                :page-count="pageCountSize"
                layout="total, sizes, prev, pager, next, jumper"
            />
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import { ElPagination } from 'element-plus'

const pageSize = ref(10); //每页几条数据
const pageCountSize = ref(Math.ceil(props.total/pageSize.value)); //总页数
const currentPage = ref(1);//当前页

const props = defineProps({
    tableData: {// 表格显示的数据
        type: Array,
    },
    tableHeader: {// 表头数据
        type: Array,
        default: function () {
            return [];
        },
    },
    total: { // 总页数
        type: Number,
    }
})

const selectionChange = (val) => {
    console.log(val)
};

function handleSizeChange(val) { // 页数改变的时候触发的事件
    pageSize.value = val;
    pageCountSize.value = Math.ceil(props.total/val);
}
function handleCurrentChange(val) { // 当前页改变的时候触发的事件 
    currentPage.value = val
}
</script>

<style scoped>
.block{
    margin-top: 1rem;
    margin-left: 485px;
}
</style>