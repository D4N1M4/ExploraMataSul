import Register from "@/components/Register.vue";
import RestauranteCard from "@/components/RestauranteCard.vue";
import Avaliacao from "@/views/Avaliacao.vue";
import BananalEcoPark from "@/views/BananalEcoPark.vue";
import BeatrizPark from "@/views/BeatrizPark.vue";
import CachoeiraA from "@/views/CachoeiraA.vue";
import CachoeiraBD from "@/views/CachoeiraBD.vue";
import CachoeiraBV from "@/views/CachoeiraBV.vue";
import CachoeiraC from "@/views/CachoeiraC.vue";
import CachoeiraPI from "@/views/CachoeiraPI.vue";
import CachoeiraPP from "@/views/CachoeiraPP.vue";
import CachoeiraPS from "@/views/CachoeiraPS.vue";
import CachoeiraPSerra from "@/views/CachoeiraPSerra.vue";
import CachoeiraRM from "@/views/CachoeiraRM.vue";
import CachoeiraSerraAzul from '@/views/CachoeiraSerraAzul.vue';
import CachoeiraU from "@/views/CachoeiraU.vue";
import CachoeiraVN from "@/views/CachoeiraVN.vue";
import CapelaSB from "@/views/CapelaSB.vue";
import CasaDaCultura from '@/views/CasaDaCultura.vue';
import CasaraoLV from "@/views/CasaraoLV.vue";
import CatedralNSC from "@/views/CatedralNSC.vue";
import EcoParkSA from "@/views/EcoParkSA.vue";
import EducandarioSJ from "@/views/EducandarioSJ.vue";
import EngenhoMorim from '@/views/EngenhoMorim.vue';
import Forte from "@/views/Forte.vue";
import Historico from "@/views/Historico.vue";
import Historicos from "@/views/Historicos.vue";
import HomeView from "@/views/HomeView.vue";
import HotelFazenda from "@/views/HotelFazenda.vue";
import IgrejaNSD from "@/views/IgrejaNSD.vue";
import IgrejaNSP from "@/views/IgrejaNSP.vue";
import IgrejaNSR from "@/views/IgrejaNSR.vue";
import IgrejaSBSJ from "@/views/IgrejaSBSJ.vue";
import IlhaSantoAleixo from "@/views/IlhaSantoAleixo.vue";
import Indicar from "@/views/Indicar.vue";
import Lazer from "@/views/Lazer.vue";
import Lazeres from "@/views/Lazeres.vue";
import Litorais from "@/views/Litorais.vue";
import Litoral from "@/views/Litoral.vue";
import Login from "@/views/Login.vue";
import MatrizNSC from "@/views/MatrizNSC.vue";
import MatrizSA from "@/views/MatrizSA.vue";
import MatrizSJBE from "@/views/MatrizSJBE.vue";
import MatrizSJCG from "@/views/MatrizSJCG.vue";
import MatrizSJRF from "@/views/MatrizSJRF.vue";
import MatrizSMA from "@/views/MatrizSMA.vue";
import MinaDaPedra from "@/views/MinaDaPedra.vue";
import MinasEcoPark from "@/views/MinasEcoPark.vue";
import MuseuDoUna from '@/views/MuseuDoUna.vue';
import MuseuE from "@/views/MuseuE.vue";
import NossaRegiao from "@/views/NossaRegiao.vue";
import OrlaPalmares from "@/views/OrlaPalmares.vue";
import ParkSerraDourada from "@/views/ParkSerraDourada.vue";
import ParoquiaSFA from "@/views/ParoquiaSFA.vue";
import ParoquiaSJ from "@/views/ParoquiaSJ.vue";
import Perfil from '@/views/Perfil.vue';
import PracaNSR from "@/views/PracaNSR.vue";
import PracaPP from "@/views/PracaPP.vue";
import PraiaBarraS from "@/views/PraiaBarraS.vue";
import PraiaBarreiros from "@/views/PraiaBarreiros.vue";
import PraiaCarneiros from "@/views/PraiaCarneiros.vue";
import PraiaDaPedra from "@/views/PraiaDaPedra.vue";
import PraiaDeSaoJoseDaCoroaGrande from "@/views/PraiaDeSaoJoseDaCoroagrande.vue";
import PraiaGravata from "@/views/PraiaGravata.vue";
import PraiaGuadalupe from "@/views/PraiaGuadalupe.vue";
import PraiaGuaiamum from "@/views/PraiaGuaiamum.vue";
import PraiaPN from "@/views/PraiaPN.vue";
import PraiaVU from "@/views/PraiaVU.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Restaurantes from "@/views/Restaurantes.vue";
import RoteirosNaturais from "@/views/RoteirosNaturais.vue";
import SerraDoEspelho from "@/views/SerraDoEspelho.vue";
import TeatroApolo from '@/views/TeatroApolo.vue';
import TodosRN from "@/views/TodosRN.vue";
import UsinaCatende from "@/views/UsinaCatende.vue";
import UsinaST from "@/views/UsinaST.vue";
import VitoriaPS from "@/views/VitoriaPS.vue";
import { createRouter, createWebHistory } from "vue-router";
import FirestoreDAO from '../services/FirestoreDAO';
import RestauranteDetalhe from "../views/RestauranteDetalhe.vue";


