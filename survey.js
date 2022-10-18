/* const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
}); */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q0 = 'What\'s your name? Nicknames are also acceptable :) ? ';
const q1 = 'What\'s an activity you like doing? ';
const q2 = 'What do you listen to while doing that? ';
const q3 = 'Which meal is your favourite (eg: dinner, brunch, etc.)? ';
const q4 = 'What\'s your favourite thing to eat for that meal? ';
const q5 = 'Which sport is your absolute favourite? ';
const q6 = 'What is your superpower? In a few words, tell us what you are amazing at! ';

let questions = [q0, q1, q2, q3, q4, q5, q6];
let answers = '';

const qList = (i) => {
  if(i < questions.length) {
    rl.question(questions[i], (answer) => {
      answers += '\n' + answer;
      qList(i+1); // recursive function to go through question list
    });
  } else {
    console.log(`Thank you for your valuable feedback: ${answers}`);
    rl.close();
  }
};
qList(0);

/* rl.question(q0, (answer0) => {
  rl.question(q1, (answer1) => {
    rl.question(q2, (answer2) => {
      rl.question(q3, (answer3) => {
        rl.question(q4, (answer4) => {
          rl.question(q5, (answer5) => {
            rl.question(q6, (answer6) => {
              answers = answer0 + '\n' + answer1 + '\n' + answer2 + '\n' + answer3 + '\n' + answer4 + '\n' + answer5 + '\n' + answer6;
              console.log(`Thank you for your valuable feedback: ${answers}`)
              rl.close()
            });
          });
        });
      });
    });
  });
}); */