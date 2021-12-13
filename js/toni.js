/**
  * @author Toni Leinonen
  *
**/

let counter = 0;

function checkAnswer(){
  let english = document.getElementById('english');
  let lappi = document.getElementById('lappi');
  let hirvi = document.getElementById('hirvi');
  let koivu = document.getElementById('koivu');
  let vuodenaika = document.getElementById('num4');

  if(english.checked = true){
    counter++;
    document.getElementById('questionCheck').innerHTML = "Oikein!";
  }
  else {
    document.getElementById('questionCheck').innerHTML = "Pieleen meni :(";
  }

  if(lappi.checked = true) {
    counter++;
    document.getElementById('questionCheck2').innerHTML = "Oikein!";
  }
  else {
    document.getElementById('questionCheck2').innerHTML = "Pieleen meni :(";
  }

  if(hirvi.checked = true) {
    counter++;
    document.getElementById('questionCheck3').innerHTML = "Oikein!";
  }
  else {
    document.getElementById('questionCheck3').innerHTML = "Pieleen meni :(";
  }

  if(koivu.checked = true) {
    counter++;
    document.getElementById('questionCheck4').innerHTML = "Oikein!";
  }
  else {
    document.getElementById('questionCheck4').innerHTML = "Pieleen meni :(";
  }

  if(vuodenaika.checked = true) {
    counter++;
    document.getElementById('questionCheck5').innerHTML = "Oikein!";
  }
  else {
    document.getElementById('questionCheck5').innerHTML = "Pieleen meni :(";
  }

  document.getElementById('total').innerHTML = "Sait " + counter + " pistettä! " + "Maksimi pistemäärä on 5."
}

