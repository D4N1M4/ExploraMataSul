<template>
  <div class="barra-de-pesquisa">
    <input
      type="text"
      placeholder="Pesquise por nome, cidade ou categoria"
      v-model="query"
      @input="atualizarSugestoes"
    />
    <button @click="realizarPesquisa" class="botao-icone">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>

    <!-- Exibe as sugestões -->
    <ul v-if="sugestoes.length" class="sugestoes">
      <li 
        v-for="(sugestao, index) in sugestoes" 
        :key="index" 
        @click="selecionarSugestao(sugestao)"
      >
        {{ sugestao.nome }} - {{ sugestao.city }} ({{ sugestao.category }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import router from '@/router';

const query = ref('');
const sugestoes = ref([]);
const routerInstance = useRouter();

// Adiciona informações de meta corretamente
const rotasDisponiveis = router.getRoutes().map((rota) => ({
  nome: rota.name || '',
  path: rota.path,
  city: rota.meta?.city || '', // Cidade definida no meta da rota
  category: rota.meta?.category || '', // Categoria definida no meta da rota
}));

function atualizarSugestoes() {
  if (query.value.trim()) {
    const termo = query.value.toLowerCase();
    sugestoes.value = rotasDisponiveis.filter((rota) =>
      rota.nome.toLowerCase().includes(termo) ||
      rota.city.toLowerCase().includes(termo) ||
      rota.category.toLowerCase().includes(termo)
    );
  } else {
    sugestoes.value = []; // Limpa as sugestões se o input estiver vazio
  }
}

function realizarPesquisa() {
  if (!query.value.trim()) {
    alert('Por favor, insira um termo de busca.');
    return;
  }

  const termo = query.value.toLowerCase();
  const rotaEncontrada = rotasDisponiveis.find((rota) =>
    rota.nome.toLowerCase().includes(termo) ||
    rota.city.toLowerCase().includes(termo) ||
    rota.category.toLowerCase().includes(termo)
  );

  if (rotaEncontrada) {
    routerInstance.push(rotaEncontrada.path);
  } else {
    alert('Nenhum resultado encontrado.');
  }
}

function selecionarSugestao(sugestao) {
  query.value = sugestao.nome; // Atualiza o input com a sugestão selecionada
  realizarPesquisa(); // Redireciona para a rota da sugestão
}
</script>


<style scoped>
.barra-de-pesquisa {
  display: flex;
  flex-direction: row; /* Alinha os itens horizontalmente */
  gap: 10px; /* Espaço entre o input e o botão */
  margin-bottom: 20px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px;
  z-index: 10;
  background-color: rgba(62, 157, 116, 0.729);
  border-radius: 25px;
  padding: 5px;
}

input {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-grow: 1; /* Faz o input ocupar o espaço restante */
}

.botao-icone {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: #fff;
  border: none;
  border-radius: 50%; /* Torna o botão circular */
  cursor: pointer;
  width: 40px; /* Define tamanho do botão */
  height: 40px; /* Define tamanho do botão */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.botao-icone:hover {
  background-color: #00ff0d;
}

.sugestoes {
  list-style: none;
  margin: 10px 0 0; /* Espaço acima da lista */
  padding: 10px;
  background-color: rgba(95, 169, 137, 0.729);
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: calc(100% + 5px); /* Ajusta a lista logo abaixo do input */
  left: 0;
  right: 0;
  z-index: 100; /* Garante que fique acima de outros elementos */
}

.sugestoes li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sugestoes li:hover {
  background-color: #f0f0f0;
}

</style>
