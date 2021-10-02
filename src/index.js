const StringCalculator = require('./models/StringCalculator');

var arg_numbers = process.argv.slice(2)[0];

let string_calculator = new StringCalculator(arg_numbers);
console.log(string_calculator.add());
