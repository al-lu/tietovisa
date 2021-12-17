/*
  *
  * @author Aleksi Kallio
  *
  * Short description of the gamselectedAnswer.
  * 
  * Idea was to create a multiple choise question game for 6th graders. 
  * I wanted to concentrate more on the functionality of the gamselectedAnswer.
  * Game works by pressing the start button you call a function which starts the game 
  * by hiding all unnessesary elements from the player and shows the question from the dataset created at the end of this filselectedAnswer. 
  * The dataset works as an Array of javascript objects which contain key: value pairs and a nested Array of objects called questions.
  * In python this would be called nested list of dicts. And finding the right values based on their keys worked pretty much the same way 
  * as calling javascript objects or in python finding values from list of dictionaries.
  * I also wanted to try methods and arrow functions from the Advanced javascript coursselectedAnswer. 
  * By this point they work almost correctly.
  *   
  *
*/

// Gather all elements from 6th grade html document into constant variables so they can be referred later in the codselectedAnswer.

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-id");
const answerButtonsElement = document.getElementById("answer-buttons");
const iconRight = document.getElementById("icon-right");
const iconWrong = document.getElementById("icon-wrong");


// Create variables for indexes sortedQuestions, currentQuestionIndex, correctAnswers, wrongAnswers.

let sortedQuestions;
let currentQuestionIndex;
let correctAnswers;
let wrongAnswers;

// Create eventlistener for starting the game by pressing start button. Click event triggers startGame function.

startButton.addEventListener("click", startGame)

// Create eventlistener for next question button. Arrow function takes in no parameters and increments currentQuestionIndex by 1. 
// Also calls showNextQuestion function.

nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  showNextQuestion()
})

// Start buttons startGame function. 
// Adds class hide from 6th grade css file to elemnts that I don"t want to show to the player unless they answered the question.
// Used .sort() method to sort the questions in the dataset.
// Sets all Indexes to 0.
// Removes class hide from the questionContainerElement.
// At the end calls showNextQuestion function.

function startGame() {
  document.getElementById("correct-answers").innerHTML = "";
  document.getElementById("wrong-answers").innerHTML = "";
  startButton.classList.add("hide");
  iconRight.classList.add("hide");
  iconWrong.classList.add("hide");
  sortedQuestions = questions.sort();
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  questionContainerElement.classList.remove("hide");
  showNextQuestion();
}

// showNextQuestion function. 
// Calls resetState function.
// Calls showQuestions function which takes in one argument. sortedQuestions is the index of the object in the questions array. 
// currentQuestionIndex is the index of the current question which starts from 0 and increments every time showNextQuestion function gets revoked.
// This way I can locate what question I want to show to the player.  

function showNextQuestion() {
  resetState();
  showQuestion(sortedQuestions[currentQuestionIndex]);
}

// showQuestion function. Takes in one parameter "question" which is the index of the object in the questions array.
// Exaple on how to use array function with forEach loop
// const a = ["a", "b", "c"];
// a.forEach((element) => {
//     consolselectedAnswer.log(element);
// });

function showQuestion(question) {
  // Show questions
  questionElement.innerText = question.question;
  // Show question number
  questionNumberElement.innerText = question.questionId;
  // Create answer buttons in a forEach loop. for each answer 
  // Create answer buttons for each choise that the player can makselectedAnswer.
  // Get all possible answers from class question answers list.
  // for each loop to go thru all answers.
  question.answers.forEach((answer) => {
    // Creates a button for every answer
    const button = document.createElement("button");
    // Adds text to buttons from the dataset answers Array.
    button.innerText = answer.text;
    // consolselectedAnswer.log("Vaihtoehto" + " " + answer.text)
    // Adds btn class to all buttons
    button.classList.add("btn");
    // Check if player selected the right answer by finding out if key correct value is TruselectedAnswer.
    if (answer.correct) {
      // Below link was used to learn about the use of .dataset
      // adds data-correct="true" to button atributes.
      // https://medium.com/@adamkearney124/using-dataset-in-javascript-5331af3ec6c3
      button.dataset.correct = answer.correct;
    }
    // Add event listener to button when player selects answer.
    button.addEventListener("click", selectAnswer);
    // Add buttons to answerButtonsElement div
    answerButtonsElement.appendChild(button);

  })
}

