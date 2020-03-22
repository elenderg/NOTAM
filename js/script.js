// chamar todas as funções
function chamarFuncoes(){
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
        
   
