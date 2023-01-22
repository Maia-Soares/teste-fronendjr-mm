import { useRouter } from 'next/router'

import { Header } from '../../components/Header'

import { Container, Content, Background } from './styles'

export function HomeView() {
  const router = useRouter()

  return (
    <Container>
      <Content>
        <Header />

        <h1>O que vamos fazer hoje?</h1>
        <div>
          <button>Conselho Tutelar</button>
          <button onClick={() => router.push('/schools')}>Escolas</button>
          <button>Calendário Escolar</button>
        </div>
      </Content>

      <Background />
    </Container>
  )
}
