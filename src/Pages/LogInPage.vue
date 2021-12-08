<template>
  <div class="py-4">
    <div class="d-flex align-items-center justify-content-center">
      <h2 class="animate__animated animate__zoomIn">Log In</h2>
    </div>



    <b-row class="justify-content-sm-center sticky-top p-3">
      <b-col sm="6">
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="danger"
            @dismiss-count-down="countDownChanged"
        >
        {{this.errorMessage}}
        </b-alert>
      </b-col>
    </b-row>




    <div class="d-flex align-items-center justify-content-center ">
      <b-form @submit.prevent="loggingIn" @reset="onReset" v-if="show">
        <b-form-group
            id="email-input-label"
            label="Email address:"
            label-for="email-input"
            class="formLabel"
        >
          <b-form-input
              id="email-input"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password-input-label"
          label="Password:"
          label-for="password-input"
          class="formLabel"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required>
          </b-form-input>
        </b-form-group>

        <b-button type="submit">Submit</b-button>
        <b-button type="reset">Clear</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import {auth} from "../config/firebase.js";

export default {
  name: "LogInPage",
  data() {
    return {
      //object that takes in the inputted email and password
      form: {
        email: '',
        password: '',
      },
      //makes form appear
      show: true,
      //stores the message that will be displayed if theres an error logging in
      errorMessage: '',
      //props for the alert that displays the error message
      dismissSecs: 3,
      dismissCountDown: 0,
    }
  },
  methods: {
    //resets the information in the log in form
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    //method that logs owner in and takes them to the orders page
    loggingIn() {
      auth.signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            this.$router.push('/orders');
          })
          //displays an error if theres an error logging in
          .catch((error) => {
            // Handle Errors here.
            this.errorMessage = error.message;
            console.log(this.errorMessage);
            this.showAlert();
          });
    },

    //methods for displaying the alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },



  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.btn{
  background-color: white;
  border-color: white;
}

.formLabel{
  font-family: 'Comfortaa', cursive;
}

</style>