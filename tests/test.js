const test = require('ava');
const StringCalculator = require('../src/models/StringCalculator');

test(`Test empty string`, (t) => {
    StringCalculator.init("");
    t.is(StringCalculator.add(), 0);
  });

test(`Test one number`, (t) => {
    StringCalculator.init("1");
    t.is(StringCalculator.add(), 1);
});
test('Test of two numbers, comma separeted', t => {
   StringCalculator.init("1,2"); 
    t.is(StringCalculator.add(), 3);
});

test('Test unknown amount of numbers pt1, comma separeted', t => {
    StringCalculator.init("1,1,1,1,1"); 
    t.is(StringCalculator.add(), 5);
});
test('Test unknown amount of numbers pt2, comma separeted', t => {
    StringCalculator.init("1,1,1,1,1,1,1,1,1,1"); 
    t.is(StringCalculator.add(), 10);
});

test('Test new line and comma separator pt1', t => {
    StringCalculator.init("1,2\n3");
    t.is(StringCalculator.add(), 6); 
});
test('Test new line and comma separator pt2', t => {
    StringCalculator.init("3\n3\n3");
    t.is(StringCalculator.add(), 9); 
});
test('Test step 3', t => {
    StringCalculator.init("//;\n1;10\n1,4");
    t.is(StringCalculator.add(), 16);
});
test('Test step 4', t => {
    StringCalculator.init("");
    t.is(StringCalculator.add(), 0);
});
test('Test step 5: single negative number', t => {
    StringCalculator.init("//;\n-1");
    try {
        StringCalculator.add();
        test.failing(`Exception expected`);
    } catch(error){
        t.is(error, `Negatives not allowed: -1`);
    }
});
test('Test step 5: multiple negative numbers', t => {
    StringCalculator.init("//;\n-1;4\n-10");
    try {
        StringCalculator.add();
        test.failing(`Exception expected`);
    } catch(error){
        t.is(error, `Negatives not allowed: -1,-10`);
    }
});
test('Test step 5: positive numbers', t => {
    StringCalculator.init("//;\n4\n1");
    t.is(StringCalculator.add(), 5);
});
test('Test step 6: number bigger than 1000', t => {
    StringCalculator.init("//;\n1001;4\n2");
    t.is(StringCalculator.add(), 6);
});
test('Test step 7: delimiters length', t => {
    StringCalculator.init("//[;;;]\n10;;;4;;;2");
    t.is(StringCalculator.add(), 16);
})