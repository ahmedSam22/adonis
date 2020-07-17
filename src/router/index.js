import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Content from "../views/Content.vue";
import Sign from "../views/Sign.vue"

import 'bootstrap';
Vue.use(VueRouter);
   
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Sign",
    name: "Sign",
    component: Sign
  },
  {
    path: "/about",
    name: "About",
  
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Content",
    name: "Content",
    component: Content
  },
];

const router = new VueRouter({
  routes
});

export default router;
