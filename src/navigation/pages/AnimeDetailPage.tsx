import type { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import { Text, VStack } from 'native-base'
import { useQuery } from 'react-query'
import type { RootStackScreenProps } from '../AppNavigator'
import { JikanClient } from '../../api/jikan/client'

export function AnimeDetailPage({
  route,
  navigation,
}: RootStackScreenProps): ReactElement {
  const id = route.params?.id ?? ''
  const { status, data } = useQuery(['anime', id], () =>
    JikanClient.getAnime(id),
  )

  return (
    <VStack safeArea>
      {status === 'loading' ? <ActivityIndicator /> : null}
      {status === 'error' ? <Text color="red.300">Error</Text> : null}
      {status === 'success' && data ? <Text>{data.title}</Text> : null}
    </VStack>
  )
}
