import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { Container } from './styles'

export function Header({ title = '' }) {
  const router = useRouter()

  return (
    <Container title={title}>
      <button onClick={() => router.push('/home')}>
        <img
          src="https://mobieduca.me/imgs/mobiazul.png"
          alt="Logo mobieduca.me"
        />
      </button>

      <Link href="/details">
        {title ? (
          title
        ) : (
          <>
            Sobre desenvolvedor
            <AiOutlineInfoCircle />
          </>
        )}
      </Link>
    </Container>
  )
}
