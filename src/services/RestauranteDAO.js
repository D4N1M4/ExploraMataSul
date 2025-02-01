import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import FirestoreDAO from "./FirestoreDAO";

class RestauranteDAO extends FirestoreDAO {
constructor() {
super();
this.colecao = "restaurantes";
}

async adicionarRestaurante(restaurante) {
try {
    const id = await this.addDocument(this.colecao, restaurante);
    console.log("Restaurante adicionado com sucesso! ID:", id);
    return id;
} catch (error) {
    console.error("Erro ao adicionar restaurante:", error);
    throw new Error("Erro ao adicionar restaurante");
}
}

async getAllRestaurantes() {
    try {
    const restaurantesSnapshot = await getDocs(collection(db, this.colecao));

    const restaurantes = restaurantesSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
        id: doc.id,
        nome: data.nome,
        imagens: data.imagens || [],
        informacoes: data.informacoes,
        categoria: data.categoria,
        cidade: data.cidade,
        mapUrl: data.mapUrl,
        nicho: data.nicho
    };
    });
    return restaurantes;
} catch (error) {
    console.error("Erro ao obter restaurantes: ", error);
    throw new Error("Erro ao obter restaurantes");
}
}
async buscarPorNicho(nicho) {
try {
    const restaurantesRef = collection(db, this.colecao);
    const q = query(restaurantesRef, where("nicho", "==", nicho));
    const restaurantesSnapshot = await getDocs(q);

    const restaurantes = restaurantesSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
        id: doc.id,
        nome: data.nome,
        imagens: data.imagens || [],
        informacoes: data.informacoes,
        categoria: data.categoria,
        cidade: data.cidade,
        mapUrl: data.mapUrl,
        nicho: data.nicho
        };
    });
    return restaurantes;
    } catch (error) {
    console.error("Erro ao obter restaurantes por nicho: ", error);
    throw new Error("Erro ao obter restaurantes por nicho");
    }
}
}

export default RestauranteDAO;