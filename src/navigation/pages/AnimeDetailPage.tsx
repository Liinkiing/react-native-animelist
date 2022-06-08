import type { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import { Heading, Image, Text, VStack } from 'native-base'
import { useQuery } from 'react-query'
import { JikanClient } from '../../api/jikan/client'
import { Page } from '../../shared/layout/Page'
import { ShowMore } from '../../shared/components/ShowMore'
import { AnimeMetrics } from '../../sections/anime/components/AnimeMetrics'
import type { AuthenticatedStackScreenProps } from '../stacks/AuthenticatedStack'

export function AnimeDetailPage({
  route,
}: AuthenticatedStackScreenProps): ReactElement {
  const id = route.params?.anime?.mal_id?.toString() ?? ''
  const { status, data: anime } = useQuery(['anime', id], () =>
    JikanClient.getAnime(id),
  )

  return (
    <Page px={0} isScrollView>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? <Text color="red.300">Error</Text> : null}
      {status === 'success' && anime ? (
        <VStack>
          <Image
            width="100%"
            height={180}
            alt={anime.title}
            source={{ uri: anime.images.jpg.large_image_url }}
          />
          <VStack space={4} p={4}>
            <AnimeMetrics anime={anime} />
            <VStack space={2}>
              <Heading>Synopsis</Heading>
              <ShowMore noOfLines={4}>{anime.synopsis}</ShowMore>
            </VStack>
          </VStack>
        </VStack>
      ) : null}
    </Page>
  )
}
