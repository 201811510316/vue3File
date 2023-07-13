<template>
    <PopFormModal 
        ref="popFormModalRef" 
        :rules="state.rules"
        :formList="state.formList"
        :options="state.options"
        @on-ok="submitData"
    />
</template>
<script setup>
import { ref, provide} from 'vue'
import PopFormModal from '@/components/mine/form/PopFormModal.vue';
import state from './common/stateData';
import empty from '@/utils/empty';

const popFormModalRef = ref();
provide('title', '添加列表数据')
// 提交表单数据
function submitData(){
    const values = popFormModalRef.value.getData();
    if (!empty(values)) {
        console.log(values)
        popFormModalRef.value.close()
    } else {
        console.log("aaa")
    }
}

function addShow(){
    popFormModalRef.value.show()
}

defineExpose({
    addShow
})

</script>
<style scoped>

</style>