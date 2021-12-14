/**
  * @author Toni Leinonen
  *
**/



function checkAnswer(){
  let counter = 0;
  let english = document.getElementById('english');
  let lappi = document.getElementById('lappi');
  let hirvi = document.getElementById('hirvi');
  let koivu = document.getElementById('koivu');
  let vuodenaika = document.getElementById('num4');

  // Ensimmäisen kysymyksen if-lauseke
  if(english.checked){
    counter++;
    document.getElementById('questionCheck').innerHTML = "Oikein!";
    document.getElementById('questionCheck').style.color = "green"
  }
  else {
    document.getElementById('questionCheck').innerHTML = "Pieleen meni :(";
    document.getElementById('questionCheck').style.color = "red"
  }
  // Toisen kysymyksen if-lauseke
  if(lappi.checked) {
    counter++;
    document.getElementById('questionCheck2').innerHTML = "Oikein!";
    document.getElementById('questionCheck2').style.color = "green"
  }
  else {
    document.getElementById('questionCheck2').innerHTML = "Pieleen meni :(";
    document.getElementById('questionCheck2').style.color = "red"
  }
  //
  if(hirvi.checked) {
    counter++;
    document.getElementById('questionCheck3').innerHTML = "Oikein!";
    document.getElementById('questionCheck3').style.color = "green"
  }
  else {
    document.getElementById('questionCheck3').innerHTML = "Pieleen meni :(";
    document.getElementById('questionCheck3').style.color = "red"
  }

  if(koivu.checked) {
    counter++;
    document.getElementById('questionCheck4').innerHTML = "Oikein!";
    document.getElementById('questionCheck4').style.color = "green"
  }
  else {
    document.getElementById('questionCheck4').innerHTML = "Pieleen meni :(";
    document.getElementById('questionCheck4').style.color = "red"
  }

  if(vuodenaika.checked) {
    counter++;
    document.getElementById('questionCheck5').innerHTML = "Oikein!";
    document.getElementById('questionCheck5').style.color = "green"
  }
  else {
    document.getElementById('questionCheck5').innerHTML = "Pieleen meni :(";
    document.getElementById('questionCheck5').style.color = "red"
  }

  document.getElementById('total').innerHTML = "Pisteesi: " + counter + ". " + "Maksimi pistemäärä on 5."

  document.getElementById('check').style.display = "none"
  document.getElementById('refresh').style.display = "inline-block"
}

