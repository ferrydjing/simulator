<template>
  <div class="components-banner">
    <el-image :src="data[activeIndex].banner"></el-image>
    <div class="components-banner__btb-layer">
      <div
        class="components-banner-btb-layer__item"
        v-for="(item, index) in cData"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="itemClick(item, index)"
      >
        <div class="components-banner-btb-layer-item__img-wrap">
          <el-image :src="item.icon"></el-image>
        </div>
        <div class="components-banner-btb-layer-item__content">
          <p class="components-banner-btb-layer-item-content__name">
            {{ item.name }}
          </p>
          <p>{{ item.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fp from "lodash/fp";
import { Image } from "element-ui";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "el-image": Image
  },
  computed: {
    cData() {
      return fp.get("data", this) || [];
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    itemClick(item, index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.components-banner {
  position: relative;
  width: 776px;
  height: 340px;
  /deep/ .el-image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 8px;
  }
  .components-banner__btb-layer {
    position: absolute;
    right: 0;
    top: 20px;
    height: 320px;
    width: 182px;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    .components-banner-btb-layer__item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      width: 100%;
      height: 80px;
      background: rgba(33, 33, 38, 0.9);
      //   overflow: auto;
      &:not(:last-child) {
        border-bottom: 1px solid #303036;
      }
      &:first-child {
        border-radius: 0 8px 0 0;
      }
      &:last-child {
        border-radius: 0 0 8px 0;
      }
      &.active,
      &:hover {
        position: relative;
        background: rgba(0, 0, 0, 0.9);
        &::before {
          position: absolute;
          content: "";
          left: -12px;
          top: 50%;
          transform: translateY(-10px);
          border-top: 10px solid transparent;
          border-right: 12px solid rgba(0, 0, 0, 0.9);
          border-bottom: 10px solid transparent;
        }
        &::after {
          position: absolute;
          content: "";
          right: 0;
          top: 50%;
          height: 100%;
          width: 3px;
          border-radius: 3px;
          transform: translateY(-50%);
          background: linear-gradient(
            0deg,
            rgba(144, 140, 255, 1),
            rgba(115, 126, 255, 1)
          );
        }
        .components-banner-btb-layer-item__content {
          color: #bbbbbf;
          .components-banner-btb-layer-item-content__name {
            color: #fff;
          }
        }
      }
      .components-banner-btb-layer-item__img-wrap {
        position: relative;
        width: 40px;
        height: 40px;
        margin-left: 16px;
        margin-right: 13px;
      }
      .components-banner-btb-layer-item__content {
        flex: 1;
        color: #75757d;
        font-size: 12px;
        p {
          margin: 0;
        }
        .components-banner-btb-layer-item-content__name {
          color: #bbbbbf;
          font-size: 14px;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>
