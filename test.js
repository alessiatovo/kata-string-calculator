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

test('Test unknown amount of numbers pt1, comma separeted', t => {
    const string_calculator = new StringCalculator("1,1,1,1,1"); 
    t.is(string_calculator.add(), 5);
});
test('Test unknown amount of numbers pt2, comma separeted', t => {
    const string_calculator = new StringCalculator("1,1,1,1,1,1,1,1,1,1"); 
    t.is(string_calculator.add(), 10);
});

test('Test new line and comma separator pt1', t => {
    const string_calculator = new StringCalculator("1,2\n3");
    t.is(string_calculator.add(), 6); 
});
test('Test new line and comma separator pt2', t => {
    const string_calculator = new StringCalculator("3\n3\n3");
    t.is(string_calculator.add(), 9); 
});
test('Test step 3', t => {
    const string_calculator = new StringCalculator("//;\n1;10\n1,4");
    t.is(string_calculator.add(), 16);
});
test('Test step 4', t => {
    const string_calculator = new StringCalculator("");
    t.is(string_calculator.add(), 0);
})
// test('Test step 5: single negative number', t => {
//     const string_calculator = new StringCalculator("//;\n-1");
//     const error = t.throw(string_calculator.add());
//     t.is(error, `Negatives not allowed: -1`);
// });
// test('Test step 5: multiple negative numbers', t => {
//     const string_calculator = new StringCalculator("//;\n-1;4\n-10");
//     const error = t.throw(string_calculator.add());
//     t.is(error, `Negatives not allowed: -1,-10`);
// });
test('Test step 5: positive numbers', t => {
    const string_calculator = new StringCalculator("//;\n4\n1");
    t.is(string_calculator.add(), 5);
});