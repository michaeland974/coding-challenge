const path = require("path");
const Copy = require("copy-webpack-plugin");

var config = {
	mode: "development",
	entry: ["./src/entry.js"],
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "bundled-scripts.js",
		clean: true,
	},
	plugins: [
		new Copy({
			patterns: [
				{from: "assets", to: "./assets"},
				{from: "src/index.html", to: "."},
				{from: "src/styles/reset.css", to: "."},
				{from: "src/styles/*.css", to: "bundled-styles.css",
				 	transformAll(assets) {
						const result = assets.reduce((accumulator, asset) => {
							if(asset.sourceFilename !== "src/styles/reset.css"){
								const content = asset.data;
								accumulator = `${accumulator}${content}\n`;
							}
							return accumulator;
						}, "");
						return result;
					},
				},
			]
		}),
	],
	watchOptions: {
		aggregateTimeout: 600,
		ignored: "**/node_modules"
	}
};

module.exports = [config];
