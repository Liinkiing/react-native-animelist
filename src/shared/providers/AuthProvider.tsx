import type { ReactElement, ReactNode } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { User } from '../../@types/auth'
import { AuthService } from '../../services/auth'
import { UserActionsProvider } from './UserActionsProvider'
import { UserService } from '../../services/user'

interface Context {
  readonly user: User | null
  readonly isLoggedIn: boolean
  readonly login: (username: string, password: string) => Promise<boolean>
  readonly logout: () => Promise<boolean>
}

interface Props {
  readonly children: ReactNode
}

const AuthContext = createContext<Context | undefined>(undefined)

export function useAuth(): Omit<Context, 'user'> & { user: User } {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a <AuthProvider />')
  }
  if (context.isLoggedIn && context.user === null) {
    throw new Error('User was null while isLoggedIn was true')
  }

  return context as Omit<Context, 'user'> & { user: User }
}

export function AuthProvider({ children }: Props): ReactElement {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const u = await UserService.getUser()
      setUser(u)
    }
    fetchUser()
  }, [])

  const login = useCallback(async (username: string, password: string) => {
    const u = await AuthService.login({ username, password })
    setUser(u)

    return true
  }, [])

  const logout = useCallback(async () => {
    await AuthService.logout()
    setUser(null)

    return true
  }, [])

  const context = useMemo<Context>(
    () => ({
      isLoggedIn: !!user,
      login,
      logout,
      user,
    }),
    [user, login, logout],
  )

  return (
    <AuthContext.Provider value={context}>
      <UserActionsProvider setUser={setUser}>{children}</UserActionsProvider>
    </AuthContext.Provider>
  )
}
