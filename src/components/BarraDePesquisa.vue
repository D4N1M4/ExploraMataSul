<template>
    <div>
      <input
        type="text"
        v-model="query"
        placeholder="Pesquisar por nome, cidade ou categoria..."
        @input="search"
      />
      <ul v-if="results.length">
        <li v-for="result in results" :key="result.path">
          <a :href="result.path">{{ result.name }} ({{ result.meta.city }} - {{ result.meta.category }})</a>
        </li>
      </ul>
      <p v-else>Nenhum local encontrado.</p>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    data() {
      return {
        query: "", // Entrada do usuário
        results: [], // Resultados filtrados
      };
    },
    setup() {
      const router = useRouter(); // Acesso ao roteador
      return { router };
    },
    methods: {
      search() {
        const routes = this.router.getRoutes(); // Obter todas as rotas definidas
  
        if (this.query.trim() === "") {
          this.results = []; // Limpar resultados se o campo de busca estiver vazio
          return;
        }
  
        const normalizedQuery = this.query
          .normalize("NFD") // Remove acentos
          .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
          .toLowerCase(); // Converte para minúsculo
  
        // Filtrar rotas por nome, cidade ou categoria
        this.results = routes.filter((route) => {
          const { name, meta } = route;
          return (
            (name && name.toLowerCase().includes(normalizedQuery)) || // Nome da rota
            (meta?.city &&
              meta.city
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(normalizedQuery)) || // Cidade
            (meta?.category &&
              meta.category
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(normalizedQuery)) // Categoria
          );
        });
      },
    },
  };
  </script>
  
  <style>
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  