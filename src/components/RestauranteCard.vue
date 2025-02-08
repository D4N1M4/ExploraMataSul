<script setup>
import { computed } from 'vue';
import logosite from '../assets/logosite.png';

const props = defineProps({
nome: {
type: String,
required: true
},

titulo: String,

imagens: {
type: Array,
required: false,
default: () => []
},
categoria: {
type: String,
required: true
},
});

const maxLength = 100;

const fullImageUrl = computed(() => {
return props.imagens && props.imagens.length > 0 &&  props.imagens[0] ? props.imagens[0]: logosite;
});

console.log('Imagens recebidas:', props.imagens);
console.log('URL da imagem usada:', fullImageUrl.value);
</script>

<template>
<div class="card mb-3 custom-card">
    <img :src="fullImageUrl" class="card-img-top" alt="Imagem do Local">
    <div class="card-body">
    <h5 class="card-title">{{ nome }}</h5>
    <p class="card-category"> {{ categoria }}</p>
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
height: 150px;
object-fit: cover;
display: block;
margin: 0 auto;
margin-top: 10px;
}
.card-body {
padding: 15px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.card-category {
  font-size: 1rem;
  color: #555;
  margin-top: 0;
}

.card {
border: 1px solid #ddd;
border-radius: 5px;
}

.btn {
margin-top: 10px;
}
</style>