import type { ReactElement } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomePage } from '../pages/WelcomePage'
import { LoginPage } from '../pages/LoginPage'

export type UnauthenticatedStackParamList = {
  Welcome: undefined
  Login: undefined
}

export type UnauthenticatedStackScreenProps = NativeStackScreenProps<
  UnauthenticatedStackParamList,
  'Welcome' | 'Login'
>

const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>()

export function UnauthenticatedStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={WelcomePage}
      />
      <Stack.Screen
        name="Login"
        options={{
          presentation: 'modal',
        }}
        component={LoginPage}
      />
    </Stack.Navigator>
  )
}
