<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

const lugares = [
  { nome: 'Cachoeira do Animoso', link: '/CachoeiraA', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira do Animoso- Amaraji/33068134Master.jpg' },
  { nome: "Cachoeira Bulha D'Água", link: '/CachoeiraBD', imagem: "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Bulha D'Água - Tamandaré/46674721Master.jpg" },
  { nome: 'Cachoeira Boa Vista', link: '/CachoeiraBV', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Boa Vista - São Benedito do Sul/Cachoeira-Boa-Vista-4.webp' },
  { nome: 'Cachoeira do Convento', link: '/CachoeiraC', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira do Convento - Primavera/2D080818047.webp' },
  { nome: "Cachoeira Poço da Índia", link: '/CachoeiraPI', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Poço da Índia - São Benedito do Sul/Cachoeira-Poco-da-India-2.webp' },
  { nome: 'Cachoeira Peri Peri', link: '/CachoeiraPP', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Peri Peri - São Benedito do Sul/1__mg_9136-17058192.webp' },
  { nome: 'Cachoeira Poço do Soldado', link: '/CachoeiraPS', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Poço do Soldado - São Benedito do Sul/Cachoeira-Poco-do-Soldado-3.webp' },
  { nome: 'Cachoeira Pé de Serra', link: '/CachoeiraPSerra', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Pé de Serra - Escada/20200119145755701753i.jpg' },
  { nome: 'Cachoeira Rio Morto', link: '/CachoeiraRM', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Rio Morto- Araraji/22082321.jpg' },
  { nome: "Cachoeira de Serro Azul", link: '/CachoeiraSerraAzul', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Lazer-20241218T011618Z-001/Lazer/Cachoeira de Cerra Azul - Palmares/2020-12-14 (1).jpg' },
  { nome: "Cachoeira do Urubu", link: '/CachoeiraU', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira do Urubu - Primavera/Cachoeira-do-Urubu-197.jpg' },
  { nome: "Cachoeira Véu da Noiva", link: '/CachoeiraVN', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Cachoeira Véu da Noiva - São Benedito do Sul/Cachoeira-Veu-da-Noiva-1-1.webp' },
  { nome: "Serra do Espelho", link: '/SerraDoEspelho', imagem: 'https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/roteiros-naturais/Serra da Prata - Catende/Imagem do WhatsApp de 2025-01-22 à(s) 23.10.30_80990c9b.jpg' },

];
</script>

<template>
  <div id="lugares">
    <NavBar />
    <main>
      <div class="texto-banner">
      <h1 class="titulo">Roteiros Naturais</h1>
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
