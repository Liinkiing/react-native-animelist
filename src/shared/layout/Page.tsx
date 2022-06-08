import type { ReactElement, ReactNode } from 'react'
import type { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'
import { ScrollView, VStack } from 'native-base'

interface Props extends IVStackProps {
  readonly children?: ReactNode
  readonly isScrollView?: boolean
}

export function Page({
  children,
  isScrollView = false,
  ...props
}: Props): ReactElement {
  if (isScrollView) {
    return (
      <ScrollView>
        <VStack px={4} {...props}>
          {children}
        </VStack>
      </ScrollView>
    )
  }
  return (
    <VStack px={4} {...props}>
      {children}
    </VStack>
  )
}
