function DecodificarCampoC(){
    var campoC = document.getElementById("campoC").value;
    console.log(campoC);
    ano = "20" + campoC[0] + campoC[1] + " ";
    mes = campoC[2] + campoC[3] + "/";
    dia = campoC[4] + campoC[5] + "/";
    hora = "Hora: " + campoC[6] + campoC[7] + ":";
    minuto = campoC[8] + campoC[9]
    console.log("Data de Início: "+dia+mes+ano+hora+minuto);
 
    var p = document.createElement("p");            // Create a <p> node        
    var t = document.createTextNode("Data de Início: "+dia+mes+ano+hora+minuto );       // Create a text node        
    p.appendChild(t);                              // Append the textnode to <li>
    document.getElementById("C").appendChild(p);    // Append another <p> to <p> with id="Q"   
    
 
    //1407011041
}
