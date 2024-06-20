const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question[0]);
//   console.log(`Your answer: ${candidateAnswer} \nCorrect Answer: ${correctAnswer[0]}`);
// candidateAnswer = input.question(question[1]);
//   console.log(`Your answer: ${candidateAnswer} \nCorrect Answer: ${correctAnswer[1]}`);
// candidateAnswer = input.question(question[2]);
//   console.log(`Your answer: ---. \nCorrect answer: ${correctAnswer[2]}.`);
// candidateAnswer = input.question(question[3]);
//   console.log(`Your answer: --- . \nCorrect answer: ${correctAnswer[3]}.`);
// candidateAnswer = input.question(question[4]);
//   console.log(`Your answer: --- .\nCorrect Answer: ${correctAnswer[4]}.`)
for (let i = 0; i < 5; i++) {
  candidateAnswers[i] = input.question(questions[i]); 
  
}
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === correctAnswer[0]) {
 // console.log("Correct.");
//} else {
 // console.log("Incorrect.");
//}
let correctQuestions = 0;
for (let i = 0; i < 5; i++) {
  console.log(`Your answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}`);
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
    correctQuestions++;
  }
}


let grade = (correctQuestions/5) * 100;//TODO 3.2 use this variable to calculate the candidates score.
if(grade < 80 ){
  console.log("FAILED!" );
}else{
  console.log("PASSED! " );
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};