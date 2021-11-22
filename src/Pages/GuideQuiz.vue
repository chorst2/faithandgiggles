<template>
  <div>
    <h2 class="pt-3">Gift Guide Quiz</h2><br>

    <b-form @submit="onSubmit" v-if="show" class="py-3">
      <b-form-group>
        <h5>1. What is the receiver's age range? </h5>
        <b-form-radio name="q1-option" value="less12">0 - 12</b-form-radio>
        <b-form-radio name="q1-option" value="13-19">13 - 19</b-form-radio>
        <b-form-radio name="q1-option" value="20-45">20 - 45</b-form-radio>
        <b-form-radio name="q1-option" value="46up">46 +</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>2. Are they a food lover? </h5>
        <b-form-radio name="q2-option" value="yes">Yes</b-form-radio>
        <b-form-radio name="q2-option" value="no">No</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>3. What is their personality? </h5>
        <b-form-radio name="q3-option" value="adventurous">Adventurous</b-form-radio>
        <b-form-radio name="q3-option" value="calm">Calm</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>4. Are they all about the DIY life? </h5>
        <b-form-radio name="q4-option" value="yes">Yes</b-form-radio>
        <b-form-radio name="q4-option" value="no">No</b-form-radio>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "GuideQuiz",
  components: {
    Footer,
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  data() {
    return {
      show: true
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.btn{
  background-color: white;
  border-color: white;
}

</style>