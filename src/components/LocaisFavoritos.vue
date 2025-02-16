<template>
<div class="locais-favoritos">
    <h2>Meus Locais Favoritos</h2>
    <div v-if="favoritos.length === 0">Nenhum local favoritado ainda.</div>
    <div class="locais-grid" v-else>
    <div v-for="local in favoritos" :key="local.id" class="favorito-container">
        <router-link :to="{ name: 'RestauranteDetalhe', params: { id: local.id } }" class="card-link">
        <RestauranteCard
            :nome="local.nome ?? 'Nome não disponível'"
            :categoria="local.categoria ?? 'Categoria não disponível'"
            :imagens="local.imagens"
        />
        </router-link>
        <Favoritar
        :localId="local.id"
        :favoritadoInicialmente="true"
        :nome="local.nome"
        :imagens="local.imagens"
        :categoria="local.categoria"
        @atualizarFavoritos="carregarFavoritos"
        />
    </div>
    </div>
</div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { auth, db } from '../firebase';
import Favoritar from './Favoritar.vue';
import RestauranteCard from './RestauranteCard.vue';
import FirestoreDAO from '@/services/FirestoreDAO';
import { FirebaseError } from 'firebase/app';

const favoritos = ref([]);

const restauranteDAO = new FirestoreDAO();

const carregarFavoritos = async () => {
const user = auth.currentUser;
if (!user) return;

const favoritosRef = collection(db, `usuarios/${user.uid}/favoritos`);
const snapshot = await getDocs(favoritosRef);

const resultFavorit = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
const listFav = [];
for (let index = 0; index < resultFavorit.length; index++){
    const element = resultFavorit[index];

    const result = await restauranteDAO.getById(element.id);
    listFav.push(result)
}
favoritos.value = listFav;

console.log("Locais favoritos carregados:", favoritos.value);
};
onMounted(() => {
carregarFavoritos();
});
</script>
