<template>
<button @click="alternarFavorito" class="botao-favorito">
    <font-awesome-icon 
    :icon="favoritado ? ['fas', 'heart'] : ['far', 'heart']"
    :class="{ 'icon-favoritado': favoritado }"
    />
</button>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { auth, db } from "../firebase";

library.add(fasHeart, farHeart);

export default {
components: {
    FontAwesomeIcon,
},
props: {
    localId: {
    type: String,
    required: true,
    },
    favoritadoInicialmente: {
    type: Boolean,
    default: false,
    },
    nome: {
    type: String,
    default: "",
    },
    imagens: {
    type: String,
    default:"",
    },
    categoria: {
    type: String,
    default: "",
    },
},
emits: ["atualizarFavoritos"],
setup(props, { emit }) {
    const favoritado = ref(props.favoritadoInicialmente);

    onMounted(async () => {
    const user = auth.currentUser;
    if (!user) return;
    const favoritoRef = doc(db, `usuarios/${user.uid}/favoritos`, props.localId);
    const favoritoSnap = await getDoc(favoritoRef);
    favoritado.value = favoritoSnap.exists();
});
const alternarFavorito = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const favoritoRef = doc(db, `usuarios/${user.uid}/favoritos`, props.localId);
    if (favoritado.value) {
        await deleteDoc(favoritoRef);
    } else {
        await setDoc(favoritoRef, {
        id: props.localId,
        nome: props.nome,
        imagens: props.imagens,
        categoria: props.categoria
        });
    }
    favoritado.value = !favoritado.value;
    emit("atualizarFavoritos");
    };
    return { favoritado, alternarFavorito };
},
};
</script>

<style scoped>
.botao-favorito {
background: none;
border: none;
font-size: 24px;
cursor: pointer;
padding: 5px;
display: inline-block;
}
.icon-favoritado {
color: red !important;
}
</style>
