import RestauranteDAO from "./RestauranteDAO";


const restaurantes = [
{
nome: "Vaso de Alabasto",
categoria: "Restaurante",
cidade: "Palmares",
informacoes: "Restaurante com comidas típicas da região.",
mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp", ""],
nicho: 1
},
{
    nome: "Keylla Sweets",
    categoria: "Restaurante",
    cidade: "Gameleira",
    informacoes: "Restaurante com comidas típicas da região.",
    mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
    imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp", ""],
    nicho: 2
    },
    {
        nome: "Parrilha Prime",
        categoria: "Restaurante",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
        imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp", ""],
        nicho: 5
        },
];

async function cadastrarRestaurantes() {
const restauranteDAO = new RestauranteDAO();

try {
for (const restaurante of restaurantes) {
    await restauranteDAO.adicionarRestaurante(restaurante);
}
console.log("Todos os restaurantes foram cadastrados com sucesso!");
} catch (error) {
console.error("Erro ao cadastrar restaurantes:", error);
}
}

cadastrarRestaurantes();
