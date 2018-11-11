<template>
  <div>
    <h1>购物车案例</h1>
    <hr />
    <h2>产品列表</h2>
    <product></product>
    <h2>购物车</h2>
    <cart></cart>
  </div>
</template>
<script>
import product from "./components/products"
import cart from "./components/cart"
export default {
  components: {
    product,
    cart
  }
}
</script>


