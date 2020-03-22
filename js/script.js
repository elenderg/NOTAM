// chamar todas as funções
function chamarFuncoes(){
  document.getElementById("Q").innerText = "";
  document.getElementById("A").innerText = "";
  document.getElementById("A2").innerText = "";
  document.getElementById("B").innerText = "";
  document.getElementById("C").innerText = "";
  document.getElementById("D").innerText = "";
  document.getElementById("E").innerText = "";
  document.getElementById("E2").innerText = "";
  document.getElementById("F").innerText = "";
  document.getElementById("G").innerText = "";  
  DecodificarCampoF();
  DecodificarCampoG();
  DecodificarCampoQ();
  DecodificarCampoA();
  DecodificarCampoB();
  DecodificarCampoC();
  DecodificarCampoD();
  ValidarCampoE();
  DecodificarCampoE();
}

function LimparForm(){
  
  document.getElementById("myForm").reset();

  Limparparagrafos();
  
  
}

function Limparparagrafos(){

  var x = document.getElementsByTagName("p");
  vetor = x.length;

  for (let index = 0; index < vetor; index++) {
      x[index].innerHTML = ""  
  }

  /*var y = document.getElementsByTagName("textarea");
  vetor2 = x.length;

  for (let index = 0; index < vetor2; index++) {
      y[index].innerHTML = ""  
   }*/
  
}
        
   
