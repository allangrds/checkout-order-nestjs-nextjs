import { useRouter } from 'next/router'

import { Button, Container } from '@/components'
import * as S from '@/styles/checkout-success.styles'

const CheckoutSuccess = () => {
  const router = useRouter()

  const handleOnGoBack = () => router.replace('/')

  return (
    <Container>
      <S.Content>
        <S.Text>Thank you for your purchase!</S.Text>
        <Button
          colorScheme="gray"
          variant="outline"
          onClick={handleOnGoBack}
          fullWidth
        >
          Go back
        </Button>
      </S.Content>
    </Container>
  )
}

export default CheckoutSuccess
