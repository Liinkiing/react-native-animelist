import type { ReactElement } from 'react'
import { Button, Center, Heading, StatusBar, Text } from 'native-base'
import { Dimensions } from 'react-native'
import type { UnauthenticatedStackScreenProps } from '../stacks/UnauthenticatedStack'

export function WelcomePage({
  navigation,
}: UnauthenticatedStackScreenProps): ReactElement {
  return (
    <Center bg="blue.600" safeArea height={Dimensions.get('window').height}>
      <StatusBar barStyle="light-content" />
      <Heading size="2xl" color="white">
        MyAnimeList
      </Heading>
      <Text color="white">Your favorite weebos place</Text>
      <Button
        onPress={() => {
          navigation.navigate('Login')
        }}
        colorScheme="white"
        variant="solid"
      >
        LOGIN
      </Button>
    </Center>
  )
}
