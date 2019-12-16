<template>
  <div class="c-crumbs-list">
    <div
      class="c-crumbs-list__item"
      v-for="(item, index) in cData"
      :key="index"
      @click="itemClick(item, index)"
    >
      {{ item.txt }}
    </div>
  </div>
</template>

<script>
import fp from 'lodash/fp'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    cData() {
      return fp.get('data', this) || []
    }
  },
  methods: {
    itemClick(item, index) {
      if (index !== this.cData.length - 1) {
        this.$emit('crumbsClick', item, index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-crumbs-list {
  display: flex;
  font-size: 12px;
  color: #bbbbbf;
  align-items: center;
  .c-crumbs-list__item {
    &:last-child {
      cursor: not-allowed;
    }
    &:not(:last-child) {
      cursor: pointer;
      &::after {
        position: relative;
        content: '>';
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
