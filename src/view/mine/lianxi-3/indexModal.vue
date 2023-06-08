<template>
    <div>
        <div class="my-12 mx-4">
            <el-card class="box-card">
                <div class="text item">
                    {{'列表内容'}}
                </div>
            </el-card>
        </div>
        <div class="mx-4">
            <el-card class="box-card-2">
                <div class="text item">
                    {{'列表内容'}}
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.text {
    font-size: 14px;
  }

.item {
    padding: 18px 0;
}

.box-card {
    width: 99%;
    height: 100px;
}
.box-card-2 {
    width: 99%;
    height: 700px;
}
.my-12 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>