<template>
   <div class="breadcrumb">
        <div class="breadcrumb_header siteColor">New Arrivals</div>
        <nav class="breadcrumb_nav">
            <ul class="breadcrumb_nav_ul">
                <li class="breadcrumb_nav_link">
                  <router-link class="breadcrumb_nav_a" :to="{name: 'Home'}">
                    Home
                  </router-link></li>
                <li class="breadcrumb_nav_link">
                  <router-link class="breadcrumb_nav_a" :to="{name: 'CatalogMan'}">
                    Man
                  </router-link></li>
                <li class="breadcrumb_nav_link"><a class="breadcrumb_nav_a">
                    New Arrivals</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
  name: 'Breadcrumb',
};
</script>

<style lang="css">
.breadcrumb {
  height: 148px;
  background-image: url(../assets/imgs/breadcrumb.png);
  padding-top: 65px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.breadcrumb_header {
  font-size: 24px;
  font-weight: 900;
  line-height: 20px;
  text-transform: uppercase;
  margin-left: 225px;
}

.breadcrumb_nav {
  margin-right: 260px;
}

.breadcrumb_nav_ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  list-style-type: none;
}

.breadcrumb_nav_link a {
  font-size: 14px;
  font-weight: 300;
  color: #636363;
  text-align: center;
  line-height: 20px;
  text-transform: uppercase;
  margin-right: 3px;
  margin-left: 5px;
}

.breadcrumb_nav_link:last-child a {
  color: #f16d7f;
}

.breadcrumb_nav_link:not(:last-child):after {
  content: ' / ';
}
</style>
