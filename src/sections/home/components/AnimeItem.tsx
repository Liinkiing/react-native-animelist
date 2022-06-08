import type { ReactElement } from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image, VStack, HStack, Text } from 'native-base'
import type { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'
import type { Anime } from '../../../@types/api/jikan'

interface Props extends IVStackProps {
  readonly anime: Anime
  readonly onPress?: TouchableOpacityProps['onPress']
}

export function AnimeItem({ anime, onPress, ...props }: Props): ReactElement {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack
        position="relative"
        height={220}
        overflow="hidden"
        borderRadius="md"
        bg="red.300"
        {...props}
      >
        <Image
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          top={0}
          width="100%"
          height={null}
          alt={anime.title}
          source={{ uri: anime.images.jpg.large_image_url }}
        />
        <HStack p={4} alignItems="center" mt="auto" bg="rgba(0,0,0, 0.5)">
          <Text color="white">{anime.title}</Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}
