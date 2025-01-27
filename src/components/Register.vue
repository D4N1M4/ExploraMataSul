<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importa o auth
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

// Declaração das variáveis reativas
const name = ref('');
const birthDate = ref('');
const city = ref('');
const state = ref('');
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

  // Validações adicionais
  if (!name.value) {
    errorMessage.value = 'O nome é obrigatório.';
    return;
  }

  if (!birthDate.value) {
    errorMessage.value = 'A data de nascimento é obrigatória.';
    return;
  }

  if (!city.value || !state.value) {
    errorMessage.value = 'Cidade e estado são obrigatórios.';
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'As senhas não coincidem.';
    return;
  }

  try {
    // Criar usuário no Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);

    successMessage.value = `Conta criada com sucesso! Bem-vindo(a), ${name.value}`;

    // Salvar dados adicionais no localStorage (substitua isso por integração com banco de dados se necessário)
    localStorage.setItem('userName', name.value);
    localStorage.setItem('userEmail', userCredential.user.email);
    localStorage.setItem('userBirthDate', birthDate.value);
    localStorage.setItem('userCity', city.value);
    localStorage.setItem('userState', state.value);

    // Limpar campos do formulário
    name.value = '';
    birthDate.value = '';
    city.value = '';
    state.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    // Redirecionar para a página inicial
    router.push({ name: 'home' });
  } catch (error) {
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
        <div class="form-row">
          <div class="form-column">
            <label for="name">Nome Completo:</label>
            <input id="name" v-model="name" type="text" placeholder="Seu nome completo" required />
          </div>
          <div class="form-column">
            <label for="birthDate">Data de Nascimento:</label>
            <input id="birthDate" v-model="birthDate" type="date" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-column">
            <label for="city">Cidade:</label>
            <input id="city" v-model="city" type="text" placeholder="Sua cidade" required />
          </div>
          <div class="form-column">
            <label for="state">Estado:</label>
            <input id="state" v-model="state" type="text" placeholder="Seu estado" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-column">
            <label for="email">E-mail:</label>
            <input id="email" v-model="email" type="email" placeholder="Seu e-mail" required />
          </div>
          <div class="form-column">
            <label for="password">Senha:</label>
            <input id="password" v-model="password" type="password" placeholder="Sua senha" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-column">
            <label for="confirmPassword">Confirmar Senha:</label>
            <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirme sua senha" required />
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="botao-register">Criar Conta</button>
        </div>
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
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.logo img {
  width: 100px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.register-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.register-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.form-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.botao-register {
  background-color: #5de69a;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
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

.error, .success {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}

.error {
  color: red;
}

.success {
  color: green;
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
</style>
