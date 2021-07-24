import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config = {
	mode: 'development',
	output: {
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(eot|otf|ttf|woff|woff2|pdf|mp3)$/,
				use: 'file-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@src': path.resolve(__dirname, '../../src/'),
			'@public': path.resolve(__dirname, '../../public/'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
};

export default config;
