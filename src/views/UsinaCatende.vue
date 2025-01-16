<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Catende/307314024_536244475168951_3767427162553961362_n.jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Catende/311467291_549074987219233_7225069439702529538_n.jpg", alt: "Image 2" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Catende/usina-catende.webp", alt: "Image 3" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Catende/whatsapp-image-2022-03-28-at-130209.jpg", alt: "Image 4" },
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
      <h1>Usina Catende</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>Está situada no município de Catende, na margem esquerda do rio Pirangi, numa altitude
de 153 metros. Fundada, em 1890, com o nome de usina Correia da Silva, em homenagem
ao então vice-governador do Estado. Foi originalmente construída pelo inglês Carlos Sinden
e seu sogro Felipe Paes de Oliveira. Esse nome, no entanto nunca se consagrou, sendo a
usina sempre chamada de Catende.
Em 1892, passou a ser usina Catende, construída no antigo engenho Milagre da Conceição,
fundado em 1829.
A Usina não teve sucesso, sendo entregue a credores, entre os quais o Banco de
Pernambuco. Houve várias tentativas de exploração, mas sem resultados, até que, em
1907, foi adquirida pela firma Mendes Lima & Cia, que a reformou (1912), aumentando a
sua capacidade de moagem de 200 para 1000 toneladas diárias.
Os proprietários, no entanto, eram comerciantes e não industriais. Interessava-lhes vender
o açúcar e não fabricá-lo. A usina foi novamente vendida, dessa vez para a firma Costa,
Oliveira & Cia.
Com a saída dos demais sócios, em 1927, a usina passou a ser propriedade do coronel
Antônio Ferreira da Costa Azevedo, conhecido pelo apelido de Seu Tenente, que
revolucionou toda a zona canavieira da mata sul de Pernambuco, com seu sistema técnico
e administrativo, servindo de exemplo para diversas usinas da região.
Em 1929, a usina era considerada a maior do Brasil em produção e capacidade. Possuía 43
propriedades agrícolas, uma via férrea de 140 quilômetros, 11 locomotivas e 266 vagões. O
transporte da cana e seus produtos era feito pela Great Western.
Tinha capacidade para processar 1.500 toneladas de cana e fabricar 4.000 litros de álcool
em 22 horas. Na época da moagem trabalhavam na fábrica cerca de 700 operários.
Possuía uma vila operária com 200 casas, uma Caixa de Beneficência e mantinha uma
escola com freqüência média anual de 50 alunos.
Quando morreu, em 1950, Antônio Ferreira da Costa Azevedo, o Seu Tenente, deixou a
usina Catende com uma capacidade industrial para fabricação de 1 milhão de sacos de
açúcar, uma destilaria de álcool anidro (a primeira do país), 36 mil hectares de terra, 165
quilômetros de estradas de ferro e 82 engenhos de cana.
Seu filho mais velho, João Azevedo, assumiu a direção da usina. Durante a sua gestão, a
usina Catende absorveu a usina Pirangi e seus dez engenhos.
Em 1973, a usina Catende foi adquirida por um grupo formado por Rui Carneiro da Cunha
(co-proprietário da usina Massauassu), Alfredo Maurício de Lima Fernandes e Mário Pinto
Campos. Este último, alguns anos depois, vendeu sua parte para Inaldo Pereira Guerra,
comerciante de açúcar no Recife e criador de gado em Gravatá.
Entre 1922 e 1993 a usina Catende mudou sua razão social para Companhia Industrial do
Nordeste Brasileiro.
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2210228381523!2d-35.7194596!3d-8.6705191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a7eb2e3ba79f%3A0x9c4d7bbc444a979f!2sUsina%20Catende!5e0!3m2!1spt-BR!2sbr!4v1736986977505!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
