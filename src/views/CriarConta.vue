<template>
<div class="register">
    <h1>Criar Conta</h1>
    <form @submit.prevent="register">
    <label for="name">Nome:</label>
    <input id="name" v-model="name" type="text" required />

    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" required />

    <label for="password">Senha:</label>
    <input id="password" v-model="password" type="password" required />

    <button type="submit">Cadastrar</button>
    <router-link to="/login">Já tenho uma conta</router-link>
    </form>
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

        // Armazenar o e-mail do usuário no localStorage
        localStorage.setItem('userEmail', userCredential.user.email);

        // Redireciona para a página inicial
        this.$router.push({ name: 'home' });
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
