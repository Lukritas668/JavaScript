const botao = document.getElementById("adicionar");
const entrada = document.getElementById("entrada");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){
  if(entrada.value.trim() !==""){
    const item = document.createElement("li");
    item.textContent= entrada.value;
    lista.appendChild(item);
    entrada.value="";
  }
  
})
entrada.addEventListener("mouseover", function(){
  mensagem.textContent = "Digite um item para adicionar a lista";
  mensagem.style.display = "block";
  }
)
entrada.addEventListener("mouseout", function(){
  mensagem.style.display = "none";
})