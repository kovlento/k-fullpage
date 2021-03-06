//入口
import fullpage from "./fullpage.vue";

export default {
  install: function(Vue) {
    Vue.component("k-fullpage", fullpage);
  }
};
// 需要自行处理浏览器引入和模块引入的问题
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("k-fullpage", fullpage);
}