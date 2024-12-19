<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

export default {
name: "PraiaDeSaoJoseDaCoroaGrande",
components: {
NavBar,
Footer,
},
data() {
return {
    reviews: [
    { id: 1, user: "Maria Silva", comment: "Lugar maravilhoso, super recomendo!", rating: 5 },
    { id: 2, user: "João Souza", comment: "Ótima experiência, voltarei com certeza.", rating: 4 },
    { id: 3, user: "Ana Paula", comment: "Um pedaço do paraíso!", rating: 5 },
    { id: 4, user: "Carlos Lima", comment: "Praia tranquila e limpa.", rating: 4 },
    ],
};
},
computed: {
recentReviews() {
    return this.reviews.sort((a, b) => b.id - a.id).slice(0, 3);
},
},
methods: {
goToReviewPage() {
    this.$router.push({ name: "AddReviewPage" });
},
},
};
</script>

<template>
<div>
<Navbar />

<div class="titulo">
    <h1>Praia de São José da Coroa Grande</h1>
    <p>Um verdadeiro paraíso localizado no litoral sul de Pernambuco, com águas cristalinas e tranquilas.</p>
</div>

<section class="informacao">
    <h2>História</h2>
    <p>
    A Praia de São José da Coroa Grande é conhecida por sua beleza natural e rica biodiversidade marinha. Ao longo dos anos, tornou-se um
    destino favorito para turistas que buscam tranquilidade e contato com a natureza.
    </p>
</section>

<section class="localizacao">
    <h2>Localização</h2>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.983472834074!2d-35.14598282559377!3d-8.892188492576857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014cd1323f6c91%3A0x3f3e4c3cbb54a0ba!2sPraia%20de%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande!5e0!3m2!1sen!2sbr!4v1697625156784!5m2!1sen!2sbr"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
</section>

<section class="avaliacoes">
    <h2>Avaliações</h2>
    <div v-for="review in recentReviews" :key="review.id" class="avaliacao">
    <h3>{{ review.user }}</h3>
    <p>{{ review.comment }}</p>
    <div class="estrelas">
        <span v-for="n in review.rating" :key="n">⭐</span>
    </div>
    </div>
    <button @click="goToReviewPage">Deixe sua avaliação</button>
</section>

<Footer />
</div>
</template>

<style scoped>
.titulo {
text-align: center;
background: url("https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Litoral-20241218T011313Z-001/Litoral/Praia%20da%20Coroa%20Grande%20-%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande/maxresdefault%20(4).jpg?raw=true") no-repeat center center/cover;
color: white;
padding: 50px 0;
}

.informacao,
.localizacao,
.avaliacoes {
padding: 20px;
margin: 0 auto;
max-width: 800px;
}

.avaliacoes .avaliacao {
border: 1px solid #ccc;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
}

.avaliacoes .estrelas span {
color: gold;
}
</style>
