import type { ReactElement } from 'react'
import { Heading, Text } from 'native-base'
import { Page } from '../../shared/layout/Page'
import { useAuth } from '../../shared/providers/AuthProvider'

export function ProfilePage(): ReactElement {
  const { user } = useAuth()
  return (
    <Page p={4}>
      <Heading>Welcome, {user.username}</Heading>
    </Page>
  )
}
