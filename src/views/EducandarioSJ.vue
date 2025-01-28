<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Avaliacoes from "../components/Avaliacoes.vue"; // Importe o componente Avaliacoes

// Imagens
const images = [
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/RB210819006.jpeg", alt: "Image 1" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/RB210819031.jpeg", alt: "Image 2" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/RB210819033.jpeg", alt: "Image 3" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/RB210819036 (1).jpeg", alt: "Image 4" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/images.jpeg", alt: "Image 5" },
  { src: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/principal-educandario-sao-joaquim-770-x-452px---educandario-sao-joaquim-02.jpg", alt: "Image 6" },
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
      <h1>Educandário São Joaquim</h1>
    </div>

    <section class="informacao">
      <h2>Informações</h2>
      <p>Situado a cerca de 125 quilômetros do Recife, no município de Jaqueira, Mata Sul de Pernambuco, o Educandário São Joaquim guarda parte da memória histórica do estado. O prédio construído a pedido do imperador Dom Pedro I já foi fortaleza militar, orfanato, internato e hoje funciona como escola de ensino regular e complementar, mantida pela Santa Casa de Misericórdia do Recife. O educandário completa, nesta quinta-feira (22/08), 132 anos de história e serviço à população de Jaqueira e cidades vizinhas. Para comemorar, a instituição vai promover, no dia 29 deste mês, um aulão com o historiador Ricardo Antônio Guerra, além de apresentações culturais dos alunos e um tour para os visitantes. 

São 10 mil metros quadrados de área construída, rodeada por uma vasta área de vegetação de Mata Atlântica preservada. O local chama atenção pelo imponente prédio, que ainda mantém os ares imperiais. No térreo, as salas de aula acolhem cerca de 100 estudantes entre quatro e 11 anos, em horário integral. Já nos pavimentos superiores, o cenário é outro. É possível encontrar as marcas do passado, preservadas. Um charmoso hall leva aos aposentos onde a Princesa Isabel pernoitou, quando esteve na região, após a Guerra dos Cabanos (1832-1836). Piano, roupeiro, penteadeira, cama, lavabo com detalhes em azulejo português: entrar no espaço é uma viagem ao século 19.

Segundo o historiador Ricardo Antônio Guerra, que é autor do livro Jaqueira Minha Amada, Sua História e os Personagens que Te Construíram, a estrutura arquitetônica do prédio é em estilo toscano. Foi projetado e construído pelo arquiteto e frei capuchinho Francisco Maria de Vicência, o mesmo que projetou e construiu a Catedral da Penha, no bairro de São José, no Recife. A capela do São Joaquim é uma atração à parte. Foi projetada em 1872 pelo arquiteto Frei Francisco Maria de Vicência e possui, no teto, afrescos do italiano Francisco Biggio, pintor do estilo renascentista que morou em Jaqueira por um tempo.

Enquanto no passado a educação era rígida, baseada na disciplina imposta pelos frades capuchinhos, hoje o São Joaquim dá espaço a um ambiente criativo, que estimula a cidadania e a independência dos alunos. Além do ensino regular, são oferecidas, no contraturno, aulas de informática, inglês, artesanato, capoeira, educação física, educação religiosa, entre outras atividades. O local também conta com auditório, refeitório, vestiários, brinquedoteca, sala multimídia, quadra esportiva e emprega 32 pessoas. Por oferecer educação gratuita e de qualidade a crianças em situação de vulnerabilidade social, é bastante disputado por estudantes da Mata Sul. 

Em relação à estrutura, há 30 salas vazias atualmente, com capacidade para receber outros empreendimentos. “Por ser um prédio antigo, certamente precisa de manutenção, mas é um espaço enorme onde poderiam ser instaladas faculdades, cursos profissionalizantes, por exemplo. O valor desse lugar precisa ser resgatado e apresentado à iniciativa privada e à sociedade”, ressalta o historiador. O diretor Administrativo e de Patrimônio da Santa Casa Recife, Hélio Lacerda, confirma o interesse da instituição em fechar parcerias em benefício do São Joaquim: “A população precisa conhecer, defender e querer que isso tudo que temos aqui cresça e se perpetue”.

 

No térreo, são oferecidas aulas do Infantil ao 5º ano, entre outras atividades; já nos pavimentos superiores repousam relíquias datadas do século XIX.
Fonte: santacasarecife.org.br
</p>
    </section>

    <section class="localizacao">
      <h2>Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.430751677837!2d-35.8129724!3d-8.745478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700aedd0d44910d%3A0x44ec8063f225b712!2sEducand%C3%A1rio%20S%C3%A3o%20Joaquim%20%7C%20Santa%20Casa%20de%20Miseric%C3%B3rdia%20do%20Recife!5e0!3m2!1spt-BR!2sbr!4v1737422649735!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
