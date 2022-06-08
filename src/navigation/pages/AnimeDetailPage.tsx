import type { ReactElement } from 'react'
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native'
import { Heading, Image, Text, VStack } from 'native-base'
import { useQuery } from 'react-query'
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { useState } from 'react'
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
  const [imageHovered, setImageHovered] = useState(false)
  const animatedImageStyle = useAnimatedStyle(() => ({
    height: withSpring(imageHovered ? 600 : 180, {
      damping: 67,
    }),
    width: '100%',
  }))

  return (
    <Page px={0} isScrollView>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? <Text color="red.300">Error</Text> : null}
      {status === 'success' && anime ? (
        <VStack>
          <TouchableOpacity onPress={() => setImageHovered(v => !v)}>
            <Animated.Image
              style={animatedImageStyle}
              source={{ uri: anime.images.jpg.large_image_url }}
            />
          </TouchableOpacity>
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
