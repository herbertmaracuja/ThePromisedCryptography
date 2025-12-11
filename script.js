// ===== SISTEMA DE TELAS =====
function trocarTela(id){

  const atual = document.querySelector(".ativa");
  if(atual) atual.classList.remove("ativa");

  setTimeout(()=>{
    const nova = document.getElementById(id);
    if(nova) nova.classList.add("ativa");
  },400);

}

// ===== HISTÓRIA =====
const historia = `
Em um dia normal no orfanato Gracefield encontrei um papel em um dos livros da blibioteca do Minerva,
e lá dizia toda a realidade deste lugar... Preciso desifrar esse código e fugir o mais rapido posssivel!
`;

let i = 0;

const texto = document.getElementById("texto");
const continuar = document.getElementById("continuar");

function iniciarHistoria(){
  i = 0;
  if(texto) texto.innerHTML = "";
  if(continuar) continuar.style.display = "none";
  setTimeout(escrever,600);
}

function escrever(){

  if(!texto || !continuar) return;

  if(i < historia.length){
    texto.innerHTML += historia.charAt(i);
    i++;
    setTimeout(escrever,40);
  } else {
    continuar.style.display = "block";
  }
}

// ===== INÍCIO =====
if(document.getElementById("menu")){
  trocarTela("menu");
}

// ===== IR PARA CONTINUAÇÃO =====
function proximaCena(){
  window.location.href = "continuacao.html";
}

// ===== CARTA =====
document.addEventListener("DOMContentLoaded", ()=>{

  const icone = document.getElementById("iconeCarta");
  const carta = document.getElementById("cartaAberta");
  const personagem = document.getElementById("personagem");

  if(!icone || !carta || !personagem) return;

  let aberta = false;

  window.abrirCarta = function(){

    if(!aberta){
      carta.classList.add("aberta");
      personagem.src = "normanlendo.png";
      aberta = true;
    } else{
      carta.classList.remove("aberta");
      personagem.src = "normanolhando.png";
      aberta = false;
    }

  };

});