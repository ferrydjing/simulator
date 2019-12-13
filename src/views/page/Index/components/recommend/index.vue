<template>
  <div class="component-recommend">
    <template v-for="(item, index) in cData">
      <div class="component-recommend__top" v-if="index === 0" :key="index">
        <el-image :src="item.bg"></el-image>
        <div class="component-recommend-top__contnet">
          <p class="component-recommend-top-content__title">{{ item.name }}</p>
          <p>{{ item.type }}</p>
        </div>
      </div>
      <div class="component-recommend__item" v-else :key="index">
        <div class="component-recommend-item__img-wrap">
          <el-image fit="cover" :src="item.icon"></el-image>
        </div>
        <div class="component-recommend-item__info">
          <div class="component-recommend-item-info__title">
            {{ item.name }}
          </div>
          <div>{{ item.type }}</div>
        </div>
        <InstallBtn class="component-recommend-item__btn"></InstallBtn>
      </div>
    </template>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { Image } from 'element-ui'
import { InstallBtn } from '_c'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'el-image': Image,
    InstallBtn
  },
  computed: {
    cData() {
      return fp.get('data', this) || []
    }
  }
}
</script>

<style lang="scss">
.component-recommend {
  width: 248px;
  height: 320px;
  overflow: hidden;
  border-radius: 8px;
  background: #212126;
  .component-recommend__top {
    position: relative;
    height: 139px;
    width: 100%;
    margin-bottom: 10px;
    .component-recommend-top__contnet {
      position: absolute;
      bottom: 18px;
      left: 16px;
      font-size: 12px;
      color: #75757d;
      p {
        margin: 0;
      }
      .component-recommend-top-content__title {
        font-size: 14px;
        color: #bbbbbf;
        margin-bottom: 6px;
      }
    }
  }
  .component-recommend__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 52px;
    &:hover {
      background: #2f2f33;
      .component-recommend-item__info {
        color: #bbbbbf;
        .component-recommend-item-info__title {
          color: #fff;
        }
      }
      &::after {
        background: none;
      }
    }
    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 16px;
        width: 168px;
        height: 1px;
        background: #303036;
      }
    }
    .component-recommend-item__img-wrap {
      width: 36px;
      height: 36px;
      margin-left: 16px;
      .el-image {
        width: 36px;
        height: 36px;
      }
    }
    .component-recommend-item__info {
      flex: 1;
      margin-left: 12px;
      color: #75757d;
      font-size: 12px;
      .component-recommend-item-info__title {
        font-size: 14px;
        color: #bbbbbf;
        margin-bottom: 3px;
      }
    }
    .component-recommend-item__btn {
      margin-right: 16px;
    }
  }
}
</style>
