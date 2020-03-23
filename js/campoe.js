var json;

function ValidarCampoE(){
   // a ser implementado
        
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
        }       */
}

function DecodificarCampoE() {   
   var campoE = document.getElementById("campoE").value;
   console.log(campoE);
   var x = campoE.toUpperCase();
   console.log(x);
   var texto = x.split(" ");
   console.log(texto);
   texto = texto.reverse();
   console.log(texto);
   var z = texto.length;
   console.log(z);
         
   var IndiceDoVetor;   
   for (IndiceDoVetor = 0; IndiceDoVetor < z; IndiceDoVetor++) {
      console.log(IndiceDoVetor);
            
      if(z > 0 && json){
         console.log("json carregado anteriormente")
         FunçãoBusca(texto[IndiceDoVetor]);               
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
               console.log(texto);
               console.log(IndiceDoVetor);
               IndiceDoVetor --;
               console.log(IndiceDoVetor);
               console.log(texto[IndiceDoVetor]);
               FunçãoBusca(texto[IndiceDoVetor]);
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
            console.log(codigo);
            console.log("busca iniciada");
               var resultado = json.filter(function(obj){         
               return obj['Abreviatura'] == codigo;
               });
               if(resultado.length){
               console.log(resultado);
                   t1 =  "Abreviatura: " + resultado[0].Abreviatura ;
                 // t2 = "Significado: " + resultado[0].Significado ;
                  t2 = " " + resultado[0].Significado + " ";
                  /*var paragrafo = document.createElement("p");                 
                  var abreviatura = document.createTextNode(t1);         
                  paragrafo.appendChild(abreviatura);         
                  document.getElementById("E").appendChild(paragrafo);*/
                  //document.getElementById("E").appendChild(br);
                  
                  var paragrafo2 = document.createElement("span");   
                  var significado = document.createTextNode(t2); 
                  paragrafo2.appendChild(significado);
                  document.getElementById("E2").appendChild(paragrafo2);
/*
                  var newItem = document.createElement("li");
                  var textnode = document.createTextNode(t2);
                  newItem.appendChild(textnode);

                  var list = document.getElementById("E");
                  list.insertBefore(newItem, list.childNodes[0]);*/


               }else{
               console.log("código inexistente " + codigo);
                  
                  E2.innerHTML =  E2.innerHTML + codigo + " ";
                  //E2.innerHTML = "Verifique o  código: " + codigo;
                  
               }
            }