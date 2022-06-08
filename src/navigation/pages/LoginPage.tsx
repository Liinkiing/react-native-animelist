import type { ReactElement } from 'react'
import { Text, Input, Stack, FormControl, Button, VStack } from 'native-base'
import { useRef, useState } from 'react'
import { Page } from '../../shared/layout/Page'
import { useAuth } from '../../shared/providers/AuthProvider'

export function LoginPage(): ReactElement {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    login(username, password)
  }

  return (
    <Page p={4}>
      <VStack space={4}>
        <FormControl>
          <Stack space={4}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                value={username}
                onChangeText={text => setUsername(text)}
                variant="underlined"
                p={2}
                placeholder="Username"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={password}
                onChangeText={text => setPassword(text)}
                variant="underlined"
                p={2}
                placeholder="Password"
              />
            </Stack>
          </Stack>
        </FormControl>
        <Button onPress={handleSubmit}>Submit</Button>
      </VStack>
    </Page>
  )
}
