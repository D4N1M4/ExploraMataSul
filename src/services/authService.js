// services/authService.js
import { auth } from "../firebase"; // Importa a instância correta de auth
import { createUserWithEmailAndPassword } from "firebase/auth"; // Função para criar um usuário

export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Passa a instância de auth
    console.log("Usuário criado:", userCredential.user);
    return userCredential.user; // Retorna o usuário criado
  } catch (error) {
    console.error("Erro ao criar conta:", error.message);
    throw error; // Lança o erro para tratamento posterior
  }
}
