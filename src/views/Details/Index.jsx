import { Container, Content, PageBack } from './styles'

import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details() {
  return (
    <Container>
      <Content>
        <div>
          <h1>Sobre a desenvolvedora</h1>
          <p>
            Desenvolvedora Front-end Jr que decidiu por fazer uma transinção de
            carreira para entrar na área de TI. Atualmente seguindo na carreira
            como fron-end, focando nos estudos em REACT.JS.
          </p>
          <div>
            <img
              src="https://media.licdn.com/dms/image/C5603AQEWwGgBtXVu3w/profile-displayphoto-shrink_800_800/0/1637189067186?e=1679529600&v=beta&t=Hr5pjU0aHBVuAOiDp7YASyDf-pvFk60mG7srk2RBvD4"
              alt="Foto da desenvolvedora"
            />
          </div>
        </div>
        <Section title="Sugestões">
          <p>
            Como sugestão, acredito ser interessante pensar na interface e
            funcionamento desta aplicação de forma bem intuitiva e objetiva. Sem
            tantos detalhes ou secções complexa que possas frustrar ou estressa
            o uso do site. Por clientes e administradores.
          </p>
        </Section>
        <Section title="Dificuldades encontradas">
          <p>
            O maior conflito encontrado no momento da criação da presente
            aplicação, foi com relação ao acesso a API.
          </p>
        </Section>
        <Section title="Links Úteis">
          <a
            href="https://www.linkedin.com/in/maiisoares/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Maia-Soares"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Section>
      </Content>
      <PageBack to="/">
        <Button title="Voltar" />
      </PageBack>
    </Container>
  )
}
