
/**
  * @author Joona Karhu
  *
=======
/**
  * @author Joona Karhu
  *

*/

// let check = document.getElementById('check').innerHTML;
let points = 0;

function checkAnswers() {
    // tarkistetaan ensimmäisen kysymyksen vastaus
    if (document.getElementById('third').checked) {
      let points = points + 1;
    }
    // tarkistetaan toisen kysymyksen vastaus
    if (document.getElementById('fourth2').checked) {
      let points = points + 1;
    }
    // tarkistetaan kolmannen kysymyksen vastaus
    if (document.getElementById('second3').checked) {
      let points = points + 1;
    }
    // tarkistetaan neljännen kysymyksen vastaus
    if (document.getElementById('fourth4').checked) {
      let points = points + 1;
    }
    // tarkistetaan viidennen kysymyksen vastaus
    if (document.getElementById('first5').checked) {
      let points = points + 1;
    }
    document.getElementById('points').innerHTML += 'Pistemääräsi on: ' + points;
}
