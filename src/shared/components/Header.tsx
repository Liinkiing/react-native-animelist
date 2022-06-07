import type { ReactElement } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import type { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

interface Props extends NativeStackHeaderProps {
  readonly title: string
}

export function Header({ title }: Props): ReactElement {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.header}>
      {navigation.canGoBack() ? (
        <Button title="Back" onPress={() => navigation.goBack()} />
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    padding: 12,
    fontSize: 24,
  },
})
