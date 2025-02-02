<script setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import BarraDePesquisa from '@/components/BarraDePesquisa.vue';
</script>

<template>
<div id="home">
<NavBar />
<BarraDePesquisa />
<main>
<div class="area-visual">
    <div class="imagem-banner">
        <img src="https://raw.githubusercontent.com/evellysilva/explora_mataSul-imgs/main/Históricos-20241218T011238Z-001/Históricos/Educandário São Joaquim - Jaqueira/ESJ.webp" alt="Imagem da região" />
        <div class="texto-banner">
        <div class="nossa-regiao">Mata Sul</div>
        </div>
    </div>
    </div>
<section class="informacoes">
    <div class="conteudo">
        <p>
            A Zona da Mata de Pernambuco foi um dos primeiros espaços brasileiros a ser explorado economicamente, desde a primeira metade do século XVI, com a extração do pau-brasil e, posteriormente, com o cultivo da cana-de-açúcar, quando surgiram os primeiros engenhos, marca registrada da região até os dias de hoje.
A Mata Sul Pernambucana é um território, na divisão do Ministério do Desenvolvimento Agrário, que tem em sua história uma economia com raízes culturais ligadas à agroindústria canavieira. Privilegiado pelo rico patrimônio histórico e imaterial e pelas belezas naturais de suas praias, estuários e cachoeiras, o território é também marcado por histórias de resistência e lutas pela sobrevivência, uma vez que é onde se concentra a força de trabalho dos menos privilegiados.


Nas ultimas décadas, com o declínio da cultura da cana-de-açúcar por fatores diversos, a Mata Sul de Pernambuco vem sofrendo dificuldades; porém, a diversificação econômica, a organização social e a reforma agrária são processos importantes para a reconstrução do território.A Árvore do Conhecimento do Território da Mata Sul Pernambucana traz informações sobre a região, abrangendo desde as suas características; atividades econômicas; políticas públicas; programas e projeto; instituições atuantes; até a organização social; além do acesso a recursos de informação na íntegra. As informações podem ser obtidas pela navegação numa estrutura ramificada em forma de árvore hiperbólica, por hipertexto ou pelo serviço de busca.
Fonte: embrapa.br      
        </p>
    </div>
    <section class="lista-cidades">
        <h2>Municípios Abrangidos</h2>
        <div class="cidades-container">
            <ul>
                <li><a href="https://aguapreta.pe.gov.br/">Água Preta</a></li>
                <li><a href="https://amaraji.pe.gov.br/">Amaraji</a></li>
                <li><a href="https://barreiros.pe.gov.br/">Barreiros</a></li>
                <li><a href="https://belemdemaria.pe.gov.br/">Belém de Maria</a></li>
                <li><a href="https://catende.pe.gov.br/">Catende</a></li>
                <li><a href="https://chagrande.pe.gov.br/">Chã Grande</a></li>
                <li><a href="https://cortes.pe.gov.br/">Cortês</a></li>
                <li><a href="https://escada.pe.gov.br/">Escada</a></li>
                <li><a href="https://gameleira.pe.gov.br/">Gameleira</a></li>
                <li><a href="https://www.jaqueira.pe.gov.br/">Jaqueira</a></li>
                <li><a href="https://joaquimnabuco.pe.gov.br/">Joaquim Nabuco</a></li>
                <li><a href="https://maraial.pe.gov.br/">Maraial</a></li>
                <li><a href="https://www.palmares.pe.gov.br/">Palmares</a></li>
                <li><a href="https://primavera.pe.gov.br/">Primavera</a></li>
                <li><a href="https://quipapa.pe.gov.br/v1/">Quipapá</a></li>
                <li><a href="https://www.ribeirao.pe.gov.br/">Ribeirão</a></li>
                <li><a href="https://www.rioformoso.pe.gov.br/">Rio Formoso</a></li>
                <li><a href="https://saobeneditodosul.pe.gov.br/">São Benedito do Sul</a></li>
                <li><a href="https://sirinhaem.pe.gov.br/">Sirinhaém</a></li>
                <li><a href="https://saojosedacoroagrande.pe.gov.br/">São José da Coroa Grande</a></li>
                <li><a href="https://tamandare.pe.gov.br/">Tamandaré</a></li>
                <li><a href="https://www.prefeituradavitoria.pe.gov.br/portal/">Vitória de Santo Antão</a></li>
                <li><a href="https://site.xexeu.pe.gov.br/">Xexéu</a></li>

            </ul>
        </div>
    </section> 
</section>
</main>
</div>
<Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
}

/* Estrutura Principal */
#home {
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  width: 100%;
  flex: 1;
}

/* Área Visual */
.area-visual {
  padding-top: 80px;
  padding-bottom: 60px;
  color: #fff;
  position: relative;
}

.imagem-banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.texto-banner {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.nossa-regiao {
  background: linear-gradient(135deg, rgb(109, 205, 186), rgba(44, 136, 83, 0.3));
  color: #000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px / 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: right;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Informações */
.informacoes {
  background-color: #e7f6ec;
  padding: 40px 20px;
}

.informacoes .conteudo {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.informacoes h2 {
  font-family: 'Playfair Display', sans-serif;
  color: #2d5238;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.informacoes p {
  font-size: 1rem;
  color: #333;
  text-align: justify;
}

.lista-cidades {
  text-align: center;
  margin: 40px 0;
}

.cidades-container {
  display: flex;
  justify-content: center;
}

.cidades-container ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
}

.cidades-container li {
  padding: 10px;
  background: #2d5238;;
  border-radius: 8px;
  text-align: center;
}

.cidades-container a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.cidades-container li:hover {
    background: linear-gradient(135deg, #4CAF50, #2d5238);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .pesquisa {
    top: 80px;
    width: 90%;
    padding: 10px;
  }

  .pesquisa input {
    padding: 12px;
    font-size: 0.9rem;
  }

  .bloco {
    flex-direction: column;
    height: auto;
  }

  .bloco img {
    width: 100%;
    height: auto;
  }

  .bloco .texto-lado {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .pesquisa {
    top: 60px;
    width: 95%;
    border-radius: 15px;
  }

  .pesquisa input {
    padding: 10px;
    font-size: 0.85rem;
  }
}

/* Rodapé */
footer {
  background-color: #2d5238;
  color: white;
  text-align: center;
  padding: 20px;
}

/* Fontes Globais */
h1, h2, h3, .nossa-regiao, .texto-lado h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

p, a, .texto-lado p {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}

</style>