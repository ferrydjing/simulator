<template>
  <div class="component-btn-tab">
    <ButtonNormal
      class="component-btn-tab__item"
      :active="cActive === index"
      v-for="(item, index) in cData"
      :key="index"
    >
      {{ item.txt }}
    </ButtonNormal>
  </div>
</template>

<script>
import fp from 'lodash/fp'
import { ButtonNormal } from '_c'

export default {
  name: 'BtnTab',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  components: {
    ButtonNormal
  },
  computed: {
    cData() {
      return fp.get('data', this) || []
    },
    cActive() {
      return fp.get('active', this) || 0
    }
  }
}
</script>

<style lang="scss">
.component-btn-tab {
  display: flex;
  .component-btn-tab__item {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
