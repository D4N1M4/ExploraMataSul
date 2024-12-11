<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importa o auth

import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

// Declaração das variáveis reativas
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter(); // Usado para navegação

// Função para criar conta
async function createAccount() {
  errorMessage.value = '';
  successMessage.value = '';

  // Verifica se as senhas coincidem
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'As senhas não coincidem.';
    return;
  }

  try {
    // Usando a função modularizada para criar o usuário
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    successMessage.value = `Conta criada com sucesso! Bem-vindo(a), ${userCredential.user.email}`;

    // Limpa os campos de entrada
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    // Redireciona para a página inicial
    router.push({ name: 'home' });

    // Armazenar o e-mail do usuário no localStorage
    localStorage.setItem('userEmail', userCredential.user.email);
  } catch (error) {
    // Tratamento de erros do Firebase
    if (error.code === 'auth/email-already-in-use') {
      errorMessage.value = 'Este e-mail já está em uso. Tente outro.';
    } else {
      errorMessage.value = error.message;
    }
  }
}
</script>

<template>
  <div class="register">
    <NavBar />
    <div class="register-container">
      <div class="logo">
        <img src="../assets/logosite.png" alt="Explora Mata Sul" />
      </div>
      <h1>Criar Conta</h1>
      <form @submit.prevent="createAccount" class="register-form">
        <label for="email">E-mail:</label>
        <input id="email" v-model="email" type="email" required />

        <label for="password">Senha:</label>
        <input id="password" v-model="password" type="password" required />

        <label for="confirmPassword">Confirmar Senha:</label>
        <input id="confirmPassword" v-model="confirmPassword" type="password" required />

        <button type="submit" class="botao-register">Criar Conta</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <router-link to="/login" class="login-link">
        Já tem uma conta? Faça login
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Estilos mantidos, podem ser ajustados conforme necessário */
.register {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #325b51;
}

.register-container {
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

.register-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.botao-register {
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

.botao-register:hover {
  background-color: #4bbf80;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.login-link {
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
