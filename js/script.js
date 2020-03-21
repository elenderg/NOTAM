//var json;

function Decodificar() {
   var campoQ = document.getElementById("campoQ").value;
   console.log(campoQ);
   var campoA = document.getElementById("campoA").value;
   console.log(campoA);
   var campoB = document.getElementById("campoB").value;
   console.log(campoB);
   var campoC = document.getElementById("campoC").value;
   console.log(campoC);
   var campoD = document.getElementById("campoD").value;
   console.log(campoD);
   var campoE = document.getElementById("campoE").value;
   console.log(campoE);
   var campoF = document.getElementById("campoF").value;
   console.log(campoF);
   var campoG = document.getElementById("campoG").value;
   console.log(campoG);
   var E = document.getElementById("E");
   
  

    /*function validate(e) {
        var _event = e || window.event;
      
        if (_event.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            var key = _event.keyCode || _event.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|[A-Za-z ]|\-/;
        if(!regex.test(key)) {
          _event.returnValue = false;
          if (_event.preventDefault) _event.preventDefault();
        }
*/
  

   campoE = campoE.toUpperCase(); 
   var texto = campoE.split(" ");

   console.log(texto);
   var QuantidadeDeTermos = texto.length;
   console.log(QuantidadeDeTermos);
   
   var IndiceDoVetor;
   var jsonCarregado;
   
   for (IndiceDoVetor = 0; IndiceDoVetor < QuantidadeDeTermos; IndiceDoVetor++) {
      
      if(texto[IndiceDoVetor] != "" && jsonCarregado){
      console.log("json na memória já, mas funciona (provavelmente")
      Procurar(texto[IndiceDoVetor]);
      
      }

      else if(texto[IndiceDoVetor] != ""){
         console.log("campo preenchido");
         var ajax = new XMLHttpRequest();
         console.log("criado ajax");
         ajax.onreadystatechange = function(){
            console.log("aguardando ajax ready");
            if(this.readyState == 4 && this.status == 200){
               console.log("ajax ready");
               //   A propriedade readyState retorna o estado do XMLHttpRequest, conforme tabela abaixo:
               //   0	UNSENT	Um cliente foi criado. Mas o método open()  não foi chamado ainda. 
               //   1	OPENED	O método open() foi chamado. Durante esse estado, os headers da requisição podem ser inseridos usando o método setRequestHeader()  e o método send() pode ser chamado, iniciando a busca.
               //   2	HEADERS_RECEIVED	o método send() foi chamado e os cabeçalhos e status estão disponíveis.  Os cabeçalhos de respostas foram recebidos.
               //   3	LOADING	Baixando e responseText contem os dados parciais. A resposta da requisição está sendo recebida. se o responseType for "text" ou  um texto em branco, o responseText terá o texto parcial da resposta conforme seu carregamento.
               //   4	DONE	Operação concluída. A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.
               //   status 200: "OK"
               //   status 403: "Forbidden"
               //   status 404: "Page not found"
               jsonCarregado = JSON.parse(this.responseText);
               console.log("json analisado");
               console.log("solicitado busca");
               Procurar(texto[IndiceDoVetor]);
            }
         }
         ajax.open("GET", "json/notam.json", true); // aqui ele lê o arquivo aerodromos.json
         console.log("ajax aberto");
         ajax.send();
         console.log("ajax enviado");

         // analisar se não é melhor colocar a função dentro do for
      function Procurar(codigo){         
         if (jsonCarregado){
            console.log("busca iniciada");
            var resultado = jsonCarregado.filter(function(obj){           
            return obj['Abreviatura'] == codigo;             
          });      
            if(resultado.length){
            console.log(resultado);
             E.innerHTML = E.innerHTML + "Abreviatura: " + resultado[0].Abreviatura + "</p><p>";
             document.getElementById("E2").innerHTML = "Significado: " + resultado[0].Significado;
            }else{
               console.log("busca falhou. verifique resultado.lenght")
               console.log(resultado.length);
            }
         }
         else{
            console.log("busca falhou")
         }
      } 

      }

      else if(campoE == ""){
          E.innerHTML = "Digite o texto do NOTAM para continuar"; 
          //E.innerHTML = E.innerHTML + "<p>Teste</p>";
         //document.getElementById("E").innerHTML = ""; 
      }


      }

      

}





document.addEventListener("DOMContentLoaded", function(){
    var json;
    document.getElementById("campoA").oninput = function(){
      document.getElementById("A").innerHTML = "Buscando aeródromo..."; 
      document.getElementById("A2").innerHTML = "Verifique se você digitou corretamente"; 
      var y = this.value;
      console.log(y);
      var x = y.toUpperCase();
      var z = x.length;
      if(z == 4 && json){
         console.log("json na memória já, mas funciona (provavelmente")
         FunçãoBusca(x);
         
      }
      else if(z == 4){
         console.log("campo preenchido");
         var ajax = new XMLHttpRequest();
         console.log("criado ajax");
         ajax.onreadystatechange = function(){
            console.log("aguardando ajax ready");
            if(this.readyState == 4 && this.status == 200){
               console.log("ajax ready");
               //   A propriedade readyState retorna o estado do XMLHttpRequest, conforme tabela abaixo:
               //   0	UNSENT	Um cliente foi criado. Mas o método open()  não foi chamado ainda. 
               //   1	OPENED	O método open() foi chamado. Durante esse estado, os headers da requisição podem ser inseridos usando o método setRequestHeader()  e o método send() pode ser chamado, iniciando a busca.
               //   2	HEADERS_RECEIVED	o método send() foi chamado e os cabeçalhos e status estão disponíveis.  Os cabeçalhos de respostas foram recebidos.
               //   3	LOADING	Baixando e responseText contem os dados parciais. A resposta da requisição está sendo recebida. se o responseType for "text" ou  um texto em branco, o responseText terá o texto parcial da resposta conforme seu carregamento.
               //   4	DONE	Operação concluída. A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.
               //   status 200: "OK"
               //   status 403: "Forbidden"
               //   status 404: "Page not found"
               json = JSON.parse(this.responseText);
               console.log("json analisado");
               console.log("solicitado busca");
               FunçãoBusca(x);
            }
         }
         ajax.open("GET", "json/aerodromos.json", true); // aqui ele lê o arquivo aerodromos.json
         console.log("json lido");
         ajax.send();
         console.log("json enviado");
      }
      else if(z == 0){
         document.getElementById("A").innerHTML = "Digite o código do aeródromo para continuar"; 
         document.getElementById("A2").innerHTML = ""; 
        }
   }
 
    function FunçãoBusca(codigo){
      console.log("busca iniciada");
       var resultado = json.filter(function(obj){         
         return obj['CÓDIGO OACI'] == codigo;          
       });
 
       if(resultado.length){
         console.log(resultado);
          document.getElementById("A").innerHTML = "Nome do Aeródromo: " + resultado[0].NOME;
          document.getElementById("A2").innerHTML = "Município: " + resultado[0].MUNICÍPIO;
       }else{
          document.getElementById("A2").innerHTML = "Aeródromo Inexistente: " + codigo;
          document.getElementById("A2").innerHTML = "Verifique o indicativo: " + codigo;
       }
    }
 });


 
