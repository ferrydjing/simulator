<template>
  <div class="simulator-index">
    <!-- 顶部工具栏 -->
    <PageHeader></PageHeader>
    <!-- 顶部工具栏 end-->

    <!-- 内容区 -->
    <div class="simulator-index__content">
      <div class="simulator-index-content__left">
        <!-- banner -->
        <Banner :data="bannerData"></Banner>
        <!-- banner end -->
        <!-- 推荐 -->
        <div class="simulator-index-content__recommend-wrap">
          <Recommend :data="recommendData1"></Recommend>
          <Recommend :data="recommendData2"></Recommend>
          <Recommend :data="recommendData3"></Recommend>
        </div>
        <!-- 推荐 end -->
      </div>
      <!-- 右侧 -->
      <div class="simulator-index-content__right">
        <!-- 快速启动 -->
        <QuickRun></QuickRun>
        <!-- 快速启动 end -->
        <!-- 榜单 -->
        <Laderboard
          class="simulator-index-content-right__laderboard"
          :data="leaderboardData"
        ></Laderboard>
        <!-- 榜单 end -->
      </div>
      <!-- 右侧 end -->
    </div>
    <!-- 内容区 end -->
  </div>
</template>

<script>
import { PageHeader } from '_c'
import { Banner, Recommend, QuickRun, Laderboard } from './components'
export default {
  components: {
    PageHeader,
    Banner,
    Recommend,
    QuickRun,
    Laderboard
  },
  data() {
    return {
      bannerData: [
        {
          icon: 'static/img/icon.png',
          banner: 'static/img/banner.png',
          type: '角色扮演',
          name: '英雄联盟'
        },
        {
          icon: 'static/img/icon2.png',
          banner: 'static/img/banner.png',
          type: '策略塔防',
          name: '明日方舟'
        },
        {
          icon: 'static/img/icon3.png',
          banner: 'static/img/banner.png',
          type: '动作冒险',
          name: '元气骑士'
        },
        {
          icon: 'static/img/icon4.png',
          banner: 'static/img/banner.png',
          type: '策略游戏',
          name: '多多自走棋'
        }
      ],
      recommendData1: [
        {
          name: '王者荣耀',
          type: '益智游戏',
          icon: 'static/img/icon.png',
          bg: 'static/img/recommend1.jpg'
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
          icon: 'static/img/icon4.png'
        }
      ],
      recommendData2: [
        {
          name: '王者荣耀',
          type: '益智游戏',
          icon: 'static/img/icon.png',
          bg: 'static/img/recommend2.jpg'
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
          icon: 'static/img/icon4.png'
        }
      ],
      recommendData3: [
        {
          name: '王者荣耀',
          type: '益智游戏',
          icon: 'static/img/icon.png',
          bg: 'static/img/recommend3.jpg'
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
          icon: 'static/img/icon4.png'
        }
      ],
      leaderboardData: {
        popularity: [
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 102045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1021045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          }
        ],
        newGame: [
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          }
        ],
        appointment: [
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          },
          {
            icon: 'static/img/icon.png',
            name: '英雄联盟手游',
            num: 1020045
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.simulator-index {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 24px 30px;
  .simulator-index__content {
    display: flex;
    flex: 1;
    margin-top: 10px;
    .simulator-index-content__left {
      width: 776px;
      height: 100%;
      .simulator-index-content__recommend-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
      }
    }
    .simulator-index-content__right {
      flex: 1;
      margin-left: 16px;
      margin-top: 20px;
      .simulator-index-content-right__laderboard {
        margin-top: 16px;
      }
    }
  }
}
</style>
