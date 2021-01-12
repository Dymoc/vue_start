<template>
     <div class="sort_filter_1">
          <div class="sort_by">Sort By</div>
          <select class="sort_name">
               <option>Name 1</option>
               <option>Name 2</option>
          </select>
     </div>
</template>

<script>

export default {
  name: 'SortFilter1',
};
</script>

<style lang="css">
.sort_filter_1 {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 30px;
}
.sort_by {
  border: 1 solid #6f6e6e;
  background-color: #fff;
  width: 60px;
  text-align: center;
  padding-top: 2px;
}
.sort_name {
  font-size: 14px;
  color: #6f6e6e;
  line-height: 26px;
  border: none;
  margin-left: 4px;
}
</style>
