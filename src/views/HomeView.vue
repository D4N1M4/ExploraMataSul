<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
<div id="home">
<NavBar />
<BarraDePesquisa />
<main>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="../assets/jardimBotanico.jpg" alt="Imagem da região" />
        <div class="texto-banner">
        <div class="nossa-regiao">Nossa Região</div>
        </div>
    </div>
    </div>
<section class="informacoes">
    <div class="conteudo">
        <p>
            Considerando a divisão adotada pelo Instituto de Planejamento do Estado de Pernambuco (Condepe), o Programa de Apoio ao Desenvolvimento Sustentável da Zona da Mata de Pernambuco (Promata) subdivide a Zona da Mata em dez territórios de desenvolvimento, que contemplam os 43 municípios da mesorregião. Os territórios de desenvolvimento são ambientes onde se abrangem espaços comuns (município/comunidade), e existem potencialidades inter-relacionadas que possibilitam a implementação de ações políticas, econômicas, sociais e culturais de forma sistêmica e integrada, objetivando o seu desenvolvimento sustentável. Nesta divisão também considerada pelo Promata, a Mata Sul Pernambucana é composta pelos territórios 05, 06, 07, 08 e 09 mostrados na Figura 2, onde um ou mais centros urbanos de influência determina a dinâmica em cada território.
        </p>
        <p>
            Desse modo, o Promata tem atuado em todos os municípios da microrregião, embora a divisão do território da Secretaria de Desenvolvimento Territorial do Ministério do Desenvolvimento Agrário (MDA) contemple apenas 18 municípios da Zona da Mata Sul (Água Preta, Amaraji, Barreiros, Belém de Maria, Catende, Cortês, Gameleira, Jaqueira, Joaquim Nabuco, Maraial, Palmares, Primavera, Ribeirão, Rio Formoso, São Benedito do Sul, São José da Coroa Grande, Tamandaré e Xexéu), e um do Agreste (Bonito).
        </p>
    </div>
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Municípios Abrangidos</h2>
                    <p>
                        Na Mata Sul Pernambucana, você vai encontrar diversos locais históricos e culturais. Esses espaços são conhecidos por sua história e belezas naturais.
                        <br />
                    </p>
            </div>
            <img src="../assets/mapa.jpg" alt="Mapa da região" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Explore a Mata Sul Pernambucana</h2>
                    <p>
                        Na Mata Sul Pernambucana, você encontrará lugares incríveis para relaxar, como o Hotel Fazenda em Bonito. É um destino perfeito para descansar e aproveitar momentos únicos em família.
                        <br />
                        <router-link to="/HotelFazenda">Saiba mais</router-link>
                    </p>
            </div>
            <img src="../assets/hotelFazenda.jpeg" alt="Explorar a Mata Sul" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Conheça Nossa Cultura</h2>
                    <p>
                        A região da Mata Sul Pernambucana é um centro de cultura vibrante, com danças, culinária típica e festividades tradicionais.
                        <br />
                        <router-link to="/CasaDaCultura">Saiba mais</router-link>
                    </p>
            </div>
            <img src="../assets/casaDaCulturaPalmares.jpg" alt="Fundação Casa Da Cultura Hermilo Borba Filho" class="imagem-secao"/>
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Conhece algum lugar e não encontrou ele aqui?</h2>
                <p>
                    Você pode nos ajudar indicando locais incríveis na região! Sua sugestão pode aparecer em nosso site para ajudar outras pessoas a explorarem a Mata Sul Pernambucana.
                </p>
                <router-link to="/Indicar">Indicar</router-link>
              </div>
              
            <img src="../assets/tamandare.jpg" alt="Sugestão de local" class="imagem-secao"/>
        </div>
    </div>
</section>
</main>
</div>
<Footer />
</template>

<style>
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

.nossa-regiao {
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

.informacoes h2 {
  font-family: 'Playfair Display', sans-serif;
  color: #2d5238;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.informacoes p {
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
padding: 6px 22px;
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
h1, h2, h3, .nossa-regiao, .texto-lado h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

p, a, .texto-lado p {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}

</style>