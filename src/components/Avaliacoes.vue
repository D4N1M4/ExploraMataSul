<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase"; // Importe sua configuração Firebase
import { auth } from "../firebase"; // Importar o módulo de autenticação
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";

const reviews = ref([]); // Armazena as avaliações
const newReview = ref({
  name: "",
  comment: "",
  rating: 0,
  hoverRating: 0, // Para manipulação do hover
});

const user = ref(null); // Armazena o usuário autenticado

// Verificar se o usuário está autenticado
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser; // Atualiza o usuário atual
});

// Carregar avaliações do Firebase
const loadReviews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    reviews.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Erro ao carregar avaliações:", error);
    alert("Não foi possível carregar as avaliações. Tente novamente mais tarde.");
  }
};

// Adicionar uma nova avaliação
const addReview = async () => {
  if (!newReview.value.name || !newReview.value.comment || !newReview.value.rating) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!user.value) {
    alert("Você precisa fazer login para enviar uma avaliação.");
    return;
  }

  // Adicionar a nova avaliação ao Firestore
  await addDoc(collection(db, "reviews"), {
    ...newReview.value,
    userId: user.value.uid, // Vincula a avaliação ao usuário autenticado
  });

  // Limpar o formulário após enviar
  newReview.value = { name: "", comment: "", rating: 0, hoverRating: 0 };

  // Carregar as avaliações novamente para atualizar a lista
  loadReviews();
};

// Função para lidar com o hover das estrelas
const handleMouseOver = (rating) => {
  newReview.value.hoverRating = rating;
};

// Função para remover o hover
const handleMouseOut = () => {
  newReview.value.hoverRating = 0;
};

// Função para definir a avaliação final
const handleStarClick = (rating) => {
  newReview.value.rating = rating;
};

onMounted(() => {
  loadReviews(); // Carrega as avaliações quando o componente é montado
});
</script>

<template>
  <div id="reviews-section">
    <h2>Avaliações</h2>

    <!-- Mostrar mensagem se o usuário não estiver logado -->
    <div v-if="!user">
      <p>Faça login para enviar uma avaliação.</p>
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
        <p>Nota: {{ review.rating }}/5</p>
      </div>
    </div>
    <div v-else>
      <p>Ainda não há avaliações para este hotel.</p>
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
