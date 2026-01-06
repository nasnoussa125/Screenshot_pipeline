
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    
    dir: './',
});

// Configuration personnalisée de Jest
const customJestConfig = {
    projects: [
        {
            displayName: 'unit',
            testMatch: ['**/__tests__/unit/**/*.test.ts'],
            testEnvironment: 'jest-environment-jsdom',
            setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
            transform: {
                '^.+\\.(ts|tsx)$': 'ts-jest',
            },
            moduleNameMapper: {
                '^@/(.*)$': '<rootDir>/$1',
            },
        },
        {
            displayName: 'e2e',
            testMatch: ['**/__tests__/e2e/**/*.test.ts'],
            testEnvironment: 'node',
            transform: {
                '^.+\\.(ts|tsx)$': 'ts-jest',
            },
            moduleNameMapper: {
                '^@/(.*)$': '<rootDir>/$1',
            },
        },
    ],
};

// createJestConfig est exporté ainsi pour s'assurer que next/jest 
// puisse charger la config Next.js de manière asynchrone
module.exports = createJestConfig(customJestConfig);