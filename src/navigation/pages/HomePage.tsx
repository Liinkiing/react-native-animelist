import type { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import { useQuery } from 'react-query'
import { Text, FlatList } from 'native-base'
import type { RootStackScreenProps } from '../AppNavigator'
import { JikanClient } from '../../api/jikan/client'
import type { Anime } from '../../@types/api/jikan'
import { AnimeItem } from '../../sections/home/components/AnimeItem'
import { Page } from '../../shared/layout/Page'

export function HomePage({ navigation }: RootStackScreenProps): ReactElement {
  const { data, status } = useQuery('seasonalAnimes', JikanClient.getSeasonal)

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
