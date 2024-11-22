<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
<div>
<NavBar />
<main>
<div class="search-area">
    <div class="search-wrapper">
    <input type="text" placeholder="Pesquisar por lugar ou cidade" />
    <button>
        <i class="fas fa-search"></i>
    </button>
    </div>
</div>
</main>
<Footer />
</div>
</template>

<style scoped>
.search-wrapper {
position: relative;
margin: 0 auto; /* Centraliza horizontalmente */
width: 60%;
margin-top: 50px;
}

.search-wrapper input {
width: 100%;
padding: 10px 40px 10px 10px; /* Adiciona espaço para o botão */
border: 1px solid rgba(109, 205, 186, 0.5); /* Borda sutil */
border-radius: 20px;
background-color: rgba(122, 248, 168, 0.3); /* Fundo verde translúcido */
color: #2C3E50; /* Cor do texto */
font-size: 14px;
}

.search-wrapper input::placeholder {
color: #7F8C8D; /* Cor do placeholder */
}

.search-wrapper button {
position: absolute;
top: 50%;
right: 10px; /* Ajusta a posição dentro do input */
transform: translateY(-50%);
background: none;
border: none;
color: #006168;
cursor: pointer;
font-size: 16px;
}

.search-wrapper button:hover {
color: #2980B9;
}

</style>