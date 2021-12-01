<template>
  <div id="app">
    <Header :auth-user="authUser"></Header>
    <b-container>
    <router-view :shopping-bag="shoppingBag" :auth-user="authUser"/>
    </b-container>
    <Footer :auth-user="authUser"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import ShoppingBag from "./models/ShoppingBag";
import Footer from "./components/Footer";
import {auth} from "./config/firebase.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      shoppingBag: new ShoppingBag(),
      authUser: {uid: ''},
    }
  },
  created: function() {
    auth.onAuthStateChanged((user) => {
      if (user) {

        console.log('Signed in as: ', user);

        //store entire user object in our app
        this.authUser = user;
        // this.authUser = new User(user);


      } else {
        // User is signed out.
        console.log('Not signed in.');

        //remove user from app
        this.authUser = {uid: ''};

      }
    });
  },

}
</script>

<style lang="scss">
@import "assets/scss/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primary;
}
</style>
