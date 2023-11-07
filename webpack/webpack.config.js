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
				{from: "src/styles/global/reset.css", to: "."},
				{from: "src/styles/global/*.css", to: "bundled-global-styles.css",
				 	transformAll(assets) {
						const result = assets.reduce((accumulator, asset) => {
							if(asset.sourceFilename !== "src/styles/global/reset.css"){
								const content = asset.data;
								accumulator = `${accumulator}${content}\n`;
							}
							return accumulator;
						}, "");
						return result;
					},
				},
				{from: "src/styles/Header/*.css", to: "bundled-header-styles.css",
				 	transformAll(assets) {
						const result = assets.reduce((accumulator, asset) => {
							const content = asset.data;
							accumulator = `${accumulator}${content}\n`;
							return accumulator;
						}, "");
						return result;
					},
				},
				{from: "src/styles/Footer/*.css", to: "bundled-footer-styles.css",
				 	transformAll(assets) {
						const result = assets.reduce((accumulator, asset) => {
							const content = asset.data;
							accumulator = `${accumulator}${content}\n`;
							return accumulator;
						}, "");
						return result;
					},
				},
				{from: "src/styles/Hero/*.css", to: "bundled-hero-styles.css",
				 	transformAll(assets) {
						const result = assets.reduce((accumulator, asset) => {
							const content = asset.data;
							accumulator = `${accumulator}${content}\n`;
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
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
};

module.exports = [config];
