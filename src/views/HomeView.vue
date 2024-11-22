<script setup>
import Carrossel from '@/components/Carrossel.vue';
</script>

<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"> <img src="../assets/logosite.png" alt="Logo" class="logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav"> <form class="d-flex align-items-center me-auto">
      <button class="btn btn-primary d-flex align-items-center" type="button">
        <i class="fas fa-search"></i> Encontre o melhor lugar para você
        </button> </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Nossa Região</a>
          </li> <li class="nav-item">
            <a class="nav-link" href="#">Histórico</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Litoral</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lazer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trilhas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Restaurantes</a>
          </li>
        </ul>
        <button class="btn btn-outline-primary ms-2" type="button">Login</button>
      </div>
    </nav>
    <Carrossel/>
  </div>
</template>

<style scoped>
.navbar-brand .logo {
  height: 40px;
  margin-right: 10px;
}
.btn-light {
  display: flex;
  align-items: center;
}
.btn-light i {
  margin-right: 5px;
}
.btn-outline-primary{
  display: flex;
  align-items: center;
  color: #007bff;
  border-color: #007bff;
}
.navbar-nav .nav-link {
  margin-left: 10px;
  }
</style>