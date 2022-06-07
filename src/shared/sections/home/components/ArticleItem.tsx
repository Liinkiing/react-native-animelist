import type { FC, ReactElement } from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { Article } from '../../../../__stubs__/articles'

interface Props {
  readonly article: Article
  readonly onPress?: TouchableOpacityProps['onPress']
}

export function ArticleItem({ article, onPress }: Props): ReactElement {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, backgroundColor: article.color }}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 64,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
  },
})
