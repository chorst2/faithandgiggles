<template>
  <div>
    <h2 v-if="selectedTags" class="pt-3 animate__animated animate__zoomIn">Your Custom Results</h2>
    <h2 v-else class="pt-3 animate__animated animate__zoomIn">Products</h2>



    <b-row class="justify-content-sm-center sticky-top p-3">
      <b-col sm="6">
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="secondary"
            @dismiss-count-down="countDownChanged"
        >
          Item added to cart!
        </b-alert>
      </b-col>
    </b-row>




    <b-row class="p-3">
      <b-col  v-for="item in store" :key="item.id" md="3" sm="6">
        <StoreItem
            :item="item"
            :add-cart-function="(item) => shoppingBag.addToCart(item)"
            :show-cart-message-function="showAlert"
        > </StoreItem>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import StoreItem from "../components/StoreItem";


export default {
  name: "ProductPage",
  components: {
    StoreItem,
  },
  data() {

        let products = this.products;
        if(this.selectedTags){
          console.log("filter called");
          products = this.products.quizFilter(this.selectedTags);
          console.log(products);
        }
        return {

          store: products,

          dismissSecs: 3,

          dismissCountDown: 0,

    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
  props: {
    shoppingBag: Array,
    selectedTags: Object,
    products: Array,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>