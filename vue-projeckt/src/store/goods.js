export default {
  state: {
    goodsItems: [],
    totalCoast: null,
  },
  getters: {
    getGood(state) {
      return state.goodsItem;
    },
  },
  mutations: {
    ADD_DATA_GOOD(state, data) {
      if (state.goodsItems.includes(data)) {
        const item = state.goodsItems.find((el) => el.productId === data.productId);
        item.productQuantity += 1;
        item.allPrice = item.productPrice * item.productQuantity;
      } else {
        state.goodsItems.push(data);
        const item = state.goodsItems.find((el) => el.productId === data.productId);
        item.productQuantity = 1;
        item.allPrice = item.productPrice;
      }
    },
    DEL_DATA_GOOD(state, data) {
      const item = state.goodsItems.find((el) => el.productId === data.productId);
      if (item.productQuantity > 1) {
        item.productQuantity -= 1;
        item.allPrice = item.productPrice * item.productQuantity;
      } else {
        state.goodsItems.splice(state.goodsItems.indexOf(item), 1);
      }
    },
    SET_UP_TOTAL_COAST(state, data) {
      state.totalCoast += data.productPrice;
    },
    SET_DOWN_TOTAL_COAST(state, data) {
      state.totalCoast -= data.productPrice;
    },
    CHANGE_QUANTITY(state, item, data) {
      const product = state.goodsItems.find((el) => el.productId === item.productId);
      product.productQuantity = data;
    },
  },
  actions: {
    addGood({ commit }, item) {
      commit('ADD_DATA_GOOD', item);
      commit('SET_UP_TOTAL_COAST', item);
    },
    delGood({ commit }, item) {
      commit('DEL_DATA_GOOD', item);
      commit('SET_DOWN_TOTAL_COAST', item);
    },
    changeQuantity({ commit }, item, data) {
      commit('CHANGE_QUANTITY', item, data);
    },
  },
};
