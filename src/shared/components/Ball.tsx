import type { ReactElement } from 'react'
import type { PressableProps, ViewStyle } from 'react-native'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { useState } from 'react'

interface Props {
  readonly style?: ViewStyle
}

export function Ball({ style }: Props): ReactElement {
  const [selected, setSelected] = useState(false)
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(selected ? '#ff0000' : '#ffff00'),
    transform: [{ scale: withSpring(selected ? 1.5 : 1) }],
  }))
  return (
    <Pressable
      onPress={() => {
        setSelected(v => !v)
      }}
    >
      <Animated.View
        entering={FadeInUp}
        exiting={FadeInDown}
        style={[style, animatedStyle, styles.container]}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 64,
    height: 64,
  },
})
