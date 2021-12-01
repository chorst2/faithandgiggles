<template>
  <div>
    <div v-if="authUser.uid">
      <h2 class="animate__animated animate__zoomIn">Orders</h2>
      <div v-for="eachOrder in orders" :key="eachOrder.id">
        <OrderDetails :order="eachOrder"></OrderDetails>
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
      orders: [],
    }
  },
  components:{
    OrderDetails,
  },
  firestore: {
    // bind as an array by default
    //this is telling the orders: [] to fill with the orders from the database
    orders: db.collection('orders'),

  },
  props: {
    authUser: Object,
  },

}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>