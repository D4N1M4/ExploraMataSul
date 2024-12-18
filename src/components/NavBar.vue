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
            <li><router-link to="/Trilhas">Trilhas</router-link></li>
            <li><router-link to="/Litoral">Litoral</router-link></li>
          </ul>
        </div>
        <div class="auth-section">
            <!-- Se o usuário estiver logado, mostra o e-mail e os ícones -->
            <div v-if="userEmail" class="user-info">
                <span class="user-email">{{ userEmail }}</span>
                <font-awesome-icon :icon="['fas', 'user']" />

                <button class="logout-btn" @click="logout">
                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" />                
                </button>

            </div>

            <!-- Se não estiver logado, exibe o botão de login -->
            <router-link v-else to="/login" class="login-button">
                Login
            </router-link>
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

.user-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.user-email {
  font-size: 14px;
  color: #ffffff;
}

.logout-btn {
  background-color: #ff4e4e;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.logout-btn:hover {
  background-color: #ff1a1a;
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
max-width: 100%;
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
.busca-section {
margin-left: 50px;
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
.busca-button {
position: relative;
background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
border-radius: 25px / 50%;
padding: 10px 20px;
font-weight: bold;
font-size: 14px;
text-align: center;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;
cursor: pointer;
}
.busca-button:hover {
transform: scale(1.05);
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
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
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
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
.links ul {
  list-style-type: none;
  padding: 0;
}

.links li {
  margin: 10px 0;
}

.links a {
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.links a:hover {
  text-decoration: underline;
  color: #4CAF50;
}

</style>
