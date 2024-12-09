import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa o CSS do Font Awesome e seu próprio CSS
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';

// Configurações do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// Adiciona os ícones à biblioteca
library.add(faSearch, faSignOutAlt, faUser);

// Cria a aplicação Vue
const app = createApp(App);

// Registra o componente global do Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa o router
app.use(router);

// Monta a aplicação
app.mount('#app');
