<template>
<nav class="menu center">
        <ul class="menu__ul">
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Home</a>
            <DropMenu/></li>
            <li class="menu__ul_list"><a href="CatalogMan" class="menu__ul_link">Man</a>
            <DropMenu/>
            </li>
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Women</a>
            <DropMenu/></li>
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Kids</a>
            <DropMenuLast/></li>
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Accoseriese</a>
            <DropMenuLast/></li>
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Featured</a>
            <DropMenuLast/></li>
            <li class="menu__ul_list"><a href="#" class="menu__ul_link">Hot&nbsp;Deals</a></li>
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
