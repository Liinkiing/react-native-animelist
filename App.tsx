import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NativeBaseProvider } from 'native-base'
import * as Linking from 'expo-linking'
import { ActivityIndicator } from 'react-native'
import { AppNavigator } from './src/navigation/AppNavigator'
import { AuthProvider } from './src/shared/providers/AuthProvider'

const prefix = Linking.createURL('/')
const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer
            linking={{
              prefixes: [prefix],
              config: {
                screens: {
                  Welcome: 'welcome',
                  Login: 'login',
                },
              },
            }}
            fallback={<ActivityIndicator />}
          >
            <AppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </AuthProvider>
    </NativeBaseProvider>
  )
}
