<template>
<b-col md="6">
  <b-card>
    <b-card-img :src="getImgUrl(item.image)"></b-card-img>
    <b-card-body>
      <p><b>{{item.name}}<br>${{item.price}}</b></p>
    </b-card-body>
    <b-card-footer>
      <div class="d-flex">
        <div class="d-flex"><p class="pt-2">Quantity: </p></div>
        <div class="d-flex"><b-form-input v-model="item.quantity" id="quantity-input" type="number" number></b-form-input></div>
        <div class="d-flex"><b-button @click="removeFromCart(item)"><b-icon icon="trash-fill"></b-icon></b-button></div>
      </div>
    </b-card-footer>
  </b-card>

</b-col>
</template>

<script>
export default {
  name: "BagItem",
  props: {
    // refers to the product that will be displayed in the bagItem component
    item: Object,
    // refers to the method that will remove the item from the cart
    removeFromCart: Function,
    // refers to the method that will change the quantity of the item in the cart
    changeQuantity: Function,
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

.card-img{
  max-width: 150px;
}

.card{
  max-width: 300px;
}
p{
  font-family: 'Comfortaa', cursive;
}


</style>