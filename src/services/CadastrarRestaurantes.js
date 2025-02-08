import FirestoreDAO from "./FirestoreDAO.js";


const restaurantes = [
{
nome: "Vitória Restaurante",
categoria: "Regional",
cidade: "Palmares",
informacoes: "Restaurante com comidas típicas da região.",
mapUrl: "!1m18!1m12!1m3!1d3944.3171209880634!2d-35.57308532593502!3d-8.661360088134684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a015febea589%3A0x9216690b771d520a!2sVitoria%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1739048087055!5m2!1spt-BR!2sbr",
imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021718_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021602_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021657_Instagram.jpg?raw=true"],

},
{
    nome: "Keylla Sweets",
    categoria: "Doceria",
    cidade: "Gameleira",
    informacoes: "Restaurante com comidas típicas da região.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.115355195131!2d-35.583666699999995!3d-8.6805791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a1f3271c36d3%3A0x2fcf29ffa09e21fd!2sRestaurante%20e%20Pizzaria%20Vaso%20de%20Alabastro!5e0!3m2!1spt-BR!2sbr!4v1738891911047!5m2!1spt-BR!2sbr",
    imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_020255_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_020328_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_020723_Instagram.jpg?raw=true"
    ],
    },
    {
        nome: "Parrilha Prime",
        categoria: "Chirrascaria",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "https://maps.app.goo.gl/SdUF42GgLzdMhN4u6",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021016_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021316_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021122_Instagram.jpg?raw=true"],
    },
    {
        nome: "Osso do patinho",
        categoria: "Regional",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d3944.0420413756337!2d-35.602325025934505!3d-8.687552088479313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a1b9f120df7b%3A0xbe0ac06982f7953b!2sBar%20e%20Restaurante%20Osso%20do%20Patinho!5e0!3m2!1spt-BR!2sbr!4v1739047886732!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021016_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021027_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021122_Instagram.jpg?raw=true"],
        },
    {
        nome: "O Nordestão",
        categoria: "Regional",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d3944.2202356306734!2d-35.57854712593476!3d-8.67059408825605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa0aa929eaf891%3A0xe7953b5a1f9caf52!2sRestaurante%20O%20Nordest%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1739047842109!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021448_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021500_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_021509_Instagram.jpg?raw=true"],
        },
    {
        nome: "Bom de Brasa Burgue",
        categoria: "Hamburgueria",
        cidade: "Agua Preta",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d3943.870846690498!2d-35.52564162593433!3d-8.70381308869382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7009fe5ff9dae75%3A0x77b21567c3b47081!2sBom%20de%20Brasa%20Burger!5e0!3m2!1spt-BR!2sbr!4v1739047735239!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022243_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022254_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022304_Instagram.jpg?raw=true"],
        },
    {
        nome: "Churrasqueira e pizzaria dois irmãos",
        categoria: "Regional",
        cidade: "Agua Preta",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d3943.8366128535786!2d-35.5241047259343!3d-8.707061188736686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7009facb364005d%3A0x7d7c67fc09565fa7!2sChurrasqueira%20e%20pizzaria%20dois%20irm%C3%A3os!5e0!3m2!1spt-BR!2sbr!4v1739047596157!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022521_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022547_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022543_Instagram.jpg?raw=true"],
    },
    {
        nome: "Cacareco GastroBar",
        categoria: "GastroBar",
        cidade: "Palmares",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d3944.0478587877706!2d-35.601550725934516!3d-8.686998988471975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a1cb78a2d0bf%3A0xb0b140b87e106224!2sCacareco%20gastrobar!5e0!3m2!1spt-BR!2sbr!4v1739047538174!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022844_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022917_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022900_Instagram.jpg?raw=true"],
    },
    {
        nome: "Gastro Bar The House",
        categoria: "GastroBar",
        cidade: "Tamandaré",
        informacoes: "Restaurante com comidas típicas da região.",
        mapUrl: "!1m18!1m12!1m3!1d1009393.0880625215!2d-36.213151674374906!3d-8.791543209949278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007924829b0cbd%3A0x220bf69b74d0a173!2sThe%20House%20Gastrobar!5e0!3m2!1spt-BR!2sbr!4v1739046994819!5m2!1spt-BR!2sbr",
        imagens: ["https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022734_Instagram.jpg?raw=true",
        "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022659_Instagram.jpg?raw=true",
    "https://github.com/evellysilva/explora_mataSul-imgs/blob/main/Restaurantes/parrilha%20Prime/Screenshot_20250129_022651_Instagram.jpg?raw=true"],
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
