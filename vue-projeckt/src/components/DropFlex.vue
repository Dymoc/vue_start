<template>
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropFlex',
};
</script>

<style lang="css">
.drop__flex {
  width: 234px;
  margin-right: 46px;
}

.drop__flex:last-of-type {
  margin-right: 0;
}

.drop__h3 {
  font-size: 14px;
  color: #232323;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 8px;
}

.drop__ul {
  list-style-type: none;
}

.drop__link {
  font-size: 14px;
  color: #646464;
  letter-spacing: 0.03em;
  line-height: 28px;
}

.drop__link:hover {
  color: #f16d7f;
}
</style>
