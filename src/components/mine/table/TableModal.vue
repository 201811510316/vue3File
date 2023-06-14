<template>
    <div>
        <el-table 
            :data="tableData" 
            :border="true" 
            style="width: 100%" 
            @selection-change="selectionChange"
        >
            <el-table-column type="selection" width="50"/>
            <el-table-column
                v-for="item in tableHeader"
                :key="item.prop"
                v-bind="item"
            >
                <template #default="scope" v-if="$slots[item.prop]">
                    <slot :name="item.prop" v-bind="scope"></slot>
                </template>
                <template #add="scope" v-if="$slots[item.prop]">
                    <slot :name="item.prop" v-bind="scope"></slot>
                </template>
            </el-table-column>
        </el-table>
        
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