




document.addEventListener("DOMContentLoaded", function(){
    var json;
    var E = document.getElementById("E");
    var E2 = document.getElementById("E2");
    document.getElementById("campoE").oninput = function(){
      document.getElementById("E").innerHTML = "Buscando aeródromo..."; 
      document.getElementById("E2").innerHTML = "Verifique se você digitou corretamente"; 
      var y = this.value;
      console.log(y);
      var x = y.toUpperCase();
      console.log(x);
      var texto = x.split(" ");
      console.log(texto);
      var z = texto.length;          
      console.log(z);
      
      var IndiceDoVetor;      
      for (IndiceDoVetor = 0; IndiceDoVetor < z; IndiceDoVetor++) {

      if(z > 0 && json){
         console.log("json na memória já, mas funciona (provavelmente")
         FunçãoBusca(x);
         
      }
      else if(z > 0){
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
         ajax.open("GET", "json/notam.json", true); // aqui ele lê o arquivo aerodromos.json
         console.log("json lido");
         ajax.send();
         console.log("json enviado");
      }
      else if(z == 0){
         document.getElementById("E").innerHTML = "Digite o texto do NOTAM para continuar"; 
         document.getElementById("E2").innerHTML = ""; 
        }
      }
   
   
}
 
    function FunçãoBusca(codigo){
      console.log("busca iniciada");
       var resultado = json.filter(function(obj){         
         return obj['Abreviatura'] == codigo;          
       });
 
       if(resultado.length){
         console.log(resultado);
          E.innerHTML = + "Abreviatura: " + resultado[0].Abreviatura ;
          E2.innerHTML = + "Significado: " + resultado[0].Significado ;
       }else{
          E.innerHTML = "Código Inexistente: " + codigo;
          E2.innerHTML = "Verifique o  código: " + codigo;
       }
    }
 });


 