const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));
module.exports = {
	env: {
		jest: true,
		browser: true,
		node: true,
		es6: true,
		es2017: true,
		es2020: true,
		es2021: true,
		serviceworker: true,
	},
	extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
			tsx: true, // Allows for the parsing of JSX
		},
		env: { es6: true },
	},
	plugins: ['prettier', '@typescript-eslint', 'import', 'babel', 'react-hooks'],
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
			globals: {
				document: true,
				window: true,
				localStorage: true,
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-inferrable-types': 'off',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: '@app/**',
						group: 'external',
						position: 'after',
					},
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'prettier/prettier': ['error', prettierOptions],
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: ['const', 'let', 'import'], next: '*' },
			{ blankLine: 'any', prev: ['import'], next: ['import'] },
			{ blankLine: 'never', prev: ['const', 'let'], next: ['const', 'let'] },
			{ blankLine: 'always', prev: ['export'], next: ['export'] },
			{ blankLine: 'always', prev: ['multiline-const', 'multiline-let'], next: ['*'] },
			{ blankLine: 'always', prev: ['*'], next: ['multiline-const', 'multiline-let'] },
			{ blankLine: 'always', prev: ['*'], next: ['if', 'switch', 'for', 'while', 'try', 'function', 'class'] },
			{ blankLine: 'always', prev: ['if', 'switch', 'for', 'while', 'try', 'function', 'class'], next: ['*'] },
			{ blankLine: 'never', prev: ['case'], next: ['case'] },
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: ['enumMember', 'enum'],
				format: ['UPPER_CASE'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
		],
		'react/jsx-sort-props': [
			'error',
			{
				shorthandFirst: true,
			},
		],
	},
};
