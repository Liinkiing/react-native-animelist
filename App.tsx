import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NativeBaseProvider } from 'native-base'
import { AppNavigator } from './src/navigation/AppNavigator'

const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
