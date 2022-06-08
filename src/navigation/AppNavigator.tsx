import type { ReactElement } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { ArticleDetailPage } from './pages/ArticleDetailPage'
import { AnimationPage } from './pages/AnimationPage'
import { AnimeDetailPage } from './pages/AnimeDetailPage'

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  Animation: undefined
  ArticleDetail: {
    id: string
  }
  AnimeDetail: {
    id: string
    title: string
  }
}

export type RootStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'Profile' | 'ArticleDetail' | 'Animation' | 'AnimeDetail'
>

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Animation" component={AnimationPage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailPage} />
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
