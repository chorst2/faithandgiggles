<template>
  <b-row id="header" class="d-flex align-items-center p-4">
    <b-col cols="5">
        <b-nav pills>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/gift-guides-quiz">Gift Guide</b-nav-item>
          <b-nav-item v-if="authUser.uid" to="/orders">Orders</b-nav-item>
        </b-nav>
    </b-col>
    <b-col class="d-flex justify-content-center" cols="3">
      <h1 id="businessName" class="animate__animated animate__bounceInDown" @click="$router.push('home')"><span id="faithAnd">Faith &</span><span id="giggles"> Giggles</span></h1>
    </b-col>
    <b-col class="d-flex justify-content-end" cols="4">
      <b-button @click="$router.push('shopping-bag')"><b-icon icon="bag" variant="accent"></b-icon></b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Header",
  props: {
    authUser: Object,
  },
}
</script>

<style scoped lang="scss">
 @import "../assets/scss/variables";

  #header{
    background-color: $accent;
    //height: 70px;
  }

 #businessName{
   cursor: pointer;
 }

 #faithAnd{
   font-family: 'Berkshire Swash', cursive;
 }

 #giggles{
   font-family: 'Bonbon', cursive;
 }

</style>