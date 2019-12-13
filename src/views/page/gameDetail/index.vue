<template>
  <div class="content">
    game detail
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: function(val) {
        console.log(val.query);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 15px 0;
}
</style>
