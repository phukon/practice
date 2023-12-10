var argv = require('minimist')(process.argv.slice(1));
console.log(argv);

// const minimist = require('minimist');

// function updateArgv(args) {
//   argv = minimist(args)
//   global.argv = argv
//   return argv
// }
// console.log('\n')
// console.log(updateArgv(['ewf', 'wefwef', 'were']))