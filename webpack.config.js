// const ExtractPlugin = require('extract-text-webpack-plugin');
// const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'src'),
		publicPath: '/',
	},
	plugins: [new HTMLPlugin(), new ExtractPlugin('bundle-[hash].css')],
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: { presets: ['es2015', 'react'] },
			},
			{
				test: /\.css$/,
				// loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
				loader: 'style-loader!css-loader',
			},
		],
	},
};
