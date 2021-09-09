<template>
  <section class="cart_section mini_cart_wrapper">
    <div class="mini_cart">
      <div class="cart_close">
        <div class="cart_text">
          <h3>Your cart</h3>
        </div>
        <div class="mini_cart_close">
          <a  id="cart_close" style="cursor:pointer"
            ><i class="far fa-times-circle" style="color:#54A445"></i
          ></a>
        </div>
      </div>
      <div class="cart_gallery">
       
      </div>

      <div class="mini_cart_table">
        <div class="cart_table_border">
          <div class="cart_total">
            <span>Total Item(s):</span>
            <span class="price"></span>
          </div>
          <div class="cart_total">
            <span>Total Price:</span>
            <span class="price"></span>
          </div>
        </div>
      </div>
      <div class="mini_cart_footer">
        <div class="cart_button">
          <router-link 
            ><i class="fa fa-shopping-cart"></i> View cart</router-link
          >
        </div>
        <div  class="cart_button">
          <a  
            ><i class="fa fa-sign-in"></i> Checkout</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>