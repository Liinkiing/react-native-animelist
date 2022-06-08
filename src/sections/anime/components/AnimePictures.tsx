import type { ReactElement } from 'react'
import { FlatList, Heading, Image, Text, VStack } from 'native-base'
import { useQuery } from 'react-query'
import { ActivityIndicator } from 'react-native'
import type { Anime } from '../../../@types/api/jikan'
import { JikanClient } from '../../../api/jikan/client'

interface Props {
  readonly fallback: ReactElement
  readonly anime: Anime
}

export function AnimePictures({ anime, fallback }: Props): ReactElement {
  const { data, status } = useQuery(['anime', anime.mal_id, 'pictures'], () =>
    JikanClient.getAnimePictures(anime.mal_id.toString()),
  )
  if (status === 'success' && data && data.data.length === 0) return fallback

  return (
    <VStack space={2}>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? (
        <Text color="red.600">Error while fetching pictures</Text>
      ) : null}
      {status === 'success' && data ? (
        <>
          <Heading>Pictures ({data.data.length})</Heading>
          <FlatList
            horizontal
            data={data.data}
            keyExtractor={item => item.jpg.large_image_url}
            renderItem={({ item }) => (
              <Image
                alt=""
                borderRadius="md"
                mr={4}
                source={{ uri: item.jpg.large_image_url }}
                key={item.jpg.large_image_url}
                width={200}
                height={380}
              />
            )}
          />
        </>
      ) : null}
    </VStack>
  )
}
