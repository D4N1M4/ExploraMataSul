<template>
    <div class="perfil-container">
      <h1>Perfil de {{ userEmail }}</h1>
      <p>Aqui estão os detalhes do perfil do usuário...</p>
      <!-- Outros dados do usuário podem ser exibidos aqui -->
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      // Supondo que você tenha o email do usuário armazenado no estado ou no localStorage
      userEmail() {
        return localStorage.getItem("userEmail");
      },
    },
  };
  </script>
  
  <style scoped>
  .perfil-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    color: #387251;
  }
  
  p {
    font-size: 16px;
    color: #333;
  }
  </style>
  