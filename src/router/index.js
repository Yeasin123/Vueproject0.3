import Vue from "vue";
import VueRouter from "vue-router";
import User from "../views/User.vue"
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "User",
    component: User,
    redirect:{name: 'Home'},
    children:[
      {
        path:'home',
        name:'Home',
        component:Home,
      },
    ]
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
