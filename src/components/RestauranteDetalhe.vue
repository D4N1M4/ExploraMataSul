<script setup>
import RestauranteDAO from "@/services/RestauranteDAO";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Avaliacoes from "../components/Avaliacoes.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

const route = useRoute();
const restauranteId = route.params.id;

const restauranteDAO = new RestauranteDAO();
const restaurante = ref({});
const images = ref([]);
const currentPage = ref(1);
const itemsPerPage = 1;

const carregarRestaurante = async () => {
try {
const dados = await restauranteDAO.getRestauranteById(restauranteId);
restaurante.value = dados;
images.value = dados.imagens || [];
} catch (error) {
console.error("Erro ao carregar restaurante:", error);
}
};

onMounted(carregarRestaurante);

const totalPages = computed(() => Math.ceil(images.value.length / itemsPerPage));
const paginatedImages = computed(() => {
const start = (currentPage.value - 1) * itemsPerPage;
const end = start + itemsPerPage;
return images.value.slice(start, end);
});

const goToPage = (page) => {
if (page >= 1 && page <= totalPages.value) {
currentPage.value = page;
}
};

const mapUrl = computed(() => {
return `https://www.google.com/maps/embed?pb=${restaurante.value.mapUrl}`;
});
</script>
<template>
<div>
    <NavBar />
    <div id="galeria">
    <div class="image" v-for="(image, index) in paginatedImages" :key="index">
        <img :src="image" :alt="restaurante.nome" />
    </div>
    </div>

    <div id="paginacao">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        Anterior
    </button>
    <span
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="goToPage(page)"
    >
        {{ page }}
    </span>
    <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
    >
        Próximo
    </button>
    </div>

    <div class="titulo">
    <h1>{{ restaurante.nome }}</h1>
    </div>

    <section class="informacao">
    <h2>Informações</h2>
    <p>{{ restaurante.informacoes }}</p>
    </section>

    <section class="localizacao">
    <h2>Localização</h2>
    <iframe
        :src="mapUrl"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </section>

    <Avaliacoes />

    <Footer />
</div>
</template>
<style scoped>
body {
font-family: 'Roboto', Arial, sans-serif;
margin: 0;
padding: 0;
color: #333;
background-color: #f7f7f7;
}

h1, h2, h3 {
font-family: 'Playfair Display', serif;
font-weight: 700;
color: #2c3e50;
}

p, a {
font-family: 'Roboto', Arial, sans-serif;
line-height: 1.6;
color: #4f4f4f;
}

#galeria {
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: center;
margin-top: 40px;
margin: 100px auto 50px auto;
padding: 20px;
}

.image img {
width: 700px;
height: 500px;
border-radius: 10px;
object-fit: cover;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.image img:hover {
transform: scale(1.05);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

#paginacao {
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
margin: 20px 0;
}

#paginacao button {
padding: 8px 12px;
border: none;
border-radius: 5px;
background-color: #367243;
color: #fff;
cursor: pointer;
font-weight: bold;
transition: background-color 0.3s ease;
}

#paginacao button:hover {
background-color: #03ff4e;
}

#paginacao button:disabled {
background-color: #bdc3c7;
cursor: not-allowed;
}

#paginacao span {
padding: 5px 10px;
border-radius: 50%;
cursor: pointer;
border: 1px solid #ddd;
background-color: #fff;
transition: all 0.3s ease;
}

#paginacao span:hover {
background-color: #03ff4e;
color: #fff;
font-weight: bold;
}

#paginacao span.active {
background-color: #03ff4e;
color: #fff;
font-weight: bold;
}
.titulo h1 {
text-align: center;
font-size: 2.5rem;
margin: 20px 0;
color: #2d5238;
}

.titulo p {
text-align: center;
font-size: 1.2rem;
margin: 10px 0 30px;
color: #525a5b;
}

.informacao, .localizacao {
padding: 20px;
margin: 20px auto;
max-width: 800px;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.informacao h2, .localizacao h2 {
margin-bottom: 15px;
color: #2d5238;
}

.informacao p, .localizacao p {
color: 525a5b;
text-align: justify;
}
.localizacao iframe {
width: 100%;
height: 400px;
border-radius: 10px;
border: 0;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px) {
.image img {
width: 100%;
}

.titulo h1 {
font-size: 2rem;
}

.titulo p {
font-size: 1rem;
}

#galeria {
flex-direction: column;
}

#paginacao {
flex-wrap: wrap;
gap: 5px;
}
}
</style>