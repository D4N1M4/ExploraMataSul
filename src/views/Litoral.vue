<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
  <div id="litoral">
<NavBar />
<BarraDePesquisa/>
<main>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Litoral-20241218T011313Z-001/Litoral/Praia%20Porto%20de%20Nassau%20-%20Barreiros/porto-foto-01-1536x1024-1.png?raw=true" alt="Praia Porto de Nassau - Barreiros/Pe" />
        <div class="texto-banner">
        <div class="litoral">Litoral</div>
        </div>
    </div>
    </div>
    <section class="informacoes">
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Praia Porto de Nassau - Barreiros/Pe</h2>
                    <p>
                      Localizado a 7 km do centro da cidade, a Praia de Porto Nassau é um dos grandes atrativos do litoral-sul, foi utilizada nas gravações da novela a Indomada (1997), da Rede Globo. Além disso, a praia tem um a linda vegetação e o mar azul causando uma boa impressão a quem visita.
                    <br />
                    <router-link to="/PraiaBarreiros">Saiba mais</router-link>
                  </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Litoral-20241218T011313Z-001/Litoral/Praia%20Porto%20de%20Nassau%20-%20Barreiros/maxresdefault%20(3).jpg?raw=true" class="foto - praia do porto de Nassau em Barreiros - PE " />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Praia dos Carneiros </h2>
                    <p>
                      A Praia dos Carneiros está localizada em Tamandaré, Pernambuco, a cerca de 100 km de Recife e 56 km de Porto de Galinhas. É conhecida por suas águas calmas e transparentes, piscinas naturais e a famosa Igrejinha de São Benedito. É um ótimo lugar para relaxar, nadar e explorar a natureza.
                        <br />
                        <router-link to="/PraiaCarneiros">Saiba mais</router-link>
                      </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Litoral-20241218T011313Z-001/Litoral/Praia%20dos%20Carneiros%20-%20Tamandar%C3%A9/praia-dos-carneiros.jpg?raw=true" alt="Minas EcoPark" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Praia de São José da Cora Grande</h2>
                    <p>
                      Praia de São José da Coroa Grande fica no litoral sul de Pernambuco, Brasil. Lá, você encontra águas cristalinas, mornas e piscinas naturais formadas por recifes de corais. É um lugar perfeito para relaxar, mergulhar e aproveitar a beleza natural.
                        <br />
                        <router-link to="/Litoral/Praia-De-Sao-Jose-Da-Coroa-Grande">Saber Mais</router-link>
                    </p>
            </div>
            <img src="https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Litoral-20241218T011313Z-001/Litoral/Praia%20da%20Coroa%20Grande%20-%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande/maxresdefault%20(4).jpg?raw=true" alt="Praia de São José da cora Grande " class="imagem-secao"/>
        </div>
        <div class="ver-todos">
          <router-link to="/Litorais">Ver Todos</router-link>
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

.litoral {
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
h1, h2, h3, .litoral, .texto-lado h2 {
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
