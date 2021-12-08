<template>
  <div>
    <b-card>
      <b-card-img :src="getImgUrl(item.image)"></b-card-img>
      <b-card-body>
        <h3><b>${{item.price}}<br>{{item.name}}</b></h3>
      </b-card-body>
      <b-card-footer>
        <b-button @click="addCartFunction(item); showCartMessageFunction()"><b-icon icon="cart-plus-fill"></b-icon></b-button>
      </b-card-footer>
    </b-card>


  </div>
</template>

<script>
export default {
  name: "StoreItem",
  props: {
    // refers to the product that will be displayed in the component
    item: Object,
    // refers to the method that will add the product to the cart
    addCartFunction: Function,
    // refers to the method that will display an alert when an item is added to the cart
    showCartMessageFunction: Function,

  },
  methods: {
    //this makes the images load when the page loads so they appear on screen
    getImgUrl(image) {
      let images = require.context('../assets/images/', false, /\.jpg$/)
      return images('./' + image)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>