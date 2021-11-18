const path = require("path");
const webpack = require("webpack");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require("terser-webpack-plugin");
//const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const { web } = require("webpack");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");

module.exports = {
	mode: "development",

	entry: {
		index: "./src/index.js",
		frontend: "./src/insyde-user-frontend.js",
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build"),
		library: "[name]",
	},
	target: "web",
	plugins: [
		new webpack.ProgressPlugin(),
		new DependencyExtractionWebpackPlugin({ injectPolyfill: true }),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [path.resolve(__dirname, "src")],
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /.(scss|css)$/,

				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].css",
							context: path.resolve(__dirname, "./"),
							outputPath: path.resolve(__dirname, "/"),
							publicPath: path.resolve(__dirname, "build"),
						},
					},
					{
						loader: "extract-loader",
					},
					{
						loader: "css-loader",

						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",

						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},

	optimization: {
		minimizer: [new TerserPlugin()],

		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/,
				},
			},

			chunks: "async",
			minChunks: 1,
			minSize: 30000,
			name: false,
		},
	},
};
