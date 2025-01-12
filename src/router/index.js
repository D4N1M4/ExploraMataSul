import Register from "@/components/Register.vue";
import Avaliacao from "@/views/Avaliacao.vue";
import Historico from "@/views/Historico.vue";
import HomeView from "@/views/HomeView.vue";
import Lazer from "@/views/Lazer.vue";
import Litoral from "@/views/Litoral.vue";
import Login from "@/views/Login.vue";
import PraiaDeSaoJoseDaCoroaGrande from "@/views/PraiaDeSaoJoseDaCoroagrande.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Restaurantes from "@/views/Restaurantes.vue";
import RoteirosNaturais from "@/views/RoteirosNaturais.vue";
import HotelFazenda from "@/views/HotelFazenda.vue";
import Perfil from '@/views/Perfil.vue'; 
import CasaDaCultura from '@/views/CasaDaCultura.vue'; 
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/Historico", name:"Historico", component: Historico },
  { path: "/Lazer", name:"Lazer", component: Lazer },
  { path: "/Restaurantes", name:"Restaurantes", component: Restaurantes },
  { path: "/RoteirosNaturais", name:"RoteirosNaturais", component: RoteirosNaturais },
  { path: "/Litoral", name:"Litoral", component: Litoral },
  { path: "/NossaRegiao", name:"NossaRegiao", component: HomeView },
  { path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande", name:"PraiaDeSaoJoseDaCoroaGrande", component: PraiaDeSaoJoseDaCoroaGrande },
  { path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande/Avaliacao", name:"Avaliacao", component: Avaliacao },
  { path: "/HotelFazenda", name:"HotelFazenda", component: HotelFazenda },
  { path: "/CasaDaCultura", name:"CasaDaCultura", component: CasaDaCultura },

  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil,
  },

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
  {
    path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande",
    name: "PraiaDeSaoJoseDaCoroaGrande",
    component: PraiaDeSaoJoseDaCoroaGrande,
  },
  {
    path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande/Avaliacao",
    name: "Avaliacao",
    component: Avaliacao,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
