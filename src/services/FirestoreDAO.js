import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.js";

class FirestoreDAO {

async getAll() {
try {
    const locaisSnapshot = await getDocs(collection(db, 'locais'));

    const documents = locaisSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
        id: doc.id,
        nome: data.nome,
        imagens: data.imagens[0],
        informacoes: data.informacoes,
        categoria: data.categoria,
        cidade: data.cidade,
        mapUrl: data.mapUrl
    };
    });
    return documents;
} catch (error) {
    console.error('Erro ao buscar documentos: ', error);
    throw new Error('Erro ao buscar documentos');
}
}

async getByName(nome) {
try {
    const locaisRef = collection(db, 'locais');
    const q = query(locaisRef, where('nome', '>=', nome), where('nome', '<=', nome + '\uf8ff'));
    const locaisSnapshot = await getDocs(q);

    const documents = locaisSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
        id: doc.id,
        nome: data.nome,
        imagens: data.imagens,
        informacoes: data.informacoes,
        categoria: data.categoria,
        cidade: data.cidade,
        mapUrl: data.mapUrl
    };
    });
    return documents;
} catch (error) {
    console.error('Erro ao buscar documentos: ', error);
    throw new Error('Erro ao buscar documentos');
}
}

async getById(id) {
try {
    const localDoc = await getDoc(doc(db, 'locais', id));
    if (localDoc.exists()) {
    return { id: localDoc.id, ...localDoc.data() };
    } else {
    throw new Error('Local não encontrado');
    }
} catch (error) {
    console.error('Erro ao buscar local:', error);
    throw new Error('Erro ao buscar local');
}
}
async createLocal(local) {
try {
    const docRef = await addDoc(collection(db, "locais"), local);
    console.log("Local inserido com sucesso, ID:", docRef.id);
    return docRef.id;
} catch (error) {
    console.error("Erro ao adicionar documento:", error);
    throw new Error("Erro ao inserir local no banco de dados");
}
}

async addFavorite(userId, restauranteId) {
try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
    favoritos: arrayUnion(restauranteId)
    });
} catch (error) {
    console.error('Erro ao adicionar favorito: ', error);
    throw new Error('Erro ao adicionar favorito');
}
}

async removeFavorite(userId, restauranteId) {
try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
    favoritos: arrayRemove(restauranteId)
    });
} catch (error) {
    console.error('Erro ao remover favorito: ', error);
    throw new Error('Erro ao remover favorito');
}
}
}

export default FirestoreDAO;