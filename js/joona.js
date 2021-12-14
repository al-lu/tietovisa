
/**
  * @author Joona Karhu
  *
=======
/**
  * @author Joona Karhu
  *

*/

// let check = document.getElementById('check').innerHTML;


function checkAnswers() {
  let counter = 0;
    // tarkistetaan ensimmäisen kysymyksen vastaus
    if (document.getElementById('third').checked) {
      counter++;
    }
    // tarkistetaan toisen kysymyksen vastaus
    if (document.getElementById('fourth2').checked) {
      counter++;
    }
    // tarkistetaan kolmannen kysymyksen vastaus
    if (document.getElementById('second3').checked) {
      counter++;
    }
    // tarkistetaan neljännen kysymyksen vastaus
    if (document.getElementById('fourth4').checked) {
      counter++;
    }
    // tarkistetaan viidennen kysymyksen vastaus
    if (document.getElementById('first5').checked) {
      counter++
    }
    document.getElementById('points').innerHTML = 'Pistemääräsi on: ' + counter;
    document.getElementById('check').style.display = 'none';
    document.getElementById('reload').style.display = 'block';
}
