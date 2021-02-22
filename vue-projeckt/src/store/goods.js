export default {
  state: {
    goodsItems: [],
  },
  getters: {
    getGood(state) {
      return state.goodsItem;
    },
  },
  mutations: {
    ADD_DATA_GOOD(state, data) {
      state.goodsItems.push(data);
    },
  },
  actions: {
    addGood({ commit }, id) {
      // console.log(id);
      commit('ADD_DATA_GOOD', id);
      // console.log(this.state.goodsItem);
    },
  },
};
