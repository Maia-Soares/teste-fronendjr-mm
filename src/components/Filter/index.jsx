import { HiOutlineFilter } from 'react-icons/hi'

import { Container } from './styles'

export function Filter({ ...rest }) {
  return (
    <Container {...rest}>
      <span>Filtro</span>
      <HiOutlineFilter />
    </Container>
  )
}
