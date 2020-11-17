<template>
  <div>
    <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    <Header/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/start">Start</router-link>
    </div> -->
    <Catalog/>
    <Menu/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/blocks/Header.vue';
import Menu from '@/blocks/Menu.vue';
import Catalog from '@/components/Catalog.vue';
// const url = 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json';

// const axios = await axois.get(url);

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Catalog,
  },
  props: {
    // store,
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

* {
  margin: 0 auto;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  width: 1600px;
}

#nav {
  padding: 30px;
}

.siteColor {
  font-weight: 900;
  color: #f16d7f;
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
