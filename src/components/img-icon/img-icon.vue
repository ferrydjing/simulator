<!--
    @desc 图片icon
    使用案例：
    参数	        说明	        类型	                可选值	                默认值
    type            icon的class     String                  -                       -
    hover           icon的hover值   string                  -                       type + '-hover'
-->

<template>
  <div
    class="component-img-icon"
    @mousemove="handleMouse(1)"
    @mouseout="handleMouse(0)"
    :style="imgStyle"
  >
    <img :src="url" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 14
    },
    type: String,
    hover: {
      type: String,
      default: "-hover"
    }
  },
  data() {
    return {
      mouserOver: 0
    };
  },
  computed: {
    url() {
      if (!this.mouserOver) {
        return `static/img/${this.type}.png`;
      } else {
        return `static/img/${this.type}${this.hover}.png`;
      }
    },
    imgStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      };
    }
  },
  methods: {
    handleMouse(flag) {
      this.mouserOver = flag;
    }
  }
};
</script>

<style lang="scss">
.component-img-icon {
  display: inline-block;
}
</style>
