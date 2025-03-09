import { createStore } from "vuex";

export const store = createStore({
  state: () => ({
    userDetail: {},
  }),
  mutations: {
    setUserDetail(state, val) {
      state.userDetail = val;
    },
  },
  actions: {
    updateUserDetail({ commit }, value) {
      commit("setUserDetail", value);
      localStorage.setItem("userDetail", JSON.stringify(value));
    },
  },
  getters: {},
});
