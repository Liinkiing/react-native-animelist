import type { User } from '../@types/auth'
import { UserService } from './user'

class AuthServiceApp {
  public login = async ({
    username,
    password,
  }: {
    username: string
    password: string
  }): Promise<User> => {
    return UserService.saveUser({ username, likes: [] })
  }

  public logout = async (): Promise<boolean> => {
    return UserService.removeUser()
  }
}

export const AuthService = new AuthServiceApp()
