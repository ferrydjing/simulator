<template>
  <div class="simulator-page-header">
    <ImgIcon
      type="back"
      class="simulator-page-header__img-icon"
      @mousedown.native="mixin_clickEffectHandle($event, 'down')"
      @mouseup.native="mixin_clickEffectHandle($event, 'up')"
    ></ImgIcon>
    <ImgIcon
      type="refresh"
      class="simulator-page-header__img-icon"
      @mousedown.native="mixin_clickEffectHandle($event, 'down')"
      @mouseup.native="mixin_clickEffectHandle($event, 'up')"
    ></ImgIcon>
    <Popover
      placement="bottom"
      trigger="click"
      width="214"
      @show="searchShow(true)"
      @hide="searchShow(false)"
    >
      <el-input
        type="text"
        slot="reference"
        class="simulator-page-header__input"
        :style="searchStyle"
        placeholder="搜索游戏"
        v-model="search"
        size="small"
      >
        <img src="static/img/search.png" slot="prefix" alt="" />
      </el-input>
      <div class="csdbfb"></div>
    </Popover>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImgIcon from '../img-icon'
import { Popover, Input } from 'element-ui'
import { commonMixin } from '@/mixins'

export default {
  mixins: [commonMixin],
  components: {
    ImgIcon,
    Popover,
    'el-input': Input
  },
  data() {
    return {
      showFlag: false,
      search: ''
    }
  },
  computed: {
    ...mapState('basic', ['history']),
    searchStyle() {
      let style = '182px'
      if (this.showFlag) {
        style = '240px'
      }
      return {
        width: style
      }
    }
  },
  methods: {
    searchShow(flag) {
      this.showFlag = flag
    }
  }
}
</script>

<style lang="scss">
.simulator-page-header {
  position: relative;
  width: 330px;
  display: flex;
  align-items: center;
  z-index: 100;
  .simulator-page-header__img-icon {
    position: relative;
  }
  .component-img-icon {
    margin-right: 22px;
  }
  .simulator-page-header__input {
    width: 182px;
    transition: all 0.3s ease-in-out;
    .el-input__inner {
      border-radius: 16px;
      padding-left: 40px;
      background: #45454d;
      border-color: #45454d;
    }
    .el-input__prefix {
      img {
        margin-top: 9px;
        margin-left: 20px;
      }
    }
  }
}
.el-popover {
  left: 290px !important;
}
</style>
