module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: { 'src/(.*)': '/src/$1' },
  modulePaths: [],
  rootDir: '..',
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
};
