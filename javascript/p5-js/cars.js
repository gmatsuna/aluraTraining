let xCarrosSuperior = [650, 650, 650];
let xCarrosInferior = [50, 50, 50];
let yCarrosSuperior = [65, 150, 230];
let yCarrosInferior = [325, 400, 490];
let carsSpeedUpper = [2, 2.5, 3.2];
let carsSpeedLower = [3.5, 2, 2.5];
let comprimentoCarros = 60;
let larguraCarros = 45;

function mostrarCarros() {
    image(car1, xCarrosSuperior[0], yCarrosSuperior[0], comprimentoCarros, larguraCarros);
    image(car2, xCarrosSuperior[1], yCarrosSuperior[1], comprimentoCarros, larguraCarros);
    image(car3, xCarrosSuperior[2], yCarrosSuperior[2], comprimentoCarros, larguraCarros);
    image(car4, xCarrosInferior[0], yCarrosInferior[0], comprimentoCarros, larguraCarros);
    image(car5, xCarrosInferior[1], yCarrosInferior[1], comprimentoCarros, larguraCarros);
    image(car6, xCarrosInferior[2], yCarrosInferior[2], comprimentoCarros, larguraCarros);
}

function moveCarsUpper() {
    for (let i = 0; i < carsUpper.length; i++) {
        xCarrosSuperior[i] -= carsSpeedUpper[i];
    }
}

function moveCarsLower() {
    for (let i = 0; i < carsLower.length; i++) {
        xCarrosInferior[i] += carsSpeedLower[i];
        
    }
}