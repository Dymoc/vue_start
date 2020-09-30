<template>
  <details class="button">
    <summary class="myAccount">My account</summary>
    <ul class="myAccount__list">
      <li class="myAccount__link">
        <a href="#"> Регистрация</a>
      </li>
      <li class="myAccount__link">
        <a href="#"> Регистрация</a>
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  name: 'ButtonAccount',
};
</script>

<style lang="css">
.button {
  font-size: 15px;
  color: white;
  background-color: #f16d7f;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 25px;
  padding: 8px 19px 8px 17px;
  border: none;
  outline: none;
  position: relative;
  border-radius: 3px;
  border: 1px solid #fff;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.button:hover {
  -webkit-transform: scale3d(1.3);
          transform: scale3d(1.3);
  border: 1px solid black;
}

.button i {
  margin-left: 9px;
}

.button[open] > .myAccount::after {
  content: '\25BC';
}

.myAccount {
  display: block;
  outline: none;
}

.myAccount::-webkit-details-marker {
  display: none;
}

.myAccount::after {
  content: '\25B6';
  padding-right: 0.2em;
  margin-left: 7px;
}

.myAccount__list {
  display: block;
  width: 262px;
  list-style-type: none;
  position: absolute;
  background-color: white;
  top: 50px;
}

.myAccount__list:last-child {
  border: none;
}

.myAccount__link {
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  margin-top: 8px;
}

</style>
