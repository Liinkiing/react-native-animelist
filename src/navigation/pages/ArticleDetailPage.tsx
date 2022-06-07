import type { ReactElement } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import type { RootStackScreenProps } from '../AppNavigator'
import { ARTICLES } from '../../__stubs__/articles'

export function ArticleDetailPage({
  route,
}: RootStackScreenProps): ReactElement {
  const id = route.params?.id
  const article = ARTICLES.find(a => a.id.toString() === id)
  if (!id || !article) {
    throw new Error('id is required')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to article detail page page with id {id}</Text>
      <Text>{article.body}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
