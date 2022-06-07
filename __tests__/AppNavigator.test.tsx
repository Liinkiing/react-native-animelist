import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from '../src/navigation/AppNavigator'

describe('<AppNavigator />', () => {
  it('should correctly navigate to the profile page', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>,
    )
    const profileButton = getByText('Go to profile page')
    fireEvent.press(profileButton)
    expect(getByText('Welcome to profile page')).toBeDefined()
  })
  it('should correctly navigate to the article detail page', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>,
    )
    const articleButton = getByText('Premier article')
    fireEvent.press(articleButton)
    expect(
      getByText(`Welcome to article detail page page with id 1`),
    ).toBeDefined()
  })
})
