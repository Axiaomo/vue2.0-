<!--  -->
<template>
    <div class="index">
        <!-- 启动页面 -->
        <Welcome></Welcome>
        <!-- 左侧导航 -->
        <!-- 主体内容 -->
        <mt-loadmore :top-method="loadTop" ref="loadmore">
            <!-- header -->
            <header>
                <i class="icon iconfont icon-fenlei"></i>
                <span class="hot-news">今日新闻</span>
            </header>
            <!-- 轮播图 -->
            <swipe></swipe>
        </mt-loadmore>
    </div>

</template>

<script>
import Welcome from "./../components/Welocme";
import Swipe from "./../components/Swipe";
export default {
  data() {
    return {};
  },

  mounted() {},

  components: {
    Welcome,
    Swipe
  },

  computed: {},

  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/page/Index.scss";
</style>