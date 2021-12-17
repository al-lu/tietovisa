/**
  * @author Toni Leinonen
  *
**/

function checkAnswer(){
  let counter = 0;
  let english = document.getElementById('english');
  let kolmasTavu = document.getElementById('kolmasTavu');
  let hirvi = document.getElementById('hirvi');
  let koivu = document.getElementById('koivu');
  let vuodenaika = document.getElementById('num4');

  // First question if statement
  if(english.checked){
    counter++;
    document.getElementById('questionCheck').innerHTML = "Oikein!";
    document.getElementById('questionCheck').style.color = "green"
  }
  else {
    document.getElementById('questionCheck').innerHTML = "Pieleen meni :( <br> Oikea vastaus on Englanti.";
    document.getElementById('questionCheck').style.color = "red"
  }
  // second question if statement
  if(kolmasTavu.checked) {
    counter++;
    document.getElementById('questionCheck2').innerHTML = "Oikein!";
    document.getElementById('questionCheck2').style.color = "green"
  }
  else {
    document.getElementById('questionCheck2').innerHTML = "Pieleen meni :( <br> Ta-voi-tet-ta-vis-sa on tavutettu oikein.";
    document.getElementById('questionCheck2').style.color = "red"
  }
  // Third question if statement
  if(hirvi.checked) {
    counter++;
    document.getElementById('questionCheck3').innerHTML = "Oikein!";
    document.getElementById('questionCheck3').style.color = "green"
  }
  else {
    document.getElementById('questionCheck3').innerHTML = "Pieleen meni :( <br> Sepäs onkin hirvi :)";
    document.getElementById('questionCheck3').style.color = "red"
  }
  // Fourth question if statement
  if(koivu.checked) {
    counter++;
    document.getElementById('questionCheck4').innerHTML = "Oikein!";
    document.getElementById('questionCheck4').style.color = "green"
  }
  else {
    document.getElementById('questionCheck4').innerHTML = "Pieleen meni :( <br> Koivu olisi ollut oikea vastaus.";
    document.getElementById('questionCheck4').style.color = "red"
  }
  // Fourth question if statement
  if(vuodenaika.checked) {
    counter++;
    document.getElementById('questionCheck5').innerHTML = "Oikein!";
    document.getElementById('questionCheck5').style.color = "green"
  }
  else {
    document.getElementById('questionCheck5').innerHTML = "Pieleen meni :( <br> 4 vuodenaikaa: talvi, kevät, kesä ja syksy :)";
    document.getElementById('questionCheck5').style.color = "red"
  }
  // Points counter print
  document.getElementById('total').innerHTML = "Pisteesi: " + counter + ". " + "Maksimi pistemäärä on 5."

  // When pressing "tarkista" button, "yritä uudelleen" button appears
  document.getElementById('check').style.display = "none"
  document.getElementById('refresh').style.display = "inline-block"
}

