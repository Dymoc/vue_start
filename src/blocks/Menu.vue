<template>
<nav class="menu center">
        <ul class="menu__ul">
            <li class="menu__ul_list">
              <router-link :to="{name: 'Home'}" class="menu__ul_link">
                Home
              </router-link>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Man
              </router-link>
              <DropMenu/>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Women
              </router-link>
              <DropMenu/>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Kids
              </router-link>
              <DropMenuLast/>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Accoseriese
              </router-link>
              <DropMenuLast/>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Featured
              </router-link>
              <DropMenuLast/>
            </li>
            <li class="menu__ul_list">
              <router-link :to="{name: 'CatalogMan'}" class="menu__ul_link">
                Hot&nbsp;Deals
              </router-link>
              <DropMenuLast/>
              </li>
        </ul>
    </nav>
</template>

<script>
import DropMenu from '@/blocks/DropMenu.vue';
import DropMenuLast from '@/blocks/DropMenuLast.vue';

export default {
  name: 'Menu',
  components: {
    DropMenu,
    DropMenuLast,
  },
};
</script>

<style lang="css">

.menu {
  background-color: #ffffff;
}
.menu__ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 680px;
  position: relative;
}
.menu__ul_link {
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  padding: 19px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  line-height: 19px;
  text-transform: uppercase;
  border-bottom: 3px solid #fff;
}
.menu__ul_link:hover {
  border-bottom: 3px solid #f16d7f;
}
.menu__ul_list:hover .drop {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
