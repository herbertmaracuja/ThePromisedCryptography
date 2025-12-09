// ===== SISTEMA DE TELAS =====
function trocarTela(id){

  const atual = document.querySelector(".ativa");
  atual.classList.remove("ativa");

  setTimeout(()=>{
    document.getElementById(id).classList.add("ativa");
  },400);
}


// ===== TEXTO DA HISTÓRIA =====

const historia = `
Em um dia normal no orfanato Gracefield encontrei um papel em um dos livros da blibioteca do Minerva,
e lá dizia toda a realidade deste lugar... Preciso desifrar esse código e fugir o mais rapido posssivel!


`;

let i = 0;

const texto = document.getElementById("texto");
const continuar = document.getElementById("continuar");

function escrever(){

  if(i < historia.length){
    texto.innerHTML += historia.charAt(i);
    i++;
    setTimeout(escrever,40);
  }
  else{
    continuar.style.display = "block";
  }

}

trocarTela("menu");


// QUANDO ENTRA NO JOGO
document.querySelector("img[onclick*='jogo']")
.addEventListener("click", ()=>{
   i = 0;
   texto.innerHTML = "";
   continuar.style.display = "none";
   setTimeout(escrever,600);
});


function proximaCena(){
  window.location.href = "continuacao.html";
}