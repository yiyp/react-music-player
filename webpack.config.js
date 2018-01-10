/**
 *  node.js中 __dirname 变量获取当前模块文件所在目录的完整绝对路径
 */

/*module.exports = {
	// entry: './app/index.js',  如果采用这个方式  ./ 是必须加的 代表在项目的文件中查找该文件，不加则会去 node_moudlues包 里面找
	entry: __dirname + '/app/index.js', 	// 类型：字符串或数组
	output: {
		path: __dirname + '/dist', 			// 输出路径,需要绝对路径  
		filename: 'bundle.js'				// 输出文件名
	},
	module: {
		loaders: [{
			test: /\.js$/,					// 需要匹配的文件
			exclude: /node_modules/,		// 不需要处理的文件
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}]
	}
}*/
'use strict'

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(__dirname, 'app/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.tpl.html',
			inject: 'body',
			filename: './index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoErrorsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.en.NODE_EN': JSON.stringify('development')
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,					// 需要匹配的文件
			exclude: /node_modules/,		// 不需要处理的文件
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}]
	}
};