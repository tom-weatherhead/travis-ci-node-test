// src/main.js

// 'use strict';

// TODO: Huffman encoding

const nodeVersion = process.versions.node.split('.').map(function (s) { return parseInt(s, 10); });

function isArrayGreaterOrEqual(a, b) {
	const aa = a.slice(0);
	const bb = b.slice(0);
	var i;

	while (aa.length < bb.length) {
		aa.push(0);
	}

	while (aa.length > bb.length) {
		bb.push(0);
	}

	for (i = 0; i < aa.length; i++) {
		const diff = aa[i] - bb[i];

		if (diff) {
			return diff > 0;
		}
	}

	return true;
}

function isNodeVersionGreaterOrEqual(b) {
	return isArrayGreaterOrEqual(nodeVersion, b);
}

function add(a, b) {
	return a + b;
}

function sum(a) {

	if (a.length <= 0) {
		return 0;
	}

	return a.slice(1).reduce(add, a[0]);
}

function generalTests() {
	// console.log(`Version: ${process.version}`); // process.version added in Node.js 0.1.3 // Fails in Node.js 0.8.6
	console.log('Version:', process.version); // process.version added in Node.js 0.1.3

	const v = process.versions.node;
	const v2 = v.split('.').map(function (s) { return parseInt(s, 10); });
	var i;	// 'let' fails in Node.js 0.8.6

	for (i = 0; i < v2.length; i++) {
		console.log(typeof v2[i], v2[i]);
	}

	console.log('Version is at least 0.1.2', isArrayGreaterOrEqual(v2, [0, 1, 2]));
	console.log('Version is at least 0.8.6', isArrayGreaterOrEqual(v2, [0, 8, 6]));
	console.log('Version is at least 1.2', isArrayGreaterOrEqual(v2, [1, 2]));

	console.log('typeof array.reduce: ', typeof [].reduce);

	console.log('sum([2, 3, 5, 7]) :', sum([2, 3, 5, 7]));

	if (isNodeVersionGreaterOrEqual([4, 9, 1])) {
		const argon = require('./argon.js');

		argon.test();
	}
}

module.exports = {
	generalTests: generalTests,
	add: add,
	sum: sum
};
