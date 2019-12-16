<template>
  <div class="component-leaderboard-detail">
    <!-- 面包屑 -->
    <CrumbsList
      class="c-leaderboard-detail-crumbs"
      :data="crumbs"
      @crumbsClick="crumbsChange"
    ></CrumbsList>
    <!-- 面包屑 end -->
    <BtnTab :data="titleData" class="c-leaderboard-detail__header"></BtnTab>
    <!-- 内容区 -->
    <CardList
      class="simulator-game-lib-content__show"
      :data="dataList"
      showRank
    ></CardList>
    <!-- 内容区 end -->
    <!-- 底部投影 -->
    <div class="c-leaderboard-detail__footer"></div>
    <!-- 底部投影 end -->
  </div>
</template>

<script>
import { Icon, BtnTab, CardList, CrumbsList } from '_c'

export default {
  components: {
    Icon,
    BtnTab,
    CardList,
    CrumbsList
  },
  data() {
    return {
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
      ],
      crumbs: [
        {
          txt: '榜单'
        },
        {
          txt: '榜单详情'
        }
      ]
    }
  },
  methods: {
    crumbsChange(item, index) {
      if (index === 0) {
        this.$emit('hideLeaderboardDetail')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.component-leaderboard-detail {
  flex: 1;
  overflow: auto;
  .c-leaderboard-detail-crumbs {
    margin-top: 30px;
    margin-bottom: 16px;
  }
  .c-leaderboard-detail__header {
    margin-top: 20px;
    margin-bottom: 31px;
  }
  .c-leaderboard-detail__footer {
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
}
</style>
