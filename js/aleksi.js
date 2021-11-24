/**
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



const questions = [
  {
    question: 'What do you do if your code builds on the first try?',
    answers: [
      { text: 'Buy a lottery ticket', correct: true },
      { text: 'Act like it has happened before.', correct: false },
      { text: 'Go to stack overflow and brag about it.', correct: false },
      { text: 'Get a feeling that you have missed something.', correct: true }
    ]
  },
  {
    question: 'What is the golden rule in programming?',
    answers: [
      { text: 'If it works, don’t touch it.', correct: true },
      { text: 'Artificial intelligence is no match for natural stupidity.', correct: true },
      { text: 'You should not confuse your career with your life.', correct: true },
      { text: 'He who has the gold makes the rules.', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda.', correct: true },
      { text: 'YES!!!', correct: true },
      { text: 'NO!!!', correct: false },
      { text: 'Dont know.', correct: false }
    ]
  },
  {
    question: 'What word to use to get what you want?',
    answers: [
      { text: 'Sudo', correct: true },
      { text: 'Gimme', correct: false },
      { text: 'Please', correct: false },
      { text: 'I AM ROOT!!!', correct: false }
    ]
  }
]