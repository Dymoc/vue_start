<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <Logo></Logo>
        <SearchForm></SearchForm>
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'Start',
  components: {
    Logo,
    SearchForm,
  },
};
</script>
