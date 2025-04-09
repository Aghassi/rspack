const { rspack } = require('@rspack/core');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');

module.exports = {
	context: __dirname,
	entry: {
		main: "./build/index.js"
	},
	mode: 'development',
	optimization: undefined,
	module: {
		rules: [
			{
				resolve: {
					fullySpecified: false,
				},
				test: /\.m?js$/,
				type: 'javascript/auto',
			}
		],
	},
	devServer: {
		allowedHosts: 'all',
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new ReactRefreshPlugin()
	],
	watch: true
};
