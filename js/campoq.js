function DecodificarCampoQ(){
    var campoQ = document.getElementById("campoQ").value;
    var Q = document.getElementById("Q");
    console.log(campoQ);
    //SBAO/WWXX/IV/NBO/W/000/220/3023S03419W353
    var x = campoQ.toUpperCase();
    console.log(x);
    var texto = x.split("/");
    console.log(texto);
    var z = texto.length;
    console.log(z);
    
    FIR = texto[0];
    CODIGO = texto[1];
    TRAFEGO = texto[2];
    PROPOSITO = texto[3];
    AMBITO = texto[4];
    LIMITE_INFERIOR = texto[5];
    LIMITE_SUPERIOR = texto[6];
    COORDENADAS = texto[7];
    

    if (campoQ) {
        
        var p = document.createElement("p");            // Create a <p> node        
        var t1 = document.createTextNode("FIR: " + FIR);// Create a text node        
        p.appendChild(t1);                              // Append the textnode to <p>
        document.getElementById("Q").appendChild(p);    // Append another <p> to <p> with id="Q"

        var p2 = document.createElement("p");            // Create a <p> node        
        var t2 = document.createTextNode("CÓDIGO: " + CODIGO); // Create a text node        
        p2.appendChild(t2);                              // Append the textnode to <p>
        document.getElementById("Q").appendChild(p2);    // Append another <p> to <p> with id="Q"

        switch (texto[2]) {
            case "I":
              TRAFEGO = "TRÁFEGO: IFR";
              break;
            case "V":
                TRAFEGO = "TRAFEGO: VFR";
              break;
            case "IV":
                TRAFEGO = "TRAFEGO: IFR e VFR";
              break;
            case "K":
                TRAFEGO = "Lista de Verificação";
              break;            
            default:
                TRAFEGO = false;
          }

          if (TRAFEGO) {
            var p3 = document.createElement("p");            // Create a <p> node        
            var t3 = document.createTextNode(TRAFEGO);       // Create a text node        
            p3.appendChild(t3);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p3);    // Append another <p> to <p> with id="Q"
          }         


          switch (texto[3]) {
            case "B":
              PROPOSITO = "ESTE NOTAM DEVE FAZER PARTE DE UM PIB";
              break;
            case "M":
              PROPOSITO = "ESTE NOTAM NÃO DEVE FAZER PARTE DE UM PIB (MAS DEVE ESTAR DISPONÍVEL QUANDO SOLICITADO)";
              break;
            case "N":
              PROPOSITO = "ESTE NOTAM DEVE SER INFORMADO IMEDIATAMENTE AOS OPERADORES DE AERONAVES";
              break;
            case "O":
              PROPOSITO = "ESTE NOTAM É DE IMPORTÂNCIA PARA AS OPERAÇÕES";
              break;
            case "BO":
              PROPOSITO = "ESTE NOTAM DEVE FAZER PARTE DE UM PIB, SENDO DE IMPORTÂNCIA PARA AS OPERAÇÕES";
              break;
            case "NBO":
                PROPOSITO = "ESTE NOTAM DEVE FAZER PARTE DE UM PIB, SENDO DE IMPORTÂNCIA PARA AS OPERAÇÕES, DEVENDO SER INFORMADO IMEDIATAMENTE AOS OPERADORES DE AERONAVES";
                break;
            case "K":
              PROPOSITO = "ESTE NOTAM É UMA LISTA DE VERIFICAÇÃO";
              break;
            default:
                PROPOSITO = false;
          }

            
          if (PROPOSITO) {
            
            var p4 = document.createElement("p");            // Create a <p> node        
            var t4 = document.createTextNode(PROPOSITO);       // Create a text node        
            p4.appendChild(t4);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p4);    // Append another <p> to <p> with id="Q"
          }


          switch (texto[4]) {
            case "A":
              AMBITO = "ESTE NOTAM É APLICÁVEL A AERÓDROMOS";
              break;
            case "E":
              AMBITO = "ESTE NOTAM É APLICÁVEL A ROTAS ATS";
              break;
            case "W":
              AMBITO = "ESTE NOTAM CONTÉM ADVERTÊNCIAS À NAVEGAÇÃO";
              break;
            case "AE":
              AMBITO = "ESTE NOTAM É APLICÁVEL A AERÓDROMOS E ROTAS ATS";
              break;
            case "K":
              AMBITO = false;
              break;
            default:
                AMBITO = false;
          }

            
          if (AMBITO) {
            
            var p5 = document.createElement("p");            // Create a <p> node        
            var t5 = document.createTextNode(AMBITO);       // Create a text node        
            p5.appendChild(t5);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p5);    // Append another <p> to <p> with id="Q"
          }
          console.log(campoF);

          if (campoF != "") {
            if(LIMITE_INFERIOR != "000"){
              var p6 = document.createElement("p");            // Create a <p> node        
              var t6 = document.createTextNode("LIMITE INFERIOR: F" + LIMITE_INFERIOR);       // Create a text node
              p6.appendChild(t6);                              // Append the textnode to <p>
              document.getElementById("Q").appendChild(p6);    // Append another <p> to <p> with id="Q"
              }
            else{
              var p6 = document.createElement("p");            // Create a <p> node        
              var t6 = document.createTextNode("LIMITE INFERIOR: SOLO" );       // Create a text node
              p6.appendChild(t6);                              // Append the textnode to <p>
              document.getElementById("Q").appendChild(p6);    // Append another <p> to <p> with id="Q"
            }
          }
          else{
            LIMITE_INFERIOR = "O ASSUNTO DIVULGADO NÃO ESTÁ RELACIONADO A LIMITES VERTICAIS";
            LIMITE_SUPERIOR = "";   
          }
          console.log(campoG);
          if (campoG != "") {
            if (LIMITE_SUPERIOR != "999") {
              var p7 = document.createElement("p");            // Create a <p> node        
              var t7 = document.createTextNode(" LIMITE SUPERIOR: F" + LIMITE_SUPERIOR);       // Create a text node        
              p6.appendChild(t7);                              // Append the textnode to <p>
              document.getElementById("Q").appendChild(p7);    // Append another <p> to <p> with id="Q"
            }
            else{
              var p7 = document.createElement("p");            // Create a <p> node        
              var t7 = document.createTextNode(" LIMITE SUPERIOR: ILIMITADO");       // Create a text node        
              p6.appendChild(t7);                              // Append the textnode to <p>
              document.getElementById("Q").appendChild(p7);    // Append another <p> to <p> with id="Q"
            }
          }

          
