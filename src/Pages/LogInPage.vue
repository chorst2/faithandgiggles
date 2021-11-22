<template>
  <div>
    <div class="d-flex align-items-center justify-content-center">
      <h2>Log In</h2>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            id="email-input-label"
            label="Email address:"
            label-for="email-input"
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
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required>
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Clear</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInPage",
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

</style>