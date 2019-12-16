<template>
  <div class="component-list-leaderboard">
    <template v-for="(item, index) in cData">
      <div
        class="component-list-leaderboard__first-item"
        :key="index"
        v-if="index === 0"
        :style="{
          'background-image': `url(${item.bg})`
        }"
      >
        <div class="component-list-leaderboard-first-item__uptime">
          {{ item.uptime }}更新
        </div>
        <div class="component-list-leaderboard-first-item__content">
          <div class="component-list-leaderboard-first-item-content__img-wrap">
            <img :src="item.icon" alt="" />
          </div>
          <div class="component-list-leaderboard-first-item-content__info">
            <div
              class="component-list-leaderboard-first-item-content-info__rank"
            >
              <img :src="item.rank.img" alt="" />
            </div>
            <div
              class="component-list-leaderboard-first-item-content-info__content"
            >
              <div
                class="component-list-leaderboard-first-item-content-info-content__info"
              >
                <div
                  class="component-list-leaderboard-first-item-content-info-content-info__name"
                >
                  {{ item.name }}
                </div>
                <div>{{ item.info }}</div>
              </div>
              <div
                class="component-list-leaderboard-first-item-content-info-content__btn-wrap"
              >
                <InstallBtn
                  class="component-list-leaderboard-first-item-content-info-content__btn"
                ></InstallBtn>
              </div>
              <Icon
                :type="item.rankIcon.type"
                :color="item.rankIcon.color"
                :size="20"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div class="component-list-leaderboard__item" :key="index" v-else>
        <div class="component-list-leaderboard-item-rank">
          <img :src="item.rank.img" v-if="item.rank.img" alt="" />
          <Icon
            class="component-list-leaderboard-item-rank__icon"
            color="#75757D"
            :size="16"
            :type="item.rank"
            v-else
          ></Icon>
        </div>
        <img
          class="component-list-leaderboard-item__icon"
          :src="item.icon"
          alt=""
        />
        <div class="component-list-leaderboard-item__info">
          <div>{{ item.name }}</div>
          <div class="component-list-leaderboard-item-info_sub">
            {{ item.info }}
          </div>
        </div>
        <InstallBtn class="component-list-leaderboard-item__btn"></InstallBtn>
        <Icon
          class="component-list-leaderboard-item__status"
          :type="item.rankIcon.type"
          :color="item.rankIcon.color"
          :size="20"
        ></Icon>
      </div>
    </template>
    <div class="component-list-leaderboard__more" @click="showMore">
      查看更多 >
    </div>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { Icon, InstallBtn } from '_c'
import { formatNum } from '@/utils/utils'
const fpMap = fp.map.convert({ cap: false })

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
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
      let rankMap = [
        { type: 'nochange', color: '#BBBBBF' },
        { type: 'up', color: '#FF6666' },
        { type: 'down', color: '#52CC85' }
      ]
      return fp.flowRight(
        fpMap((item, idx) => ({
          _id: fp.get('_id', item) || '',
          rank: iconMap[idx],
          bg: fp.get('bg', item) || '',
          icon: fp.get('icon', item) || '',
          name: fp.get('name', item) || '',
          rankIcon: rankMap[fp.get('rank_status', item) || '0'],
          info: formatNum(fp.get('num', item) || 0) + '人在玩'
        }))
      )(fp.get('data', this) || [])
    }
  },
  methods: {
    showMore() {
      this.$emit('showMore', this.cData)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-list-leaderboard {
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 638px;
  background: #212126;
  border-radius: 8px;
  overflow: hidden;
  .component-list-leaderboard__first-item {
    position: relative;
    width: 100%;
    height: 166px;
    display: flex;
    flex-direction: column;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 16px;
      width: 210px;
      height: 1px;
      background: #303036;
    }
    &:hover {
      .component-list-leaderboard-first-item-content-info-content__btn {
        display: flex !important;
      }
      i {
        display: none !important;
      }
    }
    .component-list-leaderboard-first-item__uptime {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      margin-left: 16px;
      margin-top: 56px;
    }
    .component-list-leaderboard-first-item__content {
      margin-top: 26px;
      flex: 1;
      display: flex;
      .component-list-leaderboard-first-item-content__img-wrap {
        margin-left: 16px;
        margin-right: 12px;
        width: 55.9px;
        height: 55.9px;
        img {
          width: 100%;
        }
      }
      .component-list-leaderboard-first-item-content__info {
        flex: 1;
      }
      .component-list-leaderboard-first-item-content-info__content {
        display: flex;
        width: 100%;
        align-items: center;
        .component-list-leaderboard-first-item-content-info-content__info {
          margin-top: 3px;
          width: 95px;
          font-size: 12px;
          color: #75757d;
          div {
            line-height: 1;
          }
          .component-list-leaderboard-first-item-content-info-content-info__name {
            font-size: 16px;
            color: #bbbbbf;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 5px;
          }
        }
        .component-list-leaderboard-first-item-content-info-content__btn-wrap {
          flex: 1;
        }
        .component-list-leaderboard-first-item-content-info-content__btn {
          display: none;
        }
        i {
          margin-right: 16px;
          transform: scale(0.5);
          align-self: flex-end;
        }
      }
    }
  }
  .component-list-leaderboard__item {
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
      .component-list-leaderboard-item__info {
        color: #fff;
        .component-list-leaderboard-item-info_sub {
          color: #bbbbbf;
        }
      }
      .component-list-leaderboard-item__btn {
        display: flex;
      }
      .component-list-leaderboard-item__status {
        display: none;
      }
    }
    .component-list-leaderboard-item-rank {
      display: flex;
      justify-content: center;
      width: 16px;
      margin-left: 12px;
      margin-right: 8px;
      .component-list-leaderboard-item-rank__icon {
        transform: scale(0.5);
      }
    }
    .component-list-leaderboard-item__icon {
      width: 36px;
      height: 36px;
      margin-right: 12px;
    }
    .component-list-leaderboard-item__info {
      flex: 1;
      color: #bbbbbf;
      .component-list-leaderboard-item-info_sub {
        color: #75757d;
        font-size: 12px;
      }
    }
    .component-list-leaderboard-item__btn {
      margin-right: 16px;
      display: none;
    }
    .component-list-leaderboard-item__status {
      margin-right: 16px;
      transform: scale(0.5);
    }
  }
  .component-list-leaderboard__more {
    margin: 14px auto 0;
    width: 215px;
    height: 24px;
    line-height: 1.7;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid rgba(64, 64, 64, 1);
    font-size: 12px;
    color: #75757d;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #303036;
    }
  }
}
</style>
