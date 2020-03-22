var campoF;
function DecodificarCampoF(){
    campoF = document.getElementById("campoF").value;    
    if (campoF != "") {
        campoF = "Limite Inferior: "
        campoF = campoF + document.getElementById("campoF").value;
        var texto = campoF;
        texto = texto.replace(/M/g, " METROS");
        texto = texto.replace(/SFC/gi, "SUPERFÍCIE");
        texto = texto.replace(/GND/gi, "SOLO");
        texto = texto.replace(/AMSL/gi, "AO NÍVEL DO MAR");
        texto = texto.replace(/AGL/gi, "AO NÍVEL DO SOLO");        
        texto = texto.replace(/FT/gi, " PÉS");
        console.log(campoF);   

        var p = document.createElement("p");            // Create a <p> node        
        var t = document.createTextNode(texto + " ");       // Create a text node        
        p.appendChild(t);                              // Append the textnode to <li>
        document.getElementById("F").appendChild(p);    // Append another <p> to <p> with id="Q"
    }
    console.log(campoF);
    return campoF;
}
