<script setup>
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
import RestauranteDAO from '@/services/RestauranteDAO';
import { onMounted, ref } from "vue";
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';


const restaurantes = ref([]);
const restaurantesPorNicho = ref({});
const busca = ref("");

const nichoMap = {
  1: "Regional",
  2: "Doceria e Cafeteria",
  3: "Pizzaria e Hamburgueria",
  4: "GastroBar",
  5: "Churrascaria"
};

const restauranteDAO = new RestauranteDAO();

const carregarRestaurantes = async () => {
  try {
    const todosRestaurantes = await restauranteDAO.getAllRestaurantes();
    const agrupados = {};
    todosRestaurantes.forEach((restaurante) => {
      const chave = restaurante.nicho;
      if (!agrupados[chave]) {
        agrupados[chave] = [];
      }
      agrupados[chave].push(restaurante);
    });
    restaurantes.value = todosRestaurantes;
    restaurantesPorNicho.value = agrupados;
  } catch (error) {
    console.error("Erro ao carregar restaurantes:", error);
  }
};

onMounted(carregarRestaurantes);

const filtrarRestaurantes = async () => {
  if (busca.value.trim() === "") {
    carregarRestaurantes();
    return;
  }
  const termo = busca.value.toLowerCase();
  restaurantesPorNicho.value = Object.keys(restaurantesPorNicho.value).reduce((acc, chave) => {
    acc[chave] = restaurantes.value.filter(
      (r) => r.nicho == chave && r.nome.toLowerCase().includes(termo)
    );
    return acc;
  }, {});
};
  </script>

<template>
<div id="restaurantes">
  <NavBar />
  <BarraDePesquisa v-model="busca" @input="filtrarRestaurantes"/>
  <main>
    <div class="area-visual">
      <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Igreja%20Matriz%20de%20S%C3%A3o%20Miguel%20Arcanjo-%20Barreiros/462586071_2946239275543677_3059116117920897614_n.jpg?raw=true" alt="Matriz de São Miguel Arcanjo" />
        <div class="texto-banner">
          <div class="restaurantes">Restaurantes Mais Bem Avaliados</div>
        </div>
      </div>
    </div>
    <!--<section class="restaurantes-avaliados">
      <div class="restaurante" v-for="restaurante in topRestaurantes" :key="restaurante.locationId">
        <router-link :to="{ name: 'RestauranteDetalhe', params: { id: restaurante.locationId } }">
          <img :src="`/path/to/restaurante/images/${restaurante.locationId}.jpg`" :alt="restaurante.locationId" />
          <div class="informacoes">
            <h3>{{ restaurante.locationId }}</h3>
            <p>Avaliação: {{ restaurante.mediaAvaliacao.toFixed(1) }} ⭐</p>
          </div>
        </router-link>
      </div>
    </section>-->
    <section v-for="(restaurantesDoNicho, chave) in restaurantesPorNicho" :key="chave" class="nicho-section">
        <h2 class="nicho-titulo">{{ nichoMap[chave] }}</h2>
        <div class="restaurantes-lista">
          <div class="restaurante" v-for="restaurante in restaurantesDoNicho" :key="restaurante.id">
            <router-link :to="{ name: 'RestauranteDetalhe', params: { id: restaurante.id } }">
              <div class="informacoes">
                <h3>{{ restaurante.nome }}</h3>
              </div>
            </router-link>
          </div>
        </div>
      </section>
  </main>
  <Footer/>
</div>
</template>

<style scoped>
/* Resets e Elementos Globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
}

/* Estrutura Principal */
#restaurantes {
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  width: 100%;
  flex: 1;
}

/* Área Visual */
.area-visual {
  padding-top: 80px;
  padding-bottom: 60px;
  color: #fff;
  position: relative;
}

.imagem-banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.texto-banner {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.restaurantes {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px / 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: right;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nicho-section {
  margin: 20px;
}

.nicho-titulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.restaurantes-lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.restaurante {
  width: 200px;
  margin: 10px;
  text-align: center;
}

.informacoes {
  margin-top: 10px;
}

.informacoes h3 {
  font-size: 18px;
  font-weight: bold;
}
footer {
  background-color: #2d5238;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
