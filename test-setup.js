jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: jest.fn(() => ({
      canGoBack: jest.fn(() => true),
      navigate: jest.fn(),
      dispatch: jest.fn(),
    })),
  }
})
