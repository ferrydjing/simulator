<template>
  <div class="simulator-game-lib">
    <!-- 顶部工具栏 -->
    <PageHeader></PageHeader>
    <!-- 顶部工具栏 end-->
    <!-- 内容区 -->
    <div class="simulator-game-lib__content">
      <div
        class="simulator-game-lib-content__wrap"
        :infinite-scroll-delay="300"
        :infinite-scroll-distance="50"
        v-infinite-scroll="loadData"
        infinite-scroll-disabled="disabled"
      >
        <!-- 内容区顶部 -->
        <BtnTab :data="titleData"></BtnTab>
        <!-- 内容区顶部 -->
        <div class="simulator-game-lib-content__statistics">
          <div class="simulator-game-lib-content-statistics__info">
            共 <span>2252</span> 款游戏
          </div>
          <div class="simulator-game-lib-content-statistics__tabs">
            <TxtBtn
              :active="activeTabIndex === 0"
              class="simulator-game-lib-content-statistics-tabs__item"
              >最新</TxtBtn
            >
            <TxtBtn :active="activeTabIndex === 1">最热</TxtBtn>
          </div>
        </div>
        <!-- 内容区 -->
        <CardList
          class="simulator-game-lib-content__show"
          :data="dataList"
        ></CardList>
        <!-- 内容区 end -->
        <!-- <p v-if="dataLoading">加载中...</p> -->
        <div class="simulator-game-lib-content__no-more" v-if="noMore">
          我也是有底线的 Σ( ° △ °|||)
        </div>
      </div>
      <!-- 底部投影 -->
      <div class="simulator-game-lib-content__footer"></div>
      <!-- 底部投影 end -->
    </div>
    <!-- 内容区 end -->
    <!-- 回到顶部 -->
    <Backtop
      target=".simulator-game-lib .simulator-game-lib__content"
      :visibility-height="100"
      :right="16"
      :bottom="48"
    >
      <div class="game-lib-back-top">
        <Icon type="backtop" color="#75757D" :size="12"></Icon>
      </div>
    </Backtop>
    <!-- 回到顶部 end -->
  </div>
</template>

<script>
import { PageHeader, Icon, BtnTab, CardList } from '_c'
import { TxtBtn } from './components'
import { Backtop } from 'element-ui'

export default {
  name: 'GameLib',

  components: {
    PageHeader,
    TxtBtn,
    Backtop,
    Icon,
    BtnTab,
    CardList
  },
  data() {
    return {
      dataLoading: false,
      activeIndex: 0,
      activeTabIndex: 0,
      titleData: [
        {
          txt: '全部'
        },
        {
          txt: '腾讯游戏'
        },
        {
          txt: '网易游戏'
        },
        {
          txt: '动作冒险'
        },
        {
          txt: '休闲益智'
        },
        {
          txt: '飞行射击'
        },
        {
          txt: '二次元'
        },
        {
          txt: '体育竞技'
        },
        {
          txt: '常用软件'
        }
      ],
      dataList: [
        {
          name: '王者荣耀',
          type: '益智游戏',
          icon: 'static/img/icon.png'
        },
        {
          name: '第五人格',
          type: '益智游戏',
          icon: 'static/img/icon2.png'
        },
        {
          name: '明日方舟',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        },
        {
          name: '元气骑士',
          type: '益智游戏',
          icon: 'static/img/icon3.png'
        }
      ]
    }
  },
  computed: {
    noMore() {
      return this.titleData.length > 8
    },
    disabled() {
      return this.dataLoading || this.noMore
    }
  },
  methods: {
    loadData() {
      this.dataLoading = true
      setTimeout(() => {
        this.titleData.push({
          txt: Math.random()
        })
        this.dataLoading = false
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.simulator-game-lib {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 1px 0px 24px;
  .simulator-game-lib__content {
    flex: 1;
    margin-top: 30px;
    overflow: auto;
    .simulator-game-lib-content__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 56px;
      z-index: 10;
      background: linear-gradient(
        180deg,
        rgba(54, 54, 61, 0) 0%,
        rgba(54, 54, 61, 1) 90%,
        rgba(54, 54, 61, 1) 100%
      );
    }
    .simulator-game-lib-content__no-more {
      color: #75757d;
      text-align: center;
      margin: 20px 0 80px;
    }
    .simulator-game-lib-content__wrap {
      height: 100%;
      .simulator-game-lib-content__header {
        display: flex;
        .simulator-game-lib-content-header__item {
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      .simulator-game-lib-content__statistics {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .simulator-game-lib-content-statistics__info {
          font-size: 12px;
          color: #bbbbbf;
          span {
            color: #fff;
          }
        }
        .simulator-game-lib-content-statistics__tabs {
          margin-right: 24px;
          .simulator-game-lib-content-statistics-tabs__item {
            margin-right: 24px;
          }
        }
      }
      .simulator-game-lib-content__show {
        margin-top: 20px;
      }
    }
  }
  /deep/ .el-backtop {
    background: none;
    width: auto;
    height: auto;
    z-index: 9999;
    .game-lib-back-top {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      box-sizing: border-box;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(33, 33, 38, 0.9);
      &:hover {
        border: 1px solid rgba(144, 140, 255, 0.5);
        i {
          color: rgba(144, 140, 255, 1) !important;
        }
      }
    }
  }
}
</style>
