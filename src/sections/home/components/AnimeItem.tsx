import type { ReactElement } from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { HStack, Image, Text, VStack } from 'native-base'
import type { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'
import type { SerializedAnime } from '../../../@types/auth'
import { LikeButton } from '../../anime/components/LikeButton'

interface Props extends IVStackProps {
  readonly anime: SerializedAnime
  readonly showLike: boolean
  readonly onPress?: TouchableOpacityProps['onPress']
}

export function AnimeItem({
  anime,
  onPress,
  showLike,
  ...props
}: Props): ReactElement {
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
        <HStack p={4} alignItems="baseline" mt="auto" bg="rgba(0,0,0, 0.5)">
          <Text isTruncated pr={8} mr="auto" color="white">
            {anime.title}
          </Text>
          {showLike ? <LikeButton anime={anime} /> : null}
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}
