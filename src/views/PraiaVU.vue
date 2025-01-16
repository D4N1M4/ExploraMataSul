<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Várzea do Una - São José da Coroa Grande/maxresdefault (6).jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Várzea do Una - São José da Coroa Grande/pe-sao-jose-da-coroa-grande-praia-da-varzea-do-una-020.jpg", alt: "Image 2" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Várzea do Una - São José da Coroa Grande/photo0jpg.jpg", alt: "Image 3" },
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
      <h1>Praia da Várzea do Una</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>Considerada uma das maiores da cidade, essa bela praia é conhecida também por sua tranquilidade e clima agradável. Não costuma ser muito frequentada por turistas, pois a maioria dos que visitam a cidade ainda não conhecem o lugar. Outra fator é seu difícil acesso, fazendo com que moradores próximos, pescadores e alguns surfistas sejam seus principais visitantes. Conta com uma larga faixa de areia dourada e grossa, o mar é agitado, com boas ondas e águas transparentes. Costuma atrair diversos surfistas, que aproveitam as ondas para praticar algumas manobras. Nessa praia, o visitante também tem a opção de tomar banho do Rio Una, que em certa parte vai de encontro ao mar. É uma boa opção para os que precisam relaxar e admiram o contato com a natureza. É importante levar alimentos e bebidas para que não aconteçam imprevistos. Fonte: Praias-360
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7884.868011646849!2d-35.14241595!3d-8.839122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c963fd2c90b%3A0xdf56b060c530c8f2!2sV%C3%A1rzea%20do%20Una%2C%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande%20-%20PE%2C%2055565-000!5e0!3m2!1spt-BR!2sbr!4v1736990185283!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <!-- Aqui está o componente Avaliacoes -->
    <Avaliacoes />

    <Footer />
  </div>
</template>

<style scoped>
/* Estilo geral */
body {
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
  background-color: #f7f7f7;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #2c3e50;
}

p, a {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
  color: #4f4f4f;
}

/* Galeria de imagens */
#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
}

.image img {
  width: 700px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.image img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

/* Estilo de paginação */
#pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

#pagination button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #367243;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

#pagination button:hover {
  background-color: #03ff4e;
}

#pagination button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

#pagination span {
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: all 0.3s ease;
}

#pagination span:hover {
  background-color: #03ff4e;
  color: #fff;
  font-weight: bold;
}

#pagination span.active {
  background-color: #03ff4e;
  color: #fff;
  font-weight: bold;
}

/* Estilo para títulos e texto */
.titulo h1 {
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
  color: #2d5238;
}

.titulo p {
  text-align: center;
  font-size: 1.2rem;
  margin: 10px 0 30px;
  color: #525a5b;
}

.informacao, .localizacao {
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.informacao h2, .localizacao h2 {
  margin-bottom: 15px;
  color: #2d5238;
}

.informacao p, .localizacao p {
  color: 525a5b;
  text-align: justify;
}

/* Estilo do iframe */
.localizacao iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .image img {
    width: 100%;
  }

  .titulo h1 {
    font-size: 2rem;
  }

  .titulo p {
    font-size: 1rem;
  }

  #gallery {
    flex-direction: column;
  }

  #pagination {
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>
