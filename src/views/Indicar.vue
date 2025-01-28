<script setup>
import { ref } from "vue";
import { auth } from "../firebase"; // Importar o módulo de autenticação do Firebase
import { onAuthStateChanged } from "firebase/auth"; 
import emailjs from "emailjs-com";
import { useRouter } from "vue-router"; // Importar o Vue Router
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

const form = ref({
  name: "",         // Nome do local
  category: "",     // Categoria
  municipality: "", // Município
});

const user = ref(null);  // Variável para armazenar o usuário autenticado
const router = useRouter(); // Instancia o router

// Verificar autenticação do usuário
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// Função para enviar o e-mail
const sendEmail = async () => {
  if (!user.value) {
    // Redireciona o usuário para a página de login se ele não estiver logado
    router.push({ name: "Login" });
    return;
  }

  if (!form.value.name || !form.value.category || !form.value.municipality) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  try {
    // Envia o e-mail utilizando o EmailJS
    const response = await emailjs.send(
      "service_ah5tmwz",    // Seu Service ID do EmailJS
      "template_mzivuku",   // Seu Template ID do EmailJS
      {
        name: form.value.name,             // Nome do local
        category: form.value.category,     // Categoria do local
        municipality: form.value.municipality, // Município
        userName: user.value.displayName,  // Nome do usuário
        userEmail: user.value.email,       // E-mail do usuário
      }, 
      "x8XQgFaYd3iuV2k6c"  // Seu User ID do EmailJS
    );

    alert("E-mail enviado com sucesso!");
    form.value = { name: "", category: "", municipality: "" }; // Reseta o formulário
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    alert("Erro ao enviar o e-mail. Tente novamente mais tarde.");
  }
};
</script>

<template>
  <NavBar />
  <div class="indication-form">
    <h2>Indique um Local</h2>

    <!-- Mensagem quando o usuário não está logado -->
    <div v-if="!user">
      <p>Faça login para indicar um local.</p>
    </div>

    <!-- Formulário para indicar local quando o usuário está logado -->
    <form v-if="user" @submit.prevent="sendEmail">
      <label for="name">Nome do local:</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        placeholder="Nome do local"
        required
      />

      <label for="category">Categoria:</label>
      <input
        id="category"
        v-model="form.category"
        type="text"
        placeholder="Categoria do local"
        required
      />

      <label for="municipality">Município:</label>
      <input
        id="municipality"
        v-model="form.municipality"
        type="text"
        placeholder="Município"
        required
      />

      <button type="submit">Enviar Indicação</button>
    </form>
  </div>
  <Footer />
</template>

<style scoped>
.indication-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 100px auto 50px auto;
  background-color: #93c7a1; /* Cor do fundo */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.indication-form h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  margin: 10px 0;
  padding: 12px;
  font-size: 1rem;
  border-radius: 15px;
  border: 1px solid #ddd;
  transition: border 0.3s;
}

input:focus {
  border-color: #4CAF50;
}

button {
  padding: 12px;
  background: linear-gradient(135deg, #4CAF50, #2d5238);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
background: linear-gradient(135deg, #4CAF50, #2d5238);
box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
transform: translateY(-2px);
}

button:focus {
  outline: none;
}

p {
  text-align: center;
  font-size: 1rem;
  color: #555;
  margin-top: 20px;
}
</style>
