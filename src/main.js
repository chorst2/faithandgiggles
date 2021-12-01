import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'animate.css';
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
import "./assets/scss/style.scss"
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import GuideQuiz from "./Pages/GuideQuiz";
import GuideQuizResults from "./Pages/GuideQuizResults";
import ShoppingBagPage from "./Pages/ShoppingBagPage";
import LogInPage from "./Pages/LogInPage";
import OrdersPage from "./Pages/OrdersPage";



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false


// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes: [
    //the name: just gives us a way to reference our route
    { path: '/', component: HomePage }, // default page
    { name: 'home', path: '/home', component: HomePage},
    { name: 'products', path: '/products', component: ProductPage, props: true},
    { name: 'gift guide quiz', path: '/gift-guides-quiz', component: GuideQuiz},
    {name: 'gift guide results', path: '/gift-guides-quiz/results', component: GuideQuizResults},
    {name: 'shopping bag', path: '/shopping-bag', component: ShoppingBagPage},
    {name: 'log in page', path: '/log-in', component: LogInPage},
    {name: 'orders page', path: '/orders', component: OrdersPage},
  ],
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
