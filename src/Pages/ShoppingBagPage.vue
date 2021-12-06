<template>
  <div class="p-4">
    <h2 class="animate__animated animate__zoomIn">Shopping Bag</h2>

<!--    order confirmation alert-->
    <b-row class="justify-content-sm-center sticky-top p-3">
      <b-col sm="6">
        <b-alert
            :show="dismissOrderCountDown"
            dismissible
            fade
            variant="secondary"
            @dismiss-count-down="orderCountDownChanged"
        >
          Order was submitted! We will send you a text when your order is ready to be picked up :)
        </b-alert>
      </b-col>
    </b-row>

<!--    item added to cart alert-->
    <b-row class="justify-content-sm-center sticky-top p-3">
      <b-col sm="6">
        <b-alert
            :show="dismissCartCountDown"
            dismissible
            fade
            variant="secondary"
            @dismiss-count-down="cartCountDownChanged"
        >
          Item added to cart!
        </b-alert>
      </b-col>
    </b-row>

<!--    items displayed in shopping bag-->
    <b-row class="py-3">
      <b-col md="9" v-if="shoppingBag.length > 0">
          <b-row>
            <bag-item
                v-for="item in shoppingBag"
                :key="item.id"
                :item="item"
                :remove-from-cart="(item) => shoppingBag.removeFromCart(item)"
                :change-quantity="(item) => shoppingBag.changeQuantity(item)"
            > </bag-item>
          </b-row>
      </b-col>
      <b-col md="9" v-else>
        <h2 class="animate__animated animate__rubberBand d-flex align-items-center">Your cart is empty!</h2>
      </b-col>

<!--        checkout form-->
        <b-col md="3" class="py-3">
            <b-form>
              <b-form-group
                  id="firstName-input-label"
                  label="First Name:"
                  label-for="firstName-input"
                  class="formLabel"
              >

                <b-form-input
                    id="firstName-input"
                    v-model="order.firstName"
                    type="text"
                    placeholder="Enter First Name"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                  id="lastName-input-label"
                  label="Last Name:"
                  label-for="lastName-input"
                  class="formLabel"
              >
                <b-form-input
                    id="lastName-input"
                    v-model="order.lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                  id="number-input-label"
                  label="Phone Number:"
                  label-for="number-input"
                  class="formLabel"
              >
                <b-form-input
                    id="number-input"
                    v-model="order.phoneNumber"
                    type="tel"
                    placeholder="Enter Phone Number"
                    required>
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-button id="checkoutButton" @click="checkOut(); showOrderAlert();">Submit Order</b-button>
        </b-col>
    </b-row>

<!--    suggested items-->
    <b-row>
      <b-col class="py-3" id="suggested-item-box" md="12" v-if="shoppingBag.length > 0">
        <h1>We think you might also like..</h1>
        <b-row>
          <b-col md="4" v-for="product in shoppingBag.suggestedItems(products)" :key="product.id">
            <store-item
                :item="product"
                :add-cart-function="(product) => shoppingBag.addToCart(product)"
                :show-cart-message-function="showCartAlert"
                class="suggested-item p-3">
            </store-item>
          </b-col>
        </b-row>
      </b-col>
    </b-row>



  </div>
</template>

<script>
import BagItem from "../components/BagItem";
import {db} from "../config/firebase";
import StoreItem from "../components/StoreItem";

export default {
  name: "ShoppingBagPage",
  components: {
    BagItem,
    StoreItem
  },
  props:{
    shoppingBag: Array,
    products: Array,
  },
  data() {
     return {
      order: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        items: this.shoppingBag,
      },
      dismissOrderSecs: 5,
      dismissOrderCountDown: 0,
      dismissCartSecs: 5,
      dismissCartCountDown: 0,
    }
  },
  methods: {
    checkOut(){
      this.order.items = JSON.parse(JSON.stringify(this.shoppingBag));
      this.order.phoneNumber = this.formatPhoneNumber(this.order.phoneNumber);
      db.collection('orders').add(this.order)
      .then(() => {
        this.shoppingBag.clearBag();
        this.order = {
          firstName: '',
          lastName: '',
          phoneNumber: '',
        }
      })
    },
    formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
      return null;
    },
    orderCountDownChanged(dismissOrderCountDown) {
      this.dismissOrderCountDown = dismissOrderCountDown
    },
    cartCountDownChanged(dismissCartCountDown) {
      this.dismissCartCountDown = dismissCartCountDown
    },
    showOrderAlert() {
      this.dismissOrderCountDown = this.dismissOrderSecs
    },
    showCartAlert() {
      this.dismissCartCountDown = this.dismissCartSecs
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  .formLabel{
    font-family: 'Comfortaa', cursive;
  }

  #suggested-item-box{
    border-color: $tertiary;
    background-color: $tertiary;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
  }

  h1{
    color: $secondary;
    text-shadow: 2px 2px black;
  }




</style>