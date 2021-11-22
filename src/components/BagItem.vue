<template>
<div>
  <b-card :src="getImgUrl(item.image)" img-alt="product image" img-left class="mb-3">
    <b-card-body>
      <h4><b>{{item.name}}<br>${{item.price}}</b></h4>
    </b-card-body>
    <b-card-footer>
<!--       have a v-model in the v-form-input to grab the quantity? -->
      <b-form-input
          id="quantity-input"
          type="number"
          default="1"
          >
      </b-form-input>
      <b-button @click="removeFromCart(item)"><b-icon icon="trash-fill"></b-icon></b-button>
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

</style>