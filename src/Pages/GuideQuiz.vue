<template>
  <div>
    <h2 class="pt-3 animate__animated animate__zoomIn">Gift Guide Quiz</h2><br>

    <b-form @submit.prevent="onSubmit" v-if="show" class="py-3">
      <b-form-group>
        <h5>1. What is the receiver's age range? </h5>
        <b-form-radio v-model="results.first" name="q1-option" value="less12">0 - 12</b-form-radio>
        <b-form-radio v-model="results.first" name="q1-option" value="13-19">13 - 19</b-form-radio>
        <b-form-radio v-model="results.first" name="q1-option" value="20-45">20 - 45</b-form-radio>
        <b-form-radio v-model="results.first" name="q1-option" value="46up">46 +</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>2. Are they a food lover? </h5>
        <b-form-radio v-model="results.second" name="q2-option" value="yesFood">Yes</b-form-radio>
        <b-form-radio v-model="results.second" name="q2-option" value="noFood">No</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>3. What is their personality? </h5>
        <b-form-radio v-model="results.third" name="q3-option" value="adventurous">Adventurous</b-form-radio>
        <b-form-radio v-model="results.third" name="q3-option" value="calm">Calm</b-form-radio>
      </b-form-group>

      <b-form-group>
        <h5>4. Are they all about the DIY life? </h5>
        <b-form-radio v-model="results.fourth" name="q4-option" value="yesDIY">Yes</b-form-radio>
        <b-form-radio v-model="results.fourth" name="q4-option" value="noDIY">No</b-form-radio>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

export default {
  name: "GuideQuiz",
  methods: {
    //when quiz is submitted send the quiz results to the router with the name products
    onSubmit() {
      this.$router.push({ name: 'products', params: { selectedTags: this.results } })
    }
  },
  data() {
    return {
      //displays the form
      show: true,
      //object to store the results from the quiz
      results: {
        first: '',
        second: '',
        third: '',
        fourth: '',
      }
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