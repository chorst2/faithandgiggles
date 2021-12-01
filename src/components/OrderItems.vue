<template>
  <div>
    <h3>{{orderItems.id}} - {{orderItems.name}}</h3>
    <h5>Total: ${{getTotal}}</h5>
    <h5>Quantity: {{orderItems.quantity}}</h5>
  </div>

</template>

<script>

export default {
  name: "OrderItems",
  props: {
    orderItems: Object,

  },
  data(){
    return {

    }
  },
  computed: {
    getTotal(){
      return this.orderItems.price * this.orderItems.quantity;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  h3, h5 {
    font-family: 'Comfortaa', cursive;
  }

</style>