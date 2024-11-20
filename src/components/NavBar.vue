<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="logo.png" alt="Explora Mata Sul" />
    </div>
    <div class="buscaarea">
      <span>Encontre o melhor lugar para você</span>
      <font-awesome-icon icon="search" class="iconeBusca" />
    </div>
    <ul class="menu">
      <li>Nossa Região</li>
      <li>Histórico</li>
      <li>Litoral</li>
      <li>Lazer</li>
      <li>Trilhas</li>
      <li>Restaurantes</li>
      <li><button class="login-btn">Login</button></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #003d3f;
}

.busca {
  display: flex;
  align-items: center;
  color: white;
}

.iconeBusca{
  margin-left: 8px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>