module.exports = {
	presets: [['@babel/preset-env'], '@babel/preset-react', '@babel/preset-typescript'],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/proposal-object-rest-spread',
		'babel-plugin-styled-components',
		[
			'@babel/plugin-transform-runtime',
			{
				regenerator: true,
			},
		],
	],
	env: {
		test: {
			plugins: [['babel-plugin-styled-components', { ssr: false, pure: true, displayName: false }]],
		},
	},
};
