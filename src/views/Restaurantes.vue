<script setup>
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
import { collection, getDocs } from "firebase/firestore";
import { computed, onMounted, ref } from "vue";
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { db } from "../firebase";

const restaurantes = ref([]);

// Função para carregar os restaurantes e calcular a média de avaliações
const loadRestaurantes = async () => {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  
  const avaliacaoMap = {};

  querySnapshot.forEach((doc) => {
    const review = doc.data();
    const { locationId, rating } = review;

    if (!avaliacaoMap[locationId]) {
      avaliacaoMap[locationId] = { totalRating: 0, count: 0 };
    }

    avaliacaoMap[locationId].totalRating += rating;
    avaliacaoMap[locationId].count += 1;
  });

  restaurantes.value = Object.keys(avaliacaoMap).map((locationId) => ({
    locationId,
    mediaAvaliacao: avaliacaoMap[locationId].totalRating / avaliacaoMap[locationId].count,
  }));
};

// Computar os top 10 restaurantes
const topRestaurantes = computed(() => {
  return restaurantes.value
    .sort((a, b) => b.mediaAvaliacao - a.mediaAvaliacao)
    .slice(0, 10);
});

onMounted(() => {
  loadRestaurantes();
});
</script>

<template>
<div id="restaurantes">
  <NavBar />
  <BarraDePesquisa/>
  <main>
    <div class="area-visual">
      <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Igreja%20Matriz%20de%20S%C3%A3o%20Miguel%20Arcanjo-%20Barreiros/462586071_2946239275543677_3059116117920897614_n.jpg?raw=true" alt="Matriz de São Miguel Arcanjo" />
        <div class="texto-banner">
          <div class="restaurantes">Restaurantes Mais Bem Avaliados</div>
        </div>
      </div>
    </div>
    <section class="restaurantes-avaliados">
      <div class="restaurante" v-for="restaurante in topRestaurantes" :key="restaurante.locationId">
        <router-link :to="{ name: 'RestauranteDetalhe', params: { id: restaurante.locationId } }">
          <img :src="`/path/to/restaurante/images/${restaurante.locationId}.jpg`" :alt="restaurante.locationId" />
          <div class="informacoes">
            <h3>{{ restaurante.locationId }}</h3>
            <p>Avaliação: {{ restaurante.mediaAvaliacao.toFixed(1) }} ⭐</p>
          </div>
        </router-link>
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

.restaurantes-avaliados {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.restaurante {
  width: 200px;
  margin: 10px;
  text-align: center;
}

.restaurante img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.informacoes {
  margin-top: 10px;
}

.informacoes h3 {
  font-size: 18px;
  font-weight: bold;
}

.informacoes p {
  margin: 5px 0;
}
footer {
  background-color: #2d5238;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
