import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

let middlewareAuth = function(to, from, next) {
  if (store.state.user.id) {
    next();
  } else {
    let token = window.sessionStorage.getItem("token");
    if (token)
      store
        .dispatch("loginUserByToken", token)
        .then(() => {
          next();
        })
        .catch(() => {
          window.sessionStorage.removeItem("token");
          next({ path: "/" });
        });
    else next({ path: "/" });
  }
};
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
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/adote-pet",
    name: "AdotePet",
    component: () =>
      import(/* webpackChunkName: "AdotePet" */ "../views/AdotePet.vue"),
  },
  {
    path: "/editar-pet",
    name: "EditarPet",
    component: () =>
      import(/* webpackChunkName: "EditarPet" */ "../views/EditarPet.vue"),
  },
  {
    path: "/atualizar-perfil",
    name: "AtualizarPerfil",
    component: () =>
      import(
        /* webpackChunkName: "AtualizarPerfil" */ "../views/AtualizarPerfil.vue"
      ),
  },
  {
    path: "/solicitacoes",
    name: "Solicitacoes",
    component: () =>
      import(
        /* webpackChunkName: "Solicitacoes" */ "../views/Solicitacoes.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
