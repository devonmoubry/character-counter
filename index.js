const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', (answer) => {
  // TODO: Log the answer in a database
  if (answer.length === 1) {
    console.log(`'${answer}' has 1 character`);
  } else {
    console.log(`'${answer}' has ${answer.length} characters`);
  }
  rl.close();
});
