<template>
    <el-dialog v-model="dialogFormVisible" :draggable="true" :title="title">
        <template #default>
            <slot name="default"></slot>
        </template>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, inject } from 'vue'

const dialogFormVisible = ref(false)
const title = inject('title')

function showForm(){
    dialogFormVisible.value = true;
}
function closeForm(){
    dialogFormVisible.value = false;
}

defineExpose({
    showForm,
    closeForm
})

</script>
<style scoped>

</style>