<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref } from "vue";
import { signInWithEmailAndPassword, signOut } from "firebase/auth"; // Funções de login/logout
import { auth } from "@/firebase"; // Configuração do Firebase
import { useRouter } from "vue-router"; // Para navegação

const router = useRouter();
const username = ref("");
const password = ref("");

// Função de login
function login() {
  if (!username.value || !password.value) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  signInWithEmailAndPassword(auth, username.value, password.value)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log("Usuário logado:", user.email);
      localStorage.setItem("userEmail", user.email); // Salva no localStorage
      router.push("/"); // Redireciona para a página inicial
    })
    .catch((error) => {
      // Exibe erros mais específicos
      console.error("Erro ao fazer login:", error);
      if (error.code === "auth/user-not-found") {
        alert("Usuário não encontrado. Verifique o e-mail.");
      } else if (error.code === "auth/wrong-password") {
        alert("Senha incorreta. Verifique novamente.");
      } else {
        alert("Erro ao fazer login. Tente novamente.");
      }
    });
}


// Função de logout
function logout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userEmail"); // Remove do localStorage
      router.push({ name: "login" }); // Redireciona para a página de login
    })
    .catch((error) => {
      console.error("Erro ao sair:", error.message);
    });
}
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
        <input id="username" v-model="username" type="text" placeholder="Digite seu username" required />

        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" placeholder="Digite sua senha" required />

        <button type="submit" class="botao-login">Login</button>
      </form>
      <!-- Link para criar uma conta -->
      <router-link to="/register" class="create-account-link">
        Criar conta
      </router-link>
    </div>
    <Footer />
  </div>
</template>

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

.login-form label {
  font-weight: bold;
  color: #2c3e50;
}

.login-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
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
