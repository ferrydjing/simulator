import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import store from "@/store";

import { LoadingBar } from "_c";

Vue.use(Router);
const router = new Router({
  routes
});
router.beforeEach((to, from, next) => {
  LoadingBar.start();
  store.dispatch("basic/HandleSetHistory", [to.fullPath]);
  next();
});

router.afterEach(to => {
  LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
