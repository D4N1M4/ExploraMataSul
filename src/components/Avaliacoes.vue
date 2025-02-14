<script setup>
import { ref, computed, onMounted } from "vue";
import { db } from "../firebase";
import { auth } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRoute } from "vue-router";

const reviews = ref([]);
const newReview = ref({ name: "", comment: "", rating: 0, hoverRating: 0 });
const user = ref(null);
const route = useRoute();
const locationId = computed(() => route.name);
const filter = ref("todas");

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

const loadReviews = async () => {
  if (!locationId.value) return;
  const q = query(collection(db, "reviews"), where("locationId", "==", locationId.value));
  const querySnapshot = await getDocs(q);
  reviews.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const addReview = async () => {
  if (!newReview.value.name || !newReview.value.comment || !newReview.value.rating) {
    alert("Preencha todos os campos!");
    return;
  }
  if (!user.value) {
    alert("Você precisa fazer login para enviar uma avaliação.");
    return;
  }
  try {
    await addDoc(collection(db, "reviews"), {
      ...newReview.value,
      userId: user.value.uid,
      locationId: locationId.value,
    });
    newReview.value = { name: "", comment: "", rating: 0, hoverRating: 0 };
    loadReviews();
  } catch (error) {
    console.error("Erro ao adicionar avaliação:", error);
    alert("Não foi possível enviar a avaliação. Tente novamente mais tarde.");
  }
};

const filteredReviews = computed(() => {
  if (filter.value === "melhores") {
    return reviews.value.filter(r => r.rating >= 4);
  } else if (filter.value === "piores") {
    return reviews.value.filter(r => r.rating <= 2);
  }
  return reviews.value;
});

onMounted(() => {
  loadReviews();
});
</script>

<template>
  <div id="reviews-section">
    <h2>Avaliações para {{ locationId }}</h2>
    <div v-if="!user">
      <p>Faça login para visualizar avaliações e avaliar o local.</p>
    </div>
    
    <select v-model="filter">
      <option value="todas">Todas</option>
      <option value="melhores">Melhores avaliações</option>
      <option value="piores">Piores avaliações</option>
    </select>

    <form v-if="user" @submit.prevent="addReview">
      <input type="text" v-model="newReview.name" placeholder="Seu nome" required />
      <textarea v-model="newReview.comment" placeholder="Escreva sua avaliação" required></textarea>
      <div class="stars" @mouseleave="() => (newReview.hoverRating = 0)">
        <i v-for="n in 5" :key="n" :class="{
          'fa fa-star': newReview.rating >= n || newReview.hoverRating >= n,
          'fa fa-star-o': newReview.rating < n && newReview.hoverRating < n,
        }" @mouseover="() => (newReview.hoverRating = n)" @click="() => (newReview.rating = n)"></i>
      </div>
      <button type="submit">Enviar Avaliação</button>
    </form>
    
    <div v-if="filteredReviews.length > 0">
      <div class="review" v-for="review in filteredReviews" :key="review.id">
        <h3>{{ review.name }}</h3>
        <p>{{ review.comment }}</p>
        <div class="stars">
          <i v-for="n in 5" :key="n" :class="{
            'fa fa-star': review.rating >= n,
            'fa fa-star-o': review.rating < n,
          }"></i>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Ainda não há avaliações para este local.</p>
    </div>
  </div>
</template>

<style scoped>
#reviews-section {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
form input,
form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
form button {
  padding: 10px;
  background-color: #386e42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
form button:hover {
  background: linear-gradient(135deg, #4CAF50, #2d5238);
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
select {
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}
.stars {
  font-size: 2rem;
  color: gray;
}
.stars .fa {
  cursor: pointer;
  transition: color 0.3s;
}
.stars .fa:hover,
.stars .fa-star {
  color: gold;
}
.review {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.review h3 {
  margin: 0;
  font-size: 18px;
}
.review p {
  margin: 5px 0;
}
</style>
