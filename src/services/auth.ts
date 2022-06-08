import AsyncStorage from '@react-native-async-storage/async-storage'
import type { User } from '../@types/auth'

const USER_KEY = 'user'

class AuthServiceApp {
  public getUser = async (): Promise<User | null> => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (!user) {
      return null
    }

    return JSON.parse(user) as User
  }

  public login = async ({
    username,
    password,
  }: {
    username: string
    password: string
  }): Promise<User> => {
    const user: User = { username }
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))

    return user
  }

  public logout = async (): Promise<boolean> => {
    await AsyncStorage.removeItem(USER_KEY)

    return true
  }
}

export const AuthService = new AuthServiceApp()
