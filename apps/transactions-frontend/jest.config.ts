module.exports = {
  displayName: 'transactions-frontend',
  preset: '../../jest.preset.js',
  transform: {
    '.*.(vue)$': '@vue/vue2-jest',
    '^.+.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  coverageDirectory: '../../coverage/apps/transactions-frontend',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': { tsConfig: 'apps/transactions-frontend/tsconfig.spec.json' },
  },
};
