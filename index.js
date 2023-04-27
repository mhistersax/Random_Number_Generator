const readline = require("readline");
const crypto = require("crypto");

const userData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userData.question("Welome, Please Input Minimum Value: ", (min) => {
  userData.question("Input Maximum Value: ", (max) => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    console.log("Random number = " + random(minNum, maxNum));
    userData.close();
  });
});

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