const routes = [
  { path: "/Historico", name:"Historico", component: Historico },
  { path: "/Lazer", name:"Lazer", component: Lazer },
  { path: "/Restaurantes", name:"Restaurantes", component: Restaurantes },
  { path: "/RoteirosNaturais", name:"RoteirosNaturais", component: RoteirosNaturais },
  { path: "/Litoral", name:"Litoral", component: Litoral },
  { path: "/NossaRegiao", name:"NossaRegiao", component: NossaRegiao },
  { path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande", name:"Praia De São José Da Coroa Grande", component: PraiaDeSaoJoseDaCoroaGrande, meta: { city: "São José da Coroa Grande", category: "Litoral" }},
  { path: "/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande/Avaliacao", name:"Avaliacao", component: Avaliacao },
  { path: "/HotelFazenda", name:"Hotel Fazenda", component: HotelFazenda,  meta: { city: "Bonito", category: "Lazer" }},
  { path: "/CasaDaCultura", name:"Casa da Cultura Hemílio Borba", component: CasaDaCultura, meta: { city: "Palmares", category: "Histórico" }},
  { path: "/EngenhoMorim", name:"Engenho Morim", component: EngenhoMorim, meta: { city: "São José da Coroa Grande", category: "Histórico" }},
  { path: "/MuseuDoUna", name:"Museu Do Una", component: MuseuDoUna, meta: { city: "São José da Coroa Grande", category: "Histórico" }},
  { path: "/TeatroApolo", name:"Cine Teatro Apolo", component: TeatroApolo, meta: { city: "Palmares", category: "Histórico" }},
  { path: "/CachoeiraSerraAzul", name:"Cachoeira de Serro Azul", component: CachoeiraSerraAzul,  meta: { city: "Palmares", category: "Lazer" }},
  { path: "/MinasEcoPark", name:"Minas Eco Park", component: MinasEcoPark,  meta: { city: "Ribeirão", category: "Lazer" }},
  { path: "/OrlaPalmares", name:"Orla de Palmares", component: OrlaPalmares,  meta: { city: "Palmares", category: "Lazer" }},
  { path: "/PraiaBarreiros", name:"Praia de Barreiros", component: PraiaBarreiros, meta: { city: "Barreiros", category: "Litoral" } },
  { path: "/PraiaCarneiros", name:"Praia dos Carneiros", component: PraiaCarneiros, meta: { city: "Tamandaré", category: "Litoral" }},
  { path: "/CatedralNSC", name:"Catedral de Nossa Senhora do Carmo", component: CatedralNSC, meta: { city: "Palmares", category: "Histórico" }},
  { path: "/MatrizSA", name:"Igreja Matriz de Sant'Ana", component: MatrizSA, meta: { city: "Catende", category: "Histórico" }},
  { path: "/MatrizSMA", name:"Igreja Matriz de São Miguel Arcanjo", component: MatrizSMA, meta: { city: "Barreiros", category: "Histórico" }},
  { path: "/IgrejaSBSJ", name:"Igreja de São Benedito", component: IgrejaSBSJ, meta: { city: "São José da Coroa Grande", category: "Histórico" }},
  { path: "/UsinaCatende", name:"Usina Catende", component: UsinaCatende, meta: { city: "Catende", category: "Histórico" }},
  { path: "/UsinaST", name:"Usina de Arte", component: UsinaST, meta: { city: "Santa Terezinha", category: "Histórico" }},
  { path: '/Perfil', name: 'Perfil', component: Perfil,},
  { path: "/", name: "home", component: HomeView,},
  { path: "/Login", name: "Login", component: Login,},
  { path: "/reset-password", name: "reset-password", component: ResetPassword,},
  { path: "/Register", name: "Register", component: Register,},
  { path: "/MinaDaPedra", name: "Mina Da Pedra",component: MinaDaPedra, meta: { city: "Ribeirão", category: "Lazer" }},
  { path: "/EcoParkSA", name: "Eco Park Santo Amaro",component: EcoParkSA, meta: { city: "Barreiros", category: "Lazer" }},
  { path: "/PracaNSR", name: "Praça Nossa Senhora do Rosário",component: PracaNSR,  meta: { city: "Barreiros", category: "Lazer" }},
  { path: "/PracaPP", name: "Praça Paulo Paranhos",component: PracaPP,  meta: { city: "Palmares", category: "Lazer" }},
  { path: "/PraiaVU", name: "Praia da Várzea do Una",component: PraiaVU, meta: { city: "São José da Coroa Grande", category: "Litoral" }},
  { path: "/BananalEcoPark", name: "Bananal Eco Park",component: BananalEcoPark,meta: { city: "Amaraji", category: "Roteiros Naturais" }},
  { path: "/BeatrizPark", name: "Beatriz Park",component: BeatrizPark, meta: { city: "Amaraji", category: "Lazer" }},
  { path: "/CachoeiraA", name: "Cachoeira do Animoso",component: CachoeiraA,meta: { city: "Amaraji", category: "Roteiros Naturais" }},
  { path: "/CachoeiraBD", name: "Cachoeira Bulha D'Água",component: CachoeiraBD,meta: { city: "Tamandaré", category: "Roteiros Naturais" }},
  { path: "/CachoeiraBV", name: "Cachoeira Boa Vista",component: CachoeiraBV,meta: { city: "São Benedito do Sul", category: "Roteiros Naturais" }},
  { path: "/CachoeiraC", name: "Cachoeira do Convento",component: CachoeiraC,meta: { city: "Primavera", category: "Roteiros Naturais" }},
  { path: "/CachoeiraPI", name: "Cachoeira Poço da Índia",component: CachoeiraPI,meta: { city: "São Benedito do Sul", category: "Roteiros Naturais" }},
  { path: "/CachoeiraPP", name: "Cachoeira Peri Peri",component: CachoeiraPP,meta: { city: "São Benedito do Sul", category: "Roteiros Naturais" }},
  { path: "/CachoeiraPS", name: "Cachoeira Poço do Soldado",component: CachoeiraPS,meta: { city: "São Benedito do Sul", category: "Roteiros Naturais" }},
  { path: "/CachoeiraPSerra", name: "Cachoeira Pé de Serra",component: CachoeiraPSerra,meta: { city: "Escada", category: "Roteiros Naturais" }},
  { path: "/CachoeiraRM", name: "Cachoeira do Rio Morto",component: CachoeiraRM,meta: { city: "Amaraji", category: "Roteiros Naturais" }},
  { path: "/CachoeiraU", name: "Cachoeira do Urubu",component: CachoeiraU,meta: { city: "Primavera", category: "Roteiros Naturais" }},
  { path: "/CachoeiraVN", name: "Cachoeira Véu da Noiva",component: CachoeiraVN,meta: { city: "São Benedito do Sul", category: "Roteiros Naturais" }},
  { path: "/CapelaSB", name: "Capela de São Benedito",component: CapelaSB, meta: { city: "Tamandaré", category: "Histórico" }},
  { path: "/CasaraoLV", name: "Casarão Limoeiro Velho",component: CasaraoLV, meta: { city: "Escada", category: "Histórico" }},
  { path: "/EducandarioSJ", name: "Educandário São Joaquim",component: EducandarioSJ, meta: { city: "Jaqueira", category: "Histórico" }},
  { path: "/Forte", name: "Forte",component: Forte, meta: { city: "Tamandaré", category: "Histórico" }},
  { path: "/IgrejaNSD", name: "Igreja de Nossa Senhora das Dores",component: IgrejaNSD, meta: { city: "Maraial", category: "Histórico" }},
  { path: "/IgrejaNSP", name: "Igreja de Nossa Senhora da Penha",component: IgrejaNSP, meta: { city: "Gameleira", category: "Histórico" }},
  { path: "/IgrejaNSR", name: "Igreja de Nossa Senhora do Rosário",component: IgrejaNSR, meta: { city: "Rio Formoso", category: "Histórico" }},
  { path: "/IlhaSantoAleixo", name: "Ilha de Santo Aleixo",component: IlhaSantoAleixo, meta: { city: "Sirinhaem", category: "Litoral" }},
  { path: "/MatrizNSC", name: "MatrizNSC",component: MatrizNSC,},
  { path: "/MatrizSJBE", name: "Matriz de São José da Boa Esperança",component: MatrizSJBE, meta: { city: "Amaraji", category: "Histórico" }},
  { path: "/MatrizSJCG", name: "Igreja Matriz de São José",component: MatrizSJCG, meta: { city: "Chã Grande", category: "Histórico" }},
  { path: "/MatrizSJRF", name: "Matriz de São José",component: MatrizSJRF, meta: { city: "Rio Formoso", category: "Histórico" }},
  { path: "/MuseuE", name: "Museu",component: MuseuE, meta: { city: "Escada", category: "Histórico" }},
  { path: "/ParkSerraDourada", name: "Park Serra Dourada",component: ParkSerraDourada, meta: { city: "Jaqueira", category: "Lazer" }},
  { path: "/ParoquiaSFA", name: "Paroquia de São Francisco de Assis",component: ParoquiaSFA, meta: { city: "Cortês", category: "Histórico" }},
  { path: "/ParoquiaSJ", name: "Paroquia de São José",component: ParoquiaSJ, meta: { city: "Joaquim Nabuco", category: "Histórico" }},
  { path: "/PraiaBarraS", name: "Praia Barra de Sirinhaem",component: PraiaBarraS, meta: { city: "Sirinhaem", category: "Litoral" }},
  { path: "/PraiaDaPedra", name: "Praia Da Pedra",component: PraiaDaPedra, meta: { city: "Rio Formoso", category: "Lazer" }},
  { path: "/PraiaGravata", name: "Praia do Gravata",component: PraiaGravata,meta: { city: "São José da Coroa Grande", category: "Litoral" }},
  { path: "/PraiaGuadalupe", name: "Praia de Guadalupe",component: PraiaGuadalupe,meta: { city: "Sirinhaem", category: "Litoral" }},
  { path: "/PraiaGuaiamum", name: "Praia de Guaiamum",component: PraiaGuaiamum,meta: { city: "Sirinhaem", category: "Litoral" }},
  { path: "/PraiaPN", name: "Praia Porto de Nassau",component: PraiaPN, meta: { city: "Barreiros", category: "Litoral" }},
  { path: "/SerraDoEspelho", name: "Serra Do Espelho",component: SerraDoEspelho,meta: { city: "Jaqueira", category: "Roteiros Naturais" }},
  { path: "/VitoriaPS", name: "Vitoria Park Shopping",component: VitoriaPS, meta: { city: "Vitória de Santo Antão", category: "Lazer" }},
  { path: "/Indicar", name: "Indicar",component: Indicar},
  { path: "/Historicos", name: "Historicos",component: Historicos},
  { path: "/Lazeres", name: "Lazeres",component: Lazeres},
  { path: "/TodosRN", name: "TodosRN",component: TodosRN},
  { path: "/Litorais", name: "Litorais",component: Litorais},
  { path: '/restaurantesCard', name: 'RestaurantesCard', component: RestauranteCard },
  { path: '/servicos', name: 'Servicos', component: FirestoreDAO },
  {path:'/restauranteDetalhe/:id', name:"RestauranteDetalhe" ,component: RestauranteDetalhe, props:true},
  {path:'/firestoreDAO', name:"firestoreDAO" ,component: FirestoreDAO},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
