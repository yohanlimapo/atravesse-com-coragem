//código dos carrso
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 3.5, 4.2, 6, 4.8, 3.4];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i <imagemCarros.length; i++){
    xCarros[i]-= velocidadeCarros[i];
    if (xCarros[i]<-40){
      xCarros[i] = 500;
    }
  }
}
