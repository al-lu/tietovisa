
/**
  * @author Sami Nousiainen
  *
*/

function checkAnswer() {

  let counter = 0

// kys1
  if (document.getElementById("true1").checked) {
    document.getElementById("answer1").innerHTML = "Oikein"
    document.getElementById("answer1").style.color = "green"
    counter++
  } else {
    document.getElementById("answer1").innerHTML = "Väärin, EU maita on 27."
    document.getElementById("answer1").style.color = "red"
  }

  //kys2
  if (document.getElementById("true2").checked) {
    document.getElementById("answer2").innerHTML = "Oikein"
    document.getElementById("answer2").style.color = "green"
    counter++
  } else {
    document.getElementById("answer2").innerHTML = "Väärin, demokratiassa kansa valitsee päättäjät."
    document.getElementById("answer2").style.color = "red"
  }

  //kys3
  if (document.getElementById("true3").checked) {
    document.getElementById("answer3").innerHTML = "Oikein"
    document.getElementById("answer3").style.color = "green"
    counter++
  } else {
    document.getElementById("answer3").innerHTML = "Väärin, Portugalin pääkaupunki on Lissabon."
    document.getElementById("answer3").style.color = "red"
  }

  //kys4
  if (document.getElementById("true4").checked) {
    document.getElementById("answer4").innerHTML = "Oikein"
    document.getElementById("answer4").style.color = "green"
    counter++
  } else {
    document.getElementById("answer4").innerHTML = "Väärin, eniten asukkaita on Saksassa. (83 miljoonaa)"
    document.getElementById("answer4").style.color = "red"
  }

  //kys5
  if (document.getElementById("true5").checked) {
    document.getElementById("answer5").innerHTML = "Oikein"
    document.getElementById("answer5").style.color = "green"
    counter++
  } else {
    document.getElementById("answer5").innerHTML = "Väärin, Kemijärvi on Suomen pohjoisin kaupunki"
    document.getElementById("answer5").style.color = "red"
  }

  document.getElementById("points").innerHTML = "Pisteet: " + counter + "/5"

  document.getElementById("button").style.display = "none"
  document.getElementById("refresh").style.display = "inline-block"
}
