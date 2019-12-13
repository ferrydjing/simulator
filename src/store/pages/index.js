/**
 * @desc 各页面的vuex
 */

import indexPage from "./indexPage";
import gameLib from "./gameLib";
import list from "./list";

export default {
  namespaced: true,
  modules: {
    indexPage,
    gameLib,
    list
  }
};
