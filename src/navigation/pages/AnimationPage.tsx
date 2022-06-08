import type { ReactElement } from 'react'
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'
import { useAnimatedStyle } from 'react-native-reanimated'
import { useState } from 'react'
import { Ball } from '../../shared/components/Ball'

export function AnimationPage(): ReactElement {
  const [ballVisible, setBallVisible] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Animation page</Text>
      <Button
        title="Show Ball"
        onPress={() => {
          setBallVisible(v => !v)
        }}
      />
      {ballVisible ? <Ball /> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
