function DecodificarCampoD(){

    if (document.getElementById("campoD").value != "") {    
        var campoD = "DIAS E HORÁRIOS: "
        campoD =  campoD + document.getElementById("campoD").value;
        console.log(campoD);
        var texto = campoD.toUpperCase();
        texto = texto.replace(/\//gi,  "&");
        texto = texto.replace(/\-/gi,  " À(S) "); 
        texto = texto.replace(/SUN/gi, "DOMINGO");//sun mon tue wed thu fri sat
        texto = texto.replace(/MON/gi, "SEGUNDA-FEIRA");
        texto = texto.replace(/TUE/gi, "TERÇA-FEIRA");
        texto = texto.replace(/WED/gi, "QUARTA-FEIRA");
        texto = texto.replace(/THU/gi, "QUINTA-FEIRA");
        texto = texto.replace(/FRI/gi, "SEXTA-FEIRA");
        texto = texto.replace(/SAT/gi, "SÁBADO");
        texto = texto.replace(/JAN/gi, "JANEIRO NO(S) DIA(S)");//JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC
        texto = texto.replace(/FEB/gi, "FEVEREIRO NO(S) DIA(S)");
        texto = texto.replace(/MAR/gi, "MARÇO NO(S) DIA(S)");
        texto = texto.replace(/APR/gi, "ABRIL NO(S) DIA(S)");
        texto = texto.replace(/MAY/gi, "MAIO NO(S) DIA(S)");
        texto = texto.replace(/JUN/gi, "JUNHO NO(S) DIA(S)");
        texto = texto.replace(/JUL/gi, "JULHO NO(S) DIA(S)");
        texto = texto.replace(/AUG/gi, "AGOSTO NO(S) DIA(S)");
        texto = texto.replace(/SEP/gi, "SETEMBRO NO(S) DIA(S)");
        texto = texto.replace(/OCT/gi, "OUTUBRO NO(S) DIA(S)");
        texto = texto.replace(/NOV/gi, "NOVEMBRO NO(S) DIA(S)");
        texto = texto.replace(/DEC/gi, "DEZEMBRO NO(S) DIA(S)");
        texto = texto.replace(/TIL/gi, "ATÉ");        
        texto = texto.replace(/DLY/gi, "DIARIAMENTE DE");
        texto = texto.replace(/SR/gi,  "NASCER DO SOL");
        texto = texto.replace(/SS/gi,  "PÔR DO SOL");

        console.log(texto);

        var p = document.createElement("p");            // Create a <p> node        
        var t = document.createTextNode(texto);       // Create a text node        
        p.appendChild(t);                              // Append the textnode to <li>
        document.getElementById("D").appendChild(p);    // Append another <p> to <p> with id="Q"    
    }
   //JUL 28 1438-SS 29 TIL OCT 27 SR-SS"
}

