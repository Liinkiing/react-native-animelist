import type { ReactElement } from 'react'
import type { IIconProps } from 'native-base'
import { Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '../../../shared/providers/AuthProvider'
import type { SerializedAnime } from '../../../@types/auth'

interface Props extends Omit<IIconProps, 'name' | 'as'> {
  readonly anime: SerializedAnime
}

export function LikeButton({ anime, ...props }: Props): ReactElement {
  const { user, toggleAnimeLike } = useAuth()
  const hasLiked = user.likes.some(
    like => like.mal_id.toString() === anime.mal_id.toString(),
  )

  return (
    <TouchableOpacity onPress={() => toggleAnimeLike(anime)}>
      <Icon
        as={Ionicons}
        name={hasLiked ? 'ios-heart' : 'ios-heart-outline'}
        size="md"
        color="white"
        {...props}
      />
    </TouchableOpacity>
  )
}
