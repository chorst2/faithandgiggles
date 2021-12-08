<template>
  <div id="footer" class="d-flex justify-content-end p-2">
    <b-button v-if="authUser.uid" @click="loggingOut">Log Out</b-button>
    <b-button v-else @click="$router.push('log-in')">Log In</b-button>
  </div>
</template>

<script>

import {auth} from "../config/firebase";

export default {
  name: "Footer",
  props: {
    // refers to the determining factor on if log in button or log out button is shown
    authUser: Object,
  },
  methods: {
    // method to log out of the owners order page
    loggingOut(){
      auth.signOut()
          .then(() => {
            this.$router.push('/log-in');
          });

    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

#footer{
  background-color: $accent;
}

</style>