<template>
  <div
    class="component-install-btn"
    @mouseover="mouseHandle($event, 'over')"
    @mouseout="mouseHandle($event, 'out')"
    :style="btnStyle"
  >
    <div
      class="component-install-btn__bar"
      v-if="status === 1"
      :style="barStyle"
    ></div>
    <span
      class="component-install-btn__percent"
      v-if="status === 1 && !mouseOverFlag"
      >{{ percentTxt }}</span
    >
    <span v-else>{{ cTxt }}</span>
  </div>
</template>

<script>
export default {
  name: 'InstallBtn',
  props: {
    status: {
      // 0: 未安装 1：下载中 2：暂停 3：安装中 4：安装完成 5：更新
      type: Number,
      default: 1,
    },
    percent: {
      type: Number,
      default: 49.1,
    },
  },
  data() {
    return {
      mouseOverFlag: false,
    }
  },
  computed: {
    btnStyle() {
      return {
        background:
          this.status === 1 || !this.mouseOverFlag ? 'none' : '#908cff',
        border:
          this.status === 1 || !this.mouseOverFlag
            ? '1px solid #404040'
            : 'none',
      }
    },
    cTxt() {
      const txtMap = ['安装', '暂停', '继续', '安装中', '运行', '']
      return txtMap[this.status]
    },
    barStyle() {
      return {
        width: `${this.percent}%`,
      }
    },
    txtStyle() {
      return {
        'font-size': this.status === 1 ? '12px' : '14px',
      }
    },
    percentTxt() {
      return `${this.percent}%`
    },
  },
  methods: {
    mouseHandle(e, type) {
      e.stopPropagation()
      switch (type) {
        case 'over':
          this.mouseOverFlag = true
          break
        case 'out':
          this.mouseOverFlag = false
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.component-install-btn {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  border: 1px solid #404040;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  .component-install-btn__bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #908cff;
    z-index: 0;
  }
  span {
    position: relative;
    z-index: 1;
  }
  .component-install-btn__percent {
    font-size: 12px;
  }
}
</style>
