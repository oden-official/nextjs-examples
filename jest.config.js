const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  verbose: false,
  testMatch: ["**/__tests__/**/?(*.)+(e2e-spec).[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  rootDir: "."
}

module.exports = createJestConfig(customJestConfig)