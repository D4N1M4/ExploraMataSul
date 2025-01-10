<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/163755778.jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/280382154.jpg", alt: "Image 2" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/468684956.jpg", alt: "Image 3" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/82779947.jpg", alt: "Image 4" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/82786129.jpg", alt: "Image 5" },
];

// Configurações de paginação
const currentPage = ref(1);
const itemsPerPage = 1;

// Número total de páginas
const totalPages = computed(() => Math.ceil(images.length / itemsPerPage));

// Imagens da página atual
const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return images.slice(start, end);
});

// Navegação entre páginas
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div>
    <NavBar />
    <div id="gallery">
      <!-- Exibe as imagens da página atual -->
      <div class="image" v-for="(image, index) in paginatedImages" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <!-- Controles de paginação -->
    <div id="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        Anterior
      </button>
      <span
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </span>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Próximo
      </button>
    </div>
    <div class="titulo">
      <h1>Hotel Fazenda</h1>
      <p>O Hotel Fazenda Pedra está rodeado por vales verdes e pela floresta exótica.</p>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>
        O Hotel Fazenda Pedra está rodeado por vales verdes e pela floresta exótica. O Do Rodeadouro está localizado na cidade campestre de Bonito. Gratuito. O Wi-Fi está disponível. Acesso e TVs de tela plana são fornecidos. As atividades de aventura incluem passeios a cavalo, trilhas a pé e banhos de cachoeira. Você pode passear pelo toboágua emocionante. As crianças podem usufruir do salão de jogos e do parquinho infantil no local. O Hotel Fazenda Engenho oferece quartos decorados de forma simples, com ventilador de teto, DVD player e frigobar. Você pode relaxar e assistir ao pôr do sol a partir da varanda térrea privativa, que oferece uma área de estar e rede. A famosa Cachoeira Véu da Noiva fica a apenas 3 km de distância e a Cachoeira Mágico fica a 9 km de distância. A estação rodoviária mais próxima fica a 7 km de distância e oferece fácil acesso de e para o hotel.
      </p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.157124739687!2d-35.74517056345941!3d-8.524918747623179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa1064af2d72f5%3A0xec41ac6a82557e84!2sHotel%20Fazenda%20Engenho%20Pedra%20Do%20Rodeadouro!5e1!3m2!1spt-BR!2sbr!4v1736465877384!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <!-- Aqui está o componente Avaliacoes -->
    <Avaliacoes />

    <Footer />
  </div>
</template>

<style scoped>
/* Estilo da galeria */
#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 60px;
}

.image img {
  width: 700px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilo da paginação */
#pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#pagination button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #386e42;
  color: white;
  cursor: pointer;
}

#pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

#pagination span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  cursor: pointer;
  background-color: white;
}

#pagination span.active {
  background-color: #386e42;
  color: white;
  font-weight: bold;
}
</style>
