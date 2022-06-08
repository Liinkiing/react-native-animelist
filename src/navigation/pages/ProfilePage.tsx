import type { ReactElement } from 'react'
import { FlatList, Heading, VStack } from 'native-base'
import { Page } from '../../shared/layout/Page'
import { useAuth } from '../../shared/providers/AuthProvider'
import { AnimeItem } from '../../sections/home/components/AnimeItem'
import type { SerializedAnime } from '../../@types/auth'

export function ProfilePage(): ReactElement {
  const { user } = useAuth()
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
                  width={250}
                  height={300}
                  mr={4}
                  showLike={false}
                  anime={item}
                />
              )}
            />
          </VStack>
        ) : null}
      </VStack>
    </Page>
  )
}
