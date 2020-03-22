
var json;
function DecodificarCampoA(){
   var campoA = document.getElementById("campoA").value;
   console.log(campoA);
   var x = campoA.toUpperCase();
   console.log(x);
   var z = x.length;
   console.log(z);
      if(z == 4 && json){
         console.log("o arquivo json já está carregado na memória do browser")
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
         document.getElementById("A").innerHTML = "insira o código do aeródromo para continuar"; 
         document.getElementById("A2").innerHTML = ""; 
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
}
 

   

