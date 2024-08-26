const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
	entry: './index.tsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
	},
	target: 'web',
	mode: 'development',
	devServer: {
		port: 3000,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json', '.scss', '.sass'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(css)$/,
				use: [miniCss.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i, // This regex matches both .scss and .sass files
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public/index.html'),
		}),
		new miniCss({}),
	],
};
