<template>
  <div>
    <b-card>
      <b-card-title>
        <b>{{orderItems.name}}</b>
      </b-card-title>
      <b-card-body>
        Sku: {{orderItems.id}}<br>
        Quantity: {{orderItems.quantity}}
      </b-card-body>
    </b-card>

  </div>

</template>

<script>

export default {
  name: "OrderItems",
  props: {
    // refers to the individual products in each order
    orderItems: Object,

  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

  .card-title, .card-body{
    font-family: 'Comfortaa', cursive;
  }

</style>