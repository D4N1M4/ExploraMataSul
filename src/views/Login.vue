<script setup>
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'; // Funções de login e recuperação de senha
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Para navegação
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { auth, provider } from '../firebase.js'; // Importa o auth e provider do Google

const router = useRouter();
const username = ref('');
const password = ref('');
const emailReset = ref(''); // Para o e-mail de recuperação de senha
const errorMessage = ref(''); // Para mostrar erros
const successMessage = ref(''); // Para mostrar mensagens de sucesso

// Função de login com e-mail e senha
function login() {
  if (!username.value || !password.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  signInWithEmailAndPassword(auth, username.value, password.value)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log('Usuário logado:', user.email);
      localStorage.setItem('userEmail', user.email); // Salva no localStorage
      const redirectTo = router.currentRoute.value.query.redirect || '/';
      router.push(redirectTo);
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);
      if (error.code === 'auth/user-not-found') {
        alert('Usuário não encontrado. Verifique o e-mail.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Senha incorreta. Verifique novamente.');
      } else {
        alert('Erro ao fazer login. Tente novamente.');
      }
    });
}

// Função de login com Google
async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider); // Faz login com o Google
    const user = result.user;
    console.log(`Usuário logado com Google: ${user.displayName}`);
    localStorage.setItem('userEmail', user.email); // Salva o e-mail no localStorage
    router.push('/'); // Redireciona para a página inicial
  } catch (error) {
    console.error('Erro ao fazer login com o Google:', error.message);
    alert('Erro ao fazer login com o Google. Tente novamente.');
  }
}

// Função para enviar o e-mail de recuperação de senha
function resetPassword() {
  if (!emailReset.value) {
    errorMessage.value = 'Por favor, insira o seu e-mail para recuperação.';
    return;
  }

  sendPasswordResetEmail(auth, emailReset.value)
    .then(() => {
      successMessage.value = 'Um link de recuperação foi enviado para o seu e-mail.';
      emailReset.value = ''; // Limpa o campo de e-mail
    })
    .catch((error) => {
      errorMessage.value = 'Erro ao enviar o link de recuperação. Verifique o e-mail inserido.';
      console.error('Erro ao enviar e-mail de recuperação:', error);
    });
}

// Função de logout
function logout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('userEmail'); // Remove do localStorage
      router.push({ name: 'login' }); // Redireciona para a página de login
    })
    .catch((error) => {
      console.error('Erro ao sair:', error.message);
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
      <div class="links-container">
        <div class="forgot-password">
          <router-link to="/reset-password">Esqueci a senha</router-link>
        </div>

        <router-link to="/register" class="create-account-link">
          Criar conta
        </router-link>
      </div>

      <div class="social-login">
        <p>Ou entre com:</p>
        <button @click="loginWithGoogle" class="google-login">Login com Google</button>
      </div>
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
  margin: 50px auto;
  margin-top: 100px;
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

.links-container {
  display: flex;
  justify-content: space-between;  /* Isso vai espalhar os links para as extremidades */
  width: 100%;  /* Certifique-se de que o container ocupe toda a largura disponível */
  margin-top: 10px;  /* Distância do topo */
}

.forgot-password,
.create-account-link {
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.forgot-password a:hover,
.create-account-link:hover {
  color: #0056b3;
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

.social-login {
  text-align: center;
  margin: 20px 0;
}

.google-login {
  background-color: #4285f4;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.google-login:hover {
  background-color: #357ae8;
}
</style>
