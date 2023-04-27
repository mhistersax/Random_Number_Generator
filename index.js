// Importing Built In Node Js Functions
const readline = require("readline"); // Responsible For the Reading of User's Input
const crypto = require("crypto"); //Responsible for the random generation

const userData = readline.createInterface({
  //block responsible for standard Input And OutPut
  input: process.stdin,
  output: process.stdout,
});

// Responsible for user Prompt via Terminal
userData.question("Welome, Please Input Minimum Value: ", (min) => {
  userData.question("Input Maximum Value: ", (max) => {
    const minNum = parseInt(min); //parseInt was use to tell NODE that we dealing with int
    const maxNum = parseInt(max);
    console.log("Random number = " + random(minNum, maxNum));
    userData.close();
  });
});

//function for random generation
function random(min, max) {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const randomBytes = crypto.randomBytes(bytesNeeded);
  const randomNumber = randomBytes.readUIntBE(0, bytesNeeded);
  return min + (randomNumber % range);
}

// prompt for closing operation
userData.on("close", () => {
  console.log("Program closed Dectected!");
  console.log("Good Bye!");
  process.exit(0);
});
