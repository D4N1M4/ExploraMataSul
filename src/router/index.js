import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Register from "@/components/Register.vue"; // Certifique-se de que o componente Register exista
import Historico from "@/views/Historico.vue";
import Litoral from "@/views/Litoral.vue";
import Restaurantes from "@/views/Restaurantes.vue";
import Trilhas from "@/views/Trilhas.vue";
import Lazer from "@/views/Lazer.vue";
import NossaRegiao from "@/views/NossaRegiao.vue";
 
const routes = [
  { path: "/Historico", name:"Historico", component: Historico },
  { path: "/Lazer", name:"Lazer", component: Lazer },
  { path: "/Restaurantes", name:"Restaurantes", component: Restaurantes },
  { path: "/Trilhas", name:"Trilhas", component: Trilhas },
  { path: "/Litoral", name:"Litoral", component: Litoral },
  { path: "/NossaRegiao", name:"NossaRegiao", component: NossaRegiao },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reset-password", // Rota para recuperação de senha
    name: "reset-password",
    component: ResetPassword,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
