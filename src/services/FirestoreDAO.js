import { db } from "@/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

class FirestoreDAO {
constructor(nomeColecao) {
this.colecao = collection(db, nomeColecao);
}

async buscarTodos() {
const snapshot = await getDocs(this.colecao);
return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}


async buscarPorId(id) {
const ref = doc(this.colecao, id);
const snapshot = await getDoc(ref);
return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

async adicionar(dados) {
const docRef = await addDoc(this.colecao, dados);
return { id: docRef.id, ...dados };
}

async atualizar(id, novosDados) {
const ref = doc(this.colecao, id);
await updateDoc(ref, novosDados);
}

async remover(id) {
const ref = doc(this.colecao, id);
await deleteDoc(ref);
}
}

export default FirestoreDAO;