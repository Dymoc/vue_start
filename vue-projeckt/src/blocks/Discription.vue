<template>
        <div class="discription">
            <div class="discription__nameColection">WOMEN COLLECTION</div>
            <div class="discription__shape">
                <div class="discription__shape_default"></div>
                <div class="discription__shape_default discription__shape_active"></div>
                <div class="discription__shape_default"></div>
            </div>
            <div class="discription__heading">Moschino Cheap And Chic</div>
            <div class="discription__text">Compellingly actualize fully
                 researched processes before proactive
                outsourcing. Progressively syndicate collaborative
                architectures before cutting-edge services.
                Completely visualize parallel core competencies rather than exceptional portals.
                <div class="discription__characteristics">
                    <span>MATERIAL: <span class="discription__characteristics_text">
                         COTTON</span></span>
                    <span>DESIGNER: <span class="discription__characteristics_text">
                         BINBURHAN</span></span>
                </div>
            </div>
            <div class="discription__price">$561</div>

            <form class="chooseFilter">
                <div class="chooseFilter__header">
                    <div class="chooseFilter__header_color">CHOOSE COLOR</div>
                    <div class="chooseFilter__header_size">CHOOSE SIZE</div>
                    <div class="chooseFilter__header_quntity">QUANTITY</div>
                </div>

                <select class="chooseFilter__select">
                    <option value="Red">Red</option>
                </select>
                <select class="chooseFilter__select">
                    <option value="XXL">XXL</option>
                </select>
                <input type="number" min="0" max="99" class="chooseFilter__quantity"><br>
                <button class="chooseFilter__button">Add to Cart</button>
            </form>
        </div>
</template>

<script>

export default {
  name: 'Discription',
};
</script>

<style lang="css">
.discription {
  height: 730px;
  text-align: center;
  width: 1141px;
  border: 1px solid #eaeaea;
  position: absolute;
  top: 1050px;
  left: calc(50% - 570px);
  background-color: white;
}

.discription__nameColection {
  font-size: 14px;
  font-weight: bold;
  color: #f16d7f;
  text-align: center;
  line-height: 24px;
  margin-top: 73px;
}

.discription__shape {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 15px;
}

.discription__shape_default {
  width: 42px;
  border-bottom: 1px solid #eaeaea;
}

.discription__shape_active {
  width: 63px;
  border-bottom: 3px solid #f16d7f;
}

.discription__heading {
  font-size: 18px;
  font-weight: 900;
  color: #4d4d4d;
  text-align: center;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 18px;
}

.discription__text {
  width: 625px;
  font-size: 14px;
  font-weight: 300;
  color: #5e5e5e;
  text-align: center;
  line-height: 24px;
  margin-top: 67px;
}

.discription__characteristics {
  font-size: 14px;
  font-weight: bold;
  color: #b9b9b9;
  text-align: center;
  line-height: 24px;
  margin-top: 30px;
}

.discription__characteristics:last-child {
  margin-left: 44px;
}

.discription__characteristics_text {
  color: #2f2f2f;
}

.discription__characteristics_text:first-child {
  margin-right: 44px;
}

.discription__price {
  width: 642px;
  font-size: 24px;
  font-weight: bold;
  color: #ef5b70;
  text-align: center;
  line-height: 24px;
  margin-top: 30px;
  padding-bottom: 35px;
  border-bottom: 1px solid #eaeaea;
}

.discription .chooseFilter__header {
  width: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: #2f2f2f;
  line-height: 24px;
  margin-top: 35px;
  margin-right: 295px;
}

.discription .chooseFilter__select {
  height: 35px;
  width: 144px;
  background-color: white;
  border: 1px solid #eaeaea;
  margin-right: 53px;
  margin-left: 16px;
  padding: 0px 15px 0px 15px;
  font-size: 13px;
  color: #bcbcbc;
  line-height: 24px;
  outline: none;
}

.discription .chooseFilter__quantity {
  height: 35px;
  width: 144px;
  background-color: white;
  border: 1px solid #eaeaea;
  margin-top: 14px;
  padding: 0px 15px 0px 15px;
  font-size: 13px;
  color: #bcbcbc;
  line-height: 24px;
  outline: none;
}

.discription .chooseFilter__button {
  height: 55px;
  width: 555px;
  background-color: white;
  border: 1px solid #f16d7f;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ef5b70;
  padding-left: 70px;
  background-image: url(../assets/imgs//cart_rad.png);
  background-repeat: no-repeat;
  background-position: 220px;
}

.discription .chooseFilter__color_red {
  width: 12px;
  height: 12px;
  background-color: red;
}

</style>
