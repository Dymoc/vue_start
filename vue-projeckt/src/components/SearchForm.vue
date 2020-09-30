<template>
   <form class="header__form" action="">
          <details class="header__browse">
            <summary class="header__browse_summary">Browse</summary>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li><a href="#" class="drop__link">Dresses</a></li>
                  <li><a href="#" class="drop__link">Tops</a></li>
                  <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                  <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="#" class="drop__link">Blazers</a></li>
                  <li><a href="#" class="drop__link">Denim</a></li>
                  <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                  <li><a href="#" class="drop__link">Accessories</a></li>
                  <h3 class="drop__h3">Women</h3>
                  <ul class="drop__ul">
                    <li><a href="#" class="drop__link">Dresses</a></li>
                    <li><a href="#" class="drop__link">Tops</a></li>
                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                  </ul>
                </ul>
              </div>
            </div>
          </details>
          <input type="text" placeholder="Search for Item..." />
          <button class="header__button">
            <img src="../assets/imgs/search.png" alt="search" />
          </button>
        </form>
</template>

<script>
export default {
  name: 'SearchForm',
};
</script>

<style lang="css">
.header__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 37px;
}

.header__browse {
  font-size: 14px;
  font-weight: 300;
  color: #222222;
  background-color: whitesmoke;
  letter-spacing: 0.03em;
  line-height: 32px;
  border: 1px solid #cac7c7;
  border-radius: 0px 3px 3px 0px;
  padding: 0px 10px 0px 14px;
  position: relative;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.header__browse:hover {
  background-color: #cac7c7;
}

.header__browse_summary {
  outline: none;
}

.header__browse_summary::-webkit-details-marker {
  display: none;
}

.header__browse[open] .drop {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 100;
  top: 24px;
}

.header__browse_summary::after {
  content: "\25BC";
  color: #838383;
  padding-left: 0.3em;
  font-size: 12px;
  letter-spacing: 0.03em;
  line-height: 32px;
}

.header__form input {
  height: 32px;
  line-height: 30px;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 0px 3px 3px 0px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 300;
  color: #a4a4a4;
  text-align: left;
  letter-spacing: 0.03em;
  line-height: 32px;
  outline: none;
}

</style>
