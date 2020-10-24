<template>
  <div>
    <Header/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/start">Start</router-link>
    </div> -->
    <Catalog/>
    {{tovars[0].productName}}
    {{tovars[1].productName}}
    <router-view />
  </div>
</template>

<script>
import Header from '@/blocks/Header.vue';
import Catalog from '@/components/Catalog.vue';
// const url = 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json';

// const axios = await axois.get(url);

export default {
  name: 'App',
  components: {
    Header,
    Catalog,
  },
  props: {
  },
  data() {
    return {
      tovars: [
        {
          productName: 'MANGO PEOPLE T-SHIRT',
          productPrice: 52,
          productImg: 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/featuredItem1.jpg',
          productId: 'prod_0',
        },
        {
          productName: 'BANANA PEOPLE T-SHIRT',
          productPrice: 52,
          productImg: 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/featuredItem1.jpg',
          productId: 'prod_1',
        },
      ],
    };
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.center {
  padding: 0 calc(50% - 570px);
}
a {
  text-decoration: none;
}

a:hover {
  color: #f16d7f;
}

.button {
  font-size: 15px;
  color: white;
  background-color: #f16d7f;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 25px;
  padding: 8px 19px 8px 17px;
  border: none;
  outline: none;
  position: relative;
  border-radius: 3px;
  border: 1px solid #fff;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.button:hover {
  -webkit-transform: scale3d(1.3);
  transform: scale3d(1.3);
  border: 1px solid black;
}
</style>
