// firebase.js
import { initializeApp } from 'firebase/app'; // Para inicializar o Firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Importa auth e GoogleAuthProvider

const firebaseConfig = {
  apiKey: "AIzaSyCfa--ZgB_JP583AfA1Gy4VUUqw3XaPVG0",
  authDomain: "explora-matasul.firebaseapp.com",
  projectId: "explora-matasul",
  storageBucket: "explora-matasul.firebasestorage.app",
  messagingSenderId: "17736031538",
  appId: "1:17736031538:web:8b06f532c7add1d672cb2b",
  measurementId: "G-ZC8NNTR5N5"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém o serviço de autenticação
export const auth = getAuth(app);

// Exporta o GoogleAuthProvider para login com Google
export const provider = new GoogleAuthProvider();

// Exporta a instância do Firebase caso precise em algum lugar
export default app;
