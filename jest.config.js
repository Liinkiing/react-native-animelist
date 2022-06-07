module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '/__snapshots__/'],
  watchPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/android',
    '<rootDir>/ios',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test-setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
}
