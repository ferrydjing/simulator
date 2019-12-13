<template>
  <div
    class="component-btn-normal"
    :class="{ active: active }"
    @mousedown="
      mixin_clickEffectHandle(
        $event,
        'down',
        'linear-gradient(90deg,rgba(144,140,255,1),rgba(115,126,255,1))'
      )
    "
    @mouseup="mixin_clickEffectHandle($event, 'up')"
  >
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'

export default {
  name: 'ButtonNormal',

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
.component-btn-normal {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 32px;
  border-radius: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  &:hover {
    background: #45454d;
    border: none;
  }
  &.active {
    background: linear-gradient(
      90deg,
      rgba(144, 140, 255, 1),
      rgba(115, 126, 255, 1)
    );
  }
}
</style>
