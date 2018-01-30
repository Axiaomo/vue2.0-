<!--  -->
<template>
  <div class="news-detail">
    <div class="top-wrapper">
      <img v-lazy="attachImageUrl(data.image)" :alt="data.title">
      <span class="top-title">
        {{data.title}}
      </span>
      <span class="image-source">图片:{{data.image_source}}</span>
    </div>
    <div class="body-wrap" v-html="this.data.body"></div>
  <news-menu :newsid="id"></news-menu>
  </div>
</template>
<script>
// 修改图片链接
import { attachImageUrl } from "./../assets/js/index";
import NewsMenu from "../components/NewsMenu";
export default {
  
  data() {
    return {
      data: {
        id:0
      }
    };
  },

  created() {
    this.fetchData();
  },

  components: { NewsMenu },

  computed: {},

  methods: {
    // 获取路由参数上的id新闻具体内容
    attachImageUrl(url) {
      return attachImageUrl(url);
    },
    fetchData() {
       this.id = this.$route.params.id;
      this.axios.get("/api/news/" + this.id).then(res => {
        // body图片链接
        res.data.body = this.attachImageUrl(res.data.body);
        this.data = res.data;
      }).catch(error=>{
        console.log(error)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/page/NewsDetail.scss";
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
