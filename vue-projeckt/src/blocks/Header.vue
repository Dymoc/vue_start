<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <Logo></Logo>
        <SearchForm></SearchForm>
      </div>
      <div class="header__right">
        <ShoppingCart></ShoppingCart>
        <ButtonAccount></ButtonAccount>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import SearchForm from '@/components/SearchForm.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import ButtonAccount from '@/components/ButtonAccount.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    SearchForm,
    ShoppingCart,
    ButtonAccount,
  },
};
</script>

<style lang="css">
.header {
  height: 100px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__left,
.header__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0px;
}

.header__right {
  position: relative;
}

.header__right_img{
  position: relative;
}

.header__right_img:hover .myCart__list {
  display: block;
}

</style>
