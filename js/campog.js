var campoG;
function DecodificarCampoG(){
    campoG = "Limite Superior: "
    campoG = campoG + document.getElementById("campoG").value;
    if (campoG != "") {
        var texto = campoG;
        texto = texto.replace(/M/g, "METROS");
        texto = texto.replace(/UNL/gi, "ILIMITADO");
        texto = texto.replace(/AMSL/gi, "AO NÍVEL DO MAR");
        texto = texto.replace(/AGL/gi, "AO NÍVEL DO SOLO");        
        texto = texto.replace(/FT/gi, " PÉS");
        console.log(campoG);   

        var p = document.createElement("p");            // Create a <p> node        
        var t = document.createTextNode(texto);       // Create a text node        
        p.appendChild(t);                              // Append the textnode to <li>
        document.getElementById("F").appendChild(p);    // Append another <p> to <p> with id="Q"
    }
    console.log(campoG);
    return campoG;

}