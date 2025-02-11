<script setup>
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
import { computed, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import RestauranteCard from '../components/RestauranteCard.vue';
import FirestoreDAO from '../services/FirestoreDAO';
const router = useRouter();

const restaurantes = ref([]);
const busca = ref("");
const currentPage = ref(1);
const pageSize = ref(10);
const restauranteDAO= new FirestoreDAO();

const restaurantesFiltrados = computed(() => {
  return restaurantes.value.filter(restaurante =>
    restaurante.nome.toLowerCase().includes(busca.value.toLowerCase())
  );
});

const totalPages = computed(() => Math.ceil(restaurantesFiltrados.value.length / pageSize.value));

const paginatedRestaurantes = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return restaurantesFiltrados.value.slice(start, end);
});

const pagesToShow = computed(() => {
  const startPage = Math.max(currentPage.value - 1, 1);
  const endPage = Math.min(currentPage.value + 1, totalPages.value);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});

const getRestaurantes = async () => {
  try {
    restaurantes.value = await restauranteDAO.getAll();
    console.log("Restaurantes carregados:", restaurantes.value);
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
  }
};

const detalharRestaurante = (id) => {
  router.push({ name: 'RestauranteDetalhe', params: { id } });
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

onMounted(() => {
  getRestaurantes();
});
  </script>

<template>
<div id="restaurantes">
  <NavBar />
  <BarraDePesquisa/>
  <main>
    <div class="area-visual">
      <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021304_Instagram.jpg?raw=true" />
        <div class="texto-banner">
          <div class="restaurantes">Restaurantes Mais Bem Avaliados</div>
        </div>
      </div>
    </div>
    <section class="restaurantes-section">
        <div class="card-grid">
          <RestauranteCard
            v-for="restaurante in paginatedRestaurantes"
            :key="restaurante.id"
            :nome="restaurante.nome"
            :titulo="restaurante.nome"
            :categoria="restaurante.categoria"
            :descricao="restaurante.informacoes"
            :imagens="restaurante.imagens"
            @click="detalharRestaurante(restaurante.id)"
          />
        </div>
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
          <button
            v-for="page in pagesToShow"
            :key="page"
            @click="changePage(page)"
            :class="{ active: currentPage === page }"
          >
            {{ page }}
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages">Próximo</button>
        </div>
      </section>
  </main>
  <Footer/>
</div>
</template>

<style scoped>

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

.restaurantes-section {
  padding: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 20px;
  justify-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button.active,
.pagination button:hover {
  background-color: #ccc;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
footer {
  background-color: #2d5238;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
