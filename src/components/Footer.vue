<template>
  <div id="footer" class="d-flex justify-content-end p-2">
    <b-button @click="$router.push('log-in')">Log In</b-button>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

#footer{
  background-color: $accent;
}

</style>