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
import {attachImageUrl} from "../assets/js/index";
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
      });
    },
     attachImageUrl(url){
        return attachImageUrl(url)
      }
  }
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/components/Swipe.scss";
</style>