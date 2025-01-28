<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Santa terezinha - Água Preta/20210104180052231225a.jpg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Santa terezinha - Água Preta/mobile.jpg", alt: "Image 2" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Santa terezinha - Água Preta/usina-de-arte-moendo (1).jpg", alt: "Image 3" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Santa terezinha - Água Preta/usina-de-arte-moendo.jpg", alt: "Image 4" },
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
      <h1>Usina de Arte de Santa Terezinha</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>A partir da combinação de um museu de arte contemporânea ao ar livre instalado em meio a um
jardim botânico, a Usina de Arte tem sido, desde 2015, um instrumento de transformação
socioeconômica para mais de 6 mil pessoas que residem em seu entorno, a partir de iniciativas
que irrigam educação, cultura, resiliência ambiental, empreendedorismo e autoestima na vila de
Santa Terezinha.
Comunidade que recebe o mesmo nome da Usina Santa Terezinha, cuja operação começou em
1929, sob a condução da família Pessôa de Queiroz. Em menos de 20 anos de fundação, o
empreendimento alcançou o posto de maior produtora de álcool e açúcar do Brasil nos anos 1950,
contando com uma estrutura que reunia hangar, mais de 100km de estradas de ferro, 21
locomotivas e mais de uma centena de vagões para a logística no negócio sucroalcooleiro. Em
1998, atingida por grave crise que assolou outros empreendimentos do tipo na região, a usina
encerrou suas atividades de moagem.
Passados quase 75 anos do seu apogeu, o espaço localizado no município de Água Preta, na Zona
da Mata Sul de Pernambuco, assiste a outro ponto alto de sua trajetória - e que não passa mais
pela transformação da cana-sacarina em álcool e açúcar. Hoje, as safras da Usina de Arte
entregam uma nova visão cultural, socioeducativa e sustentável para o Nordeste brasileiro. Um
instrumento de renovação a partir da ruptura com o passado, construindo o futuro a partir dos
férteis alicerces da cultura, educação e meio ambiente.
Em meio a um perene trabalho de reflorestamento (até o final de 2022, 35 hectares receberam
cerca de 10 mil plantas de mais de 600 espécies), o Parque Artístico-Botânico é apenas a parte
mais visível, e visitada, de uma ampla rede de apoio à vila de Santa Terezinha e aos municípios de
Água Preta (PE) e Campestre (AL). São exemplos a escola de música, a biblioteca e centro de
conhecimento público com potente acervo literário, FabLab com terminais de computadores
conectados à internet, impressoras em 3D e cortadora a laser para projetos da comunidade, além
de parceria com as unidades escolares no apoio de novas práticas pedagógicas.
Fonte: https://www.usinadearte.org/a-usina
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4951444159256!2d-35.5708122!3d-8.833406399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7009f31fc64e0fd%3A0xe770d138888ed099!2sUsina%20de%20Arte!5e0!3m2!1spt-BR!2sbr!4v1736987233602!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  margin: 100px auto 50px auto;
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
