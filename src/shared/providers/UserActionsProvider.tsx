import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import { createContext, useCallback, useContext, useMemo } from 'react'
import type { SerializedAnime, User } from '../../@types/auth'
import { UserService } from '../../services/user'

interface Context {
  readonly clearAnimeLikes: () => Promise<boolean>
  readonly toggleAnimeLike: (anime: SerializedAnime) => Promise<boolean>
}

interface Props {
  readonly setUser: Dispatch<SetStateAction<User | null>>
  readonly children: ReactNode
}

const UserActionsContext = createContext<Context | undefined>(undefined)

export function useUserActions(): Context {
  const context = useContext(UserActionsContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a <AuthProvider />')
  }

  return context
}

export function UserActionsProvider({
  children,
  setUser,
}: Props): ReactElement {
  const toggleAnimeLike = useCallback(async (anime: SerializedAnime) => {
    const u = await UserService.toggleAnimeLike(anime)
    setUser(u)

    return true
  }, [])

  const clearAnimeLikes = useCallback(async () => {
    const u = await UserService.clearAnimeLikes()
    setUser(u)

    return true
  }, [])

  const context = useMemo<Context>(
    () => ({
      clearAnimeLikes,
      toggleAnimeLike,
    }),
    [clearAnimeLikes, toggleAnimeLike],
  )

  return (
    <UserActionsContext.Provider value={context}>
      {children}
    </UserActionsContext.Provider>
  )
}
