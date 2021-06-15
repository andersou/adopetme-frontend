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
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "EditarPet" */ "../views/EditarPet.vue"),
  },
  {
    path: "/atualizar-perfil",
    name: "AtualizarPerfil",
    beforeEnter: middlewareAuth,
    component: () =>
      import(
        /* webpackChunkName: "AtualizarPerfil" */ "../views/AtualizarPerfil.vue"
      ),
  },
  {
    path: "/request-sent",
    name: "SoliciticoesEnviadas",
    beforeEnter: middlewareAuth,
    component: () =>
      import(
        /* webpackChunkName: "SolicitacoesEnviadas" */ "../views/SolicitacoesEnviadas.vue"
      ),
  },
  {
    path: "/request-received",
    name: "SoliciticoesRecebidas",
    beforeEnter: middlewareAuth,
    component: () =>
      import(
        /* webpackChunkName: "SolicitacoesRecebidas" */ "../views/SolicitacoesRecebidas.vue"
      ),
  },
  {
    path: "/my-pets",
    name: "MeusPets",
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "MeusPets" */ "../views/MeusPets.vue"),
  },
  {
    path: "/detalhes/:petId",
    name: "detalhesPet",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Solicitacoes" */ "../views/DetalhesPet.vue"),
  },
  {
    path: "/adocaoresponsavel",
    name: "adocaoResponsavel",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Solicitacoes" */ "../views/LUAdopt.vue"),
  },
  {
    path: "/dicasecuidados",
    name: "dicasCuidados",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Solicitacoes" */ "../views/LUDicas.vue"),
  },
  {
    path: "/comousarsite",
    name: "ComoUsarSite",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Solicitacoes" */ "../views/LUHow.vue"),
  },
  {
    path: "/Confirmar-Email",
    name: "ConfirmarEmail",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "ConfirmarEmail" */ "../views/ConfirmEmail.vue"
      ),
  },
  {
    path: "/Error",
    name: "Erro",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Solicitacoes" */ "../views/Erro.vue"),
    },
    {
      path: "/EmailConfirmation",
      name: "EmailConfirmation",
      props: true,
      component: () =>
        import(/* webpackChunkName: "Solicitacoes" */ "../views/EmailConfirmation.vue"),
      },
     {
      path: "/LoginFacebook",
      name: "LoginFacebook",
      props: true,
      component: () =>
        import(/* webpackChunkName: "Solicitacoes" */ "../views/NetworkLogin.vue"),
      }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
