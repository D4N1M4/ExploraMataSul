<template>
<footer>
    <div class="left-info">
    <h2>Explora Mata Sul</h2>
    <p>Mata Sul-PE, um lugar para todos! Um destino único, histórico e acolhedor</p>
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
  margin-bottom: 2px;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 2px;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

</style>
