const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const UnusedWebpackPlugin = require('unused-webpack-plugin');

module.exports = (env, argv) => {
		isProd = argv.mode === 'production';
		isDev = !isProd;

		const unusedWebpackPlugin = new UnusedWebpackPlugin({
				directories: [path.resolve(__dirname, 'src')],
				exclude: ['*.test.js'],
				root: __dirname,
		});

		const config = {
				stats: 'minimal',
				mode: 'none',
				entry: {
						app: path.join(__dirname, 'src', 'index.tsx')
				},
				devtool: 'inline-source-map',
				target: 'web',
				resolve: {
						extensions: ['.ts', '.tsx', '.js']
				},
				devServer: {
						historyApiFallback: true,
						port: 8000,
						open: true,
						client: {
								overlay: {
										warnings: false,
								},
						},
				},
				module: {
						rules: [
								{
										test: /\.ts(x)?$/,
										use: [{ loader: 'ts-loader' }],
										exclude: '/node_modules/'
								},
								{
										test: /\.css$/i,
										use: [isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
								},
								{
										test: /^(?!.*\.module\.less$).*\.less$/i,
										use: [
												isProd ? { loader: MiniCssExtractPlugin.loader } : { loader: "style-loader" },
												{ loader: "css-loader", options: { modules: { mode: 'global' } } },
												{ loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }
										],
								},
								{
										test: /\.module\.less$/i,
										use: [
												isProd
														? { loader: MiniCssExtractPlugin.loader }
														: { loader: "style-loader",
																options: {
																		esModule: false,
																}
														},
												{ loader: "dts-css-modules-loader",
														options: {
																namedExport: true
														}
												},
												{ loader: "css-loader",
														options: {
																modules: {
																		localIdentName: isProd ? '[local]_[hash:base64:8]' : '[name]__[local]_[hash:base64:4]',
																		mode: 'global'
																},
																sourceMap: true
														}
												},
												{ loader: "less-loader",
														options: {
																lessOptions: { javascriptEnabled: true }
														} 
												},
										],
								},
								{
										test: /\.svg$/,
										loader: '@svgr/webpack'
								},
								{
										test: /\.(?:|gif|png|jpg)$/,
										type: 'asset/resource',
										generator: {
												filename: () => {
													return 'img/[name].[contenthash][ext]';
												}
										}
								}
						],
				},
				output: {
						filename: '[name].js',
						path: path.resolve(__dirname, 'dist'),
						publicPath: '/'
				},
				plugins: [
						new MiniCssExtractPlugin({
								linkType: "text/css",
								ignoreOrder: false
						}),
						new HtmlWebpackPlugin({
								template: path.join(__dirname, '/src', 'index.html')
						}),
						isDev && unusedWebpackPlugin
				].filter(v => v)
		}

		if (isProd) {
				config.optimization = {
						splitChunks: {
								chunks: 'all',
								cacheGroups: {
										commons: {
												test: /[\\/]node_modules[\\/]/,
												name: "vendor",
												chunks: "initial",
										}
								}
						}
				};
		}

		return config;
};
