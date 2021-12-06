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
    item: Object,
    addCartFunction: Function,
    showCartMessageFunction: Function,

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