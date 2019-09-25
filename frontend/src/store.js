import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logined: localStorage.getItem("vue_token") ? true : false,
    error: false
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    logined(state, payload) {
      state.logined = true;
    },
    // eslint-disable-next-line no-unused-vars
    error(state, payload) {
      // main.jsに記載されたGraphQLのグローバルエラーをハンドリングする
      router.push("/login");
    }
  }
});
