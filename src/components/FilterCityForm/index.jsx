import React from 'react'

import { Container } from './styles'

export function FilterCityForm() {
  return (
    <Container>
      <input placeholder="Nome do município..." type="text" />
      <button>Aplicar</button>
    </Container>
  )
}
