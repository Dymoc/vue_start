<template>
    <div class="subscribe center">
        <div class="slider">
            <img src="../assets/imgs/dhaka.png" alt="">
            <p class="slider__content">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                 a pulvinar purus
                condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
            <h1 class="slider__name_autor siteColor">Bin Burhan</h1>
            <p class="slider__autor">Dhaka, Bd</p>
            <div class="pagination">
                <a href="#" class="button__slider"></a>
                <a href="#" class="button__slider"></a>
                <a href="#" class="button__slider"></a>
            </div>
        </div>
        <div class="subscribe__send">
            <h1>Subscribe</h1>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <form action="">
                <input type="email" placeholder="Enter Your Email" class="send__email">
                <input type="submit" class="subscribe__button" value="Subscribe">
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Subscribe',
};
</script>

<style lang="css">
.subscribe {
  width: 1600px;
  height: 438px;
  background: url(../assets/imgs/subscribe.png);
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 97px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.subscribe__send {
  height: 41px;
  margin-top: 120px;
  text-align: center;
  position: relative;
}

.subscribe__send h1 {
  font-size: 24px;
  color: #222224;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 54px;
  text-transform: uppercase;
}

.subscribe__send p {
  font-size: 14px;
  color: #222224;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 24px;
}

.subscribe__button {
  height: 46px;
  width: 104px;
  background-color: #f16d7f;
  border: 1px solid #e6e6e6;
  border-radius: 0px 23px 23px 0px;
  position: absolute;
  left: 230px;
  top: 108px;
  font-size: 14px;
  color: white;
  letter-spacing: 0.03em;
  line-height: 45px;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.subscribe__button:hover {
  background-color: #be3a4c;
}

.slider {
  border-right: 1px solid #fff;
}

.slider img {
  float: left;
  margin-top: 111px;
}

.slider__content {
  width: 425px;
  font-size: 16px;
  font-style: italic;
  color: #222224;
  letter-spacing: 0.03em;
  line-height: 26px;
  margin-left: 100px;
  padding-top: 111px;
}

.slider__name_autor {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  letter-spacing: 0.03em;
  line-height: 26px;
  margin-left: 100px;
}

.slider__autor {
  font-size: 12px;
  font-weight: 300;
  color: #222224;
  letter-spacing: 0.03em;
  line-height: 14px;
  margin-left: 100px;
}

.pagination {
  margin-left: 100px;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 150px;
}

.button__slider {
  height: 4px;
  width: 38px;
  background-color: #f0f0f0;
  margin-right: 13px;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
}

.button__slider:hover {
  height: 4px;
  width: 38px;
  background-color: #f16d7f;
  margin-right: 13px;
}

.send__email {
  position: relative;
  margin-top: 30px;
  height: 46px;
  width: 334px;
  border: 1px solid #e6e6e6;
  background-color: #e1e1e1;
  border-radius: 23px;
  font-size: 14px;
  color: #222224;
  letter-spacing: 0.03em;
  line-height: 54px;
  padding-left: 28px;
  padding-right: 90px;
  outline: none;
}
</style>
