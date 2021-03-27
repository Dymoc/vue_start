<template>
                <div class="top_filter_price">
                        <div class="top_filter_price_text">pRICE</div>
                        <label for="price"></label>
                        <input id="price" type="range">
                        <div class="top_filter_price_min_max">
                            <div class="top_filter_price_min">$52</div>
                            <div class="top_filter_price_max">$400</div>
                        </div>
                    </div>
</template>

<script>
export default {
  name: 'FilterPrice',
};
</script>

<style lang="css">
.top_filter_price {
  width: 263px;
  font-size: 14px;
  font-weight: 400;
  color: #6f6e6e;
  line-height: 20px;
  text-transform: uppercase;
  margin-left: 50px;
}

.top_filter_price_text {
  margin-bottom: 20px;
  font-weight: bold;
}

.top_filter_price_min_max {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 10px;
}

.top_filter_price_min {
  margin: 0px;
}

.top_filter_price_max {
  margin: 0px;
}

#price {
  width: 263px;
}
</style>
