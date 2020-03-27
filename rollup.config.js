import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";


const plugins = () => [
	alias({
		entries: [
			{ find: "socket.io-client", replacement: "node_modules/socket.io-client/dist/socket.io.dev.js" },
		]
	}),
	resolve({
		browser: true,
		preferBuiltins: false,

	}),
	commonjs({
		include: /node_modules/,
	}),
];

export default [
	{
		input: "tscbuild/mgf.js",
		output: {
			format: "iife",
			file: "story/mgf.js",
			name: "mgfjs",
			sourcemap: true,
		},
		plugins: plugins()
	},
	{
		input: "tscbuild/monsters.js",
		output: {
			format: "iife",
			file: "story/monsters.js",
			name: "monstersjs",
			sourcemap: true,
		},
		plugins: plugins()
	},
];
