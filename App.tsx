import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NativeBaseProvider } from 'native-base'
import { AppNavigator } from './src/navigation/AppNavigator'
import { AuthProvider } from './src/shared/providers/AuthProvider'

const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </AuthProvider>
    </NativeBaseProvider>
  )
}
