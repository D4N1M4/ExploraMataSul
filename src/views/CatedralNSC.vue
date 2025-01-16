<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Catedral de Nossa Senhora da Conceição - Palmares/bb1.jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos-20241218T011238Z-001/Históricos/Catedral de Nossa Senhora da Conceição - Palmares/whatsapp-image-2020-12-30-at-17-23-47-500x492.jpeg", alt: "Image 2" },
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
      <h1>Paróquia de Nossa Senhora da Conceição dos Montes</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>A 1ª Capela, foi construída em fins de janeiro de 1864 pelos Missionários Apostólicos Capuchinhos Frei Fidelis D’Ávila e Frei Casemiro de Militello. No dia 04 de fevereiro de 1864, D. Germana Francisca Xavier, faz a doação das terras da Capela e do terreno ao lado para a construção do cemitério.

No dia 28 de maio de 1868, a Capela do Povoado, recebe o título de Freguesia de Nª Sª da Conceição dos Montes. No dia 13 de dezembro de 1869, é nomeado canonicamente, pelo Governo do Bispado de Pernambuco, o Vigário Encomendado, chegando no povoado no dia 15 de dezembro de 1869, o Reverendo Padre Floriano de Queiroz Coutinho, de 27 anos de idade, vindo da Freguesia de Escada, para assumir a dos Montes.

Entre os anos de 1864 a 1872, a pequena Capela, passou por algumas reformas. Em princípios de janeiro de 1873, começa uma campanha, para a construção da Igreja Matriz. Em 8 meses, foi construída o Corpo da Igreja, inaugurada no dia 23 de agosto de 1873.

Entre os anos de 1873 a 1890, a mesma, não sofreu alteração de reformas. Com a chegada o 1º Vigário Colado da Freguesia, o Padre Sebastião Bastos de Almeida Pessoa, um dos Fundadores do Jornal A Notícia de Palmares, começa uma campanha para a construção das Torres e das Laterais da Igreja Matriz.

No centenário da Comarca dos Palmares, a igreja Matriz da Cidade dos Palmares, passa a ser, em 1962, a Sede da Diocese da Paróquia dos Palmares, sendo empossado o seu 1º Bispo, D. Acácio Rodrigues Alves.

Nestes 150 anos da construção definitiva da Igreja Matriz de Nossa Senhora da Conceição dos Montes – Espaço Sagrado para Todos Nós, foi palco de muitas histórias, tendo recebido inúmeros visitantes ilustres, como a do Príncipe Imperial, o Conde D’Eu, de Bispos, de Barões e Baronesas, de Conselheiros Imperiais, de Casamentos Memoráveis, das Eleições Políticas Locais, em tempos imperiais, de Procissões inesquecíveis dentre tantos outros acontecimentos, que marcaram as páginas da nossa história!

O Prédio da Matriz de Nossa Senhora da Conceição dos Montes, é um Patrimônio Histórico Cultural, Artístico e Religioso do Município dos Palmares.

Fonte:
CENTRO DE REGISTRO E DOCUMENTAÇÃO GIVANILTON MENDES
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31552.51220637573!2d-35.6072667604492!3d-8.685461699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a06b032388e9%3A0x651f23e41b3144a7!2sPar%C3%B3quia%20de%20Nossa%20Senhora%20da%20Concei%C3%A7%C3%A3o%20dos%20Montes!5e0!3m2!1spt-BR!2sbr!4v1736985633862!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
