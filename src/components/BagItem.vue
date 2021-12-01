<template>
<div>

  <b-card>
    <b-card-img height="250px" width="150px" :src="getImgUrl(item.image)"></b-card-img>
    <b-card-body>
      <p><b>{{item.name}}<br>${{item.price}}</b></p>
    </b-card-body>
    <b-card-footer>
      <b-row>
        <b-col cols="5"><p>Quantity: </p></b-col>
        <b-col cols="5"><b-form-input v-model="item.quantity" id="quantity-input" type="number" number></b-form-input></b-col>
        <b-col cols="2"><b-button @click="removeFromCart(item)"><b-icon icon="trash-fill"></b-icon></b-button></b-col>
      </b-row>
    </b-card-footer>
  </b-card>

</div>
</template>

<script>
export default {
  name: "BagItem",
  props: {
    item: Object,
    removeFromCart: Function,
    changeQuantity: Function,
  },
  methods: {
    getImgUrl(image) {
      let images = require.context('../assets/images/', false, /\.jpg$/)
      return images('./' + image)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.card-img {
  width: 50%;
}
p{
  font-family: 'Comfortaa', cursive;
}


</style>