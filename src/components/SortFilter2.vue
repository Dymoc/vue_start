<template>
                        <div class="sort_filter_2">
                            <div class="sort_show">Show</div>
                            <select class="sort_namber">
                                <option>09</option>
                                <option>08</option>
                            </select>
                        </div>
</template>

<script>

export default {
  name: 'SortFilter1',
};
</script>

<style lang="css">

.sort_filter_2 {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 30px;
}

.sort_show {
  border: 1 solid #6f6e6e;
  background-color: #fff;
  width: 60px;
  text-align: center;
  margin-left: 10px;
  padding-top: 2px;
}

.sort_namber {
  font-size: 14px;
  color: #6f6e6e;
  line-height: 26px;
  border: none;
  margin-left: 4px;
}
</style>
