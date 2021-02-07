import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 10,
    producs: null,
    urlBD: 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json',
    items: [],
  },
  getters: {
    showTovar(state) {
      return state.items;
    },
    getProduct(state) {
      console.log(state.items);
      state.items.forEach((el) => {
        console.log(el);
      });
      // console.log(this.$store.state.items);
    },
    showID(store, id = '123') {
      console.log(store.items, id);
      console.log(id);
    },
  },
  mutations: {
    SET_DATA_TOVAR(state, data) {
      state.items.push(data);
    },
  },
  actions: {
    fillTovar({ commit }) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json');
      xhr.onload = () => {
        (JSON.parse(xhr.response)).forEach((el) => {
          commit('SET_DATA_TOVAR', el);
        });
      };
      xhr.send();
    },
  },
  modules: {

  },
  methods: {
  },
});
