<template>
  <div>
    <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    <Header/>
    <Menu/>
    <router-view />
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/blocks/Header.vue';
import Menu from '@/blocks/Menu.vue';
import Subscribe from '@/blocks/Subscribe.vue';
import Footer from '@/blocks/Footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Subscribe,
    Footer,
  },
  // computed: {
  //   ...mapGetters([]),
  // },
  methods: {
    ...mapActions(['fillTovar']),
  },
  beforeMount() {
    console.log('yes');
    this.fillTovar();
    console.log(this.$store.state.items);
    // console.log(this.showTovar());
    // this.data.items.map(this.$store.state.items);
  },
};
</script>

<style lang="css">
@import "~font-awesome/css/font-awesome.min.css";

#app {
  font-family: 'Lato', sans-serif;
  width: 1600px;
}

* {
  margin: 0 auto;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
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
