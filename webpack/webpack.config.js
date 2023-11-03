const path = require("path");
const Copy = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: ["./src/entry.js"],
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "bundle.js",
		clean: true,
	},
	plugins: [
		new Copy({
			patterns: [
				{from: "assets", to: "./assets"},
				{from: "src/styles", to: "./styles"},
				{from: "src/index.html", to: "."}
			]
		}),
	],
	watchOptions: {
		aggregateTimeout: 600,
		ignored: "**/node_modules"
	}
};