<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
  <div id="lazer">
    <NavBar />
    <div id="home">
<NavBar />
<BarraDePesquisa/>
<main>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Lazer-20241218T011618Z-001/Lazer/Banho%20Mina%20da%20Pedra%20-%20Ribeir%C3%A3o/306265939_457749389719467_4938644550721951193_n.jpg?raw=true" alt="Mina da Pedra" />
        <div class="texto-banner">
        <div class="lazer">Lazer</div>
        </div>
    </div>
    </div>
    <section class="informacoes">
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Cachoeira de Serra Azul</h2>
                    <p>
                      Localizado no distrito de Palmares, local é muito frequentado por moradores que buscam se refrescar no tempo quente, é conhecido por fazer parte da antiga Usina desativada de Serra Azul.            
                    <br />
                    <router-link to="/CachoeiraSerraAzul">Saiba mais</router-link>
                  </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Lazer-20241218T011618Z-001/Lazer/Cachoeira%20de%20Cerra%20Azul%20-%20Palmares/2024-04-29.jpg?raw=true" alt="Cachoeira de Serra Azul" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Minas EcoPark</h2>
                    <p>
                      Localizado na cidade de Ribeirão, é um local muito procurado, principamente no verão, um local que promete diversão e relaxamento.
                        <br />
                        <router-link to="/MinasEcoPark">Saiba mais</router-link>
                      </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Lazer-20241218T011618Z-001/Lazer/Minas%20ecopark%20-%20Ribeir%C3%A3o/73295854_113822193376789_5095507916748750848_n.jpg?raw=true" alt="Minas EcoPark" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Orla de Palmares</h2>
                    <p>
                      Orla localizada a beira do rio Una na cidade de Palmares, é um local de lazer, onde oferece brinquedos publicos, máquinas de praticar exercício e locais para alimmentação, com uma ciclovia e uma área para caminhada de pedestres.                         
                        <br />
                        <router-link to="/OrlaPalmares">Saiba mais</router-link>
                    </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Lazer-20241218T011618Z-001/Lazer/Orla%20de%20Palmares/maxresdefault.jpg?raw=true" alt="Orla de Palmares" class="imagem-secao"/>
        </div>
        <div class="ver-todos">
          <router-link to="/Lazeres">Ver Todos</router-link>
        </div>
    </div>
</section>
</main>
</div>
    <Footer />
  </div>
</template>

<style scoped>
/* Resets e Elementos Globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
}

/* Estrutura Principal */
#home {
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  width: 100%;
  flex: 1;
}

/* Área Visual */
.area-visual {
  padding-top: 80px;
  padding-bottom: 60px;
  color: #fff;
  position: relative;
}

.imagem-banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.texto-banner {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.lazer {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px / 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: right;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Informações */
.informacoes {
  background-color: #e7f6ec;
  padding: 40px 20px;
}

.informacoes .conteudo {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.informacoes img {
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.informacoes h2 {
  font-family: 'Playfair Display', serif;
  color: #2d5238;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.informacoes p {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 1rem;
  color: #333;
  text-align: justify;
}

/* Blocos de Informações */
.blocos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
}

.bloco {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: transparent;
}

.bloco:nth-child(even) {
  flex-direction: row-reverse;
}

.bloco img {
  width: 35%;
  object-fit: cover;
  height: 100%;
  margin: 10px;
  border-radius: 10px;
}

.bloco .texto-lado {
  width: 60%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bloco .texto-lado h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2d5238;
}

.bloco .texto-lado p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
}

.bloco .texto-lado a {
  background: transparent;
  color: #2d5238;
  padding: 6px 12px;
  border: 2px solid #2d5238;
  border-radius: 30px;
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.bloco .texto-lado a:hover {
  background: linear-gradient(135deg, #4CAF50, #2d5238);
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .pesquisa {
    top: 80px;
    width: 90%;
    max-width: none;
    padding: 10px;
  }

  .pesquisa input {
    padding: 12px;
    font-size: 0.9rem;
  }

  .bloco {
    flex-direction: column;
    height: auto;
  }

  .bloco img {
    width: 100%;
    height: auto;
  }

  .bloco .texto-lado {
    width: 100%;
  }
}
/* Rodapé */
footer {
  background-color: #2d5238;
  color: white;
  text-align: center;
  padding: 20px;
}

/* Fontes Globais */
h1, h2, h3, .lazer, .texto-lado h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

p, a, .texto-lado p {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}

.ver-todos {
    display: flex; /* Corrigido */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 100%; /* Ocupa toda a largura */
    margin-top: 10px; /* Ajusta espaçamento */
    margin: 10px 0;
}

.ver-todos a {
    background: #2d5238;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.ver-todos a:hover {
    background: linear-gradient(135deg, #4CAF50, #2d5238);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

</style>
