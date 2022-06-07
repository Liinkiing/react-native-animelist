import type { ReactElement } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { Header } from '../shared/components/Header'
import { ArticleDetailPage } from './pages/ArticleDetailPage'

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  ArticleDetail: {
    id: string
  }
}

export type RootStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'Profile' | 'ArticleDetail'
>

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          header: props => <Header {...props} title="Home header" />,
        }}
        name="Home"
        component={HomePage}
      />
      <Stack.Screen
        options={{
          header: props => <Header {...props} title="Profile header" />,
        }}
        name="Profile"
        component={ProfilePage}
      />
      <Stack.Screen
        options={{
          header: props => <Header {...props} title="Article" />,
        }}
        name="ArticleDetail"
        component={ArticleDetailPage}
      />
    </Stack.Navigator>
  )
}
