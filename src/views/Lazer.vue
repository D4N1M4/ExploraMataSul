<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <div id="lazer">
    <NavBar />
    <div id="home">
<NavBar />
<main>
<div class="area-visual">
    <div class="pesquisa">
        <input type="text" placeholder="Pesquise por cidade ou lugar." />
    </div>
    <div class="imagem-banner">
        <img src="@\assets\imagens\Lazer-20241218T011618Z-001\Lazer\Banho Mina da Pedra - Ribeirão\306265939_457749389719467_4938644550721951193_n.jpg" alt="Mina da Pedra" />
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
                    <a href="#">Saber Mais</a>
                    </p>
            </div>
            <img src="@\assets\imagens\Lazer-20241218T011618Z-001\Lazer\Cachoeira de Cerra Azul - Palmares\2024-01-23 (1).jpg" alt="Cachoeira de Serra Azul" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Minas EcoPark</h2>
                    <p>
                      Localizado na cidade de Ribeirão, é um local muito procurado, principamente no verão, um local que promete diversão e relaxamento.
                        <br />
                        <a href="#">Saber Mais</a>
                    </p>
            </div>
            <img src="@\assets\imagens\Lazer-20241218T011618Z-001\Lazer\Minas ecopark - Ribeirão\maxresdefault (2).jpg" alt="Minas EcoPark" class="imagem-secao" />
        </div>
        <div class="bloco">
            <div class="texto-lado">
                <h2>Orla de Palmares</h2>
                    <p>
                      Orla localizada a beira do rio Una na cidade de Palmares, é um local de lazer, onde oferece brinquedos publicos, máquinas de praticar exercício e locais para alimmentação, com uma ciclovia e uma área para caminhada de pedestres.                         
                        <br />
                        <a href="#">Saber Mais</a>
                    </p>
            </div>
            <img src="@\assets\imagens\Lazer-20241218T011618Z-001\Lazer\Orla de Palmares\maxresdefault.jpg" alt="Orla de Palmares" class="imagem-secao"/>
        </div>
    </div>
</section>
</main>
</div>
    <Footer />
  </div>
</template>

<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: Arial, sans-serif;
}

#home {
display: flex;
flex-direction: column;
width: 100%;
}

main {
width: 100%;
flex: 1;
}

.area-visual {
padding-top: 80px;
padding-bottom: 60px;
color: #fff;
position: relative;
}
.banner input {
width: 50%;
padding: 10px;
font-size: 16px;
border: none;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.pesquisa {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%; /* Define largura inicial responsiva */
  max-width: 600px;
  z-index: 10;
  background-color: rgba(182, 252, 222, 0.8);
  border-radius: 25px;
  padding: 2px; /* Corrigido para valores uniformes */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pesquisa input {
  width: 100%; /* Ocupa toda a largura do contêiner */
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .pesquisa {
    top: 80px; /* Ajusta a posição vertical */
    width: 90%; /* Reduz a largura */
    max-width: none; /* Remove limite máximo de largura */
    padding: 10px; /* Reduz padding para caber melhor */
  }

  .pesquisa input {
    padding: 12px; /* Reduz padding interno */
    font-size: 0.9rem; /* Ajusta o tamanho da fonte */
  }
}

/* Ajustes adicionais para telas muito pequenas */
@media (max-width: 480px) {
  .pesquisa {
    top: 60px; /* Reduz ainda mais o espaço no topo */
    width: 95%; /* Largura quase total */
    border-radius: 15px; /* Reduz o raio do border */
  }

  .pesquisa input {
    padding: 10px;
    font-size: 0.85rem; /* Tamanho da fonte menor */
  }
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
color: #000000;
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
font-family: 'Arial', sans-serif;
color: #2d5238;
font-size: 1.8rem;
margin-bottom: 15px;
}

.informacoes p {
font-family: 'Arial', sans-serif;
font-size: 1rem;
color: #333;
text-align: justify;
}

.blocos-container {
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: space-between;
width: 100%;
background-color: transparent;
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
background-color: transparent
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
object-fit: cover
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

footer {
background-color: #2d5238;
color: white;
text-align: center;
padding: 20px;
}
/*resposividade dos blocos*/
@media (max-width: 768px) {
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
</style>
