<template>
  <div
    class="component-game-lib-txt-btn"
    :class="{ active: active }"
    @mousedown="mixin_clickEffectHandle($event, 'down')"
    @mouseup="mixin_clickEffectHandle($event, 'up')"
  >
    <slot></slot>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'

export default {
  mixins: [commonMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.component-game-lib-txt-btn {
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #919199;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &.active {
    color: #908cff;
  }
}
</style>
