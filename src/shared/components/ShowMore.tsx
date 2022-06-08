import type { ReactElement, ReactNode } from 'react'
import type { ITextProps } from 'native-base'
import { Text } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

interface Props extends Omit<ITextProps, 'isTruncated'> {
  readonly children?: ReactNode
}

export function ShowMore({
  children,
  noOfLines,
  ...props
}: Props): ReactElement {
  const [isTruncated, setIsTruncated] = useState(true)
  return (
    <>
      <Text
        {...props}
        noOfLines={isTruncated ? noOfLines : undefined}
        isTruncated={isTruncated}
      >
        {children}
      </Text>
      <TouchableOpacity onPress={() => setIsTruncated(v => !v)}>
        {isTruncated ? (
          <Text color="blue.600">Show more...</Text>
        ) : (
          <Text color="blue.600">Show less</Text>
        )}
      </TouchableOpacity>
    </>
  )
}
