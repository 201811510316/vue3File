<template>
    <el-container>
      <!-- 侧边栏容器 -->
      <el-aside :width="mainWidth">
        <div class="head">
            <div>
              <img src="@/assets/logo.png" alt="logo">
              <span v-if="mainWidth === '200px'">vue3 admin</span>
            </div>
        </div>
        <AsideModal ref="asideModalRef"/>
      </el-aside>
      <el-container>
        <!-- 顶栏容器 -->
        <el-header><HeaderModal @emitDemo="mainFunction"/></el-header>
        <TabModal/>
        <!-- 主要区域容器 -->
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import {ref} from 'vue';
import AsideModal from '@/layout/aside/AsideModal.vue';
import HeaderModal from '@/layout/header/HeaderModal.vue';
import TabModal from '@/components/tab/TabModal.vue';

const asideModalRef = ref();
const mainWidth = ref("200px")
function mainFunction() {
  asideModalRef.value.isCollapseFun();
  if (mainWidth.value == "75px") {
      mainWidth.value = "200px"
      return;
  }
  if (mainWidth.value == "200px") {
      mainWidth.value = "75px"
      return;
  }
}

</script>

<style scoped>
/*整体显示区域布局样式*/
.el-container {
    height: 100%;
}
.el-header {
    padding: 0;
}
.el-main {
    padding: 0;
}
.el-aside{
  background-color: #545c64;
  color: #333;
  height: 100%;
}
.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
}
.head > div {
  display: flex;
  align-items: center;
}
.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color:white;
}
</style>