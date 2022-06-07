import type { ReactElement } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export function ProfilePage(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to profile page</Text>
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
