function DecodificarCampoB(){
   var campoB = document.getElementById("campoB").value;
   if (campoB != "") {
      console.log(campoB);
      ano = "20" + campoB[0] + campoB[1] + " ";
      mes = campoB[2] + campoB[3] + "/";
      dia = campoB[4] + campoB[5] + "/";
      hora = "Hora: " + campoB[6] + campoB[7] + ":";
      minuto = campoB[8] + campoB[9]
      console.log("Data de Início: "+dia+mes+ano+hora+minuto);
   
      var p = document.createElement("p");            // Create a <p> node        
      var t = document.createTextNode("Data de Início: "+dia+mes+ano+hora+minuto );       // Create a text node        
      p.appendChild(t);                              // Append the textnode to <p>
      document.getElementById("B").appendChild(p);    // Append another <p> to <p> with id="Q"
   }
   if(document.getElementById("wie").checked){
      campoB = "Início de Efetivação: Imediato"
      var p = document.createElement("p");            // Create a <p> node        
      var t = document.createTextNode(campoB);       // Create a text node        
      p.appendChild(t);                              // Append the textnode to <p>
      document.getElementById("B").appendChild(p);    // Append another <p> to <p> with id="Q"      
   }

   //1407011041
}