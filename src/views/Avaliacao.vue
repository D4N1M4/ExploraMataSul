<script>
export default {
data() {
    return {
    rating: 0,
    comment: "",
    reviews: [],
    };
},
mounted() {
    this.loadReviews();
},
methods: {
    setRating(value) {
    this.rating = value;
    },
    submitReview() {
    if (!this.comment || this.rating === 0) {
        alert("Por favor, forneça uma nota e um comentário.");
        return;
    }
    const user = firebase.auth().currentUser;

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.unshift({
        id: Date.now(),
        user: user.displayName,
        comment: this.comment,
        rating: this.rating,
    });
    reviews.unshift(newReview);

    localStorage.setItem("reviews", JSON.stringify(reviews));
    this.reviews = reviews;
    alert("Avaliação enviada com sucesso!");
    this.$router.push({ name: "PraiaDeSaoJoseDaCoroaGrande" });
    },
    loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    this.reviews = reviews;
}
},
data() {
return {
reviews: [],
};
},
mounted() {
this.loadReviews();
},
methods: {
loadReviews() {
const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
this.reviews = reviews;
},
},
};
</script>

<template>
<div class="avaliacao-container">
    <h1>Avaliação</h1>
    <div>
    <label for="rating">Sua nota:</label>
    <div class="stars">
        <span
        v-for="n in 5"
        :key="n"
        :class="{ active: n <= rating }"
        @click="setRating(n)"
        >⭐</span>
    </div>
    </div>
    <div>
    <label for="comment">Dê sua opinião:</label>
    <textarea v-model="comment" placeholder="Escreva aqui..." />
    </div>
    <button @click="submitReview">Enviar</button>
</div>
</template>
<style scoped>
.stars span {
cursor: pointer;
font-size: 24px;
color: #ccc;;
}
.stars .active {
color: gold;
}
</style>
