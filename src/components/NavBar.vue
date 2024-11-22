<template>
<header>
    <nav class="menu">
    <!-- Logo -->
    <div class="logo">
        <img src="../assets/logosite.png" alt="Explora Mata Sul" />
    </div>

    <!-- Links do Menu -->
    <ul>
        <li class="highlight">Encontre o melhor lugar para você</li>
        <li><a href="#nossa-regiao">Nossa Região</a></li>
        <li><a href="#historico">Histórico</a></li>
        <li><a href="#litoral">Litoral</a></li>
        <li><a href="#lazer">Lazer</a></li>
        <li><a href="#trilhas">Trilhas</a></li>
        <li><a href="#restaurantes">Restaurantes</a></li>
    </ul>

    <!-- Botão de Login -->
    <div class="login-button">
        Login
    </div>
    </nav>
</header>
</template>

<style scoped>
/* Estilo do header */
.menu {
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
}

/* Estilo da logo */
.logo img {
height: 50px; /* Altura da logo */
width: auto; /* Manter a proporção */
}

/* Estilos restantes do menu */
.menu ul {
list-style: none;
display: flex;
align-items: center;
gap: 15px;
margin: 0;
padding: 0;
}
.menu li {
text-align: center;
}
.menu a {
text-decoration: none;
color: #FFFFFF;
font-weight: bold;
transition: color 0.3s ease;
}
.menu a:hover {
color: #5de69a;
}
.highlight {
position: relative;
background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
border-radius: 25px / 50%;
padding: 10px 20px;
color: #000000;
font-weight: bold;
font-size: 14px;
text-align: center;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.login-button {
background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
color: #FFFFFF;
padding: 10px 20px;
border: none;
font-weight: bold;
font-size: 14px;
border-radius: 25px / 50%;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
text-align: right;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.login-button:hover {
transform: scale(1.05);
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
