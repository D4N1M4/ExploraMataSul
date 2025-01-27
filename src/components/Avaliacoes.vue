<script setup>
import { ref, computed, onMounted } from "vue";
import { db } from "../firebase"; // Configuração Firebase
import { auth } from "../firebase"; // Autenticação
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRoute } from "vue-router";

const reviews = ref([]); // Avaliações
const newReview = ref({
  name: "",
  comment: "",
  rating: 0,
  hoverRating: 0,
});

const user = ref(null); // Usuário autenticado
const route = useRoute(); // Obtém a rota atual
const locationId = computed(() => route.name); // Identificador único do local atual (pelo nome da rota)

// Verificar autenticação do usuário
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// Carregar avaliações do local atual
const loadReviews = async () => {
    if (!locationId.value) return; // Verifica se o local está definido

    const q = query(
      collection(db, "reviews"),
      where("locationId", "==", locationId.value)
    );
    const querySnapshot = await getDocs(q);

    reviews.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Adicionar nova avaliação
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
      locationId: locationId.value, // Vincula a avaliação ao local atual
    });

    newReview.value = { name: "", comment: "", rating: 0, hoverRating: 0 };
    loadReviews(); // Recarrega as avaliações
  } catch (error) {
    console.error("Erro ao adicionar avaliação:", error);
    alert("Não foi possível enviar a avaliação. Tente novamente mais tarde.");
  }
};

// Funções auxiliares para estrelas
const handleMouseOver = (rating) => {
  newReview.value.hoverRating = rating;
};
const handleMouseOut = () => {
  newReview.value.hoverRating = 0;
};
const handleStarClick = (rating) => {
  newReview.value.rating = rating;
};

// Carregar avaliações ao montar o componente
onMounted(() => {
  loadReviews();
});
</script>


<template>
  <div id="reviews-section">
    <h2>Avaliações para {{ locationId }}</h2>

    <!-- Mostrar mensagem se o usuário não estiver logado -->
    <div v-if="!user">
      <p>Faça login para visualizar avaliações e avaliar o local.</p>
    </div>

    <!-- Formulário para adicionar avaliação -->
    <form v-if="user" @submit.prevent="addReview">
      <input
        type="text"
        v-model="newReview.name"
        placeholder="Seu nome"
        required
      />
      <textarea
        v-model="newReview.comment"
        placeholder="Escreva sua avaliação"
        required
      ></textarea>

      <!-- Estrelas de avaliação -->
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

    <!-- Lista de avaliações -->
    <div v-if="reviews.length > 0">
      <div class="review" v-for="review in reviews" :key="review.id">
        <h3>{{ review.name }}</h3>
        <p>{{ review.comment }}</p>
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

.stars {
  font-size: 2rem;
  color: gray; /* Cor das estrelas cinzas */
}

.stars .fa {
  cursor: pointer;
  transition: color 0.3s;
}

.stars .fa:hover,
.stars .fa-star {
  color: gold; /* Cor das estrelas quando selecionadas ou ao passar o mouse */
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

.review p:last-child {
  font-weight: bold;
  color: #ff9800;
}
</style>
