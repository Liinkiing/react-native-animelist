export interface SingleResponse<T> {
  data: T
}

export interface PaginatedResponse<T> {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
  data: T[]
}

export interface Episode {
  mal_id: number
  url: string
  title: string
  title_japanese: string
  title_romanji: string
  aired: string | null
  filler: boolean
  recap: boolean
  forum_url: string
}

interface Aired {
  from: Date
  to: null
  prop: Prop
  string: string
}

interface Prop {
  from: From
  to: From
}

interface From {
  day: number | null
  month: number | null
  year: number | null
}

interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

interface Demographic {
  mal_id: number
  type: 'anime'
  name: string
  url: string
}

interface Image {
  image_url: string
  small_image_url: string
  large_image_url: string
}

interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images
}

interface Images {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export type AnimePictures = SingleResponse<Array<Record<'jpg' | 'webp', Image>>>

export interface Anime {
  mal_id: number
  url: string
  images: Record<'jpg' | 'webp', Image>
  trailer: Trailer
  title: string
  title_english: null
  title_japanese: string
  title_synonyms: any[]
  type: string
  source: string
  episodes: number | null
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: null
  season: string
  year: number
  broadcast: Broadcast
  producers: Demographic[]
  licensors: any[]
  studios: Demographic[]
  genres: Demographic[]
  explicit_genres: any[]
  themes: Demographic[]
  demographics: Demographic[]
}
