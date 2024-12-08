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
      <router-link to="/login" class="login-link">
        Já tem uma conta? Faça login
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../firebase"; // Importe as funções corretamente

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async createAccount() {
      this.errorMessage = "";
      this.successMessage = "";

      // Verifica se as senhas coincidem
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "As senhas não coincidem.";
        return;
      }

      try {
        // Usando a função modularizada para criar o usuário
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.successMessage = `Conta criada com sucesso! Bem-vindo(a), ${userCredential.user.email}`;

        // Limpa os campos de entrada
        this.email = "";
        this.password = "";
        this.confirmPassword = "";

        // Redireciona para a página inicial
        this.$router.push({ name: 'home' });

        // Armazenar o e-mail do usuário no localStorage
        localStorage.setItem('userEmail', userCredential.user.email);
      } catch (error) {
        // Tratamento de erros do Firebase
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = "Este e-mail já está em uso. Tente outro.";
        } else {
          this.errorMessage = error.message;
        }
      }
    },
  },
};
</script>

<style scoped>
/* Adicione seu estilo aqui */
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
</style>
