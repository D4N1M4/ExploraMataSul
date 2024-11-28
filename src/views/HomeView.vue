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
    <img src="../assets/mapa.jpg" alt="Mapa da região" />
    </div>

    <div class="conteudo">
    <img src="../assets/hotelFazenda.jpeg" alt="Explorar a Mata Sul" />
    <h2>Explore a mata sul Pernambucana</h2>
    <p>
        Na Mata Sul Pernambucana, você vai encontrar diversos locais históricos, para se divertir e descansar com sua familia. Dentre eles, o Hotel fazenda que fica localizado na Cidade de Bonito.
        <br />
        <a href="#">Saber Mais</a>
    </p>
    </div>

    <div class="conteudo">
    <h2>Conheça nossa Cultura</h2>
    <p>
        Na Mata Sul Pernambucana é uma região rica em cultura e tradição. Suas festividades, como o Carnaval e as festas juninas, são vibrantes e cheias de música e dança, como maracatu, frevo e forró. A culinária local destaca-se com pratos como bolo de rolo e carne de sol, refletindo influências indígenas, africanas e portuguesas. A região também é conhecida por seu artesanato, incluindo produtos de barro e fibras vegetais, e seu patrimônio histórico, com cidades que guardam traços da colonização e do ciclo do açúcar. Essa diversidade cultural faz da Mata Sul um local de rica tapeçaria cultural e beleza natural.
        <a href="#">Saber Mais</a>
    </p>
    <img src="../assets/casaDaCulturaPalmares" alt="Fundação Casa Da Cultura Hermilo Borba Filho " />
    </div>

    <div class="conteudo sugestao">
    <h2>Conhece algum lugar e não encontrou ele aqui?</h2>
    <p>Você pode nos indicar!</p>
    <button class="botao-indicar">Indicar lugar</button>
    </div>
</section>
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
body {
display: flex;
flex-direction: column;
min-height: 100vh;
padding-bottom: 60px;
}

#home {
display: flex;
flex-direction: column;
width: 100%;
flex: 1;
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

main {
flex: 1;
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
}

.sugestao {
text-align: center;
}

.sugestao .botao-indicar {
margin-top: 15px;
padding: 10px 20px;
font-size: 1rem;
color: #fff;
background-color: #2d5238;
border: none;
border-radius: 20px;
cursor: pointer;
transition: all 0.3s ease;
}

.sugestao .botao-indicar:hover {
background-color: #1a3523;
}

footer {
background-color: #2d5238;
color: white;
text-align: center;
padding: 20px;
}

</style>