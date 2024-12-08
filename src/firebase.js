// firebase.js
import { initializeApp } from 'firebase/app'; // Para inicializar o Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Para autenticação

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
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
