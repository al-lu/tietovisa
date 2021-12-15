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
        document.getElementById('questionCheck').style.color = "green"
    }
    else {
        document.getElementById('questionCheck').innerHTML = "Väärä vastaus! Oikea vastaus on Vuonna 1917.";
        document.getElementById('questionCheck').style.color = "red"
    }

    if (sanna.checked === true){
        counter++;
        document.getElementById('questionCheck2').innerHTML = "Oikea vastaus!";
        document.getElementById('questionCheck2').style.color = "green"
    }
    else {
        document.getElementById('questionCheck2').innerHTML = "Väärä vastaus! Oikea vastaus on Sanna Marin.";
        document.getElementById('questionCheck2').style.color = "red"
    }

    if (missä.checked === true){
        counter++;
        document.getElementById('questionCheck3').innerHTML = "Oikea vastaus!";
        document.getElementById('questionCheck3').style.color = "green"
    }
    else {
        document.getElementById('questionCheck3').innerHTML = "Väärä vastaus! Oikea vastaus on 'Missä olet?'.";
        document.getElementById('questionCheck3').style.color = "red"
    }

    if (rooma.checked === true){
        counter++;
        document.getElementById('questionCheck4').innerHTML = "Oikea vastaus!";
        document.getElementById('questionCheck4').style.color = "green"
    }
    else {
        document.getElementById('questionCheck4').innerHTML = "Väärä vastaus! Oikea vastaus on Rooma.";
        document.getElementById('questionCheck4').style.color = "red"
    }

    if (numero503.checked === true){
        counter++;
        document.getElementById('questionCheck5').innerHTML = "Oikea vastaus!";
        document.getElementById('questionCheck5').style.color = "green"
    }
    else {
        document.getElementById('questionCheck5').innerHTML = "Väärä vastaus! Oikea vastaus on 503.";
        document.getElementById('questionCheck5').style.color = "red"
    }
   
    
    document.getElementById('check').style.display = "none"
     
  document.getElementById('refresh').style.display = "inline-block"
  document.getElementById('total').innerHTML = "Onnistuit saamaan "  + counter + "/5 oikein. " + "Jos pisteesi eivät vakuuta, kokeile ihmeessä uudestaan!"
}{}