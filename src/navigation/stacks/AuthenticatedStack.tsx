import type { ReactElement } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { Icon, Text } from 'native-base'

import { HomePage } from '../pages/HomePage'
import { ProfilePage } from '../pages/ProfilePage'
import { AnimeDetailPage } from '../pages/AnimeDetailPage'
import { useAuth } from '../../shared/providers/AuthProvider'
import { LikeButton } from '../../sections/anime/components/LikeButton'
import type { SerializedAnime } from '../../@types/auth'

export type AuthenticatedStackParamList = {
  Home: undefined
  Profile: undefined
  AnimeDetail: {
    anime: SerializedAnime
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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={({ navigation }) => ({
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
        component={HomePage}
      />
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
          headerRight: () => (
            <LikeButton
              anime={props.route.params.anime}
              size="lg"
              color="blue.600"
            />
          ),
          title: props.route.params.anime.title,
        })}
      />
    </Stack.Navigator>
  )
}
