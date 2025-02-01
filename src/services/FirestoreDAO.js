import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

class FirestoreDAO {

    async addDocument(colecao, dados) {
        try {
            const docRef = await addDoc(collection(db, colecao), dados);
            console.log(`${colecao.charAt(0).toUpperCase() + colecao.slice(1)} adicionado com sucesso! ID: ${docRef.id}`);
            return docRef.id;
        } catch (error) {
            console.error(`Erro ao adicionar ${colecao}: `, error);
            throw new Error(`Erro ao adicionar ${colecao}`);
        }
    }

    async getAllLocais() {
        try {
            const locaisSnapshot = await getDocs(collection(db, 'locais'));
            const locais = locaisSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    nome: data.nome,
                    imagens: data.imagens,
                    informacoes: data.informacoes,
                    categoria: data.categoria,
                    cidade: data.cidade,
                    mapUrl: data.mapUrl,
                };
            });
        return locais;
        } catch (error) {
        console.error('Erro ao obter locais: ', error);
        throw new Error('Erro ao obter locais');
        }
    }

async getLocalById(id) {
    try {
        const localDoc = await getDoc(doc(db, 'locais', id));
        if (localDoc.exists()) {
        return { id: localDoc.id, ...localDoc.data() };
        } else {
        throw new Error('Local não encontrado');
        }
    } catch (error) {
        console.error('Erro ao obter local:', error);
        throw new Error('Erro ao obter local');
    }
    }

async getLocaisByCategoria(categoria) {
    try {
        const locaisRef = collection(db, 'locais');
        const q = query(locaisRef, where('categoria', '==', categoria));
        const locaisSnapshot = await getDocs(q);

        const locais = locaisSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            nome: data.nome,
            imagens: data.imagens,
            informacoes: data.informacoes,
            categoria: data.categoria,
            cidade: data.cidade,
            mapUrl: data.mapUrl,
        };
        });
        return locais;
    } catch (error) {
        console.error('Erro ao obter locais por categoria: ', error);
        throw new Error('Erro ao obter locais por categoria');
    }
    }

    async updateLocal(id, updates) {
    try {
        const localRef = doc(db, 'locais', id);
        await updateDoc(localRef, updates);
        console.log('Local atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar local: ', error);
        throw new Error('Erro ao atualizar local');
    }
    }
}
    
export default FirestoreDAO;