import type {
  Anime,
  PaginatedResponse,
  SingleResponse,
} from '../../@types/api/jikan'

class JikanClientApp {
  private readonly baseUrl = 'https://api.jikan.moe/v4'

  getAnime = async (id: string): Promise<Anime> => {
    const { data } = await this.get<SingleResponse<Anime>>(`/anime/${id}`)
    return data
  }

  getSeasonal = (): Promise<PaginatedResponse<Anime>> => {
    return this.get<PaginatedResponse<Anime>>(`/seasons/now`)
  }

  private get = async <T>(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<T> => {
    const queryParams = new URLSearchParams(params ?? {})
    const response = await fetch(`${this.baseUrl}${endpoint}?${queryParams}`, {
      headers: {
        'User-Agent': 'animeapp/1.0',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }
}

export const JikanClient = new JikanClientApp()