// resetState function to add class hide to nextButton element
function resetState() {
  // clearStatusClass(document.body)
  nextButton.classList.add("hide");
  // Remove previous questions
  // Below link used to help understand removing child elements. Removing lastChild is told to be faster.
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.lastChild);
  }
}

// selected answer function used above in the showQuestion function. Takes in one parameter selected answer.
// 
function selectAnswer(selectedAnswer) {
  // Returns the element that triggered the event.
  const selectedButton = selectedAnswer.target;
  // Gets data-correct attribute.
  const correct = selectedButton.dataset.correct;

  // Create array from all answer buttons then loop thru them in a for each loop.
  // Use setStatusClass function to add css classes to buttons that are wrong and the one that is correct.
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })

  // If the button was correct === true. 
  // correctAnswers increments by one and the player is shown a counter which tells him/her current number of correct and wrong answers
  // and two svg icons telling what number represents either answers. Hide class gets removed from the iconRight element.
  // All buttons except the next question button get disabled so the player can't increment the number of right or wrong answers forever.

  if (correct) {
    correctAnswers++;
    document.getElementById("correct-answers").innerHTML = correctAnswers;
    iconRight.classList.remove("hide");
    disableButtons();
  } else {
    wrongAnswers++;
    document.getElementById("wrong-answers").innerHTML = wrongAnswers;
    iconWrong.classList.remove("hide");
    disableButtons();
  }

  // If there are questions left in the questions array continue. 
  // Else ask if the player wants to try again.
  if (sortedQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Yritä uudelleen";
    startButton.classList.remove("hide");
  }
}

// Disable buttons when player has already selected one answer.
// Without disabling player could increment the number of right or wrong answers to how ever much he/she likes.
function disableButtons() {
  var disable = document.getElementById("answer-buttons").getElementsByTagName("*");
  for (var i = 0; i < disable.length; i++) {
    disable[i].disabled = true;
  }
}

// Function to add red/green colors to buttons after answering.
function setStatusClass(element, correct) {
  if (correct) {
    // Colors after ansvering
    element.classList.add("correct")

  } else {
    element.classList.add("wrong")

  }
}


// Small dataset filled with questions. 
// The way I still see this a nested list of dictionaries.
// In the first array whitch is questions array is a dictionary with keys question and questionId and their values.
// The dictionaries can be accessed by indexing.
// The next array answers can be accessed by indexing even further.  
const questions = [
  {
    question: "Aineen pienin rakenneosanen on...",
    questionId: "Kysymys 1.",
    answers: [
      { text: "atomi", correct: true },
      { text: "molekyyli", correct: false },
      { text: "ioni", correct: false },
      { text: "millilitra", correct: false }
    ]
  },
  {
    question: "Atomien yhteenliittymä on...",
    questionId: "Kysymys 2.",
    answers: [
      { text: "atomi", correct: false },
      { text: "hiukkanen", correct: false },
      { text: "kemiallinen yhdiste", correct: false },
      { text: "molekyyli", correct: true }
    ]
  },
  {
    question: "Raudan kemiallinen kaava on...",
    questionId: "Kysymys 3",
    answers: [
      { text: "Fe", correct: true },
      { text: "Ni", correct: false },
      { text: "Mg", correct: false },
      { text: "Xe", correct: false }
    ]
  },
  {
    question: "Mikä hiukkasista on varaukseltaan positiivinen?",
    questionId: "Kysymys 4",
    answers: [
      { text: "Protoni", correct: true },
      { text: "Elektroni", correct: false },
      { text: "Neutroni", correct: false },
      { text: "Atomi", correct: false }
    ]
  },
  {
    question: "Endoterminen reaktio on...",
    questionId: "Kysymys 5",
    answers: [
      { text: "lämpöä luovuttava reaktio.", correct: false },
      { text: "lämpöä sitova reaktio.", correct: true },
      { text: "palamista aiheuttava reaktio.", correct: false },
      { text: "ruostumista aiheuttava reaktio", correct: false }
    ]
  },
]

