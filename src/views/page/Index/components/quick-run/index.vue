<template>
  <div class="component-quick-run">
    <div class="component-quick-run__title">
      快速开启游戏<img src="static/img/flash.png" alt="" />
    </div>
    <div class="component-quick-run__img-wrap">
      <img src="" border="0" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.component-quick-run {
  width: 248px;
  height: 109px;
  background: #212126;
  border-radius: 8px;
  overflow: hidden;
  .component-quick-run__title {
    margin-left: 16px;
    margin-top: 16px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    img {
      margin-left: 7px;
    }
  }
  .component-quick-run__img-wrap {
    display: flex;
    justify-content: space-evenly;
    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      border: none;
      background: #36363d;
    }
  }
}
</style>
