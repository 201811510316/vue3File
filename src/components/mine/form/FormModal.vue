<template>
    <div>
        <el-form 
            ref="ruleFormRef"
            :model="formData.data"
            :rules="rules"
            label-width="70px" 
            :inline="true"
        >
            <template v-for="item in formList">
                <el-form-item 
                    v-if="item.type === 'input'" 
                    :key="item.key" 
                    :prop="item.key"
                    :label="item.label"
                >
                    <el-input v-model="formData.data[item.key]"/>
                </el-form-item>
                <el-form-item
                    v-if="item.type === 'select'" 
                    :key="item.key" 
                    :prop="item.key"
                    :label="item.label"
                >
                    <el-select v-model="formData.data[item.key]" class="m-2" placeholder="Select">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
            </template>
            <el-form-item>
                <el-button type="primary" @click="submitForm">查询</el-button>
                <el-button type="primary" @click="remForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

const emit = defineEmits(['on-ok'])
const ruleFormRef = ref();
const formData = reactive({
    data:ref({})
});

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

function submitForm() {
    emit('on-ok',formData.data)
}
function remForm(){
    formData.data = {}
}

</script>

<style scoped>

</style>