<template>
  <div>
<!--    picture carousel-->
    <b-row class="d-flex justify-content-center my-5">
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          img-width="680"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
                class="d-block img-fluid w-100"
                width="680"
                height="480"
                src="../assets/images/faith and giggles store front.jpg"
                alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
                class="d-block img-fluid w-100"
                width="680"
                height="480"
                src="../assets/images/inside faith and giggles.jpg"
                alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
                class="d-block img-fluid w-100"
                width="680"
                height="480"
                src="../assets/images/faith and giggles owners.jpg"
                alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-row>
  <!--    about us section-->
<!--    <b-row>-->
      <div class="d-flex justify-content-center mt-3">
        <h3 id="aboutUsHeader">About Us</h3><br>
      </div>
      <div class="d-flex justify-content-center">
        <p id="aboutUsContent">Inspirational gifts, cards, books, jewelry and accessories, religious items
          and so much more, all in a warm and friendly environment! Come to shop or come to chat, whatever
          you come in for we hope you'll leave with a little extra spring in your step and smile in your heart.
        </p>
      </div>
<!--    </b-row>-->
  <!--    store information-->
    <b-row class="d-flex justify-content-center m-4 store-card-row">

  <!--      this card explains the store hours-->
        <b-col md="3">
        <StoreInfoCard icon="clock" title="Hours">
          <template #cardText>
            <p class="cardTextContent">
              <b>Monday:</b> 9 am - 6 pm<br>
              <b>Tuesday:</b> 9 am - 6 pm<br>
              <b>Wednesday:</b> 9 am - 6 pm<br>
              <b>Thursday:</b> 9 am - 6 pm<br>
              <b>Friday:</b> 9 am - 6 pm<br>
              <b>Saturday:</b> 9 am - 6 pm<br>
              <b>Sunday:</b> 10 am - 3 pm
            </p>
          </template>
        </StoreInfoCard>
        </b-col>

  <!--      this card explains the store contact info-->
        <b-col md="3">
        <StoreInfoCard icon="telephone-fill" title="Contact">
          <template #cardText>
            <p class="cardTextContent">
              <b>Email:</b> fg.4life@yahoo.com<br>
              <b>Phone:</b> (262) 397-8689
            </p>
          </template>
        </StoreInfoCard>
        </b-col>

  <!--      this card tells the store location-->
          <b-col md="3">
        <StoreInfoCard icon="cursor-fill" title="Location">
          <template #cardText>
            <p class="cardTextContent">
              42 N Main St<br>
              Hartford, WI 53027
            </p>
          </template>
        </StoreInfoCard>
          </b-col>
    </b-row>

    <Footer></Footer>

  </div>
</template>

<script>
import StoreInfoCard from "../components/StoreInfoCard";
import Footer from "../components/Footer";

export default {
  name: "HomePage",
  components: {
    StoreInfoCard,
    Footer,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd(){
      this.sliding = false
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.store-card-row{
  //width: 80%;
  //margin: 0 auto;
}
#aboutUsHeader{
  font-family: 'Berkshire Swash', cursive;
}

#aboutUsContent{
  font-family: 'Comfortaa', cursive;
  width: 55%;
}
#carousel-1{
  width: 680px;
  height: 480px;
  align-content: center;
}

.cardTextContent{
  font-size: 13px;
}
</style>