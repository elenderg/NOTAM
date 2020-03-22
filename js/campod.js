function DecodificarCampoD(){
    var campoD = "DIAS E HORÁRIOS: "
    campoD =  campoD + document.getElementById("campoD").value;
    console.log(campoD);
    var texto = campoD.toUpperCase();
    texto = texto.replace(/\//gi, " e ");
    texto = texto.replace(/\-/gi, " às (ao) "); 
    texto = texto.replace(/SUN/gi, "DOMINGO");//sun mon tue wed thu fri sat
    texto = texto.replace(/MON/gi, "SEGUNDA-FEIRA");
    texto = texto.replace(/TUE/gi, "TERÇA-FEIRA");
    texto = texto.replace(/WED/gi, "QUARTA-FEIRA");
    texto = texto.replace(/THU/gi, "QUINTA-FEIRA");
    texto = texto.replace(/FRI/gi, "SEXTA-FEIRA");
    texto = texto.replace(/SAT/gi, "SÁBADO");
    texto = texto.replace(/JAN/gi, "JANEIRO");//JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC
    texto = texto.replace(/FEB/gi, "FEVEREIRO");
    texto = texto.replace(/MAR/gi, "MARÇO");
    texto = texto.replace(/APR/gi, "ABRIL");
    texto = texto.replace(/MAY/gi, "MAIO");
    texto = texto.replace(/JUN/gi, "JUNHO");
    texto = texto.replace(/JUL/gi, "JULHO");
    texto = texto.replace(/AUG/gi, "AGOSTO");
    texto = texto.replace(/SEP/gi, "SETEMBRO");
    texto = texto.replace(/OCT/gi, "OUTUBRO");
    texto = texto.replace(/NOV/gi, "NOVEMBRO");
    texto = texto.replace(/TIL/gi, "ATÉ");
    texto = texto.replace(/SR/gi, "NASCER DO SOL");
    texto = texto.replace(/SS/gi, "PÔR DO SOL");
    texto = texto.replace(/DLY/gi, "DIARIAMENTE");

    console.log(texto);

    var p = document.createElement("p");            // Create a <p> node        
    var t = document.createTextNode(texto);       // Create a text node        
    p.appendChild(t);                              // Append the textnode to <li>
    document.getElementById("D").appendChild(p);    // Append another <p> to <p> with id="Q"    

   //JUL 28 1438-SS 29 TIL OCT 27 SR-SS"
}

