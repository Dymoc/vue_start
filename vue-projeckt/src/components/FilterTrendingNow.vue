<template>
 <div class="top_filter_trending_now">
     <div class="top_filter_trending_now_text">Trending now</div>
     <br>
     <a href="#" class="top_filter_trending_now_text_a">Bohemian</a>
     <a href="#" class="top_filter_trending_now_text_a">Floral</a>
     <a href="#" class="top_filter_trending_now_text_a">Lace</a>
     <a href="#" class="top_filter_trending_now_text_a">Floral</a>
     <a href="#" class="top_filter_trending_now_text_a">Lace</a>
     <a href="#" class="top_filter_trending_now_text_a">Bohemian</a>
</div>
</template>

<script>
export default {
  name: 'FilterTrendingNow',
};

</script>

<style lang="css">
.top_filter_trending_now {
  width: 250px;
  margin: 0px;
  margin-left: 0px;
  font-size: 14px;
  font-weight: 400;
  color: #6f6e6e;
  line-height: 20px;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
}

.top_filter_trending_now_text {
  font-weight: bold;
  margin-bottom: 26px;
  width: 250px;
}

.top_filter_trending_now_text_a {
  font-size: 14px;
  color: #6f6e6e;
  line-height: 26px;
  padding-right: 16px;
  padding-left: 15px;
  border-right: 2px solid #dfdfdf;
  text-transform: none;
}

.top_filter_trending_now_text_a:last-child, .top_filter_trending_now_text_a:nth-child(5) {
  border-right: none;
}

.top_filter_trending_now_text_a:hover {
  color: #f16d7f;
}
</style>
