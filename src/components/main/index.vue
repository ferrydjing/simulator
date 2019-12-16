<template>
  <div class="lay-main">
    <div class="main-header" v-on:mousedown="clickHeader" ref="mainHeader">
      <div class="main-header-tools">
        <Icon
          :size="14"
          type="caidan"
          @mousedown.native="mixin_clickEffectHandle($event, 'down')"
          @mouseup.native="mixin_clickEffectHandle($event, 'up')"
        ></Icon>
        <Icon
          :size="14"
          type="suoxiao"
          @mousedown.native="mixin_clickEffectHandle($event, 'down')"
          @mouseup.native="mixin_clickEffectHandle($event, 'up')"
        ></Icon>
        <div
          class="btn-close-page"
          @click="closePage"
          @mousedown="mixin_clickEffectHandle($event, 'down')"
          @mouseup="mixin_clickEffectHandle($event, 'up')"
        >
          <img class="normal" src="static/img/close.png" alt="" />
          <img class="active" src="static/img/close-hover.png" alt="" />
        </div>
      </div>
    </div>

    <div
      class="main-left"
      style="background-image: url(static/img/shading.png);"
    >
      <div class="logo-wrap">
        <router-link to="index">
          <img src="static/img/logo.png" width="104" alt="logo" />
        </router-link>
      </div>
      <SideMenu></SideMenu>
      <div class="local-install-wrap"><Icon type="index"></Icon>本地安装</div>
    </div>
    <div class="main-right" style="background-image: url(static/img/bg.jpg);">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Icon } from '_c'
import { SideMenu } from './components'
import { commonMixin } from '@/mixins'

export default {
  mixins: [commonMixin],
  components: {
    SideMenu,
    Icon
  },
  methods: {
    closePage() {
      try {
        // eslint-disable-next-line no-undef
        cef.call('close', {}, (error, result) => {
          console.log(error, result)
        })
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    clickHeader(e) {
      try {
        if (e.button === 2) {
          // console.log("你点了右键");
        } else if (e.button === 0) {
          // console.log("你点了左键");
          // eslint-disable-next-line no-unused-vars
          cef.call('DragStart', (error, result) => {})
        } else if (e.button === 1) {
          // console.log("你点了滚轮");
        }
        // eslint-disable-next-line no-empty
      } catch (error) {}
    }
  },
  created() {
    // document.oncontextmenu = function(e) {
    //   e.preventDefault()
    // }
  }
}
</script>

<style lang="scss" scoped>
.displayflex {
  display: flex;
  display: -webkit-flex;
}
.lay-main {
  display: flex;
  position: relative;
  width: 1280px;
  height: 770px;
  display: flex;
  background: #36363d;
  border: 1px solid #000;
  .main-header {
    position: absolute;
    width: 100%;
    height: 82px;
    left: 0;
    top: 0;
    z-index: 10;
    .main-header-tools {
      position: absolute;
      right: 30px;
      top: 24px;
      display: flex;
      z-index: 1000;
      i {
        position: relative;
        margin-right: 18px;
        color: #919199;
        cursor: pointer;
        &:hover {
          color: #908cff;
        }
      }
      .btn-close-page {
        position: relative;
        width: 14px;
        height: 14px;
        cursor: pointer;
        .active {
          display: none;
        }
        img {
          position: relative;
        }
        &:hover {
          .active {
            display: inline-block;
          }
          .normal {
            display: none;
          }
        }
      }
    }
  }
  .main-left {
    position: relative;
    height: 100%;
    width: 192px;
    background: #212126;
    .logo-wrap {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 43px;
    }
    .local-install-wrap {
      position: absolute;
      display: flex;
      align-items: center;
      line-height: 1;
      bottom: 45px;
      left: 24px;
      width: 144px;
      height: 32px;
      color: #bbbbbf;
      cursor: pointer;
      &:hover {
        background: rgb(57, 56, 71);
      }
      i {
        margin-left: 16px;
        margin-right: 10px;
      }
    }
  }
  .main-right {
    flex: 1;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-size: contain;
  }
}
</style>
