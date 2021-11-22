<template>
  <b-row id="header" class="d-flex align-items-center p-4">
    <b-col>
        <b-nav pills>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item><router-link to="/products">Products</router-link></b-nav-item>
          <b-nav-item><router-link to="/gift-guides-quiz">Gift Guide</router-link></b-nav-item>
        </b-nav>
    </b-col>
    <b-col class="d-flex justify-content-center">
      <h1 id="businessName" class="animate__animated animate__bounceInDown" @click="$router.push('home')"><span id="faithAnd">Faith &</span><span id="giggles"> Giggles</span></h1>
    </b-col>
    <b-col class="d-flex justify-content-end">
      <b-button @click="$router.push('shopping-bag')"><b-icon icon="bag" variant="accent"></b-icon></b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Header"
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