import type { Anime } from '../api/jikan'

type SerializedAnime = Pick<Anime, 'mal_id' | 'title' | 'images'>

export interface User {
  readonly username: string
  readonly likes: SerializedAnime[]
}
