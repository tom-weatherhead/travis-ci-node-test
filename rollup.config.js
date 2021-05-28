// rollup.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { terser } = require('rollup-plugin-terser');

export default [
	{
		input: './dist/types/main.js',
		output: [
			{
				file: 'dist/travis-ci-node-test.cjs.js',
				format: 'cjs',
				exports: 'named'
			},
			{
				file: 'dist/travis-ci-node-test.esm.js',
				format: 'es',
				compact: true,
				plugins: [terser()]
			},
			{
				file: 'dist/travis-ci-node-test.js',
				name: 'travis-ci-node-test',
				format: 'umd',
				compact: true,
				plugins: [terser()]
			}
		]
	}
];
