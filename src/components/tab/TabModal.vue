<template>
    <div class="tabs">
        <el-tag
            :key="tag.name"
            v-for="(tag, index) in tags"
            :closable="tag.name !== 'user-main'"
            :disable-transitions="false"
            @close="handleClose(tag, index)"
            @click="changeMenu(tag)"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
        >
            {{ tag.label }}
        </el-tag>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import store from '@/store';

export default {
  computed: {
    ...mapState({
      tags: state => state.tag.tabsList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    //关闭标签
    handleClose(tag, index) {
      let length = this.tags.length - 1
      //vuex调方法的另一种写法
      this.close(tag)
      // 如果关闭的标签不是当前路由的话，就不跳转
      if (tag.name !== this.$route.name) {
        return
      }
      // 关闭的标签是最右边的话，往左边跳转一个
      if (index === length) {
        this.$router.push({ name: this.tags[index - 1].name })
      } else {
        // 否则往右边跳转
        this.$router.push({ name: this.tags[index].name })
      }
    },

    //选择标签跳转路由
    changeMenu(item) {
      this.$router.push({ name: item.name })
      store.commit('selectMenu', item)
    }
  }
}

</script>
<style scoped>
.tabs{
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>