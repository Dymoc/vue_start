<template>
                    <div class="top_filter_size">
                        <div class="top_filter_size_header">Size</div>

                        <input type="checkbox" id="XXS" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="XXS">XXS</label>

                        <input type="checkbox" id="XS" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="XS">XS</label>

                        <input type="checkbox" id="S" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="S">S</label>

                        <input type="checkbox" id="M" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="M">M</label>

                        <input type="checkbox" id="L" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="L">L</label>

                        <input type="checkbox" id="XL" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="XL">XL</label>

                        <input type="checkbox" id="XXL" class="top_filter_size_chekbox">
                        <label class="top_filter_size_text" for="XXL">XXL</label>
                    </div>
</template>

<script>
export default {
  name: 'FilterSize',
};
</script>

<style lang="css">
.top_filter_size {
  min-width: 235px;
  max-width: 246px;
  font-size: 14px;
  font-weight: 400;
  color: #6f6e6e;
  line-height: 20px;
  text-transform: uppercase;
  margin-left: 50px;
}

.top_filter_size_header {
  font-weight: bold;
  margin-bottom: 26px;
}

.top_filter_size_chekbox {
  margin-right: 10px;
}

.top_filter_size_text {
  padding-right: 20px;
}

</style>
