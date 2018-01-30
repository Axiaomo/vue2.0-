<!--  -->
<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li class="menu-item" @click="goBack()">
        <i class="icon iconfont icon-back"></i>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-moreunfold"></i>
      </li>
      <li class="menu-item" @click="thumbUp" :class="{'dianzan-active': isDianzan}">
        <i class="icon iconfont icon-dianzan"></i>
        <span class="dianzan-number">{{this.$store.state.popularity}}</span>
      </li>
      <li class="menu-item" @click="showMenu">
        <i class="icon iconfont icon-fenxiang"></i>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-pinglun"></i>
        <span class="comments-number">{{this.$store.state.comments}}</span>
      </li>
    </ul>
    <!-- 分享组件 -->
    <mt-popup v-model="popupVisible" position="bottom">
      <share @cancel="hideMenu"></share>
    </mt-popup>
  </div>
</template>

<script>
import router from "../router";
import Share from "./Share";
export default {
  props: ["newsid"],
  data() {
    return {
      isDianzan: false, // 是否已点赞
      popupVisible: false // 分享组件是否展示
    };
  },

  created() {
    this.fetchStoryExtra();
  },

  components: {
    Share
  },

  computed: {},

  methods: {
    // 获取新闻额外信息
    fetchStoryExtra() {
      this.axios
        .get("/api/story-extra/" + this.newsid)
        .then(res => {
          // console.log(res)
          this.$store.state.long_comments = res.data.long_comments;
          this.$store.state.popularity = res.data.popularity;
          this.$store.state.short_comments = res.data.short_comments;
          this.$store.state.comments = res.data.comments;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 返回上一页事件
    goBack() {
      let type = this.$store.state.newsType;
      if (type == 0) {
        router.push({ name: "Index" });
      } else if (type === 1) {
        let currentThemeId = this.$store.state.currentThemeId;
        router.push({ name: "themeDetail", params: { id: currentThemeId } });
      } else if (type === 2) {
        router.push({ name: "collect" });
      }
    },
    // 点赞事件
    thumbUp() {
      if (!this.isDianzan == true) {
        this.$store.state.popularity++;
      } else {
        this.$store.state.popularity--;
      }
      this.isDianzan = !this.isDianzan;
    },
    // 展示分享菜单事件
    showMenu() {
      this.popupVisible = true;
    },
    // 隐藏分享菜单（子传父）
    hideMenu() {
      this.popupVisible = false;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/scss/components/NewsMenu.scss";
</style>