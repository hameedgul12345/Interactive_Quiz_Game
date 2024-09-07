// Array of question objects
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: 2,
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: 1,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Osmium", "Oxide", "Olive"],
    correctAnswer: 0,
  },
];

const quest = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var score = document.getElementById('score')
console.log(score);

var options = [option1, option2, option3, option4];
var index = 0;
quest.innerHTML = questions[index].question;
choices = questions[index].choices;

var isDisabled = false;
function enablebtn() {
  var btn = document.getElementById("next-btn");
  btn.disabled = false;
}
var scores =0;
function nextQuestion() {
  var answers = document.getElementsByName("answer");
  for (var i = 0; i < answers.length; i++){
    if(answers[i].checked){
      console.log(answers[i].value);
      console.log(questions[i].correctAnswer);
      
      
      if(Number(answers[i].value)===questions[index-1].correctAnswer){
         scores++;
         console.log(scores);
     
         score.innerHTML=`Score ${scores}`;
      }
    }
    answers[i].checked = false;
    
  }
  var btn = document.getElementById("next-btn");
  btn.disabled = true;
  quest.innerHTML = questions[index].question;
  choices = questions[index].choices;
  if (index < questions.length - 1) {
    for (var i = 0; i < choices.length; i++) {
      //   options[option1].innerHTML += questions[index].choices[i];
      // console.log(options[i]);
      options[i].innerHTML = choices[i];
      
    }
  } else {
    console.log("End of Quiz");
  }

  index++;
}
nextQuestion();
// let currentQuestionIndex = 0;
// let score = 0;

// const questionContainer = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtons = document.querySelectorAll('.answer-btn');
// const scoreElement = document.getElementById('score');
// const nextButton = document.getElementById('next-btn');
// const restartButton = document.getElementById('restart-btn');

// // Initialize the quiz with the first question
// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     scoreElement.textContent = `Score: ${score}`;
//     restartButton.style.display = 'none';
//     nextButton.style.display = 'none';
//     showQuestion(questions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionElement.textContent = question.question;
//     answerButtons.forEach((button, index) => {
//         button.textContent = question.choices[index];
//         button.addEventListener('click', selectAnswer);
//     });
// }

// function selectAnswer(event) {
//     const selectedButton = event.target;
//     const selectedAnswerIndex = Array.from(answerButtons).indexOf(selectedButton);
//     const isCorrect = selectedAnswerIndex === questions[currentQuestionIndex].correctAnswer;

//     if (isCorrect) {
//         score++;
//         scoreElement.textContent = `Score: ${score}`;
//         selectedButton.style.backgroundColor = 'green';
//     } else {
//         selectedButton.style.backgroundColor = 'red';
//     }

//     answerButtons.forEach(button => button.removeEventListener('click', selectAnswer));
//     nextButton.style.display = 'block';
// }

// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         resetState();
//         showQuestion(questions[currentQuestionIndex]);
//     } else {
//         endGame();
//     }
// }

// function resetState() {
//     nextButton.style.display = 'none';
//     answerButtons.forEach(button => {
//         button.style.backgroundColor = '';
//         button.addEventListener('click', selectAnswer);
//     });
// }

// function endGame() {
//     questionElement.textContent = `Quiz Over! Your score is ${score} out of ${questions.length}.`;
//     nextButton.style.display = 'none';
//     restartButton.style.display = 'block';
// }

// function restartQuiz() {
//     startQuiz();
// }

// // Event listeners
// nextButton.addEventListener('click', handleNextButton);
// restartButton.addEventListener('click', restartQuiz);

// // Start the quiz
// startQuiz()
