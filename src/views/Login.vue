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
    <input id="username" v-model="username" type="text" required />

    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" required />

    <button type="submit" class="botao-login">Login</button>
    <router-link to="/register">Criar conta</router-link>
    </form>
</div>
</div>
<Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
components: {
NavBar,
Footer,
},

data() {
    return {
    username: '',
    password: ''
    };
},
methods: {
    login() {
    alert(`Usuário: ${this.username}`);
    }
}
};
</script>

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

</style>
