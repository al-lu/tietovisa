/*
  * @author Aleksi Kallio
  *
*/
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

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
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
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
    answers: [
      { text: 'atomi', correct: true },
      { text: 'molekyyli', correct: false },
      { text: 'ioni', correct: false },
      { text: 'millilitra', correct: false }
    ]
  },
  {
    question: 'Atomien yhteenliittymä on...',
    answers: [
      { text: 'atomi', correct: false },
      { text: 'multiatomi', correct: false },
      { text: 'kemiallinen yhdiste', correct: false },
      { text: 'molekyyli', correct: true }
    ]
  },
  {
    question: 'Sokerin kemiallinen kaava on...',
    answers: [
      { text: 'Fe', correct: false },
      { text: 'H', correct: true },
      { text: 'Mg', correct: false },
      { text: 'Au', correct: false }
    ]
  },
]