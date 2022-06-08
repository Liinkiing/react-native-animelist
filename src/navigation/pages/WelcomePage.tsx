import type { ReactElement } from 'react'
import { Button, Center, Heading, Stagger, StatusBar, Text } from 'native-base'
import { Dimensions } from 'react-native'
import type { UnauthenticatedStackScreenProps } from '../stacks/UnauthenticatedStack'

export function WelcomePage({
  navigation,
}: UnauthenticatedStackScreenProps): ReactElement {
  return (
    <Center bg="blue.600" safeArea height={Dimensions.get('window').height}>
      <StatusBar barStyle="light-content" />
      <Stagger
        visible
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.8,
            stagger: {
              offset: 30,
            },
          },
        }}
      >
        <Heading size="2xl" color="white">
          MyAnimeList
        </Heading>
        <Text color="white">Your favorite weebos place</Text>

        <Button
          mt={4}
          onPress={() => {
            navigation.navigate('Login')
          }}
          colorScheme="white"
          variant="solid"
        >
          Login
        </Button>
      </Stagger>
    </Center>
  )
}
