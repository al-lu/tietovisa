/**
  * @author Joona Karhu
  *

*/

// created a variable for correct and wrong answers
let correctAns = 'Oikea vastaus! :)'
let wrongAns = 'Nyt ei mennyt ihan oikein :('

// function for checking the answers, and with check-button 
// Luodaan funktio, missä tarkistetaan vastaukset, ja check-nappia painaessa kerrotaan ovatko vastaukset oikein. Jos ovat, niin counteria kasvatetaan
function checkAnswers() {
  let counter = 0;
    // Tarkistetaan ensimmäisen kysymyksen vastaus
    if (document.getElementById('green').checked) {
      document.getElementById('answer1').innerHTML = correctAns;
      document.getElementById('answer1').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer1').innerHTML = wrongAns;
      document.getElementById('answer1').style.color = 'red';
    }
    // Tarkistetaan toisen kysymyksen vastaus
    if (document.getElementById('ruotsi').checked) {
      document.getElementById('answer2').innerHTML = correctAns;
      document.getElementById('answer2').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer2').innerHTML = wrongAns;
      document.getElementById('answer2').style.color = 'red';
    }
    // Tarkistetaan kolmannen kysymyksen vastaus
    if (document.getElementById('joutsen').checked) {
      document.getElementById('answer3').innerHTML = correctAns;
      document.getElementById('answer3').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer3').innerHTML = wrongAns;
      document.getElementById('answer3').style.color = 'red';
    }
    // Tarkistetaan neljännen kysymyksen vastaus
    if (document.getElementById('helsinki').checked) {
      document.getElementById('answer4').innerHTML = correctAns;
      document.getElementById('answer4').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer4').innerHTML = wrongAns;
      document.getElementById('answer4').style.color = 'red';
    }
    // Tarkistetaan viidennen kysymyksen vastaus
    if (document.getElementById('kaksitoista').checked) {
      document.getElementById('answer5').innerHTML = correctAns;
      document.getElementById('answer5').style.color = 'green';
      counter++
    }
    else {
      document.getElementById('answer5').innerHTML = wrongAns;
      document.getElementById('answer5').style.color = 'red';
    }

    // Nappia painaessa lasketaan ja tulostaan pistemäärä, piilotetaan check-nappi ja tuodaan reload-nappi näkyviin 
    document.getElementById('points').innerHTML = 'Pistemääräsi on: ' + counter + '/5';
    document.getElementById('check').style.display = 'none';
    document.getElementById('reload').style.display = 'block';
}
