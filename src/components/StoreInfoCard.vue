<template>
  <b-card>
    <div class="text-center">
      <b-avatar :icon="icon"></b-avatar>
    </div>
    <b-card-body>
      <b-card-title id="infoCardTitle">{{title}}</b-card-title>
      <b-card-text id="infoCardText">
        <slot name="cardText"></slot>
      </b-card-text>

    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "StoreInfoCard",
  props: {
    //the title for the card
    title: {
      type: String,
      required: true,
    },
    // the icon that will be displayed in the card
    icon: {
      type: String,
      required: true,
    },
    // the text that will be displayed in the card
    pText: {
      type: String,

    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.card{
  height: 100%;
}
#infoCardTitle{
  font-family: 'Berkshire Swash', cursive;
}

#infoCardText{
  font-family: 'Comfortaa', cursive;
}


</style>