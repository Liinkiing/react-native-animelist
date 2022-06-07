import type { ReactElement } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import type { RootStackScreenProps } from '../AppNavigator'
import type { Article } from '../../__stubs__/articles'
import { ARTICLES } from '../../__stubs__/articles'
import { ArticleItem } from '../../shared/sections/home/components/ArticleItem'

export function HomePage({ navigation }: RootStackScreenProps): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to profile page"
        onPress={() => navigation.navigate('Profile')}
      />
      <FlatList<Article>
        data={ARTICLES}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ArticleItem
            article={item}
            onPress={() =>
              navigation.navigate('ArticleDetail', { id: item.id.toString() })
            }
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
