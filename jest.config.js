/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/*.ts',
    '!src/env.ts',
    '!src/index.ts',
    '!**/node_modules/**',
    '!__tests__/**',
  ],
  coverageReporters: ['lcov'],
  preset: 'ts-jest',
  runner: 'groups',
  testEnvironment: 'node',
}
