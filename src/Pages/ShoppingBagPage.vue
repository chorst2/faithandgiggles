<template>
  <div class="p-4">
    <h2 class="animate__animated animate__zoomIn">Shopping Bag</h2>

    <b-row class="justify-content-sm-center sticky-top p-3">
      <b-col sm="6">
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="secondary"
            @dismiss-count-down="countDownChanged"
        >
          Order was submitted! We will send you a text when your order is ready to be picked up :)
        </b-alert>
      </b-col>
    </b-row>


    <b-row class="pt-2">
      <b-col md="9" v-if="shoppingBag.length > 0">
          <b-row  v-for="item in shoppingBag" :key="item.id">
            <bag-item
                :item="item"
                :remove-from-cart="(item) => shoppingBag.removeFromCart(item)"
                :change-quantity="(item) => shoppingBag.changeQuantity(item)"
            > </bag-item>
          </b-row>
      </b-col>
      <b-col md="9" v-else>
        <h2 class="animate__animated animate__rubberBand d-flex align-items-center">Your cart is empty!</h2>
      </b-col>

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
            <b-button id="checkoutButton" @click="checkOut(); showAlert();">Submit Order</b-button>
        </b-col>
    </b-row>

  </div>
</template>

<script>
import BagItem from "../components/BagItem";
import {db} from "../config/firebase";

export default {
  name: "ShoppingBagPage",
  components: {
    BagItem
  },
  props:{
    shoppingBag: Array,
  },
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        items: this.shoppingBag,
      },
      dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  methods: {
    checkOut(){
      this.order.items = JSON.parse(JSON.stringify(this.shoppingBag));
      db.collection('orders').add(this.order)
      .then(() => {
        this.shoppingBag.clearBag();
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  .formLabel{
    font-family: 'Comfortaa', cursive;
  }

</style>