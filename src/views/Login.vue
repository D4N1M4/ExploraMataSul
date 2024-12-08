<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
<div class="login">
    <NavBar />
    <div class="login-container">
        <div class="logo">
            <img src="../assets/logosite.png" alt="Explora Mata Sul" />
        </div>
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
    <label for="username">Username:</label>
    <input id="username" v-model="username" type="text" required />

    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" required />

    <button type="submit" class="botao-login">Login</button>
      </form>
      <!-- Adiciona um link para a página de registro -->
      <router-link to="/register" class="create-account-link">
        Criar conta
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import { auth } from "@/firebase"; // Importando o auth do Firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // Importando a função de login

export default {
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      this.errorMessage = ""; // Limpa a mensagem de erro

      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.username, this.password);
        
        // Armazena o e-mail do usuário no localStorage após login
        localStorage.setItem('userEmail', userCredential.user.email);

        // Redireciona para a página inicial após login bem-sucedido
        this.$router.push({ name: 'home' });
      } catch (error) {
        this.errorMessage = "Credenciais inválidas. Tente novamente.";
      }
    }
  }
};
</script>

<style scoped>
.login {
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 100vh;
background-color: #325b51;
}

.login-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #93c7a1;
border-radius: 12px;
padding: 20px;
width: 80%;
max-width: 400px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin: auto;
}

.logo img {
width: 100px;
margin-bottom: 20px;
}

.login-form {
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
}
.botao-login {
background-color: #5de69a;
color: #ffffff;
font-size: 16px;
font-weight: bold;
padding: 10px;
border: none;
border-radius: 8px;
cursor: pointer;
transition: all 0.3s ease;
}

.botao-login:hover {
background-color: #4bbf80;
transform: scale(1.05);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.create-account-link {
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.create-account-link:hover {
  color: #0056b3;
}
</style>
