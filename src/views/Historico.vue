<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
  <div id="historico">
    <NavBar />
    <div id="home">
<NavBar />
<BarraDePesquisa/>
<main>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Igreja%20Matriz%20de%20S%C3%A3o%20Miguel%20Arcanjo-%20Barreiros/462586071_2946239275543677_3059116117920897614_n.jpg?raw=true" alt="Matriz de São Miguel Arcanjo" />
        <div class="texto-banner">
        <div class="historico">Pontos Históricos</div>
        </div>
    </div>
    </div>
    <section class="informacoes">
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Museu do Una</h2>
                    <p>
                      Localizado no distrito de Várzea do Una, foi fundado em 22 de abril de 2000 por Bertrando Bernardino, com o objetivo de servir de abrigo e preservação da cultura regional e meio ambiente.
                    <br />
                    <router-link to="/MuseuDoUna">Saiba mais</router-link>
                  </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Museu%20do%20Una%20-%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande/museu-do-una%20(1).jpg?raw=true" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Engenho Morim</h2>
                    <p>
                      Fundado no século XVIII, pela Baronesa de Gindahy, e está localizado
                      a cerca de 6 km da rodovia PE-060.
                        <br />
                        <router-link to="/EngenhoMorim">Saiba mais</router-link>
                    </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Engenho%20Morim%20-%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande/WhatsApp-Image-2021-08-05-at-12.00.39.jpeg?raw=true" alt="Engenho Morim" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Cine Teatro Apolo</h2>
                    <p>
                      O Cine-Teatro Apollo foi inaugurado em 1914, construído com o propósito de atender às atividades culturais, que na época eram desenvolvidas e ganhavam espaço na sociedade local, vindo a representar para a região um bem cultural que poucas cidades do interior possuíam.
                        <br />
                        <router-link to="/TeatroApolo">Saiba mais</router-link>
                    </p>
            </div>
            <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/Hist%C3%B3ricos-20241218T011238Z-001/Hist%C3%B3ricos/Cine%20Teatro%20Apolo%20-%20Palmares/fachada_cine_teatro.webp" alt="Cine Teatro Apolo" class="imagem-secao"/>
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

.historico {
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

@media (max-width: 480px) {
  .pesquisa {
    top: 60px;
    width: 95%;
    border-radius: 15px;
  }

  .pesquisa input {
    padding: 10px;
    font-size: 0.85rem;
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
h1, h2, h3, .historico, .texto-lado h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

p, a, .texto-lado p {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}

</style>
