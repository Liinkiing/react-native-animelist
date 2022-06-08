import type { ReactElement, ReactNode } from 'react'
import type { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'
import { VStack } from 'native-base'

interface Props extends IVStackProps {
  readonly children?: ReactNode
}

export function Page({ children, ...props }: Props): ReactElement {
  return (
    <VStack px={4} {...props}>
      {children}
    </VStack>
  )
}
