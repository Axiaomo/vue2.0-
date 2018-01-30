<template>
  <div class="share">
    <span class="share-title">分享这篇内容</span>
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="share-item">
          <i class="icon iconfont icon-weixinhaoyou"></i>
          <span>微信好友</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-weixinpengyouquan"></i>
          <span>微信朋友圈</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-weibo"></i>
          <span>新浪微博</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-fuzhi"></i>
          <span>复制链接</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-youdaoyunbiji"></i>
          <span>有道云笔记</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-yinxiangbiji"></i>
          <span>印象笔记</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-tengxunweibo"></i>
          <span>腾讯微博</span>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="share-item">
          <i class="icon iconfont icon-xinxi"></i>
          <span>微信好友</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-instapaper"></i>
          <span>微信朋友圈</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="button" @click="toggleCollect">{{this.collectText}}</div>
    <div class="button" @click="cancel">取消</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collectText:'收藏'
    };
  },
  created() {
  
  },
  methods: {
   cancel(){
     this.$emit('cancel')
   },
   toggleCollect(){
    if(this.collectText=='收藏'){
      this.collectText='取消收藏'
    }else{
      this.collectText='收藏'
    }
   }
  }
};
</script>
<style lang="sass">
@import "./../assets/scss/components/Share.sass";
</style>
