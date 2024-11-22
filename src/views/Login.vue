<template>
<div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
    <label for="username">Username:</label>
    <input id="username" v-model="username" type="text" required />

    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" required />

    <button type="submit">Login</button>
    <router-link to="/register">Criar conta</router-link>
    </form>
</div>
</template>

<script>
export default {
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
</style>
