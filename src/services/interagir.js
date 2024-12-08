import { db } from "./firebase";

async function addDocument(collection, data) {
  try {
    const docRef = await db.collection(collection).add(data);
    console.log("Documento adicionado com ID:", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar documento:", error.message);
  }
}