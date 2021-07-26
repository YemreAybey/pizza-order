module.exports = {
	setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@src/(.*)': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest',
	},
	preset: 'ts-jest',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
