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
export default {
data() {
    return {
    name: '',
    email: '',
    password: ''
    };
},
methods: {
    register() {
    alert(`Usuário ${this.name} registrado com sucesso!`);
    }
}
};
</script>

<style scoped>
</style>
