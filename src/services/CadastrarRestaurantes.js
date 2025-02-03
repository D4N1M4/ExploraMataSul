import FirestoreDAO from "./FirestoreDAO.js";


const restaurantes = [
{
nome: "Vaso de Alabasto",
categoria: "Regional",
cidade: "Palmares",
informacoes: "Restaurante com comidas típicas da região.",
mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
        "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/roteiros-naturais/Serra%20da%20Prata%20-%20Catende/Imagem%20do%20WhatsApp%20de%202025-01-22%20%C3%A0(s)%2023.10.30_80990c9b.jpg?raw=true"],

},
{
    nome: "Keylla Sweets",
    categoria: "Doceria",
    cidade: "Gameleira",
    informacoes: "Restaurante com comidas típicas da região.",
    mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
    imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
        "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/roteiros-naturais/Serra%20da%20Prata%20-%20Catende/Imagem%20do%20WhatsApp%20de%202025-01-22%20%C3%A0(s)%2023.10.30_80990c9b.jpg?raw=true"
    ],
    },
    {
        nome: "Parrilha Prime",
        categoria: "Churrascaria",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
        imagens: ["https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
        "https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/refs/heads/main/roteiros-naturais/Cachoeira%20Peri%20Peri%20-%20S%C3%A3o%20Benedito%20do%20Sul/1__mg_9136-17058192.webp",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/roteiros-naturais/Serra%20da%20Prata%20-%20Catende/Imagem%20do%20WhatsApp%20de%202025-01-22%20%C3%A0(s)%2023.10.30_80990c9b.jpg?raw=true"],
        },
];

async function cadastrarRestaurantes() {
const restauranteDAO = new FirestoreDAO();

try {
for (const restaurante of restaurantes) {
    await restauranteDAO.createLocal(restaurante);
}
console.log("Todos os restaurantes foram cadastrados com sucesso!");
} catch (error) {
console.error("Erro ao cadastrar restaurantes:", error);
}
}

cadastrarRestaurantes();
