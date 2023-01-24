import React from 'react'

import { Container } from './styles'

export function FilterCityForm() {
  return (
    <Container>
      <form>
        <input placeholder="Nome do município..." type="text" />
        <button type="submit" value="submit">
          Aplicar
        </button>
      </form>
    </Container>
  )
}
