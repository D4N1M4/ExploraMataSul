<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
  <div id="roteirosNaturais">
    <NavBar />
<main>
<BarraDePesquisa/>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20-%20S%C3%A3o%20Benedito%20do%20Sul/cachoeira.webp" />
        <div class="texto-banner">
        <div class="roteirosNaturais">Roteiros Naturais</div>
        </div>
    </div>
    </div>
    <section class="informacoes">
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Cachoeira da Boa Vista</h2>
                    <p>
                      Para quem gosta do contato com a natureza, São Benedito do Sul é uma excelente pedida. Localizada na Mata Sul, pertinho do Recife, a 174 km, oferece muitas trilhas, banhos cachoeiras, visita a engenhos antigos e, a sua área urbana abriga edificações históricas, que o turista pode conhecer num city tour a pé por suas ruas. 
                    <br />
                    <router-link to="/CachoeiraBV">Saiba mais</router-link>
                    </p>
            </div>
            <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira Boa Vista - São Benedito do Sul/Cachoeira-Boa-Vista-4.webp" class="imagem-secao"/>
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Cachoeira Bulha D'Água</h2>
                    <p>
                      A diversidade da natureza proporciona, a quem visita Tamandaré, um encontro inesquecível com a cachoeira Bulha D'água. A cachoeira está encravada numa área de preservação da Mata Atlântica nos limites da Reserva Biológica de Saltinho e possui altura aproximada de 10 metros e largura de 15 metros. A cachoeira é muito procurada pelos visitantes, e suas águas mantém uma temperatura que nunca ultrapassa os 15ºC. Ela já foi uma grande fonte de água mineral, e hoje ainda preserva águas límpidas com três quedas fortes que atraem o turista que deseja ter um contato cada vez mais intenso com a natureza.
                        <br />
                        <router-link to="/CachoeiraBD">Saiba mais</router-link>
                      </p>
            </div>
            <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira Bulha D'Água - Tamandaré/46674721Master.jpg " class="imagem-secao"/>
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Cachoeira Peri Peri</h2>
                    <p>                     
                      A caminhada da Peri-Peri é simples e acessível, com percurso de 480 metros, considerada de nível leve, com tempo de caminhada de 10 minutos, chegando a Cachoeira Peri-Peri. Essa é moleza demais. Andar por apenas 10 minutos e cair nas águas maravilhosas da cachoeira é TOP.
                      <br />
                      <router-link to="/CachoeiraPP">Saiba mais</router-link>
                    </p>
            </div>
            <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira Peri Peri - São Benedito do Sul/1__mg_9136-17058192.webp" class="imagem-secao"/>
        </div>
    </div>
</section>
</main>
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

.roteirosNaturais {
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

/* Barra de Pesquisa */
.pesquisa {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px;
  z-index: 10;
  background-color: rgba(182, 252, 222, 0.8);
  border-radius: 25px;
  padding: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pesquisa input {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
h1, h2, h3, .roteirosNaturais, .texto-lado h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

p, a, .texto-lado p {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}
</style>