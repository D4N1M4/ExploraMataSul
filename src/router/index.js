import { createRouter, createWebHistory } from "vue-router";
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
import EngenhoMorim from '@/views/EngenhoMorim.vue'; 
import MuseuDoUna from '@/views/MuseuDoUna.vue'; 
import TeatroApolo from '@/views/TeatroApolo.vue'; 
import CachoeiraSerraAzul from '@/views/CachoeiraSerraAzul.vue'; 
import MinasEcoPark from "@/views/MinasEcoPark.vue";
import OrlaPalmares from "@/views/OrlaPalmares.vue";
import PraiaBarreiros from "@/views/PraiaBarreiros.vue";
import PraiaCarneiros from "@/views/PraiaCarneiros.vue";
import CatedralNSC from "@/views/CatedralNSC.vue";
import MatrizSA from "@/views/MatrizSA.vue";
import MatrizSMA from "@/views/MatrizSMA.vue";
import UsinaCatende from "@/views/UsinaCatende.vue";
import UsinaST from "@/views/UsinaST.vue";
import MinaDaPedra from "@/views/MinaDaPedra.vue";
import EcoParkSA from "@/views/EcoParkSA.vue";
import PracaNSR from "@/views/PracaNSR.vue";
import PracaPP from "@/views/PracaPP.vue";
import PraiaVU from "@/views/PraiaVU.vue";
import IgrejaSBSJ from "@/views/IgrejaSBSJ.vue";

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
  { path: "/EngenhoMorim", name:"EngenhoMorim", component: EngenhoMorim },
  { path: "/MuseuDoUna", name:"MuseuDoUna", component: MuseuDoUna },
  { path: "/TeatroApolo", name:"TeatroApolo", component: TeatroApolo },
  { path: "/CachoeiraSerraAzul", name:"CachoeiraSerraAzul", component: CachoeiraSerraAzul },
  { path: "/MinasEcoPark", name:"MinasEcoPark", component: MinasEcoPark },
  { path: "/OrlaPalmares", name:"OrlaPalmares", component: OrlaPalmares },
  { path: "/PraiaBarreiros", name:"PraiaBarreiros", component: PraiaBarreiros },
  { path: "/PraiaCarneiros", name:"PraiaCarneiros", component: PraiaCarneiros },
  { path: "/CatedralNSC", name:"CatedralNSC", component: CatedralNSC },
  { path: "/MatrizSA", name:"MatrizSA", component: MatrizSA },
  { path: "/MatrizSMA", name:"MatrizSMA", component: MatrizSMA },
  { path: "/IgrejaSBSJ", name:"IgrejaSBSJ", component: IgrejaSBSJ },
  { path: "/UsinaCatende", name:"UsinaCatende", component: UsinaCatende },
  { path: "/UsinaST", name:"UsinaST", component: UsinaST },
  { path: '/Perfil', name: 'Perfil', component: Perfil,},
  { path: "/", name: "home", component: HomeView,},
  { path: "/Login", name: "Login", component: Login,},
  { path: "/reset-password", name: "reset-password", component: ResetPassword,},
  { path: "/Register", name: "Register", component: Register,},
  { path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande", name: "PraiaDeSaoJoseDaCoroaGrande", component: PraiaDeSaoJoseDaCoroaGrande,},
  { path: "/MinaDaPedra", name: "MinaDaPedra",component: MinaDaPedra,},
  { path: "/EcoParkSA", name: "EcoParkSA",component: EcoParkSA,},
  { path: "/PracaNSR", name: "PracaNSR",component: PracaNSR,},
  { path: "/PracaPP", name: "PracaPP",component: PracaPP,},
  { path: "/PraiaVU", name: "PraiaVU",component: PraiaVU,},

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
