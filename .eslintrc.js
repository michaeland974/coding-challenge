module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"semi": [2, "always"],
		"quotes": ["error", "double", { "allowTemplateLiterals": true }],
		"indent": ["error", "tab"]
	},
	"ignorePatterns": [
		"/**/*.html",
		"dist",
		"node_modules"
	],
};
