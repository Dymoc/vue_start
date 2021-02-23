import { createStore } from 'vuex';
import goods from '@/store/goods';

export default createStore({
  state: {
    count: 10,
    producs: null,
    urlBD: 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json',
    items: [],
    loading: false,
  },
  getters: {
    // showTovar: (state, id) => (id) => {
    //   return state.items[id];
    // },
    getTovars(state) {
      return state.items;
    },
    getStatusLoading(state) {
      return state.loading;
    },
    getProduct(state) {
      console.log(state.items);
      state.items.forEach((el) => {
        console.log(el);
      });
    },
  },
  mutations: {
    SET_DATA_TOVAR(state, data) {
      state.items.push(data);
    },
    SET_LOADING_DATA(state, status) {
      state.loading = status;
    },
  },
  actions: {
    fillTovars({ commit }) {
      commit('SET_LOADING_DATA', true);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json');
      xhr.onload = () => {
        (JSON.parse(xhr.response)).forEach((el) => {
          commit('SET_DATA_TOVAR', el);
        });
      };
      xhr.send();
      commit('SET_LOADING_DATA', false);
    },
    showID(store, id) {
      return id;
    },
  },
  modules: {
    goods,
  },
});
