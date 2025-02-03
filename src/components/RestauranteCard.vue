<script setup>
if (typeof require !== 'function') {
var require = function(module) {
};
}

import { computed } from 'vue';
const props = defineProps({
nome: {
type: String,
import: true
},
imagens: {
type: Array,
requered: false,
default: () => []
},
categoria: {
type: String,
requered: true
},
});

const maxLength = 100;

const fullImageUrl = computed(() => {
return props.imagens.length > 0 ? props.imagens[0] : require('../assets/logosite.png');
});
</script>
<template>
<div class="card mb-3 custom-card">
    <img :src="fullImageUrl" class="card-img-top" alt="Imagem do Local">
    <div class="card-body">
    <h5 class="card-title">{{ nome }}</h5>
    <p class="card-category"><strong>Categoria:</strong> {{ categoria }}</p>
    </div>
</div>
</template>
<style scoped>
.custom-card {
width: 325px;
height: auto;
}

.card-img-top {
width: 200px;
height: auto;
object-fit: cover;
display: block;
margin: 0 auto;
margin-top: 10px;
}

.card-body {
padding: 15px;
}

.card {
border: 1px solid #ddd;
border-radius: 5px;
}

.btn {
margin-top: 10px;
}
</style>