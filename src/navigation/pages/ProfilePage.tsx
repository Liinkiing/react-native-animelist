import type { ReactElement } from 'react'
import { FlatList, Heading, VStack } from 'native-base'
import { Button } from 'react-native'
import { Page } from '../../shared/layout/Page'
import { useAuth } from '../../shared/providers/AuthProvider'
import { AnimeItem } from '../../sections/home/components/AnimeItem'
import type { SerializedAnime } from '../../@types/auth'
import type { AuthenticatedStackScreenProps } from '../stacks/AuthenticatedStack'
import { useUserActions } from '../../shared/providers/UserActionsProvider'

export function ProfilePage({
  navigation,
}: AuthenticatedStackScreenProps): ReactElement {
  const { user } = useAuth()
  const { clearAnimeLikes } = useUserActions()

  return (
    <Page p={4}>
      <VStack space={4}>
        <Heading>Welcome, {user.username}</Heading>
        {user.likes.length > 0 ? (
          <VStack space={2}>
            <Heading size="md">
              Your favorites animes ({user.likes.length})
            </Heading>
            <FlatList<SerializedAnime>
              horizontal
              data={user.likes}
              keyExtractor={item => item.mal_id.toString()}
              renderItem={({ item }) => (
                <AnimeItem
                  onPress={() => {
                    navigation.navigate('AnimeDetail', { anime: item })
                  }}
                  width={260}
                  height={400}
                  mr={4}
                  showLike={false}
                  anime={item}
                />
              )}
            />
            <Button title="Clear favorites" onPress={clearAnimeLikes} />
          </VStack>
        ) : (
          <Heading size="md">No favorite animes :(</Heading>
        )}
      </VStack>
    </Page>
  )
}
