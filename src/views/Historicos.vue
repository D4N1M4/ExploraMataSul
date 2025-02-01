<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

const lugares = [
  { nome: 'Capela de São Benedito', link: '/CapelaSB', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Capela de São Benedito - Tamandaré/4bc9d8406ea5820d5565eef1c5d1fe56.jpg' },
  { nome: 'Fundação Casa da Cultura Hemílio Borba', link: '/CasaDaCultura', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Casa da Cultura Hemílio Borba-20250111T011930Z-001/Casa da Cultura Hemílio Borba/hqdefault.jpg' },
  { nome: 'Casarão Limoeiro Velho', link: '/CasaraoLV', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Casarão Limoeiro Velho - Escada/20200119151259433682a.jpeg' },
  { nome: "Cine Teatro Apolo", link: '/TeatroApolo', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Cine Teatro Apolo - Palmares/8.webp' },
  { nome: 'Paróquia de Nossa Senhora Da Conceição dos Montes', link: '/CatedralNSC', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Catedral de Nossa Senhora da Conceição - Palmares/bb1.jpg' },
  { nome: 'Educandário São Joaquim', link: '/EducandarioSJ', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/RB210819006.jpeg' },
  { nome: 'Engenho Morim', link: '/EngenhoMorim', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Engenho Morim - São José da Coroa Grande/WhatsApp-Image-2021-08-05-at-12.00.39-3.jpeg' },
  { nome: 'Forte de Santo Inácio de Loyola', link: '/Forte', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Forte - Tamandaré/1_dji_0866-18567785.webp' },
  { nome: 'Igreja de Nossa Senhora das Dores', link: '/IgrejaNSD', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Paróquia de Nossa Senhora da Dores - Maraial/a12b6999-08f2-4c68-b0c9-7533597d69df-57009-000020f1319f0497_file-1024x954.webp' },
  { nome: 'Igreja Nossa Senhora da Penha', link: '/IgrejaNSP', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja de Nossa Senhora da Penha - Gameleira/DSC07663.JPG' },
  { nome: 'Igreja Nossa Senhora do Rosário dos Homens Pretos', link: '/IgrejaNSR', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja Nossa Senhora do Rosário dos Homens Pretos - Rio Formoso/31248995193_e0d2ba3f9c_b.jpg' },
  { nome: 'Igreja de São Benedito', link: '/IgrejaSBSJ', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja de São Benedito - São José da Coroa Grande/Igreja-de-São-Benedito.webp' },
  { nome: 'Igreja Matriz de Nossa Senhora da Conceição', link: '/MatrizNSC', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Matriz de São José da Laje - Quipapá/28842793.jpg' },
  { nome: "Igreja Matriz de Sant'Ana", link: '/MatrizSA', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja Matriz de Sant_Ana - Catende/Imagem do WhatsApp de 2024-12-06 à(s) 12.02.17_fde40da4.jpg' },
  { nome: "Igreja Matriz de São José da Boa Esperança", link: '/MatrizSJBE', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Matriz de São José da Boa Esperança - Amaraji/63741114_fzcO2yfsLNnywxjRJEFnfnf7tjtDNY4CWLViqcd-tZg.jpg' },
  { nome: "Igreja Matriz de São José", link: '/MatrizSJCG', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja Matriz de São José - Chã Grande/31941020931_2183a78195_b.jpg' },
  { nome: "Igreja Matriz de São José", link: '/MatrizSJRF', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Matriz de São José - Rio Formoso/dsc_0004-679x450.jpg' },
  { nome: "Igreja Matriz de São Miguel Arcanjo", link: '/MatrizSMA', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Igreja Matriz de São Miguel Arcanjo- Barreiros/20160131_144959.jpg' },
  { nome: "Museu do Una", link: '/MuseuDoUna', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Museu do Una - São José da Coroa Grande/dddce12cce514ed36feac84c042d8f92.png' },
  { nome: "Museu Cícero Dias", link: '/MuseuE', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Museu - Escada/20210518212738832249o.jpg' },
  { nome: "Paróquia de São Francisco de Assis", link: '/ParoquiaSFA', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Paróquia de São Francisco de Assis - Cortês/20200130_161224.jpg' },
  { nome: "Paróquia de São José", link: '/ParoquiaSJ', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Paróquia de São José - Joaquim Nabuco/31941125031_8061b94dd9_b.jpg' },
  { nome: "Usina Catende", link: '/UsinaCatende', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Catende/307314024_536244475168951_3767427162553961362_n.jpg' },
  { nome: "Usina de Arte de Santa Terezinha", link: '/UsinaST', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Usina Santa terezinha - Água Preta/20210104180052231225a.jpg' }

];
</script>

<template>
  <div id="lugares">
    <NavBar />
    <main>
      <div class="texto-banner">
      <h1 class="titulo">Lugares Históricos</h1>
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
