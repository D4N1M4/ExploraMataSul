import FirestoreDAO from "./FirestoreDAO";

class RestauranteDAO extends FirestoreDAO {
constructor() {
super("restaurantes");
}

async buscarPorNicho(nicho) {
const restaurantes = await this.buscarTodos();
return restaurantes.filter(restaurante => restaurante.nicho === nicho);
}
}

export default RestauranteDAO;

