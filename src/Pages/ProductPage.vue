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
            class="store-item-card"
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
        //sets the products to be all the products in the store
        let products = this.products;
        //if there are quiz results passed to the page then it displays the products in the filter
        if(this.selectedTags){
          console.log("filter called");
          products = this.products.quizFilter(this.selectedTags);
          console.log(products);
        }
        return {
          //assigns the store that is being looped through in this page to either all the products are the filtered products
          store: products,

          //props for displaying the alert
          dismissSecs: 3,
          dismissCountDown: 0,

    }
  },
  methods: {
    //methods for displaying the alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
  props: {
    //refers to the shopping bag model to access its methods
    shoppingBag: Array,
    //refers to the tags that were passed to this component for displaying quiz results
    selectedTags: Object,
    //refers to the store collection model that has access to the array and methods
    products: Array,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.store-item-card{
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}

</style>