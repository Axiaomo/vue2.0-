<!--  -->
<template>
  <div class="swipe">
    <mt-swipe :auto="4000" style="height:200px;border:1px solid #f00">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/components/Swipe.scss"
</style>