/**
  * @author Aapo Salo
  *
*/
let counter = 0;

function checkAnswer(){
    let vuosi1917 = document.getElementById('vuosi1917');
    let sanna = document.getElementById('sanna');
    let missä = document.getElementById('missä');
    let rooma = document.getElementById('rooma');
    let numero503 = document.getElementById('numero503')

    if (vuosi1917.checked === true){
        counter++;
        document.getElementById('questionCheck').innerHTML = "Oikea vastaus!";
    }
    else {
        document.getElementById('questionCheck').innerHTML = "Väärä vastaus!";
    }

    if (sanna.checked === true){
        counter++;
        document.getElementById('questionCheck2').innerHTML = "Oikea vastaus!";
    }
    else {
        document.getElementById('questionCheck2').innerHTML = "Väärä vastaus!";
    }

    if (missä.checked === true){
        counter++;
        document.getElementById('questionCheck3').innerHTML = "Oikea vastaus!";
    }
    else {
        document.getElementById('questionCheck3').innerHTML = "Väärä vastaus!";
    }

    if (rooma.checked === true){
        counter++;
        document.getElementById('questionCheck4').innerHTML = "Oikea vastaus!";
    }
    else {
        document.getElementById('questionCheck4').innerHTML = "Väärä vastaus!";
    }

    if (numero503.checked === true){
        counter++;
        document.getElementById('questionCheck5').innerHTML = "Oikea vastaus!";
    }
    else {
        document.getElementById('questionCheck5').innerHTML = "Väärä vastaus!";
    }
    document.getElementById('total').innerHTML = "Onnistuit saamaan "  + counter + " pistettä! " + "Suurin mahdollinen pistemäärä on 5."
    
    document.getElementById('check').style.display = "none"
     
  document.getElementById('refresh').style.display = "inline-block"
}{}