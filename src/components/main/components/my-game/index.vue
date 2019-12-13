<template>
  <div class="simulator-my-game">
    <Collapse>
      <CollapseItem title="我的游戏">
        <div
          class="simulator-my-game-item"
          v-for="(item, index) in gameList"
          :key="index"
        >
          <div class="simulator-my-game-item__avatar-warp">
            <img :src="item.img" alt="" />
          </div>
          <div>{{ item.name }}</div>
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "element-ui";
export default {
  components: {
    Collapse,
    CollapseItem
  },
  data() {
    return {
      gameList: [
        { img: "/static/img/icon.png", name: "英雄联盟" },
        { img: "/static/img/icon2.png", name: "王者荣耀" }
      ]
    };
  },
  methods: {
    itemClick() {
      console.log(111);
    }
  }
};
</script>

<style lang="scss">
.simulator-my-game {
  margin: 51px 24px 0 40px;
  @at-root .el-collapse {
    border: none;
    .el-collapse-item__header {
      background: none;
      height: 36px;
      line-height: 36px;
      border: none;
    }
    .el-collapse-item__wrap {
      background: none;
      border: none;
      .simulator-my-game-item {
        display: flex;
        align-items: center;
        font-size: 14px;
        height: 32px;
        line-height: 1;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &:first-child {
          margin-top: 4px;
        }
        .simulator-my-game-item__avatar-warp {
          margin-right: 10px;
          width: 16px;
          height: 16px;
          img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
