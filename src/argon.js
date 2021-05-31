// src/argon.js

'use strict';

function test() {
	let v3 = process.versions.node.split('.').map(s => parseInt(s, 10));

	console.log(`v3 is ${typeof v3} ${v3}`);
}

module.exports = {
	test: test
};
