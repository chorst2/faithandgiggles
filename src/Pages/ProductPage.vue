<template>
  <div>
    <h2 class="pt-3">Products</h2>

    <b-row class="justify-content-sm-center sticky-top">
      <b-col sm="6">
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="warning"
            @dismiss-count-down="countDownChanged"
        >
          Item added to cart!
        </b-alert>
      </b-col>
    </b-row>

    <b-row class="p-3">
      <b-col  v-for="item in store" :key="item.id" md="3">
        <StoreItem
            :item="item"
            :add-cart-function="(item) => shoppingBag.addToCart(item)"
            :show-cart-message-function="showAlert"
        > </StoreItem>
      </b-col>
    </b-row>

    <Footer></Footer>
  </div>
</template>

<script>
import StoreItem from "../components/StoreItem";
import ShoppingBag from "../models/ShoppingBag";
import StoreCollection from "../models/StoreCollection";
import StoreItemModel from "../models/StoreItem";
import Footer from "../components/Footer";

export default {
  name: "ProductPage",
  components: {
    StoreItem,
    Footer
  },
  data() {
    return {

      store: new StoreCollection()
          //TODO: input the "tags" to use for gift guide quiz and cart suggestions
          .addItem(new StoreItemModel(1, 'geode state ornament.jpg', 'Geode State Ornament', 18, ['20-45', '46up', 'calm']))
          .addItem(new StoreItemModel(2, 'essential oil shower steamers.jpg', 'Essential Oil Shower Steamers', 15, ['13-19', '20-45', 'calm']))
          .addItem(new StoreItemModel(3, 'diy rootbeer science kit.jpg', 'DIY Rootbeer Science Kit', 18, ['less12', '13-19', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(4, 'cocktail smoker set.jpg', 'Cocktail Smoker Set', 100, ['20-45', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(5, 'DIY hot sauce kit.jpg', 'DIY Hot Sauce Kit', 42, ['20-45', 'food', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(6, 'squishy gummy bear light.jpg', 'Squishy Gummy Bear Light', 28, ['less12', '13-19', 'adventurous']))
          .addItem(new StoreItemModel(7, 'construction plate and utensils.jpg', 'Construction Plate & Utensils', 34, ['less12', 'food', 'adventurous']))
          .addItem(new StoreItemModel(8, 'birth month flower grow kit.jpg', 'Birth Month Flower Grow Kit', 35, ['13-19', '20-45', '46up', 'calm', 'diy']))
          .addItem(new StoreItemModel(9, 'frozen wine slushie mix.jpg', 'Frozen Wine Slushie Mix', 15, ['20-45', 'calm', 'diy']))
          .addItem(new StoreItemModel(10, 'tabletop cornhole.jpg', 'Tabletop Cornhole', 45, ['13-19', '20-45', 'adventurous']))
          .addItem(new StoreItemModel(11, 'gardeners tool seat.jpg', 'Gardeners Tool Seat', 40, ['20-45', '46up', 'calm', 'diy']))
          .addItem(new StoreItemModel(12, 'magnetic bookmark.jpg', 'Magnetic Bookmark', 20, ['less12', '13-19', '20-45', '46up', 'calm']))
          .addItem(new StoreItemModel(13, 'automatic pan stirrer.jpg', 'Automatic Pan Stirrer.jpg', 25, ['20-45', '46up', 'food', 'calm']))
          .addItem(new StoreItemModel(14, 'hot cocoa bomb kit.jpg', 'Hot Cocoa Bomb Kit', 30, ['less12', '13-19', '20-45', 'food', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(15, 'spotted garden ducks.jpg', 'Spotted Garden Ducks', 85, ['46up', 'calm']))
          .addItem(new StoreItemModel(16, 'my family cookbook.jpg', 'My Family Cookbook', 15, ['20-45', '46up', 'food', 'calm', 'diy']))
          .addItem(new StoreItemModel(17, 'caramel advent calendar.jpg', 'Caramel Advent Calendar', 30, ['13-19', '20-45', '46up', 'food', 'calm']))
          .addItem(new StoreItemModel(18, 'burger seasoning kits.jpg', 'Burger Seasoning Kits', 20, ['20-45', 'food', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(19, 'travel cord roll.jpg', 'Travel Cord Roll', 20, ['13-19', '20-45', 'adventurous']))
          .addItem(new StoreItemModel(20, 'kantha indigo wrap bracelet.jpg', 'Kantha Indigo Wrap Bracelet', 30, ['20-45', '46up', 'calm']))
          .addItem(new StoreItemModel(21, 'couch arm knitting caddy.jpg', 'Couch Arm Knitting Caddy', 35, ['46up', 'calm', 'diy']))
          .addItem(new StoreItemModel(22, 'owl eyeglass holder.jpg', 'Owl Eyeglass Holder', 25, ['46up', 'calm']))
          .addItem(new StoreItemModel(23, 'grass gauge.jpg', 'Grass Gauge', 18, ['46up', 'adventurous']))
          .addItem(new StoreItemModel(24, 'rechargeable lighter.jpg', 'Rechargeable Lighter', 30, ['20-45', '46up', 'adventurous']))
          .addItem(new StoreItemModel(25, 'color-in pajamas.jpg', 'Color-In Pajamas', 38, ['less12', 'calm', 'diy']))
          .addItem(new StoreItemModel(26, 'detective tool kit.jpg', 'Detective Tool Kit', 25, ['less12', 'adventurous']))
          .addItem(new StoreItemModel(27, 'cookie baking set.jpg', 'Cookie Baking Set', 40, ['less12', 'food', 'adventurous', 'diy']))
          .addItem(new StoreItemModel(28, 'kid bank.jpg', 'Kid Bank', 35, ['less12', 'calm'])),

      shoppingBag: new ShoppingBag(),

      dismissSecs: 3,

      dismissCountDown: 0,

    }
  },
  methods: {
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

</style>