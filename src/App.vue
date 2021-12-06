<template>
  <div id="app">
    <Header :auth-user="authUser"></Header>
    <b-container>
    <router-view :shopping-bag="shoppingBag" :auth-user="authUser" :products="products"/>
    </b-container>
    <Footer id="footer" :auth-user="authUser"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import ShoppingBag from "./models/ShoppingBag";
import Footer from "./components/Footer";
import {auth} from "./config/firebase.js";
import StoreCollection from "./models/StoreCollection";
import StoreItemModel from "./models/StoreItem";

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
      products: new StoreCollection()
          .addItem(new StoreItemModel(1, 'geode state ornament.jpg', 'Geode State Ornament', 18, ['20-45', '46up', 'calm'], 1))
          .addItem(new StoreItemModel(2, 'essential oil shower steamers.jpg', 'Essential Oil Shower Steamers', 15, ['13-19', '20-45', 'calm'], 1))
          .addItem(new StoreItemModel(3, 'diy rootbeer science kit.jpg', 'DIY Rootbeer Science Kit', 18, ['less12', '13-19', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(4, 'cocktail smoker set.jpg', 'Cocktail Smoker Set', 100, ['20-45', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(5, 'DIY hot sauce kit.jpg', 'DIY Hot Sauce Kit', 42, ['20-45', 'yesFood', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(6, 'squishy gummy bear light.jpg', 'Squishy Gummy Bear Light', 28, ['less12', '13-19', 'adventurous'], 1))
          .addItem(new StoreItemModel(7, 'construction plate and utensils.jpg', 'Construction Plate & Utensils', 34, ['less12', 'yesFood', 'adventurous'], 1))
          .addItem(new StoreItemModel(8, 'birth month flower grow kit.jpg', 'Birth Month Flower Grow Kit', 35, ['13-19', '20-45', '46up', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(9, 'frozen wine slushie mix.jpg', 'Frozen Wine Slushie Mix', 15, ['20-45', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(10, 'tabletop cornhole.jpg', 'Tabletop Cornhole', 45, ['13-19', '20-45', 'adventurous'], 1))
          .addItem(new StoreItemModel(11, 'gardeners tool seat.jpg', 'Gardeners Tool Seat', 40, ['20-45', '46up', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(12, 'magnetic bookmark.jpg', 'Magnetic Bookmark', 20, ['less12', '13-19', '20-45', '46up', 'calm'], 1))
          .addItem(new StoreItemModel(13, 'automatic pan stirrer.jpg', 'Automatic Pan Stirrer', 25, ['20-45', '46up', 'yesFood', 'calm'], 1))
          .addItem(new StoreItemModel(14, 'hot cocoa bomb kit.jpg', 'Hot Cocoa Bomb Kit', 30, ['less12', '13-19', '20-45', 'yesFood', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(15, 'spotted garden ducks.jpg', 'Spotted Garden Ducks', 85, ['46up', 'calm'], 1))
          .addItem(new StoreItemModel(16, 'my family cookbook.jpg', 'My Family Cookbook', 15, ['20-45', '46up', 'yesFood', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(17, 'caramel advent calendar.jpg', 'Caramel Advent Calendar', 30, ['13-19', '20-45', '46up', 'yesFood', 'calm'], 1))
          .addItem(new StoreItemModel(18, 'burger seasoning kits.jpg', 'Burger Seasoning Kits', 20, ['20-45', 'yesFood', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(19, 'travel cord roll.jpg', 'Travel Cord Roll', 20, ['13-19', '20-45', 'adventurous'], 1))
          .addItem(new StoreItemModel(20, 'kantha indigo wrap bracelet.jpg', 'Kantha Indigo Wrap Bracelet', 30, ['20-45', '46up', 'calm'], 1))
          .addItem(new StoreItemModel(21, 'couch arm knitting caddy.jpg', 'Couch Arm Knitting Caddy', 35, ['46up', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(22, 'owl eyeglass holder.jpg', 'Owl Eyeglass Holder', 25, ['46up', 'calm'], 1))
          .addItem(new StoreItemModel(23, 'grass gauge.jpg', 'Grass Gauge', 18, ['46up', 'adventurous'], 1))
          .addItem(new StoreItemModel(24, 'rechargeable lighter.jpg', 'Rechargeable Lighter', 30, ['20-45', '46up', 'adventurous'], 1))
          .addItem(new StoreItemModel(25, 'color-in pajamas.jpg', 'Color-In Pajamas', 38, ['less12', 'calm', 'yesDIY'], 1))
          .addItem(new StoreItemModel(26, 'detective tool kit.jpg', 'Detective Tool Kit', 25, ['less12', 'adventurous'], 1))
          .addItem(new StoreItemModel(27, 'cookie baking set.jpg', 'Cookie Baking Set', 40, ['less12', 'yesFood', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(28, 'kid bank.jpg', 'Kid Bank', 35, ['less12', 'calm'], 1))
          .addItem(new StoreItemModel(29, 'adventure challenge scrapbook.jpg', 'Adventure Challenge Scrapbook', 40, ['20-45', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(30, 'couples bucket list.jpg', 'Couples Bucket List', 30, ['20-45', 'adventurous', 'yesDIY'], 1))
          .addItem(new StoreItemModel(31, 'chocolate truffle kit.jpg', 'Chocolate Truffle Kit', 25, ['13-19', '20-45', 'adventurous', 'yesFood', 'yesDIY'], 1))
          .addItem(new StoreItemModel(32, 'conversation glassware.jpg', 'Conversation Glassware', 15, ['20-45', 'calm'], 1))
          .addItem(new StoreItemModel(33, 'bubble waffle kit.jpg', 'Bubble Waffle Kit', 55, ['13-19', 'calm', 'yesFood', 'yesDIY'], 1))
          .addItem(new StoreItemModel(34, 'karaoke microphone.jpg', 'Karaoke Microphone', 25, ['13-19', 'adventurous'], 1))
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
  min-height: 100vh;
  margin-bottom: 0;
}


</style>
