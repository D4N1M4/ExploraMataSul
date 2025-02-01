<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

const lugares = [
  { nome: 'Bananal Eco Park', link: '/BananalEcoPark', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Amaraji Eco Park - Amaraji/DSC_5210.JPG' },
  { nome: 'Beatriz Park', link: '/BeatrizPark', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Beatriz Park - Amaraji/63741114_2wYSg7MgePGvfe6UqXKY_sRHnYXBweA3AqwpLkiZN_M.jpg' },
  { nome: 'Banho Eco Parque Santo Amaro', link: '/EcoParkSA', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Eco Park Santo Amaro - Barreiros/IMG-20241206-WA0002.jpg' },
  { nome: 'Banho Mina da Pedra', link: '/MinaDaPedra', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Banho Mina da Pedra - Ribeirão/306265939_457749389719467_4938644550721951193_n.jpg' },
  { nome: "Hotel Fazenda", link: '/HotelFazenda', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Hotel%20Fazenda%20-%20Bonito/163755778.jpg' },
  { nome: 'Minas EcoPark', link: '/MinasEcoPark', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Minas ecopark - Ribeirão/73295854_113822193376789_5095507916748750848_n.jpg' },
  { nome: 'Orla de Palmares', link: '/OrlaPalmares', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Orla de Palmares/maxresdefault.jpg' },
  { nome: 'Park Serra Dourada', link: '/ParkSerraDourada', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Park Serra Dourada - Jaqueira/Imagem do WhatsApp de 2025-01-16 à(s) 17.42.36_281f146e.jpg' },
  { nome: 'Vitória Park Shopping', link: '/VitoriaPS', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Vitória Park Shopping - Vitória de Santo Antão/42646321_HsKpEGNUYEFXSnqsOpKBZRTmB4qyUe2ITRuJiM__EJg.jpg' },
  { nome: "Praça Nossa Senhora do Rosário", link: '/PracaNSR', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Praça Nossa Senhora do Rosário - Barreiros/44118644_1062479487253008_1445060112019357696_n.jpg' },
  { nome: "Praça Dr. Paulo Paranhos", link: '/PracaPP', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Praça Paulo Paranhos - Palmares/1462776_762212570458899_1952229222_o.jpg' },
];
</script>

<template>
  <div id="lugares">
    <NavBar />
    <main>
      <div class="texto-banner">
      <h1 class="titulo">Lugares De Lazer</h1>
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
