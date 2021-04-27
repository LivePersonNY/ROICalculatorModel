const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: ['./src/index.js'],
	//watch: true,
	output: {
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'var',
		library: 'ROICalc',
	},
}