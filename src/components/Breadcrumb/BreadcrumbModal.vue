<template>
    <div>
      <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :to="{path:'/userMain'}">
                首页
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="current.path" v-if="current">
                {{ current.fatcher }}
            </el-breadcrumb-item>
            <!-- <el-breadcrumb-item :to="current.path" v-if=" current">
                {{ current.fatcher2 }}
            </el-breadcrumb-item> -->
            <el-breadcrumb-item :to="current.path" v-if="current">
                {{ current.label }}
            </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const current = computed(() => store.state.tag.currentMenu);

</script>
   
<style lang="less" scoped>
.breadcrumb{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.el-breadcrumb ::v-deep(.el-breadcrumb__inner) {
        color: #d9bb95 !important;
        font-weight:400 !important;
}
/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep(.el-breadcrumb__inner) {
        color: #fc9105 !important;
        font-weight:800 !important;
}
</style>