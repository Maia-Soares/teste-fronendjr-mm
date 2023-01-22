import { useState } from 'react'
import { useRouter } from 'next/router'

import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background, HStack } from './styles'

export function Login() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormUpdate = (event, id) => {
    const value = event.target.value
    if (id === 'email') {
      // validated methods
      if (event.target.value.match('@')) console.log('validated')
      setEmail(value)
    }
    if (id === 'password') {
      // validated methods
      if (event.target.value.length >= 6) console.log('validated')
      setPassword(value)
    }
  }

  return (
    <Container>
      <img
        src="https://mobieduca.me/imgs/mobiazul.png"
        alt="Logo mobieduca.me"
      />

      <Form>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => handleFormUpdate(event, 'email')}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={event => handleFormUpdate(event, 'password')}
        />

        <Button title="Entrar" onClick={() => router.push('/home')} />

        <HStack>
          <a href="#">Primeiro acesso</a>
          <a href="#">Esqueci a senha</a>
        </HStack>
      </Form>

      <Background />
    </Container>
  )
}
