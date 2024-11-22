<template>
<footer>
    <div class="left-info">
    <p>Descubra mais sobre nossa região, selecione uma cidade abaixo:</p>
    <div class="city-list">
        <a href="#cidade1">Cidade 1</a>
        <a href="#cidade2">Cidade 2</a>
        <a href="#cidade3">Cidade 3</a>
        <a href="#cidade4">Cidade 4</a>
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
</footer>
</template>

<style scoped>
footer {
display: flex;
justify-content: space-between;
align-items: center;
background-color: #336247;
color: #FFFFFF;
padding: 20px 40px;
position: fixed;
bottom: 0;
width: 100%;
left: 0;
}
footer .left-info {
text-align: left;
}
footer .right-info {
text-align: right;
}
.city-list a {
display: inline-block;
margin-right: 10px;
color: #FFFFFF;
text-decoration: none;
transition: color 0.3s ease;
}
.city-list a:hover {
color: #5de69a;
}
</style>
