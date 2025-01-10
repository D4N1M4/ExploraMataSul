import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importação do CSS do Font Awesome
import './assets/main.css'; // Certifique-se de que você tem o seu próprio CSS aqui

// Configurações do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// Adiciona os ícones à biblioteca
library.add(faSearch, faSignOutAlt, faUser);

// Criação da aplicação Vue
const app = createApp(App);

// Registro do componente Font Awesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa o router
app.use(router);

// Monta a aplicação
app.mount('#app');
