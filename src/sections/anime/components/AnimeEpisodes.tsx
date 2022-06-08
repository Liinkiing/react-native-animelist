import type { ReactElement } from 'react'
import {
  Heading,
  HStack,
  Icon,
  Pressable,
  Stagger,
  Text,
  VStack,
} from 'native-base'
import { useQuery } from 'react-query'
import { ActivityIndicator, Linking, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import type { Anime, Episode } from '../../../@types/api/jikan'
import { JikanClient } from '../../../api/jikan/client'

interface Props {
  readonly fallback: ReactElement
  readonly anime: Anime
}

function EpisodeRow({ episode }: { episode: Episode }): ReactElement {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(episode.url)
      }}
    >
      <HStack
        alignItems="baseline"
        py={2}
        borderBottomColor="gray.600"
        borderBottomWidth={1}
      >
        <Text isTruncated pr={6}>
          {episode.mal_id}. {episode.title}{' '}
          {episode.aired
            ? `(${new Date(episode.aired).toLocaleDateString()})`
            : null}
        </Text>
        <Pressable ml="auto">
          <Icon as={Ionicons} name="ios-arrow-forward-sharp" />
        </Pressable>
      </HStack>
    </TouchableOpacity>
  )
}

export function AnimeEpisodes({ anime, fallback }: Props): ReactElement {
  if (!anime.episodes || anime.episodes === 0) return fallback
  const { data, status } = useQuery(['anime', anime.mal_id, 'episodes'], () =>
    JikanClient.getAnimeEpisodes(anime.mal_id.toString()),
  )
  return (
    <VStack space={2}>
      <Heading>Episodes ({anime.episodes})</Heading>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? (
        <Text color="red.600">Error while fetching episodes</Text>
      ) : null}
      {status === 'success' && data ? (
        <VStack>
          <Stagger
            visible
            initial={{
              opacity: 0,
              translateX: 40,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                delay: 1,
                type: 'timing',
                duration: 500,
                stagger: {
                  offset: 30,
                },
              },
            }}
          >
            {data.data.map(episode => (
              <EpisodeRow key={episode.mal_id} episode={episode} />
            ))}
          </Stagger>
        </VStack>
      ) : null}
    </VStack>
  )
}
