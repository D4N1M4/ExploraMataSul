<template>
    <div id="indicadoresCarrossel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> 
            <button type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide-to="1" aria-label="Slide 2"></button> 
            <button type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide-to="2" aria-label="Slide 3"></button> 
            <button type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide-to="4" aria-label="Slide 5"></button> 
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/hotelFazenda.jpeg" class="d-block w-100" alt="Hotel Fazenda - Bonito">
                <div class="carousel-caption d-none d-md-block">
                    <h5><i class="fas fa-search"></i> Hotel Fazenda - Bonito</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/imagemFundo.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><i class="fas fa-search"></i> Hotel Fazenda - Bonito</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/jardimBotanico.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><i class="fas fa-search"></i> Hotel Fazenda - Bonito</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/tamandare.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><i class="fas fa-search"></i> Hotel Fazenda - Bonito</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/jardimBotanico.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><i class="fas fa-search"></i> Hotel Fazenda - Bonito</h5>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#indicadoresCarrossel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
        </button>
    </div>
</template>
<style scoped>
.carousel {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.carousel-inner {
    border-radius: 10px;
}

.carousel-item img {
    object-fit: cover;
    border-radius: 10px;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
}
</style>