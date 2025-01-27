<template>
<footer>
    <div class="left-info">
    <h2>Explora Mata Sul</h2>
    <p>Mata Sul-PE, um lugar para todos! Um destino único, histórico e acolhedor</p>
    </div>
    <div class="links">
          <ul>
            <li><router-link to="/NossaRegiao">Nossa Região</router-link></li>
            <li><router-link to="/Historico">Histórico</router-link></li>
            <li><router-link to="/Lazer">Lazer</router-link></li>
            <li><router-link to="/Restaurantes">Restaurantes</router-link></li>
            <li><router-link to="/RoteirosNaturais">Roteiros Naturais</router-link></li>
            <li><router-link to="/Litoral">Litoral</router-link></li>
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
  padding:80px 40px;
  position: relative;
  bottom: 0;
  width: 100%;
  left: 0;
}

footer .left-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 2;
}

footer .left-info h2, footer .left-info p:first-of-type {
  font-size: 24px;
  margin-bottom: 10px;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinha ao fundo */
  align-items: flex-end;     /* Alinha à direita */
  position: absolute;        /* Para posicionar no rodapé */
  bottom: 20px;              /* Distância do fundo */
  right: 40px;               /* Distância da borda direita */
}

.links ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  grid-gap: 1px;                        /* Espaço entre os itens */
}

.links li {
  margin: 1px 0;
}

.links a {
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.links a:hover {
  text-decoration: underline;
  color: #4CAF50;
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
