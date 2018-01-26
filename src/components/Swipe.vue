<!--  -->
<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(topStory,index) in topStories" :key="index">
        <router-link v-bind="{to:'/newsDetail/'+topStory.id}">
          <img :src="attachImageUrl(topStory.image)" :alt="topStory.title" />
          <span class="top-story-title">{{topStory.title}}</span>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      topStories: {}
    };
  },

  created() {
    this.gettopStories();
  },

  components: {},

  computed: {},

  methods: {
    // 获取Stories数据
    gettopStories() {
      this.axios.get("api/news/latest").then(res => {
        this.topStories = res.data.top_stories;
        console.log("aaaaaa");
      });
    },
    // 修改图片禁止访问问题
    attachImageUrl(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(
          /http\w{0,1}:\/\/p/g,
          "https://images.weserv.nl/?url=p"
        );
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/components/Swipe.scss";
</style>