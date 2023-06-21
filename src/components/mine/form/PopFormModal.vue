<template>
    <PopViewModal ref="popViewModalRef">
        <template v-slot:default>
            <el-form
                ref="ruleFormRef"
                :model="ruleForm.data"
                status-icon
                :rules="rules"
                label-width="120px"
                class="demo-ruleForm"
            >
                <template v-for="item in formList">
                    <el-form-item 
                        v-if="item.type === 'input'" 
                        :key="item.key" 
                        :prop="item.key"
                        :label="item.label"
                    >
                        <el-input 
                            v-model="ruleForm.data[item.key]" 
                            autocomplete="off" 
                        />
                    </el-form-item>
                    <el-form-item
                        v-if="item.type === 'select'" 
                        :key="item.key" 
                        :prop="item.key"
                        :label="item.label"
                    >
                        <el-select v-model="ruleForm.data[item.key]" class="m-2" placeholder="Select">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-form-item>
                </template>
            </el-form>
        </template>
        <template v-slot:footer>
            <span class="dialog-footer">
                <el-button @click="resetForm">取消</el-button>
                <el-button type="primary" @click="submitForm">确定</el-button>
            </span>
        </template>
    </PopViewModal>
</template>

<script setup>
import {ref, reactive} from 'vue';
import PopViewModal from './PopViewModal.vue';

const popViewModalRef = ref();
const ruleFormRef = ref();
const ruleForm = reactive({
    data:ref({})
})
const emit = defineEmits(["on-ok"])
const props = defineProps({
    formList:{
        type: Array,
        required: true,
        default: () => []
    },
    rules: {
        type: Object,
        required: false,
        default: () => {}
    },
    options:{
        type: Array,
        required: true,
        default: () => []
    },
})

function submitForm(){
    emit('on-ok')
}
function resetForm(){
    ruleForm.data = {}
    popViewModalRef.value.closeForm();
}

function getData(){
    return ruleForm.data
}
function show() {
    popViewModalRef.value.showForm();
}
function close(){
    popViewModalRef.value.closeForm();
}
defineExpose({
    show,
    close,
    getData
})

</script>

<style scoped>

</style>