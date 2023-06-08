<template>
    <div>
      <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item v-for="item in tags" :key="item.path">
              {{ item.meta.title }}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script setup>
import {computed} from 'vue';
import {mapState} from 'vuex';

computed({
    ...mapState({
        tags:state => state.tab.tabList
    })
})

</script>
   
<style lang="less" scoped></style>