<template>
  <div class="c-card-list">
    <GameCard
      class="c-card-list__item"
      v-for="(item, index) in cData"
      :key="index"
      :data="item"
      :showRank="showRank"
    ></GameCard>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { GameCard } from '_c'
const fpMap = fp.map.convert({ cap: false })

export default {
  name: 'CardList',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showRank: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GameCard
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
      let numMap = [
        'num0',
        'num1',
        'num2',
        'num3',
        'num4',
        'num5',
        'num6',
        'num7',
        'num8',
        'num9'
      ]
      return fp.flowRight(
        fpMap((item, idx) => {
          let numArr = []
          ;(idx + '').split('').forEach(num => {
            numArr.push(numMap[+num])
          })
          return {
            _id: fp.get('_id', item) || '',
            rank: iconMap[idx],
            numArr,
            name: fp.get('name', item) || '',
            type: fp.get('type', item) || '',
            icon: fp.get('icon', item) || ''
          }
        })
      )(fp.get('data', this) || [])
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card-list {
  display: flex;
  flex-wrap: wrap;
  .c-card-list__item {
    margin-bottom: 16px;
    &:not(:nth-child(4n)) {
      margin-right: 16px;
    }
  }
}
</style>
