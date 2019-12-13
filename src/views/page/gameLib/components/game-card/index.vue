<template>
  <div class="component-game-lib-card">
    <div
      class="component-game-lib-card__img-bg"
      :style="{ 'background-image': `url(${cData.icon})` }"
    ></div>
    <div class="component-game-lib-card__bg"></div>
    <div class="component-game-lib-card__content">
      <img :src="cData.icon" alt="" />
      <div class="component-game-lib-card-content__info">
        <div class="component-game-lib-card-content-info__name">
          {{ cData.name }}
        </div>
        <div class="component-game-lib-card-content-info__type">
          {{ cData.type }}
        </div>
        <InstallBtn></InstallBtn>
      </div>
    </div>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { InstallBtn } from '_c'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    InstallBtn
  },
  computed: {
    cData() {
      return fp.get('data', this) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin position-absolute {
  position: absolute;
  width: 100%;
  height: 100%;
}
.component-game-lib-card {
  position: relative;
  display: flex;
  align-items: center;
  width: 248px;
  height: 112px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: radial-gradient(ellipse at top left, #42454c, #25282e);
  &:hover {
    .component-game-lib-card__bg {
      border: 1px solid rgba(144, 140, 255, 0.5);
    }
  }
  .component-game-lib-card__img-bg {
    @include position-absolute;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(30px);
    opacity: 0.4;
  }
  .component-game-lib-card__bg {
    @include position-absolute;
    border-radius: 8px;
    box-sizing: border-box;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 38, 0) 0%,
      rgba(33, 33, 38, 1) 90%,
      rgba(33, 33, 38, 1) 100%
    );
  }
  .component-game-lib-card__content {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    z-index: 1;
    img {
      margin-left: 16px;
      margin-right: 24px;
      width: 72px;
      height: 72px;
    }
    .component-game-lib-card-content__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #fff;
      .component-game-lib-card-content-info__type {
        color: #bbbbbf;
        font-size: 12px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
