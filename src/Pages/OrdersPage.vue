<template>
  <div>
    <div v-if="authUser.uid">
      <h2 class="pt-3 animate__animated animate__zoomIn">Orders</h2>
      <div v-for="eachOrder in orders" :key="eachOrder.id">
        <OrderDetails class="p-2" :order="eachOrder"></OrderDetails>
      </div>
    </div>

    <div v-else>
      <h1>Please Log In</h1>
      <b-button @click="$router.push('log-in')">Log In</b-button>
    </div>

  </div>
</template>

<script>
import {db} from "../config/firebase.js";
import OrderDetails from "../components/OrderDetails";

export default {
  name: "OrdersPage",
  data() {
    return {
      //array for the orders in firebase
      orders: [],
    }
  },
  components:{
    OrderDetails,
  },
  firestore: {
    //fills the orders array with the orders from the database/firebase
    orders: db.collection('orders'),

  },
  props: {
    // refers to the determining factor on if user is authenticated to be viewing orders or not
    authUser: Object,
  },

}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>