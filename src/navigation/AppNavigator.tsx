import type { ReactElement } from 'react'
import { useAuth } from '../shared/providers/AuthProvider'
import { AuthenticatedStack } from './stacks/AuthenticatedStack'
import { UnauthenticatedStack } from './stacks/UnauthenticatedStack'

export function AppNavigator(): ReactElement {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <AuthenticatedStack /> : <UnauthenticatedStack />
}
