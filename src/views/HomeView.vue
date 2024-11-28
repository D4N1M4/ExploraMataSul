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

footer {
background-color: #2d5238;
color: white;
text-align: center;
padding: 20px;
}

</style>