import { render } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '../src/shared/components/Header'

const props = {
  navigation: {
    navigate: jest.fn(),
  },
  route: {},
  options: {},
}

describe('<Header />', () => {
  it('should correctly render the header with a title', () => {
    // @ts-ignore
    const { getByText } = render(<Header {...props} title="Hello darkness" />)
    expect(getByText('Hello darkness')).toBeDefined()
  })
  it('should correctly render the header with a back button when can go back', async () => {
    // @ts-ignore
    useNavigation.mockReturnValue({
      canGoBack: jest.fn(() => true),
      navigate: jest.fn(),
      dispatch: jest.fn(),
    })
    // @ts-ignore
    const { getByText } = render(<Header {...props} title="Hello darkness" />)
    expect(getByText('Back')).toBeDefined()
  })
  it('should correctly render the header without a back button when cant go back', () => {
    // @ts-ignore
    useNavigation.mockReturnValue({
      canGoBack: jest.fn(() => false),
      navigate: jest.fn(),
      dispatch: jest.fn(),
    })
    // @ts-ignore
    const { queryByText } = render(<Header {...props} title="Hello darkness" />)
    expect(queryByText('Back')).toBeFalsy()
  })
})
