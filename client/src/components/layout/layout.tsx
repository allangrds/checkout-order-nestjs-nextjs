import { Button } from '../button'
import { Container } from '../container'

import * as s from './styles'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <>
    <s.Header>
      <Container>
        <s.Nav>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => console.log('cart')}
          >
            Cart (0)
          </Button>
        </s.Nav>
      </Container>
    </s.Header>
    <main>
      <Container>
        {children}
      </Container>
    </main>
  </>
)
