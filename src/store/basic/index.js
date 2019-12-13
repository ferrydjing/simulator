/**
 * @desc 保存全局信息
 * 用户名、权限等等
 */

export default {
  namespaced: true,
  state: {
    history: []
  },
  getters: {},
  mutations: {
    SET_PAGE_HISTORY(state, value) {
      if (typeof value === "object") {
        state.history = value;
      } else {
        state.history.push(value);
      }
    }
  },
  actions: {
    HandleSetHistory({ commit }, data) {
      return commit("SET_PAGE_HISTORY", data);
    }
  }
};
