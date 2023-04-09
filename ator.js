//variáveis do ator
let xAtor = 100;
let yAtor = 370;
var colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5;
      }
  if (keyIsDown(DOWN_ARROW)){
    if (yAtor < 370){
      yAtor += 5;
    }
  }
}

function verificaColisao(){
 for (let i = 0; i <imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 20)
   if (colisao){
     yAtor = 370;
     somColisao.play();
     if (meusPontos > 0){
       meusPontos -= 1;
     }
   }
 } 
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(24);
  fill(color(255,250,0));
  text(meusPontos, width / 4, 27);
  if (yAtor < -10){
    meusPontos += 1;
    yAtor = 370;
  }
}