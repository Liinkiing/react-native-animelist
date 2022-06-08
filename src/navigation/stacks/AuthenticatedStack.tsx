import type { ReactElement } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { Icon } from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { HomePage } from '../pages/HomePage'
import { ProfilePage } from '../pages/ProfilePage'
import { AnimeDetailPage } from '../pages/AnimeDetailPage'
import { useAuth } from '../../shared/providers/AuthProvider'

export type AuthenticatedStackParamList = {
  Home: undefined
  Profile: undefined
  AnimeDetail: {
    id: string
    title: string
  }
}

export type AuthenticatedStackScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'Home' | 'Profile' | 'AnimeDetail'
>

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>()

export function AuthenticatedStack(): ReactElement {
  const { logout } = useAuth()
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Icon
            onPress={() => {
              navigation.navigate('Profile')
            }}
            as={EvilIcons}
            size="lg"
            color="blue.500"
            name="user"
          />
        ),
      })}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerRight: () => (
            <Icon
              onPress={logout}
              as={Ionicons}
              size="lg"
              color="blue.500"
              name="ios-log-out"
            />
          ),
        }}
      />
      <Stack.Screen
        name="AnimeDetail"
        component={AnimeDetailPage}
        options={props => ({
          title: props.route.params.title,
        })}
      />
    </Stack.Navigator>
  )
}
