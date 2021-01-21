<template>
     <div class="top_filter">
          <FilterTrendingNow/>
          <FilterSize/>
          <FilterPrice/>
     </div>
</template>

<script>
import FilterTrendingNow from '@/components/FilterTrendingNow.vue';
import FilterSize from '@/components/FilterSize.vue';
import FilterPrice from '@/components/FilterPrice.vue';

export default {
  name: 'TopFilter',
  components: {
    FilterTrendingNow,
    FilterSize,
    FilterPrice,
  },
};
</script>

<style lang="css">
.top_filter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
