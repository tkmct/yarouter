module.exports = {
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
