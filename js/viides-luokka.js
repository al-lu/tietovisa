/**
  * @author Joona Karhu
  *
=======
/**
  * @author Joona Karhu
  *

*/

// created variables for correct and wrong answers
let correctAns = 'Oikea vastaus! :)'
let wrongAns = 'Nyt ei mennyt ihan oikein :('

// function for checking the answers, and printing your point total
function checkAnswers() {
  let counter = 0;

    // Checks if the correct answer is checked. If so, variable correctAns is printed in the answer-box with green color, and point is added to the counter
    // else the wrongAns is printed with red color
    if (document.getElementById('kulta').checked) {
      document.getElementById('answer1').innerHTML = correctAns;
      document.getElementById('answer1').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer1').innerHTML = wrongAns;
      document.getElementById('answer1').style.color = 'red';
    }

    if (document.getElementById('got').checked) {
      document.getElementById('answer2').innerHTML = correctAns;
      document.getElementById('answer2').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer2').innerHTML = wrongAns;
      document.getElementById('answer2').style.color = 'red';
    }
    
    if (document.getElementById('sing').checked) {
      document.getElementById('answer3').innerHTML = correctAns;
      document.getElementById('answer3').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer3').innerHTML = wrongAns;
      document.getElementById('answer3').style.color = 'red';
    }
    
    if (document.getElementById('zeus').checked) {
      document.getElementById('answer4').innerHTML = correctAns;
      document.getElementById('answer4').style.color = 'green';
      counter++;
    }
    else {
      document.getElementById('answer4').innerHTML = wrongAns;
      document.getElementById('answer4').style.color = 'red';
    }
    
    if (document.getElementById('comma').checked) {
      document.getElementById('answer5').innerHTML = correctAns;
      document.getElementById('answer5').style.color = 'green';
      counter++
    }
    else {
      document.getElementById('answer5').innerHTML = wrongAns;
      document.getElementById('answer5').style.color = 'red';
    }

    // When check button is pressed, point total is printed, check button is hidden and reload button becomes visible
    document.getElementById('points').innerHTML = 'Pistemääräsi on: ' + counter + '/5';
    document.getElementById('check').style.display = 'none';
    document.getElementById('reload').style.display = 'block';
}
