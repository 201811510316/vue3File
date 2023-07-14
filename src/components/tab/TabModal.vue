<template>
    <div class="tabs">
        <el-tag
            :key="tag.name"
            class="el-tag-width"
            v-for="(tag, index) in tags"
            :closable="tag.name !== 'user-main'"
            :disable-transitions="false"
            @close="handleClose(tag, index)"
            @click="changeMenu(tag)"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
        >
            <el-button link>{{ tag.label }}</el-button>
        </el-tag>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();
const tags = computed(() => store.state.tag.tabsList);

function close(index){
    store.commit('closeTab',index);
}
function handleClose(item, index) {
    let length = this.tags.length - 1;
    // 关闭标签
    close(item)
    // 如果关闭的标签不是当前路由的话，就不跳转
    if (item.name != route.name) {
        return;
    }
    // 关闭的标签是最右边的话，往左边跳转一个
    if (index === length) {
        router.push({ name: this.tags[index - 1].name })
    } else {
        // 否则往右边跳转
        router.push({ name: this.tags[index].name })
    }
}
//选择标签跳转路由
function changeMenu(item) {
    router.push({ name: item.name })
    store.commit('selectMenu', item)
}

</script>
<style scoped>
.tabs{
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 1rem;
}
.el-tag-width{
  margin-left: 0.5rem;
}
.el-button{
  --el-button-text-color: #0a0a0a;
  --el-button-hover-link-text-color: #121212;
}
</style>