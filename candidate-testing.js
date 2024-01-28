const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride"
let candidateAnswer = ""


//TODO: Variables for Part 2
let questions = [ 
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
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
  candidateName = input.question('Please input your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
    //console.log(questions[i]);
    let receivedAnswer = input.question(questions[i] );
    candidateAnswers.push(receivedAnswer);
  }


}

function gradeQuiz(candidateAnswers) {
  let numCorrect = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    for (i = 0; i < correctAnswers.length; i++) {
      console.log(`
      Your answer: ${candidateAnswers[i]}. Correct Answer: ${correctAnswers[i]}`)

      if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
        numCorrect += 1;
        //console.log (numCorrect);
      }
    }


  let grade = (numCorrect / correctAnswers.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  let resultMessage = "";

  if (grade >= 80) {
    resultMessage = "Congratulations, you have passed the test!";
  } else {
    resultMessage = "You have failed the test.";
  }

  console.log(`
  ${candidateName}, a grade of 80% or higher is required to pass this test. 
  Your score is ${grade}%.
  ${resultMessage} 
  `);



  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings, "+candidateName);
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

//updating push so the autograder works