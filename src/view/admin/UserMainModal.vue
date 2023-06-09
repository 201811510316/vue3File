<template>
    <div class="my-12">
        <el-card class="box-card">
            <div class="text">
                <el-descriptions title="个人信息">
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