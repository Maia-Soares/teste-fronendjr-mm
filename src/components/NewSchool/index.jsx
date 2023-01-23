import React from 'react'

import { Container } from './styles'

export function NewSchool() {
  return (
    <Container>
      <input placeholder="Nome da escola" type="text" />
      <input placeholder="Nome do diretor" type="text" />
      <fieldset id="Location">
        <legend>Localização da escola</legend>
        <input type="checkbox" name="Locations" id="Local1" value="local1" />
        <label For="Local1">Urbana</label>
        <input type="checkbox" name="Locations" id="Local2" value="local2" />
        <label For="Local2">Rural</label>
      </fieldset>

      <fieldset id="Periods">
        <legend>Turnos</legend>
        <input type="checkbox" name="Periods" id="Period1" value="manha" />
        <label For="Period1">Manhã</label>
        <input type="checkbox" name="Periods" id="Period2" value="tarde" />
        <label For="Period2">Tarde</label>
        <input type="checkbox" name="Periods" id="Period3" value="noite" />
        <label For="Period3">Noite</label>
        <input type="checkbox" name="Periods" id="Period4" value="integral" />
        <label For="Period4">Integral</label>
      </fieldset>
      <button type="submit" value="Enviar">
        Cadastrar
      </button>
    </Container>
  )
}