/*
          if(texto[5] == "000" && texto[6] == "999"){
              LIMITE_INFERIOR = "O ASSUNTO DIVULGADO NÃO ESTÁ RELACIONADO A LIMITES VERTICAIS";
              LIMITE_SUPERIOR = "";              
          }
          if(texto[5] == "") {
              LIMITE_INFERIOR = false;
              LIMITE_SUPERIOR = false;
          }            
          if (LIMITE_INFERIOR && LIMITE_INFERIOR != "O ASSUNTO DIVULGADO NÃO ESTÁ RELACIONADO A LIMITES VERTICAIS") {
            if(LIMITE_INFERIOR == "000"){
                var p6 = document.createElement("p");            // Create a <p> node        
                var t6 = document.createTextNode("LIMITE INFERIOR: SOLO" );       // Create a text node
                p6.appendChild(t6);                              // Append the textnode to <p>
                document.getElementById("Q").appendChild(p6);    // Append another <p> to <p> with id="Q"
            }
            else if(LIMITE_INFERIOR != "000"){
            var p6 = document.createElement("p");            // Create a <p> node        
            var t6 = document.createTextNode("LIMITE INFERIOR: F" + LIMITE_INFERIOR);       // Create a text node
            p6.appendChild(t6);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p6);    // Append another <p> to <p> with id="Q"
            }
          }
          else if (LIMITE_INFERIOR) {                   
            var p6 = document.createElement("p");              // Create a <p> node        
            var t6 = document.createTextNode(LIMITE_INFERIOR); // Create a text node        
            p6.appendChild(t6);                                // Append the textnode to <p>
            document.getElementById("Q").appendChild(p6);      // Append another <p> to <p> with id="Q"
          }

          if (LIMITE_SUPERIOR && LIMITE_SUPERIOR != "999"){              
            var p7 = document.createElement("p");            // Create a <p> node        
            var t7 = document.createTextNode(" LIMITE SUPERIOR: F" + LIMITE_SUPERIOR);       // Create a text node        
            p6.appendChild(t7);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p7);    // Append another <p> to <p> with id="Q"
          }
          else if (LIMITE_INFERIOR != "000" && LIMITE_SUPERIOR == "999"){
            var p7 = document.createElement("p");            // Create a <p> node        
            var t7 = document.createTextNode(" LIMITE SUPERIOR: ILIMITADO");       // Create a text node        
            p6.appendChild(t7);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p7);    // Append another <p> to <p> with id="Q"
          } */

          if (COORDENADAS){
            var C = COORDENADAS;
            var p8 = document.createElement("p");            // Create a <p> node        
            var t8 = document.createTextNode("COORDENADAS: " + C[0]+C[1]+"°"+C[2]+C[3]+"'"+C[4]+" "+C[6]+C[7]+"°"+C[8]+C[9]+"'"+C[10]+" RAIO: "+C[11]+C[12]+C[13]+" MILHAS NÁUTICAS");       // Create a text node        
            p8.appendChild(t8);                              // Append the textnode to <p>
            document.getElementById("Q").appendChild(p8);    // Append another <p> to <p> with id="Q"

          }
          



      
    }    

}