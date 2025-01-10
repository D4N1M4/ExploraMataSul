<template>
    <div id="reviews-section">
      <h2>Avaliações</h2>
      <div v-if="!user">
        <p>Faça login para enviar uma avaliação.</p>
      </div>
  
      <form v-if="user" @submit.prevent="addReview">
        <input type="text" v-model="newReview.name" placeholder="Seu nome" required />
        <textarea v-model="newReview.comment" placeholder="Escreva sua avaliação" required></textarea>
  
        <!-- Estrelas para a avaliação -->
        <div class="stars" @mouseleave="handleMouseOut">
          <i
            v-for="n in 5"
            :key="n"
            :class="{
              'fa fa-star': newReview.rating >= n || newReview.hoverRating >= n,
              'fa fa-star-o': newReview.rating < n && newReview.hoverRating < n,
            }"
            @mouseover="handleMouseOver(n)"
            @click="handleStarClick(n)"
          ></i>
        </div>
  
        <button type="submit">Enviar Avaliação</button>
      </form>
  
      <div v-if="reviews.length > 0">
        <div class="review" v-for="review in reviews" :key="review.id">
          <h3>{{ review.name }}</h3>
          <p>{{ review.comment }}</p>
  
          <!-- Exibe as estrelas com base na nota da avaliação -->
          <div class="stars">
            <i
              v-for="n in 5"
              :key="n"
              :class="{
                'fa fa-star': review.rating >= n,
                'fa fa-star-o': review.rating < n,
              }"
            ></i>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Ainda não há avaliações para este hotel.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { db } from "../firebase"; // Importar configuração Firebase
  import { auth } from "../firebase"; // Importar módulo de autenticação
  import { collection, addDoc, getDocs } from "firebase/firestore"; 
  import { onAuthStateChanged } from "firebase/auth";
  
  const reviews = ref([]); 
  const newReview = ref({
    name: "",
    comment: "",
    rating: 0,
    hoverRating: 0,
  });
  
  const user = ref(null);
  
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser; // Atualiza o usuário atual
  });
  
  const loadReviews = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      reviews.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Erro ao carregar avaliações:", error);
      alert("Não foi possível carregar as avaliações. Tente novamente mais tarde.");
    }
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
  
    await addDoc(collection(db, "reviews"), {
      ...newReview.value,
      userId: user.value.uid,
    });
  
    newReview.value = { name: "", comment: "", rating: 0, hoverRating: 0 };
    loadReviews();
  };
  
  const handleMouseOver = (rating) => {
    newReview.value.hoverRating = rating;
  };
  
  const handleMouseOut = () => {
    newReview.value.hoverRating = 0;
  };
  
  const handleStarClick = (rating) => {
    newReview.value.rating = rating;
  };
  
  onMounted(() => {
    loadReviews();
  });
  </script>
  
  <style scoped>
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
  </style>
  