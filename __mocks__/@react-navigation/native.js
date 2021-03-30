const native = jest.createMockFromModule('@react-navigation/native');

native.useNavigation = () => ({
  setOptions: () => jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
});

native.useRoute = () => ({
  params: {},
});

module.exports = native;
