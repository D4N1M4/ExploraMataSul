<script setup>
import { ref, onMounted } from "vue";
import { auth } from "../firebase"; // Certifique-se de que o caminho está correto
import {
  updateProfile,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

const router = useRouter();
const user = ref(null);
const form = ref({
  name: "",
  email: "",
  birthdate: "",
  city: "",
  state: "",
  password: "",
});

const isUpdating = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Verifica se o usuário está autenticado corretamente
onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      user.value = currentUser;
      form.value.name = currentUser.displayName || "";
      form.value.email = currentUser.email || "";
    } else {
      user.value = null;
      router.push({ name: "Login" });
    }
  });
});

// Função para reautenticar usuário antes de atualizar email ou senha
const reauthenticate = async () => {
  try {
    const email = prompt("Digite seu email:");
    const password = prompt("Digite sua senha:");
    if (!email || !password) throw new Error("Reautenticação cancelada.");

    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);
    console.log("Reautenticação bem-sucedida.");
    return true;
  } catch (error) {
    errorMessage.value = "Erro na reautenticação. " + error.message;
    return false;
  }
};

// Atualiza o perfil do usuário
const updateProfileInfo = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!form.value.name || !form.value.email) {
    errorMessage.value = "Por favor, preencha os campos obrigatórios.";
    return;
  }

  isUpdating.value = true;

  try {
    if (user.value) {
      try {
        if (form.value.name !== user.value.displayName) {
          await updateProfile(user.value, { displayName: form.value.name });
        }
        if (form.value.email !== user.value.email) {
          await updateEmail(user.value, form.value.email);
        }
        if (form.value.password) {
          await updatePassword(user.value, form.value.password);
        }
        successMessage.value = "Perfil atualizado com sucesso!";
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          console.warn("Reautenticação necessária.");
          const reauthenticated = await reauthenticate();
          if (reauthenticated) {
            await updateProfileInfo(); // Tenta novamente após reautenticação
          }
        } else {
          throw error;
        }
      }
    }
  } catch (error) {
    errorMessage.value = "Erro ao atualizar o perfil. " + error.message;
  } finally {
    isUpdating.value = false;
  }
};

// Função para logout
const logout = async () => {
  try {
    await signOut(auth);
    router.push({ name: "Login" });
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
};
</script>


<template>
  <div class="profile">
    <NavBar />
    <div class="profile-container">
      <h1>Meu Perfil</h1>
      <form @submit.prevent="updateProfileInfo" class="profile-form">
        <div class="form-row">
          <div class="form-column">
            <label for="name">Nome Completo:</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div class="form-column">
            <label for="email">E-mail:</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-column">
            <label for="birthdate">Data de Nascimento:</label>
            <input
              id="birthdate"
              v-model="form.birthdate"
              type="date"
              placeholder="Data de nascimento"
            />
          </div>
          <div class="form-column">
            <label for="city">Cidade:</label>
            <input
              id="city"
              v-model="form.city"
              type="text"
              placeholder="Digite sua cidade"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-column">
            <label for="state">Estado:</label>
            <input
              id="state"
              v-model="form.state"
              type="text"
              placeholder="Digite seu estado"
            />
          </div>
          <div class="form-column">
            <label for="password">Senha (deixe em branco para não alterar):</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Nova senha"
            />
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="botao-save" :disabled="isUpdating">
            {{ isUpdating ? "Atualizando..." : "Salvar Alterações" }}
          </button>
        </div>
      </form>

      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    </div>
    <Footer />
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto 50px auto;
  min-height: 100vh;
  background-color: #325b51;
}

.profile-container {
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
}

.profile-form {
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

.profile-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-form input {
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

.botao-save {
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

.botao-save:hover {
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
</style>
