// test/main.test.js

// const engine = require('../dist/main');
const engine = require('..');

const a = 2;
const b = 3;

const expectedResult = a + b;
const actualResult = engine.add(a, b);

console.log('expectedResult:', typeof expectedResult, expectedResult);
console.log('actualResult:', typeof actualResult, actualResult);

if (actualResult !== expectedResult) {
	console.error('Not equal');
	throw new Error('Not equal');
} else {
	console.log('Equal');
}

console.log('generalTests:');
engine.generalTests();
