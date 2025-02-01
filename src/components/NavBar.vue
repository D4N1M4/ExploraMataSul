<template>
  <header>
    <nav class="menu">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logosite.png" alt="Explora Mata Sul" />
        </router-link>
      </div>
      <div class="section">
        <p>Encontre o melhor lugar para você</p>
      </div>
      <div class="links">
        <ul>
          <li><router-link to="/NossaRegiao">Nossa Região</router-link></li>
          <li><router-link to="/Historico">Histórico</router-link></li>
          <li><router-link to="/Lazer">Lazer</router-link></li>
          <li><router-link to="/Restaurantes">Restaurantes</router-link></li>
          <li><router-link to="/RoteirosNaturais">Roteiros Naturais</router-link></li>
          <li><router-link to="/Litoral">Litoral</router-link></li>
        </ul>
      </div>
      <div class="auth-section">
        <!-- Se o usuário estiver logado, mostra o e-mail e os ícones -->
        <div v-if="userEmail" class="user-info">
          <div class="icons-container">
          <router-link to="/Perfil" class="user-icon">
            <font-awesome-icon :icon="['fas', 'user']" />
          </router-link>
          <button class="logout-btn" @click="logout">
              <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
            </button>
          </div>
          <span class="user-email">{{ userEmail }}</span>
        </div>

        <!-- Se não estiver logado, exibe o botão de login -->
        <router-link v-else to="/login" class="login-button">Login</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { auth } from "@/firebase"; // Importando o auth do Firebase
import { signOut } from "firebase/auth"; // Importando a função de logout

export default {
  data() {
    return {
      userEmail: localStorage.getItem("userEmail") || "", // Obtém o e-mail do usuário logado
    };
  },
  watch: {
    // Monitora alterações no localStorage e atualiza o email do usuário
    "$route"(to, from) {
      this.userEmail = localStorage.getItem("userEmail") || "";
    },
  },
  methods: {
    logout() {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("userEmail"); // Remove o e-mail do usuário
          this.userEmail = ""; // Limpa o estado local
          this.$router.push({ name: "login" }); // Redireciona para a página de login
        })
        .catch((error) => {
          console.error("Erro ao sair: ", error.message);
        });
    },
  },
};
</script>

<style scoped>
/* Estilos gerais da barra de navegação */
.nav-container {
  display: flex;
  justify-content: flex-end; /* Alinha ao canto direito */
  align-items: center;
  padding: 10px;
}



/* Estilo do link de login */
.login-link {
  color: #ffffff;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
}

.login-link:hover {
  background-color: #5de69a;
  border-radius: 5px;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #387251;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}



.logo img {
  height: 50px;
  width: auto;
}

.menu ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.menu li {
  text-align: center;
}

.menu a {
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #5de69a;
}

.section {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #000000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 25px / 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: right;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.auth-section {
  display: flex;
  align-items: center;
}

/* Container para os ícones do usuário e logout */
.icons-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Ícone do usuário */
.user-icon {
  font-size: 20px;
  color: white;
  text-decoration: none;
}

/* Ícone de logout */
.logout-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: transform 0.2s ease, color 0.2s ease;
}

.logout-btn:hover {
  color: #ff6961;
  transform: scale(1.1);
}

/* Container do usuário */
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Estilização do e-mail abaixo dos ícones */
.user-email {
  font-size: 12px;
  color: #ffffff;
  margin-top: 5px;
}

/* Estilização do botão de login */
.login-button {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 25px / 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: right;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Responsivo */
@media (max-width: 768px) {
  .menu {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
  .menu ul {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .section {
    order: 1;
  }
  .login-button {
    margin-top: 10px;
  }
}
</style>
