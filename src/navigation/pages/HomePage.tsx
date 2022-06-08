import type { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import { useQuery } from 'react-query'
import { FlatList, Text } from 'native-base'
import { JikanClient } from '../../api/jikan/client'
import type { Anime } from '../../@types/api/jikan'
import { AnimeItem } from '../../sections/home/components/AnimeItem'
import { Page } from '../../shared/layout/Page'
import type { AuthenticatedStackScreenProps } from '../stacks/AuthenticatedStack'
import { useAuth } from '../../shared/providers/AuthProvider'

export function HomePage({
  navigation,
}: AuthenticatedStackScreenProps): ReactElement {
  const { data, status } = useQuery('seasonalAnimes', JikanClient.getSeasonal)
  const { user, toggleAnimeLike } = useAuth()
  return (
    <Page>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? <Text color="red.300">Error</Text> : null}
      {status === 'success' && data ? (
        <FlatList<Anime>
          py={4}
          data={data.data ?? []}
          keyExtractor={item => item.mal_id.toString()}
          renderItem={({ item }) => (
            <AnimeItem
              onLikePress={() => toggleAnimeLike(item)}
              hasLiked={user.likes.some(like => like.mal_id === item.mal_id)}
              mb={4}
              anime={item}
              onPress={() =>
                navigation.navigate('AnimeDetail', {
                  id: item.mal_id.toString(),
                  title: item.title,
                })
              }
            />
          )}
        />
      ) : null}
    </Page>
  )
}
