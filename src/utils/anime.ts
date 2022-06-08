import type { Anime } from '../@types/api/jikan'
import type { SerializedAnime } from '../@types/auth'

export const serializeAnime = (anime: Anime): SerializedAnime => ({
  mal_id: anime.mal_id,
  images: anime.images,
  title: anime.title,
})
