<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase"; // Certifique-se de importar o Firebase corretamente

const emailReset = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const router = useRouter();

const resetPassword = async () => {
  if (!emailReset.value) {
    errorMessage.value = "Por favor, insira o seu e-mail para recuperação.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailReset.value)) {
    errorMessage.value = "Por favor, insira um e-mail válido.";
    return;
  }

  try {
    await sendPasswordResetEmail(auth, emailReset.value);
    successMessage.value = "Um link de recuperação foi enviado para o seu e-mail.";
    emailReset.value = "";
    errorMessage.value = "";
  } catch (error) {
    errorMessage.value = "Erro ao enviar o link de recuperação. Verifique o e-mail inserido.";
    console.error("Erro ao enviar e-mail de recuperação:", error);
  }
};

</script>

<template>
  <div class="reset-password">
    <h1>Recuperação de Senha</h1>
    <form @submit.prevent="resetPassword" class="reset-password-form">
      <label for="emailReset">E-mail:</label>
      <input id="emailReset" v-model="emailReset" type="email" placeholder="Digite seu e-mail" required />

      <button type="submit">Enviar link de recuperação</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>

    <router-link to="/login">Voltar para o login</router-link>
  </div>
</template>

<style scoped>
.reset-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 20px;
}

.reset-password-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
}

.reset-password-form input {
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
}

button {
  background-color: #5de69a;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #4bbf80;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}

a {
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
}

a:hover {
  color: #0056b3;
}
</style>
