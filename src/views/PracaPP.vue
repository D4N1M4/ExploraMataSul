<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Praça Paulo Paranhos - Palmares/1462776_762212570458899_1952229222_o.jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Praça Paulo Paranhos - Palmares/WhatsApp Image 2019-06-09 at 10.15.33 (1).jpeg", alt: "Image 2" },
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
      <h1>Praça Dr. Paulo Paranhos</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>Entre os anos de 1864 a 1891, era um espaço que ficava ao lado da Capela de Nossa Senhora dos Montes. No ano de 1892, foi comprado pela municipalidade para a construção do Mercado, visto que o Largo da Feira, na Praça do Maurity, não estava mais servindo para tal propósito e o comércio era muito intenso. O local pertencia ao Coronel Luiz Amaro de França Pereira.

O primeiro Gestor Público dos Palmares, o Dr. Leopoldo Marinho de Paula Lins, logo no início de sua administração, começou os trabalhos de construção, lançando a pedra fundamental do Mercado Público da Cidade dos Palmares no dia 2 de janeiro de 1893.

O prédio era composto por três casas. As laterais eram divididas em 60 compartimentos, sendo as da direita destinadas as fazendas e miudezas e as da esquerda a molhados e açougue. A do centro era um vasto armazém onde eram colocados os vendedores de farinha, legumes, frutas entre outros.

Serviu aos habitantes e a visitantes da região por mais de 90 décadas, até que um projeto apresentado pelo Prefeito Luiz Portela, entre os anos de 1986 e 1987, para a construção da Praça Dr. Paulo Paranhos, demoliu o mercado, pois o projeto foi encaminhando para votação popular e aprovado. A demolição foi causa de protesto dos Membros Fundadores da Casa da Cultura, que na época tinha planos para a criação de um espaço cultural e artístico no mesmo local.

Após a demolição, a construção da praça teve andamento, sendo inaugurada na década de 1990, pelo então Prefeito Francisco de Assis Rodrigues (Chiquinho). A Praça Dr. Paulo Paranhos é um dos pontos mais importantes da cidade dos Palmares, não só pelos traços de sua arquitetura, mas pelos fatos históricos que se passaram em volta da mesma quando ainda era um caminho de viajantes e paragem para o descanso, antes mesmo da construção da capelinha dos Montes, em 1864.

PREFEITURA DO MUNICÍPIO DOS PALMARES
Prefeito Júnior Melo

FUNDAÇÃO CASA DA CULTURA HERMILO BORBA FILHO
Presidente Nonato Barakah

Fonte:

CENTRO DE REGISTRO E DOCUMENTAÇÃO GIVANILTON MENDES
Diretor Ademir Basílio
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.059228431813!2d-35.5901321!3d-8.6859179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a06b069c4dcf%3A0x4ad7a5ad7e923b7a!2sPr%C3%A7.%20Dr.%20Paulo%20Paranhos%20-%20Palmares%2C%20PE%2C%2055540-000!5e0!3m2!1spt-BR!2sbr!4v1736988902053!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
