const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
	entry: "./src",
	output: {
		path: __dirname + '/dist',
		filename: "js/bundle.js"
	},
	module: {
		loaders: [
	      {
	        test: /\.js/,
	        loader: 'babel-loader',
	        include: __dirname + '/src'
	      },
	       {
	        test: /\.css/,
	        loaders: ['style-loader', 'css-loader'],
	        include: __dirname + '/src'
	      },
	      {
        	test: /\.(jpe?g|gif|png)$/,
        	include: SRC_DIR,
        	loader: 'file-loader'
        },
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
			use: [{
				loader: 'file-loader',
				options: {
					limit: 10000,
					mimetype: 'application/font-woff'
				}
			}] 
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
			use: [{
				loader: 'file-loader',
				options: {
					limit: 10000,
					mimetype: 'application/font-woff2'
				}
			}]
		},
		{
			test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, 
			use: [{
				loader: 'file-loader',
				options: {
					limit: 10000,
					mimetype: 'application/octet-stream'
				}
			}] 
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
			loader: "file-loader"
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
			use: [{
				loader: 'file-loader',
				options: {
					limit: 10000,
					mimetype: 'image/svg+xml'
				}
			}] 
		}
    ],
  	}
}