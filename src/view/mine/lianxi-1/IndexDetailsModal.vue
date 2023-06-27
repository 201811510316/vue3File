<template>
    <PopViewModal ref="popViewModalRef">
        <template v-slot:default>
            {{ bean }}
        </template>
    </PopViewModal>
</template>

<script setup>
import {ref, provide} from 'vue'
import PopViewModal from '../../../components/mine/form/PopViewModal.vue';

const popViewModalRef = ref();
provide('title', '查看列表数据')
function show() {
    popViewModalRef.value.showForm();
}
function close(){
    popViewModalRef.value.closeForm();
}

const bean = ref();
function onLoad(params){
    console.log(params);
    bean.value = params
}

defineExpose({
    show,
    onLoad
})
</script>

<style scoped>

</style>