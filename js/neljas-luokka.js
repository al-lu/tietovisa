
/**
  * @author Sami Nousiainen
  *
*/


//funktio vastausten tarkistamiseen
function checkAnswer() {

  //muuttuja pistelaskurille
  let counter = 0

//kysymys 1 tarkistaminen
  if (document.getElementById("true1").checked) {
    //jos oikein, näytä teksti vihreänä
    document.getElementById("answer1").innerHTML = "Oikein"
    document.getElementById("answer1").style.color = "green"
    //+1 piste
    counter++
  } else {
    //jos väärin, näytä teksti punaisena
    document.getElementById("answer1").innerHTML = "Väärin, EU maita on 27."
    document.getElementById("answer1").style.color = "red"
  }

  //kysymys 2
  if (document.getElementById("true2").checked) {
    document.getElementById("answer2").innerHTML = "Oikein"
    document.getElementById("answer2").style.color = "green"
    counter++
  } else {
    document.getElementById("answer2").innerHTML = "Väärin, demokratiassa kansa valitsee päättäjät."
    document.getElementById("answer2").style.color = "red"
  }

  //kysymys 3
  if (document.getElementById("true3").checked) {
    document.getElementById("answer3").innerHTML = "Oikein"
    document.getElementById("answer3").style.color = "green"
    counter++
  } else {
    document.getElementById("answer3").innerHTML = "Väärin, Portugalin pääkaupunki on Lissabon."
    document.getElementById("answer3").style.color = "red"
  }

  //kysymys 4
  if (document.getElementById("true4").checked) {
    document.getElementById("answer4").innerHTML = "Oikein"
    document.getElementById("answer4").style.color = "green"
    counter++
  } else {
    document.getElementById("answer4").innerHTML = "Väärin, eniten asukkaita on Saksassa. (83 miljoonaa)"
    document.getElementById("answer4").style.color = "red"
  }

  //kysymys 5
  if (document.getElementById("true5").checked) {
    document.getElementById("answer5").innerHTML = "Oikein"
    document.getElementById("answer5").style.color = "green"
    counter++
  } else {
    document.getElementById("answer5").innerHTML = "Väärin, Kemijärvi on Suomen pohjoisin kaupunki"
    document.getElementById("answer5").style.color = "red"
  }

  //näytetään tarkistaessa pistelaskuri
  document.getElementById("points").innerHTML = "Pisteet: " + counter + "/5"

  //piilotetaan tarkistusnappi ja näytetään sivun päivitysnappi
  document.getElementById("button").style.display = "none"
  document.getElementById("refresh").style.display = "inline-block"
}
