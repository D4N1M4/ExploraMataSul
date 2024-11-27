<template>
<footer>
    <div class="left-info">
    <h2>Explora Mata Sul</h2>
    <p>MataSulPE, um lugar para todos! Um destino único, histórico e acolhedor</p>
    <p>MUNICÍPIOS ABRANGIDOS PELA MICRORREGIÃO</p>
    <div class="city-list">
        <a href="#cidade1">Água Preta</a>
        <a href="#cidade2">Amaraji</a>
        <a href="#cidade3">Barreiros</a>
        <a href="#cidade4">Belém de Maria</a>
        <a href="#cidade4">Bonito</a>
        <a href="#cidade1">Catende</a>
        <a href="#cidade2">Cortês</a>
        <a href="#cidade3">Gameleira</a>
        <a href="#cidade4">Jaqueira</a>
        <a href="#cidade1">Joaquim Nabuco</a>
        <a href="#cidade2">Maraial</a>
        <a href="#cidade3">Palmares</a>
        <a href="#cidade4">Primavera</a>
        <a href="#cidade1">Ribeirão</a>
        <a href="#cidade2">Rio Formoso</a>
        <a href="#cidade3">São Benedito do Sul</a>
        <a href="#cidade4">São José da Coroa Grande</a>
        <a href="#cidade1">Tamandaré</a>
        <a href="#cidade2">Xexéu</a>
    </div>
    </div>
    <div class="right-info">
    <ul>
        <li><a href="#nossa-regiao">Nossa Região</a></li>
        <li><a href="#historico">Histórico</a></li>
        <li><a href="#litoral">Litoral</a></li>
        <li><a href="#lazer">Lazer</a></li>
        <li><a href="#trilhas">Trilhas</a></li>
        <li><a href="#restaurantes">Restaurantes</a></li>
    </ul>
    </div>
    <div class="copyright">
        © 2024 Explora Mata Sul. Todos os direitos reservados.
    </div>
</footer>
</template>

<style scoped>
footer {
display: flex;
justify-content: space-between;
align-items: flex-start;
background-color: #336247;
color: #FFFFFF;
padding: 20px 40px;
position: fixed;
bottom: 0;
width: 100%;
left: 0;
}
footer .left-info {
flex: 2;
}
footer .left-info h2, footer .left-info p:first-of-type {
font-size: 24px;
margin-bottom: 5px;
text-align: center;
}
footer .left-info .subtitle,
.city-list {
text-align: left;
}
footer .left-info .subtitle {
margin-top: 10px;
font-weight: bold;
font-size: 14px;
}
footer .left-info p {
margin: 5px 0;
font-size: 16px;
}
.city-list {
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 10px;
margin-top: 10px;
}
.city-list a {
color: #FFFFFF;
text-decoration: none;
transition: color 0.3s ease;
text-align: left;
}
.city-list a:hover {
color: #5de69a;
}
.right-info {
margin-top: 55px;
align-self: flex-start;
text-align: left;
}
.right-info ul {
list-style: none;
padding: 0;
margin: 0;
text-align: right;
display: flex;
flex-direction: column;
}
.right-info li {
margin: 5px 0;
}

.right-info a {
color: #FFFFFF;
text-decoration: none;
transition: color 0.3s ease;
}

.right-info a:hover {
color: #5de69a;
}
.copyright {
text-align: center;
font-size: 14px;
color: #FFFFFF;
margin-top: 10px;
position: absolute;
width: 100%;
bottom: 0;
left: 0;
}
</style>
