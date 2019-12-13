<template>
  <div class="component-leaderboard">
    <Tabs v-model="activeName">
      <TabPane label="人气榜" name="popularity">
        <div
          class="component-leaderboard__item"
          v-for="(item, index) in cData.popularity"
          :key="index"
        >
          <div class="component-leaderboard-item-rank">
            <img :src="item.rank.img" v-if="item.rank.img" alt="" />
            <Icon
              class="component-leaderboard-item-rank__icon"
              color="#75757D"
              :size="16"
              :type="item.rank"
              v-else
            ></Icon>
          </div>
          <img
            class="component-leaderboard-item__icon"
            :src="item.icon"
            alt=""
          />
          <div class="component-leaderboard-item__info">
            <div>{{ item.name }}</div>
            <div class="component-leaderboard-item-info_sub">
              {{ item.info }}
            </div>
          </div>
          <InstallBtn class="component-leaderboard-item__btn"></InstallBtn>
        </div>
      </TabPane>
      <TabPane label="新游榜" name="newGame">
        <div
          class="component-leaderboard__item"
          v-for="(item, index) in cData.newGame"
          :key="index"
        >
          <div class="component-leaderboard-item-rank">
            <img :src="item.rank.img" v-if="item.rank.img" alt="" />
            <Icon
              class="component-leaderboard-item-rank__icon"
              color="#75757D"
              :size="16"
              :type="item.rank"
              v-else
            ></Icon>
          </div>
          <img
            class="component-leaderboard-item__icon"
            :src="item.icon"
            alt=""
          />
          <div class="component-leaderboard-item__info">
            <div>{{ item.name }}</div>
            <div class="component-leaderboard-item-info_sub">
              {{ item.info }}
            </div>
          </div>
          <InstallBtn class="component-leaderboard-item__btn"></InstallBtn>
        </div>
      </TabPane>
      <TabPane label="预约榜" name="appointment">
        <div
          class="component-leaderboard__item"
          v-for="(item, index) in cData.appointment"
          :key="index"
        >
          <div class="component-leaderboard-item-rank">
            <img :src="item.rank.img" v-if="item.rank.img" alt="" />
            <Icon
              class="component-leaderboard-item-rank__icon"
              color="#75757D"
              :size="16"
              :type="item.rank"
              v-else
            ></Icon>
          </div>
          <img
            class="component-leaderboard-item__icon"
            :src="item.icon"
            alt=""
          />
          <div class="component-leaderboard-item__info">
            <div>{{ item.name }}</div>
            <div class="component-leaderboard-item-info_sub">
              {{ item.info }}
            </div>
          </div>
          <InstallBtn class="component-leaderboard-item__btn"></InstallBtn>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { formatNum } from '@/utils/utils'
import { Tabs, TabPane } from 'element-ui'
import { Icon, InstallBtn } from '_c'

const fpMap = fp.map.convert({ cap: false })

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Tabs,
    TabPane,
    Icon,
    InstallBtn
  },
  computed: {
    cData() {
      let iconMap = [
        { img: 'static/img/champion.png' },
        { img: 'static/img/runner-up.png' },
        { img: 'static/img/third-place.png' },
        'num4',
        'num5',
        'num6',
        'num7'
      ]
      return {
        popularity: fp.flowRight(
          fpMap((item, idx) => ({
            _id: fp.get('_id', item) || '',
            rank: iconMap[idx],
            icon: fp.get('icon', item) || '',
            name: fp.get('name', item) || '',
            info: formatNum(fp.get('num', item) || 0) + '人在玩'
          })),
          fp.get('popularity')
        )(this.data),
        newGame: fp.flowRight(
          fpMap((item, idx) => ({
            _id: fp.get('_id', item) || '',
            rank: iconMap[idx],
            icon: fp.get('icon', item) || '',
            name: fp.get('name', item) || '',
            info: formatNum(fp.get('num', item) || 0) + '人在玩'
          })),
          fp.get('newGame')
        )(this.data),
        appointment: fp.flowRight(
          fpMap((item, idx) => ({
            _id: fp.get('_id', item) || '',
            rank: iconMap[idx],
            icon: fp.get('icon', item) || '',
            name: fp.get('name', item) || '',
            info: formatNum(fp.get('num', item) || 0) + '人在玩'
          })),
          fp.get('appointment')
        )(fp.get('data', this) || {})
      }
    }
  },
  data: function() {
    return {
      activeName: 'popularity'
    }
  }
}
</script>

<style lang="less" scoped>
.component-leaderboard {
  width: 248px;
  height: 531px;
  background: #212126;
  border-radius: 8px;
  /deep/ .el-tabs {
    .el-tabs__header {
      margin-bottom: 0;
      .el-tabs__nav-wrap {
        &::after {
          background: none;
        }
        .el-tabs__item {
          width: 82px;
          height: 45px;
          line-height: 45px;
          padding: 0;
          text-align: center;
          font-size: 16px;
          &.is-active,
          &:hover {
            color: #fff;
          }
        }
        .el-tabs__active-bar {
          top: 0;
          width: 24px !important;
          height: 3px;
          left: 29px;
          border-radius: 1.5px;
          background: linear-gradient(
            90deg,
            rgba(144, 140, 255, 1),
            rgba(115, 126, 255, 1)
          );
        }
      }
    }
  }
  .component-leaderboard__item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 69px;
    &:not(:last-child) {
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        right: 16px;
        height: 1px;
        width: 196px;
        background: #303036;
      }
    }
    &:hover {
      background: #2f2f33;
      .component-leaderboard-item__info {
        color: #fff;
        .component-leaderboard-item-info_sub {
          color: #bbbbbf;
        }
      }
    }
    .component-leaderboard-item-rank {
      display: flex;
      justify-content: center;
      width: 16px;
      margin-left: 12px;
      margin-right: 8px;
      .component-leaderboard-item-rank__icon {
        transform: scale(0.5);
      }
    }
    .component-leaderboard-item__icon {
      width: 36px;
      height: 36px;
      margin-right: 12px;
    }
    .component-leaderboard-item__info {
      flex: 1;
      color: #bbbbbf;
      .component-leaderboard-item-info_sub {
        color: #75757d;
        font-size: 12px;
      }
    }
    .component-leaderboard-item__btn {
      margin-right: 16px;
    }
  }
}
</style>
