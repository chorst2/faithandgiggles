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