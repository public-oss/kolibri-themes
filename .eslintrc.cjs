/**
 * https://www.npmjs.com/package/eslint
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
};
