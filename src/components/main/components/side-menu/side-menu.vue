<template>
  <div class="simulator-side-menu">
    <div class="title">游戏中心</div>
    <Menu
      :default-active="activeRoute"
      :router="true"
      text-color="#BBBBBF"
      active-text-color="#fff"
      accordion
      ref="sideMenu"
      class="simulator-menu"
    >
      <MenuItem name="index" index="/index">
        <Icon type="index"></Icon>
        <span slot="title">首页</span>
      </MenuItem>
      <MenuItem name="gameLib" index="/gameLib">
        <Icon type="youxiku"></Icon>
        <span slot="title">游戏库</span>
      </MenuItem>
      <MenuItem name="list" index="/list">
        <Icon type="bangdan"></Icon>
        <span slot="title">榜单</span>
      </MenuItem>
      <Collapse class="simulator-side-menu-my-game" v-model="collapseValue">
        <CollapseItem name="my-game">
          <div class="simulator-side-menu-my-game-title" slot="title">
            我的游戏
          </div>
          <MenuItem
            v-for="(item, index) in gameList"
            :key="index"
            :name="index"
            :index="'/gameDetail?id=' + index"
          >
            <img :src="item.img" alt="" />
            <span slot="title">{{ item.name }}</span>
          </MenuItem>
        </CollapseItem>
      </Collapse>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuItem, Collapse, CollapseItem } from "element-ui";
import { Icon } from "_c";
export default {
  components: {
    Menu,
    MenuItem,
    Collapse,
    CollapseItem,
    Icon
  },
  data() {
    return {
      gameList: [
        { img: "static/img/icon.png", name: "英雄联盟" },
        { img: "static/img/icon2.png", name: "王者荣耀" }
      ],
      collapseValue: ["my-game"]
    };
  },
  computed: {
    activeRoute() {
      if (this.$route.name === "gameDetail") {
        return `/${this.$route.name}?id=${this.$route.query.id}`;
      } else {
        return "/" + this.$route.name;
      }
    }
  }
};
</script>

<style lang="scss">
.simulator-side-menu {
  position: relative;
  width: 144px;
  margin: 0 auto;
  .title {
    margin-left: 20px;
    margin-bottom: 16px;
    color: #919199;
    font-size: 12px;
  }
  .el-menu {
    border: none;
    background: none;
    .el-menu-item {
      display: flex;
      align-items: center;
      height: 32px;
      margin-bottom: 10px;
      i {
        margin-right: 10px;
      }
      &.is-active {
        background: linear-gradient(
          90deg,
          rgba(144, 140, 255, 1),
          rgba(115, 126, 255, 1)
        );
        border-radius: 4px;
      }
    }
  }

  @at-root .el-collapse {
    margin-top: 30px;
    border: none;
    .el-collapse-item__header {
      background: none;
      height: 36px;
      line-height: 36px;
      border: none;
      margin-bottom: 8px;

      .simulator-side-menu-my-game-title {
        margin-left: 20px;
      }
    }
    .el-collapse-item__wrap {
      background: none;
      border: none;
      img {
        margin-right: 10px;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
