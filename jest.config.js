module.exports = {
    rootDir: '.',
    moduleNameMapper: {
      '@common-domain/(.*)': '<rootDir>/packages/@common-domain/$1/src',
      '@common-infra/(.*)': '<rootDir>/packages/@common-infra/$1/src',
      '@lambdas/(.*)': '<rootDir>/packages/@lambdas/$1/src',
    },
    collectCoverageFrom: [
      '<rootDir>/packages/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest',
    },
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  };
