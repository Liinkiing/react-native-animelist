import AsyncStorage from '@react-native-async-storage/async-storage'
import type { User, SerializedAnime } from '../@types/auth'

const USER_KEY = '@myanimelist_user'

class UserServiceApp {
  public getUser = async (): Promise<User | null> => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (!user) {
      return null
    }

    return JSON.parse(user) as User
  }

  public saveUser = async (user: User): Promise<User> => {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))

    return user
  }

  public removeUser = async (): Promise<boolean> => {
    await AsyncStorage.removeItem(USER_KEY)

    return true
  }

  public clearAnimeLikes = async (): Promise<User | null> => {
    const user = await this.getUser()
    if (!user) {
      return null
    }
    const newUser: User = { ...user, likes: [] }

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(newUser))

    return newUser
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

    if (AsyncStorage.mergeItem) {
      await AsyncStorage.mergeItem(USER_KEY, JSON.stringify(newUser))
    }

    return newUser
  }
}

export const UserService = new UserServiceApp()
