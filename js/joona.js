
/**
  * @author Joona Karhu
  *
=======
/**
  * @author Joona Karhu
  *

*/

// let check = document.getElementById('check').innerHTML;
let correctAns = 'Oikea vastaus! :)'
let wrongAns = 'Nyt ei mennyt ihan oikein :('


function checkAnswers() {
  let counter = 0;
    // tarkistetaan ensimmäisen kysymyksen vastaus
    if (document.getElementById('third').checked) {
      document.getElementById('answer1').innerHTML = correctAns;
      document.getElementById('answer1').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer1').innerHTML = wrongAns;
      document.getElementById('answer1').style.color = 'red';
    }
    // tarkistetaan toisen kysymyksen vastaus
    if (document.getElementById('fourth2').checked) {
      document.getElementById('answer2').innerHTML = correctAns;
      document.getElementById('answer2').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer2').innerHTML = wrongAns;
      document.getElementById('answer2').style.color = 'red';
    }
    // tarkistetaan kolmannen kysymyksen vastaus
    if (document.getElementById('second3').checked) {
      document.getElementById('answer3').innerHTML = correctAns;
      document.getElementById('answer3').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer3').innerHTML = wrongAns;
      document.getElementById('answer3').style.color = 'red';
    }
    // tarkistetaan neljännen kysymyksen vastaus
    if (document.getElementById('fourth4').checked) {
      document.getElementById('answer4').innerHTML = correctAns;
      document.getElementById('answer4').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer4').innerHTML = wrongAns;
      document.getElementById('answer4').style.color = 'red';
    }
    // tarkistetaan viidennen kysymyksen vastaus
    if (document.getElementById('first5').checked) {
      document.getElementById('answer5').innerHTML = correctAns;
      document.getElementById('answer5').style.color = 'green';
      counter++
    }
    else {
      document.getElementById('answer5').innerHTML = wrongAns;
      document.getElementById('answer5').style.color = 'red';
    }
    document.getElementById('points').innerHTML = 'Pistemääräsi on: ' + counter + '/5';
    document.getElementById('check').style.display = 'none';
    document.getElementById('reload').style.display = 'block';
}
