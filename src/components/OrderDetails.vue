<template>
  <div>
    <h1>{{order.firstName}} {{order.lastName}}</h1>
    <h3>{{order.phoneNumber}}</h3>

    <OrderItems v-for="item in order.items" :order-items="item" :key="item.id"></OrderItems>
  </div>

</template>

<script>
import OrderItems from "./OrderItems";
export default {
  name: "OrderDetails",
  props: {
    order: Object,

  },
  components: {
    OrderItems
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  h1, h3 {
    font-family: 'Comfortaa', cursive;
  }

</style>