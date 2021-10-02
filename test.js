const test = require('ava');
const StringCalculator = require('./src/models/StringCalculator');

test(`Test empty string`, (t) => {
    const string_calculator = new StringCalculator("");
    t.is(string_calculator.add(), 0);
  });

test(`Test one number`, (t) => {
    const string_calculator = new StringCalculator("1");
    t.is(string_calculator.add(), 1);
});
test('Test of two numbers, comma separeted', t => {
    const string_calculator = new StringCalculator("1,2"); 
    t.is(string_calculator.add(), 3);
});