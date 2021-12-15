/*
  * @author Aleksi Kallio
  *
*/

// Gather right and wrong answers
// Hide next button until answer is right
// Initialise buttons and elements
// Only let press buttons once

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const questionNumberElement = document.getElementById("question-id")
const answerButtonsElement = document.getElementById('answer-buttons')
const iconRight = document.getElementById("icon-right")
const iconWrong = document.getElementById("icon-wrong")

// Indexes

let shuffledQuestions, currentQuestionIndex, correctAnswers, wrongAnswers

// Event Listener for starting the game
startButton.addEventListener('click', startGame)

// Event Listener for pressing next guestion
nextButton.addEventListener('click', () => {
  currentQuestionIndex++

  // console.log(currentQuestionIndex);
  setNextQuestion()
})

// Start game function called earlier in click function
function startGame() {
  startButton.classList.add('hide');
  // var x = document.getElementsByClassName('guestion-number');
  // if (x.style.display == "none") {
  //   x.style.display = "block";
  // }
  // questionNumberElement.innerHTML = questions.questionId;
  // console.log(questions.questionId)
  document.getElementById("correct-answers").innerHTML = "";
  document.getElementById("wrong-answers").innerHTML = "";
  iconRight.classList.add('hide')
  iconWrong.classList.add('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  correctAnswers = 0
  wrongAnswers = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

  // showQuestionNumber(shuffledQuestions)
}

// function showQuestionNumber(numberQuestion) {
//   questionNumberElement.innerText = numberQuestion.questionId;
//   console.log(numberQuestion.questionId)
// }

function showQuestion(question) {
  // Show questions
  questionElement.innerText = question.question
  questionNumberElement.innerText = question.questionId
  console.log(question.question)
  // Create answer buttons
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    console.log("Vaihtoehto" + " " + answer.text)
    // if (hasInt(answer.text)) {
    //   button.innerText = answer.replace(/(\d+)/g, '<sub>$1</sub>');
    // }

    // Fileter numbers for chemical formulas


    // if (j != "") {
    // var j = answer.text.split("").filter(Number)
    // console.log(j)
    // var k = answer.text.replace(/(\d+)/g, '<sub>$1</sub>');
    // console.log("Vaihtoehto SUB" + " " + k)
    // for (let i = 0; i < j.length; i++) {
    //   // j[i].replace(/(\d+)/g, "<sub>$1</sub>");
    //   j.classList.add('sub')
    //   console.log("taa loyty" + j[i])
    // }
    // }
    // console.log(j)
    // console.log("j :" + j)

    // for (let i = 0; i < answer.text.length; i++) {
    //   if (isInteger(answer.text[i])) {
    //     answer.text[i].sub()
    //   }
    // }

    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// function hasInt(me) {
//   let i = 1, a = me.split(""), b = "", c = "";
//   a.forEach(function (e) {
//     if (!isNaN(e)) {
//       console.log(`CONTAIN NUMBER «${e}» AT POSITION ${a.indexOf(e)} => TOTAL COUNT ${i}`)
//       c += e
//       i++
//     } else { b += e }
//   })
//   console.log(`STRING IS «${b}», NUMBER IS «${c}»`)
//   if (i === 0) {
//     return false
//     // return b
//   } else {
//     return true
//     // return +c
//   }
// }


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  // Bodycolor change not needed
  // setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (correct) {
    correctAnswers++;
    document.getElementById("correct-answers").innerHTML = correctAnswers;
    iconRight.classList.remove('hide')
    disableButtons()
    console.log("Oikein" + correctAnswers);
  } else {
    wrongAnswers++;
    document.getElementById("wrong-answers").innerHTML = wrongAnswers;
    iconWrong.classList.remove('hide')
    disableButtons()
    console.log("Vaarin" + wrongAnswers);
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Yritä uudelleen'
    startButton.classList.remove('hide')
  }
}

function disableButtons() {
  // var x = document.getElementsById("answer-buttons").querySelectorAll(button);
  // x.disabled = true;
  // This will disable all the children of the div
  var nodes = document.getElementById("answer-buttons").getElementsByTagName('*');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].disabled = true;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    // Colors after ansvering
    element.classList.add('correct')

    // let correctAnswers = document.getElementById("correct-answers")

  } else {
    element.classList.add('wrong')

  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// function chemical_formula(string) {
//   result = string
//     .split(/(\d+)/)
//     .map((s, i) => i % 2 ? `<sub>${s}</sub>` : s)
//     .join('');
//   return result
// }




// Kemia Atomit Ja Molekyylit
const questions = [
  {
    question: 'Aineen pienin rakenneosanen on...',
    questionId: "Kysymys 1.",
    answers: [
      { text: 'atomi', correct: true },
      { text: 'molekyyli', correct: false },
      { text: 'ioni', correct: false },
      { text: 'millilitra', correct: false }
    ]
  },
  {
    question: 'Atomien yhteenliittymä on...',
    questionId: "Kysymys 2.",
    answers: [
      { text: 'atomi', correct: false },
      { text: 'multiatomi', correct: false },
      { text: 'kemiallinen yhdiste', correct: false },
      { text: 'molekyyli', correct: true }
    ]
  },
  {
    question: 'Raudan kemiallinen kaava on...',
    questionId: "Kysymys 3",
    answers: [
      { text: 'Fe', correct: false },
      { text: 'Ni', correct: true },
      { text: 'Mg', correct: false },
      { text: 'Xe', correct: false }
    ]
  },
  {
    question: 'Mikä hiukkasista on varaukseltaan positiivinen?',
    questionId: "Kysymys 3",
    answers: [
      { text: 'Protoni', correct: false },
      { text: 'Elektroni', correct: true },
      { text: 'Neutroni', correct: false },
      { text: 'Atomi', correct: false }
    ]
  },
  {
    question: 'Endoterminen reaktio on...',
    questionId: "Kysymys 3",
    answers: [
      { text: 'lämpöä luovuttava reaktio.', correct: false },
      { text: 'lämpöä sitova reaktio.', correct: true },
      { text: 'palamista aiheuttava reaktio.', correct: false },
      { text: 'ruostumista aiheuttava reaktio', correct: false }
    ]
  },
]

