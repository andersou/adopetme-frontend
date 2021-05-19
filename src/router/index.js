import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cadastro-pet",
    name: "CadastroPet",
    component: () =>
      import(/* webpackChunkName: "CadastroPet" */ "../views/CadastroPet.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "Registro" */ "../views/Registro.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/adote-pet",
    name: "AdotePet",
    component: () =>
      import(/* webpackChunkName: "AdotePet" */ "../views/AdotePet.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
