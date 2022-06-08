import AsyncStorage from '@react-native-async-storage/async-storage'
import type { SerializedAnime, User } from '../@types/auth'

const USER_KEY = '@myanimelist_user'

class AuthServiceApp {
  public getUser = async (): Promise<User | null> => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (!user) {
      return null
    }

    return JSON.parse(user) as User
  }

  public toggleAnimeLike = async (
    anime: SerializedAnime,
  ): Promise<User | null> => {
    const user = await this.getUser()
    if (!user) return null
    let newUser: User = { ...user }
    newUser = user.likes.some(like => like.mal_id === anime.mal_id)
      ? {
          ...newUser,
          likes: [
            ...newUser.likes.filter(like => like.mal_id !== anime.mal_id),
          ],
        }
      : {
          ...newUser,
          likes: [anime, ...newUser.likes],
        }

    await AsyncStorage.mergeItem(USER_KEY, JSON.stringify(newUser))

    return newUser
  }

  public login = async ({
    username,
    password,
  }: {
    username: string
    password: string
  }): Promise<User> => {
    const user: User = { username, likes: [] }
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))

    return user
  }

  public logout = async (): Promise<boolean> => {
    await AsyncStorage.removeItem(USER_KEY)

    return true
  }
}

export const AuthService = new AuthServiceApp()
