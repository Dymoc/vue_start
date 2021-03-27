<template>
    <div>
    <Breadcrumb/>
    <main class="sc center">
        <ScProductColsName/>
        <ScProduct/>
        <ScInfo/>
    </main>
    </div>
</template>

<script>

import Breadcrumb from '@/blocks/Breadcrumb.vue';
import ScProductColsName from '@/blocks/ScProductColsName.vue';
import ScInfo from '@/blocks/ScInfo.vue';
import ScProduct from '@/blocks/ScProduct.vue';

export default {
  name: 'ShopingCart',
  components: {
    Breadcrumb,
    ScProductColsName,
    ScInfo,
    ScProduct,
  },
};
</script>
