<template>
    <div class="my-12">
        <el-card class="box-card">
            <div class="text">
                <el-descriptions title="个人信息" v-if="bean">
                    <el-descriptions-item label="用户名">{{ bean.name }}</el-descriptions-item>
                    <el-descriptions-item label="手机号">{{ bean.mobile }}</el-descriptions-item>
                    <el-descriptions-item label="工号">{{ bean.qywxOpenid }}</el-descriptions-item>
                    <el-descriptions-item label="备注">
                        <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="个人信息" v-else>
                    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
                    <el-descriptions-item label="备注">
                    <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                </el-descriptions>

            </div>
        </el-card>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {storage} from '@/utils/storage';
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types';

const bean = ref();

onMounted(()=>{
    console.log(storage.get(CURRENT_USER))
    const current = storage.get(CURRENT_USER);
    bean.value = current;
})

</script>

<style scoped>
.text {
    font-size: 14px;
}
.item {
    padding: 250px 0;
}
.box-card {
    width: 99%;
    height: 200px;
}
.my-12 {
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>