<template>
  <div>
    <h2>Shopping Bag</h2>

    <b-col md="9" v-if="shoppingBag.length > 0">
        <b-row  v-for="item in shoppingBag" :key="item.id" md="3">
          <bag-item
              :item="item"
              :remove-from-cart="(item) => shoppingBag.removeFromCart(item)"
              :change-quantity="(item) => shoppingBag.changeQuantity(item)"
          > </bag-item>
        </b-row>
    </b-col>
    <b-col md="9" v-else>
      <h2>Your cart is empty!</h2>
    </b-col>

    <div class="d-flex flex-column-reverse">
      <b-col md="3" class="py-3">
          <b-form>
            <b-form-group
                id="firstName-input-label"
                label="First Name:"
                label-for="firstName-input"
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
            >
              <b-form-input
                  id="number-input"
                  v-model="order.phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  required>
              </b-form-input>
            </b-form-group>
          </b-form>
          <b-button id="checkoutButton" @click="shoppingBag.checkOutBag()">Submit Order</b-button>
      </b-col>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import ShoppingBag from "../models/ShoppingBag";
import BagItem from "../components/BagItem";

export default {
  name: "ShoppingBagPage",
  components: {
    Footer,
    BagItem
  },
  props:{
    // bag:{
    //   type: Array,
    //   required: true,
    // }
  },
  data() {
    return {
      shoppingBag: new ShoppingBag(),
      order: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      },
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>