<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
<div id="home">
<NavBar />
<main>
<div class="area-visual">
    <div class="pesquisa">
        <input type="text" placeholder="Pesquise por cidade ou lugar." />
    </div>
    <div class="imagem-banner">
        <img src="../assets/jardimBotanico.jpg" alt="Imagem da região" />
        <div class="texto-banner">
        <button class="botao-nossa-regiao">Nossa Região</button>
        </div>
    </div>
    </div>
<section class="informacoes">
    <div class="conteudo">
        <p>
            Considerando a divisão adotada pelo Instituto de Planejamento do Estado de Pernambuco (Condepe), o Programa de Apoio ao Desenvolvimento Sustentável da Zona da Mata de Pernambuco (Promata) subdivide a Zona da Mata em dez territórios de desenvolvimento, que contemplam os 43 municípios da mesorregião. Os territórios de desenvolvimento são ambientes onde se abrangem espaços comuns (município/comunidade), e existem potencialidades inter-relacionadas que possibilitam a implementação de ações políticas, econômicas, sociais e culturais de forma sistêmica e integrada, objetivando o seu desenvolvimento sustentável. Nesta divisão também considerada pelo Promata, a Mata Sul Pernambucana é composta pelos territórios 05, 06, 07, 08 e 09 mostrados na Figura 2, onde um ou mais centros urbanos de influência determina a dinâmica em cada território.
        </p>
        <p>
            Desse modo, o Promata tem atuado em todos os municípios da microrregião, embora a divisão do território da Secretaria de Desenvolvimento Territorial do Ministério do Desenvolvimento Agrário (MDA) contemple apenas 18 municípios da Zona da Mata Sul (Água Preta, Amaraji, Barreiros, Belém de Maria, Catende, Cortês, Gameleira, Jaqueira, Joaquim Nabuco, Maraial, Palmares, Primavera, Ribeirão, Rio Formoso, São Benedito do Sul, São José da Coroa Grande, Tamandaré e Xexéu), e um do Agreste (Bonito) (Figura 3).
            <br/><a href="#">Saber Mais</a>
        </p>
    </div>
    <div class="blocos-container">
        <div class="bloco">
            <div class="texto-lado">
                <h2>Municípios Abrangidos</h2>
                    <p>
                        Na Mata Sul Pernambucana, você vai encontrar diversos locais históricos e culturais. Esses espaços são conhecidos por sua história e belezas naturais.
                        <br />
                            <a href="#">Saber Mais</a>
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
                        <a href="#">Saber Mais</a>
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
                        <a href="#">Saber Mais</a>
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
                <button class="botao-indicar">Indicar lugar</button>
            </div>
            <img src="../assets/tamandare.jpg" alt="Sugestão de local" class="imagem-secao"/>
        </div>
    </div>
</section>
</main>
</div>
<Footer />
</template>
<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
/*display: flex;
flex-direction: column;
min-height: 100vh;
padding-bottom: 60px;*/
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
transform: translateX(-50%,);
width: 80%;
max-width: 600px;
z-index: 10;
background-color: rgba(255, 255, 255, 0.8);
border-radius: 25px;
padding: 10px, 15px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
}

.pesquisa input {
width: 100%;
padding: 15px;
font-size: 1rem;
border: none;
border-radius: 25px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

.botao-nossa-regiao {
background-color: rgba(0, 0, 0, 0.6);
color: #fff;
border: none;
border-radius: 20px;
padding: 10px 20px;
font-size: 1rem;
cursor: pointer;
transition: all 0.3s ease;
}

.botao-nossa-regiao:hover {
background-color: #fff;
color: #000;
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
font-weight: bold;
color: #2c6e49;
text-decoration: none;
}

.bloco .texto-lado a:hover {
text-decoration: underline;
}
.botao-indicar {
background: transparent;
color: #2d5238;
padding: 6px 12px;
border: 2px solid #2d5238;
border-radius: 15px;
font-size: 0.9rem;
font-weight: bold;
text-transform: uppercase;
cursor: pointer;
transition: all 0.3s ease;
width: fit-content;
}

.botao-indicar:hover {
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