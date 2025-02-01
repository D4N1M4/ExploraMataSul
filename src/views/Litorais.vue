<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

const lugares = [
  { nome: 'Ilha de Santo Aleixo', link: '/IlhaSantoAleixo', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Ilha de Santo Aleixo - Sirinhaém/0.jpg' },
  { nome: 'Praia Barra de Sirinhaém', link: '/PraiaBarraS', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia Barra de Sirinhaém - Sirinhaém/Jobosco_Praia_dos_carneiros_02_-_Pernambuco-1024x576.jpg' },
  { nome: 'Praia Porto de Nassau', link: '/PraiaBarreiros', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia Porto de Nassau - Barreiros/hq720.jpg' },
  { nome: 'Praia dos Carneiros', link: '/PraiaCarneiros', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia dos Carneiros - Tamandaré/capa-praia-dos-carneiros.avif' },
  { nome: "Praia da Pedra", link: '/PraiaDaPedra', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Pedra - Rio Formoso/13237706383_8fe2704627_b.jpg' },
  { nome: 'Praia de São José da Coroa Grande', link: '/PraiaDeSaoJoseDaCoroaGrande', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Coroa Grande - São José da Coroa Grande/Sao-Jose-da-Coroa-Grande-Capa-1.jpg' },
  { nome: 'Praia de Gravatá', link: '/PraiaGravata', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia do Gravatá - São José da Coroa Grande/20210526_101744-1024x576.jpg' },
  { nome: 'Praia de Guadalupe', link: '/PraiaGuadalupe', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia de Guadalupe - Sirinhaém/Foto-divulgacao_20241028_121254_0000.webp' },
  { nome: 'Praia de Guaiamum', link: '/PraiaGuaiamum', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia de Guaiamum - Sirinhaém/2017-02-24.jpg' },
  { nome: "Praia Porto de Nassau", link: '/PraiaPN', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia Porto de Nassau - Barreiros/hq720.jpg' },
  { nome: "Praia da Várzea do Una", link: '/PraiaVU', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Litoral-20241218T011313Z-001/Litoral/Praia da Várzea do Una - São José da Coroa Grande/maxresdefault (6).jpg' },
];
</script>

<template>
  <div id="lugares">
    <NavBar />
    <main>
      <div class="texto-banner">
      <h1 class="titulo">Litorais</h1>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="lugar in lugares" :key="lugar.nome">
          <img :src="lugar.imagem" :alt="lugar.nome" class="imagem-lugar" />
          <h2>{{ lugar.nome }}</h2>
          <router-link :to="lugar.link" class="botao">Saiba mais</router-link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#lugares {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que a altura mínima da página seja a altura da tela */
  margin: 0;
}

.grid-container {
  display: grid;
  margin-top: 150px;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra o botão para o final */
  align-items: center;
  height: 100%; /* Mantém a altura consistente */
}

.imagem-lugar {
  width: 100%;
  height: 200px; /* Defina a altura desejada */
  object-fit: cover; /* Garante que todas as imagens fiquem uniformes sem distorção */
  border-radius: 10px;
}

.botao {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 15px;
  background: #2d5238;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
}

.botao:hover {
    background: linear-gradient(135deg, #4CAF50, #2d5238);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.texto-banner {
  position: absolute;
  top: 30px; /* Move o título para o topo */
  left: 50%;
  margin: 50px 0;
  transform: translateX(-50%);
  padding: 10px 10px;
  font-weight: bold;
  text-align: center;
}


.titulo {
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #000;
  padding: 15px;
  text-align: center;
  font-size: 2rem;  
  border-radius: 20px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

main {
  flex: 1; /* Faz com que o conteúdo principal ocupe o espaço restante da tela */
}

footer {
  margin-top: auto; /* Isso empurra o footer para o final da página */
}
</style>
