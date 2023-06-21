<template>
    <div>
        <el-dialog title="重置密码" :draggable="true" v-model="dialogFormVisible">
            <el-form :model="form" ref="formData" :rules="rules">
                <el-form-item label="旧密码" prop="oldPassWord" :label-width="formLabelWidth">
                    <el-input v-model="form.oldPassWord" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassWord" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassWord" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="resPassWord" :label-width="formLabelWidth">
                    <el-input v-model="form.resPassWord" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" class="mr-4" @click="affirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

const rules = reactive({
    oldPassWord: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }],
    newPassWord: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }],
    resPassWord: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }],
})
const formData = ref();
const formLabelWidth = ref('120px')
const form = reactive({
    oldPassWord:'',
    newPassWord:'',
    resPassWord:''
})
const dialogFormVisible = ref(false)


function dialogFormVisibleFun(){
    dialogFormVisible.value = true;
}

function cancel(){
    dialogFormVisible.value = false;
}

function affirm(){
    dialogFormVisible.value = false;
}

defineExpose({
    dialogFormVisibleFun,
})
</script>

<style scoped>
.dialog-footer{
    display: flex;
    flex-direction:row-reverse;
}
</style>