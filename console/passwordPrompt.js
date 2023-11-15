// passwordPrompt.js

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.stdoutMuted = true;

rl.query = "Password : ";
rl.question(rl.query, function(password) {
  console.log('\nPassword is ' + password);
  rl.close();
});

rl._writeToOutput = function _writeToOutput(stringToWrite) {
  if (rl.stdoutMuted)
    rl.output.write("\x1B[2K\x1B[200D"+rl.query+"["+((rl.line.length%2==1)?":-:":"-:-")+"]");
  else
    rl.output.write(stringToWrite);
};
