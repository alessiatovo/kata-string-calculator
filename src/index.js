const stringCalculator = require('./models/StringCalculator');

var argNumbers = process.argv.slice(2)[0];

stringCalculator.init(argNumbers);
console.log(stringCalculator.add());
