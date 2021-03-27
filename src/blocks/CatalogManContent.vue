<template>
   <div class="central_content center">
        <aside>
           <Category/>
           <Brand/>
           <Designer/>
        </aside>
        <content class="content">
            <div class="filter">
              <TopFilter/>
              <Sort/>
            </div>
            <div class="catalog__product">
                <div class="product_tovar_cart" id="catalogOfCatalog">

                </div>
            </div>
        </content>
    </div>
</template>

<script>
import Category from '@/blocks/Category.vue';
import Brand from '@/blocks/Brand.vue';
import Designer from '@/blocks/Designer.vue';
import TopFilter from '@/blocks/TopFilter.vue';
import Sort from '@/blocks/Sort.vue';

export default {
  name: 'CatalogManContent',
  components: {
    Category,
    Brand,
    Designer,
    TopFilter,
    Sort,
  },
};
</script>

<style lang="css">
.central_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.category[open] > .category_head {
  color: #f16d7f;
}

.category[open] > .category_head::after {
  content: '\25B2';
}

.category_head {
  height: 37px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  line-height: 35px;
  color: #6f6e6e;
  text-transform: uppercase;
  padding-left: 11px;
  border-left: 5px solid #f16d7f;
  outline: none;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.category_head::-webkit-details-marker {
  display: none;
}

.category_head::after {
  content: '\25BC';
}

.link {
  list-style-type: none;
  margin-top: 12px;
  margin-left: 15px;
}

.link_category {
  font-size: 14px;
  color: #6f6e6e;
  line-height: 33px;
}

.list_category:last-child {
  margin-bottom: 20px;
}

.filter {
  width: 855px;
  margin-top: 71px;
}

.catalog__product {
  width: 890px;
}
</style>
