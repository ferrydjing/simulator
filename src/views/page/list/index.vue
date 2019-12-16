<template>
  <div class="simulator-leaderboard">
    <!-- 顶部工具栏 -->
    <PageHeader></PageHeader>
    <!-- 顶部工具栏 end-->
    <!-- 内容区 -->
    <transition name="el-fade-in">
      <div class="simulator-leaderboard__content" v-if="!showLeaderboardDetail">
        <Leaderboard
          class="simulator-leaderboar-content__item"
          :data="popularityData"
          @showMore="showMore"
        ></Leaderboard>
        <Leaderboard
          class="simulator-leaderboar-content__item"
          :data="newGameData"
          @showMore="showMore"
        ></Leaderboard>
        <Leaderboard
          class="simulator-leaderboar-content__item"
          :data="appointmentData"
          @showMore="showMore"
        ></Leaderboard>
        <Leaderboard
          class="simulator-leaderboar-content__item"
          :data="soartData"
          @showMore="showMore"
        ></Leaderboard>
      </div>
    </transition>
    <!-- 内容区 end -->
    <transition name="el-fade-in">
      <LeaderboardDetail
        v-if="showLeaderboardDetail"
        @hideLeaderboardDetail="hideLeaderboardDetail"
      ></LeaderboardDetail>
    </transition>
  </div>
</template>

<script>
import { PageHeader } from '_c'
import { Leaderboard, LeaderboardDetail } from './components'

export default {
  name: 'LeaderBoard',
  components: {
    PageHeader,
    Leaderboard,
    LeaderboardDetail
  },
  data() {
    return {
      showLeaderboardDetail: false,
      popularityData: [
        {
          uptime: '12月03日',
          bg: 'static/img/leaderboar-popularity.jpg',
          icon: 'static/img/icon.png',
          name: '英雄联盟手游',
          rank_status: '1',
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
      newGameData: [
        {
          uptime: '12月03日',
          bg: 'static/img/leaderboar-new.jpg',
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
      appointmentData: [
        {
          uptime: '12月03日',
          bg: 'static/img/leaderboar-appointment.jpg',
          icon: 'static/img/icon.png',
          name: '英雄联盟手游',
          rank_status: '2',
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
      soartData: [
        {
          uptime: '12月03日',
          bg: 'static/img/leaderboar-soar.jpg',
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
  },
  methods: {
    hideLeaderboardDetail() {
      this.showLeaderboardDetail = false
    },
    showMore() {
      this.showLeaderboardDetail = true
    }
  }
}
</script>

<style lang="scss" scoped>
.simulator-leaderboard {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 0px 0px 24px;
  .simulator-leaderboard__content {
    margin-top: 30px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .simulator-leaderboar-content__item {
      margin-bottom: 16px;
      &:not(:nth-child(4n)) {
        margin-right: 16px;
      }
    }
  }
}
</style>
