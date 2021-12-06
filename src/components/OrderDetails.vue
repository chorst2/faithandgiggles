<template>
  <div>
    <b-card
        border-variant="primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
    >
      <b-card-title>
        <b>{{order.firstName}} {{order.lastName}}</b><br><b>Contact:</b> {{order.phoneNumber}}
      </b-card-title>
      <b-card-body>
        <b-row>
          <b-col v-for="item in order.items" :key="item.id" md="4">
            <OrderItems :order-items="item"></OrderItems>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer>
        <h5>Total Profit: ${{totalOrderCost}}</h5>
        <b-button @click="remove">Order Completed</b-button>
      </b-card-footer>
    </b-card>

  </div>

</template>

<script>
import OrderItems from "./OrderItems";
import {db} from "../config/firebase.js";

export default {
  name: "OrderDetails",
  props: {
    order: Object,

  },
  components: {
    OrderItems
  },
  computed: {
    totalOrderCost(){
      var orderTotalCost = 0;
      for(var i = 0; i < this.order.items.length; i++){
        orderTotalCost += this.order.items[i].price * this.order.items[i].quantity;
      }
      return orderTotalCost;
    }
  },
  methods: {
    remove(){
      // remove order
      db.collection('orders').doc(this.order.id)
          .delete()
          .catch(error => {
            console.error('Error deleting order: ', error);
            alert('There was an error deleting the order. See Console');
          })
    },

  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  .card-title, h5 {
    font-family: 'Comfortaa', cursive;
  }

</style>