<template>
<li class="myCart__link">
                <div class="cart">
                    <a href="single_page.html"><img src="${item.productImg}" alt=""
                            class="cart__img" height="90px" style="margin-right:10px"></a>
                    <div class="cart__discription">
                        <a href="single_page.html">
                            <div class="cart__name">${item.productName}</div>
                        </a>
                        <img src="../src/assets/imgs/stars.png" alt="">
                        <div class="cart__coast siteColor"><span class="quantity">${item.productQuantity}</span><span class="cart__coast_x">x</span> $${item.productPrice}</div>
                    </div>
                    <a class="delFromCart" ><i class="fas fa-backspace cart__action" id = "${item.productId}"></i></a>
                </div>
            </li>
</template>

<script>
export default {
  name: 'TovarCart',
}

</script>