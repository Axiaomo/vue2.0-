<!--  -->
<template>
  <transition name>
    <div class="welcome" :class="{hide:isHide}">
      <div class="img-wrap">
        <img src="../assets/images/welcome.jpg" width="100%" height="100%">
        <span class="author">YQ.SUN</span>
      </div>
      <div class="text-wrap">
        <div class="logo"><img src="../assets/images/logo.png" width="100%"/></div>
        <div class="text">
          <span class="title">知乎日报</span>
          <span class="bio">每天三次，每次七分钟</span>
        </div>
      </div>
    </div>

  </transition>
</template>

<script>
export default {
  data() {
    return {
      isHide: false,
    };
  },
  created() {
    this.firstImg()
  },
  components: {},
  computed: {},
  methods: {
    firstImg() {
      let isFirstLoad = this.$store.state.isFirstLoad;
      console.log(isFirstLoad)
      if (isFirstLoad) {
        // 3.5秒后隐藏欢迎界面
        setTimeout(() => {
          this.isHide = true;
        }, 343500);
      } else {
        this.isHide = true;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/components/Welcome.scss";
</style>