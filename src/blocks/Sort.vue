<template>
                <div class="sort">
                    <div class="sort_filter">
                        <SortFilter1/>
                        <SortFilter2/>

                    </div>
                </div>
</template>

<script>
import SortFilter1 from '@/components/SortFilter1.vue';
import SortFilter2 from '@/components/SortFilter2.vue';

export default {
  name: 'Sort',
  components: {
    SortFilter1,
    SortFilter2,
  },
};
</script>

<style lang="css">
.sort {
  height: 50px;
  background-color: #f3f3f3;
  margin-top: 43px;
  font-size: 14px;
  color: #6f6e6e;
  line-height: 26px;
}

.sort_filter {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
